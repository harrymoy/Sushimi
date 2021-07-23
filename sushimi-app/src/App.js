import './App.css';
import Header from './components/Header';
import CurrentBalance from './components/CurrentBalance';
import FromToken from './components/FromToken';
import ToToken from './components/ToToken';

function App() {
  return (
    <div className="App">
      <Header />
      <CurrentBalance />
      <FromToken />
      <ToToken />
    </div>
  );
}

export default App;
