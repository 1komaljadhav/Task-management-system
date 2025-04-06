import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import TaskStatus from './pages/TaskStatus';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import AssignTask from './pages/AssignTask';
import Departments from './pages/Departments';
import DailyTaskUpdate from './pages/DailyTaskUpdate';
import EmployeeDashboard from './pages/EmployeeDashboard';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
  <IonRouterOutlet>
  <Route path="/tasks/:dept" component={TaskStatus} exact />
  <Route path="/task-status" component={TaskStatus} exact />
  <Route path="/assign-task" component={AssignTask} exact />
  <Route exact path="/departments" component={Departments} />
  <Route exact path="/daily-task-update" component={DailyTaskUpdate} />
   <Route exact path="/home" component={Home} />
   <Route exact path="/emp-dashboard" component={EmployeeDashboard} />
    <Route exact path="/login" component={Login} />
   <Redirect exact from="/" to="/login" />
  </IonRouterOutlet>
</IonReactRouter>

  </IonApp>
);

export default App;
