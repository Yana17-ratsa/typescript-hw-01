type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, 'errors'>;

const test: Params = {
  email: null,
  firstName: null,
  lastName: 'ReadableStream',
  phone: '7872308',
};

console.log(test);
