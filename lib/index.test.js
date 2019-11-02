// import i18fn from './index';
const i18fn = require('../umd/index.js');

it('test chinese', () => {
  i18fn.setNowLanguage('Chinese');
  const str = i18fn({ Chinese: '你好', English: 'hello' });
  expect(str).toMatch('你好');
});

it('test english', () => {
  i18fn.setNowLanguage('English');
  const str = i18fn({ Chinese: '您好', English: 'hello' });
  expect(str).toMatch('hello');
});

it('test english params', () => {
  i18fn.setNowLanguage('English');
  const str = i18fn(
    { English: '__person__, hello', Chinese: '__person__, 你好' },
    {
      person: i18fn({ English: 'Mr.Ming', Chinese: '小明' }),
    },
  );
  expect(str).toMatch('Mr.Ming, hello');
});

it('test english params, use object', () => {
  i18fn.setNowLanguage('English');
  const str = i18fn(
    { English: '__person__, hello', Chinese: '__person__, 你好' },
    {
      person: { English: 'Mr.Ming', Chinese: '小明' },
    },
  );
  expect(str).toMatch('Mr.Ming, hello');
});

it('test config', () => {
  const lang = i18fn;
  i18fn.setNowLanguage('English');

  const languages = {
    done: lang({ English: 'done!', Chinese: '完成!' }),
  };
  expect(languages.done).toMatch('done!');
});

it('test config function', () => {
  const lang = i18fn;
  i18fn.setNowLanguage('English');
  const languages = {
    please: params => lang({ English: '__open__, please.', Chinese: '请__open__.' }, params),
  };
  const fnString = languages.please({
    open: { English: 'Open the box', Chinese: '打开盒子' },
  });
  expect(fnString).toMatch('Open the box, please.');
});

it('test error chinese', () => {
  i18fn.setNowLanguage('Chinese');
  const say = i18fn({ English: 'hello' });
  expect(say).toMatch('hello - [Miss i18fn: Chinese]');
});

it('test error english', () => {
  i18fn.setNowLanguage('English');
  const say = i18fn({ Chinese: 'hello' });
  expect(String(say)).toMatch('undefined');
});

it('test error chinese prod', () => {
  process.env.NODE_ENV = 'production';
  i18fn.setNowLanguage('Chinese');
  const say = i18fn({ English: 'hello' });
  expect(say).toMatch('hello');
});

it('test error english prod', () => {
  i18fn.setNowLanguage('English');
  const say = i18fn({ Chinese: 'hello' });
  expect(String(say)).toMatch('undefined');
});

it('test add other language', () => {
  i18fn.setNowLanguage('BB');
  i18fn.addLanguage('bbbb', 'BB');
  const say = i18fn({ English: 'hello', BB: 'bebbo' });
  expect(String(say)).toMatch('bebbo');
});
