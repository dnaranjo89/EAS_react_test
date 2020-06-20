import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import { usePlane } from 'use-cannon';

function Plane({ color, rotation, ...rest }) {
  const [ref] = usePlane(() => ({ rotation, ...rest }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <shadowMaterial attach="material" color="#black" />
      <meshPhongMaterial attach="material" color={color} />
    </mesh>
  );
}

Plane.propTypes = {
  color: PropTypes.string,
  rotation: PropTypes.arrayOf(PropTypes.number),
};

Plane.defaultProps = {
  color: '#acfab0',
  rotation: [-Math.PI / 2, 0, 0],
};

export default Plane;
