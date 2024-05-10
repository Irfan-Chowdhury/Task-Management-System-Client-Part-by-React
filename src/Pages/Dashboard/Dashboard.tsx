import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {
    
    interface TaskStatus {
        total_count: number;
        pending_count:number;
        done_count:number;
    }
    
    type resultProps = {
        taskStatus:TaskStatus;
        totalProjet:number;
    }

    const {result}: { result: resultProps } = useLoaderData() as { result:resultProps};

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            <div className="row">

                {/* <!-- Total Task --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Total Task</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {result.taskStatus ? result.taskStatus.total_count : 0}

                                        {/* @if(auth()->user()->can('task-view-all'))
                                            {{ isset($taskStatus->total_count) ? $taskStatus->total_count : 0 }}
                                        @else
                                            {{ $totalTaskForMember }}
                                        @endif */}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* @if(auth()->user()->can('task-view-all')) */}
                {/* <!-- Total Project --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Total Project</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800"> {result.totalProjet}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Pending Task --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Pending Task
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{result.taskStatus ? result.taskStatus.pending_count : 0}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Complete Task --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Complete Task</div>
                                    {/* <div className="h5 mb-0 font-weight-bold text-gray-800">{{ isset($taskStatus->done_count) ? $taskStatus->done_count : 0 }}</div> */}
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{result.taskStatus ? result.taskStatus.done_count : 0}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* @endif */}


            </div>
        </div>
    );
};

export default Dashboard;