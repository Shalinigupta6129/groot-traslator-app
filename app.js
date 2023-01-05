var translateBtn= document.querySelector("#btn-translate");
var text= document.querySelector("#txt-input");
var output= document.querySelector("#output");

//var serverURL= "https://api.funtranslations.com/translate/yoda.json"

var serverURL="https://api.funtranslations.com/translate/groot.json"

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function translationURL(input){
    return serverURL+ "?" + "text=" + input
}

function errorHandler(error){
    console.log("Error occured" + error);
    alert("Something wrong with server. Please try again after sometime!")

}

function clickHandler() {
 var inputText= text.value;

 fetch(translationURL(inputText))
 .then(response => response.json())
 .then(json =>  {
    var translatedText = json.contents.translated;
    output.innerText= translatedText;
 })
 .catch(errorHandler)


}

translateBtn.addEventListener("click", clickHandler)