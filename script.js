// add a div to the document
var div = document.createElement('div');

// add a class of wrapper to the div
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
var ul = document.createElement('ul');

// add three list items with the words "one, two three" in them
var li1 = document.createElement('li');
li1.textContent = 'one';
ul.appendChild(li1);

var li2 = document.createElement('li');
li2.textContent = 'two';
ul.appendChild(li2);

var li3 = document.createElement('li');
li3.textContent = 'three';
ul.appendChild(li3);

// put that list into the above wrapper
div.appendChild(ul);

