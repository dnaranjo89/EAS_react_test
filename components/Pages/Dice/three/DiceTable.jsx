import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Canvas } from 'react-three-fiber';
import { Physics } from 'use-cannon'; // eslint-disable-line import/no-unresolved

import Die from './Die.jsx';
import Plane from './Plane.jsx';

import withTracking from '../../../../hocs/withTracking.jsx';
import STYLES from './DiceTable.module.scss';

const MAX_CANVAS_SIZE = 1300;
const MIN_CANVAS_SIZE = 375;

const DiceTable = ({ dice, onResult, setupActions }) => {
  const canvasRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(null);
  useEffect(() => {
    setCanvasWidth(canvasRef.current?.offsetWidth);
  }, [canvasRef]);

  const getHandleResult = id => result => onResult(id, result);
  const getSetupActions = id => (roll, hide) => setupActions(id, roll, hide);
  const positionLeftWall =
    (1.8 * (canvasWidth - MIN_CANVAS_SIZE)) / (MAX_CANVAS_SIZE - MIN_CANVAS_SIZE);
  return (
    <div className={STYLES.container} ref={canvasRef}>
      <Canvas
        style={{ zIndex: 1 }}
        camera={{ position: [0, 7, 10], fov: 15, near: 0.1, far: 50 }}
        colorManagement
        shadowMap
      >
        <color attach="background" args={['#fbfdeb']} />

        <hemisphereLight intensity={0.1} />
        <directionalLight position={[-8, 20, 10]} shadow-camera-right={6} castShadow />
        <Physics
          defaultContactMaterial={{
            friction: 0.03,
          }}
        >
          <Plane position={[0, -0.15, 0]} />
          <Plane rotation={[0, 0, 0]} position={[0, 0, -2.8]} />
          <Plane
            rotation={[0, Math.PI / 2, Math.PI / 2]}
            position={[-2 - positionLeftWall, 0, 0]}
          />

          {dice.map(({ id, active }) => (
            <Die
              key={id}
              id={id}
              active={active}
              onResult={getHandleResult(id)}
              setupActions={getSetupActions(id)}
            />
          ))}
        </Physics>
      </Canvas>
    </div>
  );
};

DiceTable.propTypes = {
  setupActions: PropTypes.func.isRequired,
  onResult: PropTypes.func.isRequired,
  dice: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default withTracking(DiceTable);
