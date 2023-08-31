import { React } from 'react';
import './styles/CurationCard.css';
import { useAppDispatch } from 'app/hooks';
import { useNavigate } from 'react-router-dom';

const CurationCard = ({
  children,
  size,
  title,
  imgSrc,
  bgColor,
  id,
  badgeColor,
}) => {
  const navigate = useNavigate();

  if (size === 'l') {
    return (
      <div
        className="l_card"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <img className="l_main_img" src={imgSrc}></img>
        <div className="l_title">
          <div className="curation_card_title">{title}</div>
        </div>
      </div>
    );
  } else if (size === 'm') {
    return (
      <div
        className="m_card"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <img className="m_main_img" src={imgSrc}></img>
        <div className="m_title">
          <div className="curation_card_title">{title}</div>
        </div>
      </div>
    );
  } else if (size === 's') {
    return (
      <div
        className="s_card"
        style={{
          backgroundColor: 'transparent',
        }}
      >
        <img className="s_main_img" src={imgSrc}></img>
        <div className="s_title">
          <div className="curation_card_title">{title}</div>
          {children}
        </div>
      </div>
    );
  }
};

export default CurationCard;
