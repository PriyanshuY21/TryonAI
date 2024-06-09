import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  clothId: String,
  clothTitle: String,
  clothSubtitle: String,
  image: Buffer,
  clothImage: Buffer,
});

export default mongoose.model('Image', imageSchema);
