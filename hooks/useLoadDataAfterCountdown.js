import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const MAX_RETRIES = 5;
const MAX_DELAY_SET_TIMEOUT = 2147483647;

export default function useLoadDataAfterCountdown(result) {
  const [retries, setRetries] = useState(MAX_RETRIES);
  const router = useRouter();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const triggerReload = () => {
      router.push(router.pathname, router.asPath);
    };

    if (result && !result.value && retries > 0) {
      const missingSeconds = new Date(result.schedule_date).getTime() - Date.now();
      const countdownIsOver = missingSeconds < 0;
      if (countdownIsOver) {
        setRetries(retries - 1);
        triggerReload();
      } else if (missingSeconds < MAX_DELAY_SET_TIMEOUT) {
        // setTimeout delays has a max of 2147483647 (32bits). That's 24.8 days.
        // That's beyond a reasonable expectation for the browser to stay open so we can
        // ignore the automatic reload
        const timer = setTimeout(() => {
          triggerReload();
        }, missingSeconds);
        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [result, retries, router]);
}
