function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge({ name: 'Alice' }, { age: 56 });
console.log(merged);
