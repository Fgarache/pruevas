const username: string = "frank";
const sum = (a: number, b: number) => {
    return a + b;
}
sum(12, 12);


class Person {
    age: number;
    lastName: string;

    constructor(age: number, lastName: string) {
        this.age = age;
        this.lastName = lastName;
    }

}

const nico = new Person(18, "juan");

console.log(nico.age);