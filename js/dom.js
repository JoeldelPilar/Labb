/**---------------------------------------------
 * <---------- DOM manipulation i JS ---------->
 ----------------------------------------------*/

 // Vi kan komma åt element, id:n , klasser etc i vår HTML med hjälp av JavaScript.

 /**
  *  document. öppnar upp för flera olika sätt att komma år DOM-trädet.
  *  Nedanför visas några exempel på hur och vad vi kan göra.
  */

    const myBtn = document.querySelector('#Btn');  // Här väljer vi ett element (<button> i detta fall) med id:t "btn"
    
    const myListItems = document.querySelectorAll('li'); // Nu kommer vi välja alla li - element på sidan.

    const bulkFood = document.querySelectorAll('li[data-type="bulk"]'); // Detta kommer att välja alla li - element med attributet data-type och värdet bulk.

    const externalLinks = document.querySelectorAll('a[href^="https://"]') // ^-tecknet betyder att något "börjar med".