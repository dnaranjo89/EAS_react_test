import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import getHostname from '../selectors/getHostname';

export default function useCurrentUrl() {
  const location = useLocation();
  const { pathname } = location;
  const hostname = useSelector(getHostname);
  return `https://${hostname}${pathname}`;
}
