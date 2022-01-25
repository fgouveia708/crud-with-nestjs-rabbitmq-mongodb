import * as mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        }
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);