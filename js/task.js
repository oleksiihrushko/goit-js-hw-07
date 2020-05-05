// ========================================        Task-01        ====================================================

const categories = document.querySelector('#categories');
console.log(`В списке ${categories.children.length} категории.`);

categories.querySelectorAll('.item').forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(
    `Количество элементов: ${item.querySelector('ul').children.length}`,
  );
});

// ========================================        Task-02        ====================================================

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const allLi = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item;
  return li;
});
document.querySelector('#ingredients').prepend(...allLi);

// ========================================        Task-03        ====================================================

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let markup = ``;
images.forEach(
  image => (markup += `<li><img src="${image.url}" alt="${image.alt}" /></li>`),
);
document.querySelector('#gallery').insertAdjacentHTML('beforeend', markup);

// ========================================        Task-04        ====================================================

let counterValue = 0;

function increment() {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
}

const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]',
);
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]',
);

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

// ========================================        Task-05        ====================================================

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function inputChange(event) {
  nameInput.value ? (nameOutput.textContent = event.currentTarget.value) : '';
}

nameInput.addEventListener('input', inputChange);

// ========================================        Task-06        ====================================================

const validationInput = document.querySelector('#validation-input');

function validationInputBlur() {
  validationInput.value.length === 6
    ? validationInput.classList.add('valid')
    : validationInput.classList.add('invalid');
}

validationInput.addEventListener('blur', validationInputBlur);

// ========================================        Task-07        ====================================================

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

console.log(fontSizeControl.value);

function fontSizeChange() {
  text.setAttribute('style', `font-size: ${fontSizeControl.value}px`);
}

fontSizeControl.addEventListener('input', fontSizeChange);

// ========================================        Task-08        ====================================================

const inputNumber = document.querySelector('#controls input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

renderBtn.addEventListener('click', () => createBoxes(inputNumber.value));
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.backgroundColor =
      '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    boxes.append(newDiv);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
