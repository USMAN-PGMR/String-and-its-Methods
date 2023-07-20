// for date,year
var now = new Date();
var year = now.getFullYear()
document.getElementById("year").innerText = year

// clear input field 
document.getElementById('clear').onclick = function(){
    document.getElementById('search').value=""
}

// clear output
function clearOutput(){
    document.getElementById('output').innerHTML=""
}

// orignal statement 
let orignalString = "<p > I Love My Country Pakistan  <br> I Like My City Faisalabad <br> I Love My HomeLand</p>"
document.getElementById('oraginalString').innerHTML = orignalString

// convert to lower case 
function lowerCase() {
    let newString = orignalString.toLowerCase();
    // newStatement=newStatement.toLowerCase();
    document.getElementById('output').innerHTML = newString
}

// convert to uper case 
function upperCase() {
    let newString = orignalString.toUpperCase()
    document.getElementById('output').innerHTML = newString
}

// convert  To  Capitalize
function capitalize() {

    let newStatement = "<span style='text-transform: capitalize'>" + orignalString + "</span>"
    document.getElementById('output').innerHTML = newStatement
}

// better formating 

function Formating() {
    let text = document.getElementById('search').value;

    if (!text) {
        alert('Please type your text')
        return
    }

    text = text.toLowerCase();
    document.getElementById("output").style.textTransform = 'capitalize';
    document.getElementById("output").innerHTML = text;
    
}

// cities name in array  

let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"]

// print all cities using buttons 

function allCity() {

    document.getElementById("output").innerHTML = ""

    for (let i = 0; i < cities.length; i++) {
        // text += cars[i] + "<br>";
        let num = i + 1;
        document.getElementById("output").innerHTML += num + ") " + " " + cities[i] + "</br>"
    }

}

// add your city 

function yourCity() {
    document.getElementById("output").innerHTML = ""
    let city = document.getElementById('search').value
    
    if (city.length < 3) {
        alert("please type your corect city name ")
        return
    }
    let cityFirstLetter = city.charAt(0).toUpperCase()
    let cityAllLetter = city.slice(1).toLowerCase()
    let CityWordInCapitalize = cityFirstLetter + cityAllLetter
    console.log(CityWordInCapitalize)

    let cityFound = false;

    for (let i = 0; i < cities.length; i++) {
        if (cities[0] === CityWordInCapitalize) {
            cityFound = true
            // let html = '<span style="color :  red ; font-size : 20 px;">'
            document.getElementById('output').innerHTML = "<span style='color:red;'>"+ CityWordInCapitalize + ' ' +'</span>' + "city already in list"
        }
    }
    if (cityFound === false) {
        cities.push(CityWordInCapitalize)
        document.getElementById('output').innerHTML = "<span style='color:green;'>"+ CityWordInCapitalize + ' ' +'</span>' +"city is added in list"
    }
}

// check city in list 

function checkCity() {
    let city = document.getElementById('search').value

    if (!city) {
        alert('Please type Your city name.')
        return
    }

    let cityFirstLetter = city.charAt(0).toUpperCase()
    let cityAllLetter = city.slice(1).toLowerCase()
    let CityWordInCapitalize = cityFirstLetter + cityAllLetter

    let cityFound = false;

    for (let i = 0; i < cities.length; i++) {
        if (city === CityWordInCapitalize) {
            cityFound = true
            document.getElementById('output').innerHTML = "<span style='color:green;'>"+ CityWordInCapitalize + ' ' +'</span>' +  "City Found"
        }
    }
    if (city === false) {

        document.getElementById('output').innerHTML =  "<span style='color:red;'>"+ CityWordInCapitalize + ' ' +'</span>' + "City not Found"
    }
}
// find word 

function findWord() {

    let newOrignalString = orignalString.toLowerCase()
    let word = document.getElementById('search').value
    console.log(newOrignalString)
    if (!word) {
        alert('Please Enter the word for find')
        return
    }
    word = word.toLowerCase()
    let findWord = newOrignalString.indexOf(word)
    console.log(findWord)
    if(findWord !== -1){
        document.getElementById('output').innerHTML ="<span style='color:green;'>"+ word + ' ' +'</span>' +  'Word is found'
    }
    if(findWord == -1){
        document.getElementById('output').innerHTML ="<span style='color:red;'>"+ word + ' ' +'</span>' + 'Word is not found'
    }
}

// replace word 

function replaceWord() {
    let  newOrignalString = orignalString.toLowerCase()
    let word = document.getElementById('search').value

    if (!word){
        alert('Please Type a word for replacing.')
        return
    }
    let replaceWith = prompt('Enter a word that you want to replace')
    if (!replaceWith){
        alert('Please type a word to replace with' + word + ".")
        return
    }
    word = word.toLowerCase()
    word = new RegExp(word , 'g')
    replaceWith = replaceWith.toLowerCase()
    let replaceWord = newOrignalString.replace(word , replaceWith)
    document.getElementById('output').innerHTML = replaceWord + "<span> <span style = 'color:green;'> successfully Replaced </span> &#128077;</span>"
    
}