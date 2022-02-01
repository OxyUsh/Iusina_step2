import './style.scss/index.scss'

const userStack = {
    language: 'JavaScript',
    framework: 'Angular'
}

const user = {
    name: 'Oxy',
    age: '25',
    ...userStack
}

console.log(user)