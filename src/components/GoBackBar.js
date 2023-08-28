import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/GoBackBar.css';

const GoBackBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="go_back_bar" onClick={handleClick}>
      <img className="left_arrow" src="/left_arrow.png"></img>
    </div>
  );
};

export default GoBackBar;
