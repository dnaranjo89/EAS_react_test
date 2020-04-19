const Router = require('nextjs-dynamic-routes');

const router = new Router();

router.add({ name: 'character', pattern: '/characters/:id' });

router.add({ name: 'film', pattern: '/films/:id' });

// if the name of your route is different from your component file name:
router.add({
  name: 'groupsPublic',
  pattern: '/groups/public',
  page: '/groups',
});
// router.add({ name: '/groups', pattern:/user/create/, page: '/use/create' }) -> Normal route.
// router.add({ name: '/user/create/name', pattern:/user/create/:name, page: '/use/create' }) -> Dynamic route.

module.exports = router;
