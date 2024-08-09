import practicalRegister from "../models/practicalRegisterModel.js";

export const getQData = async (req, res, next) => {
    console.log(req.body);

    const fetchPracticalDetails = async (userID) => {
        const practicalDetails = await practicalRegister.find({ userID, completed: true }, null, { sort: { updatedAt: -1 } });
        function mapPracticalData(practicalData) {
            // Organize data by subjects
            const subjects = {};
        
            practicalData.forEach(item => {
                const percentage = (item.score / 10) * 100; // Assuming score is out of 10
        
                if (!subjects[item.practicalSubject]) {
                    subjects[item.practicalSubject] = {
                        title: item.practicalSubject.toUpperCase(),
                        practicals: [],
                        completedCount: 0
                    };
                }
        
                subjects[item.practicalSubject].practicals.push({
                    name: `Practical Name ${item.practicalID}`, // or any other naming convention
                    score: item.score,
                    rank: item.rank,
                    percentage: percentage
                });
        
                if (item.completed) {
                    subjects[item.practicalSubject].completedCount++;
                }
            });
        
            // Calculate completed percentage
            const quizData = Object.values(subjects).map(subject => {
                const totalPracticals = subject.practicals.length;
                const completedPercent = (subject.completedCount / totalPracticals) * 100;
        
                return {
                    title: subject.title,
                    practicals: subject.practicals,
                    completedPercent: completedPercent
                };
            });
        
            return quizData;
        }

        const mapeddata = mapPracticalData(practicalDetails);
        return mapeddata;

    }
    
    const userID = req.body.userID;
    const progressData = await fetchPracticalDetails(userID);
    res.send(progressData);

};
