'use strict'

const xhr = new XMLHttpRequest();
xhr.addEventListener('load', onLoad);
xhr.open('GET', 'https://neto-api.herokuapp.com/book/');
xhr.send();

const content = document.getElementById('content');

function onLoad() { 
  const books = JSON.parse(xhr.responseText);
  content.innerHTML = '<li></li>'.repeat(books.length);
  const items = Array.from(document.querySelectorAll('#content > li'));
  items.forEach((item, i) => {
    item.dataset.title = books[i].title;
	item.dataset.author = books[i].author.name;
	item.dataset.info = books[i].info;
	item.dataset.price = books[i].price;
	item.innerHTML = `<img src="${books[i].cover.small}">`;
  }); 
}
