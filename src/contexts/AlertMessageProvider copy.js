import React, { ReactNode, createContext } from 'react';
import Swal from 'sweetalert2';

// interface AlertMessageContextType {
//     successMessage: string|void|null|object; // Define the type of successMessage
// }
// interface AlertMessageProviderProps {
//     children: ReactNode;
// }

// export const AlertMessageContext = createContext<AlertMessageContextType>({
//     successMessage: 'Data saved successfully' // Provide a default value
// });

export const AlertMessageContext = createContext(undefined);

// const AlertMessageProvider: React.FC<AlertMessageProviderProps> = ({children}) => {
const AlertMessageProvider = ({children}) => {

    const successMessage = (message:string) :void => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: message
        });
    }

    // Create an object that matches the structure of AlertMessageContextType
    const alertInfo = {
        successMessage, // Provide the initial value for successMessage
    };

    return (
        <AlertMessageContext.Provider value={alertInfo}>
            {children}
        </AlertMessageContext.Provider>
    );
};

export default AlertMessageProvider;