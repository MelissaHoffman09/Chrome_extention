let myLeads = ["www.awesome.com", "www.epic.com", "www.great.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
// clear box after clicked
    inputEl.value = ""
    // Save the myLeads array to localStorage 
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
    
    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += 
        `<li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>`
    }

    ulEl.innerHTML = listItems
}