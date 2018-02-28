const root = document.getElementById('root');
watchHash();

function createTanksList(tanks, root) {
    while(root.firstChild) {
        root.removeChild(root.firstChild);
    }
    let container = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Most popular tanks';
    tanks.forEach((tank) => {
        let div = document.createElement('div');
        div.setAttribute('title', 'Click to details');
        div.className = 'tank';
        let tankImg = document.createElement('img');
        tankImg.setAttribute('src', tank.preview);
        tankImg.setAttribute('alt', tank.model);
        div.appendChild(tankImg);
        let description = document.createElement('h2');
        description.className = 'description';
        let flag = document.createElement('img');
        flag.setAttribute('title', tank.country.toUpperCase());
        flag.setAttribute('src', tank.country_image);
        flag.setAttribute('alt', tank.country);
        description.appendChild(flag);
        let ten = document.createElement('span');
        ten.innerHTML = tank.level+' ';
        ten.className = 'ten';
        let model = document.createElement('span');
        model.setAttribute('title', tank.model.toUpperCase());
        model.innerHTML = tank.model;
        model.className = 'model';
        ten.appendChild(model);
        description.appendChild(ten);
        div.appendChild(description);
        div.addEventListener('click',() => location.hash = tank.model);
        container.appendChild(div);
    });
    root.appendChild(h1);
    root.appendChild(container);
}


function createDetailView(tanks, model, root) {
    let tank = tanks.find((tank) => {
        return tank.model === model;
    });
    while(root.firstChild) {
        root.removeChild(root.firstChild);
    }

    let heading = document.createElement('h3');
    heading.className = 'details-header';
    let flag = document.createElement('img');
    flag.setAttribute('src', tank.country_image);
    flag.setAttribute('title', tank.country.toUpperCase());
    flag.setAttribute('alt', tank.country.toUpperCase());
    heading.appendChild(flag);
    let modelName = document.createElement('span');
    modelName.innerHTML = tank.model.toUpperCase() + ' (level ' + tank.level + ')';
    heading.appendChild(modelName);

    let main = document.createElement('div');
    main.className = 'main';
    let preview = document.createElement('div');
    preview.className = 'preview';
    let previewHeading = document.createElement('h3');
    previewHeading.innerHTML = 'Preview';
    let tankImg = document.createElement('img');
    tankImg.setAttribute('src', tank.preview);
    tankImg.alt = tank.model;
    preview.appendChild(previewHeading);
    preview.appendChild(tankImg);
    main.appendChild(preview);

    let characteristics = document.createElement('div');
    characteristics.className = 'characteristics';
    let characteristicHeading = document.createElement('h3');
    characteristicHeading.innerHTML = 'Characteristics';
    characteristics.appendChild(characteristicHeading);
    let table = document.createElement('table');
    table.border = 1;
    for (key in tank.details){
        let tr = document.createElement('tr');
        let property = document.createElement('td');
        property.innerHTML = key.replace(/_/g, ' ');
        let value = document.createElement('td');
        value.innerHTML = tank.details[key];
        tr.appendChild(property);
        tr.appendChild(value);
        table.appendChild(tr);
    }
    characteristics.appendChild(table);
    main.appendChild(characteristics);

    let backButton = document.createElement('h4');
    backButton.innerHTML = 'Back to list view';
    backButton.addEventListener('click', () => location.hash = '');

    root.appendChild(heading);
    root.appendChild(main);
    root.appendChild(backButton);
}

window.onhashchange = watchHash;

function watchHash() {
    if(location.hash==''){
        createTanksList(tanks, root);
    } else {
        const model = location.hash.substr(1);
        createDetailView(tanks, location.hash.substr(1), root);
    }
}