/**----------------------------------------------
 * <---------- Functions i JavaScript ---------->
 ----------------------------------------------*/

 /* - Vad är en funktion? 
        En funktion har till uppgift att omvandla någonting, tänk en fabrik där det på ena sidan rullbandet 
        matas in "nånting" och på andra sidan kommer det ut något "annat"
 */

        function helloWorld() {
            console.log('hello world');
        }                                   // vår första funktion. Men inget kommer synas i console, detta pga att vi inte "kallat" funktionen än.

        helloWorld(); // Här kallar vi på vår funktion. Nu kommer det loggas i console "hello world"


// Funktionsparametrar, vad är det?

         function helloWorld(name) {        // Här ger vi vår funktion parametern "name".
            console.log('hello ' + name);   // Nu har vi möjligjort för att använda vår parameter.
        }                               

        helloWorld('santa');                // Här ger vi vår parameter ett "värde" och i console kommer det nu loggas ut "hello santa".

// Fler exempel


        function helloWorld(name) {        
            console.log('hello ' + name + '!');   // Ha koll på att du har rätt antal citattecken, jämna antal.
        }                               

        helloWorld('joel');                   // Loggar ut "hello joel!"

//--------------------------------------------------------------------------------------------------------------------------------------------------------

        function helloWorld(name, age) {                                        // Vi kan ange flera parametrar till vår funktion. Dessa ska vara ,-komma separerade.
            console.log('hello ' + name + '! you are ' + age + ' years old.');   // Glöm inte att hålla koll på syntaxen, +-tecken ''-tecken osv. Mellanslag före/efter '-tecken skapar mellanrum.
        }                               

        helloWorld('joel');     // Om vi bara anger en parameter vad händer då? Detta kommer resultera i "hello joel! you are undefined years old." För vi har inte definerat vår parameter "age".
        helloWorld('joel', 35); // Nu har vi gett vår parameter "age" ett number-värde av 35 (det är inte en sträng) och undefined kommer loggas 35 istället.

//--------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 *  Funktioner kan också ha ett retur-värde.
 */

        function add(num1, num2) {
            return num1 + num2;
        }

        add(1, 2); // vår funktion vår ett retur-värde av 3, men inget syns i console? Det är för att vi inte gör något med vårat retur-värde än.

        console.log(add(1,2)); // Här loggar vi ut returen i consolen

/** 
 *  Syftet med retur-värden är att man kan göra saker i flera steg, vi kan se nedan ett expemel.
 */  

        function multiply (num1, num2) {
            return num1 * num2;
        }                                   // Vår nya funktion multiplicerar num1 och num 2, 

        const sum = add(1, 2);              // Här sparar vi resultatet av returen från vår första function som heter "add". Den sparas i en variabel av typen const, och har namnet "sum".

        const product = multiply(sum, 2);   /* Nu skapar vi en ny variabel med namnet "product". Denna variabel ger parametrarna i funktionen "multiply" resultatet av "add" och 2, sedan 
                                             multiplicerar den ihop dessa värden. Så våran "multiply" - funktion ser nu ut såhär :

                                             function multiply (3, 2) {
                                                return 3 * 2; 
                                             } 
                                             
                                             */  

        console.log(sum);                   // Här loggar vi ut värdet i variabeln "sum", 3, dess värde kommer från funktionen "add" som plussar ihop 1 och 2, 1 + 2 = 3
        console.log(product);               // Nu loggar vi ut värdet i variabeln "product", 6. Dess värde kommer från return i funktionen add och nummret 2. 3 * 2 = 6


        // const biproduct = (sum, 10); {
        //    let bi = sum % 10;
        //    return bi;
        // } 


        let summ = (a, b) => {
            let result = a === b;
            return result;
        }
        
        let result1 = summ(sum, 3);
        console.log(result1);

