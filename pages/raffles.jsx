import RafflesPage from '../components/Pages/Raffles/RafflesPage.jsx';

RafflesPage.getInitialProps = async () => ({
  namespacesRequired: ['Raffles', 'Common'],
});

export default RafflesPage;
