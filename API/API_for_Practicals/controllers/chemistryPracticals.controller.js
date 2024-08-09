import ChemistryPracticals from '../models/chemistryPractical.model.js'


export const getItem = async (req, res) => {
  try {
    const listItem = await ChemistryPracticals.find({});
    res.status(200).json(listItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getOneItem = async (req, res) => {
    try {
        const { id } = req.params;
        const oneItem = await ChemistryPracticals.findById(id);
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
        const deletelistItem = await ChemistryPracticals.findByIdAndDelete(id);
        if (!deletelistItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


  
 