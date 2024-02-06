const categoriesEl = document.querySelector('#categories');
console.log(categoriesEl);

const list = [...categoriesEl.children];
console.log(list);

const numberList = categoriesEl.children.length;
console.log(`Number of categories: `, numberList);

list.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
})