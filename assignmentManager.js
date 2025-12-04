import Student from './Student.js'; // Import the Student class

 // Array to maintain all students in the class
const classList = [];

//function to add a student to the class list
function addStudent(student) {
    //check if student was entered properly, if it's actually a student
    if (!(student instanceof Student)) {
        //log message
        return console.log("Not a valid student.");
    }
    //push student to classlist if valid 
    classList.push(student);
    console.log(`${student.fullName} has been added to classlist.`);
}

//remove student
function removeStudent(fullName) {
    const index = classList.findIndex(student => student.fullName === fullName);
    //-1 means not found, so this is true if found
    if (index !== -1) {
        //splice it out
        classList.splice(index, 1);
    }
}

//find student by name
function findStudentByName(fullName) {
    //return student or null if not found
    return classList.find(student => student.fullName === fullName) || null;
}

//find students with outstanding assignments
function findOutstandingAssignments(assignmentName = null) {
    //array of students with outstanding assignments
    const outstandingStudents = [];

    //loop through classlist
    classList.forEach(student => {
        //if specific assignment name given
        if (assignmentName) {
            //find that assignment in students assignments
            const assignment = student.assignmentStatuses.find(a => a.assignmentName === assignmentName);
            //if assignment exists and is still outstanding
            if (assignment && assignment.status !== "submitted" && assignment.status !== "pass" && assignment.status !== "fail") {
                //put student name in outstanding list
                outstandingStudents.push(student.fullName);
            }
            //if no specific assignment given
        } else {
            //check for any outstanding assignments from the student
            const hasOutstanding = student.assignmentStatuses.some(a => a.status === "released" || a.status === "working");
            //if they do, add them to the list
            if (hasOutstanding) {
                outstandingStudents.push(student.fullName);
            }
        }
    });

    //return the list of students
    return outstandingStudents;
}

// Function to send reminders for an assignment
function sendReminder(assignmentName) {
    // Get the list of students with outstanding assignments for the given assignment name
    const outstandingStudents = findOutstandingAssignments(assignmentName);

    // Loop through the outstanding students and send reminders
    outstandingStudents.forEach(studentName => {
        const student = findStudentByName(studentName);
        if (student) {
            const assignment = student.assignmentStatuses.find(a => a.assignmentName === assignmentName);
            if (assignment) {
                assignment.status = "final reminder";
                student.observer.notify(student.fullName, assignmentName, assignment.status); // Notify observer
                student.submitAssignment(assignmentName); // Trigger submission
            }
        }
    });
}

// Function to release assignments in parallel
function releaseAssignmentsParallel(assignmentNames) {
    // Use Promise.all to handle multiple asynchronous operations in parallel
    return Promise.all(
        assignmentNames.map(name => 
            new Promise(resolve => {
                // Simulate asynchronous release with a delay
                setTimeout(() => {
                    // Update the assignment status for each student in the class list
                    classList.forEach(student => {
                        student.updateAssignmentStatus(name);
                    });
                    // Log a message indicating the assignment has been released
                    console.log(`Assignment "${name}" released.`);
                    resolve(); // Resolve the promise after the assignment is released
                }, 100); // Delay of 100ms for each assignment release
            })
        )
    );
}


//  // === Example Usage ===
 
// const s1 = new Student();
// const s2 = new Student();

// s1.setFullName("Alice Smith");
// s1.setEmail("alice@example.com");

// s2.setFullName("Bob Jones");
// s2.setEmail("bob@example.com");

// addStudent(s1);
// addStudent(s2);
 
//  //an example of calling startWorking and sending reminders
//  //timing could vary in other tests!
// releaseAssignmentsParallel(["A1", "A2"]).then(() => {
// s1.startWorking("A1");
// s2.startWorking("A2");
 
// setTimeout(() => sendReminder("A1"), 200);
//  });
