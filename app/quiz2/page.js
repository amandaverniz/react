'use client'

import { useState} from "react";
import "./quiz.css"

function Quiz2() {

const [ p1, alteraP1 ] = useState(0)
const [p2, alteraP2] = useState(0)

const [ total, alteraTotal] = useState(0)

const [mostraP1, alteraMostraP1] = useState(true)
const [ mostraP2, alteraMostraP2] = useState(false)





function calculaTotal(){

    let totalAtualizado = 0

alteraTotal(totalAtualizado)
   totalAtualizado= p1+p2

    let valordobanco = parseInt (localStorage.getItem("total"))
    localStorage.setItem("total", totalAtualizado+ valordobanco)


}

    return ( 
        <div>

            <h1>Quiz</h1>
            <p>Assinale a opção correta</p>

            <hr/>


            {
                mostraP1 == true &&

            <div>    
                <h2> Qual a cor do cavalo branco de Napoleão</h2>
                <br/>
    
                <label> <input name="p1" type= "radio" onChange={ ()=>{ alteraP1(1); alteraMostraP2(true); alteraMostraP1(false)}  }/> Branco</label>
                <br/>
                <label> <input name="p1" type= "radio" onChange={ ()=> { alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)}}/> Azul</label>
                <br/>
                <label> <input name="p1" type= "radio" onChange={ ()=>{ alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)}  }/> Preto</label>
                <br/>
                <hr/>

             </div>

            // fragmento: usado no react
            //<></>    

            }


            {
                mostraP2 == true &&
             <div>   
                <h2> Qual a melhor letra?</h2>
                <br/>
    
                <label> <input name="p2" type= "radio"onChange={ ()=> alteraP2(1)} /> A</label>
                <br/>
                <label> <input name="p2" type= "radio"onChange={ ()=> alteraP2(0)  } /> B</label>
                <br/>
                <label> <input name="p2" type= "radio" onChange={ ()=> alteraP2(0)  }/> C</label>
    
                <br/>
                <hr/>
             </div>   
            }    


        <button onClick={()=> calculaTotal()}>Enviar respostas</button>
            <br/>
            <br/>
            <p>Total de pontos: {total} </p>




        </div>

     );
}

export default Quiz2;