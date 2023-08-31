import React from 'react';
import './styles/MyPage.css'; 

const MyPage = () => {
  const subscriptions = {
    startDate: '20230102',
    endDate: '20230402',
    usageCount: '3/10',
    exercises: '수영 2, 필라테스 2, 테니스 3, PT 2',
    locationGroup: '홍대/합정/마포',
    autoRenew: 'Y'
  };

  const reservations = [
    {
      exerciseName: '수영',
      date: '20230201',
      facilityName: '월드컵수영장',
      address: '서울시 마포구 월드컵 북로 416'
    },
    {
      exerciseName: '테니스',
      date: '20230301',
      facilityName: '월드컵테니스장',
      address: '서울시 마포구 창천로 70'
    }
  ];

  return (
    <div className="myPage-container">
      <h2>이용권 정보</h2>
      <div>
        <span className="status-box">사용중</span>
      </div>
      <br />
      <table className='info-box'>
        <tr>
          <td>시작일</td>
          <tr>{subscriptions.startDate}</tr>
        </tr>
        <tr>
          <td>만료일</td>
          <tr>{subscriptions.endDate}</tr>
        </tr>
        <tr>
          <td>사용횟수</td>
          <tr>{subscriptions.usageCount}</tr>
        </tr>
        <tr>
          <td>지역 그룹</td>
          <tr>{subscriptions.locationGroup}</tr>
        </tr>
        <tr>
          <td>자동 연장여부</td>
          <tr>{subscriptions.autoRenew === 'Y' ? 'Yes' : 'No'}</tr>
        </tr>
      </table>
      <br />
      <h2>예약 현황</h2>
      <table>
        <thead>
          <tr>
            <th>운동이름</th>
            <th>날짜</th>
            <th>시설 주소</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, idx) => (
            <tr key={idx}>
              <td>{reservation.exerciseName}</td>
              <td>{reservation.date}</td>
              <td>{reservation.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPage;
