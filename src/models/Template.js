import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    title: String,
    criterion: [
      {
        title: String,
        max: Number
      }
    ]
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export const Template = mongoose.model('Template', schema)
