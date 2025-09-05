let a = Math.random();
let obj={
    "+":"-",
    "-":"*",
    "*":"+",
    "/":"**",
    "**":"/"
}

let x=prompt("Enter first number")
let y=prompt("Enter Operation ")
let z=prompt("Enter Second number")

if(a>0.1)
{
    alert(`answer is=${eval(`${x} ${y} ${z}`)}`)
}
else{
    y=obj[y]
    alert(`answer is=${eval(`${x} ${y} ${z}`)}`)
}