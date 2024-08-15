
import './style.css';

// eslint-disable-next-line react/prop-types
export function TopoDePagina({ titulo, tituloBotao, irPara}){
    return(
        <div className="container mb-2 mt-2">
            <div className="row">
                <div className="col">
                    {titulo}
                </div>
            
                <div className="col colunaBtnSuperior">
                   <button className="btn btn-secondary" onClick={irPara}>{tituloBotao}</button>
                </div>
            </div>
        </div>
    )
}