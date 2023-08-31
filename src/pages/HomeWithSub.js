import { React } from 'react';
import './styles/Home.css';
import { useNavigate } from 'react-router-dom';

const HomeWithSub = () => {
  const navigate = useNavigate();
  
  const handleReservation = () => {
    navigate('/reservation');
  };

  return (
    <div className="page home">
      
        <p className='homeTitle'>유진님!</p>
        <p className='homeTitle'>저와 같이 운동해요</p>
      

      <button className='mainButton' onClick={handleReservation}>예약 하기</button>

      
      <p style={{ textAlign: 'center', fontWeight: 'bold'}}>이런 헬스컨텐츠는 어때요?</p>
      
      {/* 헬스 컨텐츠 */}
      <div className="contents_box_wrapper">
        <div className='contentsBox'>
          <p style={{fontWeight: 'bold'}}>마음을 편안하게 하는 명상법</p>
          <img  className = "health_img" src='/healthy01.png'></img>
        </div>
        <div className='contentsBox'>
          <p style={{fontWeight: 'bold'}}>컨텐츠 제목</p>
          <img  className = "health_img" src='/healthy02.png'></img>
        </div>
        <div className='contentsBox'>
          <p style={{fontWeight: 'bold'}}>컨텐츠 제목</p>
          <img  className = "health_img" src='/healthy03.png'></img>
        </div>
        <div className='contentsBox'>
          <p style={{fontWeight: 'bold'}}>컨텐츠 제목</p>
          <img  className = "health_img" src='/healthy04.png'></img>
        </div>
        <div className='contentsBox'>
          <p style={{fontWeight: 'bold'}}>컨텐츠 제목</p>
          <img  className = "health_img" src='/healthy05.png'></img>
        </div>
      </div>
    </div>
  );
};
export default HomeWithSub;
