const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const Sequelize = require('sequelize')


module.exports = {
    // MODELO
    // async index(req, res){
    //     //const posts = await Post.find().sort('-createdAt');
    //     const posts = await Post.all();

    //     return res.json(posts);

    // },

        async index(req, res){     
        const posts = await Post.findAll();
        return res.json(posts);
    },

    async show(req, res) {
        const posts = await Post.all();
        return res.json(posts);
    },

    async store(req, res){
       const { kmatual, kmabas, consumomedio, kmpercorrido, qtdlitro } = req.body;

       const post = await Post.create({
        kmatual: req.body.kmatual,   
        kmabas: req.body.kmabas,
        consumomedio: req.body.consumomedio,
        kmpercorrido: req.body.kmpercorrido,
        qtdlitro: req.body.qtdlitro,
       })


       req.io.emit('post', post);

       return res.json(post);
    }

};