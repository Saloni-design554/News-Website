const fetchSortedData = async (model, sortField = "createdAt", sortOrder = -1) => {
    try {
      // Sort using the provided field and order
      const data = await model.find().sort({ [sortField]: sortOrder });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  };

  
  module.exports = {
    fetchSortedData
  };