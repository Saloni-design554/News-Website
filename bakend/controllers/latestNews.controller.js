const LatestNewsModel = require("../models/latestNews.model");
const fetchSortedData = require("../helper/sort");

// Create Latest news function

const createLatestNews = async (req, res) => {
  try {
    const {text} = req.body;
    const image = req.file ? req.file.path : null;
    const newLatestNews = new LatestNewsModel({
      text,
      image,
    });
    const savedLatestNews = await newLatestNews.save();
    res.status(201).json({ message: "Latest news created successfully!", latestNews: savedLatestNews, statusCode: 201 });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "An error occurred while creating Latest news data", statusCode: 400,
    });
  }
};

// Find a Latest news function

const getLatestNews = async (req, res) => {
  try {
    const getLatestNews = await LatestNewsModel.findById(req.params.id);
    res.status(200).json({ message: "Get a Latest news successfully", getLatestNews, statusCode: 200 });
  } catch (error) {
    res.status(400).json({ message: "An error occurred while get a Latest news data", statusCode: 400 });
  }
};

// Find all Latest news function

const getAllLatestNews = async (req, res) => {
  try {
    const getAllLatestNews = await  LatestNewsModel.find();
    res.status(200).json({ message: "Get all Latest news list successfully", getAllLatestNews, statusCode: 200 });
  } catch (error) {
    res.status(400).json({ message: "An error occurred while get all Latest news data", statusCode: 400 });
  }
};

// Update Latest news function

const updateLatestNews = async (req, res) => {
  try {
    const latestNewsId = req.params.id;
    const { text } = req.body;
    const image = req.file ? req.file.path : undefined;

    const updateData = {};

    if (text) updateData.text = text;
    if (image) updateData.image = image;

    // Update category using the dynamic updateData object
    const updatedLatestNews = await LatestNewsModel.findByIdAndUpdate(latestNewsId, updateData, { new: true });
    if (!updatedLatestNews) {
      return res.status(404).json({ message: 'Latest news not found', statusCode: 404 });
    }
    res.status(200).json({ message: 'Latest news updated successfully', data: updatedLatestNews, statusCode: 200 });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating Latest news', statusCode: 400 });
  }
};

// Delete Latest news function

const destroyLatestNews = async (req, res) => {
  const { id } = req.body;
  await LatestNewsModel.findByIdAndRemove(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Latest news data not found.", statusCode: (404) });
      } else {
        res.status(200).json({ message: "Latest news data deleted successfully!", statusCode: (200) });
      }
    })
    .catch((error) => {
      res.status(400).json({ message: "An error occurred while deleting Latest news data", statusCode: (400) });
    });
};

module.exports = {
  createLatestNews,
  getLatestNews,
  getAllLatestNews,
  updateLatestNews,
  destroyLatestNews
};


