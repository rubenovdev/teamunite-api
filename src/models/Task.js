import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    owner: { type: mongoose.Types.ObjectId, ref: 'User' },
    title: String,
    groups: [String],
    curators: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    retake: { type: Boolean, default: false },
    description: String,
    descriptionFile: String,
    deadline: Date,
    comment: String,
    quantity: { type: Number, default: 1 },
    fields: [{ title: String, kind: String }],
    points: {
      comment: String,
      marks: [{ mark: String, max: String, min: String }]
    },
    criteria: [{ title: String, criterion: [{ title: String, max: Number }] }],
    archive: { type: Boolean, default: false }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export const Task = mongoose.model('Task', schema)
