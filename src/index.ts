export default function sayHello() {
  return 'Hello'
}

if (typeof require !== 'undefined' && require.main === module) {
  // eslint-disable-next-line no-console
  console.log(sayHello())
}
