import logo from './logo.svg';
import Home from './pages/Home';
import Services from './pages/Services';
import Management from './pages/Management';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Partner from './pages/Partner';
import Blogs from './pages/Blogs';
import Careers from './pages/careers/Careers';
import ReactCareer from './pages/careers/ReactCareer';
import Portfolio from './pages/Portfolio';
import PortFolioView from './portfolio/PortFolioView';
import TaskCalculation from './portfolio/TaskCalculation';

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/management" exact component={Management}/>
      <Route path="/partners" exact component={Partner}/>
      <Route path="/blogs" exact component={Blogs}/>
      <Route path="/careers" exact component={Careers}/>
      <Route path="/careers/ReactJs" exact component={ReactCareer}/>
      <Route path="/portfolio" exact component={Portfolio}/>
      <Route path="/portfolio-view" exact component={PortFolioView}/>
      <Route path="/portfolio-task-calculation" exact component={TaskCalculation}/>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
