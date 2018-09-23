// OBJECT

const person = {
  name: 'Mikel',
  age: 26,
  location: {
    city: 'Oulu',
    temp: 9
  }
}
const { name = 'puge', age, location } = person
// const name = person.name
const { city, temp: temperature } = person.location
console.log(`${name} is ${age}. He lives in ${city}. temp is ${temperature}`)


// ARRAY

const address = ['Rautatienkatu', 'Oulu', 'Finland', '90400']

const [street, citi = 'Helsinki', country, zip] = address

console.log(`You are in ${citi}, ${country}`)