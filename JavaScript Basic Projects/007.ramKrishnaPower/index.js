var obj1={
    name:"Ram",
    power:2500,
    yuga:"treta",
};
var obj2={
    name:"Krishna",
    power:1000,
    yuga:"Dwarka",
};
function nameScore(obj)
{
var character= parseInt(obj.name.length);
var finalPower = character*35 + obj.power;
return finalPower;
}

function checkPower(obj1, obj2)
{
    var nameScoreRam = nameScore(obj1);
    var nameScoreKrishna = nameScore(obj2);

    if(nameScoreRam> nameScoreKrishna)
    {
        console.log("Ram is powerful "+ nameScoreRam);
    }
    console.log("Krishna is powerful" + nameScoreKrishna);
};


checkPower(obj1, obj2);