let todo = [];

let req = prompt("Enter your request");
while(true)
{
    if(req == "quit")
    {
        console.log("Quitting");
        break;
    }
    
    if(req == "list")
    {
        console.log("----------");
        for(task of todo)
        {
            console.log(task);
        }
        console.log("----------");
    }
    else if(req == "add")
    {
        let task = prompt("Please enter the task you want to add")
        todo.push(task);
        console.log("Task Added");
    }
    else if(req == "delete")
    {
        let idx = prompt("Enter the task index")
        todo.splice(idx, 1);
        console.log("Task Deleted");
    }
    else
    {
        console.log("Invalid Request");
    }

    req = prompt("Please Enter Your Request")
}