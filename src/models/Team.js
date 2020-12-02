import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    users: [
      {
        user: { type: mongoose.Types.ObjectId, ref: 'User' },
        role: String
      }
    ],
    comment: String,
    fields: [
      {
        title: String,
        kind: String,
        answer: String
      }
    ],
    performance: {
      rating: Number,
      mark: Number
    },
    criteria: [
      {
        title: String,
        criterion: [
          {
            title: String,
            max: Number,
            status: Boolean,
            point: Number
          }
        ]
      }
    ],
    status: String
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export const Team = mongoose.model('Team', schema)
