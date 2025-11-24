interface Teacher{
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; //possibility of adding a new property
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