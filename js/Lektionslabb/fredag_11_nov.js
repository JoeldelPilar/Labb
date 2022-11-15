// Funktion för + och - 
// arrayer och loop
// Ränka i programmering börjar alltid på 0

//loop = upprepning och ersätter något. (finns 3 olika typer)

for (let i = 0; i < 10; i++) {       // i för index, av lathet
    console.log('Munk ' + (i + 1));
}


// array = tänk bokhylla, kan hålla olika värden, sträng, boolean, number etc.

const munkar = ['munk', 'munk2', 'munk3', 'munk4']; // Istället för att deklarera flera variabler kan vi göra en lista, hylla, en ARRAY.

    console.log(munkar);
//<------------------------------------------------------------------------------------------------------------------------------------->




    // const num1 = '1';
    // const num2 = '23';
    // const sum = Number(num1) + Number(num2);
// allt som JS hämtar från HTML kommer tolkas som en sträng.



const decreaseButtons = document.querySelectorAll('button[data-operator="minus"]'); // väljer alla knappar på sidan med attributet data-operator
const addButtons = document.querySelectorAll('button[data-operator="plus"]'); 
    for (let i = 0; i < decreaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', decreaseCount);
    }

    function decreaseCount(e) {
        const amountEl = e.currentTarget.parentElement.querySelector('.amount');
        
        let amount = Number(amountEl.innerText);

        if (amount == 0) {
            return
        }else {
            amountEl.innerHTML = amount - 1;
        }     
        updateDonutSum(e.currentTarget.parentElement);
    }

//Plus knapparna!

for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', addCount);
}

function addCount(e) {
    const amountEl = e.currentTarget.parentElement.querySelector('.amount');
    
    let amount = Number(amountEl.innerText);


        amountEl.innerHTML = amount + 1;

        updateDonutSum(e.currentTarget.parentElement);
    }

    /**
     *  När man har klickat på + eller - ska summan uppdateras.
     *  Vi behöver ha redan på antalet av munkar.
     *  Vi behöver ha reda på priset på munken.
     */

    function updateDonutSum(donutEl) {
        const donutSingelPrice = donutEl.querySelector(".price").innerHTML;
        const orderAmount = donutEl.querySelector('.amount').innerHTML;

        const sum = donutSingelPrice * orderAmount; 

        donutEl.querySelector('.sum').innerHTML = sum + ' kr';

        console.log(sum);
    }



