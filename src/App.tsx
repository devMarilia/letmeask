import { BrowserRouter, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';
import { AuthContexProvider } from './contexts/AuthContext'

function App() {
  return (
   <BrowserRouter>
   <AuthContexProvider>
      <Route path="/" exact component={Home}/>
      <Route path="/rooms/new" component={NewRoom}/> 
      </AuthContexProvider>   
   </BrowserRouter>
  );
}

export default App;
