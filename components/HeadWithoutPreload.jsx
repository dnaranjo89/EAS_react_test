/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { Head } from 'next/document';

// We are overriding Next's Head to allow the load of the Next scripts to be deferred
// This is a hack we would like to get rid of as soon as it's possible
// See this thread to check whether there is any update with that regard
// https://github.com/vercel/next.js/discussions/11120#discussioncomment-109894
export class HeadWithoutPreload extends Head {
  getPreloadDynamicChunks() {
    return [];
  }

  getPreloadMainLinks() {
    return [];
  }
}
