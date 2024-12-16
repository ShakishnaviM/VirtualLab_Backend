import practicalRegister from "../models/practicalRegisterModel.js";

export const progress = async (req, res, next) => {
    const { userID } = req.params;
    console.log(userID, "udani");
    
    const fetchPracticalStatistics = async () => {
        try {
            const practicalData = await practicalRegister.find({ userID });
            const latestInProgressPractical = await practicalRegister.findOne({ userID, completed: false }, null, { sort: { updatedAt: -1 } });
    
            const totalPracticals = 10;
            const practicalCounts = {
                Physics: { completed: 0, inProgress: 0 },
                Chemistry: { completed: 0, inProgress: 0 },
                Biology: { completed: 0, inProgress: 0 }
            };

            practicalData.forEach(item => {  
                if (practicalCounts[item.practicalSubject]) {
                    if (item.completed) {
                        practicalCounts[item.practicalSubject].completed++;
                    } else {
                        practicalCounts[item.practicalSubject].inProgress++;
                    }
                }
            });

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
            throw error;
        }
    };
    

    // Assuming req.body.userID contains the user ID
    const statistics = await fetchPracticalStatistics(req.body.userID);
    res.send(statistics);
};
