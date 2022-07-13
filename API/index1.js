"use strict";

const output = document.querySelector("div#output");
const input = document.querySelector("#input");

function searchKings() {
    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
        .then(response => {
             console.log("RES: " + response);
   
   
             for (let i=0; i < response.data.length; i++) 
                if (response.data[i].hse == input.value){

                    const kingName = document.createElement("p");
                    kingName.innerText = JSON.stringify(response.data[i].nm);
                    output.appendChild(kingName);

                    const city = document.createElement("p");
                    city.innerText = JSON.stringify(response.data[i].cty);
                    output.appendChild(city);

                    const house = document.createElement("p");
                    house.innerText = JSON.stringify(response.data[i].hse);
                    output.appendChild(house);

                    const years = document.createElement("p");
                    years.innerText = JSON.stringify(response.data[i].yrs);
                    output.appendChild(years);

                   


                } else {
                    console.log("error");
                }
        })
        .catch(error => console.error(error));
}

