class Staff {
    public name : string;
    public email : string;
    public age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }
    getEmail(): string {
        return this.email;
    }
    setEmail(email: string) {
        this.email = email;
    }
    getAge(): number {
        return this.age;
    }
    setAge(age: number) {
        this.age = age;
    }
}
let staff = new Staff('Hung','Hung@mail.com', 30 );

staff.setName('Hung2');
let currentNameStaff =staff.getName();
console.log(currentNameStaff);
console.log(staff.getEmail());