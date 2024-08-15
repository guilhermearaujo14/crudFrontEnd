import { useState } from 'react';
import { TopoDePagina } from '../../../components/topoDePagina';
import './style.css';
import { useNavigate } from 'react-router-dom';


export function CadastraProduto(){
    const [produto, setProduto] = useState({
        codigo: '',
        nome: '',
        valor: 0,
        quantidade: 0
    })

    const navigate = useNavigate();

    function irParaListaProdutos(){
       return navigate("/produtos");
    }

    function CadastrarProduto(e){
        e.preventDefault();
        console.log(produto)
    }

    return(
        <div className="container">
            <TopoDePagina titulo={"Cadastro de produtos"} tituloBotao={"Lista de produtos"} irPara={irParaListaProdutos} />
            <form action="">
                <input type="text" name="codigo" className='form-control mb-2' id="codigo" placeholder='Digite o código' value={produto.codigo} onChange={(e)=>{setProduto({...produto, codigo: e.target.value})}} />
                <input type="text" name="descricao" id="descricao" className="form-control mb-2" placeholder='Descrição do produto' value={produto.nome} onChange={(e)=>{setProduto({...produto, nome: e.target.value})}}  />
                <input type="number" name="valor" id="valor" className="form-control mb-2" placeholder='valor do produto' value={produto.valor} onChange={(e)=>{setProduto({...produto, valor: e.target.value})}} />
                <input type="number" name="quantidade" id="quantidade" className="form-control mb-2" placeholder='Quantidade do produto' value={produto.quantidade} onChange={(e)=>{setProduto({...produto, quantidade: e.target.value})}} />
                <button className='btn btn-dark' onClick={CadastrarProduto}>Cadastrar</button>
            </form>
        </div>
    )
}