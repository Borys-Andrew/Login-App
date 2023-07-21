import { Schema, model } from 'mongoose';

const tokenSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  token: {
    type: String,
    required: true,
  },
}, { versionKey: false, timestamps: true });

const Token = model('token', tokenSchema);

export default Token;
