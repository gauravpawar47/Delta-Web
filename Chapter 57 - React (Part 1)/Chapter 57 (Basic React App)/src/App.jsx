import "./App.css";
import Title from "./Title";
import { Description } from "./Description";
import TaskManager from "./TaskManager";
import ActivitiyManager from "../ActivityManager";
import MainActivityManager from "./MainActivityManager";
function App() {
  return (
    <div>
      <h1> Hello, student47 </h1>
      <Title />
      <Description />
      {/* <TaskManager />
      <ActivitiyManager /> */}
      
      <MainActivityManager />
    </div>
  );
}

export default App;
