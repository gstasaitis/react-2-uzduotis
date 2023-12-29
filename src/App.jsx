import './CSS/App.css'
import './CSS/header.css'
import './CSS/main.css'
import './CSS/index.css'
import Header from './components/Header'
import Card from './components/Card'
import Index from './components/Index'


function App() {
  const cardData = [
    { image: '/src/images/card1.jpg', text: 'Ipsum Feugiat' },
    { image: 'src/images/card2.jpg', text: 'Ipsum Feugiat' },
    { image: 'src/images/card3.jpg', text: 'Ipsum Feugiat' },
    { image: 'src/images/card4.jpg', text: 'Ipsum Feugiat' },
    { image: 'src/images/card5.jpg', text: 'Ipsum Feugiat' },
    { image: 'src/images/card6.jpg', text: 'Ipsum Feugiat' },


    { image: 'https://images.unsplash.com/photo-1497384401032-2182d2687715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlsbHN8ZW58MHx8MHx8fDA%3D', text: 'Ipsum Feugiat' },
    { image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW5zfGVufDB8fDB8fHww', text: 'Ipsum Feugiat' },
    { image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW5zfGVufDB8fDB8fHww', text: 'Ipsum Feugiat' },
    { image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D', text: 'Ipsum Feugiat' },
    { image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D', text: 'Ipsum Feugiat' },
    { image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D', text: 'Ipsum Feugiat' },
  ]
  return (
    <>
      <Header/>
      <div className='portfolio'>
        <Index/>
      </div>
      <main>
        <div className='cards'>
        {cardData.map((card, index) => (
        <Card key={index} image={card.image} text={card.text} />
      ))}
    </div>
      </main>

    </>
  )
}

export default App
