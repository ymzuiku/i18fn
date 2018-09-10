## [English Document](./README.md)

多语言`i18n`往常的做法是一个语言一个配置文件, 但是这样需要添加一个新的字符串时, 需要逐个打开许多个语言文件, 常常会漏, 并且每次修改一个字符都要编辑好几个文件.
我们换一种思路, 把 `i18n` 的多语言直接写在当前代码中,而不是写在配置文件中.

## 思路

用一个方法,根据开发环境\当前浏览器语言去处理应该使用哪个字符串, 并且暴露设置当前语言的函数,以兼容 nodejs 端或者开发人员扩展其他语言.

## 使用

```js
const i18fn = require('i18fn');
const hello = i18fn.lang({ english: 'hello', chinese: '你好' });
console.log(hello);
```

## 使用参数

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

## 自动语言缺失排查

如果浏览器语言是中文, 而你忘记添加中文的语言内容, 在开发模式中会做错误提示, 如下面这行代码:

```js
const say = i18fn.lang({ English: 'hello' });

// 在生产环境, i18fn 使用英文作为代替
// 在开发环境, i18fn 会添加 - [Miss i18fn: languageType] 在英文后头
if (process.env.NODE_ENV === 'production') {
  console.log(say); // hello
} else {
  console.log(say); // hello - [Miss i18fn: english]
}
```

## 设置当前语言

如果我们要使用设置修改当前语言，可以手动修改当前语言以覆盖浏览器的语言识别:

```js
const i18fn = require('i18fn');

i18fn.setNowLanguage('Chinese');
```

## 如果你还是喜欢把 i18n 写在配置文件里

如果我们希望文案可以更好的复用, 我们也可以这样把多个语言写在一个文件中:

```js
const { lang } = require('i18fn');
const languages = {
  done: lang({ English: 'done!', Chinese: '完成!' }),
  hello: lang({ English: 'hello', Chinese: '你好' }),
};

// use
console.log(languages.done);
console.log(languages.hello);
```

## 当前支持自动识别的语言

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

## 增加其他语言判断

如果你的应用需要添加匈牙利, 你可以这样:

```js
const i18fn = require('i18fn');

i18fn.addLanguage('hu-HU', 'Magyar');

// ok like default use:
const hello = i18fn.lang({ English: 'hello', Magyar: 'helló' });
console.log(hello);
```

## 测试可靠性

安装测试包:

```sh
$ yarn install && yarn test
```

你可以尝试测试, 测试内容编写在 src/index.test.js, 以下是通过的测试:

```
$ jest
 PASS  src/index.test.js
  ✓ test chinese (4ms)
  ✓ test english
  ✓ test english params (1ms)
  ✓ test english params, use object
  ✓ test config
  ✓ test config function
  ✓ test error chinese
  ✓ test error english
  ✓ test error chinese prod
  ✓ test error english prod

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        1.257s
Ran all test suites.
✨  Done in 1.98s.
```

这就是全部, 谢谢!

i18fn is [MIT licensed](./LICENSE).

## Github 地址

[https://github.com/ymzuiku/i18fn](https://github.com/ymzuiku/i18fn)
