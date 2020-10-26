const {Schema, model, Types} = require('mongoose')

const schema = new Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true
      },
      description: {
        type: String,
        required: true
      },
      activity: {
        type: String,
        required: true
      },
      logo: {
        type: String,
        required: true
      },
      internship: {
        type: Boolean,
        required: true
      },
      projects: {
        type: [
          {
            type: Types.ObjectId,
            ref: 'Project'
          }
        ],
        default: undefined
      }
    },
    {versionKey: false}
)

module.exports = model('Company', schema)
