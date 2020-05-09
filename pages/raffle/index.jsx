import RafflePageContainer from '../../components/Pages/Raffle/RafflePageContainer.jsx';

RafflePageContainer.getInitialProps = () => ({
  namespacesRequired: [
    'DrawRaffle',
    'ParticipantsInput',
    'PrizesInput',
    'CommonCreateDraw',
    'Common',
  ],
});

export default RafflePageContainer;
