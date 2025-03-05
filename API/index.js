import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoute.js';
import authRoutes from './routes/authRoute.js';
import dashboardRoutes from './routes/dashboardRoute.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import subjectRoutes from './API_for_Practicals/routes/subject.Routes.js';
import bioListRoutes from './API_for_Practicals/routes/BioList.Routes.js';
import chemistryListRoutes from './API_for_Practicals/routes/Chem.Routes.js';
import PhysicsRoutes from './API_for_Practicals/routes/Physics.Routes.js';
import BiologyPracticalRoutes from './API_for_Practicals/routes/bioPracticals.route.js';
import PhysicsPracticalRoutes from './API_for_Practicals/routes/PhysicsPracticals.Routes.js';
import ChemistryPracticals from './API_for_Practicals/routes/ChemistryPracticals.Routes.js';
import QDashRoute from './routes/QDashRoute.js';  
import quizRoutes from './API_for_Practicals/routes/quizRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Define Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/quizDashboard", QDashRoute);
app.use("/api/quiz", quizRoutes);

// subjectAPI
app.use("/api/subject", subjectRoutes);
app.use("/api/subjects/biologyList", bioListRoutes);
app.use("/api/subjects/chemistryList", chemistryListRoutes);
app.use("/api/subjects/physicsList", PhysicsRoutes);
app.use("/api/subjects/practicals/biology", BiologyPracticalRoutes);
app.use("/api/subjects/practicals/physics", PhysicsPracticalRoutes);
app.use("/api/subjects/practicals/chemistry", ChemistryPracticals);

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ success: false, message, statusCode });
});

// Export for serverless deployment
export default app;
