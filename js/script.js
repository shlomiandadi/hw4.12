// exercise 1
var num1,num2;
num1=+prompt("plese enter num 1:");
num2=+prompt("plese enter num 2:");
if (num1>num2) {
    alert( "num1="+" "+num1 +" "+ "number one bigeer is number two")
}
else if(num1=num2)
{
    alert("number="+" "+num1)
}
else 
{
    alert("num 2 biiger")
}5
// exercise 2
var age
age= prompt("plese enter age:")
if(age>=17)
{
    alert("אתה רשאי להוציא רשיון נהיגה")
}
else
{
    alert(17-age +"שנים"+  "  גילך צעיר מדי חזור בעוד")
}
// exercise 3
var sacsess
sacsess=prompt("plese enter sacsess:")
if(sacsess>=60)
{
    alert("עובר")
}
else
{
    alert("נכשל")
}
// exercise 4
var num
num=+prompt("plese enter num :");
if(num>0)
{
    alert("חיובי")
}
else if(num<0)
{
    alert("שלילי")
}
else
{
    alert("אפס")
}
//  exercise 5
var num
num=prompt("plese enter num :");
if(num<0)
{
    alert("המספר הינו מספר שלילי")
}
else if(num<=0)
{
    alert(	"המספר הינו אפס")
}
else if(num>=1 && num<=100 )
{
    alert("המספר הינו בין 1 ל-100 כולל")
   
}
else if(num>=101 && num<=1000)
{
    alert("המספר גדול מ-100")
}
else
{
    alert("המספר גדול מ1000")
}
// exercise 6
var Score
Score=prompt("plese enter Score :");
if(Score<=59)
{
    alert("נכשל")
}
else if(Score<=69)
{
    alert(	"מספיק")
}
else if(Score<=79 )
{
    alert("כמעט טוב")
   
}
else if(Score<=89)
{
    alert("טוב")
}
else if(Score<=99)
{
    alert("טוב מאוד")
}

else
{
    alert("מעולה")
}

// exercise 7
var num1,num2,num3;
num1=prompt("plese enter num1");
num2=prompt("plese enter num2");
num3=prompt("plese enter num3");
if(num1>num2 && num2>num3)
{
 alert(num1 +" " +"הגדול ביותר")
}
else if(num2>num3)
{
    alert(num2 +" " + "הגדול ביותר " )
}
else
{
 alert(num3 +" " + "הגדול ביותר ")
}