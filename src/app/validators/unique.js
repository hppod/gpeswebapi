
const UsuarioSchema = require('./../models/usuario')


class UniqueValidators {
    /**Função para validar se o nome do Usuário que está sendo criado é único. */
    uniqueUsuarioNome(req, res) {
        const nome = req.query.name.replace(/%20/g, " ")

        UsuarioSchema.find({ nome: { '$regex': `^${nome}$`, '$options': 'i' } }, function (err, result) {
            if (err) {
                res.status(500).json({ message: "Houve um erro ao processar sua requisição.", error: err })
            } else {
                if (result.length > 0) {
                    res.status(200).json({ message: "Já existe um documento com esse título.", result: result.length })
                } else {
                    res.status(200).json({ message: "Título disponível.", result: result.length })
                }
            }
        })
    }

    /**Função para validar se o usuário do Usuário que está sendo criado é único. */
    UniqueUsuarioUsuario(req, res) {
        const usuario = req.query.username.replace(/%20/g, " ")

        UsuarioSchema.find({ usuario: { '$regex': `^${usuario}$`, '$options': 'i' } }, function (err, result) {
            if (err) {
                res.status(500).json({ message: "Houve um erro ao processar sua requisição.", error: err })
            } else {
                if (result.length > 0) {
                    res.status(200).json({ message: "Já existe um documento com esse título.", result: result.length })
                } else {
                    res.status(200).json({ message: "Título disponível.", result: result.length })
                }
            }
        })
    }

    /**Função para validar se o e-mail do Usuário que está sendo criado é único. */
    UniqueUsuarioEmail(req, res) {
        const email = req.query.email.replace(/%20/g, " ")

        UsuarioSchema.find({ email: { '$regex': `^${email}$`, '$options': 'i' } }, function (err, result) {
            if (err) {
                res.status(500).json({ message: "Houve um erro ao processar sua requisição.", error: err })
            } else {
                if (result.length > 0) {
                    res.status(200).json({ message: "Já existe um documento com esse título.", result: result.length })
                } else {
                    res.status(200).json({ message: "Título disponível.", result: result.length })
                }
            }
        })
    }

}

module.exports = new UniqueValidators()