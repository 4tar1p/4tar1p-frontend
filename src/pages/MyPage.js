import { React } from 'react';
import { test, getSubscriptionRervation } from 'api/api';
import './styles/MyPage.css'; 
import { useDispatch } from 'react-redux';

const MyPage = () => {
  const dispatch = useDispatch();

  const getSubscriptionRervation = async () => {
    // try {
    //   const response = await getSubscriptionRervation();
    //   console.log('api test log', response);
    //   dispatch(setResponse(response));
    // } catch (err) {
    //   alert(err);
    // }
  };          

  const mySubscription = {
    userId: 1, // 사용자ID (int)
    userName: "전승민", // 사용자 이름 (String)
    subscriptionDttm: "2023-08-31 00:00:00", // 구독 시작일 (LocalDateTime)
    expirationDttm: "2023-11-31 00:00:00", // 구독 만료일 (LocalDateTime)
    useCount: 0, // 구독권 사용 횟수(총 횟수는 10)
    regionGroup: "홍대/합정/마포", // 지역그룹 (String)
    autoRenewalYn: "Y" // 자동연장여부 (String)
  };
  
  const myReservations = [
    {
      exerciseName: "수영", // 운동ID (int)
      reservationDttm: "2023-08-31 18:30:00", // 예약 날짜 (LocalDateTime)
      facilityAddress: "상암동 월드컵북로416 마포구 스포렉스"
    }, 
    {
      exerciseName: "테니스", // 운동ID (int)
      reservationDttm: "2023-09-03 19:30:00", // 예약 날짜 (LocalDateTime)
      facilityAddress: "상암동 월드컵북로416 다이나믹테니스"
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
        <tbody>
          <tr>
            <td>사용자 이름</td>
            <td>{mySubscription.userName}</td>
          </tr>
          <tr>
            <td>시작일</td>
            <td>{mySubscription.subscriptionDttm.split(' ')[0]}</td>
          </tr>
          <tr>
            <td>만료일</td>
            <td>{mySubscription.expirationDttm.split(' ')[0]}</td>
          </tr>
          <tr>
            <td>사용횟수</td>
            <td>{mySubscription.useCount}/10</td>
          </tr>
          <tr>
            <td>지역 그룹</td>
            <td>{mySubscription.regionGroup}</td>
          </tr>
          <tr>
            <td>자동 연장여부</td>
            <td>{mySubscription.autoRenewalYn === 'Y' ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
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
          {myReservations.map((reservation, idx) => (
            <tr key={idx}>
              <td>{reservation.exerciseName}</td>
              <td>{reservation.reservationDttm.substring(0, 16)}</td>
              <td>{reservation.facilityAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default MyPage;
