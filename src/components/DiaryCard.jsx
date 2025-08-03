import { FaPenNib, FaRegCalendarAlt } from 'react-icons/fa';
import './DiaryCard.css';

function DiaryCard ( {date, title, content} )  {

const preview = content.length > 30 ? content.slice(0,30) + "..." : content || ""; 



return (
<div className="diary-card" >
  <div className="diary-date"><FaRegCalendarAlt/>{date}</div>

  <div className="diary-title">
    <FaPenNib/>{title}</div>

  <div className="diary-content">{preview}</div>
</div>


);


}




export default DiaryCard;