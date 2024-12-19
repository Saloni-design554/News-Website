const Categorymodel = require("../models/category.model");

// Create Category function

const createCategory = async (req, res) => {
  try {
    const { categoryName, text, isStatus } = req.body;
    const image = req.file ? req.file.path : null; 
    const newCategory = new Categorymodel({
      categoryName,
      text,
      image,
      isStatus,
    });
    const savedCategory = await newCategory.save();
    res.status(201).json({message: "Category created successfully!", category: savedCategory, statusCode: 201});
  } catch (err) {console.error(err);
     res.status(400).json({message: "An error occurred while creating category data", statusCode: 400,
    });
  }
};

// Find a Category function

const getCategory = async (req, res) => {
  try {
    const getCategory = await Categorymodel.findById(req.params.id);
    res.status(200).json({ message: "Get a category successfully", getCategory, statusCode: 200 });
  } catch (error) {
    res.status(400).json({ message: "An error occurred while get a category data", statusCode: 400 });
  }
};

// Findall Category function

const getAllCategories = async (req, res) => {
  try {
    const getCategories = await Categorymodel.find();
    res.status(200).json({ message: "Get all category list successfully", getCategories, statusCode: 200 });
  } catch (error) {
    res.status(400).json({ message: "An error occurred while getall category data", statusCode: 400 });
  }
};

// Update Category function

const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const { categoryName, text, isStatus } = req.body;
    const image = req.file ? req.file.path : undefined; 

    const updateData = {};

    if (categoryName) updateData.categoryName = categoryName;
    if (text) updateData.text = text;
    if (typeof isStatus !== 'undefined') updateData.isStatus = isStatus; 
    if (image) updateData.image = image;

    // Update category using the dynamic updateData object
    const updatedCategory = await Categorymodel.findByIdAndUpdate(categoryId, updateData, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found', statusCode: 404 });
    }
    res.status(200).json({ message: 'Category updated successfully', data: updatedCategory, statusCode: 200 });
  } catch (error) {
    console.error(error); 
    res.status(400).json({ message: 'Error updating category', statusCode: 400 });
  }
};

// Delete Category function

const destroyCategory = async (req, res) => {
  const { id } = req.body;
  await Categorymodel.findByIdAndRemove(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Category data not found.", statusCode: (404) });
      } else {
        res.status(200).json({ message: "Category data deleted successfully!", statusCode: (200) });
      }
    })
    .catch((error) => {
      res.status(400).json({ message: "An error occurred while deleting Category data", statusCode: (400) });
    });
};

module.exports = {
  createCategory,
  getCategory,
  getAllCategories,
  updateCategory,
  destroyCategory
};