let rand = Math.random();
let first,Second,Third;
if(rand<0.33)
{
    first="crazy";
}
else if(rand>0.33 && rand<0.66)
{
    first="Amazing";
}
else
{
    first="fire";
}
if(rand<0.33)
{
    Second="Food";
}
else if(rand>0.33 && rand<0.66)
{
    Second="Garments";
}
else
{
    Second="Engine";
}
if(rand<0.33)
{
    Third="Bros";
}
else if(rand>0.33 && rand<0.66)
{
    Third="Limited";
}
else
{
    Third="Hub";
}

console.log(`${first} ${Second} ${Third}`);