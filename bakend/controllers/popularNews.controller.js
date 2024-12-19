const PopularNewsmodel = require("../models/popularNews.model");

// Create latest news function

const createPopularNews = async (req, res) => {
  try {
    const { text } = req.body;
    const image = req.file ? req.file.path : null;
    const newPopularNews = new PopularNewsmodel({
      text,
      image,
    });
    const savedPopularNews = await newPopularNews.save();
    res.status(201).json({ message: "Popular news created successfully!", popularNews: savedPopularNews, statusCode: 201 });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "An error occurred while creating popular news data", statusCode: 400,
    });
  }
};

// Find a latest news function

const getPopularNews = async (req, res) => {
  try {
    const getPopularNews = await PopularNewsmodel.findById(req.params.id);
    res.status(200).json({ message: "Get popular news successfully", getPopularNews, statusCode: 200 });
  } catch (error) {
    res.status(400).json({ message: "An error occurred while get a popular news data", statusCode: 400 });
  }
};

// Find all latest news function

const getAllPopularNews = async (req, res) => {
  try {
    const getAllPopularNews = await PopularNewsmodel.find();
    res.status(200).json({ message: "Get all popular news list successfully", getAllPopularNews, statusCode: 200 });
  } catch (error) {
    res.status(400).json({ message: "An error occurred while getall popular news data", statusCode: 400 });
  }
};

// Update latest news function

const updatePopularNews = async (req, res) => {
  try {
    const popularNewsId = req.params.id;
    const { text } = req.body;
    const image = req.file ? req.file.path : undefined;
    
    const updateData = {};

    if (text) updateData.text = text;
    if (image) updateData.image = image;

    // Update latest using the dynamic updateData object
    const updatedPopularNews = await PopularNewsmodel.findByIdAndUpdate(popularNewsId, updateData, { new: true });
    if (!updatedPopularNews) {
      return res.status(404).json({ message: 'Popular news not found', statusCode: 404 });
    }
    res.status(200).json({ message: 'Popular news updated successfully', data: updatedPopularNews, statusCode: 200 });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating popular news', statusCode: 400 });
  }
};

// Delete latest news function

const destroyPopularNews = async (req, res) => {
  const { id } = req.body;
  await PopularNewsmodel.findByIdAndRemove(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Popular news data not found.", statusCode: (404) });
      } else {
        res.status(200).json({ message: "Popular news data deleted successfully!", statusCode: (200) });
      }
    })
    .catch((error) => {
      res.status(400).json({ message: "An error occurred while deleting popular news data", statusCode: (400) });
    });
};

module.exports = {
  createPopularNews,
  getPopularNews,
  getAllPopularNews,
  updatePopularNews,
  destroyPopularNews
};