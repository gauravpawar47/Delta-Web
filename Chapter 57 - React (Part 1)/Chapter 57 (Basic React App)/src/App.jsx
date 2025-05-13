import "./App.css";
import Title from "./Title";
import { Description } from "./Description";
import TaskManager from "./TaskManager";
import ActivitiyManager from "../ActivityManager";

function App() {
  return (
    <div>
      <h1> Hello, student47 </h1>
      <Title />
      <Description />
      <TaskManager />
      <ActivitiyManager />
    </div>
  );
}

export default App;
