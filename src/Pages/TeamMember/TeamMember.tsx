import { Form, useLoaderData } from 'react-router-dom';
import AddTeamMember from './AddTeamMember';
import { useContext, useState } from 'react';
import { AlertMessageContext } from '../../contexts/AlertMessageProvider';
import EditTeamMember from './EditTeamMember';


interface Member {
    id: number;
    name: string;
    email: string;
    employee_id: string;
    position: string;
    password: string;
    password_confirmation: string;
}


const TeamMember = () => {

    const {successMessage, isConfirmed } = useContext(AlertMessageContext);

    const { result } = useLoaderData() as { result: Member[] };
    const [allMembers, setMember] = useState<Member[]>(result);

    const handleDelete = (memberId: number):void => {
        console.log(memberId);
        isConfirmed()
        .then(result => {   
            if (result) {  
                fetch(`http://127.0.0.1:8000/api/team-members/${memberId}`, {
                    method: 'DELETE',
                    headers:{
                        'content-type':'application/json',
                        // 'Authorization': `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(res.statusText);
                    }
                    return res.json();
                })
                .then(response => {
                    if (response.status===200) {
                        const remaining = allMembers.filter(member => member.id !== memberId);
                        setMember(remaining);
                        console.log(allMembers, remaining);
                        successMessage(response.message);
                    }
                })
                .catch(error => {
                    // displayErrorMessage(422, 'Error', '<p>'+ error+'</p>');
                });
            }
        });
    }

    return (
        <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-2 text-gray-800">Team Members</h1>
            
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <button className="btn btn-primary font-weight-bold" type="button" data-toggle="modal" data-target="#createModal"><i className="fa fa-plus"></i> Create Member</button>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataListTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Employee Id</th>
                                    <th>Position</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allMembers && Array.isArray(allMembers) && allMembers.map(member => 
                                        <tr key={member.id}>
                                            <td>{member.id}</td>
                                            <td>{member.name}</td>
                                            <td>{member.employee_id}</td>
                                            <td>{member.position}</td>
                                            <td>
                                                <EditTeamMember key={member.id} allMembers={allMembers} setMember={setMember} member={member}></EditTeamMember>
                                                <button className='btn btn-danger' onClick={() => handleDelete(member.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Create Modal */}
            <AddTeamMember allMembers={allMembers} setMember={setMember}/>
        </div>
    );
};

export default TeamMember;