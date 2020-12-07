import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    owner: { type: mongoose.Types.ObjectId, ref: 'User' },
    title: String,
    groups: [String],
    curators: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    retake: { type: Boolean, default: false },
    deadline: Date,
    quantity: { type: Number, default: 1 },
    options: Number,
    description: String,
    descriptionFile: String,
    comment: String,
    fields: [{ title: String, kind: String }],
    criteriaGroups: [
      { title: String, criteria: [{ title: String, max: Number }] }
    ],
    marks: [{ mark: String, max: String, min: String }],
    archive: { type: Boolean, default: false }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export const Task = mongoose.model('Task', schema)
