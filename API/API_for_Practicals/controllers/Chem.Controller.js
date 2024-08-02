import chemistryList from "../models/Chem.model.js";

const getChemistryList = async (req, res) => {
    try {
        const listItem = await chemistryList.find({});
        res.status(200).json(listItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneItem = async (req, res) => {
    try {
        const { id } = req.params;
        const oneItem = await chemistryList.findById(id);
        if (!oneItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(oneItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createItemList = async (req, res) => {
    try {
        const listItem = await chemistryList.create(req.body);
        res.status(201).json(listItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateItemList = async (req, res) => {
    try {
        const { id } = req.params;
        const updateOnelistItem = await chemistryList.findByIdAndUpdate(id, req.body, { new: true });
        if (!updateOnelistItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(updateOnelistItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteItemList = async (req, res) => {
    try {
        const { id } = req.params;
        const deletelistItem = await chemistryList.findByIdAndDelete(id);
        if (!deletelistItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export  {
    getChemistryList,
    getOneItem,
    createItemList,
    updateItemList,
    deleteItemList
};
