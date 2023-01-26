import { ContentHeader } from './components/ContentHeader'
import { ContentMain } from './components/ContentMain';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'

function App() {
  return(
    <div className="app">
      <ContentHeader />
      <ContentMain />
    </div>
  )  
}

export default App
