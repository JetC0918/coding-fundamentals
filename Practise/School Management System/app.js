// 2 characters: Student, Teacher
// Properties: name, age, sunjects
// Method: .greet(), .registerSubject() -> student

class User {
    constructor(name, age, subjects){
        this.name = name;
        this.age = age;
        this.subjects = subjects;
    }

    greet(){
        console.log(`Helllo, I am ${this.name}! I am a ${this.age} years old!`)
    }
}

class Student extends User{
    constructor(name, age, subjects){ 
        super(name, age, subjects);
    }
    register(subject){
        this.subjects.push(subject)
    }
}

class Teacher extends User{
    constructor(name, age, subjects){
        super(name, age, subjects);
    }

    greet(){
        console.log(`Helllo, I am teacher ${this.name}!`)
    }
}
const studentA = new Student ('Nyee', 50, ['Math', 'Science']);
const studentB = new Student ('Ali', 40, ['English', 'History']);

const teacherC = new Teacher('Deric', 45, ["Math", "History"])

studentA.greet()
studentB.greet()
teacherC.greet()