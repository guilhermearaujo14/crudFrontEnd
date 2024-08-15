
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Usuario } from './pages/usuario/cadastroUsuario'
import { Navbar } from './components/navbar';
import { UsuariosList } from './pages/usuario/listaUsuarios';
import { ListaProdutos } from './pages/produto/listaProdutos';
import { CadastraProduto } from './pages/produto/cadastraProdutos';

function App() {


  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Usuario />}/>
          <Route path='/usuarios' element={<UsuariosList />} />
          <Route path='/produtos' element={<ListaProdutos />} />
          <Route path='/produto' element={<CadastraProduto />} />
        </Routes>
    </Router>
     
    </>
  )
}

export default App
