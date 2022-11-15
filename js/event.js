/**----------------------------------------------
 * <------------ Events i JavaScript ----------->
 ----------------------------------------------*/


 // Event - Vi gör X så att något händer med Y, tex: Vi trycker på en knapp - någonting händer - bakgrundsfärgen på sidan ändras. 

    const btn2 = document.querySelector('#btn2');           // Vår "selector", vi väljer här vilket id i vårt html-dokument som ska vara värdet i vår const.

    btn2.addEventListener('click', handleClick);            // Vi skapar en "lyssnare", den lyssnar efter klick på vår const btn2 och vilken funktion som ska invoke:as

    function handleClick() {                                // Själva funktionen som körs när knappen klickas på. 
        console.log('knappen klickades på');                // Vi loggar i console en sträng med texten "knappen klickades på"
        document.body.style.backgroundColor = 'navy'        // Vi ändrar bakgrundsfärgen på vårt body element i HTML
        alert('Åh nej du klickade! Allting blev blått')     // En varningsrunta poppar upp och meddelar att vi har klickat och att bg-fägen kommer ändras. 
    }