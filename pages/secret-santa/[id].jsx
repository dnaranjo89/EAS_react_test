import { SecretSantaApi } from 'echaloasuerte-js-sdk';
import PublishedSecretSantaResultPage from '../../components/Pages/SecretSanta/PublishedSecretSantaResultPage.jsx';
import { serializeResponse } from '../../utils/fetchData';

export const getServerSideProps = async ctx => {
  const { id: drawId } = ctx.query;
  const secretSantaApi = new SecretSantaApi();
  const result = await secretSantaApi.secretSantaResultGet(drawId);
  const props = serializeResponse({ result });
  return { props };
};

export default PublishedSecretSantaResultPage;
