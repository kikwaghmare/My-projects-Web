// Write the code to access element which is having id as "text"

const ele1 = document.getElementById("text");
console.log(ele1);


// Write the code to access element which is having tag as "h1"

const ele2 = document.getElementsByTagName("h1");
console.log(ele2[2]);


// Write the code to access element which is having class as "box"

const ele3 = document.getElementsByClassName("box");
console.log(ele3[0]);


// "<h1>Hello </h1>
// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"

ele2[0].innerText = "Hello World";


// Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

const ele4 = document.getElementsByClassName("parent");
console.log(ele4[0]);

function changeDirection(){
ele4[0].style.flexDirection = "column";
}


// What’s the difference between window vs document?

// Document Object:
//  The document object represent a web page that is loaded in the browser.
//  By accessing the document object, we can access the element in the HTML page. 
//  With the help of document objects, we can add dynamic content to our web page. 
//  The document object can be accessed with a window.document or just document.



// Window Object: The window object is the topmost object of the DOM hierarchy. 
// It represents a browser window or frame that displays the contents of the webpage.
//  Whenever a window appears on the screen to display the contents of the document, 
//  the window object is created. 



// "<h1>Hello </h1>

// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"
const ele5 = document.createElement("h1");
document.body.appendChild(ele5);
ele5.setAttribute("id","heading");
ele5.innerText = "Hello";
ele5.style.color = "red";

console.log(ele5);

// Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

console.log(ele2[0]);
function replaceText(){
    ele2[0].innerText = "Welcome to Elevation Academy";
    ele2[0].style.backgroundColor = "tomato";
}


// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function settime(){
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    console.log(hrs+":"+mins+":"+sec);
    setTimeout(function(){
        settime();
    }, 1000);
}
settime();








// Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

const dropDownList = document.createElement("select");
// dropDownList.setAttribute("value","Select Year");
document.body.appendChild(dropDownList);

const dropDownItem1 = document.createElement("option");
dropDownItem1.textContent = "2019 - 2020";
dropDownList.appendChild(dropDownItem1);

const dropDownItem2 = document.createElement("option");
dropDownItem2.textContent = "2020 - 2021";
dropDownList.appendChild(dropDownItem2);

const dropDownItem3 = document.createElement("option");
dropDownItem3.textContent = "2021 - 2022";
dropDownList.appendChild(dropDownItem3);

const dropDownItem4 = document.createElement("option");
dropDownItem4.textContent = "2022 - 2023";
dropDownList.appendChild(dropDownItem4);

const dropDownItem5 = document.createElement("option");
dropDownItem5.textContent = "2023 - 2024";
dropDownList.appendChild(dropDownItem5);






// "Create a form having name ,email, phone no. , birth year 
// Add validations - phone no. should start with 91 , it should be 10 digits
const formpar = document.getElementById("phone");
console.log(formpar);
formpar.setAttribute("value","91");
document.body.appendChild(formpar)
// email should be domain prepbytes.com
// birth year should be > 95"