type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: User, updates: Partial<User>) {
  return {
    ...initialValues,
    ...updates,
  };
}

const original = {
  name: 'Yana',
  surname: 'Ratsa',
  email: 'ratsayana13@gmail.com',
  password: 'orginalPassword',
};

console.log(
  createOrUpdateUser(original, {
    email: 'user@mail.com',
    password: 'password123',
  })
);
