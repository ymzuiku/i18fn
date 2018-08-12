## [English Document](./README.md)

## 使用

把i18n的多语言直接写在当前代码中,而不是写在配置文件中.

```js
const i18fn = require('i18fn');
const hello = i18fn.txt({ english: 'hello', chinese: '你好' });
console.log(hello);
```

#### 使用参数

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

## 设置当前语言

```js
const i18fn = require('i18fn');

i18fn.now('chinese');
```

## 增加其他语言判断

Default languages:
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

如果你的应用需要添加火星语, 你可以这样:

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

## 如果你还是喜欢把i18n写在配置文件里

往常的做法是一个语言一个配置文件, 但是这样需要添加一个新的字符串时, 需要逐个打开许多个语言文件, 常常会漏. 我们可以这样把多个语言写在一个文件中:

```js
const { txt } = require('i18fn');
const languages = {
  done: txt({ english: 'done!', chinese: '完成!' }),
  hello: txt({ english: 'hello', chinese: '你好' }),
  please: params =>
    txt({ english: '__open__, please.', chinese: '请__open__.' }, params),
};

// use
console.log(languages.done);
console.log(
  languages.please({
    open: { english: 'Open the box', chinese: '打开盒子' },
  }),
);
```

这就是全部, 谢谢!

i18fn is [MIT licensed](./LICENSE).
