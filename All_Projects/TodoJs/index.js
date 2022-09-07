const pop = document.getElementById("popup")
const noItems = document.getElementById("noitems")
const main = document.getElementsByClassName("main")
const adItems = document.getElementById("aditems")
adItems.style.display = "none";

function popup() {
    main[0].style.filter = "blur(5px)"
    pop.style.display = "block";

}

let store = [];

function addlist() {
    main[0].style.filter = "blur(0px)"
    pop.style.display = 'none'
    noItems.style.display = "none";
    adItems.style.display = "none";
    let values = document.getElementById("inputtext").value;
    // console.log(values);

    let obj1 = {
        lname: values,
    }
    store.push(obj1);
  

    addboxes();
}



function closelist() {
    main[0].style.filter = "blur(0px)"
    pop.style.display = 'none'
}



const boxs = document.getElementById("boxes");
let childbox = document.getElementsByClassName("childbox")
childbox[0].style.display = 'none'

const trash = document.getElementById("carddelete");
const addicon = document.getElementById("cardadd");



function addboxes() {




    const childbox = document.createElement("div");
    childbox.setAttribute("id", "childbox");

    childbox.style.display = 'block'  //create block

    boxs.appendChild(childbox);

    let cardtext = document.createElement("div")
    cardtext.setAttribute("id", "cardtext");

    childbox.appendChild(cardtext);




    let vals = cardtext.innerText = store[store.length - 1].lname;

    if (vals == "" ) {
        main[0].style.filter = "blur(0px)"
        pop.style.display = 'none'
        childbox.style.display = 'none'
        adItems.style.display = "block";
    } else {



        childbox.innerHTML = `${vals} <hr> <i style="display: block; color: rgb(101, 1, 215); cursor: pointer;position: absolute; top: 312px; right: 20px;" id="cardadd" onclick="cardadd(this)" class="fa-solid fa-circle-plus"></i>
        <i style="display: block; color: red; position: absolute; top: 312px;cursor: pointer; right: 61px;" id="carddelete" onclick="carddelete(this)" class="fa-solid fa-trash"></i>`



        if (boxs.children.length <= 0) {
            noItems.style.display = "inline-block";
        }
    }
}


function carddelete(currntElement) {
    currntElement.parentElement.remove();

    const childbox = document.createElement("div");
    childbox.setAttribute("id", "childbox");


    if (boxs.children.length <= 0) {
        noItems.style.display = "block";
    }
}

let pop2 = document.getElementById("popup2");
pop2.style.display = 'none';


function cardadd() {
    main[0].style.filter = "blur(5px)";
    pop2.style.display = "block";
}


function additems() {
    main[0].style.filter = "blur(0px)";
    pop2.style.display = "none";

    let input2 = document.getElementById("inputtext2").value;


    inrtext()
}


function inrtext() {
    let childbox = document.getElementById("childbox")
    childbox.style.display = 'block'

    let inrTxt = document.createElement("div")
    inrTxt.setAttribute("id", "txt2")
    childbox.appendChild(inrTxt);

    let input2 = document.getElementById("inputtext2").value;

   


    inrTxt.innerHTML = `<span style = "text-align:left"  class = "inserted" >${input2}</span> <span id="read" style="width: 45px; border: 2px solid rgb(102, 0, 255); font-size: 15px;background-color:rgb(102, 0, 255);border-radius:10px ;position:relative; top:7px; color: #fff;font-weight: 600; height: 15px;line-height:13px; cursor:pointer; float:right;text-decoration: yellow" class= "read" >Done</span>`;

    inrTxt.style.fontSize = '20px'
    inrTxt.style.marginTop = '10px'
    inrTxt.style.color = 'blue'


    $(".read").click(function () {
        $(".inserted").css("text-decoration", "line-through");
    })

}


function closeitems() {
    main[0].style.filter = "blur(0px)";
    pop2.style.display = "none";

}