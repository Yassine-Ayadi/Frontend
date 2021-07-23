export class Student {
    
    Username: string;
    email: string ;
    phone: number;
    address: string ;
    School: string  ;
    password: string;

    constructor(Username: string='', email: string ='', phone: number=0, address: string ='', School: string ='' , password: string=''){
        this.Username=Username;
        this.email=email;
        this.phone=phone;
        this.address=address;
        this.School=School;
        this.password=password;
    }

}

