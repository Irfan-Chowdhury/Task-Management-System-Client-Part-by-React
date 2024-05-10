import { Form, useLoaderData } from 'react-router-dom';
import AddTeamMember from './AddTeamMember';

const TeamMember = () => {

    const { result } = useLoaderData() as { result: object };
    // console.log(result);

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
                                {result && Array.isArray(result) && result.map(member => 
                                        <tr key={member.id}>
                                            <td>{member.id}</td>
                                            <td>{member.name}</td>
                                            <td>{member.employeeId}</td>
                                            <td>{member.position}</td>
                                            {/* <td>
                                                <EditCategory key={category.id} categoryId={category.id} categoryName={category.name} setCategory={setCategory}></EditCategory>
                                                <Button className='btn btn-danger' onClick={() => handleDelete(category.id)}>Delete</Button>
                                            </td> */}
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Create Modal */}
            <AddTeamMember/>

        </div>
    );
};

export default TeamMember;