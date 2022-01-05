const sum = require('./sum');

describe('update Home page', () => {
  it('object check', () =>{
    let data = sum(2,3)
    expect(data(2,3)).toEqual({ name:'codes'})
})
})

// ***** Testing below cases************
//   it('my test case 2', () =>{
//     // expect(sum(1,2)).toBe(5);
//     expect(sum(1,2)).toBe(3);
// })

//   it('my test case 3', () =>{
//     expect(sum(1,2)).toBe(3)
// })

//   it('my test case 4', () =>{
//     expect(sum(1,2)).toBe(3)
// });
// });

// test('my test case one', () =>{
//   // let data =15;
//   let data =10;
//   expect(data).toBe(10)
// });
// it('my test case two', () =>{
//   // let data =16;
//   let data =15;
//   expect(data).toBe(15)
// });
