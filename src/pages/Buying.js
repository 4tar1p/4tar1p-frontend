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
  initTotalCnt,
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
      <div style={{ fontSize: '1.1em', fontWeight: 'bold' }}>{sports.name}</div>
      <span
        style={{
          fontSize: '13px',
          color: 'gray',
          textDecoration: 'line-through',
        }}
      >
        {sports.originPrice}원/회
      </span>
      <br></br>
      <span style={{ fontWeight: 'bold', color: '#e86a33' }}>
        {sports.price.toLocaleString('ko-KR')}원
      </span>
      <span style={{ fontSize: '15px' }}>/회</span>
      <div className="increase-decrease-count">
        <span className="material-symbols-outlined" onClick={handleDecrease}>
          do_not_disturb_on
        </span>
        <span>{sports.cnt}</span>
        <span className="material-symbols-outlined" onClick={handleIncrease}>
          add_circle
        </span>
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
    dispatch(initTotalCnt());
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
      <div className="buying_wrapper">
        <div className="progressTitle">지역을 선택해주세요!</div>
        <div style={{ padding: '0 10px' }}>
          <select className="reservation_sports_wrapper">
            {regionList.map((region, i) => {
              return (
                <option key={i} style={{}}>
                  {region.name}
                </option>
              );
            })}
          </select>
        </div>
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
        <div style={{ textAlign: 'end', margin: '15px 10px' }}>
          <div
            style={{
              paddingLeft: '10px',
              color: 'gray',
              fontSize: '20px',
              textDecoration: 'line-through',
            }}
          >
            {totalOriginPrice.toLocaleString('ko-KR')}원
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr' }}>
            <div
              style={{
                fontSize: '20px',
                margin: 'auto 0 5px auto',
              }}
            >
              {totalCount}회
            </div>

            <div
              style={{ color: '#e86a33', fontSize: '30px', fontWeight: 'bold' }}
            >
              {totalPrice.toLocaleString('ko-KR')}원
            </div>
          </div>
        </div>
        <RadiusRect
          width="100%"
          height="54px"
          backgroundColor={payButtonBackgroundColor}
          color={payButtonColor}
          onClick={handlePay}
        >
          <div>결제</div>
        </RadiusRect>
      </div>
    </div>
  );
};

export default Buying;
