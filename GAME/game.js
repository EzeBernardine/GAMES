let diffWords = [
    "Nigeria is the giant of Africa",
    "i am an intern at learnfactory Nigeria",
    "this is the best game you can ever play",
    "Build your trust on God"
]


let reversedWords = [
    " is Nigeria the giant  Africa of",
    "learnfactory an am  intern at  Nigeria i",
    " is the play game best you can ever  this",
    "trust  your on Build God"
]

let presentWord = Math.round(Math.random() * 3);

function shuffle(e) {
    presentWord = Math.round(Math.random() * 3);
    while (e.target.innerHTML.indexOf(reversedWords[presentWord]) != -1) {
        Math.round(Math.random() * 3);
        //alert(presentWord);
    }
    let theQuestion = document.getElementById("question").innerHTML = ("re-arrange the words in correct order");

    let theWord = reversedWords[presentWord];
    let theDiv = document.getElementById("words").innerHTML = (theWord);
    e.preventDefault();
}


let green = document.getElementById("green").addEventListener("click", shuffle)

function correct(e) {
    let theOther = diffWords[presentWord]
    let type = document.getElementById("type").value;
    // alert(type);
    // alert(diffWords[presentWord]);
    console.log(type);
    if (type === theOther) {
        document.getElementById("type").style.color = "green";
        document.getElementById("error").innerHTML = ("Weldone");
        document.getElementById("error").style.color = "green";
    } else {
        document.getElementById("type").style.color = "red";
        document.getElementById("error").innerHTML = ("error!!! Pls try again");
        document.getElementById("error").style.color = "red";
    }
}

let red = document.getElementById("red").addEventListener("click", correct)
//let lenght=document.getElementById("type").value.lenght;
//alert(length);

function display(e) {
    let len = document.getElementById("type").value.length;
    // let  


    if (e.charCode == 32) {
        //alert(len);
        for (let i = 0; i < len; i++) {
            let index0 = document.getElementById("type").value.charAt(i);
            // console.log(index0);
            let theOther = (diffWords[presentWord]).charAt(i);

            console.log(theOther);
            if (index0 == theOther) {
                // console.log("i did");
                document.getElementById("type").style.color = "green";
            } else {
                // console.log("itsnot");
                document.getElementById("type").style.color = "red";
            }
            e.preventDefault();     
        }
    }
    
}

let typed = document.getElementById("type").addEventListener("keypress", display());

