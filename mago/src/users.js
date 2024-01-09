// users.js
const CryptoJS = require('crypto-js');

export const hashPassword = (password) => {
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    return hashedPassword;
};

export const users = [
  {
    username: 'user1',
    passwordHash: hashPassword('password1'),
    id: 1,
  },
  {
    username: 'user2',
    passwordHash: hashPassword('password2'),
    id: 2,
  },
];
