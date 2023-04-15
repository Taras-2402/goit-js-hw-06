const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('li');
  console.log(`Category: ${categoryName} \nNumber of items: ${categoryItems.length}`);
});