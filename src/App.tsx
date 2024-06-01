import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Clientes from "./pages/Clientes"
import Pedidos from "./pages/Pedidos"
import Produtos from "./pages/Produtos"
import Layout from "./pages/layout"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/" element={ <Dashboard /> } />
          <Route path="/clientes" element={ <Clientes /> } />
          <Route path="/pedidos" element={ <Pedidos /> } />
          <Route path="/produtos" element={ <Produtos /> } />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
