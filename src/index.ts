import express from 'express'
import routes from './routes'
import appconf from './../appconf'

const app = express()
app.use(routes)

app.listen(appconf.PORT, () => {
  console.log('app is listening to PORT 9000')
})
