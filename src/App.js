import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = {'Eric'} lastName = {'Trudell'} age = {30} haircolor = {'brown'}/>
      <PersonCard firstName = {'Jimmy'} lastName = {'Krombopolis'} age = {90} haircolor = {'white'}/>
      <PersonCard firstName = {'Rick'} lastName = {'James'} age = {63} haircolor = {'gray'}/>
      <PersonCard firstName = {'Travis'} lastName = {'Rice'} age = {50} haircolor = {'brown'}/>
    </div>
  );
}

export default App;
