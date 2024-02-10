const contato = require('../models/contatoModel')

exports.index = async (req, res) => {
    const contatos = await contato.buscaContatos();
    res.render('index', { contatos });
};