import Sidepanel from "./Sidepanel";
import Myprofile from "./Myprofile";
import Chart from "./chart"
import  Endsection from "./Endsection";
import Bottompanel from "./Bottompanel";


function App() {
  return (
    <div className="App flex flex-col md:flex-row relative">
    <Sidepanel />
    <Myprofile />
    <Chart />
    <Endsection />
    <Bottompanel />
    </div>
  );
}

export default App;
