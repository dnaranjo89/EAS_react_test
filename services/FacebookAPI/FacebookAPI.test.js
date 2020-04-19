import { getObjectIdFromUrl } from './FacebookAPI';

describe('FacebookAPI', () => {
  describe('getObjectIdFromUrl', () => {
    it('fails with broken url', () => {
      const url = 'https://www.facebook.c';
      expect(() => getObjectIdFromUrl(url)).toThrow('URL not valid');
    });

    it('should return object id for posts', () => {
      const url =
        'https://www.facebook.com/permalink.php?story_fbid=1815139971866142&id=1775681819145291';
      const objectId = getObjectIdFromUrl(url);
      expect(objectId).toBe('1775681819145291_1815139971866142');
    });

    it('should return object id for photos', () => {
      const url =
        'https://www.facebook.com/1775681819145291/photos/a.1775711565808983.1073741827.1775681819145291/1775711522475654/?type=3&theater';
      const objectId = getObjectIdFromUrl(url);
      expect(objectId).toBe('1775681819145291_1775711522475654');
    });
  });
});
