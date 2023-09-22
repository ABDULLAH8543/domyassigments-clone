let labelone = document.getElementById("labelone");
labelone.addEventListener("click", function(){
let types = document.getElementById("types").innerHTML = "Type of paper"
let firstoption = document.getElementById("firstoptions").innerHTML = ` <option>assignment</option>
<option>blog post</option>
<option>information</option>
<option>nothing</option>`
let optionheadingtwo = document.getElementById("optionheadingtwo").innerHTML = "Academic level";
let secoptions = document.getElementById("secoptions").innerHTML = `<option>1-2</option>
<option>3-4</option>
<option>5-6</option>`
labelone.style.backgroundColor = "white"
let labeltwo = document.getElementById("labeltwo");
labeltwo.style.backgroundColor = " rgb(216, 216, 216)"
})
let labeltwo = document.getElementById("labeltwo");
labeltwo.addEventListener("click", function(){
    let types = document.getElementById("types").innerHTML = "type of service"
let firstoption = document.getElementById("firstoptions").innerHTML = `  <option>programming</option>
<option>html</option>
<option>css</option>
<option>js</option>
<option>python</option>
<option>ruby</option>`
let optionheadingtwo = document.getElementById("optionheadingtwo").innerHTML = "discription";
let secoptions = document.getElementById("secoptions").innerHTML = `<option>web developer</option>
<option>app developer</option>
<option>full stack</option>`
labeltwo.style.backgroundColor = "white";
let labelone = document.getElementById("labelone");
labelone.style.backgroundColor="rgb(216, 216, 216)"
})
let labelthree = document.getElementById("labelthree");
labelthree.addEventListener("click", function(){
let typess = document.getElementById("typess").innerHTML = "Type of paper"
let firstoptions = document.getElementById("firstoptionss").innerHTML = ` <option>assignment</option>
<option>blog post</option>
<option>information</option>
<option>nothing</option>`
let optionheadingtwos = document.getElementById("optionheadingtwos").innerHTML = "Academic level";
let secoptionss = document.getElementById("secoptionss").innerHTML = `<option>1-2</option>
<option>3-4</option>
<option>5-6</option>`
labelthree.style.backgroundColor = "white"
let labelfour = document.getElementById("labelfour");
labelfour.style.backgroundColor = " rgb(216, 216, 216)"
})
let labelfour = document.getElementById("labelfour");
labelfour.addEventListener("click", function(){
    let typess = document.getElementById("typess").innerHTML = "type of service"
let firstoptions = document.getElementById("firstoptionss").innerHTML = `  <option>programming</option>
<option>html</option>
<option>css</option>
<option>js</option>
<option>python</option>
<option>ruby</option>`
let optionheadingtwos = document.getElementById("optionheadingtwos").innerHTML = "discription";
let secoptionss = document.getElementById("secoptionss").innerHTML = `<option>web developer</option>
<option>app developer</option>
<option>full stack</option>`
labelfour.style.backgroundColor = "white";
let labelthree = document.getElementById("labelthree");
labelthree.style.backgroundColor="rgb(216, 216, 216)"
})
let optionstone = document.getElementById("optionstone");
optionstone.addEventListener("click", function(){
    let optionsttwo = document.getElementById("optionsttwo");
    optionsttwo.style.backgroundColor = "rgb(180, 180, 180)";
    optionstone.style.backgroundColor = "white";
    let optionsinner = document.querySelector(".optionsinner").innerHTML = ` <div id="opt">
    <p>PAPER TITLE</p>
    <p id="h">Academic level</p>
    <p id="w">Paper type</p>
    <p id="r">Paper format</p>
    <p id="q">Discipline</p>
</div>
<div id="t">
    <p id="tt">Antibiotic Resistance Now "Global Threat", WHO Warns by Pippa Stephens</p>
    <p>Master's</p>
    <p>Article Summary</p>
    <p>Oxford</p>
    <p>Health Care</p>
    <p>Read more</p>
</div>
<div id="ttwo">
    <p id="tt">Secret Hiding Places as I Was a Child</p>
    <p>High school</p>
    <p>Composition</p>
    <p>APA</p>
    <p>English 101</p>
    <p>Read more</p>
</div>
<div id="tthree">
    <p id="tt">Lab Report</p>
    <p>College</p>
    <p>Lab Report</p>
    <p>APA 6</p>
    <p>Physics</p>
    <p>Read more</p>
</div>`
})
let optionsttwo = document.getElementById("optionsttwo");
optionsttwo.addEventListener("click", function(){
    let optionstone = document.getElementById("optionstone");
    optionstone.style.backgroundColor = "rgb(180, 180, 180)";
    optionsttwo.style.backgroundColor = "white";
    let optionsinner = document.querySelector(".optionsinner").innerHTML = ` <div id="opt">
    <p>PAPER TITLE</p>
    <p id="h">SERVICES TYPE</p>
    <p id="w">discipline</p>
    <p id="r">SIZE</p>
    <p id="q">DEADLINE</p>
</div>
<div id="t">
    <p id="tt">Graphic User Interface Development in Java Swing</p>
    <p>Programming</p>
    <p>Java</p>
    <p>XS</p>
    <p>8h</p>
    <p>Read more</p>
</div>
<div id="ttwo">
    <p id="tt">Hypothesis Testing in R: Investigating Respiratory Status in a Clinical Trial</p>
    <p>Programming</p>
    <p>R</p>
    <p>XS</p>
    <p>8h</p>
    <p>Read more</p>
</div>
<div id="tthree">
    <p id="tt">Data Visualization in Python using Matplotlib Library</p>
    <p>Programming</p>
    <p>Python</p>
    <p>XS</p>
    <p>8h</p>
    <p>Read more</p>
</div>`
})
let spanone = document.getElementById("spanone");
spanone.addEventListener("click", function () {
    let twoeone = document.getElementById("twoeone");
    
    if (spanone.innerHTML === "-") {
        twoeone.style.height = "15vh";
        spanone.innerHTML = "+";
    } else {
        twoeone.style.height = "25vh";
        spanone.innerHTML = "-";
    }
});

let spantwo = document.getElementById("spantwo");
spantwo.addEventListener("click", function(){
    let twoetwo = document.getElementById("twoetwo");
    if (spantwo.innerHTML === "-") {
        twoetwo.style.height = "15vh";
        spantwo.innerHTML = "+";
    } else {
        twoetwo.style.height = "25vh";
        spantwo.innerHTML = "-";
    }
})
let spanthree = document.getElementById("spanthree");
spanthree.addEventListener("click", function(){
    let twoethree = document.getElementById("twoethree");
    if (spanthree.innerHTML === "-") {
        twoethree.style.height = "15vh";
        spanthree.innerHTML = "+";
    } else {
        twoethree.style.height = "25vh";
        spanthree.innerHTML = "-";
    }
})
let spanfour = document.getElementById("spanfour");
spanfour.addEventListener("click", function(){
    let twoefour= document.getElementById("twoefour");
    if (spanfour.innerHTML === "-") {
        twoefour.style.height = "15vh";
        spanfour.innerHTML = "+";
    } else {
        twoefour.style.height = "25vh";
        spanfour.innerHTML = "-";
    }
})
let bnav = document.getElementById("bnav");
let ulElement = document.querySelector(".head ul");
bnav.addEventListener("click",function(){
    if(bnav.innerHTML === "X"){
        bnav.innerHTML = "☰"
        ulElement.style.right = "-240px";
    }
    else{
        bnav.innerHTML = "X";
        ulElement.style.right = "85%";
    }
})
