const textarea = document.createElement('textarea');
textarea.name = 'text';
textarea.id = 'keyboard';
textarea.cols = 30;
textarea.rows = 10;

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

const keys = [
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

curentLayout = keys;
nowLang = 'eng';

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const creatLayout = function (arr) {
  keyboard.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');
    const rowKeys = arr[i];
    for (let j = 0; j < rowKeys.length; j++) {
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
// creatLayout(shiftEngKeys);

document.addEventListener('keydown', function removeAnimation(e) {
  e.preventDefault();
  textarea.focus();
  const key = document.querySelector(`button[data-key="${e.code}"]`);
  if (key.getAttribute('data-key') === 'Enter') {
    key.classList.add('animate');
    const cursorPosition = textarea.selectionStart;
    const currentValue = textarea.value;
    const newValue =
      currentValue.substring(0, cursorPosition) +
      '\n' +
      currentValue.substring(cursorPosition);
    textarea.value = newValue;
    textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  } else if (
    key.getAttribute('data-key') === 'ShiftLeft' &&
    nowLang === 'eng'
  ) {
    curentLayout = shiftEngKeys;
    nowLang = 'bigEng';
    creatLayout(curentLayout);

    document
      .querySelector(`button[data-key="ShiftLeft"]`)
      .classList.add('animate');
  } else if (key.getAttribute('data-key') === 'CapsLock') {
    if (nowLang === 'eng') {
      curentLayout = shiftEngKeys;
      nowLang = 'bigEng';
      creatLayout(curentLayout);
      document
        .querySelector(`button[data-key="CapsLock"]`)
        .classList.toggle('animate');
    } else if (nowLang === 'bigEng') {
      curentLayout = keys;
      nowLang = 'eng';
      creatLayout(curentLayout);
    }
    key.classList.toggle('animate');
  } else if (key && !functionalKeys.includes(key.getAttribute('data-key'))) {
    key.classList.add('animate');
    //  console.log(key.textContent);
    const cursorPosition = textarea.selectionStart;
    const currentValue = textarea.value;
    const newValue =
      currentValue.substring(0, cursorPosition) +
      key.textContent +
      currentValue.substring(cursorPosition);
    textarea.value = newValue;
    textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
    //  textarea.value += key.textContent;
    //  console.log(e);
  }
});

document.addEventListener('keyup', function removeAnimation(e) {
  e.preventDefault();
  const key = document.querySelector(`button[data-key="${e.code}"]`);
  if (key.getAttribute('data-key') === 'ShiftLeft' && nowLang === 'bigEng') {
    curentLayout = keys;
    nowLang = 'eng';
    creatLayout(curentLayout);
    key.classList.remove('animate');
  } else if (key.getAttribute('data-key') === 'CapsLock') {
  } else if (key) {
    key.classList.remove('animate');
  }
});

textarea.addEventListener('keydown', (event) => {
  if (event.code === 'Backspace' || event.code === 'Delete') {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;

    if (start === end) {
      if (event.code === 'Backspace') {
        textarea.value = value.slice(0, start - 1) + value.slice(start);
        textarea.selectionStart = textarea.selectionEnd = start - 1;
      } else {
        textarea.value = value.slice(0, start) + value.slice(start + 1);
        textarea.selectionStart = textarea.selectionEnd = start;
      }
    } else {
      textarea.value = value.slice(0, start) + value.slice(end);
      textarea.selectionStart = textarea.selectionEnd = start;
    }

    event.preventDefault();
  }
});

//Mouse event///////////////////////////////////////////////////////////////////////////////////////////Mouse event
keyboard.addEventListener('mousedown', function removeAnimation(e) {
  //   console.log(e.target);
  if (
    e.target.classList.contains('key') &&
    !functionalKeys.includes(e.target.getAttribute('data-key'))
  ) {
    const activeKey = e.target;
    //  console.log(activeKey);
    activeKey.classList.add('animate');
    textarea.value += activeKey.textContent;
  }
});

keyboard.addEventListener('mouseup', function removeAnimation(e) {
  //   console.log(e.target);
  if (e.target.classList.contains('key')) {
    const activeKey = e.target;
    //  console.log(activeKey);
    activeKey.classList.remove('animate');
  }
});
