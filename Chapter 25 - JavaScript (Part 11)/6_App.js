function saveToDB(data, success, failure)
{
    let internet = Math.floor(Math.random() * 10) + 1;
    if(internet < 4)
    {
        failure();
    }
    else
    {
        success();
    }
}

saveToDB(
    "Gaurav Pawar", 
    () => 
    { 
        console.log("Data 1 Was Saved");
        saveToDB(
            "Gaurav Pawar", 
            () => 
            { 
                console.log("Data 2 Was Saved");
                saveToDB(
                    "Gaurav Pawar", 
                    () => 
                    { 
                        console.log("Data 3 Was Saved");
                    }, 
                
                    () => 
                    { 
                        console.log("Data 3 Not Saved"); 
                    }
                );
            }, 
        
            () => 
            { 
                console.log("Data 2 Not Saved"); 
            }
        );
    }, 

    () => 
    { 
        console.log("Data 1 Not Saved"); 
    }
);