import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@exapmle.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jhon Dow',
        email: 'Jhon@exapmle.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jane Dow',
        email: 'Jane@exapmle.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    }
]

export default users;
