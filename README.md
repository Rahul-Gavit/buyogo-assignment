# Assigmnet Summary
you can check out mock data for testing the application working fine . /src/mocks
to run application you can dawoload or clone that git repository
then run => `npm install` for dawonloading needed pakages
then run => `npm start` to run the application. Also you can test application directly on that link: `https://buyogo-assignment.vercel.app/`

## Mock Data for Users and Organizations

This section provides mock data for users and organizations, which can be used for testing purposes in a TypeScript project.

# BuyogoAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


### Users

```typescript
export const mockUsers: User[] = [
  {
    name: 'John Doe',
    password: '12345678',
    email: 'johndoe@example.com',
    phone: '9583429333',
    organizationName: 'Tech Corp',
    organizationId: '001',
    designation: 'Software Engineer',
    birthDate: new Date('1990-05-15'),
    city: 'New York',
    pincode: '10001',
  },
  {
    name: 'Jane Smith',
    password: '12345678',
    email: 'janesmith@example.com',
    phone: '9583429333',
    organizationName: 'Innovate Ltd.',
    organizationId: '002',
    designation: 'Software Engineer',
    birthDate: new Date('1985-07-20'),
    city: 'San Francisco',
    pincode: '94105',
  },
  {
    name: 'Rahul Gavit',
    password: '12345678',
    email: 'rahul123@gmail.com',
    phone: '9876543210',
    organizationName: 'Tech Corp',
    organizationId: '001',
    designation: 'Software Engineer',
    birthDate: new Date('2000-10-10'),
    city: 'Pune',
    pincode: '411046',
  },
  {
    name: 'Alice Johnson',
    password: '12345678',
    email: 'alicej@example.com',
    phone: '9583429333',
    organizationName: 'Tech Corp',
    organizationId: '001',
    designation: 'Software Engineer',
    birthDate: new Date('1992-03-08'),
    city: 'Chicago',
    pincode: '60601',
  },
  {
    name: 'Michael Brown',
    password: '12345678',
    phone: '9583429333',
    organizationName: 'Tech Corp',
    organizationId: '001',
    designation: 'Software Engineer',
    birthDate: null,
    city: 'Los Angeles',
    pincode: '90001',
  },
];

export const allowedOrganizations = [
  { orgId: '001', orgName: 'Tech Corp' },
  { orgId: '002', orgName: 'Innovate Ltd' },
  { orgId: '003', orgName: 'Design Hub' },
];


