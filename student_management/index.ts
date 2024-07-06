import inquirer from "inquirer";



let student_management = await inquirer.prompt
(
    [
        {
           name:"operation",
           type : "list",
           message : "CHOOSE ANY OPERATION",
           choices : [
                           "student_information",
                           "new_addmission",
                           "Enroll student name in course"
                     ]
        }
    ]
);

if (student_management.operation === "student_information"){
let student_information = await inquirer.prompt
(
    [                      
        {
           name : "inform",
           message : "Click On Student Name TO Get Information About her/his",
           type : "list",      
           choices :[
                       "Arfin",
                       "Hamzah",
                       "Sara",
                       "Zainab",
                    ]
        }
    ]
)
if (student_information.inform === "Arfin"){
    console.log(`Age:15 Gender:Male ID:1234`)
}
if(student_information.inform === "Hamzah"){
    console.log("Age:14  Gender:Male ID:3572")
}
if(student_information.inform === "Sara"){
    console.log("Age:16 Gender:Female ID:7573")
}
else if (student_information.inform === "Zainab"){
    console.log("Age:15 Gender:Female ID:3212")
}
}
//------------------------------------------------------------------

if (student_management.operation === "new_addmission"){

    let oldstudents : string [] = ["OLD ADDMISSION : Hamzah,Arfin,Sara,Zainab"]
    
    let newstudents : string [] = ["NEW ADDMISSION : Anus,Irtiza"]
    
    console.log(`
        ${oldstudents} 
        ${newstudents}`)

  console.log(`${oldstudents}  ${newstudents}`)      
}

// ------------------------------------------------------------------ 

if (student_management.operation === "Enroll student name in course"){
    let Addmission = await inquirer.prompt
    (
        [
            {
                name : "opera",
                type : "list",
                message : "SELECT THE COURSE",
                choices : [
                             "IT",
                             "Arts"
                          ]
            }
        ]
    )
    
    if (Addmission.opera === "IT"){
        let add = await inquirer.prompt 
        
        (
            [
                {
                    name : "name",
                    message : "ENTER YOUR NAME :",
                    type : "name"
                },
            
        
        
                {
                    name : "age ",
                    message : "ENTER YOUR AGE :",
                    type : "age"
                },
            
                {
                    name : "gender",
                    message : "ENTER YOUR GENDER :",
                    type : "list",
                    choices : [
                                 "Male",
                                 "Female"
                              ]

                }
            ]
        )
        console.log("YOUR ADDMISSION PROCESS IS COMPLETED")
    }


if (Addmission.opera === "Arts"){
    let added = await inquirer.prompt 
    
    (
        [
            {
                name : "name",
                message : "ENTER YOUR NAME :",
                type : "input"
            },
        
    
    
            {
                name : "age ",
                message : "ENTER YOUR AGE :",
                type : "input"
            },
        
            {
                name : "gender",
                message : "ENTER YOUR GENDER :",
                type : "list",
                choices : [
                             "Male",
                             "Female"
                          ]

            }
        ]
    )
    console.log("YOUR ADDMISSION PROCESS IS COMPLETED")
}
}

// --------------------------------------------------------





























































//This project is a simple console based Student Management System. 
// In this project you will be learning how to add new students, how to generate a 5 digit unique studentID for 
// each student, how to enroll students in the given courses. Also, you will be implementing the following operations 
// enroll, view balance, pay tuition fees, show status, etc. The status will show all the details of the student including
//  name, id, courses enrolled and balance.
// This is one of the best projects to implement the Object Oriented Programming concepts.










