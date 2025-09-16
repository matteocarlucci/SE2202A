# Tutorial 2

## Gradescope instructions:

Solution filenames should be:
dataTypesSolution.js (Task 1)
shortCircuitsSolution.js (Task 2)


## Task 1: Datatypes and Comparisons

The goal of this task is to practice with basic datatypes in javascript.

Be careful about the difference between undefined and null values. An undefined value can occur when a variable is not initalized:

let x; //undefined

Null values can either be set explicitly or can be a result of operations with one null value (which we will see later).

let x = null;

## Task 2: Shortcircuits

The goal of this task is to understand lazy evaluation. Follow the instructions in the code comments.

 In Javascript, boolean expressions have lazy evaluation. This means that evalution can stop early depending on the values. Non-boolean values in boolean expressions are converted to booleans for evaluation. For example "0" is converted to false and "1" to true. Strings like "hello" are also true. 

For && \(AND\) evaluation stops early if the first argument is false. It returns the value of the first argument, even if it is not boolean.
let x = 0 && true; // returns 0

Otherwise, it returns the second expression.
let y = true && "hello" // returns hello

For || \(OR\) evaluation stops early if the first argument casts to true (even if it's not boolean).
let x = "hello" && true; // true

Otherwise, it returns the second expression.
let y =  0 && "hello" // returns hello



## Grading

Autograder: 50 / 100 Points

**Do not** deliberately write output code to fool the autograder (such as by hardcoding output rather than calling the function). Assignments that do this will recieve a grade of 0.

Additionally, do not add any additional output statements. This will result in the autograder not recognizing your correct solutions. (Note that you will get a chance to resubmit.)

Following instructions: 50 / 100 Points

Follow the instructions in the assignment. If you are asked to produce an outcome using a particular technique marks will be lost for using the a different technique that produces the same outcome, because the goal is to practice concepts.










