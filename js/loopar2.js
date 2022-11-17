/**----------------------------------------------
 * <----------- Loopar i JavaScript ------------>
 * .................. Del 2 .....................
 ----------------------------------------------*/

// I den här delen ska vi bygga en funktion för att lägga till nya kryddor via vår hemsida.


 const spiceRack = ['Salt', 'Pepper', 'Curry', 'Cayenne', 'Banana', 'Garlic powder']

 spiceRack.sort();

const shelf = document.querySelector('#spices');

printSpiceShelf();

const addSpiceBtn = document.querySelector('#addSpiceBtn');
addSpiceBtn.addEventListener('click', addNewSpice);

const newSpiceName = document.querySelector('#newSpiceField');

function addNewSpice() {
    if (newSpiceName.value.length === 0) {
        return;
    }
    if (spiceRack.indexOf(newSpiceName.value) === -1){
            spiceRack.push(newSpiceName.value);
            spiceRack.sort();
            printSpiceShelf();
    }
}

function printSpiceShelf() {
    shelf.innerHTML ='';

    for (let i = 0; i < spiceRack.length; i++) { 
        const spiceName = spiceRack[i];
        const spiceNode = document.createElement('li'); 
        const spiceTextNode = document.createTextNode(spiceName); 
        spiceNode.appendChild(spiceTextNode);
    
        shelf.appendChild(spiceNode);
        
    }

    spiceRack.sort();

    const spices = Array.from(document.querySelectorAll('li'));

    spices.forEach((item) => {
    item.addEventListener('click', removeSpice);
    });

    
}


function removeSpice(e) {
    const index = spiceRack.indexOf(e.target.innerHTML);
    if (index > -1) {
        spiceRack.splice(index, 1);
        printSpiceShelf();
    }
}

