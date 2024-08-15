import { TopoDePagina } from '../../../components/topoDePagina';
import './style.css';
import lista from './listaProdutos.json'
import { useNavigate } from 'react-router-dom';


export function ListaProdutos(){
const navigate = useNavigate();

function irParaCadastroProduto(){
    return navigate('/produto')
}

function formataMoeda(valor){
    let valorAjustado = new Intl.NumberFormat("pt-BR", {style: 'currency', currency:'BRL'}).format(valor)
    return valorAjustado
}

    return(
        <div className="container">
            <TopoDePagina titulo={"Produtos"} tituloBotao={"Adicionar produto"} irPara={irParaCadastroProduto} />

            <div className='container'>
                <ul className='list-group list-group-horizontal cardPersonalizado'>
                    {lista.map((produto)=>{
                        return(
                                <li className='list-group-item list-item' key={produto.codigo}>
                                    <div className="card-body" >
                                    <h5 className='tituloCardProdutos'>{produto.nome}</h5>
                                    <div className='containderPrecoEstoque'>
                                        <span className='textValor'>{formataMoeda(produto.valor)}</span>
                                        <span className='textQuantidade'>Estoque: {produto.quantidade}</span>
                                    </div>
                                    <div className='btnComprar'>
                                        <button className='btn btn-outline-success'>Comprar</button>
                                    </div>
                                    </div>
                                </li>
                        )
                    })}
                </ul>
            </div>
        </div>

    )
}