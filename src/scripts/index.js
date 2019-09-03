/*
 * Exercise: Multiply Numeric
 */
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

/*
 * Exercise: Select h1 element
 */
document.body.getElementsByTagName('h1')[0].style = 'color: red;';


/*
 * Exercise: Select all li elements
 */
let liElements = document.body.getElementsByTagName('ul')[0].getElementsByTagName('li');

// for .. in selects the indexes
for (const index in liElements) {
    liElements[index].style = 'color: green;';
}

// for .. of directly selects the elements
for (const liElement of liElements) {
    liElement.style['font-size'] = '2em';

    if (liElement.innerText === 'Bruno') {
        liElement.style.color = 'red';
    }
}

/*
 * Exercise: Select and modify custom attribute
 */
console.log(document.body.getElementsByTagName('div')[1].getAttribute('data-hslu-module'));
document.body.getElementsByTagName('div')[1].setAttribute('data-hslu-module', 'WEBLAB');
console.log(document.body.getElementsByTagName('div')[1].getAttribute('data-hslu-module'));

/*
 * Exercise: Generate list from object
 */
let techRadar = {
    "Meta": {
        "generatedAt": new Date()
    },
    "TechRadar": {
        "Techniques": ["Micro Frontends", "Polyglot programming", "Secrets as a service", "Chaos Engineering"],
        "Tools": ["Cypress", "Helm", "Traefik", "Humio"], 
        "Platforms": ["Contentful", "AWS Fargate", "InfluxDB"], 
        "Languages & Frameworks": ["TypeScript", "Rust"]
    }
};

let p = document.createElement('p');
p.innerText = "Generated at " + techRadar.Meta.generatedAt;
document.body.appendChild(p);

let list = document.createElement('ul');
for (const title in techRadar.TechRadar) {
    let liTitle = document.createElement('li');
    liTitle.innerText = title;
    
    let entries = document.createElement('ul');
    for (const entry of techRadar.TechRadar[title]) {
        let liEntry = document.createElement('li');
        liEntry.innerText = entry;
        entries.appendChild(liEntry);
    }
    liTitle.appendChild(entries);
    list.appendChild(liTitle);
}
document.body.appendChild(list);