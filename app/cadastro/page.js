'use client'
import { useState } from "react";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css'; 

export default function Cadastro() {
    const [nome, alteraNome] = useState("");
    const [mensagem, alteraMensagem] = useState("");

    // Testando um teste com uma testada
    function enviaMensagem(e) {
        e.preventDefault();

        if (mensagem == "" || nome == "") {
            toast.error("Por favor, preencha todos os campos.");  
        } else {
            toast.success("Mensagem enviada com sucesso!");  
            alteraNome("");  
            alteraMensagem(""); 
        }
    }

   
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

          
            <button onClick={notify}>Notify!</button>

            
            <ToastContainer />
        </div>
    );
}

