const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const flattenObject = object =>
  Object.assign(
    {},
    ...(function _flatten(objectBit, previousPath = '') {
      // spread the result into our return object
      return [].concat(
        // concat everything into one level
        ...Object.keys(objectBit).map(
          // iterate over object
          key =>
            typeof objectBit[key] === 'object' // check if there is a nested object
              ? _flatten(objectBit[key], `${previousPath}/${key}`) // call itself if there is
              : { [`${key}`]: objectBit[key] },
          // : { [`${previousPath}/${key}`]: objectBit[key] }, // append object with it’s path as key
        ),
      );
    })(object),
  );

function getTranslationKeys(locale) {
  const translationFilePath = `./src/i18n/translations/${locale}/translations.json`;
  // eslint-disable-next-line import/no-dynamic-require
  const translationFile = require(translationFilePath); // eslint-disable-line global-require
  return Object.keys(flattenObject(translationFile));
}

function findInDir(dir, filter, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const fileStat = fs.lstatSync(filePath);

    if (fileStat.isDirectory()) {
      findInDir(filePath, filter, fileList);
    } else if (filter.test(filePath)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

async function processFile(filePath, translationKeysMap) {
  const translationKeys = Object.keys(translationKeysMap);

  const data = await readFile(filePath);
  const translationKeysUsed = translationKeys.filter(key => data.includes(key));
  return translationKeysUsed;
}

async function check() {
  const translationKeys = getTranslationKeys('es_ES');
  const files = findInDir('./src/', /\.jsx?$/);
  const translationKeysMap = translationKeys.reduce((map, obj) => {
    // eslint-disable-next-line no-param-reassign
    map[obj] = 0;
    return map;
  }, {});

  const usedKeysLists = await Promise.all(files.map(file => processFile(file, translationKeysMap)));
  const usedKeys = [].concat(...usedKeysLists);
  const unusedKeys = translationKeys.filter(n => !usedKeys.includes(n));
  // eslint-disable-next-line no-console
  console.log('unusedKeys', unusedKeys);
}
check();
