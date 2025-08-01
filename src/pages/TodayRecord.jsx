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

    const diariesArray = Object.entries(diariesObj).map(([date, content]) => ({
      id: date,
      date: date,
      title: "제목 없음",
      content,
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
        position: "fixed", right: "30px", bottom: "20px", borderRadius: "30%",
        width: "80px", height: "80px",fontSize: "32px", backgroundColor: "#fcd34d",
        color: "#333", border: "none", boxShadow: "0,0,0,0.5",   
        }}  
        >
      </button>

    </>
  );


}


export default TodayRecord;