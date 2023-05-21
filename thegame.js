const data = [
    {id: 0,     name: 'Sergio',     age: 18,    dept: [2]},
    {id: 1,     name: 'Maxime',     age: 52,    dept: [4,8]},
    {id: 2,     name: 'Aurelien',   age: 16,    dept: [1,11]},
    {id: 3,     name: 'Anthony',    age: 19,    dept: [9,5,6,2,1]},
    {id: 4,     name: 'Emma',       age: 87,    dept: [10,6,9,8]},
    {id: 5,     name: 'Amanda',     age: 56,    dept: []},
    {id: 6,     name: 'Julien',     age: 11,    dept: [3]},
    {id: 7,     name: 'David',      age: 23,    dept: [5]},
    {id: 8,     name: 'Florian',    age: 38,    dept: [7,10]},
    {id: 9,     name: 'Nathan',     age: 56,    dept: [4,6]},
    {id: 10,    name: 'Thibaut',    age: 29,    dept: []},
    {id: 11,    name: 'Hugo',       age: 18,    dept: [2,6]}
]
 // function use for exercice

//this function displays the name object contained in the data array
//it traverses the array and displays each string.
function print_tab_name(tableau) {
    var k = 0;
    while (k < data.length) {
        console.log(data[k].name);
        k++;
    }
}

// this function traverses the array data and compares the index with the string given in parameters it is used for the exercise 2
function find_good_name_exercice_2(nbr1) {
    var index = 0;
    while ( index < nbr1) {
        if (index + 1 == nbr1) {
            var good_name = data[index].name;
            return good_name;
        }
        index++;
    }
}

// this function traverses the array data and compares the index with the string given in parameters it is used for the exercise 5
function find_good_name(nbr1) {
    var index = 0;
    while ( index < data.length) {
        if (index == nbr1) {
            var good_name = data[index].name;
            return good_name;
        }
        index++;
    }
}

//this function takes a string as parameter and will be compared to each string of the array passed as parameter
function compare_tab_with_str(tableau, string)
{
    var y = 0;
    while (y < data.length) {
        if (tableau[y] == string) {
            return 1;
        }
        y++;
    }
    return 0;
}

//function that takes an array as parameter and displays each string
function print_tab_(tableau) {
    var k = 0;
    while (k < tableau.length) {
        console.log(tableau[k]);
        k++;
    }
}

// function that has a string in parameter it first crosses the data array it compares each string of data with the string
// in parameter and enters the dept object to retrieve the idd once retrieved it stores these idd in the tab_less_eat array and
// concatenates the strings of the array between it then.

function show_profil(string ) {
    var index_data = 0; var final_message; var progress = "";
    var age = 0; var index_for_dept = 0; var index_tab_name = 0;
    while (index_data < data.length) {
        if (data[index_data].name == string) {
            age = data[index_data].age;
            index_for_dept = 0;
            while (index_for_dept < data[index_data].dept.length) {
                var tab_less_eat = [];
                var name = find_good_name(data[index_data].dept[index_for_dept]);
                tab_less_eat.push(name);
                if (index_for_dept + 1 ==  data[index_data].dept.length) {
                progress += tab_less_eat[index_tab_name];
                } else {
                    progress += tab_less_eat[index_tab_name] + " et ";
                }
                final_message = string + ", " + age + " ans" + ", il doit un repas à " + progress + ".";
                index_for_dept++;
            }
            console.log(final_message);
        }
        index_data++;
    }
}

//___________________________________________________________________________________________________________________________________
const main = () => {
//exercice 1__________________________________________________________________________________________________________

console.log("exercie 1 : Liste des prénoms des utilisateurs (tableau)");
console.log("\n");

//displays the Name objects
print_tab_name(data.name);

console.log("\n");
//exercice 2____________________________________________________________________________________________________

console.log("exercie 2 Liste des prénoms des utilisateus triés par age descendant");
console.log("\n");

// this function browses 12 times the array data it looks at each value of the objects age stored in data
// if the value of data objects is greater than older_age_tmp then older_age_tmp takes the value of the
// object age where it is and after the value of y and retrieve to go find the right first name in the
// objects name and this first name is stored in the array tab_name.
var index = 0;
var end_prog = 12;
var y = 0;
var older_age_final = "";
var older_age_tmp = 0;
var tab_name = [];
while (index < end_prog) {
    while (y < data.length) {
        var name_tmp = data[y].name;
        if (data[y].age > older_age_tmp && compare_tab_with_str(tab_name, name_tmp) == 0) {
            older_age_tmp = data[y].age;
            older_age_final = find_good_name_exercice_2(y + 1);
        }
        y++;
    }
    y = 0;
    tab_name.push(older_age_final);
    older_age_tmp = 0;
    index++;
}
print_tab_(tab_name);

console.log("\n");

//exercice 3___________________________________________________________________________________________
console.log("Exercice 3 : La personne qui doit le plus de repas aux autres");
console.log("\n");

// this function browses the data array and in another loop it browses the dept object
// and counts the number of strings in it and this value is stored in nb_meal and placed in an array and when the function is at the end of
// the array then we find the biggest value
// in the tab.meal array and we retrieve the name depending on where the value is located

var index = 0;
var index_for_dept = 0;
var nb_meal = 0;
var tab_meal = [];
while (index < data.length) {
    while (index_for_dept < data[index].dept.length) {
        data[index].dept[index_for_dept];
        index_for_dept++;
        nb_meal++;
    }
    index_for_dept = 0;
    tab_meal.push(nb_meal);
    nb_meal = 0;
    index++;
}

var index = 0;
var eater_tmp = 0;
var index_for_name = 0;
while (index < tab_meal.length) {
    if (eater_tmp < tab_meal[index]) {
        eater_tmp = tab_meal[index];
        index_for_name = index;
    }
    index++;
}

var index = 0;
while (index < index_for_name) {
    index++;
}
console.log(data[index].name);

console.log("\n");
//exercice 4_______________________________________________________________________________________

console.log("Exercice 4 : La personne à qui les autres doivent le plus de repas");
console.log("\n");

//same as in exercise three except that here we count by making a comparison of dept values and not the number of strings in dept
var index = 0;
var index_for_dept = 0;
var id = 0;
var stocker_meal = [];
var final_value = 0;
while (id < data.length) {
    while (index < data.length) {
        while (index_for_dept < data[index].dept.length) {
            if (data[index].dept[index_for_dept] == id) {
                final_value++;
            }
            index_for_dept++;
        }
        index_for_dept = 0;
        index++;
    }
    id++;
    index = 0;
    stocker_meal.push(final_value);
    final_value = 0;
}

var index = 0;
var eater_tmp = 0;
var index_for_name = 0;
while (index < stocker_meal.length) {
    if (eater_tmp < stocker_meal[index]) {
        eater_tmp = stocker_meal[index];
        index_for_name = index;
    }
    index++;
}

var index = 0;
while (index < index_for_name) {
    index++;
}
console.log(data[index].name);
console.log("\n");

//exercice 5__________________________________________________________________________________________________

console.log("Exercice 5 : La personne à qui les autres doivent le plus de repas");
console.log("\n");

show_profil('Enter a name');
console.log("\n");
}

main();