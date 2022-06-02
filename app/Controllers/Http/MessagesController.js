'use strict'
const Message = use('App/Models/Message');

class MessageController {
  async index({ request, response }) {
    const messages = await Message.all();
    return response.status(200).json(messages);
  }

  async save({ request, response}) {
    const input = request.only(['type', 'sender', 'data']);
    let message = {};
    message = await Message.create(input);
    return response.json(await Message.all());
    // await Message.create(input);
  }
}

module.exports = MessageController
