import './App.css';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Layout from './layouts/PageWithSidebar';

function App() {
  return (
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  );
}

export default App;
