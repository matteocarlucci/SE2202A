/**
 * Define the Course and Assignment concepts using the class notations
 */

// Define the Assignment class
class Assignment {
    //define Assignment constructor
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }
    //define method to print Assignment details
    printAssignment() {
        console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate);
    }
}

// Define the Course class
class Course {
    //define Course constructor
    constructor(courseName, instructor, creditHours, assignments) {
        this.courseName = courseName;
        this.instructor = instructor;
        this.creditHours = creditHours;
        this.assignments = assignments;
    }
    //define method to print Course details
    courseInfo() {
        console.log('Course: ' + this.courseName + 
                    ' | Instructor: ' + this.instructor + 
                    ' | Credit Hours: ' + this.creditHours);
        console.log('Assignments >>>');
        for (let a of this.assignments) {
            a.printAssignment();
        }
    }
}

//Create Assignment objects
let a1 = new Assignment('Project Proposal', 'Jan 15');
let a2 = new Assignment('Midterm Report', 'Feb 20');
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');

//Create Course objects
let c1 = new Course('Software Engineering', 'Dr. Pepper', 3, [a1, a2]);
let c2 = new Course('Data Science', 'Dr. Evil', 6, [a3, a4]);

//Use methods to display info
c1.courseInfo();
c2.courseInfo();