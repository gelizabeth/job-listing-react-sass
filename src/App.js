
import './app.scss';
import jobs from './data.json';
import JobList from './components/JobList';

function App() {
  
  return (
    <div className="App">
    <div className="App__header"></div>
      <JobList list={jobs}></JobList>
    </div>
  );
}

export default App;
