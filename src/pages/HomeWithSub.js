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
      <div>
        <div className='contents_box' style={{margin: '10px 0 10px 0'}}>
          <div style={{fontWeight: 'bold'}}>운동 후 섭취하면 좋은 과일 알아보기</div>
          <img className = "health_img" src='/healthy_2_01.png'></img>
        </div>
        <div className='contents_box' style={{margin: '10px 0 10px 0'}}>
          <div style={{fontWeight: 'bold'}}>요가로 거북목 치료하기</div>
          <img  className = "health_img" src='/healthy_2_02.png'></img>
        </div>
        <div className='contents_box' style={{margin: '10px 0 10px 0'}}>
          <div style={{fontWeight: 'bold'}}>운동 후 비타민 섭취가 필수인 이유</div>
          <img  className = "health_img" src='/healthy_2_03.png'></img>
        </div>
        <div className='contents_box' style={{margin: '10px 0 10px 0'}}>
          <div style={{fontWeight: 'bold'}}>화창한 날엔 야외로 나가보세요! 야외 요가스팟 추천</div>
          <img  className = "health_img" src='/healthy_2_04.png'></img>
        </div>
      </div>
    </div>
  );
};
export default HomeWithSub;
