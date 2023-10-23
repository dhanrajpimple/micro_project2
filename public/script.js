function ispalidrome(str){
const cleanstr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
const reversedStr = cleanstr.split('').reverse().join('');
return cleanstr === reversedStr;
}


function palindromechecker(){
  const inputText = document.getElementById('inputText');
  const result = document.getElementById("result");


   if(ispalidrome(inputText.value)){
     result.textContent = ' is a palidrome';

   }else{
    result.textContent = ' is not a palidrome';

   }
   result.classList.add('fadein');
   inputText.value = '';

}

document.getElementById('checkButton').addEventListener("click", palindromechecker);