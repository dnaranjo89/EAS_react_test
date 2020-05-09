import RandomNumberPageContainer from '../../components/Pages/RandomNumber/RandomNumberPageContainer.jsx';

RandomNumberPageContainer.getInitialProps = () => ({
  namespacesRequired: ['DrawNumber', 'CommonCreateDraw', 'Common'],
});

export default RandomNumberPageContainer;
