#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    static counter = 1000;
    id;
    name;
    courses;
    balance;
    constructor(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 100;
    }
    enrollCourse(course) {
        this.courses.push(course);
    }
    viewBalance() {
        console.log(chalk.green(`Balance for ${this.name} : $${this.balance}`));
    }
    payFees(amount) {
        this.balance -= amount;
        console.log(chalk.green(`$${amount} Fees paid successfully for ${this.name}`));
        console.log(chalk.green(`Remaining Balance : $${this.balance}`));
    }
    showStatus() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses: ${this.courses}`);
        console.log(`Balance: ${this.balance}`);
    }
}
class studentManager {
    students;
    constructor() {
        this.students = [];
    }
    addStudent(name) {
        let student = new Student(name);
        this.students.push(student);
        console.log(chalk.green(`Student: ${name} added successfully. Student ID: ${student.id}`));
    }
    enrollStudent(student_id, course) {
        let student = this.find_student(student_id);
        if (student) {
            student.enrollCourse(course);
            console.log(chalk.green(`${student.name} enrolled in ${course} successfully`));
        }
    }
    view_student_balance(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.viewBalance();
        }
        else {
            console.log(chalk.red("Student not found. please enter a correct student ID"));
        }
    }
    pay_student_fees(student_id, amount) {
        let student = this.find_student(student_id);
        if (student) {
            student.payFees(amount);
        }
        else {
            console.log(chalk.red("Student not found. please enter a correct student ID"));
        }
    }
    show_student_status(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.showStatus();
        }
    }
    find_student(student_id) {
        return this.students.find((std) => std.id === student_id);
    }
}
async function main() {
    console.log(chalk.magenta("\n \t...Student Management System..."));
    console.log("-".repeat(51));
    let student_manager = new studentManager();
    while (true) {
        let choice = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.blue("Select an option"),
                choices: [
                    "Add Student",
                    "Enroll Student",
                    "View Student Balance",
                    "Pay Fees",
                    "Show Status",
                    "Exit",
                ],
            },
        ]);
        switch (choice.choice) {
            case "Add Student":
                let name_input = await inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: "Enter a student name: ",
                    },
                ]);
                student_manager.addStudent(name_input.name);
                break;
            case "Enroll Student":
                let course_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID: ",
                    },
                    {
                        name: "course",
                        type: "input",
                        message: "Enter a course name: ",
                    },
                ]);
                student_manager.enrollStudent(course_input.student_id, course_input.course);
                break;
            case "View Student Balance":
                let balance_input = await inquirer.prompt([
                    {
                        name: "studentID",
                        type: "number",
                        message: "Enter a student ID: ",
                    },
                ]);
                student_manager.view_student_balance(balance_input.studentID);
                break;
            case "Pay Fees":
                let fees_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a student ID: ",
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to pay: ",
                    },
                ]);
                student_manager.pay_student_fees(fees_input.student_id, fees_input.amount);
                break;
            case "Show Status":
                let status_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a student ID: ",
                    },
                ]);
                student_manager.show_student_status(status_input.student_id);
                break;
            case "Exit":
                console.log(chalk.red("Exiting..."));
                process.exit();
        }
    }
}
main();
