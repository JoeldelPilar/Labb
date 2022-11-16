/**----------------------------------------------
 * <----------- Arrayer i JavaScript ----------->
 * .............Listor eller filskåp.............
 ----------------------------------------------*/

// Viktigt att tänka på ordningen i en array, som alltid utgår från 0 (index 0)

//index i vår array --0      --1       --2         --3      --4       --5
 const spiceRack = ['Salt', 'Pepper', 'Curry', 'Cayenne', 'banana', 'Garlic powder'] // Vår array, full med olika kryddor och en bannan. OBS! alla dessa är strängar men du kan även ha nummer osv.

console.log(spiceRack); // Nu kan vi se vår array i consolen.

console.log(spiceRack.length); // Loggar ut hela arryens längd i consolen, just nu "6"

console.log(spiceRack[3]); // Loggar ut Cayenne till consolen, så 3 är i detta fall den 4:e kryddan.


// Nu är ju Bannan inte en krydda, så den vill vi ta bort. Det kan vi göra med en inbyggd funktion som finns
// i arrayer:
// slice och splice. 

spiceRack.splice(4, 1); // Nu säger vi att vi vill ta bort det som finns på index 4 och vi vill ta bort 1 sak.

console.log(spiceRack); // Bannan har tagits bort.

// Eftersom det är lite oordning på kryddhyllan så vill vi sortera den.

spiceRack.sort(); // kryddorna sorteras i bokstavsordning.

console.log(spiceRack); // Vår sorterade array.

// Vanligt förekommande är att behöva ta reda på om något finns i en array och på vilken plats.

const hasCayenne = spiceRack.indexOf('Cayenne');           // Vi frågar vilken plats (index) som "Cayenne" har i våran array. 
const hasCayenneOr = spiceRack.indexOf('cayenne');         // Då JavaScript är "case sensitive" kommer vi få värdet -1 här, med andra ord att cayenne inte finns, eftersom det är stavat med litet c
const hasWhitePepper = spiceRack.indexOf('White pepper');  // Nu frågar vi vilken plats "White pepper" har i arrayen, men då det inte finns kommer vi även här få värdet -1.

console.log(hasCayenne, hasWhitePepper, hasCayenneOr);  // Vi loggar ut samtliga av våra variablar som frågar efter kryddor.

// VIKTIGT! Ska du använda en if-sats för att kolla om något finns i en array, tänk på index 0, 0 motsvarar det boolska värdet "false".

// Här nere frågar vi om Cayenne finns i kryddhyllan, vilket det gör. Eftersom vi sorterade våra kryddor så finns nu Cayenne på plats 1, eller index 0 i våran array.


if (hasCayenne) {
    console.log('No need to go shopping!');  // Om Cayenne finns så ska vi logga meddelandet "No need to go shopping!"
} else {
    console.log('Cayenne is missing, run Run RUN and GET CAYENNE!!!'); // Om Cayenne INTE finns ska vi logga ut "Cayenne is missing, run Run RUN and GET CAYENNE!!!"
}

// Vad tror du kommer loggas ut här? 
// Precis vi kommer logga ut vår "else" -sats: "Cayenne is missing, run Run RUN and GET CAYENNE!!!" 

// Detta eftersom if (hasCayenne) är lika med "false" då Cayenne står på index med värdet 0.


//MEN vi kan så klart rätta till och lösa detta, vilket är vanligt att man behöver göra. 

if (hasCayenne > -1) {                      // Om Cayenne har ett värde högre än -1 så är vår if-sats = true.
    console.log('No need to go shopping!');
} else {
    console.log('Cayenne is missing, run Run RUN and GET CAYENNE!!!'); 
}

// Ska vi handla en ny krydda måste vi ju kunna lägga till den på nått sätt? JA, det kan vi göra. Med hjälp av en funktion som heter "push" -->

spiceRack.push('White pepper'); // Vi har handlat våran "White pepper" och ställt in den i kryddskåpet.

console.log(spiceRack);  // OBS!! kryddan hamnar sist i arrayen, alla andra kryddor är sorterade men inte den nya kryddan.

// Ahhhh vi får sortera igen!!!

spiceRack.sort();

console.log(spiceRack); // MEN JUSTE! W kommer ju efter S i alfabetet! Hyllan blev sorterad i alla fall, flax kallas det! Hade vår krydda tex. börjat på bokstaven A hade den nu istället hamnat först i vår array.

//----------------------------------------------------------------------------------------

// Testa lägga till flera kryddor och sortera sen:

// Lemon pepper
// Aromat
// Oregano

spiceRack.push('Lemon pepper', 'Aromat', 'Oregano');

console.log(spiceRack); // Dessa tre nya kryddor hamnade sist, utanför sorteringen. 

spiceRack.sort();

console.log(spiceRack); // SÅ nu är den sorterad igen!
//----------------------------------------------------------------------------------------

// Lite olika sätt att plocka bort saker ur arrayen dårå:

spiceRack.pop(); // Tar bort den sista kryddan ur arrayen.

console.log(spiceRack); // White pepper är nu borta 

spiceRack.shift(); // Tar bort den första kryddan.

console.log(spiceRack); // Nu är även Aromat borta. 

// Detta är lite olika sätt att modifiera sin array på. 

