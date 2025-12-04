class Observer {
    //notify method
    notify(studentName, assignmentName, status) {
        //log notification
        console.log(`Observer -> ${studentName}, "${assignmentName}" has status: "${status}".`);
    }
}

//export to be used
export default Observer;
