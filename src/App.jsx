import './CSS/App.css'
import './CSS/header.css'
import './CSS/main.css'
import './CSS/index.css'
import Header from './components/Header'
import Card from './components/Card'
import Index from './components/Index'


function App() {
  const cardData = [
    { image: 'https://images.unsplash.com/photo-1497384401032-2182d2687715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlsbHN8ZW58MHx8MHx8fDA%3D', text: 'Ipsum Feugiat' },
    { image: './src/images/card2.jpg', text: 'Ipsum Feugiat' },
    { image: './src/images/card3.jpg', text: 'Ipsum Feugiat' },
    { image: './src/images/card4.jpg', text: 'Ipsum Feugiat' },
    { image: './src/images/card5.jpg', text: 'Ipsum Feugiat' },
    { image: './src/images/card6.jpg', text: 'Ipsum Feugiat' },
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
