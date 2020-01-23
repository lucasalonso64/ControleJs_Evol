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
        await api.post('posts', data)

        this.props.history.push('/');
    }
    
    calcular1() {

        let valorlitro = Number.parseFloat(this.state.valorlitro)
        let kmatual = Number.parseFloat(this.state.kmatual)
        let consmedio = Number.parseFloat(this.state.consmedio)
        let perc
        let res

        perc = kmatual / consmedio

        res = perc * valorlitro



        this.setState({ perc, res })
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
                    <label>Informe a quilometragem:</label>
                    <input
                        type="text"
                        name="kmatual"
                        placeholder="Informe a quilometragem"
                        onChange={this.handleChange}
                        value={this.state.kmatual}
                        onBlur={this.calcular1.bind(this)}

                    />
                    <label>Valor do combustível:</label>
                    <input
                        type="text"
                        name="valorlitro"
                        placeholder="Valor do combustível"
                        onChange={this.handleChange}
                        value={this.state.valorlitro} />

                    <label>Consumo médio:</label>
                    <input
                        type="text"
                        name="consmedio"
                        placeholder="Consumo médio"
                        onChange={this.handleChange}
                        value={this.state.consmedio} />
                    {/* <input
                        type="text"
                        name="now"
                        placeholder="Data próxima troca:"
                        onChange={this.handleChange}
                        value={this.state.dataptroca} */}
                

                    <label>Quantidade de litros:  {this.state.perc} L</label><br></br>
                    <label>Valor total a ser pago: R$ {this.state.res}</label>

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