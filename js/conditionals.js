/**----------------------------------------------
 * <-------- Conditionals i JavaScript --------->
 * ..........If-satser och Switch-cases..........
 ----------------------------------------------*/

// if-satser handlar om programlogik och hur vi tar oss från A-Ö 

    // const today = 'thursday';
    const today = 'friday';

    if(today == 'thursday'){
        console.log('idag är det torsdag');
    } else if (today =='monday') {
        console.log('idag är det måndag')
    } else {
        console.log('det är inte torsdag idag');
    }


// Switch-case 

    switch(today) {
        case 'monday':
            console.log('Today is Monday');
            break;
        case 'tuesday':
            console.log('Today is tuesday');
            break;
        case 'wednesday':
            console.log('Today is Wednesday');
            break;
        default:
            console.log('Den här dagen exicterar inte')
    }

    // osv. En switch case i det här fallet är också endel kod men kanske något enklare att läsa.


    /**------------------------------------>
     *  Lite mera avancerade if-satser 
     <------------------------------------*/

     // Om vi vill jämföra något, typ två olika tal så kan vi göra följande ----->

     const num1 = 10;
     const num2 = 5;

     if (num1 > num2) {
        console.log('Yep yep yep!');
     } else {
        console.log('Noooooooo!');
     }

     /** Operatorer för att jämför hur någoting är: 
      * 
      *  && - och.
      * || - eller.
      * (! = ) / != - är inte lika med.
      *  På detta sätt kan vi kontrollera när något ska köras i vårt program.
     */


     if (num1 < 10 && num2 > 1) {              // Om num1 är mindre än 10 OCH num2 är större än 1 - Det är detta villkor vi sätter här.
        console.log('Villkoret stämmer!');      // Inget kommer loggas ut i vår console därför 10 är inte mindre än 10
     }

     if (num1 <= 10 && num2 > 1) {              // Nu har vi gjort om vår < "mindre än" genom att lägga till ett =, dvs "< =" (men dom sitter ihop) så det blir mindre än eller lika med.
        console.log('Villkoret stämmer!');
     }

     if (num1 == 10 || num2 == 5) {                 // Om num1 är = 10 ELLER num2 = 5 så kommer villkoret godkännas.
        console.log('Detta vilkor stämmer också!'); // Våra parametrar stämmer så consolen kommer logga strängen. Om 10 ändras till något annat kommer den fortfarande vara godkänd, sålänge den enda stämmer så är villkoret uppfyllt.
     }

     if (num1 != 10) {                          // Om num1 INTE ÄR LIKA MED 10.
        console.log('är inte 10!');  
     }

     //>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------<

     /** 
      *  Okej! Nu ska vi sätta ihop hela den här "smeten" och se om det kan bli någonting användbart! ;-)
     */

        const myBlogPostTitel = 'My programming experiments!';  // Vår variabel.

        function prettify(str, lowercase) {                    // Vi skapar en funktion som heter "prettify" och den har två parametrar som vi kan mata in värden i.
            if(lowercase){                                     // Här säger vi att: Om parametern "lowercase" är "true" då ska någonting hända.
                 console.log(str.toLowerCase());               // Nu talar vi om vad som ska hända om lowercase är true, alla bokstäver ska bli små-bokstäver.
            } else {                                           // MEN om lowercase är false (Kom ihåg att booleans bara kan vara true/false).
               console.log(str.toUpperCase());                 // Då ska bokstäverna bli stora. 
            }      
        }

        prettify(myBlogPostTitel, true);                       /**
                                                                * Nu kör vi (invoke) vår funktion, parametern "str" har fått värdet från vår 
                                                                  variabeln vi skapade (myBlogPostTitel), parametern "lowercase" har fått värdet
                                                                  "true" och kommer köra våran "if", som gör om bokstäverna till små.
                                                                */

        /**
         * Vi gör om vår funktion litegrann, nu vill vi kunna göra våran titel mer url-vänlig, så vi ska se här nedan hur det kan göras.
         */

        function prettify2(str, lowercase) {                   // Jag har döpt om vår funktion till prettify2 för att inte få krockar i koden. 
            if(lowercase) {    

                /** 
                 * Här händer magin :-) 
                 * 1. Vi skapar en ny variabel som ska innehålla våran omgjorda sträng. 
                 * 2. Först laddar vi in parametern "str", som vi senare väljer att ge värdet från våran variabel "myBlogPostTitel"
                 * 3. Sedan använder vi funktionen "toLowerCase()", som är inbyggd i JS, för att göra om alla bokstäver till små.
                 * 4. Sen byter vi ut alla mellanslag ' ' (citat-tecken med ett mellanslag i mellan) mot ett "-", vi gör detta med, den också
                 *    inbyggda funktionen, "replaceAll()".
                 * 5. Vi använder ytterligare en "replaceAll()" funktion för att ta bort alla ! och lägga till - ingenting.
                 * 6. Sist säger vi att om parametern lowercase ( function prettify2(str, lowercase) ) är "true", då ska vi logga ut vår nya
                 *    variabel "newStr"
                */
            
                const newStr = str.toLowerCase().replaceAll(' ', '-').replaceAll('!', ''); 
                 console.log(newStr);

            } else {                                          
               console.log(str.toUpperCase().replaceAll(' ', '-').replaceAll('!', ''));     // Vi gör samma omvandling, att vi tar bort alla mellanrum och !.           
            }      
        }

        prettify2(myBlogPostTitel, true); //  resultat: my-programming-experiments
        prettify2(myBlogPostTitel, false); // resultat: MY-PROGRAMMING-EXPERIMENTS


//>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------<
        
/** 
 *    Ytterligare ett exempel på if-satser. Vi ska göra ett smart lås-system för familjen Pigg som råkat ut för flera inbrott senaste tiden.
 *  Vi vill skapa ett script, en kod, som bara låser upp dörren för Musse och Mimmi Pigg.
*/

// Vi börjar med att deklarera våra variablar som behövs:

        const firstName = 'Musse';
        const lastName = 'Pigg';

// Nu ska vi fixa låset!

        if (firstName == 'Musse' && lastName == 'Pigg') { // Om firstName är lika med Musse OCH lastName är lika med Pigg ->
            console.log('Välkommen in husägare!');        // Då kommer dörren låsas upp och välkommna Musse in. 
        }
// Men nu kommer ju bara Musse in!, vi måste lägga till access för Mimmi också!

        else if (firstName == 'Mimmi' && lastName == 'Pigg') { // På samma sätt som ovan men vi har lagt till att om firstName är lika med Mimmi
            console.log('Välkommen in husägare!');             // då öppnas dörren också. (i detta fall är dörren meddelandet i conolse :-P )
        } else {
            console.log('Sluta göra inbrott!!!'); // Om inte firstName = Musse eller Mimmi OCH lastName = Pigg, då är dörren fortsatt låst!
        }

        /** 
         *  Testa att ändra på värderna i variablarna (const firstName och lastName), vad händer i console i din browser då?
        */


// VÄNTA!!!!!!!!! Måste vi kolla efternamnet TVÅ gånger!!??? - Känns onödigt väll?
// Ja du har rätt, vi kan förenkla vår kod, men för att inte våra variablar ska krocka med varandra så notera ändringen i slutet på varje variabel.



    const firstName2 = 'Musse';
    const lastName2 = 'Pigg';


    if ((firstName2 == 'Musse' || firstName2 =='Mimmi') && lastName2 == 'Pigg') { 
        console.log('Välkommen in husägare!');        
    }

    // else if (firstName == 'Mimmi' && lastName == 'Pigg') { 
    //     console.log('Välkommen in husägare!'); {            
    
    else {
        console.log('Sluta göra inbrott!!!'); 
    }

/** 
 *  Försök se vad som händer här, den gamla koden har jag kommenterat bort, och ändrat om i vår if-sats. Lite högre upp i koden hittar du förklaringar
 * på operatorer, för vi har faktiskt använt oss av en ny operator för att lösa uppgiften. 
 * 
 *  Blir du osäker kan du scrolla ner till rad 300 för att få en förklaring :-)
 */
















































































































/** 
 *   if ((firstName == 'Musse' || firstName =='Mimmi') && lastName == 'Pigg') - Vi har lagt till operatorn || - eller. Så det vi säger här är:
 * 
 * 1. Om firstName är lika med 'Musse' ELLER lika med 'Mimmi' OCH lastName är lika med 'Pigg' då kan vi öppna upp låset! 
 * 
 * 2. För att inte få problem har vi också laggt till ( ) runt firstName == 'Musse' || firstName =='Mimmi' - varför då?
 * 
 *      JavaScript kommer annars titta på båda sidor om våran || - eller operator. Våran if-sats får en "bug". Det som händer är att -
 * 
 *  Om firstName är Musse ELLER Mimmi OCh Pigg så är vår if ett godkänt värde, BrainOverLoad nu va!? :-) 
 * 
 *  Komihåg att om ett värde på ena sidan av en || - eller operator är sant, då är resulatet SANT. Med hjälp av våra ( ) kommer JavaScript att
 *  först titta innanför dem och få ett värde, i vårt fall: 
 * 
 *                                    (firstName == 'Musse' || firstName =='Mimmi')
 *                                  Är firstName == Musse ELLER          == Mimmi - då har vi ett sant värde och kan titta vidare i koden --->
 * 
 * --------> && lastName == 'Pigg' OCH är lastName == Pigg då har vi våra två SANNA värden och kan öppna låset. 
 * 
 *          Buggen som annars blir är att någon skulle kunna heta Janne Pigg, och komma in, eller Musse Piggelin kan också komma in.
 * 
 *  Du kan testa detta genom att ta bort paranteserna (firstName == 'Musse' || firstName =='Mimmi') -> firstName == 'Musse' || firstName =='Mimmi'
 * 
 *  Byt nu ut namnen i variablarna const firstName och lastName, ett i taget och se vad som händer.
 */