/**----------------------------------------------
 * <----------- Loopar i JavaScript ------------>
 * ..............................................
 ----------------------------------------------*/
// Vi återanvänder arrayen från scriptet array.js
const spiceRack = ['Salt', 'Pepper', 'Curry', 'Cayenne', 'Banana', 'Garlic powder']

// Vi vill fylla i vår lista spices i html med vår array.

spiceRack.sort();

const shelf = document.querySelector('#spices');

// const spice1Name = spiceRack[0]; // namnet på krydda 1 "salt"
// const spice1Node = document.createElement('li'); // Vi skapar ett li element 
// const spice1TextNode = document.createTextNode(spice1Name); // Vi skapar en text nod för vår krydda, för innnan har vi bara plockat ut den men inte gjort ngt med den. Tänk att det skulle vara som ett <span> element.
// spice1Node.appendChild(spice1TextNode); // skapar själva <li> elementet och slänger in vår krydda = <li>salt</li>

// shelf.appendChild(spice1Node); // Och så trycker vi ut/in det i vår ul i DOM.

// Ska vi nu få ut alla våra kryddor vill vi gärna slippa skriva all denna kod för varje krydda, för det skulle bli väldigt långt!

// Därför ska vi använda oss av en "loop" , yay! 

for (let i = 0; i < spiceRack.length; i++) {  // Vår loop, en variabel som håller reda på kryddan vi plockar ut. Vi börjar på 0 och räknar igenom tills vår array är tom.
    const spiceName = spiceRack[i]; // Vi plockar ut namnet för varje plats i kryddhyllan.
    const spiceNode = document.createElement('li'); // Vi säger att det ska skapas ett li element
    const spiceTextNode = document.createTextNode(spiceName); // Vi gör om vår kryddas namn till text.
    spiceNode.appendChild(spiceTextNode); // Vi skapar själva li elementet med vår krydda i.

    shelf.appendChild(spiceNode); // lägger till det i vår DOM.
}

