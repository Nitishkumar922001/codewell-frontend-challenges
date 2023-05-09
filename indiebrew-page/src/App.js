
import './App.css';
import HeadSection from './componets/head-section/HeadSection';
import Nav from './componets/nav/Nav';

function App() {
  return (
    <div className='page-container'>
    <header className='header'>
    <Nav></Nav>
    <HeadSection></HeadSection>
    </header>
    </div>

  );
}

export default App;
