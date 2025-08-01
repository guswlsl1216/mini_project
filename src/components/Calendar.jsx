import './Calendar.css'
import { emotions  } from '../emotions'
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Month from 'react-calendar/dist/YearView/Month.js'


function EmotionCalendar ({selectedE}) {

  const [date, setDate] = useState(new Date());  //초기 값 : 오늘 날짜 생성 코드 
  const [emotionHistory, setEmotionHistory] = useState({}); //초기 값은 빈 객체로 만들어줌 {} // emotionhistory는 키 밸류로 만든 객체 (처음엔 아무것도 입력 안했을 거니까 빈객체로 설정, 클릭해야만 값이 들어갈거니까 )
  
  useEffect(() => {
    
    const stored = localStorage.getItem('emotionHistory');
      if (stored) {
        setEmotionHistory(JSON.parse(stored));
      }
  }, [selectedE]);

  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);
  
  useEffect ( () => {

  const now = new Date ();

  const nextMidnight = new Date(now);  //지금은 기준으로 자정까지 남은 시간 구할거임 // 복사본을 만드는 과정 
  nextMidnight.setHours(24, 0, 0, 0);

  const timeUntilMidnight = nextMidnight - now;

  const timeout = setTimeout ( () => {
    const todayStr = new Date().toISOString().split('T')[0];
    setCurrentDate(todayStr);
    setSelectedEmotionId(null);
    
  }, timeUntilMidnight);  // setTimeout 함수에 "얼마나 기다릴까?"를 밀리초(ms)로 숫자로 줘야 함, 그래서 괄호는 필요 없고 그냥 숫자 하나만 주면 됨 


  return () => clearTimeout(timeout); 
}, [currentDate] );      // 의존성 배열이니까 [] 씌워주고 currentDate 값이 바뀌면 다시 실행 


// ({ activeStartDate, date, view }) => view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null

  const renderTileContent = ({ activeStartDate, date, view}) => {
    if (view == 'month') {
     const month = String(date.getMonth()+1).padStart(2, 0); //(2 자리수 맞춰주기 ), (설정한 숫자로 채워주기 start 앞부터, end 뒤부터)
     const day = String(date.getDate()).padStart(2, 0);
    const dateStr = `${date.getFullYear()}-${month}-${day}` //date.toISOString().split('T')[0];

    const saveEmotionId = emotionHistory[dateStr];
    const saveEmotion = emotions.find( e => String(e.id) === String(saveEmotionId));
      if (saveEmotion) {
        return (
        <div style={{ textAlign: 'center' , marginTop: 4 }}>
          <div style={{fontSize: '18px'}}>{saveEmotion.emoji}</div> 
          <div style={{fontSize: '10px'}}>{saveEmotion.label}</div>  
        </div>
      );
     } 
  }
  return null;  
}



  const dateStr = date.toISOString().split('T')[0];
  const seletedEmotionId = emotionHistory[dateStr];
  const selectedEmotion = emotions.find (e => e.id === seletedEmotionId );


  return (
    <>    
      <h2>나만의 감정 캘린더📆</h2>
      <Calendar onChange={setDate} value={date} tileContent={renderTileContent}  />
      {selectedEmotion && (
        <p>이날의 나의 기분은? {selectedEmotion.emoji} {selectedEmotion.label}</p>
      )}
    </>
  );


}





export default EmotionCalendar;