const generateGreeting =(name)=> `Hello ${name}`

test('SHould display name', ()=> {
  const result = generateGreeting('Mikel')
  expect(result).toBe('Hello Mikel')
})