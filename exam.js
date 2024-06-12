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
    
            const ptext = document.createElement('p');
            ptext.textContent = "Fruits! - " + newItem;
    
            listItem.appendChild(ptext);
    
            list.appendChild(listItem);
        }
        if (selectedType === "legumes") {
            const list = document.getElementById('legumes-list');
    
            const listItem = document.createElement('div');
            listItem.className = 'list-item';
    
            const ptext = document.createElement('p');
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
    
            const ptext = document.createElement('p');
            ptext.className = 'list-item';
            ptext.textContent = "Fruits! - " + newItem;
    
            listItem.appendChild(ptext);
    
            list.appendChild(listItem);
        }
        if (selectedType === "legumes") {
            const list = document.getElementById('general-list');
    
            const listItem = document.createElement('div');
            listItem.className = 'list-item';
    
            const ptext = document.createElement('p');
            ptext.textContent = "Legumes! - " + newItem;
    
            listItem.appendChild(ptext);
    
            list.appendChild(listItem);
        }
    }
    else {
        alert("Please make sure that you enter all the details");
    }    
}

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
        if (itemContent.includes(newItem)) {
            item.classList.add('highlight');
        } else {
            item.classList.remove('highlight');
        }
    });
    
}
const item = document.getElementsByClassName('list-item');

item.addEventListener('click', function (){
    alert("you clicked");
    const parent = document.parentNode;
    const parentClassList = parent.classList;
    if (parentClassList ==='general-list') {
        const family = item.textContent.split('! - ')[0];
        const fruitsList = document.getElementById('fruits-list');
        const legumesList = document.getElementById('legumes-list');
        if (family === 'Fruits') {
            fruitsList.appendChild(item);
        } else if (family === 'Legumes') {
            legumesList.appendChild(item);
        }
    }
    
});
    
