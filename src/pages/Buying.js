import { React, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import RadiusRect from 'components/RadiusRect';
import {
  decreaseCnt,
  increaseCnt,
  selectedSports,
} from 'features/buying/buying';
import { useNavigate } from 'react-router-dom';
import { regionList } from 'constants/constants';
import './styles/Buying.css';

const SportsCard = ({ sports }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(selectedSports(sports.id));
  };

  const handleIncrease = () => {
    dispatch(increaseCnt(sports.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseCnt(sports.id));
  };

  return (
    <div className="sports_card" onClick={handleClick}>
        <img  className = "sports_img" src={sports.imgSrc}></img>
        <div style={{fontSize:'2em', fontWeight:'bold'}}>{sports.name}</div>
        <div style={{fontWeight:'bold', color:'red'}}>1회 {sports.price}원</div>
        <div style={{fontWeight:'bold', color:'gray', textDecoration:'line-through'}}>1회 {sports.originPrice}</div>
        <div className='increase-decrease-count'>
          <img
            className="cnt_btn"
            src={'/minus.png'}
            onClick={handleDecrease}
          ></img>
          <div>{sports.cnt}</div>
          <img className="cnt_btn" src={'/add.png'} onClick={handleIncrease}></img>
      </div>
    </div>
  );
};

const Buying = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { sportsList } = useAppSelector((state) => state.buying);

  const [isClick, setIsClick] = useState(false);

  const spanClassName = (className) => {
    return className;
  };

  const handlePay = () => {
    setIsClick(true);
    let totalCount = 0;
    sportsList.forEach(sport => {
      totalCount += sport.cnt;
    });

    if (totalCount != 10) {
      spanClassName('countAlertMessage');
      return;
    }
    spanClassName('countAlertMessage-hide');
    navigate('/buyingcompletion');
  };

  return (
    <div className="page">
      <div className="progressTitle">횟수를 선택해주세요!</div>
      <div className="sports_card_wrapper" >
        {sportsList.map((sports, i) => {
            return <SportsCard key={i} sports={sportsList[i]} />;
        })}
        {isClick && <span className={spanClassName}>
          *총 10회를 선택해주세요
        </span>}
      </div>
      <RadiusRect
        height="54px"
        backgroundColor="#6adfa0"
        color="white"
        onClick={handlePay}
      >
        <div>결제</div>
      </RadiusRect>
    </div>
  );
};

export default Buying;
