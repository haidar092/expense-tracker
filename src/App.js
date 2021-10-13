import AddTransaction from "./component/AddTransaction";
import Balence from "./component/Balence";
import Header from "./component/Header";
import IncomeExpense from "./component/IncomeExpense";
import TransationList from "./component/TransationList";
import { GlobalProvider } from "./Context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
  <Header />
  <div className="container">
    <Balence />
    <IncomeExpense />
    <TransationList />
    <AddTransaction />
  </div>
    </GlobalProvider>
  );
}

export default App;
