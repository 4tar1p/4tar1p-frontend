// BuyingCompletion.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RadiusRect from 'components/RadiusRect';
import './styles/BuyingCompletion.css';

const BuyingCompletion = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="page">
      <div className="buying_completion_wrapper">
        <div className="buying_completion_title">{`구독이 완료되었습니다.`}</div>
        <div className="buying_completion_title">{`2만원 절약하셨네요!💸`}</div>
        <RadiusRect
          backgroundColor="#6adfa0"
          color="white"
          width="340px"
          height={'72px'}
          fontSize={'24px'}
          fontWeight={500}
          onClick={handleGoHome}
        >
          <div>홈으로 이동하기</div>
        </RadiusRect>
      </div>
    </div>
  );
};

export default BuyingCompletion;
