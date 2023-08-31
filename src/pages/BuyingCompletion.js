// BuyingCompletion.js
import React from 'react';
import './styles/Buying.css';
import { useNavigate } from 'react-router-dom';

const BuyingCompletion = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleReservation = () => {
    // navigate('/reservation');
    navigate('/ui');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>구독권 결제가 완료되었습니다</h2>
      <button
        style={{ marginTop: '20px', padding: '10px 20px', marginRight: '10px' }}
        onClick={handleReservation}
      >
        예약하기
      </button>
      <button
        style={{ marginTop: '20px', padding: '10px 20px' }}
        onClick={handleGoHome}
      >
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default BuyingCompletion;
