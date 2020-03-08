// if (1){
//     console.log("Right!")
// } else{
//     console.log("No")
// }



if (num < 49){
    console.log('no');
} else if (num > 100){
    console.log("a lot");
} else{
    console.log("right");
}

(num == 50) ? console.log("right") : console.log('no');

switch (num){
    case num < 49:
        console.log('no');
        break;
    case num > 100:
        console.log('a lot');
        break;
    case num > 80:
        console.log('still a lot');
        break;
    case 50:
        console.log('yes');
        break;
    default:
        console.log('smthn wrong!');
        break;
}

let num = 50;
// while (num < 55){
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);


for (let i = 1; i < 8; i++){
    if (i == 6){
        continue;
    }
    console.log(i);
}