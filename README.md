## Use

I don't like in some i18n file add different string, and in your code use a atlas.
i18fn is zero config i18n package, juse in you code like this:

```js
const i18fn = require('i18fn');
const hello = i18fn.txt({ english: 'hello', chinese: '你好' });
console.log(hello);
```

#### Use params

```js
const i18fn = require('i18fn');
const personHello = i18fn.txt(
    { english: '__person__, hello', chinese: '__person__, 你好' },
    {
      person: { english: 'Mr.Ming', chinese: '小明' },
    },
  );
console.log(personHello);
});
```

## set now language

```js
const i18fn = require('i18fn');

i18fn.now('chinese');
```

## Add other language

If you have mars application, you can add mars language like this:

```js
const i18fn = require('i18fn');

const language = (
  navigator['browserLanguage'] || navigator.language
).toLowerCase();
if (language.indexOf('MarsLanguage') > -1) {
  // add i18func language
  i18func.now('MarsLanguage');
}

// ok like default use:
const hello = i18fn.txt({ english: 'hello', MarsLanguage: '£ª˜√øø˚˜´' });
console.log(hello);
```

### Default languages:

- english;
- chinese;
- chineseTraditional;
- spanish;
- dutch;
- korea;
- french;
- german;
- italian;
- portuguese;
- swedish;
- japanese;

## Still love config? you can like this

```js
const { txt } = require('i18fn');
const languages = {
  done: txt({ english: 'done!', chinese: '完成!' }),
  hello: txt({ english: 'hello', chinese: '你好' }),
  please: params =>
    txt({ english: '__open__, please.', chinese: '请__open__.' }, params),
};

console.log(languages.done);
console.log(
  languages.please({
    open: { english: 'Open the box', chinese: '打开盒子' },
  }),
);
```

That's all, thank.

i18fn is [MIT licensed](./LICENSE).
