
export const dummyUsers = [
  {
    id: 1,
    name: 'Test User',
    email: process.env.DEFAULT_USER_EMAIL,
    password: process.env.DEFAULT_USER_PASSWORD,
  }
];

export async function addUser(user) {
  const newUser = await {
    ...user,
    id: (dummyUsers.length + 1).toString(),
  };
  dummyUsers.push(newUser);
  return newUser;
}

export async function findUserByEmail(email) {
  return dummyUsers.find(user => user.email === email);
}