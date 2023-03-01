let arrMobs=[
    'Селёдка какая-то дырявая',    // 0 
    'Ну короче просто петушара',   // 1
    'Пчела или мяч? хер пойми че', // 2
    'Чисто сало под самогон',      // 3
    'Выделения твоей бывшей',      // 4
    'Тупа павук',                  // 5
    'Ты в шарагу к 8-ми пришел',   // 6
    'Анорексичка из 8 А',          // 7
    'Бомбила',                     // 8
    'Длинный нигер',               // 9 
    'Зомби под петушарой',         // 10
    'Ля так это ты',               // 11
    'Стремный чел, типа горыныча', // 12
    'Ну ты никогда не закликаешь', // 13
];

let arrHpMobs=[
    150,
    250,
    500,
    1200,
    3500,
    5000,
    15000,
    30000,
    135000,
    400000,
    696969,
    10000,
    15000000,
    296000000,
];

let arrDamage=[
    10,
    150,
    1000,
]

let arrCost=[
    100,
    1000,
    10000,
];

let arrCount=[
0, 0, 0,
];

let cash=0;
let damagePerClick=1;
let mobNum=0;
function BuySword(num){
if(cash<arrCost[num])
{
    notEnoughtMoney();
}
else if(cash>=arrCost[num])
{ cash-=arrCost[num];
   document.getElementById('cash').innerHTML=  cash;
   document.getElementById('cashShop').innerHTML=cash;
    console.log('bought '+ arrCost[num])
    damagePerClick+=arrDamage[num];
    console.log('damage= ' + damagePerClick)
    document.getElementById('sword'+num).innerHTML= "Цена: "+ arrCost[num]+ " изумрудов <br> + "+ arrDamage[num] +" урона за клик <br> У вас: "+ arrCount[num]++;
   
}
}





function notEnoughtMoney(){
console.log('денег нет чурка')
};



function DamageClick(){
arrHpMobs[mobNum]-=damagePerClick;
console.log('mob hp = ' +arrHpMobs[mobNum])
// document.getElementById('mobHP').innerHTML=arrHpMobs[mobNum];
if(arrHpMobs[mobNum]<=0) {
mobNum++; 
document.getElementById('mob').src='./mobs/' + mobNum + '.png'
console.log('./mobs/' + mobNum + '.png')
// document.getElementById('mobHP').innerHTML=arrHpMobs[mobNum];
document.getElementById('name').innerHTML=arrMobs[mobNum];
addCash();
document.getElementById('cash').innerHTML=cash;
document.getElementById('cashShop').innerHTML=cash;
document.getElementById('file').value
console.log('finish');
}
}

function addCash(){
    if(arrHpMobs[mobNum-1]<=30000)
{ 
    cash+=arrHpMobs[mobNum];
    console.log(cash)
}

else if(arrHpMobs[mobNum-1]>30000) 
{
    cash+=arrHpMobs[mobNum-1]/10;
}
}


// Открытие магазина
function OpenCloseShop(){
    let shop = document.getElementById("shop");
    shop.classList.toggle("visible");
    
}
// function CloseShop(){
//     let shop = document.getElementById("shop");
//     shop.classList.toggle("visible");
// }
