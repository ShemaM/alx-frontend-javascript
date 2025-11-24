// Task 1: Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Task 2: Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


// Interface for the printTeacher function
interface printTeacherFunction {
    (teacher: { firstName: string; lastName: string }): string;
}

// Function implementation using function declaration
function printTeacher(teacher: { firstName: string; lastName: string }): string {
    return `${teacher.firstName.charAt(0)}. ${teacher.lastName}`;
}


//*TASK 4: StudentClass implementation **//
// Interface for the StudentClass constructor

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the StudentClass instance methods
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Implementation of the StudentClass
class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}