import FlipCoinPageContainer from '../components/Pages/FlipCoin/FlipCoinPageContainer.jsx';

FlipCoinPageContainer.getInitialProps = () => ({
  namespacesRequired: ['DrawCoin', 'Common'],
});

export default FlipCoinPageContainer;
