import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DataTable from 'react-data-table-component';

const TeamMember = () => {

    const {result} = useLoaderData();
    const data = result;


    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Employee Id',
            selector: row => row.employeeId,
            sortable: true,
        },
        {
            name: 'Position',
            selector: row => row.position,
            sortable: true,
        },
    ];




    return (
        <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-2 text-gray-800">Team Members</h1>
        
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <button className="btn btn-primary font-weight-bold" type="button" data-toggle="modal" data-target="#createModal"><i className="fa fa-plus"></i> Create Member</button>
            </div>
            <div className="card-body">
                <div className="table-responsive">

                    <DataTable 
                        columns={columns} 
                        data={data} 
                        fixedHeader
                        pagination
                    ></DataTable>

                    {/* <table className="table table-bordered" id="dataListTable" width="100%" cellSpacing="0">
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
                            {
                                result.map(member => 
                                    <tr key={member.id}>
                                        <td>{member.id}</td>
                                        <td>{member.name}</td>
                                        <td>{member.employeeId}</td>
                                        <td>{member.position}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table> */}
                </div>
            </div>
        </div>
    </div>
    );
};

export default TeamMember;