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
  npm install react-bootstrap bootstrap@4.6.0
  ```
  and then goto `src/index.js` and paste the bellow code.
  ```bash
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.min.js';
  ```
#### 4. [Sweetalert2](https://sweetalert2.github.io/)
  ```bash
  npm install sweetalert2  
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


## STORE
Please follow the code given below - 
```ts
    const handleSubmit = async (event:any) => {
        event.preventDefault();

        const form = event.target;
        const name:string  = form.name.value;
        const email:string = form.email.value;
        const employee_id:string = form.employee_id.value;
        const position:string  = form.position.value;
        const password:string  = form.password.value;
        const password_confirmation:string  = form.password_confirmation.value;

        const storeData = {
            name: name,
            email: email,
            employee_id: employee_id,
            position: position,
            password: password,
            password_confirmation: password_confirmation,
        };

        fetch('http://127.0.0.1:8000/api/team-members', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(storeData)
        })
        .then(res => res.json())
        .then(data =>{
             console.log(data);
        })
        .catch(err => console.error(err));
    }
```


## TOPIC 
- useLoaderData
- useState
- createContext


## ChatGPT 
https://chatgpt.com/c/92acdd50-9420-4190-90cc-60ceb124690d


## Common Error

- Problem-1
<img src="https://snipboard.io/o7taEk.jpg">
<img src="https://snipboard.io/vty4gK.jpg">

Solution : 
<img src="https://snipboard.io/PGA1uB.jpg">

- Problem-2
<img src="https://snipboard.io/wx7EFf.jpg">

The error occurs because the `setMember` function expects an array of `Member` objects, but you're providing a single `Member` object instead.
To resolve this, you need to update the `setMember` call to provide an array of `Member` objects, including the updated member data. You can achieve this by mapping over the existing `allMembers` array, updating the relevant member, and then passing the updated array to `setMember`.

Solution : 
```bash
        const updatedMember:Member = {
            id: member_id,
            name: name,
            email: email,
            employee_id: employee_id,
            position: position,
            password: password,
            password_confirmation: password_confirmation,
        };

        .then(response =>{
            if (response.status === 200) {
                setCloseModal(false);
                successMessage(response.message);

                // Update the member in the allMembers array
                const updatedMembers = allMembers.map(member => {
                    if (member.id === member_id) {
                        return updatedMember; // Replace the existing member with the updated one
                    } else {
                        return member;
                    }
                });
                setMember(updatedMembers); // Set the updated array of members

            }
        })

```
