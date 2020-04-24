import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import getHostname from '../redux/selectors/getHostname';

export default function useCurrentUrl() {
  const { host, pathname } = window.location;
  return `https://${host}${pathname}`;
}
