let myLeads= []
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    let invalue= inputEl.value
    myLeads.push(invalue)
    inputEl.value=""
    renderLeads()

})

function renderLeads(){
let listItems = ""
    for(let i=0;i<myLeads.length;i++){
    //Template String

    listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
    `
}

ulEl.innerHTML = listItems

}


