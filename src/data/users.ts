const users = [
    {
        email: "tripty@gmail.com",
        password: "tripty123",
    },
    {
        email: "example@gmail.com",
        password: "example123",
    },
    {
        email: "user3@gmail.com",
        password: "user3",
    }
]

export const getUserByEmail = (email: string) => {
    const found = users.find((user) => user.email === email);
    return found;
}