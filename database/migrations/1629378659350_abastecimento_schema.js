'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AbastecimentoSchema extends Schema {
  up () {
    this.create('abastecimentos', (table) => {
      table.increments()
      table.timestamps()
      table.string('posto_combustivel').notNullable()
      table.string('tipo_combustive', 240).notNullable()
      table.float('quantidade_combustivel', 2).notNullable()
      table.float('valor_abastecido', 2).notNullable()
      table.string('placa_veiculo', 10).notNullable()
      table.string('motorista', 240).notNullable()
      table.integer('quilometragem').notNullable()
    })
  }

  down () {
    this.drop('abastecimentos')
  }
}

module.exports = AbastecimentoSchema
