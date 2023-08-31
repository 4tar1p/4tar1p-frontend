import React, { useState } from 'react';
import './styles/Reservation.css';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import moment from 'moment';
import RadiusRect from 'components/RadiusRect';
import Header from 'components/Header';
import { useAppSelector } from 'app/hooks';

const Reservation = () => {
  const navigate = useNavigate();

  const [value, onChange] = useState(new Date());
  const { sportsList } = useAppSelector((state) => state.buying);

  const timeList = ['12:00', '12:30', '13:30', '15:00'];

  const handleReserve = () => {
    navigate('/reservationcompletion');
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
            return <option key={i}>{sports.name}</option>;
          })}
        </select>
        <div className="title">시간</div>
        <div className="time_btn_wrapper">
          {timeList.map((time, i) => {
            return (
              <div key={i}>
                <RadiusRect width="100px" height="42px">
                  <div>{time}</div>
                </RadiusRect>
              </div>
            );
          })}
        </div>
      </div>
      <RadiusRect
        height="54px"
        backgroundColor="#6adfa0"
        color="white"
        onClick={handleReserve}
      >
        <div>예약하기</div>
      </RadiusRect>
    </div>
  );
};

export default Reservation;
