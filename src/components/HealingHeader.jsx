import {motion} from 'framer-motion';
import './HealingHeader.css';
import  heart from '../img/heart.jpg';

function HealingHeader (){

  const healingTexts = [
    "오늘 하루, 어떤 감정을 느꼈나요?",
    "조용히 마음을 들여다 보는 시간이에요.",
    "지금의 나에게 가장 솔직해질 수 있는 순간이에요"
  ];

  const text = healingTexts[Math.floor(Math.random() * healingTexts.length)]

  
return (

  <div className='healing-header-container'>
    <img src={heart} alt='heart-img' className='healing-header-img' />
    

    <motion.div className='healing-header-text' 
    initial={{ opacity: 0, y: -10}} animate={{ opacity: 1, y: 0}} transition={{ duration: 1}}>
    {text}  
    </ motion.div>

  </div>
) 

}

export default HealingHeader;