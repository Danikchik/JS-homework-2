/*первое задание*/


const userAge = prompt('Введите ваш возраст')
if(userAge <19){
    alert('Вы еще молоды')
}else if(userAge <50){
    alert ('Пора работать')
}else if(userAge <56){
    alert('Пора на пенсию')
}else{
    alert('Ошибочка')
}


/*второе задание*/


const num = prompt('Введите время')

switch(num){
    case '1':
     alert('1 час ночи')
    break;
    case '2':
      alert('2 часа ночи')
    break;
    case '3':
     alert('3 часа ночи')
    break;
    case '4':
     alert('4 часа ночи')
    break;
    case '5':
     alert('5 часов ночи')
    break;
    case '6':
     alert('6 часов утра')
    break;
    case '7':
     alert('7 часов утра')
    break;
    case '8':
     alert('8 часов утра')
    break;
    case '9':
     alert('9 часов утра')
    break;
    case '10':
     alert('10 часов утра')
    break;
    case '11':
     alert('11 часов утра')
    break;
    case '12':
     alert('12 часов дня')
    break;
    case '13':
     alert('1 час дня')
    break;
    case '14':
     alert('2 часа дня')
    break;
    case '15':
     alert('3 часа дня')
    break;
    case '16':
     alert('4 часа дня')
    break;
    case '17':
     alert('5 часов дня')
    break;
    case '18':
     alert('6 часов вечера')
    break;
    case '19':
     alert('7 часов вечера')
    break;
    case '20':
     alert('8 часов вечера')
    break;
    case '21':
     alert('9 часов вечера')
    break;
    case '22':
     alert('10 часов вечера')
    break;
    case '23':
     alert('11 часов вечера')
    break;
    case '24':
     alert('12 часов ночи')
    break;
}

/*третье задание*/

const num1 = +prompt("Введите первое число:");
const num2 = +prompt("Введите второе число:");
const num3 = +prompt("Введите третье число:");

let res;

if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {
  res = num1;
} else if ((num2 > num1 && num2 < num3) || (num2 > num3 && num2 < num1)) {
  res = num2;
} else {
  res = num3;
}
alert(`Среднее число: ${res}`);

