import "dotenv/config"
import axios from "axios"

const users = [
    {
        firstName: 'Adrianna',
        lastName: 'Crooks',
        email: 'Adrianna.Crooks8@yahoo.com',
        username: 'Adrianna_Crooks97',
        password: 'test',
        roles: 'Project Manager'
    }
]

const loginUser = await axios.post(`${process.env.SERVER_URL}/users/login`, { email: users[0].email, password: users[0].password })
console.log("loginUser", loginUser)