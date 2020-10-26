const {Schema, model} = require('mongoose')

const schema = new Schema(
    {
      name: {
        type: String,
        required: true
      },
      surname: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true,
        enum: ['student', 'curator', 'admin']
      }
    },
    {versionKey: false}
)

module.exports = model('User', schema)
