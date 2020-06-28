import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useLoader, useFrame } from 'react-three-fiber';
import { useBox } from 'use-cannon'; // eslint-disable-line import/no-unresolved
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { getResult } from './utils';

const ANGULAR_VELOCITY_THRESHOLD = 0.15;
const VELOCITY_THRESHOLD = 0.1;

const initialPosition = [0, 0, 0];
const initialRotation = [0, 0, 0];
const staticVelocity = [0, 0, 0];
const staticAngularVelocity = [0, 0, 0];

const getRandomValues = () => ({
  position: [Math.random() + 2, Math.random() + 1, Math.random() + 2],
  velocity: [-4, -0.5, -5],
  angularVelocity: [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ],
  rotation: [0, 0.2, 0.4],
});

const getHiddenPosition = () => ({
  position: [1000, 0, 1000],
  velocity: staticVelocity,
  angularVelocity: staticAngularVelocity,
  rotation: initialRotation,
});

const isCloseToZero = (velocity, margin) => {
  const [x, y, z] = velocity.current;
  return Math.abs(x) < margin && Math.abs(y) < margin && Math.abs(z) < margin;
};

const isMoving = (velocity, angularVelocity) =>
  !isCloseToZero(velocity, VELOCITY_THRESHOLD) ||
  !isCloseToZero(angularVelocity, ANGULAR_VELOCITY_THRESHOLD);

const getRotation = die => {
  const { x, z } = die.current.rotation;
  return { rotationX: parseFloat(x.toFixed(2)), rotationZ: parseFloat(z.toFixed(2)) };
};

const Die = ({ setupActions, onResult, active }) => {
  const { nodes } = useLoader(GLTFLoader, '/dice/scene.gltf');
  const [rolling, setRolling] = useState(true);

  const {
    position: hiddenDiePosition,
    velocity: hiddenDieVelocity,
    angularVelocity: hiddenDieAngularVelocity,
    rotation: hiddenDieRotation,
  } = getHiddenPosition();

  const [ref, api] = useBox(() => ({
    mass: 0.15,
    position: active ? initialPosition : hiddenDiePosition,
    velocity: active ? staticVelocity : hiddenDieVelocity,
    angularVelocity: active ? staticAngularVelocity : hiddenDieAngularVelocity,
    rotation: active ? initialRotation : hiddenDieRotation,
    allowSleep: true,
    sleepSpeedLimit: 1.0,
    args: [0.3, 0.3, 0.3],
    material: {
      friction: 0,
    },
  }));
  const velocityRef = useRef([1, 1, 1]);
  const angularVelocityRef = useRef([1, 1, 1]);

  const hide = () => {
    const { position, velocity, angularVelocity, rotation } = getHiddenPosition();

    api.velocity.set(...velocity);
    api.angularVelocity.set(...angularVelocity);
    api.rotation.set(...rotation);
    api.position.set(...position);
  };

  const roll = () => {
    const { position, velocity, angularVelocity, rotation } = getRandomValues();

    api.velocity.set(...velocity);
    api.angularVelocity.set(...angularVelocity);
    api.rotation.set(...rotation);
    api.position.set(...position);
    // We are setting some delay here to avoid reading the
    // results before the die start rolling
    setTimeout(() => setRolling(true), 200);
  };

  useEffect(
    () =>
      api.velocity.subscribe(v => {
        velocityRef.current = v;
      }),
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );
  useEffect(
    () =>
      api.angularVelocity.subscribe(av => {
        angularVelocityRef.current = av;
      }),
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    setupActions(roll, hide);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useFrame(() => {
    if (active) {
      const moving = isMoving(velocityRef, angularVelocityRef);

      if (rolling && !moving) {
        const rotation = getRotation(ref);
        const result = getResult(rotation);
        if (result) {
          setRolling(false);
          onResult(result);
        }
      }
    }
  });

  return (
    <group onClick={() => roll()} scale={[0.095, 0.095, 0.095]} ref={ref} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.pasted__pSphere51_blinn1_0.geometry}>
        <meshPhysicalMaterial attach="material" color="#de381f" />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.pasted__pSphere51_blinn2_0.geometry}>
        <meshPhysicalMaterial attach="material" color="#fff" />
      </mesh>
    </group>
  );
};

Die.propTypes = {
  setupActions: PropTypes.func.isRequired,
  onResult: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Die;
