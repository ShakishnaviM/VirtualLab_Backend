import bioList from '../models/BioList.model.js';

export const getBioList = async (req, res) => {
    try {
        const listItem = await bioList.find({});
        res.status(200).json(listItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOneItem = async (req, res) => {
    try {
        const { id } = req.params;
        const oneItem = await bioList.findById(id);
        if (!oneItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(oneItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createItemList = async (req, res) => {
    try {
        const listItem = await bioList.create(req.body);
        res.status(201).json(listItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateItemList = async (req, res) => {
    try {
        const { id } = req.params;
        const updateOnelistItem = await bioList.findByIdAndUpdate(id, req.body, { new: true });
        if (!updateOnelistItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(updateOnelistItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteItemList = async (req, res) => {
    try {
        const { id } = req.params;
        const deletelistItem = await bioList.findByIdAndDelete(id);
        if (!deletelistItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

