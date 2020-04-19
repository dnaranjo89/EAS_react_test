import { useEffect } from 'react';

export default function useScrollToResults(result, resultsRef) {
  useEffect(() => {
    if (result) {
      try {
        window.scroll({ left: 0, top: resultsRef.current.offsetTop, behavior: 'smooth' });
      } catch (error) {
        window.scrollTo(0, resultsRef.current.offsetTop);
      }
    }
  }, [result, resultsRef]);
}
