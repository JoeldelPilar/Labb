/**---------------------------------------------
 * <---------- Variablar i JavaScript---------->
 ----------------------------------------------*/

 /* 
    1. const
    2. let
    3. var
 */


//    Vi kan ge våra variablar olika "värden"

    /* String = Sträng, tänk text. */

            const hello = 'hej världen';
            const world = 'hello world';

                // Template literals
                    const myName = 'Joel'
                    const greetPerson = `Hello ${myName}!` //infogar en sträng innuti en annan sträng. 
                    console.log(greetPerson); // Kommer skriva ut "Hello Joel!" i console. 

    /* Number = tal (integer), OBS! inga citattecken runt talvärdet. */
            const myAge = 35;
            const pi = 3.14;  

    /* Boolean = sant/falskt OBS! inga citattecken runt värdet. */
            const bool = true;
            const isTrue = false;

    /* Null = "ingenting" förväxla ej med 0! */

            const init = null;

    /* Undefined = "odefinierat". */

        // console.log(dog); // fel i consolen då variabeln "dog" inte har deklarerats. (utkommenterat för att inte logga fel i consolen)

    /* Objekt - variabel med flera olika egenskaper. */

            const person = {
                name: 'Kalle',
                lastName: 'Anka',
                age: 75,
            };
                console.log(person);             // loggar ut all data i bokstavordning
                console.log(person.name);        // Loggar ut "Kalle", dot-notaion kallas detta, objektnamn.egenskap 
                console.log(person['lastName']); // Loggar ut "Anka", bracket-notaion. 
            // Symbol (har med objekt att göra)


    /* Array - index, Tänk typ dokumentskåp*/

            const spices = ['kanel', 'curry', 10, true]; // En Array kan hålla Strings, number och boolean värden.
            console.log(spices[2]); // kommer logga ut det tredje värdet i arrayen, dvs "10". Detta för att i JavaScript börjar vi räkna från 0.


    /** En annan data typ vi har är datum */

            const date = new Date();
            console.log(date); // Loggar ut dagens datum i consolen, "Mon Nov 07 2022 22:06:48 GMT+0100 (centraleuropeisk normaltid)""
            console.log(date.getFullYear()); //Loggar ut 2022 i consolen. 


    /** JavaScript är väldigt förlåtande när det kommer till att tolka olika typer av variabler. Detta kan vara ett problem och det gäller att hålla tungan rätt i mun.
     * 
     */

            const points = 10;     //talvärde
            const maxScore = '10'; //Sträng

            console.log(points == maxScore);  // Kommer logga ut "true" i consolen för oss. Den tolkar 10 som sträng och siffra som samma. = = 
            console.log(points === maxScore); // Detta kommer ge oss värdet "false", detta för att JS jämför även variabeltypen. = = =



     /** 
      * För att namnge Variabler i JavaScript finns det framför allt två huvudsätt att göra det på :
      * 
      * 1. camelCase = första ordets första bokstav är liten bokstav, det andra ordets första bokstav är en versal - joelDelPilar, kattHund osv.
      * 
      * 2. snake_case = separeras med ett underscore _ 
      * 
      * Det finns även en praktis att bara använda versaler tex "POINTS", detta gör man för att namnge en konstant "const" och förtydliga att det just är en konstant.
     */
            
            const camelCase = 'kamelkasse';
            const snake_case = 'ormkasse';
            const POINTS = 20;




/**----------------------------------------------------
 * <---------- Strängfunktioner i JavaScript---------->
 ----------------------------------------------------*/


 /* Det finns inbyggda funktioner för de olika variabeltyperna. Istället för att skriva massa extra kod så kan vi använda
 dessa funktioner för att göra något med vår variabel, se MDN för fullständig dokumentation på vilka funktioner som finns. */

            const myNewName = 'joel';

            console.log(myNewName.toUpperCase()); // Den inbyggda funktionen .toUpperCase omvandlar gemenerna i "joel" till versaler så att i consolen loggas "JOEL"

            const myTime = 7;

            console.log(String(myTime).padStart(2, '0') + ':00'); /** Detta omvandlar talet 7 från ett nummer till en sträng, då kan vi nyttja de inbyggda 
                                                                    funktionerna för strängar istället för dem för nummer. Det som händer sedan är att vi begränsar
                                                                    storleken på strängen till 2 tecken. Så skulle const få ett värde av 10 så skulle det matas ut
                                                                    10:00 i consolen. Som det är nu matas det ut 07:00 */





/**----------------------------------------------------
 * <------------- Övningar för variabler ------------->
 ----------------------------------------------------*/


            const petAge = 5;
            const joelAge = 35;

            const jointBirthdayParty = petAge + joelAge;

            console.log(`Welcome to our brithday bash! We celebrate total of ${(jointBirthdayParty)} years together`);



/**----------------------------------------------------
 * <-------------- Olika tecken för JS --------------->
 ----------------------------------------------------*/


//      \"Vikings"\ - Låter dig skriva ut " " som just citat-tecken"
//      +=, *= - Skriver du 5+=5 kommer du få ut 10, istället för att skriva tex x = 5 + 5 
//      % - Remainder operator, (återstoden) tex 13 % 5 blir 3.


                
             
        
                                                                

          //  Consolas, 'Courier New', monospace