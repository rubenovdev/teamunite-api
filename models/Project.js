const {Schema, model, Types} = require('mongoose')

const schema = new Schema(
    {
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      faculty: {
        type: String,
        required: true
      },
      company: {
        type: Types.ObjectId,
        ref: 'Company'
      },
      vacancies: {
        type: [
          {
            name: {
              type: String,
              required: true
            },
            description: {
              type: String,
              required: true
            },
            quantity: {
              type: Number,
              required: true
            }
          }
        ],
        default: undefined
      },
      curators: {
        type: [
          {
            type: Types.ObjectId,
            ref: 'User',
            required: true
          }
        ],
        required: true,
        default: undefined
      },
      status: {
        type: String,
        required: true,
        enum: ['review', 'active', 'archive'],
        default: 'review'
      },
      createdAt: {
        type: Date,
        required: true,
        default: Date.now
      }
    },
    {versionKey: false}
)

module.exports = model('Project', schema)
