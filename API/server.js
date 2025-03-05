import app from './index.js';  // Import the Express app
import { createServer } from '@vercel/node';  // Vercel's serverless function handler

export default createServer(app);
