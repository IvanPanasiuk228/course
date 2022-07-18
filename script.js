/* proto
const person = new Object({
  name: 'Ivan',
  age: 23,
  isProgramer: true,
  greet: function () {
    console.log('hello')
  },
})
Object.prototype.seyHello = function () {
  console.log('Hello')
}
const lena = Object.create(person)
lena.name = 'Elena'*/

/*function hello() {
  console.log('Hello', this)
}
const person = {
  name: 'Ivan',
  age: 21,
  seyHello: hello.bind(document),
  seyHe: function () {
    console.group(`${this.name} info: `)
    console.log(`My name is ${this.name}, age: ${this.age}`)
    console.groupEnd()
  },
}
const lena = {
  name: 'Elena',
  age: 34,
}
const a = person.seyHe.bind(lena)*/

/*const arry = [2, 2, 5, 6, 6]

Array.prototype.myN = function (n) {
  return this.map(function (i) {
    return i * n
  })
}
console.log(arry.myN(4))*/

/*function Key(n) {
  return function (num) {
    return n + num
  }
}
const a = Key(5)
console.log(a(34))*/

/*function Tre(url) {
  return function (ss) {
    return `http://${ss}.${url}`
  }
}
const a = Tre('com')
const b = Tre('ua')
console.log(a('google'))
console.log(b('kaban'))*/

/*function bind(contex, fn) {
  return function (...args) {
    return fn.apply(contex, args)
  }
}

function logMenu() {
  return `Name is ${this.name}, age is ${this.age}, job is ${this.job}`
}

const person = { name: 'Ivan', age: 21, job: 'Development' }
const person2 = { name: 'Lena', age: 34, job: 'sex' }

const a = bind(person, logMenu)*/

// set

/*setTimeout(() => {
  console.log('Hello')
}, 2000)*/

// new Promise

/*const beckendData = {
  name: 'Ivan',
  age: 21,
  isProgramer: true,
}
console.log(beckendData)
setTimeout(() => {
  console.log('Prepeind date...')

  setTimeout(() => {
    beckendData.job = 'JS Senior'
    console.log('Job modifick', beckendData)
  }, 2000)
}, 2000)*/

/*const a = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Prepering data')
    const beckendData = {
      name: 'Ivan',
      age: 21,
      isProgramer: true,
    }
    resolve(beckendData)
  }, 2000)
})
a.then((date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      date.job = 'JS Senior'
      console.log('Job modifick')
      resolve(date)
    }, 2000)
  })
})
  .then((clientDate) => {
    console.log('The end', clientDate)
    clientDate.work = 'Yes'
    return clientDate
  })
  .then((date) => {
    console.log(date)
  })
  .catch((err) => {
    console.error('Error', err)
  })
  .finally((date1) => {
    console.log('Finally', date1)
  })*/

/*const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms)
  })
}
sleep(2000).then(() => console.log('After 2 sec'))
sleep(5000).then(() => console.log('After 5 sec'))
Promise.all([sleep(2000), sleep(5000)]).then(() => console.log('all promise'))
Promise.race([sleep(2000), sleep(5000)]).then(() => console.log('Race promise'))*/

// Object

/*const person = Object.create(
  {},
  {
    name: {
      value: 'Ivan',
      enumerable: true, // не видит цикл
      writable: true, // нельзя изменять
      configurable: true, // манипуляции
    },
    brithYear: {
      value: 2001,
    },
    age: {
      get() {
        return 2022 - 2001
      },

      set(value) {
        console.log('Set Object', value)
      },
    },
  }
)
person.firstName = 'Panasiuk'
console.log(person)
delete person.name

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('key', person[key])
  }
}
*/

// class E6

/*class Animal {
  static type = 'ANIMAL'
  constructor(option) {
    this.name = option.name
    this.age = option.age
    this.hasTail = option.hasTail
  }
  voice() {
    console.log('Hello')
  }
}

const animal = new Animal({
  name: 'Ivan',
  age: 21,
  hasTail: true,
})

class Cat extends Animal {
  static type = 'CAT'

  constructor(option) {
    super(option)
    this.color = option.color
  }
  voice() {
    super.voice()
    console.log('Im cat')
  }
  get() {
    console.log('Get')
  }
  set(a) {
    this.age = a
  }
}

const cat = new Cat({
  name: 'Cat',
  age: 7,
  hasTail: true,
})*/

/*class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }
  hide() {
    this.$el.style.display = 'none'
  }
  show() {
    this.$el.style.display = 'block'
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector)

    this.$el.style.width = this.$el.style.height = options.size + 'px'
    this.$el.style.background = options.color
  }
}

const box1 = new Box({
  selector: '#box',
  size: 40,
  color: 'red',
})
const box2 = new Box({
  selector: '#box1',
  size: 50,
  color: 'blue',
})

class Circle extends Box {
  constructor(options) {
    super(options)
    this.$el.style.borderRadius = '50%'
  }
}

const c = new Circle({
  selector: '#box2',
  size: 90,
  color: 'green',
})
*/

//

// const a = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), ms)
//   })
// }
// let url = 'https://jsonplaceholder.typicode.com/todos'

// function FechTodos() {
//   console.log('Fech Todos start')
//   return a(2000)
//     .then(() => fetch(url))
//     .then((response) => response.json())
// }
// FechTodos()
//   .then((data) => {
//     console.log('Data:', data)
//   })
//   .catch((e) => console.error('error:', e))
// function f() {
//   return a(2000)
// }

// async function fechAsyncTodos() {
//   try {
//     console.log('Fech started...')
//     await a(2000)
//     const b = await fetch(url)
//     const data = await b.json()
//     console.log(data)
//   } catch (a) {
//     console.log('error: ', a)
//   } finally {
//     console.log('finally')
//   }
// }
// fechAsyncTodos()

// Proxy

// const person = {
//   name: 'Ivan',
//   age: 21,
//   job: 'JS Senior',
// }

// const op = new Proxy(person, {
//   get(target, prop) {
//     console.log(`Getting ${prop}`)
//     if (!(prop in target)) {
//       return prop
//         .split('_')
//         .map((p) => target[p])
//         .join(' ')
//     }
//     return target[prop]
//   },
//   set(target, prop, value) {
//     if (prop in target) {
//       target[prop] = value
//     } else {
//       throw new Error(`No ${prop} field in target`)
//     }
//   },
//   has(target, prop) {
//     return ['age', 'name', 'job'].includes(prop)
//   },
//   deleteProperty(target, prop) {
//     console.log('Deleting..', prop)
//     delete target[prop]
//     return true
//   },
// })

// // function

// const log = (text) => `Log: ${text}`

// const fp = new Proxy(log, {
//   apply(target, thisArg, args) {
//     console.log('Coding fn....')
//     return target.apply(thisArg, args).toUpperCase()
//   },
// })

// // Classes

// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
// }

// const PersonProxy = new Proxy(Person, {
//   construct(target, args) {
//     console.log('Construct...')
//     return new Proxy(new target(...args), {
//       get(t, prop) {
//         console.log(`Proxy "${prop}"`)
//         return t[prop]
//       },
//     })
//   },
// })

// const p = new PersonProxy('Maxim', 30)

// Wrapper

// const e = (target, dv = 0) => {
//   return new Proxy(target, {
//     get: (obj, prop) => (prop in obj ? obj[prop] : dv),
//   })
// }

// const position = e(
//   {
//     x: 24,
//     y: 23,
//   },
//   0
// )

// // Midden properies

// const whp = (target, pv = '_') => {
//   return new Proxy(target, {
//     has: (obj, prop) => prop in obj && prop.startsWith(pv),
//     ownKeys: (obj) => Reflect.ownKeys(obj),
//   })
// }

const a = document.body.childNodes
console.log(a)
