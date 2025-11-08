import './app.css';
import Header from './components/Header/Header';
import Annotates from './components/Annotates/Annotates';

// NOTE: We shouldn't add state here since everytime state updates
// then component App will be rendered along with any children component like Header
// So there is no need to re render the header everytime something changes
// that is why we start with comopnent Annotates.
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
