import React, { useState } from "react";
import TodayCard from "../components/TodayCard";
import EmotionCalendar from "../components/Calendar";
import TodayEmotionselector from "../components/TodayEmotion";
import './MainPage.css'

function Mainpage () {
    const [emotionHistory, setEmotionHistory] = useState({});
    const [selectedEmotion, setSelectedEmotion] = useState(null);


  return (
 
 <div className="MainPage-Main">
    <div className="Mainpage-fortunes" >
      <TodayCard/> 
    </div>

    <div className="Mainpage-emotions" >
      <TodayEmotionselector
        emotionHistory={emotionHistory}
        setEmotionHistory={setEmotionHistory}
        selectedEmotion={selectedEmotion}
        setSelectedEmotion={setSelectedEmotion}
      />
      
      <div className="calendar-container">
      <EmotionCalendar emotionHistory={emotionHistory} selectedE={selectedEmotion}/>
      </div>

    </div>
  

</div>

     ) }

export default Mainpage;

