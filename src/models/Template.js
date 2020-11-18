import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    criterion: {
      type: [
        {
          title: String,
          max: Number
        }
      ],
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export default mongoose.model('Template', schema)
