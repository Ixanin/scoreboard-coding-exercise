import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import MatchesTable from './components/matches-table/MatchesTable.tsx';

function App() {
  return (
    <>
      <Header />
      <MatchesTable />
      <Footer />
    </>
  );
}

export default App;
