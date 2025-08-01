
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { useState } from 'react'
import MainPage from './pages/MainPage'

import Breath from './pages/Breathe'
import Stories from './pages/Stories'
import Feels from './pages/Feels'
import Test from './pages/Test'
import TodayCard from './components/TodayCard'
import TodayRecord from './pages/TodayRecord'
import './utils/diaryStorage'
import DiaryWrite from './pages/DiaryWrite'

// import Detail from './pages/Detail'

function App() {

  const [content, setcontent] = useState([]);



  return (
  <BrowserRouter>
    <div className='container'>

   
      <Header />
      
        <Routes>
          <Route path='/' element={<MainPage content={content}/>} />
            
          <Route path='/TodayRecord' element={<TodayRecord />} />
          <Route path='/Write' element={<DiaryWrite />}  />
          <Route path='/Breath' element={<Breath />} />
          <Route path='/Stories' element={<Stories />} />
          <Route path='/Feels' element={<Feels />} />
          <Route path='/Test' element={<Test />} />    
      
        </Routes>
    
    
    </div>
    </BrowserRouter>
  )
}

export default App

// 오늘 기록 : Today, 마음 챙김 : Breath , 공유 일기 : Stories , 감정 루틴 Feel
// 