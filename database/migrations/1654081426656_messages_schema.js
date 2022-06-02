'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessagesSchema extends Schema {
  up () {
    this.create('messages', (table) => {
      table.increments();
      table.string('type');
      table.string('sender');
      table.json('data');
      table.timestamps();
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessagesSchema
