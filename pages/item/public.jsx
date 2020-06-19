import RandomItemPageContainer from '../../components/Pages/RandomItem/RandomItemPageContainer.jsx';

RandomItemPageContainer.getInitialProps = () => ({
  namespacesRequired: ['DrawItem', 'CommonCreateDraw', 'Common'],
});

export default RandomItemPageContainer;
