var age = prompt("how old are you?")

if (age < 18)
{
	console.log("you can not enter");
}
else if (age>18 && age<21)
{
	console.log("you can enter but can't drink");
}
else
{
	console.log("enjoy your drink");
}