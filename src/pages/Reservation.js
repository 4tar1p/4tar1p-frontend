import React, { useState } from 'react';
import './styles/Reservation.css';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import moment from 'moment';
import RadiusRect from 'components/RadiusRect';
import Header from 'components/Header';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { changeSelected } from 'features/reservation/reservation';
import { tennisFacillityList } from 'constants/constants';

const Reservation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [value, onChange] = useState(new Date());
  const { sportsList } = useAppSelector((state) => state.buying);
  const { selected } = useAppSelector((state) => state.reservation);

  const timeList = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30'];

  const handleReserve = () => {
    navigate('/reservationcompletion');
  };

  const handleClick = (i) => {
    dispatch(changeSelected(i));
  };

  return (
    <div className="page">
      <Header title={'예약'} />
      <div className="calendar_wrapper">
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => moment(date).format('DD')}
        />
      </div>
      <div className="reservation_wrapper">
        <div className="title">날짜</div>
        <div className="date">{moment(value).format('YYYY.MM.DD')}</div>
        <div className="title">운동</div>
        <select className="reservation_sports_wrapper">
          {sportsList.map((sports, i) => {
            if (i < 3) return <option key={i}>{sports.name}</option>;
          })}
        </select>
        <div className="title">장소</div>
        <select className="reservation_sports_wrapper">
          {tennisFacillityList.map((facillity, i) => {
            return <option key={i}>{facillity}</option>;
          })}
        </select>

        <div className="title">시간</div>
        <div className="time_btn_wrapper">
          {timeList.map((time, i) => {
            return (
              <div key={i} onClick={() => handleClick(i)}>
                <RadiusRect
                  width="100px"
                  height="42px"
                  backgroundColor={selected[i] ? '#609966' : 'white'}
                  color={selected[i] ? 'white' : 'black'}
                >
                  <div>{time}</div>
                </RadiusRect>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          marginTop: '35px'
        }}
      >
        <div style={{ fontSize: '15px', textAlign: 'center' }}>
          테니스 1/2
        </div>
        <div style={{ fontSize: '15px', textAlign: 'center' }}>
          복싱 1/3
        </div>     
        <div style={{ fontSize: '15px', textAlign: 'center' }}>
          수영 1/5
        </div>        
      </div>
      <div style={{ margin: 'auto 20px 10px 20px' }}>
        <RadiusRect
          width="100%"
          height="54px"
          backgroundColor="#609966"
          color="white"
          onClick={handleReserve}
        >
          <div>예약하기</div>
        </RadiusRect>
      </div>
    </div>
  );
};

export default Reservation;
