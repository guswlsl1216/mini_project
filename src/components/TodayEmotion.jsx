import { useState } from "react";
import { emotions } from "../emotions";
import { Button } from "react-bootstrap";
import './TodayEmotion.css';
import './TodayCard.css'

function TodayEmotionselector ({selectedEmotion, setSelectedEmotion}) {
  // const [selectedEmotion, setSelectedEmotion] = useState(null);

  const handleEmotionClick = (emotionId) => {
    
    const today = new Date(Date.now() + 9 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];
    
    const saveEmotions = JSON.parse(localStorage.getItem('emotionHistory')) || {};
    saveEmotions[today] = emotionId;
    localStorage.setItem('emotionHistory', JSON.stringify(saveEmotions));
    
    setSelectedEmotion(emotionId);
};


return (
 <div className="emotions-while"> 
        
        <h2>오늘의 감정 선택🧠</h2>
          <div className="emotions-list">
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

)
};

export default TodayEmotionselector