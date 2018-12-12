'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CountriesSchema extends Schema {
  up () {
    this.create('countries', (table) => {
      table.increments()
      table.timestamps()
      table.string('country')
      table.string('capital')
      table.integer('population')
    })
  }

  down () {
    this.drop('countries')
  }
}

module.exports = CountriesSchema
