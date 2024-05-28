import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CalendarContainer from './Calendar/CalendarContainer'
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <div>Please login</div>
    },
    {
      path: "/signup",
      element: <div>Please sign up</div>
    },
    {
      path: "/calendar",
      element: <CalendarContainer />
    },
  ]);
  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='App-name'>Coffee Shop Scheduler</h1>
      </header>
      <div className='App-container'>
        <RouterProvider router={router} />
      </div>
      <footer className='App-footer'>

      </footer>
    </div>
  );
}

export default App;
