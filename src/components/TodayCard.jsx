import { useEffect, useState } from "react"
import { emotions } from "../emotions"
import { fortunes } from "../fortunes"
import './TodayCard.css'
import { Card } from "react-bootstrap"



function TodayCard () {
  const [fortune, setFortune] = useState(fortunes[0]);
  const tempFortunes = ["행복한 하루!", "음...😼", "조금만 기다려줘...", "✨ 운세 뽑는 중...."];

  useEffect ( () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  setFortune(fortunes[randomIndex]);


  }, [])

  return (

    <div className="today-cards-container" style={{ maxWidth: '360px', margin: 'auto' }}> 
      { fortune &&  (
      <Card className="fortune-card" style={{ marginBottom:'30px' }}>
          <Card.Img variant="top" src={fortune.img} alt='fortune img' />
          <Card.Body>
          <Card.Title>오늘의 운세🍀</Card.Title>
          <Card.Text>{fortune.text}</Card.Text>
          </Card.Body>
      </Card> 
      )}
      

      <div className="emotions-list"> 
        <h2>오늘의 감정 선택🧠</h2>
            {emotions.map(({id, emoji, label}) => (
            <div className="emotions-card" key={id}>
              <span className="emoji">{emoji}</span>
            
              <span className="label">{label}</span>

           </div>
        ))}
        

      </div> 
  </div>

) }


export default TodayCard;

