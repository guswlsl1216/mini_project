import DiaryCard from "../components/DiaryCard";
import HealingHeader from "../components/HealingHeader";
import { motion } from "framer-motion";
import TodayDiaryList from "../components/TodayDiaryList";
import { useEffect, useState } from "react";
import { style, title } from "framer-motion/client";
import diaryStorage from "../utils/diaryStorage";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TodayRecord () {
  const [diaryList, setDiaryList] = useState([]);
  const navigate = useNavigate();

  useEffect( () => {
    const diariesObj = diaryStorage.getAllDiary();

    const diariesArray = Object.entries(diariesObj).map(([date, diary]) => ({
      id: date,
      date: date,
      title: diary.title,
      content : diary.content,
    }));
    setDiaryList(diariesArray)
  }, []);

  return (
    
    <>
      <div>
      <HealingHeader />
      </div>

      <div>
       <TodayDiaryList diaryList={diaryList}/>
      </div>

      <button className="write-button" onClick={() => { console.log("버튼 클릭"); navigate("/write"); }}
        style = {{
        position: "fixed", right: "35px",  borderRadius: "20%",
        width: "150px", height: "80px",fontSize: "20px", backgroundColor: "#fcd34d",
        color: "#333", border: 'none', boxShadow: "0,0,0,0.5",   fontFamily: "'Pretendard', sans-serif", fontSize: '15px'
        , fontWeight: "600"}}  
        > 일기 쓰기 Click! 🪄
      </button>

    </>
  );


}


export default TodayRecord;