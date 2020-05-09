import GroupsGeneratorPageContainer from '../../components/Pages/GroupsGenerator/GroupsGeneratorPageContainer.jsx';

GroupsGeneratorPageContainer.getInitialProps = () => ({
  namespacesRequired: ['DrawGroups', 'ParticipantsInput', 'CommonCreateDraw', 'Common'],
});

export default GroupsGeneratorPageContainer;
