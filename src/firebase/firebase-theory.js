import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyC1Jxeh8-kth3XSKrVl-8m8yA_hbviaH1o",
  authDomain: "expendify-17.firebaseapp.com",
  databaseURL: "https://expendify-17.firebaseio.com",
  projectId: "expendify-17",
  storageBucket: "expendify-17.appspot.com",
  messagingSenderId: "89180844553"
};

firebase.initializeApp(config)


const database = firebase.database()

// CREATING
// database.ref().set({
//   name: 'Mikel Cute',
//   age: 30,
//   stressLevel: 7,
//   job: {
//     title: 'Front-End Developer',
//     company: 'Google'
//   },
//   isSingle: false,
//   location: {
//     city: 'Oulu',
//     country: 'Finland'
//   }
// }).then(()=>{
//   console.log('Data saved!')
// }).catch((err)=>{
//   console.log('Failed', err)
// })

// database.ref().set('This is my data')
// database.ref('age').set(27)
// database.ref('location/city').set('Helsinki')

// database.ref('attribute').set({
//   height: 160,
//   weight: 67
// }).then(()=>{
//   console.log('Data added')
// }).catch((e)=>{
//   console.log('error again!', e)
// })

// REMOVING data
// database.ref('isSingle').remove().then(()=>{
//   console.log('data removed')
// }).catch((e)=>{
//   console.log('Not removed', e)
// })

// UPDATING
// database.ref().update({
//   name: 'Duke',
//   age: 31,
//   job: 'Front-end developer',
//   'location/city': 'Helskinki'
// })
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon'
// })

// FETCHING DATA
// database.ref()
//   .once('value')
//   .then((snapshot)=>{
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((err)=>{
//     console.log('Error occured', e)
//   })
// fetch data real time
// const onValueChange = database.ref().on('value', (snapshot)=>{
//   console.log(snapshot.val())
// }, (e)=> {
//   console.log('Error:', e)
// })

// setTimeout(()=>{
//   database.ref('age').set(31)
// }, 3500)
// setTimeout(()=>{
//   database.ref().off('value', onValueChange)
// }, 7000)
// setTimeout(()=>{
//   database.ref('age').set(32)
// }, 10500)
// yung isang subscription lng ung mwwla

// database.ref().on('value', (snapshot)=> {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title}`)
// })

// setTimeout(()=>{
//   database.ref('job/title').set('FullStack Developer')
// }, 2000)


// SUBSCRIPTIONS
// child_removed
// database.ref('expenses').on('child_removed', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })

// child_changed
// database.ref('expenses').on('child_changed', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })

// child_added
// database.ref('expenses').on('child_added', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })

//   const onValueChange = database.ref('expenses').on('value', (snapshots)=>{
//     const expenses = []
//     snapshots.forEach((snapshot)=>{
//       expenses.push({
//         id: snapshot.key,
//         ...snapshot.val()
//       })
//     })
//     console.log(expenses)
//   }, (e)=>{
//     console.log('Warning!:', e)
//   })

// database.ref('expenses/-LNKABZmqhCgpv9XWhQN').update({
//   desc: 'Gassess'
// })

// database.ref('expenses').push({
//   desc: 'Gas',
//   note: 'Expensive',
//   amount: 120,
//   createdAt: ''
// })
// database.ref('expenses').push({
//   desc: 'Food',
//   note: 'Needed',
//   amount: 100,
//   createdAt: ''
// })
// database.ref('expenses').push({
//   desc: 'Date',
//   note: 'Huhuhu',
//   amount: 50,
//   createdAt: ''
// })
// database.ref('notes').push({
//   title: 'Todo',
//   body: 'go for food'
// })

// database.ref('notes/-LNK8ipu8l-r5HHEQsqO').update({
//   body: 'Study'
// })


// const firebaseNotes = {
//   notes: {

//   }
// }


// const notes = [{
//   id: notes
// }]


// set does not necessary take an object, it can take any data types
// .set will replace previous data
// set returns promise
// updates will not work on nested obj
// once return a promise
// when using array, use ref().push()
// on does not support promises