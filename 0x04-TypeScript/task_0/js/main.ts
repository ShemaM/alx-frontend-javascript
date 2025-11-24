interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};
const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",    
    age: 22,
    location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];
const table: HTMLTableElement = document.createElement("table");
const headerRow: HTMLTableRowElement = table.insertRow();
const headers: string[] = ["First Name", "Location"];

headers.forEach((headerText: string) => {   
    const headerCell: HTMLTableCellElement = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
});

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const firstNameCell: HTMLTableCellElement = row.insertCell();
  firstNameCell.textContent = student.firstName;
  const locationCell: HTMLTableCellElement = row.insertCell();
  locationCell.textContent = student.location;
});
document.body.appendChild(table);
