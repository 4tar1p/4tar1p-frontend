import { React } from 'react';
import './styles/RadiusRect.css';

const RadiusRect = ({
  children,
  width = '360px',
  height,
  backgroundColor = 'white',
  color = 'black',
  border = 'none',
  margin,
  fontSize,
  fontWeight,
  onClick,
}) => {
  return (
    <div
      className="radius_rect"
      style={{
        width,
        height,
        backgroundColor,
        color,
        border,
        margin,
        fontSize,
        fontWeight,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default RadiusRect;
