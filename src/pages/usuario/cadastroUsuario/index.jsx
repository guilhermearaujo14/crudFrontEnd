import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { TopoDePagina } from '../../../components/topoDePagina';

export function Usuario(){
const navigate = useNavigate();

const [usuario, setUsuario] = useState({
    nome:'' ,
    email:'',
    dataNascimento:'',
    isSexoMasculino: false

})


function salvar(e){
    e.preventDefault();
    console.log(usuario)
}


function irParaListaDeUsuario(){
    return navigate("/usuarios");
    
}
    return(
        <div className="container containerFormCadastroUser">
            <TopoDePagina titulo={"Cadastro de usuário"} tituloBotao={"Lista de usuários"} irPara={irParaListaDeUsuario} />
            <form action="" className='formCadastroUsuario' method='post'>
                <div className="mb-3">
                    <input type="text" name="nome" className="form-control" placeholder="Nome completo" id="" value={usuario.nome} onChange={(e)=>{setUsuario({...usuario, nome: e.target.value})}}/>
                </div>
                <div className="mb-3">
                    <input type="email" name="email" className="form-control" placeholder="Informe o email" id="" value={usuario.email} onChange={(e)=>{setUsuario({...usuario, email: e.target.value})}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="dataNascimento">Data de nascimento</label>
                    <input type="date" name="dataNascimento" className="form-control" id="dataNascimento" value={usuario.dataNascimento} onChange={(e)=>{setUsuario({...usuario, dataNascimento: e.target.value})}}/>
                </div>
                <div className="mb-3 containerRadioBtnSexoFormUsuario">
                    <div>
                        <input type="radio" className='form-check-input' name="sexo" id="masculino" onChange={()=>{setUsuario({...usuario, isSexoMasculino: true})}}/> 
                        <label htmlFor="masculino">Masculino</label>
                    </div>
                    <div>
                        <input type="radio" className='form-check-input' name="sexo" id="feminino" onChange={()=>{setUsuario({...usuario, isSexoMasculino: false})}}/> 
                        <label htmlFor="feminino">Feminino</label>
                    </div>
                </div>
                <div className="btnSalvarUsuario">
                    <button className="btn btn-dark btnSalvar" onClick={salvar}>Salvar</button>
                </div>
            </form>
        </div>
    )
}
