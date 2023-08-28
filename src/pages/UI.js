import GoBackBar from 'components/GoBackBar';
import ProgressBar from 'components/ProgressBar';
import RadiusRect from 'components/RadiusRect';
import { React } from 'react';

const UI = () => {
  return (
    <div>
      <GoBackBar />
      <RadiusRect height="80px" backgroundColor="#32a852" margin="30px">
        RadiusRect
      </RadiusRect>
      <ProgressBar value={50} />
    </div>
  );
};

export default UI;
