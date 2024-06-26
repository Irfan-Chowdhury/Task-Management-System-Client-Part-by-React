import React, { ReactNode, createContext } from 'react';
import Swal, { SweetAlertResult } from 'sweetalert2';

// Define the type for the context value
interface AlertMessageContextType {
    successMessage: (message: string) => void;
    prepareMessage: (response: string) => string;
    displayErrorMessage: (htmlContent: string) => void;
    isConfirmed: () => Promise<boolean>; // Adjust the return type to Promise<boolean>
}

// Create the context with the defined type
// Provide a default value, although it won't be used
export const AlertMessageContext = createContext<AlertMessageContextType>({ 
    successMessage: () => {}, 
    prepareMessage: () => '',
    displayErrorMessage: () => {},
    isConfirmed: async () => false,
});

// Define props type for AlertMessageProvider
interface AlertMessageProviderProps {
    children: ReactNode;
}

// const AlertMessageProvider = ({children}) => {
const AlertMessageProvider: React.FC<AlertMessageProviderProps> = ({ children }) => {

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

    let prepareMessage = (response:any) : string => {
        let htmlContent = '';
        if(response.errors) {
            let dataValues = Object.values(response.errors);
            for (let count = 0; count < dataValues.length; count++) {
                htmlContent += '<p class="text-danger">' + dataValues[count] + '</p>';
            }
        }
        return htmlContent;
    }

    let displayErrorMessage = (htmlContent:string) : void => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: htmlContent
        })
    }

    const isConfirmed = async ()  => {
        const result: SweetAlertResult<any> = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });
        return result.isConfirmed; 

        // const result: SweetAlertResult<any> = await Swal.fire({
        //     Swal.fire({
        //         title: 'Are you sure?',
        //         text: "You won't be able to revert this!",
        //         icon: 'warning',
        //         showCancelButton: true,
        //         confirmButtonColor: '#3085d6',
        //         cancelButtonColor: '#d33',
        //         confirmButtonText: 'Yes, delete it!'
        //     });
        // });
        
    }

    let isErrorCodes = (errorCode:any) => {
        return laravelErrorCodes.some(error => error.code === errorCode);
    }
    const laravelErrorCodes = [
        { code: 400, message: "Bad Request" },
        { code: 401, message: "Unauthorized" },
        { code: 403, message: "Forbidden" },
        { code: 404, message: "Not Found" },
        { code: 500, message: "Internal Server Error" },
    ];

    // Provide the value for the context
    const alertInfo: AlertMessageContextType = {
        successMessage,
        prepareMessage,
        displayErrorMessage,
        isConfirmed
    };

    return (
        <AlertMessageContext.Provider value={alertInfo}>
            {children}
        </AlertMessageContext.Provider>
    );
};

export default AlertMessageProvider;