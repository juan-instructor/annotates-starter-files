import './app.css';
import Header from './components/Header/Header';
import Annotates from './components/Annotates/Annotates';

const App = () => {
  console.log('app component rendered');
  return (
    <>
      <Header />
      <main className="main">
        <Annotates />
      </main>
    </>
  );
};

export default App;
