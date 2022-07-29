import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import PageFooter from "./components/PageFooter/PageFooter";
import InputComponent from "./components/InputComponent/InputComponent";

function App() {
  return (
    <div>
      <PageHeader />
      <InputComponent />
      <PageFooter />
    </div>
  );
}

export default App;
