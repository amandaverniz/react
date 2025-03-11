'use client'

import { useState } from "react";
import "./quiz.css"

function Quiz() {

const [ p1, alteraP1 ] = useState(0)
const [p2, alteraP2] = useState(0)
const [p3, alteraP3] = useState(0)
const [p4, alteraP4] = useState("")
const [ total, alteraTotal] = useState(0)

const [ selecionado, alteraSelecionado] = useState (["", "", ""])


function calculaTotal(){
    alteraTotal(p1+p2+p3)
    if(p4 == "One Piece"){
       alteraTotal(total+1)
    }
}

    return ( 
        <div>

            <h1>Quiz</h1>
            <p>Assinale a opção correta</p>

            <hr/>

            <h2> Qual a cor do cavalo branco de Napoleão</h2>
            <br/>

            <label> <input name="p1" type= "radio" onChange={ ()=> alteraP1(1)  }/> Branco</label>
            <br/>
            <label> <input name="p1" type= "radio" onChange={ ()=> alteraP1(0)  }/> Azul</label>
            <br/>
            <label> <input name="p1" type= "radio" onChange={ ()=> alteraP1(0)  }/> Preto</label>
            <br/>
            <hr/>

            <h2> Qual a melhor letra?</h2>
            <br/>

            <label> <input name="p2" type= "radio"onChange={ ()=> alteraP2(1)} /> A</label>
            <br/>
            <label> <input name="p2" type= "radio"onChange={ ()=> alteraP2(0)  } /> B</label>
            <br/>
            <label> <input name="p2" type= "radio" onChange={ ()=> alteraP2(0)  }/> C</label>

            <br/>
            <hr/>
            <br/>

            <h2> Quanto é dois + 2?</h2>
            <br/>
                                                {/* duas chaves: do onClick e da função de seta */}
            <p className={selecionado[0]} onClick={()=> {alteraP3(0); alteraSelecionado(["selecionado", "", ""])}}>22</p>

            <p className={selecionado[1]} onClick={()=> {alteraP3(0); alteraSelecionado(["", "selecionado", ""])}}>24</p>

            <p className={selecionado[2]} onClick={()=>{alteraP3(1); alteraSelecionado(["", "", "selecionado"])}}>4</p>


            <br/>
            <hr/>

            <h2> Qual é o melhor anime?</h2>
            <br/>

            <label> <input onChange={ (e)=> alteraP4(e.target.value)} /> </label>
            <br/>
            <br/>
            <br/>
           
            <button onClick={()=> calculaTotal()}>Enviar respostas</button>
            <br/>
            <br/>
            <p>Total de pontos: {total} </p>



        </div>

     );
}

export default Quiz;