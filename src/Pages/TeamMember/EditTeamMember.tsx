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

interface EditTeamMemberProps {
    allMembers: Member[];
    setMember: React.Dispatch<React.SetStateAction<Member[]>>;
    member: Member;
}

const EditTeamMember: React.FC<EditTeamMemberProps> = ({allMembers, setMember, member}) => {

    const {id, name, email, employee_id, position   } = member;
    const [closeModal, setCloseModal] = useState(false);
    const {successMessage, prepareMessage, displayErrorMessage } = useContext(AlertMessageContext);


    const handleUpdate = async (event:any) => {
        event.preventDefault();
        const form = event.target;
        const member_id:number  = form.member_id.value;
        const name:string  = form.name.value;
        const email:string = form.email.value;
        const employee_id:string = form.employee_id.value;
        const position:string  = form.position.value;
        const password:string  = form.password.value;
        const password_confirmation:string  = form.password_confirmation.value;

        const updatedMember:Member = {
            id: member_id,
            name: name,
            email: email,
            employee_id: employee_id,
            position: position,
            password: password,
            password_confirmation: password_confirmation,
        };

        fetch(`http://127.0.0.1:8000/api/team-members/${member_id}`, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedMember)
        })
        .then(res => res.json())
        .then(response =>{
            // console.log('success -',response);            

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
            <button className='btn btn-info mr-2' type="button" data-toggle="modal" data-target={`#editModal-${id}`}>Edit</button>

            <div className="modal fade" 
                tabIndex={-1} 
                id={`editModal-${id}`}
                role="dialog"
                aria-hidden="true"
                style={closeModal ? { display: 'block' } : { display: 'none' }}
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleUpdate}>
                                <div className="row">
                                    <input type="hidden" name="member_id" defaultValue={id} />

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="font-weight-bold">Member Name<span className="text-danger ml-2">*</span></label>
                                            <input type="text" name="name" defaultValue={name} placeholder="Ex: Jhon Doe" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="font-weight-bold">Email<span className="text-danger ml-2">*</span></label>
                                            <input type="text" name="email" defaultValue={email} placeholder="Ex: jhon@gmail.com" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="font-weight-bold">Employee Id<span className="text-danger ml-2">*</span></label>
                                            <input type="text" name="employee_id" defaultValue={employee_id} placeholder="Ex: LC-123" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="font-weight-bold">Position<span className="text-danger ml-2">*</span></label>
                                            <input type="text" name="position" defaultValue={position} placeholder="Ex: Software Engineer" className="form-control" />
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
                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => setCloseModal(true)}>Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditTeamMember;