// var name = 'Hello'

// const user = {
//   firstName: 'john',
//   lastName: 'doe'
// }

// const a = [1, 2]

// const b = a

// JSON.parse(JSON.stringify(b))

// const text = '{"firstName":"john","lastName":"doe"}'

// const users = [
//   'Mark',
//   'David',
//   'John',
//   'Jane'
// ]

const animals = [
  { name: 'Dog' },
  { name: 'Cat' },
  { name: 'Bird' }
]

// const emojis = [
//   "🍺",
//   "🍻",
//   "🍶",
//   "🍵",
//   "☕️",
//   "🍼",
//   "💻",
//   "👙",
//   // "🐶",
//   "🎮",
//   "💪"
// ]

function show () {

  // const keyName = 'firstName'

  // // Dot notation
  // console.log('user =>', user.firstName)
  // console.log('user =>', user.lastName)

  // // Bracket notation
  // console.log('user =>', user[keyName])
  // console.log('user =>', user['lastName'])

  // console.log(Object.keys(user))

  // console.log(Object.values(user))

  // console.log(JSON.stringify(user))
  // console.log(JSON.parse(text))

  // console.log('Your first name is ' + user.firstName + ' , ' + user.lastName)

  // console.log(`Your first name is ${user.firstName} , ${user.lastName}`)

  // console.log('users =>', users)

  // let index = 3

  // console.log('users =>', users[0])
  // console.log('users =>', users[index])
  // console.log('users =>', users[2])

  // console.log('animals =>', animals[1].name)
  // console.log('animals =>', animals[1]['name'])

  // console.log(emojis.filter(emoji => emoji === '🐶'))

  // console.log(emojis.find(emoji => emoji === '🐶'))
  // console.log(emojis.findIndex(emoji => emoji === '🐶'))

  // animals.push({ name: 'Rat' })

  animals.splice(1, 1)

  // animals.slice()

  console.log(animals)

}

show()
