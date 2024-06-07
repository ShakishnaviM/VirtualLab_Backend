import practicalRegister from "../models/practicalRegisterModel.js";

export const progress = async (req, res, next) => {
    console.log(req.body.userID);
    const fetchPracticalStatusStatistics = async (userID) => {
        try {
            // Fetch all practical data for the user
            const practicalData = await practicalRegister.find({ userID });

            //find latest in progress practical 
            const latestInProgressPractical = await practicalRegister.findOne({ userID, completed: false }, null, { sort: { updatedAt: -1 } });
            console.log(latestInProgressPractical);

            // Count completed and in-progress practicals for each subject
            const totalPracticals = 10; // This should be dynamic based on actual total practicals per subject if it varies
            const practicalCounts = {
                Physics: { completed: 0, inProgress: 0 },
                Chemistry: { completed: 0, inProgress: 0 },
                Biology: { completed: 0, inProgress: 0 },
                "Information Technology": { completed: 0, inProgress: 0 }
            };

            practicalData.forEach(item => {
                if (item.completed) {
                    practicalCounts[item.practicalSubject].completed++;
                } else {
                    practicalCounts[item.practicalSubject].inProgress++;
                }
            });

            // Calculate progress percentages for each subject
            const progress = {};
            for (const subject in practicalCounts) {
                const completedPercentage = (practicalCounts[subject].completed / totalPracticals * 100).toFixed(2);
                const inProgressPercentage = (practicalCounts[subject].inProgress / totalPracticals * 100).toFixed(2);
                progress[subject] = {
                    completed: completedPercentage,
                    inProgress: inProgressPercentage
                };
            }

            return {progress,latestInProgressPractical};
        } catch (error) {
            console.error('Error fetching practical status statistics:', error);
            throw error; // Propagate error for handling at higher level
        }
    };

    const userID = req.body.userID;
    const progressData = await fetchPracticalStatusStatistics(userID);
    res.send(progressData);
};
