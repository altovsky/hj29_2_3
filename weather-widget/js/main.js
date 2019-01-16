'use strict'

const request = new XMLHttpRequest();
request.addEventListener("load", onLoad);
request.open('GET', 'https://neto-api.herokuapp.com/weather');
request.send();

function onLoad( { target } ) {
  if (target.status === 200) {
    const response = JSON.parse(request.responseText);
    setData(response);  	
  }
}
