import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    email: String,
    password: String,
    role: String,
    group: String,
    name: String,
    surname: String,
    patronymic: String,
    team: { type: mongoose.Types.ObjectId, ref: 'Team' },
    tasks: [{ type: mongoose.Types.ObjectId, ref: 'Task' }]
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export const User = mongoose.model('User', schema)
