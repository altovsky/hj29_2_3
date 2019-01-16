'use strict'

const xhr = new XMLHttpRequest();
const tabs = document.querySelectorAll('nav > a');
const content = document.getElementById('content');
const preloader = document.getElementById('preloader');

xhr.addEventListener('progress', () => preloader.classList.remove('hidden'));
xhr.addEventListener('loadend', () => preloader.classList.add('hidden'));
xhr.addEventListener('load', onLoad);

Array.from(tabs).forEach(tab => tab.addEventListener('click', showTab));

function showTab(event) { 
  event.preventDefault();
  if (event.currentTarget.classList.contains('active')) { 
    return;
  }

  Array.from(tabs).forEach(tab => tab.classList.remove('active'));

  event.currentTarget.classList.add('active');
  xhr.open('GET', event.currentTarget.getAttribute('href'));
  xhr.send(); 
}

function onLoad() { 
  if (xhr.status === 200) {
    content.innerHTML = xhr.responseText;
  }
}

function showEmail() { 
  xhr.open('GET', tabs[0].getAttribute('href'));
  xhr.send(); 
}

document.addEventListener('DOMContentLoaded', showEmail);
