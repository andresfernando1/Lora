'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DataSchema extends Schema {
    up() {
        this.create('data', (table) => {
            table.increments();
            table.timestamps();
            table.string('message');
        })
    }

    down() {
        this.drop('data')
    }
}

module.exports = DataSchema