import { useEffect } from "react";
import { TopoDePagina } from "../../../components/topoDePagina";
import lista from './listaUsuariosTeste.json';
import { useNavigate } from "react-router-dom";
import './style.css';

export function UsuariosList(){
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(lista)
    },[])

function irParaUsuarioEdit(){
    navigate("/");
}

    function formataData(data){
        const dt = new Date(data).toLocaleDateString("pt-BR")
        return dt
    }
    return(
        <div>
            <TopoDePagina titulo={"Lista de usuários"} tituloBotao={"Incluir novo usuário"} irPara={irParaUsuarioEdit}/>
            
            <div className="container containerPrincipalListUser">
                <table className="table table-striped">
                    <thead>
                        <th>Ações</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Nascimento</th>
                        <th>Sexo</th>
                    </thead>
                    <tbody>
                    {lista.map((i, index)=>{       
                            return(
                                <tr key={index}>
                                    <td>-</td>
                                    <td>{i.nome}</td>
                                    <td>{i.email}</td>
                                    <td>{formataData(i.dataNascimento)}</td>
                                    <td>{i.isSexoMasculino === true ? "Masculino" : "Feminino"  }</td>
                                </tr>
                              
                            )
                            
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}