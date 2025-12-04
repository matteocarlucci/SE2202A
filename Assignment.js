class Assignment {
    // Constructor to initialize assignment with name and default status
    constructor(assignmentName) {
        this.assignmentName = assignmentName;
        this.status = "released";
    }

    // Private field to store the grade
    #grade;

    // Method to set the grade and update status accordingly
    setGrade(grade) {
        this.#grade = grade;
        this.status = grade > 50 ? "pass" : "fail";
        return this.#grade;
    }
}

//export the Assignment class for use
export default Assignment;