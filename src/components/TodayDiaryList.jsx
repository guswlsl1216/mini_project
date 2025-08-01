import DiaryCard from "./DiaryCard";

function TodayDiaryList ({diaryList}) {

return (

  <div className="today-diary-list">
    {diaryList.map((diary)  => (
      <DiaryCard 
        key={diary.id} date={diary.date} title={diary.title} content={diary.content} />

    ))} 
  </div>



);

}

export default TodayDiaryList