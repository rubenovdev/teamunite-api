const {Schema, model, Types} = require('mongoose')

const schema = new Schema(
    {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      author: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
      },
      createdAt: {
        type: Date,
        required: true,
        default: Date.now
      }
    },
    {versionKey: false}
)

module.exports = model('Announcement', schema)
