//Bandymas su dviem
const ivestasMokSk = document.querySelector("#ivestasMokSk");
const suzinokBtn = document.querySelector("#suzinokBtn");
const tableBody = document.querySelector("#tableBody");
const form = document.querySelector("#form");
const konteineris = document.getElementById("konteineris");

suzinokBtn.addEventListener('click', pridekLentele);
console.log("pries f-ja");
suzinokBtn.addEventListener("click", function (e) {
    e.preventDefault();
    form.reset();
}, false);

function pridekLentele() {
    console.log("pradzia f-jos");
    const mokSk = ivestasMokSk.value;

    if (mokSk < 1) {
        alert("Blogai suvesti duomenys!");
    }
    else {
        let uzdNr = [];
        for (let i = 0; i < mokSk; i++) {
            const row = document.createElement("tr");
            tableBody.appendChild(row);

            const cell1 = document.createElement("td");
            let tinka = true;
            while (tinka){
                const randomNumeris = Math.floor(Math.random() * mokSk)+1;
                console.log("while vidus")
                if(uzdNr.indexOf(randomNumeris) === -1){
                    uzdNr.push(randomNumeris);
                    tinka=false;
                }
                cell1.innerHTML=randomNumeris;
            }
            cell1.setAttribute("class", "text-center");
            row.appendChild(cell1);

            const cell2 = document.createElement("td");
            cell2.innerHTML = '<input type="text" placeholder="Vardas">';
            cell2.setAttribute("class", "text-center");
            row.appendChild(cell2);
        }
        console.log("pabaiga f-jos");
    }
}
//istrynimo mygtukas
const deleteTable = document.createElement("input");
deleteTable.setAttribute("type", "button");
deleteTable.setAttribute("value", "Ištrinti lentelę");
deleteTable.setAttribute("class", "bg-info text-light w-25 mb-4");
konteineris.appendChild(deleteTable);
deleteTable.addEventListener("click", deleteTBody);

function deleteTBody() {
    console.log("delete");
    tableBody.innerHTML = "";
}
