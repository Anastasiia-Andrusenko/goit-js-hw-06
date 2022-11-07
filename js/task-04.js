
const valueRef = document.querySelector('#value');
valueRef.style.marginLeft = "10px"; // сделала для себя, неприятно прилипали кнопки
valueRef.style.marginRight = "10px"; // сделала для себя, неприятно прилипали кнопки


let counterValue = Number(valueRef.textContent);


const onDecrementButton = () => {
  valueRef.textContent = counterValue -=1 ;
}

const onIncrementButton = () => {
  valueRef.textContent = counterValue += 1;
}

const decrement = document.querySelector('[data-action="decrement"]');
decrement.addEventListener('click', onDecrementButton);

const increment = document.querySelector('[data-action="increment"]');
increment.addEventListener('click', onIncrementButton);


