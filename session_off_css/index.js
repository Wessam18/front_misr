
var obj = [{title:"card title", Description: "a discribtion part", price:"50"},
    {title:"wessam title", Description: "a discribtion part", price:"50"},
    {title:"bag", Description: "a discribtion part", price:"40"},
    {title:"card title", Description: "a good bag", price:"10"},
    {title:"bag", Description: "a discribtion part", price:"20"},
]

document.getElementById('y').addEventListener("click", () => {
    for (var i = 0; i < obj.length; i++) {
        document.getElementById('x').innerHTML+=`
        <div class="card" style="width: 18em>
        <div class="body"> 
            <h3 class="tittle">${obj[i].title}</h3>
            <p class="para">${obj[i].Description}</p>
            <h5 class="price">${obj[i].price}</h3>
        </div> `
    }
})
document.getElementById('z').addEventListener("click", () => {
    var n1 = (document.getElementById("no1").value);
    document.getElementById('filter').innerHTML=''
    for (var i = 0; i < obj.length; i++) {
        if (Number(obj[i].price) > Number(n1) || obj[i].title.toLowerCase().includes(n1) || obj[i].Description.toLowerCase().includes(n1)) {
            document.getElementById('filter').innerHTML+=`
            <div class="card" style="width: 18em>
            <div class="body"> 
                <h3 class="tittle">${obj[i].title}</h3>
                <p class="para">${obj[i].Description}</p>
                <h5 class="price">${obj[i].price}</h3>
            </div> `
        }
    }
})
