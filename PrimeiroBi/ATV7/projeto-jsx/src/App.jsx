import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  // Dados do post armazenados no componente App
  const postData = {
    titulo: 'Descobrindo Cascavel-PR',
    data: '15 de fevereiro de 2026',
    autor: 'Autor do Blog',
    conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dignissimos magnam commodi quidem quo cumque.',
    imagemUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Fotos_do_Centro_de_Cascavel.jpg',
    imagemAlt: 'Foto da cidade de Cascavel-PR',
    imagemLegenda: 'Foto da cidade de Cascavel-PR'
  }

  const relatedPosts = [
    { id: 1, titulo: 'Cidades vizinhas', link: '#' },
    { id: 2, titulo: 'Pontos turísticos', link: '#' },
    { id: 3, titulo: 'Clima', link: '#' }
  ]

  const navLinks = [
    { id: 1, texto: 'Home', url: '#' },
    { id: 2, texto: 'Sobre', url: '#' },
    { id: 3, texto: 'Contato', url: '#' }
  ]

  return (
    <div className="app">
      <Header titulo="Meu blog de viagens">
        <Navigation links={navLinks} />
      </Header>

      <main>
        <Article {...postData} />
        <Sidebar posts={relatedPosts} />
      </main>

      <Footer ano={2026} />
    </div>
  )
}

export default App