const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Testando a função getUserName:', () => {
  test('Test usando async/await', async () => {
    const user = await getUserName(4);
    expect(user).toEqual('Mark');
  });
  test('Test usando async/await dando erro', async () => {
    try {
      await getUserName(7);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 7 not found.' });
    }
  });
});
