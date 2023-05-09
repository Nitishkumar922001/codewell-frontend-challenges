
import './App.css';
import BodySection from './componets/body-section/BodySection';
import HeadSection from './componets/head-section/HeadSection';
import Nav from './componets/nav/Nav';

function App() {
  return (
    <div className='page-container'>
      <header className='header'>
        <Nav></Nav>
        <HeadSection></HeadSection>

      </header>
      <main className="main-content">
        <BodySection></BodySection>
      </main>
      
    </div>

  );
}

export default App;
