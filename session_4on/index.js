document.getElementById('btn').addEventListener("click", () => {
    var n1 = Number(document.getElementById("no1").value)
    var n2 = Number(document.getElementById("no2").value)
    var sum = n1+n2
    document.getElementById('sum').innerHTML='<h5>'+sum+'</h5>'
})
