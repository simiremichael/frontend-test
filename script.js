const input = document.querySelector('input');
const output = document.getElementById('output');

input.oninput = handleInput;

 /*const items = {item1:'Shoe', item2:'Polo',item3:'trouser', item4:'Watch',
  item5:'Laptop', item6:'Phone',item7:'Shirt', item8:'Cap'
}
*/
function handleInput(e) {
  const items =  {item1:'Shoe', item2:'Polo',item3:'Trouser', item4:'Watch',
  item5:'Laptop', item6:'Phone',item7:'Shirt', item8:'Cap'
};

    
  

  const list = function(items) {
    //for (let prop in items){
      if (input.value === "1") {
  
    document.getElementById("output").innerHTML =  '<li>' + items.item1 + '</li>';

   } else if (input.value === "2") {
  document.getElementById("output").innerHTML =  '<li>' + items.item1 + '</li>' + '<li>' + items.item2 + '</li>';

} else if (input.value === "3") {
  document.getElementById("output").innerHTML =  '<li>' + items.item1 + '</li>' + '<li>' + items.item2 + '</li>'  + '<li>' + items.item3 + '</li>';

} else if (input.value === "4") {
  document.getElementById("output").innerHTML =  '<li>' + items.item1 + '</li>' + '<li>' + items.item2 + '</li>'  + '<li>' + items.item3 + '</li>'  + '<li>' + items.item4 + '</li>';

} else if (input.value === "5") {
  document.getElementById("output").innerHTML =  '<li>' + items.item1 + '</li>' + '<li>' + items.item2 + '</li>'  + '<li>' + items.item3 + '</li>'  + '<li>' + items.item4 + '</li>' + '<li>' + items.item5 + '</li>';

} else if (input.value === "6") {
  document.getElementById("output").innerHTML =  '<li>' + items.item1 + '</li>' + '<li>' + items.item2 + '</li>'  + '<li>' + items.item3 + '</li>'  + '<li>' + items.item4 + '</li>' + '<li>' + items.item5 + '</li>' + '<li>' + items.item6 + '</li>'; 

} else if (input.value === "7") {
  document.getElementById("output").innerHTML =  '<li>' + items.item1 + '</li>' + '<li>' + items.item2 + '</li>'  + '<li>' + items.item3 + '</li>'  + '<li>' + items.item4 + '</li>' + '<li>' + items.item5 + '</li>' + '<li>' + items.item6 + '</li>' + '<li>' + items.item7 + '</li>';

} else if (input.value === "8") {
  document.getElementById("output").innerHTML =  '<li>' + items.item1 + '</li>' + '<li>' + items.item2 + '</li>'  + '<li>' + items.item3 + '</li>'  + '<li>' + items.item4 + '</li>' + '<li>' + items.item5 + '</li>' + '<li>' + items.item6 + '</li>'+ '<li>' + items.item7 + '</li>' + '<li>' + items.item8 + '</li>';

} else {
  document.getElementById("output").innerHTML =  ''
}
  }
list(items);

};
    






/*function number(){


 // var costOfTicket;
  //var selectedStand = document.getElementById("stand").value;
  let input = document.querySelector('input').value;
let output = document.getElementById('output').value;
input.oninput = handleInput;

  if(input = "1"){
    document.getElementById("output").innerHTML = 'Shoe'
  }

}
*/
