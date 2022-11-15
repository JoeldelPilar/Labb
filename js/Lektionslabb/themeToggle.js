/** 
 *  Pseudo-kod för theme toggle demo.
 * 
 *  1. Skapa en knapp som växlar tema när vi trycker på den.
 *  2. En Boolean för att hålla reda på vilket färgtema vi befinner oss i. 
 *  
 *      Variabel namn: isLightTheme - is är en bra grej att använda sig av. :P
 * 
 *  4. När vi trycker på knappen, anropa en funktion som kollar vilket tema vi är på just nu.  
 *  
 *  3. Ändra class i body-elementet. Använd classList funktionen i JS 
 * 
*/

const themeToggleBtn = document.querySelector('.theme_toggle');
themeToggleBtn.addEventListener('click', switchTheme);

// let isLightTheme = true;



function switchTheme() {

    document.body.classList.toggle('dark');
//     isLightTheme = !isLightTheme;  // ! = motsattsen.

//     if(isLightTheme) {
//         document.body.classList.remove('dark');
//         document.body.classList.add('light');
//     } else {
//         document.body.classList.remove('light');
//         document.body.classList.add('dark');
//     }
}