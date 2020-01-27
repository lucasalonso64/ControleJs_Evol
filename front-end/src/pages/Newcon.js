import React, { Component } from 'react';
import api from '../services/api';
import './New.css';
import { async } from 'q';
import Joi from "joi-browser";

class New extends Component {
    state = {
        kmtroca: '',
        kmptroca: '',
        dataptroca: '',
        kmatual: '',
        valorlitro: '',
        perc: '',
        consmedio: '',
        //kmpercorrdido: '',
        data: {},
        errors: {},
    }

    handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData();
        data.append('kmatual', this.state.kmatual);
        data.append('kmptroca', this.state.kmptroca);
        data.append('dataptroca', this.state.dataptroca);
        data.append('kmatual', this.state.kmatual);
        data.append('valorlitro', this.state.valorlitro);
       // data.append('kmpercorrdido', this.state.kmpercorrdido);
        await api.post('posts', data)

        this.props.history.push('/');
    }
    
    calcular1() {

        let kmabas = Number.parseFloat(this.state.kmabas)
        let qtdlitro = Number.parseFloat(this.state.qtdlitro)
        let kmatual = Number.parseFloat(this.state.kmatual)              
        let consumomedio 
        let kmpercorrido 

        kmpercorrido = kmatual - kmabas
        consumomedio = kmpercorrido / qtdlitro

        this.setState({ consumomedio, kmpercorrido })
        this.calculaDias()
    }

    calculaDias() {

        const dataptroca = new Date();
        dataptroca.setDate(dataptroca.getDate() + 15);
        this.setState({ dataptroca })

    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    schema = {
        kmtroca: Joi.string().required(),
        genre: Joi.string().required(),
        numberInStock: Joi.number()
            .min(1)
            .max(100)
            .required(),
        rate: Joi.number()
            .min(1)
            .max(10)
            .required()
    };

    renderInput = (name, label, type = "text") => {
        const { data, errors } = this.state;

    };

    validar = () => {
        const { form } = this.state;
        const erros = {};
        ["kmtroca"].forEach((item) => {
            if (!form[item]) erros[item] = "Digite o" + item;

        })
        this.setState({ erros })
        return !Object.keys(erros).length == 0;
    }



    render() {
        const { data, errors } = this.state;
        return (
            <div>                
                <form id="new-post" onSubmit={this.handleSubmit}>
                    <label>Km abastecimento:</label>
                    <input
                        type="text"
                        name="kmabas"
                        placeholder="Km abastecimento"
                        onChange={this.handleChange}
                        value={this.state.kmabas}
                        onBlur={this.calcular1.bind(this)}
                    />
                    <label>Quantidade de litros:</label>
                    <input
                        type="text"
                        name="qtdlitro"
                        placeholder="Quantidade de litros"
                        onChange={this.handleChange}
                        value={this.state.qtdlitro} />

                    <label>Quilometragem atual:</label>
                    <input
                        type="text"
                        name="kmatual"
                        placeholder="Quilometragem atual"
                        onChange={this.handleChange}
                        value={this.state.kmatual} />                    
                                   

                    <label>Consumo médio:  {this.state.consumomedio} KM/L</label><br></br>
                    <label>Percorreu:  {this.state.kmpercorrido} Km com {this.state.qtdlitro} Litros </label><br></br>
                    <br></br>
                    <button onClick={this.calcular1.bind(this)} >Calcular</button>
                    <br></br>
                    <button onClick={this.calcular1.bind(this)} onBlur={this.calcular1.bind(this)} type="submit">Salvar</button>

                </form>
            </div>
        );
    }
}

export default New;