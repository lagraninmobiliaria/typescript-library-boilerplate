import sayHello from '.'

describe('Boilerplate', () => {
  it('says hello', () => {
    expect(sayHello()).toEqual(`Hello`)
  })
})
