import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      enum: ['student', 'admin', 'teacher']
    },
    group: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    patronymic: {
      type: String,
      required: true
    },
    team: {
      type: mongoose.Types.ObjectId,
      ref: 'Team'
    },
    tasks: {
      type: [mongoose.Types.ObjectId],
      ref: 'Task'
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export default mongoose.model('User', schema)
