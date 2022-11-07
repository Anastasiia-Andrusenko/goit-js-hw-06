
// 1.

const categoriesRef = document.querySelector('ul#categories');
const categoriesLength = categoriesRef.children.length;
console.log('Number of categories: ', categoriesLength);

console.log('') // пустая строка для "красоты" в консоле


// 2. 

const categoriesItemRef = document.querySelectorAll('li.item');

// console.log(categoriesItemRef);

for (let i = 0; i < categoriesItemRef.length; i += 1) {
  const category = categoriesItemRef[i];
  const categoryName = category.querySelector('h2');
  console.log('Category: ', categoryName.textContent);

  const categoryList = category.querySelector('ul');
  console.log('Elements: ', categoryList.children.length);
  console.log('') // пустая строка для "красоты" в консоле
}