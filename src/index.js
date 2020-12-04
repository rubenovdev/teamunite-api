import app from './app.js'
import * as mongodb from './mongodb.js'
import { config } from './config/config.js'

mongodb
  .connect()
  .then(() => {
    app.listen(process.env.PORT || config.PORT, () =>
      console.log(`Server is running on port: ${config.PORT}`)
    )
  })
  .catch(e => console.error(e.message))
