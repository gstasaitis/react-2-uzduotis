import './CSS/App.css'
import './CSS/header.css'
import './CSS/main.css'
import './CSS/index.css'
import Header from './components/Header'
import Card from './components/Card'
import Index from './components/Index'


function App() {
  const cardData = [
    { image: 'images/card1.jpg', text: 'Ipsum Feugiat' },
    { image: './src/images/card2.jpg', text: 'Ipsum Feugiat' },
    { image: './images/card3.jpg', text: 'Ipsum Feugiat' },
    { image: '/images/card4.jpg', text: 'Ipsum Feugiat' },
    { image: '//images/card5.jpg', text: 'Ipsum Feugiat' },
    { image: './../images/card6.jpg', text: 'Ipsum Feugiat' },
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
