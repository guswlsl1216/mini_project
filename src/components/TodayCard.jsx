import { useEffect, useState } from "react"
import { emotions } from "../emotions"
import { fortunes } from "../fortunes"
import './TodayCard.css'
import { Button, Card } from "react-bootstrap"
import styled from "styled-components"



function TodayCard ( ) {
 
  const [selectedEmotion, setSelectedEmotion ] = useState(null);

  const [fortune, setFortune] = useState(null);
  const tempFortunes = ["행복한 하루!", "음...😼", "조금만 기다려줘...", "✨ 운세 뽑는 중...."];
  const [rollingText, setRollingText] = useState(tempFortunes[0])
    useEffect ( () => {

    let i = 0;

    const interval = setInterval(() => {
    setRollingText(tempFortunes[i % tempFortunes.length]);
    i++;

    },500);
  
    const timeout = setTimeout(() => {
      clearInterval(interval);
    
    const randomIndex = Math.floor(Math.random() * fortunes.length);
      setFortune(fortunes[randomIndex]);
   
    }, 3000);

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    };
   

  }, []);

  const handleEmotionClick = (emotionId) => {
      setSelectedEmotion(emotionId);

  const today = new Date(Date.now() + 9 * 60 * 60 * 1000)
  .toISOString()
  .split('T')[0];

  const saveEmotions = JSON.parse(localStorage.getItem('emotionHistory')) || {};
  saveEmotions[today] = emotionId;
  localStorage.setItem('emotionHistory', JSON.stringify(saveEmotions));

};
   

  return (

    <div className="today-cards-container" style={{ maxWidth: '360px', margin: 'auto' }}> 
      { !fortune ? (
        <div style={{ fontSize:'"1.8rem', margin: '40px 0', textAlign: 'center'}}>
          {rollingText}
        </div>
      ) : (
      <Card className="fortune-card" style={{ marginBottom:'30px' }}>
          <Card.Img variant="top"  src={fortune.img} alt='fortune img' />
          <Card.Body>
          <Card.Title>오늘의 운세🍀</Card.Title>
          <Card.Text>{fortune.text}</Card.Text>
          </Card.Body>
      </Card> 
      )}
      

      <div className="emotions-while"> 
        
        <h2>오늘의 감정 선택🧠</h2>
          <div className="emtions-list">
              {emotions.map(({id, emoji, label}) => {
              const isSelected = selectedEmotion === id;

              return (            
              <Button key={id} className={ `emotion-button ${isSelected ? 'emotions-card-selected' : ''} `}
                onClick={() => handleEmotionClick(id)}
              >
              
              
              <span className="emoji">{emoji}</span>
            
              <span className="label">{label}</span>
            </Button>
              );
            })}
          </div> 
        </div>
  </div>

) };


export default TodayCard;

