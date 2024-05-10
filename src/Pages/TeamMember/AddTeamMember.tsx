import React, { useContext, useState } from 'react';
import { AlertMessageContext } from '../../contexts/AlertMessageProvider';

interface Member {
    id: number;
    name: string;
    email: string;
    employee_id: string;
    position: string;
    password: string;
    password_confirmation: string;
}

interface AddTeamMemberProps {
    allMembers: Member[];
    setMember: React.Dispatch<React.SetStateAction<Member[]>>;
}

const AddTeamMember: React.FC<AddTeamMemberProps> = ({ allMembers, setMember }) => {
// const AddTeamMember = () => {

    const [closeModal, setCloseModal] = useState(false);

    const {successMessage, prepareMessage, displayErrorMessage } = useContext(AlertMessageContext);

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        const form = event.target;
        const name:string  = form.name.value;
        const email:string = form.email.value;
        const employee_id:string = form.employee_id.value;
        const position:string  = form.position.value;
        const password:string  = form.password.value;
        const password_confirmation:string  = form.password_confirmation.value;

        const newStoreData:Member = {
            id: 0,
            name: name,
            email: email,
            employee_id: employee_id,
            position: position,
            password: password,
            password_confirmation: password_confirmation,
        };
        const updatedMembers = [...allMembers, newStoreData];

        fetch('http://127.0.0.1:8000/api/team-members', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newStoreData)
        })
        .then(res => res.json())
        .then(response =>{
            if (response.status === 200) {
                form.reset();
                setCloseModal(false);
                setMember(updatedMembers);
                successMessage(response.message);
            }
            else if (response.errors) {
                let htmlContent = prepareMessage(response);
                displayErrorMessage(htmlContent);
            }
        })
        .catch(response => {
            console.log('error -',response);            
        });

    }

    return (
        <>
            {/* {!closeModal && ( */}
                <div className="modal fade" 
                    id="createModal"
                    role="dialog"
                    aria-labelledby="createModalLabel" 
                    aria-hidden="true"
                    style={closeModal ? { display: 'block' } : { display: 'none' }}
                >
                {/* <div className={`modal fade${closeModal ? ' show' : ''}`} id="createModal" role="dialog" aria-labelledby="createModalLabel" aria-hidden={!closeModal}> */}
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="createModalLabel"> Add Member</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="font-weight-bold">Member Name<span className="text-danger ml-2">*</span></label>
                                                <input type="text" name="name" placeholder="Ex: Jhon Doe" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="font-weight-bold">Email<span className="text-danger ml-2">*</span></label>
                                                <input type="text" name="email" placeholder="Ex: jhon@gmail.com" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="font-weight-bold">Employee Id<span className="text-danger ml-2">*</span></label>
                                                <input type="text" name="employee_id" placeholder="Ex: LC-123" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="font-weight-bold">Position<span className="text-danger ml-2">*</span></label>
                                                <input type="text" name="position" placeholder="Ex: Software Engineer" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="font-weight-bold">Password<span className="text-danger ml-2">*</span></label>
                                                <input type="password" name="password" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="font-weight-bold">Confirm Password<span className="text-danger ml-2">*</span></label>
                                                <input type="password" name="password_confirmation" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="d-grid gap-3">
                                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            {/* )} */}
        </>
        
    );
};

export default AddTeamMember;