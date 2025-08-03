import { useEffect, useState } from "react"
import { emotions } from "../emotions"
import { fortunes } from "../fortunes"
import './TodayCard.css'
import { Button, Card } from "react-bootstrap"
import styled from "styled-components"



function TodayCard ( ) {
 
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


   

  return (

    <div className="today-cards-container" style={{ maxWidth: '360px', margin: 'auto' }}> 
      { !fortune ? (
        <div style={{ fontSize:'"1.8rem', margin: '40px 0', textAlign: 'center'}}>
          {rollingText}
        </div>
      ) : (
      <Card className="fortune-card" style={{ marginBottom:'30px' }}>
          <Card.Img variant="top"  src={fortune.img} alt='fortune img' />
          <Card.Body className="fortune-text">
          <Card.Title className="fortune-title">오늘의 운세🍀</Card.Title>
          <Card.Text>{fortune.text}</Card.Text>
          </Card.Body>
      </Card> 
      )}
      </div>
      



) };


export default TodayCard;

