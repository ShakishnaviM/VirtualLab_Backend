import physicsList from "../models/Physics.model.js";

const getPhysicsList = async (req, res) => {
    try {
        const listItem = await physicsList.find({});
        res.status(200).json(listItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneItem = async (req, res) => {
    try {
        const { id } = req.params;
        const oneItem = await physicsList.findById(id);
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
        const listItem = await physicsList.create(req.body);
        res.status(201).json(listItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateItemList = async (req, res) => {
    try {
        const { id } = req.params;
        const updateOnelistItem = await physicsList.findByIdAndUpdate(id, req.body, { new: true });
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
        const deletelistItem = await physicsList.findByIdAndDelete(id);
        if (!deletelistItem) {
            return res.status(404).json({ message: "Items not found" });
        }
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getPhysicsList,
    getOneItem,
    createItemList,
    updateItemList,
    deleteItemList
};
