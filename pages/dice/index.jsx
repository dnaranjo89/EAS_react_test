import React from 'react';
import DicePage from '../../components/Pages/Dice/DicePage.jsx';

const RollDicePage = props => <DicePage {...props} />;

RollDicePage.getInitialProps = () => ({
  namespacesRequired: ['DrawDice', 'CommonCreateDraw', 'Common'],
});

export default RollDicePage;
