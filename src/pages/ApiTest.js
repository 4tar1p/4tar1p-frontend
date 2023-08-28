import { test } from 'api/api';
import RadiusRect from 'components/RadiusRect';
import { setResponse } from 'features/apiTestSlice/apiTestSlice';
import { React } from 'react';
import { useDispatch } from 'react-redux';

const ApiTest = () => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const response = await test();
      console.log('api test log', response);
      dispatch(setResponse(response));
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <RadiusRect
        height="80px"
        backgroundColor="#32a852"
        margin="30px"
        onClick={handleClick}
      >
        ApiTest
      </RadiusRect>
    </div>
  );
};

export default ApiTest;
