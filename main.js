const textarea = document.createElement('textarea');
textarea.name = 'text';
textarea.id = 'keyboard';
textarea.cols = 30;
textarea.rows = 10;
textarea.classList.add('text');
// const keyboard = document.createElement('div');
// keyboard.classList.add('keyboard');
let curentLayout;
let nowLang;

const shiftEngKeys = [
  [
    {
      key: '~',
      dataKey: 'Backquote',
    },
    {
      key: '!',
      dataKey: 'Digit1',
    },
    {
      key: '@',
      dataKey: 'Digit2',
    },
    {
      key: '#',
      dataKey: 'Digit3',
    },
    {
      key: '$',
      dataKey: 'Digit4',
    },
    {
      key: '%',
      dataKey: 'Digit5',
    },
    {
      key: '^',
      dataKey: 'Digit6',
    },
    {
      key: '&',
      dataKey: 'Digit7',
    },
    {
      key: '*',
      dataKey: 'Digit8',
    },
    {
      key: '(',
      dataKey: 'Digit9',
    },
    {
      key: ')',
      dataKey: 'Digit0',
    },
    {
      key: '_',
      dataKey: 'Minus',
    },
    {
      key: '+',
      dataKey: 'Equal',
    },
    {
      key: 'Backspace',
      dataKey: 'Backspace',
    },
  ],
  [
    {
      key: 'Tab',
      dataKey: 'Tab',
    },
    {
      key: 'Q',
      dataKey: 'KeyQ',
    },
    {
      key: 'W',
      dataKey: 'KeyW',
    },
    {
      key: 'E',
      dataKey: 'KeyE',
    },
    {
      key: 'R',
      dataKey: 'KeyR',
    },
    {
      key: 'T',
      dataKey: 'KeyT',
    },
    {
      key: 'Y',
      dataKey: 'KeyY',
    },
    {
      key: 'U',
      dataKey: 'KeyU',
    },
    {
      key: 'I',
      dataKey: 'KeyI',
    },
    {
      key: 'O',
      dataKey: 'KeyO',
    },
    {
      key: 'P',
      dataKey: 'KeyP',
    },
    {
      key: '{',
      dataKey: 'BracketLeft',
    },
    {
      key: '}',
      dataKey: 'BracketRight',
    },
    {
      key: '|',
      dataKey: 'Backslash',
    },
    {
      key: 'Del',
      dataKey: 'Delete',
    },
  ],
  [
    {
      key: 'CapsLock',
      dataKey: 'CapsLock',
    },
    {
      key: 'A',
      dataKey: 'KeyA',
    },
    {
      key: 'S',
      dataKey: 'KeyS',
    },
    {
      key: 'D',
      dataKey: 'KeyD',
    },
    {
      key: 'F',
      dataKey: 'KeyF',
    },
    {
      key: 'G',
      dataKey: 'KeyG',
    },
    {
      key: 'H',
      dataKey: 'KeyH',
    },
    {
      key: 'J',
      dataKey: 'KeyJ',
    },
    {
      key: 'K',
      dataKey: 'KeyK',
    },
    {
      key: 'L',
      dataKey: 'KeyL',
    },
    {
      key: ':',
      dataKey: 'Semicolon',
    },
    {
      key: '"',
      dataKey: 'Quote',
    },
    {
      key: 'Enter',
      dataKey: 'Enter',
    },
  ],
  [
    {
      key: 'Shift',
      dataKey: 'ShiftLeft',
    },
    {
      key: 'Z',
      dataKey: 'KeyZ',
    },
    {
      key: 'X',
      dataKey: 'KeyX',
    },
    {
      key: 'C',
      dataKey: 'KeyC',
    },
    {
      key: 'V',
      dataKey: 'KeyV',
    },
    {
      key: 'B',
      dataKey: 'KeyB',
    },
    {
      key: 'N',
      dataKey: 'KeyN',
    },
    {
      key: 'M',
      dataKey: 'KeyM',
    },
    {
      key: '<',
      dataKey: 'Comma',
    },
    {
      key: '>',
      dataKey: 'Period',
    },
    {
      key: '?',
      dataKey: 'Slash',
    },
    {
      key: '▲',
      dataKey: 'ArrowUp',
    },
    {
      key: 'Shift',
      dataKey: 'ShiftRight',
    },
  ],
  [
    {
      key: 'Ctrl',
      dataKey: 'ControlLeft',
    },
    {
      key: 'Win',
      dataKey: 'MetaLeft',
    },
    {
      key: 'Alt',
      dataKey: 'AltLeft',
    },
    {
      key: ' ',
      dataKey: 'Space',
    },
    {
      key: 'Alt',
      dataKey: 'AltRight',
    },
    {
      key: '◄',
      dataKey: 'ArrowLeft',
    },
    {
      key: '▼',
      dataKey: 'ArrowDown',
    },
    {
      key: '►',
      dataKey: 'ArrowRight',
    },
    {
      key: 'Ctrl',
      dataKey: 'ControlRight',
    },
  ],
];

const keysEng = [
  [
    {
      key: '`',
      dataKey: 'Backquote',
    },
    {
      key: '1',
      dataKey: 'Digit1',
    },
    {
      key: '2',
      dataKey: 'Digit2',
    },
    {
      key: '3',
      dataKey: 'Digit3',
    },
    {
      key: '4',
      dataKey: 'Digit4',
    },
    {
      key: '5',
      dataKey: 'Digit5',
    },
    {
      key: '6',
      dataKey: 'Digit6',
    },
    {
      key: '7',
      dataKey: 'Digit7',
    },
    {
      key: '8',
      dataKey: 'Digit8',
    },
    {
      key: '9',
      dataKey: 'Digit9',
    },
    {
      key: '0',
      dataKey: 'Digit0',
    },
    {
      key: '-',
      dataKey: 'Minus',
    },
    {
      key: '=',
      dataKey: 'Equal',
    },
    {
      key: 'Backspace',
      dataKey: 'Backspace',
    },
  ],
  [
    {
      key: 'Tab',
      dataKey: 'Tab',
    },
    {
      key: 'q',
      dataKey: 'KeyQ',
    },
    {
      key: 'w',
      dataKey: 'KeyW',
    },
    {
      key: 'e',
      dataKey: 'KeyE',
    },
    {
      key: 'r',
      dataKey: 'KeyR',
    },
    {
      key: 't',
      dataKey: 'KeyT',
    },
    {
      key: 'y',
      dataKey: 'KeyY',
    },
    {
      key: 'u',
      dataKey: 'KeyU',
    },
    {
      key: 'i',
      dataKey: 'KeyI',
    },
    {
      key: 'o',
      dataKey: 'KeyO',
    },
    {
      key: 'p',
      dataKey: 'KeyP',
    },
    {
      key: '[',
      dataKey: 'BracketLeft',
    },
    {
      key: ']',
      dataKey: 'BracketRight',
    },
    {
      key: '\\',
      dataKey: 'Backslash',
    },
    {
      key: 'Del',
      dataKey: 'Delete',
    },
  ],
  [
    {
      key: 'CapsLock',
      dataKey: 'CapsLock',
    },
    {
      key: 'a',
      dataKey: 'KeyA',
    },
    {
      key: 's',
      dataKey: 'KeyS',
    },
    {
      key: 'd',
      dataKey: 'KeyD',
    },
    {
      key: 'f',
      dataKey: 'KeyF',
    },
    {
      key: 'g',
      dataKey: 'KeyG',
    },
    {
      key: 'h',
      dataKey: 'KeyH',
    },
    {
      key: 'j',
      dataKey: 'KeyJ',
    },
    {
      key: 'k',
      dataKey: 'KeyK',
    },
    {
      key: 'l',
      dataKey: 'KeyL',
    },
    {
      key: ';',
      dataKey: 'Semicolon',
    },
    {
      key: "'",
      dataKey: 'Quote',
    },
    {
      key: 'Enter',
      dataKey: 'Enter',
    },
  ],
  [
    {
      key: 'Shift',
      dataKey: 'ShiftLeft',
    },
    {
      key: 'z',
      dataKey: 'KeyZ',
    },
    {
      key: 'x',
      dataKey: 'KeyX',
    },
    {
      key: 'c',
      dataKey: 'KeyC',
    },
    {
      key: 'v',
      dataKey: 'KeyV',
    },
    {
      key: 'b',
      dataKey: 'KeyB',
    },
    {
      key: 'n',
      dataKey: 'KeyN',
    },
    {
      key: 'm',
      dataKey: 'KeyM',
    },
    {
      key: ',',
      dataKey: 'Comma',
    },
    {
      key: '.',
      dataKey: 'Period',
    },
    {
      key: '/',
      dataKey: 'Slash',
    },
    {
      key: '▲',
      dataKey: 'ArrowUp',
    },
    {
      key: 'Shift',
      dataKey: 'ShiftRight',
    },
  ],
  [
    {
      key: 'Ctrl',
      dataKey: 'ControlLeft',
    },
    {
      key: 'Win',
      dataKey: 'MetaLeft',
    },
    {
      key: 'Alt',
      dataKey: 'AltLeft',
    },
    {
      key: ' ',
      dataKey: 'Space',
    },
    {
      key: 'Alt',
      dataKey: 'AltRight',
    },
    {
      key: '◄',
      dataKey: 'ArrowLeft',
    },
    {
      key: '▼',
      dataKey: 'ArrowDown',
    },
    {
      key: '►',
      dataKey: 'ArrowRight',
    },
    {
      key: 'Ctrl',
      dataKey: 'ControlRight',
    },
  ],
];

const keysRu = [
  [
    {
      key: 'ё',
      dataKey: 'Backquote',
    },
    {
      key: '1',
      dataKey: 'Digit1',
    },
    {
      key: '2',
      dataKey: 'Digit2',
    },
    {
      key: '3',
      dataKey: 'Digit3',
    },
    {
      key: '4',
      dataKey: 'Digit4',
    },
    {
      key: '5',
      dataKey: 'Digit5',
    },
    {
      key: '6',
      dataKey: 'Digit6',
    },
    {
      key: '7',
      dataKey: 'Digit7',
    },
    {
      key: '8',
      dataKey: 'Digit8',
    },
    {
      key: '9',
      dataKey: 'Digit9',
    },
    {
      key: '0',
      dataKey: 'Digit0',
    },
    {
      key: '-',
      dataKey: 'Minus',
    },
    {
      key: '=',
      dataKey: 'Equal',
    },
    {
      key: 'Backspace',
      dataKey: 'Backspace',
    },
  ],
  [
    {
      key: 'Tab',
      dataKey: 'Tab',
    },
    {
      key: 'й',
      dataKey: 'KeyQ',
    },
    {
      key: 'ц',
      dataKey: 'KeyW',
    },
    {
      key: 'у',
      dataKey: 'KeyE',
    },
    {
      key: 'к',
      dataKey: 'KeyR',
    },
    {
      key: 'е',
      dataKey: 'KeyT',
    },
    {
      key: 'н',
      dataKey: 'KeyY',
    },
    {
      key: 'г',
      dataKey: 'KeyU',
    },
    {
      key: 'ш',
      dataKey: 'KeyI',
    },
    {
      key: 'щ',
      dataKey: 'KeyO',
    },
    {
      key: 'з',
      dataKey: 'KeyP',
    },
    {
      key: 'х',
      dataKey: 'BracketLeft',
    },
    {
      key: 'ъ',
      dataKey: 'BracketRight',
    },
    {
      key: '\\',
      dataKey: 'Backslash',
    },
    {
      key: 'Del',
      dataKey: 'Delete',
    },
  ],
  [
    {
      key: 'CapsLock',
      dataKey: 'CapsLock',
    },
    {
      key: 'ф',
      dataKey: 'KeyA',
    },
    {
      key: 'ы',
      dataKey: 'KeyS',
    },
    {
      key: 'в',
      dataKey: 'KeyD',
    },
    {
      key: 'а',
      dataKey: 'KeyF',
    },
    {
      key: 'п',
      dataKey: 'KeyG',
    },
    {
      key: 'р',
      dataKey: 'KeyH',
    },
    {
      key: 'о',
      dataKey: 'KeyJ',
    },
    {
      key: 'л',
      dataKey: 'KeyK',
    },
    {
      key: 'д',
      dataKey: 'KeyL',
    },
    {
      key: 'ж',
      dataKey: 'Semicolon',
    },
    {
      key: 'э',
      dataKey: 'Quote',
    },
    {
      key: 'Enter',
      dataKey: 'Enter',
    },
  ],
  [
    {
      key: 'Shift',
      dataKey: 'ShiftLeft',
    },
    {
      key: 'я',
      dataKey: 'KeyZ',
    },
    {
      key: 'ч',
      dataKey: 'KeyX',
    },
    {
      key: 'с',
      dataKey: 'KeyC',
    },
    {
      key: 'м',
      dataKey: 'KeyV',
    },
    {
      key: 'и',
      dataKey: 'KeyB',
    },
    {
      key: 'т',
      dataKey: 'KeyN',
    },
    {
      key: 'ь',
      dataKey: 'KeyM',
    },
    {
      key: 'б',
      dataKey: 'Comma',
    },
    {
      key: 'ю',
      dataKey: 'Period',
    },
    {
      key: '.',
      dataKey: 'Slash',
    },
    {
      key: '▲',
      dataKey: 'ArrowUp',
    },
    {
      key: 'Shift',
      dataKey: 'ShiftRight',
    },
  ],
  [
    {
      key: 'Ctrl',
      dataKey: 'ControlLeft',
    },
    {
      key: 'Win',
      dataKey: 'MetaLeft',
    },
    {
      key: 'Alt',
      dataKey: 'AltLeft',
    },
    {
      key: ' ',
      dataKey: 'Space',
    },
    {
      key: 'Alt',
      dataKey: 'AltRight',
    },
    {
      key: '◄',
      dataKey: 'ArrowLeft',
    },
    {
      key: '▼',
      dataKey: 'ArrowDown',
    },
    {
      key: '►',
      dataKey: 'ArrowRight',
    },
    {
      key: 'Ctrl',
      dataKey: 'ControlRight',
    },
  ],
];
const shiftKeysRu = [
  [
    {
      key: 'Ё',
      dataKey: 'Backquote',
    },
    {
      key: '!',
      dataKey: 'Digit1',
    },
    {
      key: '"',
      dataKey: 'Digit2',
    },
    {
      key: '№',
      dataKey: 'Digit3',
    },
    {
      key: ';',
      dataKey: 'Digit4',
    },
    {
      key: '%',
      dataKey: 'Digit5',
    },
    {
      key: ':',
      dataKey: 'Digit6',
    },
    {
      key: '?',
      dataKey: 'Digit7',
    },
    {
      key: '*',
      dataKey: 'Digit8',
    },
    {
      key: '(',
      dataKey: 'Digit9',
    },
    {
      key: ')',
      dataKey: 'Digit0',
    },
    {
      key: '_',
      dataKey: 'Minus',
    },
    {
      key: '+',
      dataKey: 'Equal',
    },
    {
      key: 'Backspace',
      dataKey: 'Backspace',
    },
  ],
  [
    {
      key: 'Tab',
      dataKey: 'Tab',
    },
    {
      key: 'Й',
      dataKey: 'KeyQ',
    },
    {
      key: 'Ц',
      dataKey: 'KeyW',
    },
    {
      key: 'У',
      dataKey: 'KeyE',
    },
    {
      key: 'К',
      dataKey: 'KeyR',
    },
    {
      key: 'Е',
      dataKey: 'KeyT',
    },
    {
      key: 'Н',
      dataKey: 'KeyY',
    },
    {
      key: 'Г',
      dataKey: 'KeyU',
    },
    {
      key: 'Ш',
      dataKey: 'KeyI',
    },
    {
      key: 'Щ',
      dataKey: 'KeyO',
    },
    {
      key: 'З',
      dataKey: 'KeyP',
    },
    {
      key: 'Х',
      dataKey: 'BracketLeft',
    },
    {
      key: 'Ъ',
      dataKey: 'BracketRight',
    },
    {
      key: '\\',
      dataKey: 'Backslash',
    },
    {
      key: 'Del',
      dataKey: 'Delete',
    },
  ],
  [
    {
      key: 'CapsLock',
      dataKey: 'CapsLock',
    },
    {
      key: 'Ф',
      dataKey: 'KeyA',
    },
    {
      key: 'Ы',
      dataKey: 'KeyS',
    },
    {
      key: 'В',
      dataKey: 'KeyD',
    },
    {
      key: 'А',
      dataKey: 'KeyF',
    },
    {
      key: 'П',
      dataKey: 'KeyG',
    },
    {
      key: 'Р',
      dataKey: 'KeyH',
    },
    {
      key: 'О',
      dataKey: 'KeyJ',
    },
    {
      key: 'Л',
      dataKey: 'KeyK',
    },
    {
      key: 'Д',
      dataKey: 'KeyL',
    },
    {
      key: 'Ж',
      dataKey: 'Semicolon',
    },
    {
      key: 'Э',
      dataKey: 'Quote',
    },
    {
      key: 'Enter',
      dataKey: 'Enter',
    },
  ],
  [
    {
      key: 'Shift',
      dataKey: 'ShiftLeft',
    },
    {
      key: 'Я',
      dataKey: 'KeyZ',
    },
    {
      key: 'Ч',
      dataKey: 'KeyX',
    },
    {
      key: 'С',
      dataKey: 'KeyC',
    },
    {
      key: 'М',
      dataKey: 'KeyV',
    },
    {
      key: 'И',
      dataKey: 'KeyB',
    },
    {
      key: 'Т',
      dataKey: 'KeyN',
    },
    {
      key: 'Ь',
      dataKey: 'KeyM',
    },
    {
      key: 'Б',
      dataKey: 'Comma',
    },
    {
      key: 'Ю',
      dataKey: 'Period',
    },
    {
      key: '.',
      dataKey: 'Slash',
    },
    {
      key: '▲',
      dataKey: 'ArrowUp',
    },
    {
      key: 'Shift',
      dataKey: 'ShiftRight',
    },
  ],
  [
    {
      key: 'Ctrl',
      dataKey: 'ControlLeft',
    },
    {
      key: 'Win',
      dataKey: 'MetaLeft',
    },
    {
      key: 'Alt',
      dataKey: 'AltLeft',
    },
    {
      key: ' ',
      dataKey: 'Space',
    },
    {
      key: 'Alt',
      dataKey: 'AltRight',
    },
    {
      key: '◄',
      dataKey: 'ArrowLeft',
    },
    {
      key: '▼',
      dataKey: 'ArrowDown',
    },
    {
      key: '►',
      dataKey: 'ArrowRight',
    },
    {
      key: 'Ctrl',
      dataKey: 'ControlRight',
    },
  ],
];

const functionalKeys = [
  'ControlRight',
  'ControlLeft',
  'AltRight',
  'AltLeft',
  'MetaLeft',
  'ControlLeft',
  'ShiftRight',
  'ShiftLeft',
  'CapsLock',
  'Delete',
  'Tab',
  'Backspace',
];

if (localStorage.layout) {
  curentLayout = JSON.parse(localStorage.layout);
  nowLang = localStorage.leng;
} else {
  curentLayout = keysEng;
  nowLang = 'eng';
}

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const creatLayout = function newlayout(arr) {
  keyboard.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');
    const rowKeys = arr[i];
    for (let j = 0; j < rowKeys.length; j += 1) {
      const keyObj = rowKeys[j];
      const button = document.createElement('button');
      button.classList.add('key');
      button.textContent = keyObj.key;
      button.dataset.key = keyObj.dataKey;
      row.appendChild(button);
    }
    keyboard.appendChild(row);
  }
  document.body.appendChild(textarea);
  document.body.appendChild(keyboard);

  keyboard.querySelectorAll('button')[13].classList.add('key-backspase');
  keyboard.querySelectorAll('button')[14].classList.add('key-tab');
  keyboard.querySelectorAll('button')[28].classList.add('key-del');
  keyboard.querySelectorAll('button')[29].classList.add('key-caps');
  keyboard.querySelectorAll('button')[41].classList.add('key-enter');
  keyboard.querySelectorAll('button')[42].classList.add('key-shift');
  keyboard.querySelectorAll('button')[54].classList.add('key-shift');
  keyboard.querySelectorAll('button')[58].classList.add('key-spase');
  keyboard.querySelectorAll('button')[55].classList.add('key-ctrl');
  keyboard.querySelectorAll('button')[56].classList.add('key-win');
  keyboard.querySelectorAll('button')[57].classList.add('key-alt');
  keyboard.querySelectorAll('button')[59].classList.add('key-alt');
  keyboard.querySelectorAll('button')[63].classList.add('key-ctrl');
};
creatLayout(curentLayout);

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  textarea.focus();
  const key = document.querySelector(`button[data-key="${e.code}"]`);
  // enter
  if (key.getAttribute('data-key') === 'Enter') {
    key.classList.add('animate');
    const cursorPosition = textarea.selectionStart;
    const currentValue = textarea.value;
    const newValue = `${currentValue.substring(
      0,
      cursorPosition
    )}\n${currentValue.substring(cursorPosition)}`;
    textarea.value = newValue;
    textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  } else if (
    key.getAttribute('data-key') === 'ShiftLeft' &&
    nowLang === 'eng'
  ) {
    curentLayout = shiftEngKeys;
    //  nowLang = 'bigEng';
    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftLeft"]')
      .classList.add('animate');
  } else if (key.getAttribute('data-key') === 'ShiftLeft' && nowLang === 'ru') {
    curentLayout = shiftKeysRu;
    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftLeft"]')
      .classList.add('animate');
  } else if (
    key.getAttribute('data-key') === 'ShiftLeft' &&
    nowLang === 'bigEng'
  ) {
    curentLayout = keysEng;
    //  nowLang = 'eng';
    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftLeft"]')
      .classList.add('animate');
    document
      .querySelector('button[data-key="CapsLock"]')
      .classList.add('animate');
  } else if (
    key.getAttribute('data-key') === 'ShiftLeft' &&
    nowLang === 'bigRu'
  ) {
    curentLayout = keysRu;
    //  nowLang = 'ru';
    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftLeft"]')
      .classList.add('animate');
    document
      .querySelector('button[data-key="CapsLock"]')
      .classList.add('animate');
  } else if (
    key.getAttribute('data-key') === 'ShiftRight' &&
    nowLang === 'eng'
  ) {
    curentLayout = shiftEngKeys;

    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftRight"]')
      .classList.add('animate');
  } else if (
    key.getAttribute('data-key') === 'ShiftRight' &&
    nowLang === 'ru'
  ) {
    curentLayout = shiftKeysRu;

    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftRight"]')
      .classList.add('animate');
  } else if (
    key.getAttribute('data-key') === 'ShiftRight' &&
    nowLang === 'bigEng'
  ) {
    curentLayout = keysEng;

    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftRight"]')
      .classList.add('animate');
    document
      .querySelector('button[data-key="CapsLock"]')
      .classList.add('animate');
  } else if (
    key.getAttribute('data-key') === 'ShiftRight' &&
    nowLang === 'bigRu'
  ) {
    curentLayout = keysRu;

    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftRight"]')
      .classList.add('animate');
    document
      .querySelector('button[data-key="CapsLock"]')
      .classList.add('animate');
  } else if (key.getAttribute('data-key') === 'CapsLock') {
    if (nowLang === 'eng') {
      curentLayout = shiftEngKeys;
      nowLang = 'bigEng';
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="CapsLock"]')
        .classList.add('animate');
    } else if (nowLang === 'bigEng') {
      curentLayout = keysEng;
      nowLang = 'eng';
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="CapsLock"]')
        .classList.remove('animate');
    } else if (nowLang === 'ru') {
      curentLayout = shiftKeysRu;
      nowLang = 'bigRu';
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="CapsLock"]')
        .classList.add('animate');
    } else if (nowLang === 'bigRu') {
      curentLayout = keysRu;
      nowLang = 'ru';
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="CapsLock"]')
        .classList.remove('animate');
    }
  } else if (e.altKey && e.ctrlKey) {
    if (nowLang === 'eng') {
      curentLayout = keysRu;
      nowLang = 'ru';
      creatLayout(curentLayout);
    } else if (nowLang === 'bigEng') {
      curentLayout = shiftKeysRu;
      nowLang = 'bigRu';
      creatLayout(curentLayout);
    } else if (nowLang === 'ru') {
      curentLayout = keysEng;
      nowLang = 'eng';
      creatLayout(curentLayout);
    } else if (nowLang === 'bigRu') {
      curentLayout = shiftEngKeys;
      nowLang = 'bigEng';
      creatLayout(curentLayout);
    }
  } else if (
    key.getAttribute('data-key') === 'Backspace' ||
    key.getAttribute('data-key') === 'ControlLeft' ||
    key.getAttribute('data-key') === 'ControlRight' ||
    key.getAttribute('data-key') === 'AltRight' ||
    key.getAttribute('data-key') === 'AltLeft' ||
    key.getAttribute('data-key') === 'Tab' ||
    key.getAttribute('data-key') === 'Delete'
  ) {
    key.classList.add('animate');
  } else if (key && !functionalKeys.includes(key.getAttribute('data-key'))) {
    key.classList.add('animate');

    const cursorPosition = textarea.selectionStart;
    const currentValue = textarea.value;
    const newValue =
      currentValue.substring(0, cursorPosition) +
      key.textContent +
      currentValue.substring(cursorPosition);
    textarea.value = newValue;
    textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  }
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  /// left shufty
  const key = document.querySelector(`button[data-key="${e.code}"]`);
  if (key.getAttribute('data-key') === 'ShiftLeft' && nowLang === 'eng') {
    curentLayout = keysEng;
    nowLang = 'eng';
    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftLeft"]')
      .classList.remove('animate');
  } else if (key.getAttribute('data-key') === 'ShiftLeft' && nowLang === 'ru') {
    curentLayout = keysRu;
    nowLang = 'ru';
    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftLeft"]')
      .classList.remove('animate');
  } else if (
    key.getAttribute('data-key') === 'ShiftLeft' &&
    nowLang === 'bigEng'
  ) {
    curentLayout = shiftEngKeys;
    nowLang = 'bigEng';
    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftLeft"]')
      .classList.remove('animate');
    document
      .querySelector('button[data-key="CapsLock"]')
      .classList.add('animate');
  } else if (
    key.getAttribute('data-key') === 'ShiftLeft' &&
    nowLang === 'bigRu'
  ) {
    curentLayout = shiftKeysRu;
    nowLang = 'bigRu';
    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftLeft"]')
      .classList.remove('animate');
    document
      .querySelector('button[data-key="CapsLock"]')
      .classList.add('animate');
  } else if (
    key.getAttribute('data-key') === 'ShiftRight' &&
    nowLang === 'eng'
  ) {
    curentLayout = keysEng;
    nowLang = 'eng';
    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftRight"]')
      .classList.remove('animate');
  } else if (
    key.getAttribute('data-key') === 'ShiftRight' &&
    nowLang === 'ru'
  ) {
    curentLayout = keysRu;
    nowLang = 'ru';
    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftRight"]')
      .classList.remove('animate');
  } else if (
    key.getAttribute('data-key') === 'ShiftRight' &&
    nowLang === 'bigEng'
  ) {
    curentLayout = shiftEngKeys;
    nowLang = 'bigEng';
    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftRight"]')
      .classList.remove('animate');
    document
      .querySelector('button[data-key="CapsLock"]')
      .classList.add('animate');
  } else if (
    key.getAttribute('data-key') === 'ShiftRight' &&
    nowLang === 'bigRu'
  ) {
    curentLayout = shiftKeysRu;
    nowLang = 'bigRu';
    creatLayout(curentLayout);
    document
      .querySelector('button[data-key="ShiftRight"]')
      .classList.remove('animate');
    document
      .querySelector('button[data-key="CapsLock"]')
      .classList.add('animate');
  } else if (key.getAttribute('data-key') === 'CapsLock') {
    // do nothing
  } else if (key) {
    key.classList.remove('animate');
  }
});

textarea.addEventListener('keydown', (event) => {
  if (event.code === 'Backspace' || event.code === 'Delete') {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const { value } = textarea;

    if (start === end) {
      if (event.code === 'Backspace') {
        textarea.value = value.slice(0, start - 1) + value.slice(start);
        if (textarea) {
          textarea.selectionStart = start - 1;
          textarea.selectionEnd = start - 1;
        }
      } else {
        if (value) {
          textarea.value = value.slice(0, start) + value.slice(start + 1);
        }
        if (textarea) {
          textarea.selectionStart = start;
          textarea.selectionEnd = start;
        }
      }
    } else {
      textarea.value = value.slice(0, start) + value.slice(end);
      if (textarea) {
        textarea.selectionStart = start;
        textarea.selectionEnd = start;
      }
    }

    event.preventDefault();
  }
});

document.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('key')) {
    const key = e.target;
    if (key.getAttribute('data-key') === 'Enter') {
      textarea.focus();
      key.classList.add('animate');
      const cursorPosition = textarea.selectionStart;
      const currentValue = textarea.value;
      const newValue = `${currentValue.substring(
        0,
        cursorPosition
      )}\n${currentValue.substring(cursorPosition)}`;
      textarea.value = newValue;
      textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
    } else if (
      key.getAttribute('data-key') === 'Backspace' ||
      key.getAttribute('data-key') === 'Delete'
    ) {
      textarea.focus();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const { value } = textarea;
      key.classList.add('animate');
      if (start === end) {
        if (key.getAttribute('data-key') === 'Backspace') {
          textarea.value = value.slice(0, start - 1) + value.slice(start);
          if (textarea) {
            textarea.selectionStart = start - 1;
            textarea.selectionEnd = start - 1;
          }
        } else {
          textarea.value = value.slice(0, start) + value.slice(start + 1);
          if (textarea) {
            textarea.selectionStart = start;
            textarea.selectionEnd = start;
          }
        }
      } else {
        textarea.value = value.slice(0, start) + value.slice(end);
        if (textarea) {
          textarea.selectionStart = start;
          textarea.selectionEnd = start;
        }
      }

      e.preventDefault();
    } else if (
      key.getAttribute('data-key') === 'ShiftLeft' &&
      nowLang === 'eng'
    ) {
      curentLayout = shiftEngKeys;

      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftLeft"]')
        .classList.add('animate');
    } else if (
      key.getAttribute('data-key') === 'ShiftLeft' &&
      nowLang === 'ru'
    ) {
      curentLayout = shiftKeysRu;
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftLeft"]')
        .classList.add('animate');
    } else if (
      key.getAttribute('data-key') === 'ShiftLeft' &&
      nowLang === 'bigEng'
    ) {
      curentLayout = keysEng;
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftLeft"]')
        .classList.add('animate');
      document
        .querySelector('button[data-key="CapsLock"]')
        .classList.add('animate');
    } else if (
      key.getAttribute('data-key') === 'ShiftLeft' &&
      nowLang === 'bigRu'
    ) {
      curentLayout = keysRu;
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftLeft"]')
        .classList.add('animate');
      document
        .querySelector('button[data-key="CapsLock"]')
        .classList.add('animate');
    } else if (
      key.getAttribute('data-key') === 'ShiftRight' &&
      nowLang === 'eng'
    ) {
      curentLayout = shiftEngKeys;
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftRight"]')
        .classList.add('animate');
    } else if (
      key.getAttribute('data-key') === 'ShiftRight' &&
      nowLang === 'ru'
    ) {
      curentLayout = shiftKeysRu;
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftRight"]')
        .classList.add('animate');
    } else if (
      key.getAttribute('data-key') === 'ShiftRight' &&
      nowLang === 'bigEng'
    ) {
      curentLayout = keysEng;
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftRight"]')
        .classList.add('animate');
      document
        .querySelector('button[data-key="CapsLock"]')
        .classList.add('animate');
    } else if (
      key.getAttribute('data-key') === 'ShiftRight' &&
      nowLang === 'bigRu'
    ) {
      curentLayout = keysRu;
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftRight"]')
        .classList.add('animate');
      document
        .querySelector('button[data-key="CapsLock"]')
        .classList.add('animate');
    } else if (key.getAttribute('data-key') === 'CapsLock') {
      if (nowLang === 'eng') {
        curentLayout = shiftEngKeys;
        nowLang = 'bigEng';
        creatLayout(curentLayout);
        document
          .querySelector('button[data-key="CapsLock"]')
          .classList.add('animate');
      } else if (nowLang === 'bigEng') {
        curentLayout = keysEng;
        nowLang = 'eng';
        creatLayout(curentLayout);
        document
          .querySelector('button[data-key="CapsLock"]')
          .classList.remove('animate');
      } else if (nowLang === 'ru') {
        curentLayout = shiftKeysRu;
        nowLang = 'bigRu';
        creatLayout(curentLayout);
        document
          .querySelector('button[data-key="CapsLock"]')
          .classList.add('animate');
      } else if (nowLang === 'bigRu') {
        curentLayout = keysRu;
        nowLang = 'ru';
        creatLayout(curentLayout);
        document
          .querySelector('button[data-key="CapsLock"]')
          .classList.remove('animate');
      }
    } else if (e.altKey && e.ctrlKey) {
      if (nowLang === 'eng') {
        curentLayout = keysRu;
        nowLang = 'ru';
        creatLayout(curentLayout);
      } else if (nowLang === 'bigEng') {
        curentLayout = shiftKeysRu;
        nowLang = 'bigRu';
        creatLayout(curentLayout);
      } else if (nowLang === 'ru') {
        curentLayout = keysEng;
        nowLang = 'eng';
        creatLayout(curentLayout);
      } else if (nowLang === 'bigRu') {
        curentLayout = shiftEngKeys;
        nowLang = 'bigEng';
        creatLayout(curentLayout);
      }
    } else if (
      key.getAttribute('data-key') === 'ControlLeft' ||
      key.getAttribute('data-key') === 'ControlRight' ||
      key.getAttribute('data-key') === 'AltRight' ||
      key.getAttribute('data-key') === 'AltLeft' ||
      key.getAttribute('data-key') === 'Tab'
    ) {
      key.classList.add('animate');
    } else if (key && !functionalKeys.includes(key.getAttribute('data-key'))) {
      textarea.focus();
      key.classList.add('animate');

      const cursorPosition = textarea.selectionStart;
      const currentValue = textarea.value;
      const newValue =
        currentValue.substring(0, cursorPosition) +
        key.textContent +
        currentValue.substring(cursorPosition);
      textarea.value = newValue;
      textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
    }
  }
});

document.addEventListener('mouseup', (e) => {
  if (e.target.classList.contains('key')) {
    const key = e.target;
    if (key.getAttribute('data-key') === 'ShiftLeft' && nowLang === 'eng') {
      curentLayout = keysEng;
      nowLang = 'eng';
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftLeft"]')
        .classList.remove('animate');
    } else if (
      key.getAttribute('data-key') === 'ShiftLeft' &&
      nowLang === 'ru'
    ) {
      curentLayout = keysRu;
      nowLang = 'ru';
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftLeft"]')
        .classList.remove('animate');
    } else if (
      key.getAttribute('data-key') === 'ShiftLeft' &&
      nowLang === 'bigEng'
    ) {
      curentLayout = shiftEngKeys;
      nowLang = 'bigEng';
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftLeft"]')
        .classList.remove('animate');
      document
        .querySelector('button[data-key="CapsLock"]')
        .classList.add('animate');
    } else if (
      key.getAttribute('data-key') === 'ShiftLeft' &&
      nowLang === 'bigRu'
    ) {
      curentLayout = shiftKeysRu;
      nowLang = 'bigRu';
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftLeft"]')
        .classList.remove('animate');
      document
        .querySelector('button[data-key="CapsLock"]')
        .classList.add('animate');
    } else if (
      key.getAttribute('data-key') === 'ShiftRight' &&
      nowLang === 'eng'
    ) {
      curentLayout = keysEng;
      nowLang = 'eng';
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftRight"]')
        .classList.remove('animate');
    } else if (
      key.getAttribute('data-key') === 'ShiftRight' &&
      nowLang === 'ru'
    ) {
      curentLayout = keysRu;
      nowLang = 'ru';
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftRight"]')
        .classList.remove('animate');
    } else if (
      key.getAttribute('data-key') === 'ShiftRight' &&
      nowLang === 'bigEng'
    ) {
      curentLayout = shiftEngKeys;
      nowLang = 'bigEng';
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftRight"]')
        .classList.remove('animate');
      document
        .querySelector('button[data-key="CapsLock"]')
        .classList.add('animate');
    } else if (
      key.getAttribute('data-key') === 'ShiftRight' &&
      nowLang === 'bigRu'
    ) {
      curentLayout = shiftKeysRu;
      nowLang = 'bigRu';
      creatLayout(curentLayout);
      document
        .querySelector('button[data-key="ShiftRight"]')
        .classList.remove('animate');
      document
        .querySelector('button[data-key="CapsLock"]')
        .classList.add('animate');
    } else if (key.getAttribute('data-key') === 'CapsLock') {
      // do nothing
    } else if (key) {
      key.classList.remove('animate');
    }
  }
});
textarea.addEventListener('mousedown', (e) => {
  const key = e.target;

  if (
    key.getAttribute('data-key') === 'Backspace' ||
    key.getAttribute('data-key') === 'Delete'
  ) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const { value } = textarea;

    if (start === end) {
      if (key.getAttribute('data-key') === 'Backspace') {
        textarea.value = value.slice(0, start - 1) + value.slice(start);
        if (textarea) {
          textarea.selectionStart = start - 1;
          textarea.selectionEnd = start - 1;
        }
      } else {
        textarea.value = value.slice(0, start) + value.slice(start + 1);
        if (textarea) {
          textarea.selectionStart = start;
          textarea.selectionEnd = start;
        }
      }
    } else {
      textarea.value = value.slice(0, start) + value.slice(end);
      if (textarea) {
        textarea.selectionStart = start;
        textarea.selectionEnd = start;
      }
    }

    e.preventDefault();
  }
});

window.addEventListener('beforeunload', () => {
  localStorage.layout = JSON.stringify(curentLayout);
  localStorage.leng = nowLang;
});
