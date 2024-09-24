
var button = document.getElementById('b1');


var textParagraph = document.getElementById('textContent');


var textChanged = false;


button.addEventListener('click', function() {
  
    if (textChanged === false) {
        
        textParagraph.textContent = "Welcome to WEB API Class";
     
        textChanged = true;
    } else {
        
        textParagraph.textContent = "Thank you";
    
        textChanged = false;
    }
});