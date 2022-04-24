import MainBx from "./container/MainBx"
import Title from "./components/Title";
import "./assets/style.css"


function App() {
  return (
    <div className="App">
      <Title text="كل الطلبات المسبقة" />
      <MainBx />
    </div>
  );
}

export default App;
