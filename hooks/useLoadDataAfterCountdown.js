import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const MAX_RETRIES = 5;

export default function useLoadDataAfterCountdown(draw) {
  const [retries, setRetries] = useState(MAX_RETRIES);
  const router = useRouter();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const triggerReload = () => {
      router.push(router.pathname, router.asPath);
    };

    if (draw?.result && !draw.result.value && retries > 0) {
      const missingSeconds = new Date(draw.result.schedule_date).getTime() - Date.now();
      const countdownIsOver = missingSeconds < 0;
      if (countdownIsOver) {
        setRetries(retries - 1);
        triggerReload();
      } else {
        const timer = setTimeout(() => {
          triggerReload();
        }, missingSeconds);
        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [draw, retries, router]);
}
