import { useEffect, useState } from "react";

const RollingText = ({ items, speed = 100, duration = 3000 }) => {
  // 현재 보여줄 인덱스
  const [index, setIndex] = useState(0);
  // 롤링 중인지 여부
  const [isRolling, setIsRolling] = useState(true);

  useEffect(() => {
    if (!isRolling) return;

    // 1) 순차 롤링용 인터벌: speed(ms)마다 다음 인덱스로
    const rollInterval = setInterval(() => {
      setIndex(prev => (prev + 1) % items.length); // index랑 같음. 그냥 꺼내오는거임 
    }, speed);

    // 2) duration(ms) 후 랜덤 확정
    const stopTimeout = setTimeout(() => {
      clearInterval(rollInterval);
      const randomIdx = Math.floor(Math.random() * items.length); // 배열방 난수로 저장하는 state 활용 
      setIndex(randomIdx);
      setIsRolling(false);
    }, duration);

    // cleanup
    return () => {
      clearInterval(rollInterval);
      clearTimeout(stopTimeout);
    };
  }, [isRolling, items, speed, duration]);

  return (
    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
      {items[index]}
    </div>
  );
};

export default RollingText