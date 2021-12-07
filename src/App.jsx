import './App.css';
import Header from './view/Header';
import Router from './Router';

function App() {
  return (
    <div>
      <Header />
      <section className="main">
        <Router />
      </section>
    </div>
  );
}

export default App;
