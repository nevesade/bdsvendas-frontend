import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <div className="sales-overview-container base-card">
          <PieChartCard name={''} labels={['Porto', 'Lisboa', 'Braga']} series={[40, 30, 23]} />
        </div>
      </div>
    </>
  );
}

export default App;
