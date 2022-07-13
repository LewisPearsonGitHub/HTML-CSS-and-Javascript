"use strict";

const output = document.querySelector("div#output");

axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
.then(response => {
    console.log("RES: ", response)
   // document.write("Name:", response.data.squadName)
  //  document.write("active: ", response.data.active)

    const squadName =  document.createElement("p");
    squadName.innerText = "Squad Name: " + response.data.squadName;
    output.appendChild(squadName);

    const homeTown = document.createElement("p");
    homeTown.innerText = "Home Town: " + response.data.homeTown;
    output.appendChild(homeTown);
    
    const formed = document.createElement("p");
    formed.innerText = "Formed in " + response.data.formed;
    output.appendChild(formed);

    const members = document.createElement("p");
    members.innerText = "Home Town: " + JSON.stringify(response.data.members, null, 4);
    output.appendChild(members);
    
})


.catch(error => console.error(error));