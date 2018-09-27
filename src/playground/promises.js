const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    // resolve({
    //   name: 'Mikel',
    //   age: 30
    // })
    reject('wrongs')
  }, 3000)
})

promise.then((data)=>{
  console.log(data)
}).catch((err)=> {
  console.log(err)
})

// when its already resolve/reject, others will not run