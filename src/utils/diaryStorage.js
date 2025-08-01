const STORAGE_KEY = 'diarydata';


function saveDiary (date, diary) {

const data= JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
data[date]= diary;     

localStorage.setItem(STORAGE_KEY, JSON.stringify(data))

}
//특정 날짜 클릭했을 때 
function getDiary () {
 const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

 return data[date] || null;

}

// 모든 일기 목록 보여줄때 
function getAllDiary () {
return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; // 전체 객체 그대로 리턴
}





// let date = "2025-07-31";
// let diary = "오늘은 유딩코딩 했다!"
// let data = {};

// data[date] = diary;

// {
//   "2025-07-31" : "오늘은 유딩코딩 했다! "
// }

export default {saveDiary, getAllDiary, getDiary}
