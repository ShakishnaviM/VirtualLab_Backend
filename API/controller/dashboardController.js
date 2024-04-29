import practicalRegister from "../models/practicalRegisterModel.js";

export const progress = async (req, res, next) => {

    const fetchPracticalStatistics = async (userID) => {
        try {
            // Fetch all practical data for the users
            const practicalData = await practicalRegister.find({ userID });
    
            // Find the latest in-progress practical
            const latestInProgressPractical = await practicalRegister.findOne({ userID, completed: false }, null, { sort: { updatedAt: -1 } });
    
            // Count completed and in-progress practicals for each Module
            const totalPracticals = 10;
            const practicalCounts = {
                Physics: { completed: 0, inProgress: 0 },
                Chemistry: { completed: 0, inProgress: 0 },
                Biology: { completed: 0, inProgress: 0 }
            };
    
            practicalData.forEach(item => {
                if (item.completed) {
                    practicalCounts[item.practicalSubject].completed++;
                } else {
                    practicalCounts[item.practicalSubject].inProgress++;
                }
            });
    
            // Calculate completed and in-progress percentages for each subject
            const percentages = {};
            for (const subject in practicalCounts) {
                const completedPercentage = (practicalCounts[subject].completed / totalPracticals * 100).toFixed(2);
                const inProgressPercentage = (practicalCounts[subject].inProgress / totalPracticals * 100).toFixed(2);
                percentages[subject] = { completed: completedPercentage, inProgress: inProgressPercentage };
            }
    
            return {
                percentages,
                latestInProgressPractical
            };
        } catch (error) {
            console.error('Error fetching practical status statistics:', error);
            throw error; // Propagate error for handling at higher level
        }
    };
    
    // Assuming req.body.userID contains the user ID
    const statistics = await fetchPracticalStatistics(req.body.userID);
    console.log(req.body.userID);
    res.send(statistics);
    
    
};