import Task from "./Task";

function TaskManager() {
  let sources = ["leetcode.com", "geeksforgeeks.com", "hackerearth.com"]
  return (
    <div>
      <Task name="DSA" description="Solve Heaps Questions" featured={sources}/>
      <br />
      <Task name="DEV" description="Complete Delta Upto React Part 5" featured={sources}/>
    </div>  
  );
}

export default TaskManager;
