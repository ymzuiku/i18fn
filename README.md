## [中文说明文档](./README-CN.md)

## Use

I don't like in some i18n file add different string, and in your code use a atlas.
i18fn is zero config i18n package, juse in you code like this:

```js
const i18fn = require('i18fn');
const hello = i18fn.lang({ English: 'hello', Chinese: '你好' });
console.log(hello);
```

## Use params

```js
const i18fn = require('i18fn');
const personHello = i18fn.lang(
    { English: '__person__, hello', Chinese: '__person__, 你好' },
    {
      person: { English: 'Mr.Ming', Chinese: '小明' },
    },
  );
console.log(personHello);
});
```

## Auto Miss language tip

If HTML language is chinese, but your forget add chinese txt, like this:

```js
const say = i18fn.lang({ English: 'hello' });

// In production, i18fn use english to forget language
// And In Devloper, i18fn use add - [Miss i18fn: languageType] in english
if (process.env.NODE_ENV === 'production') {
  console.log(say); // hello
} else {
  console.log(say); // hello - [Miss i18fn: english]
}
```

## Set now language

If we want to modify the current language with settings, we can manually modify the current language to override the browser's language recognition:

```js
const i18fn = require('i18fn');

i18fn.setNowLanguage('Chinese');
```

## Still love config? you can like this

Normally, a language is a configuration file, but when you need to add a new string, you need to open many language files one by one, often missing. We can write multiple languages in a file like this:

```js
const { lang } = require('i18fn');
const languages = {
  done: lang({ English: 'done!', Chinese: '完成!' }),
  hello: lang({ English: 'hello', Chinese: '你好' }),
  please: params =>
    lang({ English: '__open__, please.', Chinese: '请__open__.' }, params),
};

console.log(languages.done);
console.log(
  languages.please({
    open: { English: 'Open the box', Chinese: '打开盒子' },
  }),
);
```

## Auto differentiate languages

- English
- Chinese
- ChineseTraditional
- Dutch
- Korea
- French
- German
- Japanese
- Italian
- Portuguese
- Spanish
- Swedish
- Russian
- Arabic
- Vietnamese
- Polish
- Finnish
- Afrikaans
- Khmer
- Thai
- Turkish
- Ukrainian
- Zulu

## Add other language

If you need add Magyar language, like this:

```js
const i18fn = require('i18fn');

i18fn.addLanguage('hu-HU', 'Magyar');

// ok like default use:
const hello = i18fn.lang({ English: 'hello', Magyar: 'helló' });
console.log(hello);
```

## test

Install package jest:

```sh
$ yarn install && yarn test
```

You can check test in src/index.test.js

```
$ jest
 PASS  src/index.test.js
  ✓ test chinese (4ms)
  ✓ test english
  ✓ test english params (1ms)
  ✓ test english params, use object
  ✓ test config
  ✓ test config function (1ms)
  ✓ test error chinese
  ✓ test error english
  ✓ test error chinese prod
  ✓ test error english prod (1ms)
  ✓ test add other language

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        1.257s
Ran all test suites.
✨  Done in 1.80s.
```

That's all, thank.

i18fn is [MIT licensed](./LICENSE).
