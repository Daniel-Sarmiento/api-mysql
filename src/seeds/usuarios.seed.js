require('dotenv').config();
const bcrypt = require('bcrypt');
const saltosBcrypt = parseInt(process.env.SALTOS_BCRYPT);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('usuarios').del()
  await knex('usuarios').insert([
    { email: 'email1@gmail.com', password: bcrypt.hashSync('12345', saltosBcrypt) },
    { email: 'email2@gmail.com', password: bcrypt.hashSync('12345', saltosBcrypt) },
    { email: 'email3@gmail.com', password: bcrypt.hashSync('12345', saltosBcrypt) },
    { email: 'email4@gmail.com', password: bcrypt.hashSync('12345', saltosBcrypt) },
    { email: 'email5@gmail.com', password: bcrypt.hashSync('12345', saltosBcrypt) },
  ]);
};
