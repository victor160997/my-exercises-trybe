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

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(1);
    getUserName(4).then(listDogs => {
      expect(listDogs).toEqual('Mark');
    });
  });
});
