//get the node of btn
const addBtn = document.getElementById("add-btn");
const listParent = document.getElementById("list");
const text = document.getElementById("add-input");
console.log(text);

//add click event
let clickCount = 0;
const addList = addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.dir(text.value);
  clickCount++;
  const newListContent = `
        
        <p>Note : ${clickCount}
        ${text.value}</p>
        <p>
            <i class="fa fa-pencil"></i>
            <i class="fa fa-times"></i>
        </p>`;
  const newList = document.createElement("li");
  newList.innerHTML = newListContent;
  listParent.appendChild(newList);
});
