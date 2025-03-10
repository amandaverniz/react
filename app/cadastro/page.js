'use client'
import { useState } from "react";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css'; 

export default function Cadastro() {
    const [nome, alteraNome] = useState("");
    const [mensagem, alteraMensagem] = useState("");

    // Função para enviar a mensagem
    function enviaMensagem(e) {
        e.preventDefault();

        if (mensagem === "" || nome === "") {
            toast.error("Por favor, preencha todos os campos.");  // Exibe erro
        } else {
            toast.success("Mensagem enviada com sucesso!");  // Exibe sucesso
            alteraNome("");  // Reseta o nome
            alteraMensagem("");  // Reseta a mensagem
        }
    }

    // Função para notificação simples (exemplo)
    const notify = () => toast("Wow, so easy!");

    return (
        <div>
            {/* Formulário de contato */}
            <h1>Página de contato</h1>
            <br />
            <p>Entre em contato conosco</p>
            <br />

            <hr />
            <br />

            <form onSubmit={enviaMensagem}>
                <label>
                    Digite seu nome:
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => alteraNome(e.target.value)}
                        placeholder="Nome"
                    />
                </label>

                <br />
                <br />

                <label>
                    Digite sua mensagem:
                    <textarea
                        value={mensagem}
                        onChange={(e) => alteraMensagem(e.target.value)}
                        placeholder="Sua mensagem aqui"
                    />
                </label>

                <br />
                <br />
                <button type="submit">Enviar</button>
            </form>

            {/* Botão para disparar notificação */}
            <button onClick={notify}>Notify!</button>

            {/* Componente que renderiza as notificações */}
            <ToastContainer />
        </div>
    );
}

