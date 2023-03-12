"use strite"

let isRunning = true;

const users = [];

console.log("[USERS]",users);

while (isRunning){

    alert("Привет, для продолжения необходимо выбрать пункт:");

    const userChoouse = prompt (`
    a) Register
    b) Login
    c) View a list of all users
    d) Change user data
    q) Exit
    `);
    if(userChoouse != "a" && userChoouse != "b" && userChoouse !="c" && userChoouse != "d" && userChoouse != "q"){
        alert("Необходимо выбрать один из пунктов : a), b), c), d), q) ")
    }

    switch (userChoouse){

        case "a":
            const newUserName = prompt ("Name?");
            const newUserSurname = prompt ("Surname");
            const newUserAge = prompt ("Age");
            const newUserEmail = prompt ("Email");
            const newUserPassword = prompt ("Password");

            newUser = register(newUserName, newUserSurname, newUserAge, newUserEmail,
                newUserPassword);

            console.log("Добавлен новый пользователь.")   
            console.log( newUser) ; 

            isRunning = !confirm("Хочешь выйтти?");
            if(isRunning){
                
            }else{
                alert("Goodbay...");
            }
        break;

        case "b":

        const email = prompt ("Email");
        const password = prompt("Password");

        userId = getLogin(email, password, users);

        console.log("[USER_ID]", userId);

        isRunning = !confirm("Хочешь выйти?");
        if(isRunning){
            
        }else{
            alert("Goodbay...");
        }
        break;

        case "c":

        if(users.length === 0){
            console.error("Пользователей еще нет");
        }
        
        console.log("[КОЛИЧЕСТВО ПОЛЬЗОВАТЕЛЕЙ]", users.length);
        for(const user of users){

            console.log("[NAME:]", user.nameUser, "[SURNAME:]", user.surname, "[AGE:]", user.age);
            console.log("-------------------");
        }

        isRunning = !confirm("Хочешь выйти?");
        if(isRunning){
            
        }else{
            alert("Gootbay...")
        }
        break;

        case "d":
        
        users[1].nameUser = prompt ("Введите другое имя:");
        users[1].surname = prompt ("ВВедите другую фамилию:");
        users[1].age = prompt ("Введите другой возраст:");
        
        alert("Вы изменили  пользователя под индексом 1");
        console.log(users);

        isRunning = !confirm("Хочешь выйти?");
        if(isRunning){
            
        }else{
            alert("Gootbay...");
        }
       
        break;

        case "q":

        isRunning = false;
        alert(" Всего хорошего , приходите еще !");

        break;
    }
}

function register (nameUser, surname , age, email, password ){
    const newUser = {
        nameUser: nameUser,
        surname: surname,
        age: age,
        email: email,
        password: password,
    };
    users.push(newUser);
   return newUser;
}

function getLogin(email, password, arr){
    const isLoggedIn = false;

    for(const item of arr){
        if(item.email === email && item.password === password){
            return item;
        }
    }
    if(!isLoggedIn){
        console.error("Пользователь не найден, зарегистрируйтесь пожалуйста");
        alert("Пользователь не найден, зарегистрируйтесь пожалуйста");
        return null;
    }
}



