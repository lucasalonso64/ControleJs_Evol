import React, { Component } from 'react';
import api from '../services/api';
import io from 'socket.io-client';
import Joi from "joi-browser";

import './Feed.css'

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';


class Feed extends Component {
    state = {
        feed: [],
    };
    async componentDidMount() {
        this.registerToSocket();

        const response = await api.get('posts');

        this.setState({ feed: response.data });
    }

    registerToSocket = () => {
        const socket = io('http://localhost:3333');
        socket.on('post', newPost => {
            this.setState({ feed: [newPost, ...this.state.feed]  })
        })

    }
    render() {
      
        return (
            <section id="post-list">
                {this.state.feed.map(post => (
                    <article key={post._id}>
                        <header>
                            <div className="user-info">
                            <span className="place"> DATA DO ABASTECIMENTO: {post.createdAt}</span>
                                <span className="place">KM ABASTECIMENTO: {post.kmabas} KM</span>
                                <span className="place">QUANTIDADE DE LITRO: {post.qtdlitro} L</span>
                                <span className="place"> CONSUMO MÉDIO: {post.consumomedio} km/L</span>                           
                                <span className="place"> KM PERCORRIDO: {post.kmpercorrido} KM</span>   
                             
                        
                            </div>                           
                        </header>                   

                        <footer>
                            <button type="submit">Atualizar </button>      
                                        
                        </footer>




                    </article>
                ))}
            </section>
        );
    }
}

export default Feed;