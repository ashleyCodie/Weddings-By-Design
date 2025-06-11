import { faker } from "@faker-js/faker"

const generateFakeUser = () => {
   const firstName = faker.person.firstName()
   const lastName = faker.person.lastName()
return {
    firstName: firstName,
    lastName: lastName,
    email: faker.internet.email({ firstName, lastName }),
    username: faker.internet.username({ firstName, lastName }),
    password: "test",
    roles: faker.helpers.arrayElement([ "Project Manager" ])
}
}

export const generateFakeUsers = (length) => {
    const users = []
    Array.from({ length: length }).forEach(() => {
        users.push(generateFakeUser())
    })
    return users
}