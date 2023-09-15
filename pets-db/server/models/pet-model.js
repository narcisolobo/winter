import { model, Schema } from 'mongoose';

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter pet name.'],
    },
    type: {
      type: String,
      required: [true, 'Please enter pet type.'],
    },
    age: {
      type: Number,
      required: [true, 'Please enter pet age.'],
    },
    isDerpy: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Pet = model('Pet', petSchema);
export default Pet;
