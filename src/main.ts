import './style.css';
// import axios from 'axios';

//************************************************/
//*********************Basic*********************/
//**********************************************/

//TODO: 1

// const age: number = 50;
// const username: string = 'Max';
// const toggle: boolean = true;
// const empty: null = null;
// const callback = (a: number): number => {
//   return 100 + a;
// };

// console.log(age, username, toggle, empty, callback(15));

//TODO: 2

// let person: [string, number];
// person = ['Max', 21];

// console.log(person);

//TODO: 3

//?1
// let message: string | number;

// message = 'string kind of message';
// message = 12;

// console.log(message);

//? 2
// type enableOrDisable = 'enable' | 'disable';
// let response: enableOrDisable;

// response = 'disable';
// console.log(response);

//TODO: 4

// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error('Error');
// }

// showMessage('Hello everybody');
// console.log(calc(34, 36));
// customError();

//TODO: 5

// enum DayOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }

// const isWeekend = (day: DayOfWeek): boolean => {
//   if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isWeekend(DayOfWeek.Thursday));

//TODO: 6

// interface User {
//   name: string;
//   age: number;
//   email: string;
//   address?: object;
// }

// const mango: User = {
//   name: 'Mango',
//   age: 30,
//   email: 'john@example.com',
//   address: {
//     city: 'New York',
//     country: 'USA',
//   },
// };

// const poly: User = {
//   name: 'Mango',
//   age: 30,
//   email: 'john@example.com',
// };

// console.log(poly.age);
// console.log(mango.address);

//TODO: 7

// type pageType = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: 'open' | 'close';
//   details?: object;
// };

// const page1: pageType = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: new Date('2021-01-01'),
//     updateAt: new Date('2021-05-01'),
//   },
// };

// const page2: pageType = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// };

// console.log(page1, page2);

//---------------------------------------------------/
//*********************Generics*********************/
//-------------------------------------------------/

//TODO: 1

// axios.defaults.baseURL = 'https://66f1b550415379191551df53.mockapi.io';

// async function fetchData(url: string): Promise<object> {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

// console.log(fetchData('/contacts'));

//TODO: 2

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// type Profile = {
//   top: Pick<AllType, 'name' | 'color'>;
//   bottom: Pick<AllType, 'position' | 'weight'>;
// };

// function compare(top: Profile['top'], bottom: Profile['bottom']): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

// console.log(
//   compare({ name: 'Yana', color: 'green' }, { position: 2, weight: 50 })
// );

//TODO: 3

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const merged = merge({ name: 'Alice' }, { age: 56 });
// console.log(merged);

//TODO: 4

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };

// function createOrUpdateUser(initialValues: User, updates: Partial<User>) {
//   return {
//     ...initialValues,
//     ...updates,
//   };
// }

// const original = {
//   name: 'Yana',
//   surname: 'Ratsa',
//   email: 'ratsayana13@gmail.com',
//   password: 'orginalPassword',
// };

// console.log(
//   createOrUpdateUser(original, {
//     email: 'user@mail.com',
//     password: 'password123',
//   })
// );

//TODO: 5

// export enum UserRole {
//   admin = 'admin',
//   editor = 'editor',
//   guest = 'guest',
// }

// type UserRolesStatuses = Record<UserRole, boolean>;

// const RoleDescription: UserRolesStatuses = {
//   [UserRole.admin]: true,
//   [UserRole.editor]: false,
//   [UserRole.guest]: true,
// };

// console.log(RoleDescription);

//TODO: 6

// type Errors = {
//   email?: string[];
//   firstName?: string[];
//   lastName?: string[];
//   phone?: string[];
// };

// type Form = {
//   email: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   phone: string | null;
//   errors: Errors;
// };

// type Params = Omit<Form, 'errors'>;
