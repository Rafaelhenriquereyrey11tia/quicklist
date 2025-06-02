let items=[]


function addItem(){
    const itemName = document.querySelector("#item").value
if(itemName===""){
    alert("Digite um numero valido!")
    return
}
    const item={
        name:itemName,
        checked:false
    }
    items.push(item)

    document.querySelector("#item").value = ""

    showItemsList()
}

function showItemsList() {
    const sectionList = document.querySelector(".list");
    sectionList.innerHTML = "";
    items.sort((itemA,itemB) => Number(itemA.checked) - Number(itemB.checked))

    items.forEach((item, index) => {
        sectionList.innerHTML += `
            <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-${index}" ${item.checked ? "checked" : ""} onclick="checkItem('${item.name}')">
                    <div class="custom-checkbox" onclick="checkItem('${item.name}')">
                        <img src="./assets/checked.svg" alt="checked">
                    </div>
                    <label for="item-${index}" onclick="checkItem('${item.name}')">${item.name}</label>
                </div>
                <button onclick="removeItem('${item.name}')">
                    <img src="./assets/trash-icon.svg" alt="trash icon">
                </button>
            </div>
        `;

    });
    localStorage.setItem("items" ,JSON.stringify(items))
}
function removeItem(itemName) {
    const itemIndex = items.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
    }
    localStorage.setItem("items", JSON.stringify(items)); 
    showItemsList(); 
}
function checkItem(itemName) {
    const item = items.find(item => item.name === itemName);
    if (item) {
        item.checked = !item.checked;
    }
    showItemsList();}



    function addHideWarnigClass(){
        document.querySelector(".warning").classList.add("hide-warning")
    }

    function verifyLocalStorageItems() {
        const verifyLocalStorageItems = localStorage.getItem("items");
    
        if (verifyLocalStorageItems) {
            items = JSON.parse(verifyLocalStorageItems);
            showItemsList(); 
        }
    }