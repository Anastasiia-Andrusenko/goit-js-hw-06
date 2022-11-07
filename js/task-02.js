
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ingredients.forEach(ingredient => {
//   // создаем лишку
//   const ingredientsItemRef = document.createElement('li');
//   // добавляем текст в ли
//   ingredientsItemRef.textContent = ingredient;
//   // добавляем класс в ли
//   ingredientsItemRef.classList.add('item');

//   // console.log(ingredientsItemRef); 

//   // вставляем эту ли в ул
//   const ingredientsRef = document.querySelector('#ingredients');
//   ingredientsRef.append(ingredientsItemRef)
// });



const createIngredientsItem = ingredients.map(ingredient => {
  // создаем лишку
  const ingredientsItemRef = document.createElement('li');
  // добавляем текст в ли
  ingredientsItemRef.textContent = ingredient;
  // добавляем класс для ли
  ingredientsItemRef.classList.add('item');
  return ingredientsItemRef;
  }
);

// вставляем лишки в список
const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.append(...createIngredientsItem);


