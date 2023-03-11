"use strite"

let isRunning = true;

const users = [
   
];

console.log("[USERS]",users);



while (isRunning){

   

    alert("Hello muy frend!!!");

    const userChoouse = prompt (`
    a) Register
    b) Login
    c) View a list of all users
    d) Change user data
    e) Exit
    `);

    switch (userChoouse){

        case "a":
            const newUserName = prompt ("Name?");
            const newUserSurname = prompt ("Surname");
            const newUserAge = prompt ("Age");
            const newUserEmail = prompt ("Email");
            const newUserPassword = prompt ("Password");

            newUser = register(newUserName, newUserSurname, newUserAge, newUserEmail,
                newUserPassword);
            console.log(newUser) ; 

            isRunning = !confirm("Хочешь выйтти?");
            if(isRunning){
                
            }else{
                alert("Gootbay...")
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
            alert("Gootbay...")
        }
        break;

        case "c":

        if(users.length === 0){
            console.error("Пользователей еще нет");
        }
        
        console.log("[КОЛИЧЕСТВО ПОЛЬЗОВАТЕЛЕЙ]", users.length);
        for(const user of users){

            console.log("Имя пользователя:" , user.username);
            console.log("Фамилия пользователя:" , user.surname);
            console.log("-------------------");
        }

        isRunning = !confirm("Хочешь выйти?");
        if(isRunning){
            
        }else{
            alert("Gootbay...")
        }
       
        break;

        case "d":

        break;

        case "e":

        isRunning = false;

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
        return null;
    }
}



