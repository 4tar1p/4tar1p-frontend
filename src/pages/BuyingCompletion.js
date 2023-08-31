// BuyingCompletion.js
import React from 'react';
import './styles/Buying.css';
import { useNavigate } from 'react-router-dom';

const BuyingCompletion = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/homewithsub');
  };

  const handleReservation = () => {
    navigate('/reservation');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>구독이 완료되었습니다.</h2>
      <br></br>
      <h2>2만원 절약하셨네요!💸</h2>
      
      <button
        style={{ marginTop: '20px', padding: '10px 20px' }}
        onClick={handleGoHome}
      >
        홈으로 이동하기
      </button>
    </div>
  );
};

export default BuyingCompletion;
