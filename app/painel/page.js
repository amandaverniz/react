'use client'
import { useState } from "react";
import "./painel.css"

function Painel() {

    const [usuario, alteraUsuario] = useState("")
    const [ senha, alteraSenha] = useState ("")
    const [ mostraerro, altera_mostraerro] = useState(false)

    function validarLogin(){
        if(usuario == amandavv && senha == 123456){

        }
    }
    return ( 
        <div>
            <h1>Painel administrativo</h1>

            <br/>

        
                <label>
                    Digite seu usuário:
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => alteraUsuario(e.target.value)}
                    />
                </label>

            <br/>

                <label>
                    Digite sua senha:
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => alteraSenha(e.target.value)}
                    />
                </label>

            <br/>

            <button onClick={()=> validarLogin()} >Entrar</button>

            
            {/* Operador TERNÁRIO   */}
            {/* ? = if ; : = else */}


            { 
                mostraerro == true ?  
                    <div className="erro">
                        <p>Usuário ou senha incorretos</p>
                    </div>
                :
                <div></div>
            }




        </div>


     );
}

export default Painel;