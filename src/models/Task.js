import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    groups: {
      type: [String],
      required: true
    },
    curators: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true
    },
    retake: {
      type: Boolean,
      required: true,
      default: false
    },
    description: {
      type: String,
      required: true
    },
    descriptionFile: {
      type: String
    },
    deadline: {
      type: Date,
      required: true
    },
    comment: {
      type: String
    },
    quantity: {
      type: Number,
      required: true,
      default: 1
    },
    fields: {
      type: [
        {
          title: String,
          kind: String
        }
      ],
      required: true
    },
    points: {
      type: {
        comment: String,
        marks: {
          type: [
            {
              mark: Number,
              max: Number,
              min: Number
            }
          ]
        }
      },
      required: true
    },
    criteria: {
      type: [
        {
          title: String,
          criterion: {
            type: [
              {
                title: String,
                max: Number
              }
            ]
          }
        }
      ],
      required: true
    },
    archive: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export default mongoose.model('Task', schema)
