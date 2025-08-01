function DiaryCard ( {date, title, content} )  {

const preview = content.length > 30 ? content.slice(0,30) + "..." : content || ""; 



return (
<div className="diary-card" style={{
 border: "1px solid #ddd",
 padding: "16px",
 borderRadius: "12px",
 marginBottom: "12px",
 backgroundColor: "#fff",
 boxShadow: "3px 2px 6px rgba(0,0,0,0.05)"

}}>
  <div className="diary-date">{date}</div>

  <div className="diary-title">{title}</div>

  <div className="diary-content">{preview}</div>
</div>


);


}




export default DiaryCard;