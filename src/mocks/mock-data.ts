import { User } from '../app/models/user.model';

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

export const designations = [
  {
    id: '1',
    name: 'Software Engineer',
  },
  {
    id: '2',
    name: 'Senior Software Engineer',
  },
  {
    id: '3',
    name: 'Team Lead',
  },
  {
    id: '4',
    name: 'Project Manager',
  },
  {
    id: '5',
    name: 'Director',
  },
];
