import { React, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import RadiusRect from 'components/RadiusRect';
import Header from 'components/Header';
import {
  decreaseCnt,
  increaseCnt,
  selectedSports,
  setTotalPrice,
  setTotalOriginPrice,
  setTotalCount,
  initCnt,
} from 'features/buying/buying';
import { useNavigate } from 'react-router-dom';
import { regionList } from 'constants/constants';
import './styles/Buying.css';

const SportsCard = ({ sports, calculateTotalPay }) => {
  const { totalPrice } = useAppSelector((state) => state.buying);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(selectedSports(sports.id));
  };

  const handleIncrease = () => {
    dispatch(increaseCnt(sports.id));
    // dispatch(setTotalPrice(sports.price));
    calculateTotalPay(sports.id, +1);
  };

  const handleDecrease = () => {
    if (sports.cnt <= 0) {
      return;
    }
    dispatch(decreaseCnt(sports.id));
    // dispatch(setTotalPrice(-1 * sports.price));

    calculateTotalPay(sports.id, -1);
  };

  return (
    <div className="sports_card" onClick={handleClick}>
      <img className="sports_img" src={sports.imgSrc}></img>
      <div style={{ fontSize: '2em', fontWeight: 'bold' }}>{sports.name}</div>
      <div style={{ fontWeight: 'bold', color: 'red' }}>
        1회 {sports.price}원
      </div>
      <div
        style={{
          fontWeight: 'bold',
          color: 'gray',
          textDecoration: 'line-through',
        }}
      >
        1회 {sports.originPrice}
      </div>
      <div className="increase-decrease-count">
        <img
          className="cnt_btn"
          src={'/minus.png'}
          onClick={handleDecrease}
        ></img>
        <div>{sports.cnt}</div>
        <img
          className="cnt_btn"
          src={'/add.png'}
          onClick={handleIncrease}
        ></img>
      </div>
    </div>
  );
};

const Buying = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { sportsList, totalPrice, totalOriginPrice, totalCount } =
    useAppSelector((state) => state.buying);

  const [isClick, setIsClick] = useState(false);
  const [spanClassName, setSpanClassName] = useState('countAlertMessage-hide');
  const [payButtonBackgroundColor, setPayButtonBackgroundColor] =
    useState('#EDF1D6');
  const [payButtonColor, setPayButtonColor] = useState('#40513B');

  useEffect(() => {
    setSpanClassName(
      totalCount != 10 ? 'countAlertMessage' : 'countAlertMessage-hide',
    );
    setPayButtonBackgroundColor(totalCount != 10 ? '#EDF1D6' : '#609966');
    setPayButtonColor(totalCount != 10 ? '#40513B' : 'white');
  }, [totalPrice]);

  const handlePay = () => {
    if (!isClick) {
      setIsClick(true);
    }

    let totalCount = 0;
    sportsList.forEach((sport) => {
      totalCount += sport.cnt;
    });

    if (totalCount != 10) {
      // setSpanClassName('countAlertMessage');
      return;
    }
    // setSpanClassName('countAlertMessage-hide');
    dispatch(initCnt());
    navigate('/buyingcompletion');
  };

  const calculateTotalPay = (sportId, plusOrMinus) => {
    if (totalPrice < 0 && plusOrMinus == -1) {
      return;
    }

    dispatch(setTotalCount(plusOrMinus));
    dispatch(setTotalPrice(sportsList[sportId].price * plusOrMinus));
    dispatch(
      setTotalOriginPrice(sportsList[sportId].originPrice * plusOrMinus),
    );
  };

  return (
    <div className="page">
      <Header title="이달의운세" />
      <div className="progressTitle">횟수를 선택해주세요!</div>
      <div className="sports_card_wrapper">
        {sportsList.map((sports, i) => {
          return (
            <SportsCard
              key={i}
              sports={sportsList[i]}
              calculateTotalPay={calculateTotalPay}
            />
          );
        })}
      </div>
      {isClick && (
        <span
          className={spanClassName}
          style={{ color: 'red', fontSize: '12px', textAlign: 'right' }}
        >
          *총 10회를 선택해주세요
        </span>
      )}
      <hr />
      <div className="total-container">
        <div style={{ color: 'red', fontSize: '30px', fontWeight: 'bold' }}>
          {totalPrice}원
        </div>
        <div className="total-count-div">{totalCount}회</div>
      </div>
      <div
        style={{
          paddingLeft: '10px',
          color: 'gray',
          fontSize: '25px',
          fontWeight: 'bold',
          textDecoration: 'line-through',
        }}
      >
        {totalOriginPrice}원
      </div>
      <RadiusRect
        height="54px"
        backgroundColor={payButtonBackgroundColor}
        color={payButtonColor}
        onClick={handlePay}
      >
        <div>결제</div>
      </RadiusRect>
    </div>
  );
};

export default Buying;
