const students = [
    {
      name: "John",
      age: 23,
      skills: ["HTML", "CSS", "JS"],
      salary: "1200$",
    },
    {
      name: "Bob",
      age: 32,
      skills: ["Python", "Jupiter", "NumPy"],
      salary: "1800$",
    },
    {
      name: "Mike",
      age: 123,
      skills: ["Java", "JS"],
      salary: "2200$",
    },
    {
      name: "Bobby",
      age: 321,
      skills: ["Assembly", "Fortran"],
      salary: "500$",
    },
    {
      name: "Jack",
      age: 13,
      skills: ["Python", "Photoshop"],
      salary: "200$",
    },
  ];
 
  // * 4) Write function which will be able to print to the console name of current user and his skills through the "*"
  // * Example : Jack able to write on Python*Java*JS

//   ******* PRACTICE *******

 //        * 2) Sum of salary into the group
  
  const callSalaryGroup = students.reduce (function(sum, student){

    return sum + parseInt(student.salary);
  } ,0);
  console.log (callSalaryGroup);

 //        * 1) Find John and print him to the console

  const studentJone = students.filter(function(st){
    return st.name.includes ("John");
  });
  console.log(studentJone);

//          * 3)  Mediana

function getMedianaAge(students){

    const sumAges = students.reduce(function(sumAge,ages){
    return sumAge + ages.age;
    },0);
    console.log(sumAges);

    return sumAges/students.length;
}
console.log(getMedianaAge(students));

// * 4) Write function which will be able to print to the console name of current user and his skills through the "*"


function printStudentNaneAndSkills(index){
    const student = students[index];
    const name = student.name;
    const skills = student.skills.join(" * ");
    console.log (name + " - " + skills);
}

printStudentNaneAndSkills(0);








