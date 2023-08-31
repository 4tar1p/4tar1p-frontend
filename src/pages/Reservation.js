import React, { useState } from 'react';
import './styles/Reservation.css';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import RadiusRect from 'components/RadiusRect';
import Header from 'components/Header';

const Reservation = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleReservation = () => {
    navigate('/ui');
  };

  const [value, onChange] = useState(new Date());
  const timeList = ['12:00', '12:30', '13:30', '15:00'];
  const handleReserve = () => {
    navigate('reservationcompletion');
  };

  return (
    <div className="page">
      <Header title={'예약'} />

      <Calendar onChange={onChange} value={value} />
      <div className="title">날짜</div>
      <div className="date">{moment(value).format('YYYY.MM.DD')}</div>
      <div className="title">운동</div>
      <div> 셀렉트박스 추가</div>
      <div className="title">시간</div>
      <div className="time_btn_wrapper">
        {timeList.map((time, i) => {
          return (
            <RadiusRect key={i} width="100px">
              <div>{time}</div>
            </RadiusRect>
          );
        })}
      </div>
      <RadiusRect
        height="54px"
        backgroundColor="black"
        color="white"
        onClick={handleReserve}
      >
        <div>결제</div>
      </RadiusRect>
    </div>
  );
};

export default Reservation;
