import './Calendar.css'
import { emotions  } from '../emotions'

function EmotionCalendar () {

  const today = new Date ();
  const year = today.getFullYear();
  const month = today.getMonth();

  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);
  const startDay = startDate.getDay();
  const dayInMonth = endDate.getDate();

  const emotionHistory = JSON.parse(localStorage.getItem('emotionHistory')) || {};
  const dates = [];

  for(let i=0; i < startDay; i++) {
    dates.push(null);
  }

  for(let day = 1; day <= dayInMonth; day++) {
    const dateStr = new Date( year, month, day ).toISOString().split('T')[0];
    

    const emotion = emotionHistory[dateStr];
    dates.push( {day, emotion});
  }

  while (dates.length % 7 !== 0) {
  dates.push(null);
}

  const calendarCells = dates.map((item, index) => (
    <div key={index} className='calendar-cell'>
      {item ? (
        <>
        <div className='day-number'>{item.day}</div>
        <div className='emoji'>{item.emotion || ''}</div>
        </>
      ) : null }
      
    </div>
  ));

  return (

    <div className='calendar-grid'>
      {calendarCells}
    </div>

  );

}





export default EmotionCalendar;