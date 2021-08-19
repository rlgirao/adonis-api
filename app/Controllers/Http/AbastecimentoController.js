'use strict'

const Abastecimento = use('App/Models/Abastecimento');

/**
 * Resourceful controller for interacting with abastecimentos
 */
class AbastecimentoController {
  /**
   * Show a list of all abastecimentos.
   * GET abastecimentos
   *
   */
  async index () {
    const abastecimento = await Abastecimento.all();

    return abastecimento;
  }

  /**
   * Create/save a new abastecimento.
   * POST abastecimentos
   *
   * @param {Request} ctx.request
   */
  async store ({ request }) {
    const data = request.all();

    const abastecimento = await Abastecimento.create(data);

    return abastecimento;
  }

  /**
   * Display a single abastecimento.
   * GET abastecimentos/:id
   *
   * @param {object} ctx
   */
  async show ({ params }) {
    const id = params.id;

    const abastecimento = await Abastecimento.findOrFail(id);

    return abastecimento;
  }

  /**
   * Update abastecimento details.
   * PUT or PATCH abastecimentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async update ({ params, request }) {
    const data = request.all();
    const id = params.id;
    const abastecimento = await Abastecimento.findOrFail(id);

    abastecimento.posto_combustivel = data.posto_combustivel;
    abastecimento.tipo_combustive = data.tipo_combustive;
    abastecimento.quantidade_combustivel = data.quantidade_combustivel;
    abastecimento.valor_abastecido = data.valor_abastecido;
    abastecimento.placa_veiculo = data.placa_veiculo;
    abastecimento.motorista = data.motorista;
    abastecimento.quilometragem = data.quilometragem;
    abastecimento.save();

    return 'Abastecimento editado';
  }

  /**
   * Delete a abastecimento with id.
   * DELETE abastecimentos/:id
   *
   * @param {object} ctx
   */
  async destroy ({ params }) {
    const id = params.id;
    const abastecimento = await Abastecimento.findOrFail(id);

    await abastecimento.delete(id);

    return 'Abastecimento deletado!';
  }
}

module.exports = AbastecimentoController
