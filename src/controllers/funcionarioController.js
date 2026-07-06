const Funcionario = require("../models/funcionarios")

exports.cadastrar = async(req,res)=>{
    const funcionario = await Funcionario.create(req.body)
    res.status(201).json(funcionario)
}

exports.listar = async(req,res)=>{

    const funcionarios = await Funcionario.findAll()
    res.status(201).json(funcionarios)
}