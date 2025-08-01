import { useState } from "react";
import { useNavigate } from "react-router-dom"

const STORAGE_KEY = 'diarydata';

function DiaryWrite () {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if(title.trim() === "" || content.trim() === "") {
      alert("제목과 내용을 모두 입력해 주세요!")
    return;
  }

  const today = new Date().toISOString().split('T')[0];

  
  const newDiary = { //객체로 만든거임 
    title,
    content,
  };

  

  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  saved[today] = newDiary;

  localStorage.setItem(STORAGE_KEY,JSON.stringify(saved));

  navigate('/TodayRecord');

};

  return (

    <div className="diary-write-container" style={{padding: "20px"}}>
      <h2>오늘의 일기 쓰기 ✏️</h2>

      <input className="diary-title-input" type="text" placeholder="제목을 입력하세요" value={title} onChange={(e) => setTitle(e.target.value)}
       style={{width: "100%", padding:"10px", marginBottom: "10px", fontSize: "16px"}}/>

      <textarea className="diary-content-input" placeholder="내용을 입력하세요" value={content} onChange={(e) => setContent(e.target.value)} rows={10}
        style={{width: "100%", padding: "10px", marginBottom: "10px", fontSize: "16px"}}/>

      <button onClick={handleSave} className="save-button" 
      style={{backgroundColor: "#fcd34d", border: "none", padding: "10px 20px",
        fontSize: "16px", color: "#333", cursor: "pointer" 
      }} >저장하기</button>
    </div>
  )
}



export default DiaryWrite