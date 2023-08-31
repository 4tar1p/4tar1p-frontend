// ReservationCompletion.js
import React from 'react';
import './styles/Reservation.css'; 
import { useNavigate } from 'react-router-dom';

const ReservationCompletion = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/ui');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>예약이 완료되었습니다</h2>
      <button 
        style={{ marginTop: '20px', padding: '10px 20px' }}
        onClick={handleGoHome}
      >
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default ReservationCompletion;
