
export class User {
    name:string;
    password:string;    
    
    /**
     *
     */
    constructor() {
        this.name = '';
        this.password = '';
        
    }

    validate(){
        if(this.name != 'Brian' || this.password != '1123'){
            console.log(`nombre: ${this.name} pass: ${this.password}. El usuario es Brian y la pass 1123`);
            
            confirm('Usuario invalido.');
            return false;            
        }else{
            confirm('Login correcto');
            this.name = '';
            this.password = '';
            return true;
        }
    }
}
