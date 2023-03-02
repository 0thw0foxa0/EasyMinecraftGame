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

let arrReward=[
    300,
    1000,
    950,
    4500,
    1500,
    900,
    15000,
    900,
    12000,
    100000,
    200000,
    300000,
    15000,
    900000,
]

let arrDamage=[
    2,
    15,
    120,
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
   document.getElementById('cash').innerHTML= Number((cash).toFixed(1));
   document.getElementById('cashShop').innerHTML=Number((cash).toFixed(1));
    console.log('bought '+ arrCost[num])
    damagePerClick+=arrDamage[num];
    console.log('damage= ' + damagePerClick)
    arrCount[num]++;
    arrCost[num]+=arrCost[num]/5;
    document.getElementById('sword'+num).innerHTML= "Цена: "+ Number((arrCost[num]).toFixed(1))+ " изумрудов <br> + "+ arrDamage[num] +" урона за клик <br> У вас: "+ arrCount[num];
    document.getElementById('Damage').innerHTML="Магазин <br> У вас "+ damagePerClick+ " урона за клик";
}}

function spawnMob(){
    document.getElementById('mob').src='./mobs/' + mobNum + '.png'
    document.getElementById('file').max=arrHpMobs[mobNum];
    document.getElementById('file').value=arrHpMobs[mobNum];
   if(mobNum==9)
        {
         document.getElementById('mob').setAttribute("style","width:145px");
        }
    else if(mobNum==10)
        {
         document.getElementById('mob').setAttribute("style","width:165px");
        }
    else if(mobNum==7)
        {
         document.getElementById('mob').setAttribute("style","width:190px");
        }
    else if(mobNum==13)
        {
         document.getElementById('mob').setAttribute("style","width:495px");
        }
    else
        {  
         document.getElementById('mob').setAttribute("style","width:220px");
        }
    document.getElementById('mob').classList.remove('MobDeSpawn');
    document.getElementById('mob').classList.add('MobSpawn');
    document.getElementById('name').innerHTML=arrMobs[mobNum];
    document.getElementById('continue').classList.toggle("disabled");
    document.getElementById('continue').setAttribute("disabled","");
}

function deSpawnMob(){
    document.getElementById('mob').src='';
    document.getElementById('continue').classList.toggle("disabled");
    document.getElementById('continue').removeAttribute("disabled");
    
}

function notEnoughtMoney(){
console.log('денег нет чурка')
};

function DamageClick(){
arrHpMobs[mobNum]-=damagePerClick;
document.getElementById('file').value=arrHpMobs[mobNum];
if(arrHpMobs[mobNum]<=1000)
{
    document.getElementById('name').innerHTML=arrMobs[mobNum] +"<br> У лоха: "+arrHpMobs[mobNum]+" HP";
}
else if(arrHpMobs[mobNum]>=1000 && arrHpMobs[mobNum]<=1000000)
{
    document.getElementById('name').innerHTML=arrMobs[mobNum] +"<br> У лоха: "+Number((arrHpMobs[mobNum]/1000).toFixed(1))+"K HP";
}
else if(arrHpMobs[mobNum]>=1000000)
{
    document.getElementById('name').innerHTML=arrMobs[mobNum] +"<br> У лоха: "+Number((arrHpMobs[mobNum]/1000000).toFixed(1))+"M HP";
}

console.log(document.getElementById('file').value=arrHpMobs[mobNum])
console.log('mob hp = ' +arrHpMobs[mobNum])
if(arrHpMobs[mobNum]<=0) {
addCash();
mobNum++; 
console.log('./mobs/' + mobNum + '.png')

document.getElementById('cash').innerHTML=Number((cash).toFixed(1))
document.getElementById('cashShop').innerHTML=Number((cash).toFixed(1))
document.getElementById('mob').classList.remove('MobSpawn');
document.getElementById('mob').classList.add('MobDeSpawn');
document.getElementById('name').innerHTML="Вы отпиздили "+arrMobs[mobNum-1]+"<br> Хотите продолжить?";
setTimeout(deSpawnMob, 1500);
if(arrHpMobs[mobNum]<=0 && mobNum==13)
{
    document.getElementById('name').innerHTML="Поздравляю ты прошел эту мини игруку, медали нет :(";
}
console.log('finish');
}}

function addCash(){
   
   
//     if(arrReward[mobNum]<=30000)
// { 
    cash+=arrReward[mobNum];
    console.log(arrReward[mobNum])
// }

// else if(arrReward[mobNum]>30000) 
// {
//     cash+=arrReward[mobNum]/10;
// }
// else if(arrReward[mobNum]>1000000) 
// {
//     cash+=arrReward[mobNum]/2000;
// }
}
// Открытие магазина
function OpenCloseShop(){
    let shop = document.getElementById("shop");
    shop.classList.toggle("visible");  
}
