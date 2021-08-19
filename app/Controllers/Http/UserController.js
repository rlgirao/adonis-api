'use strict'

const User = use('App/Models/User');

class UserController {

  async cadastrar ({ request }) {
    const data = request.only(['username','email','password']);

    await User.create(data);

    return 'Usuario cadastrado com sucesso!';
  }

  async logar ({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }

}

module.exports = UserController
