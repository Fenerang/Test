let str = "Тут какая-то строка";
console.log(str);
console.log(str.length);
console.log(str.toUpperCase()); // большие буквы
console.log(str.toLowerCase()); // маленькие буквы
console.log(str[4]);
console.log(str.slice(4,12));
console.log(str.substr(13,6));
console.log(str.includes("Тут"));
console.log(str.includes("тут"));
console.log(str.indexOf("то"));
console.log(str.indexOf("sakdlsa"));
console.log(str.startsWith("Привет"));
console.log(str.endsWith("ока"));
console.log(str.slice(0,-5)); // чем больше отрицательное число, тем больше слово отрезается с конца.

// 1) убрать пробелы в начале и в конце.
// 2) сократить строку до 15 символов.
// 3) Закончить 3я точками.


let str1 = " Привет мир, я программист! ";
str = str1.trim();
str = str.slice(0,15);
str = str+"...";
console.log(str);
str = str1.trim();
str.length > 15? str = str.slice(0,15)+"...": console.log(str);
console.log(str)

let x=5,y=7,z;
//унарная
x=-x;
console.log(x);
//бинарная
z=x+y;
console.log(z);
z=x*y;
console.log(z);
z=x/y;
console.log(z);
z=x%y;
console.log(z);

let num=121;
num = (num%100-num%10)/10;
console.log(num);
num = Math.pow(5,3);
console.log(num);
num = Math.sqrt(121);
console.log(num);

let childInClass=15;
console.log(childInClass);

childInClass++;// инкремент
console.log(childInClass);

childInClass--;// декремент
console.log(childInClass);

console.log(childInClass++);// постфиксный
console.log(++childInClass);

childInClass*=10;
//childInClass=childInClass*10
console.log(childInClass)