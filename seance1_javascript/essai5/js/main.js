//let myArray = []; //tableau vide

let myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
alert(myArray[4]); // affiche Guillaume

myArray.shift(); //Retire Sébastien qui est le 1er
alert(myArray);

myArray.pop(); //Retire Guillaume qui est le dernier
alert(myArray);

let cousinsString = "Pauline Guillaume Clarisse";
let cousinsArray = cousinsString.split(' ');
alert(cousinsString);
alert(cousinsArray);
cousinsArray.pop();
alert(cousinsArray); //Retire Clarisse

cousinsString = cousinsArray.join(' ');
alert(cousinsString);

let myArray2 = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];

alert(myArray2.length); //affiche 5 

for(let index=0, items=myArray2.length; index < items;index++){
 alert(myArray2[index]);
}

//let family = {}; //objet vide

let family = { //objet littéral
    self: 'Patrick',
    sister: 'Laurence',
    brother: 'Ludovic',
    cousin_1: 'Pauline',  
    cousin_2: 'Guillaume'
};

alert(family['cousin_2']); //affiche Guillaume
alert(family['brother']); //affiche Ludovic

alert(family.cousin_2); //affiche Guillaume
alert(family.brother); //affiche Ludovic