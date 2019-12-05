import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TeamSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a team name'
    },
    club: {
        type: String,
    },
    headCoach: {
        type: String
    },
    assistantCoach: {
        type: String
    },
    assistantCoach2: {
        type: String
    },
    assistantCoach3: {
        type: String
    },
    location: {
        type: String
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});
