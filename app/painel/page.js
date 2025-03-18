'use client'
import { useState } from "react";
import "./painel.css"
import Produtos from "../produtos/page";
import Menu from "../produtos/components/Menu";

function Painel() {

    const [usuario, alteraUsuario] = useState("")
    const [ senha, alteraSenha] = useState ("")
    const [ mostraerro, altera_mostraerro] = useState(false)
    const [ mostrasucesso, altera_mostrasucesso] = useState (false)

    function validarLogin(){
        if(usuario == "amandavv" && senha == 123456){
            altera_mostraerro(false)
            altera_mostrasucesso(true)
        }else if(usuario== "" && senha == ""){
            altera_mostraerro(false)
           altera_mostrasucesso(false)
        }else{
            altera_mostraerro(true)
            altera_mostrasucesso(false)
        }
        
        
    }
    return ( 
        <div>
            
            <Menu/>
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

{ 
                mostrasucesso == true ?  
                    <div className="sucesso">
                        <p>Usuário logado com sucesso</p>
                    </div>
                :
                <div></div>
            }




        </div>


     );
}

export default Painel;