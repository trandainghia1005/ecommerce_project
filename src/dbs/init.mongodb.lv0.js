// 'use strict'

// const mongoose = require('mongoose')

// const connectString = `mongodb://localhost:27017/ecommerce_project`

// mongoose.connect (connectString).then( _ => console.log('Connected MongoDB Success'))
// .catch(err => console.log(`Error Connect`,err))

// if (1 === 0){
//     mongoose.set('debug', true)
//     mongoose.set('debug', {color: true})
// }

// module.exports = mongoose
'use strict'
const mongoose = require('mongoose')

const connectString = `mongodb://127.0.0.1:27017/ecommerce_project`

mongoose.connect(connectString)
  .then(_ => console.log('✅ Connected MongoDB Success'))
  .catch(err => console.log('❌ Error Connect:', err))

// Lắng nghe các events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB')
})

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error:', err)
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected')
})

// Bật debug mode trong development
if (process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true)
  mongoose.set('debug', { color: true })
}

module.exports = mongoose