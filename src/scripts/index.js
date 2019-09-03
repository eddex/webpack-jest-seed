function multiplyNumeric(menu) {
    
    for (let key in menu) {
        
        if (typeof menu[key] === 'number') {
            menu[key] = menu[key] * 2;
        } 
    }
}

let menu = { width: 200, height: 300, title: "Titel" };
multiplyNumeric(menu);
console.log(menu);

document.body.getElementsByTagName('h1')[0].style = 'color: red;';

let liElements = document.body.getElementsByTagName('ul')[0].getElementsByTagName('li');

// for .. in selects the indexes
for (index in liElements) {
    liElements[index].style = 'color: green;';
}

// for .. of directly selects the elements
for (liElement of liElements) {
    liElement.style['font-size'] = '2em';

    if (liElement.innerText === 'Bruno') {
        liElement.style.color = 'red';
    }
}

console.log(document.body.getElementsByTagName('div')[1].getAttribute('data-hslu-module'));
document.body.getElementsByTagName('div')[1].setAttribute('data-hslu-module', 'WEBLAB');
console.log(document.body.getElementsByTagName('div')[1].getAttribute('data-hslu-module'));