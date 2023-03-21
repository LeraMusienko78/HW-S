export  class  Customer {

    #email;
    #password;

    constructor (name, email , password, wallet){
        this.name = name;
        this.#email = email;
        this.#password = password;
        this.wallet = wallet;
    }

    get email(){
        return this.#email;
    }
    
    set email(email){
        this.#email = email;
    }

    get password(){
        return this.#password;
    }
    
    set password(password){
        this.#password = password;
    }

}

