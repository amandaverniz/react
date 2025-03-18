import Menu from "./components/Menu";
import Produto from "./components/Produto";

function Produtos() {
    return(
        <div>


           <Menu/>


            <h1>Produtos</h1>
            <p>Bem-vindo a página de produtos! 😊</p>

            <hr/>

          <Produto nome="Maçã" preco="15,90" desconto="15"/>
          <Produto nome="Uva" preco="9,89" comprar={true}/>
          <Produto nome="Pera" preco="11,90"comprar={true}/>
          

        </div>
    )
}

export default Produtos;