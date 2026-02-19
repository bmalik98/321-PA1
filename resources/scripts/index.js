const btn = document.getElementById("btn");
const movieList = document.getElementById("Movie-List");

//assigns input to table
btn.addEventListener('click', function(event){
    event.preventDefault();
    //read input
    const titleVal = document.getElementById("title").value;
    const dateVal = document.getElementById("date").value;
    const ratingVal = document.getElementById("rating").value;
    //create section
    const newEntry = document.createElement("section");
    newEntry.className = "table-section"; 
    newEntry.style.background = "white";
    newEntry.style.color = "black";
    //add input to new section of table
    const newTitle = document.createElement("div");
    newTitle.innerHTML = titleVal;

    const newDate = document.createElement("div");
    newDate.innerHTML = dateVal;

    const newRating = document.createElement("div");
    newRating.innerHTML = ratingVal;

    //favorite functionality
    const newFav = document.createElement("div");
    const favBtn = document.createElement("button");
    favBtn.innerText = "No";
    favBtn.ClassName = "btn";
    favBtn.onclick = function() { FavToggle(favBtn); }; 
    newFav.appendChild(favBtn);

    //delete functionality
    const newDel = document.createElement("div");
    const delBtn = document.createElement("button");
    delBtn.innerText = "No";
    delBtn.ClassName = "btn";
    delBtn.onclick = function() { DeleteEntry(newEntry); }; 
    newDel.appendChild(delBtn);

    newEntry.appendChild(newTitle);
    newEntry.appendChild(newDate);
    newEntry.appendChild(newRating);
    newEntry.appendChild(newFav);
    newEntry.appendChild(newDel);

    movieList.appendChild(newEntry);
});

//toggle favorite
function FavToggle(button){
    if (button.innerText === "No"){
        button.innerText = "Yes"
        button.className = "btn"
    }
    else {
        button.innerText = "No"
        button.className = "btn"
    }
}
//delete from table
function DeleteEntry(row){
    row.remove();
}
//sort by rating
function sortTable(){
    const list = document.getElementById("Movie-List");
    const rows = Array.from(list.querySelectorAll(".table-section"));
    rows.sort(function(rowA, rowB) {
        let ratingA = Number(rowA.children[2].innerText);
        let ratingB = Number(rowB.children[2].innerText);
        return ratingA - ratingB; 
    });

        rows.forEach(function(row) {
        list.appendChild(row);
        });
    };
