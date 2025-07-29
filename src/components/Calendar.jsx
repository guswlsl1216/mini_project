import './Calendar.css'
import { emotions  } from '../emotions'
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function EmotionCalendar () {

  const [date, setDate] = useState(new Date());  //초기 값 : 오늘 날짜 생성 코드 
  const [emotionHistory, setEmotionHistory] = useState({}); //초기 값은 빈 객체로 만들어줌 {} // emotionhistory는 키 밸류로 만든 객체 (처음엔 아무것도 입력 안했을 거니까 빈객체로 설정, 클릭해야만 값이 들어갈거니까 )

  useEffect(() => {

  const stored = localStorage.getItem('emotionHistory');
    if (stored) {
      setEmotionHistory(JSON.parse(stored));
    }
  }, []);

  const handleEmotionSelect = (emotionId) => {
    const dateStr = date.toDateString().split('T')[0];

    



  }




}





export default EmotionCalendar;