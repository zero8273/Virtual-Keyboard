const textarea = document.createElement('textarea');
textarea.name = 'text';
textarea.id = 'keyboard';
textarea.cols = 30;
textarea.rows = 10;

// const keyboard = document.createElement('div');
// keyboard.classList.add('keyboard');
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
      key: 'Control',
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
      key: 'Control',
      dataKey: 'ControlRight',
    },
  ],
];

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

for (let i = 0; i < keys.length; i++) {
  const row = document.createElement('div');
  row.classList.add('keyboard__row');
  const rowKeys = keys[i];
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

document.addEventListener('keydown', function removeAnimation(e) {
  e.preventDefault();
  const key = document.querySelector(`button[data-key="${e.code}"]`);

  if (key) {
    key.classList.add('animate');
  }
});

document.addEventListener('keyup', function removeAnimation(e) {
  e.preventDefault();
  const key = document.querySelector(`button[data-key="${e.code}"]`);
  if (key) {
    key.classList.remove('animate');
  }
});

// document.body.appendChild(textarea);
// document.body.appendChild(keyboard);

// // // Находим все кнопки на виртуальной клавиатуре
// const virtualKeys = document.querySelectorAll('.key');
// console.log(virtualKeys);
// // // Добавляем обработчик события keydown на document
// document.addEventListener('keydown', (event) => {
//   //   // Получаем код нажатой клавиши

//   //   // Находим кнопку на виртуальной клавиатуре, которая соответствует нажатой клавише
//   const curentKey = Array.from(virtualKeys).find(
//     (key) => key.getAttribute('data-Key') === event.keyCode
//   );
//   console.log(curentKey);
// });

//   // Если кнопка найдена, то добавляем ей класс 'active' для анимации
//   if (virtualKey) {
//     virtualKey.classList.add('active');
//   }

//   // Также можно сделать так, чтобы нажатие на реальной клавиатуре отображалось в textarea
//   textarea.value += event.key;
// });

// // Добавляем обработчик события keyup на document
// document.addEventListener('keyup', (event) => {
//   // Получаем код отпущенной клавиши
//   const keyCode = event.keyCode;

//   // Находим кнопку на виртуальной клавиатуре, которая соответствует отпущенной клавише
//   const virtualKey = Array.from(virtualKeys).find(
//     (key) => key.textContent.charCodeAt(0) === keyCode
//   );

//   // Если кнопка найдена, то удаляем у неё класс 'active' для завершения анимации
//   if (virtualKey) {
//     virtualKey.classList.remove('active');
//   }
// });
// document.addEventListener('keydown', (event) => {
//   console.log(event);
// });
