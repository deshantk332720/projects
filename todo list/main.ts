import inquirer from "inquirer";

let todos : string [] =["deshant","ayesha"];

  async function createTodo(todos : string[]){
    do{

    
    let ans = await inquirer.prompt 
    (
        {
        type : "list",
        name : "todo",
        message : "SELECT AN OPERATION",
        choices :["Add",
                  "Update",
                   "Delete",
                   "View",
                   "Exit"
                 ]
        }
    )
    // -----------------------------        
    if (ans.todo === "Add")
    {
        let addTodo = await inquirer.prompt
        (
            {
                   type : "input",
                   message : "ADD ITEM IN LIST",
                   name : "todo"
            }
        );
        todos.push(addTodo.todo);
        console.log(todos);
    }
    // ------------------------------
    if (ans.todo === "Update")
    {
        let updateTodo = await inquirer.prompt
        (
            {
             type : "list", 
             name : "todo",
             message : "UPDATE LIST",
             choices : todos.map(item => item)

            
            }
        );
        let addTodo = await inquirer.prompt
        (
            {
                   type : "input",
                   message : "ADD ITEM IN LIST",
                   name : "todo"
            }
        );
        let updatedTodo = todos.filter(value => value !== updateTodo.todo);
        todos = [... updatedTodo , addTodo.todo];
        console.log(todos);
    }
    // ------------------------------
    if (ans.todo === "Delete")
    {
         let deleteTodo = await inquirer.prompt
         (
            {
                type : "list", 
                name : "todo",
                message : "YOU CAN DELSETE ANY LIST ITEM",
                choices : todos.map(item => item) 
            }
         );
         let updatedTodo = todos.filter(value => value !== deleteTodo.todo);
        todos = [... updatedTodo ];
        console.log(todos);
    }
    // ------------------------------
     if(ans.todo === "Exit"){
        console.log("")
     }
     // ----------------------------
    if (ans.todo === "View")
    {
        console.log(todos)
    }
    console.log("----------------------------THANKS---------------------------")
} 

while (true)

}
          
createTodo(todos);