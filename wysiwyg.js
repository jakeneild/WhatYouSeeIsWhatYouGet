var counter = 1;
var target2 = "";

var input = document.getElementById("input");
input.type = "text";
input.style.border = "3px solid black"
input.style.borderLeft = "6px solid black";
input.style.borderRadius= "1px";
document.getElementById("input").addEventListener('keyup', changeBio);

document.getElementById("input").addEventListener('keypress', clearInput);

$("#input").fadeOut(1);
function clearInput(){
    let x = event.keyCode;
    if(x == 13){
        input.value = "";
    }
}

function changeBio(){
    console.log(target2);
    document.getElementById(target2).firstChild.firstChild.nextElementSibling.nextElementSibling.textContent = input.value;
}

function clickDiv(e){
    console.log(e.currentTarget.id);
    let ct = e.currentTarget;
    document.getElementById(ct.id).style.border = "10px dotted yellowgreen"
    if(document.getElementById(ct.id).nextElementSibling != null){
        document.getElementById(ct.id).nextElementSibling.style.border = "10px outset yellowgreen";
    }
    if(document.getElementById(ct.id).previousElementSibling != null){
        document.getElementById(ct.id).previousElementSibling.style.border = "10px outset yellowgreen";
    }
    target2 = ct.id;
    console.log(target2);
    //document.getElementById("input").style.visibility = "visible";
    $("#input").fadeIn(3000);
    //let x = true;
}

function populateDivs(target){
    let person = document.createElement("person");
    let header = document.createElement("header");
    header.textContent = `${target.name}, ${target.title}`
    let section = document.createElement("section");
    let img = document.createElement("img");
    img.setAttribute("src", target.imgPath);
    img.style.margin = "45px";
    section.textContent = `Biography: ${target.biography} `
    let footer = document.createElement("footer");
    footer.textContent = `Lifespan: ${target.lifespan}`

    person.id =  target.id;
    person.style.fontFamily = "Arial"
    person.style.margin = "45px";
    person.style.marginLeft = "89px";
    person.style.padding= "20px"
    person.style.border= "10px outset yellowgreen";
    person.style.display = "flex";
    person.style.width = "90%";
    person.style.height = "600px";
    person.color = "lightPurple";
    person.style.display = "block";
    header.style.fontSize = "1.5em";
    header.style.borderBottom = "3px solid black";
    header.style.padding = "5px";
    img.style.height = "200px";


    if(counter % 2 == 0){
        person.style.backgroundColor = "lightYellow";
    } else {
        person.style.backgroundColor = "lightBlue";
    }

    var div = document.createElement("div");
    person.appendChild(div);
    div.appendChild(header);
    div.appendChild(document.createElement("br"));
    div.appendChild(section);
    div.appendChild(document.createElement("br"));
    div.appendChild(footer);
    div.appendChild(document.createElement("br"));
    div.appendChild(img);

    let x = true;

    person.addEventListener("click", clickDiv)

    document.getElementById("cardContainer").appendChild(person);
    counter++;
}

var card1 = {
    id: "card1",
    name: "Hellen Keller",
    title: "Vampire Slayer",
    imgPath: "hellenKeller.jpg",
    biography: "Born as a young baby, this small sacrafice to the lords of the underworld, the alien pressed with all his might and thought of another name of the one who could be called upon and I haven't said it again yet, but because of what you wanted it simply will not be possible.  Please to take this consideration as a most likely outcome of stranger and stranger times abroad this sickening japanese workmanship.  I couldn't have said it with enough brain, she tastes like bath salts would taste if they couldn't kill you what could have?  Are we all here alone and trapped on this empty wilderness devoid of hope and seperation?  Is hell empty and are all the demons here?  What is this world we live in, so fascinating and diving.  So impossible and possible all at the same time.  Everything that would ever be, everything that ever was just vanished in a blink of an eye.",
    lifespan: "As soon as the age of 12 she could bowhunt.  Be 15 she made her own clothes.  She killed her first fully grown grizzly bear with a compound bow at the age of 17.  Not widely recognized as the true founder of taco Bell."
}

var card2 = {
    id: "card2",
    name: "Jesus Christ",
    title: "Son of god",
    imgPath: "jesusChrist.jpg",
    biography: "Redacted",
    lifespan: "Genesis 6:4 The Nephilim were on the earth in those days—and also afterward—when the sons of God went to the daughters of humans and had children by them. They were the heroes of old, men of renowown.",
}
card2.biography.color = "black";
card2.biography.textFamily = "Courier";

var card3 = {
    id: "card3",
    name: "Boby Joe",
    title: "Gas Station Attendant",
    imgPath: "bobbyJoe.jpg",
    biography: "Born in alabama and grew up on Oklahoma.  Knows how to use a John Deere.  Drives an F-150.  Sister named Carol.  Brothers name Bernard, Little John, and Souperman.",
    lifespan: "Lived only 27 years before being fatally struck by lightening while charging his RV in an electrical storm June 13, 2006."
}

populateDivs(card1);
populateDivs(card2);
populateDivs(card3);
var cardContainer = document.getElementById("cardContainer");
cardContainer.style.margin = "30px 80px 10px 35px";
cardContainer.style.padding = " 0px 80px 10px 22x";
cardContainer.style.borderTop = "1px solid black";
cardContainer.style.borderLeft = "1px solid black";
