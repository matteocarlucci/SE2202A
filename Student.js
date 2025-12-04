import Assignment from './Assignment.js'; // Import the Assignment class
import Observer from './Observer.js'; // Import the Observer class

class Student {
    //constructor to initialize student properties
    constructor() {
        this.fullName = "";
        this.email = "";
        this.assignmentStatuses = []; // Array of Assignment objects
        this.gradeTotal = 0;
        this.overallGrade = 0;
        this.gradedAssignments = []; //Assignments that have been graded
        this.observer = new Observer(); // Create an instance of the Observer
    }

    //setter for name
    setFullName(name) {
        this.fullName = name;
    }

    //setter for email
    setEmail(email) {
        this.email = email;
    }

    //update assignment status method
    updateAssignmentStatus(name, grade = null) {
        //find assignment by name
        let assignment = this.assignmentStatuses.find(a => a.assignmentName === name);
        //check if assignemnt exists
        if (!assignment) {
            //make new assignment if it doesn't exist
            assignment = new Assignment(name);
            //put it in the array
            this.assignmentStatuses.push(assignment);
        }
        //set grade if provided
        if (grade !== null) {
            //set grade and add to gradeTotal for average after
            this.gradeTotal += assignment.setGrade(grade);
            //add to graded assignments array
            this.gradedAssignments.push(assignment);
        }
        this.observer.notify(this.fullName, name, assignment.status); // Notify observer
    }

    //get assignment status method
    getAssignmentStatus(name) {
        const assignment = this.assignmentStatuses.find(a => a.assignmentName === name);
        //check if assignment exists
        if (!assignment) {
            //return status for not assigned
            return "Hasn't been assigned"; // Return this if the assignment doesn't exist
        }
        //return the status if it does exist
        return assignment.status; // Return the existing status
    }

    //method to start working on assignment
    startWorking(name) {
        let assignment = this.assignmentStatuses.find(a => a.assignmentName === name);
        //if assignment doesn't exist
        if (!assignment) {
            return console.log(`Assignment ${name} not found.`);
        }
        assignment.status = "working";
        this.observer.notify(this.fullName, name, assignment.status); //notify observer
        //if a reminder has been sent, the submission happens with the reminder
        //delay submission by 500ms if no reminder
        setTimeout(() => this.submitAssignment(name), 500);
    }

    //method to submit assignment
    submitAssignment(name) {
        const assignment = this.assignmentStatuses.find(a => a.assignmentName === name);
        //if assignment exists
        if (assignment) {
            //change status to submitted
            assignment.status = "submitted";
            this.observer.notify(this.fullName, name, assignment.status); // Notify observer
            //submit assignment with a random grade after 500ms
            setTimeout(() => {
                const grade = Math.floor(Math.random() * 101); // Random integer grade 0-100
                this.gradeTotal += assignment.setGrade(grade);
                this.gradedAssignments.push(assignment); 
                this.observer.notify(this.fullName, name, assignment.status); // Notify observer after grading
            }, 500);
        }
        //if can't find assignment, log error
        if (!assignment) {
            console.error(`Assignment ${name} not found for submission.`);
        }
    }

    //get grade method to find overall average 
    getGrade() {
        //check to see if there are graded assignments
        if (this.gradedAssignments.length === 0) return 0;
        //calculate overall grade average
        this.overallGrade = this.gradeTotal / gradedAssignments.length;
        return this.overallGrade;
    }
}

//export to be used
export default Student;
