import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    users: {
      type: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
          },
          role: String
        }
      ],
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    fields: {
      type: [
        {
          title: String,
          kind: String,
          answer: String
        }
      ],
      required: true
    },
    performance: {
      type: {
        rating: Number,
        mark: Number
      }
    },
    criteria: {
      type: [
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
      ]
    },
    status: {
      type: String
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export default mongoose.model('Team', schema)
