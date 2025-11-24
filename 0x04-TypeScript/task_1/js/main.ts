interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean // required;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;

}
const teacher1: Teacher = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: true,
    location: "Chicago",
    contract: false
};
const teacher2: Teacher = {
    firstName: "Bob",   
    lastName: "Williams",
    fullTimeEmployee: false,
    location: "Miami",
    yearsOfExperience: 5
};