let users = [
  {
    nickname: 'waffleBear',
    password: '$2b$10$kUj0XsY9TfzXVqhyLsLMveEXo/Rb/pc5UMHrsCM5Ni//l3pR83wne', //asdf1234
    name: 'maricha',
    email: 'test1@test.com',
  }
]


export async function getAllUser() {
  return users
}

export async function getUserByNick(nickname) {
  const data = users.find(user => user.nickname === nickname);
  return data;
}

export async function createUser(info) {
  const newUser = { ...info, id: Date.now().toString() }
  users.push(newUser)
  console.log(users);
  return newUser.id
}