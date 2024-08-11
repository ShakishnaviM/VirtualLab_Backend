import BioPracticals from '../models/bioPracticals.model.js'


export const getItem = async (req, res) => {
  try {
    const listItem = await BioPracticals.find({});
    res.status(200).json(listItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getOneItem = async (req, res) => {
    try {
        const { id } = req.params;
        const oneItem = await BioPracticals.findById(id);
        if (!oneItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(oneItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteItemList = async (req, res) => {
    try {
        const { id } = req.params;
        const deletelistItem = await BioPracticals.findByIdAndDelete(id);
        if (!deletelistItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


  
 