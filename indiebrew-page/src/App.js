
import './App.css';
import BodySection from './componets/body-section/BodySection';
import Footer from './componets/footer/Footer';
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
      <footer>
      <Footer></Footer>
      </footer>
    </div>

  );
}

export default App;
