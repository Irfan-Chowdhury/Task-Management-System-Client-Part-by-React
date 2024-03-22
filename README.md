<div align='center'>

<h1>Task Management System (React) </h1>
</div>


## Project Setup
#### 1. Install [React](https://reactjs.org/) App
```bash
npx create-react-app your-project-name
```

#### 2. [React Router](https://reactrouter.com/en/main)
```bash
npm install react-router-dom
```

#### 3. [React-Bootstrap](https://react-bootstrap.github.io/)
  ```bash
  npm install react-bootstrap bootstrap
  ```
  and then goto `src/index.js` and paste the bellow code.
  ```bash
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.min.js';
  ```



## My Initial Setup
- Create Main : `src\Layout\Main.js` and paste the code for make a layout

```bash
import React from 'react';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Container>
                <h1>Welcome To React</h1>
            </Container>
        </div>
    );
};

export default Main;
```

- Create Route: `src\Routes\GeneralRoute.js`  and paste the code
```bash
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>
    }
]);
```

- Update App.js : 
```bash
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/GeneralRoute';

function App() {
  return (
    <div className="App">
        <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
```

- now run the react app, it will display like that -
<img src="https://snipboard.io/eowuLd.jpg">







## How to Run

Please run these command - 
```bash
npm run start
```
