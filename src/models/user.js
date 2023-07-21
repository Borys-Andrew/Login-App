import { Schema, model } from 'mongoose';

const emailRegexp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

const userSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: emailRegexp,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
}, { versionKey: false, timestamps: true });

const User = model('user', userSchema);

export default User;
