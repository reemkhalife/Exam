// ADDING ITEMS TO LISTS

document.getElementById('add-specific').addEventListener('click', addSpecific);
document.getElementById('add-general').addEventListener('click', addGeneral);

function addSpecific() {
    const newItemtInput = document.getElementById('item-input');
    const newItem = newItemtInput.value.trim();
    const radios = document.getElementsByName("type");
    let selectedType;
    if (radios[0].checked) {
        selectedType = radios[0].value.trim();
    } 
    else if (radios[1].checked) {
        selectedType = radios[1].value.trim();
    }
    else {
        selectedType = ''
    }
    if (newItem ===''){
        alert("Please make sure that you enter all the details");
    }
    if (selectedType !=='') {
        if (selectedType === "fruits") {
            const list = document.getElementById('fruits-list');
    
            const listItem = document.createElement('div');
            listItem.className = 'list-item';
            listItem.classList.add('fruity');
    
            const ptext = document.createElement('p');
            ptext.className = 'p';
            ptext.textContent = "Fruits! - " + newItem;
    
            listItem.appendChild(ptext);
    
            list.appendChild(listItem);
        }
        if (selectedType === "legumes") {
            const list = document.getElementById('legumes-list');
    
            const listItem = document.createElement('div');
            listItem.className = 'list-item';
            listItem.classList.add('veggy');
    
            const ptext = document.createElement('p');
            ptext.className = 'p';
            ptext.textContent = "Legumes! - " + newItem;
    
            listItem.appendChild(ptext);
    
            list.appendChild(listItem);
        }
    }
    else {
        alert("Please make sure that you enter all the details");
    }    
}

function addGeneral() {
    const newItemtInput = document.getElementById('item-input');
    const newItem = newItemtInput.value.trim();
    const radios = document.getElementsByName("type");
    let selectedType;
    if (radios[0].checked) {
        selectedType = radios[0].value.trim();
    } 
    else if (radios[1].checked) {
        selectedType = radios[1].value.trim();
    }
    else {
        selectedType = ''
    }
    if (newItem ===''){
        alert("Please make sure that you enter all the details");
    }
    if (selectedType !=='') {
        if (selectedType === "fruits") {
            const list = document.getElementById('general-list');
    
            const listItem = document.createElement('div');
            listItem.className = 'list-item';
            listItem.classList.add('all');
    
            const ptext = document.createElement('p');
            ptext.className = 'p';
            ptext.textContent = "Fruits! - " + newItem;
    
            listItem.appendChild(ptext);
    
            list.appendChild(listItem);
        }
        if (selectedType === "legumes") {
            const list = document.getElementById('general-list');
    
            const listItem = document.createElement('div');
            listItem.className = 'list-item';
            listItem.classList.add('all');
    
            const ptext = document.createElement('p');
            ptext.className = 'p';
            ptext.textContent = "Legumes! - " + newItem;
    
            listItem.appendChild(ptext);
    
            list.appendChild(listItem);
        }
    }
    else {
        alert("Please make sure that you enter all the details");
    }    
}

// SEARCHING FOR ITEMS

document.getElementById('search').addEventListener('click', searchItem);

function searchItem() {
    const newItemtInput = document.getElementById('item-search');
    const newItem = newItemtInput.value.trim();
    
    if (newItem ===''){
        return;
    }
    const items = document.querySelectorAll('.p');

    items.forEach(item => {
        const itemContent = item.textContent.toLowerCase();
        const parent = item.parentNode;
        if (itemContent.includes(newItem)) {
            parent.classList.add('highlight');
        } else {
            parent.classList.remove('highlight');
        }
    });
    
}

// DELETING ITEMS

document.getElementById('delete').addEventListener('click', deleteItem);

function deleteItem() {
    const newItemtInput = document.getElementById('item-search');
    const newItem = newItemtInput.value.trim();
    
    if (newItem ===''){
        return;
    }
    const items = document.querySelectorAll('.p');

    items.forEach(item => {
        const itemContent = item.textContent.toLowerCase();
        const parent = item.parentNode;
        const grandparent = parent.parentNode;
        if (itemContent.includes(newItem)) {
            grandparent.removeChild(parent);
        }
    });
    
}

// FILTERING ITEMS IN GENERAL LIST

const itemList = document.querySelectorAll('.list-item');

itemList.forEach(item => {
    item.addEventListener('click', function (){
    const parent = item.parentNode;
    const parentIdName = parent.id;
    if (parentIdName ==='general-list') {
        const family = item.textContent.split('! - ')[0];
        const fruitsList = document.getElementById('fruits-list');
        const legumesList = document.getElementById('legumes-list');
        if (family === 'Fruits') {
            item.classList.remove('all');
            item.classList.add('fruity');
            fruitsList.appendChild(item);
        } else if (family === 'Legumes') {
            item.classList.remove('all');
            item.classList.add('veggy');
            legumesList.appendChild(item);
        }
    }
    });
});

    
