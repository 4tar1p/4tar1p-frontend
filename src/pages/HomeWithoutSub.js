import { React } from 'react';
import './styles/Home.css';
import { subPackList } from 'constants/constants';

const HomeWithoutSub = () => {
  return (
    <div className="page home">
      
        <p className='homeTitle'>유진님!</p>
        <p className='homeTitle'>저와 같이 운동해요</p>
      

      <button className='mainButton'>구독 시작하기</button>

      
      <p style={{ textAlign: 'center', fontWeight: 'bold'}}>이런 구독팩은 어때요?</p>
      
      {/* 구독팩 */}
      <div className="contents_box_wrapper">
      {subPackList.map((subPack, i) => {
            return (
              <div key={i} className='contentsBox'>
                  <p style={{fontWeight: 'bold'}}>{subPack.name}</p>
                  {subPack.attributes.map((attr, j) => {
                    return (<p style={{margin: '5%'}} key={j}>{attr.exercise}</p>)
                  })}
              </div>);
          })}
      </div>
    </div>
  );
};
export default HomeWithoutSub;