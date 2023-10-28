import data from "../asset/data.json" assert { type: "json" };
const containerBar = document.querySelector(".statistics__body");
let arrayValues=[];
let arrayAux = [];
data.forEach((item) => {
  const template = 
  ` <div class="statistics__body__item">
      <div class="statistics__body__item__bar">
        <p class="statistics__body__item__label">${item.day}</p>
        <p class="statistics__body__item__value">$${item.amount}</p>
      </div>
    </div>
  `
  containerBar.innerHTML += template;
  arrayValues.push( item.amount); 
  
 
 
  
});

console.log(arrayValues)


let valueMax = Math.max(...arrayValues );
console.log(valueMax)

let bars = document.querySelectorAll(".statistics__body__item__bar");
bars = [...bars ];//transformamos en nodo en un array

let price = document.querySelector(".statistics__body__item__value")
bars.forEach((bar) => {
 
 let valueBar = bar.childNodes[3].innerText;
 valueBar = valueBar.replace("$", "");
 

 let hightBar = Math.trunc((valueBar * 150)/valueMax);
 console.log((hightBar));
 bar.style.height = `${hightBar}px`;
 if(valueBar >= valueMax){
  bar.style.background= "v.$Cyan";
 }

  
  
 

  bar.addEventListener("mouseover", (e) => {
  
    let value= e.target.childNodes[3];
    value.style.display = "block"
    
  });

  bar.addEventListener("mouseout", (e) => {
    
    let value= e.target.childNodes[3];
    value.style.display= "none";
  });
});
