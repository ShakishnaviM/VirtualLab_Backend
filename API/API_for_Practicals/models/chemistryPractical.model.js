import mongoose from 'mongoose';

// Define the schema for each test
const chemistryPracticalSchema = new mongoose.Schema(
  {
    
    theory:{type: String},         
    description: {type: String },
    tests: [
      {
        test_name:{ type: String }, 
        materials: [
          {
            name:{type: String } ,     // e.g., Benedict’s Reagent, Test tube
            quantity: {type: String }    // Optional: e.g., 5 ml
          }
        ], // e.g., Biuret Test, Sudan III Test
        procedure: [
          {
            step_number: {type: String } , // Step number in the procedure
            instruction: {type: String }  // Instruction for the step
          }
        ],
        observations: {type: String } , // Expected observations after the test
       
        image:{type: String ,require:false}          // URL or base64-encoded string of the image
      }
    ]
  }
  
);




const chemistrypracticals = mongoose.model("chemistryTheory", chemistryPracticalSchema)
export default chemistrypracticals