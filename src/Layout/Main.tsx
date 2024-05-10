import React from 'react';
import Sidebar from './Partials/Sidebar';
import Footer from './Partials/Footer';
import Header from './Partials/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (

        //Page Wrapper
        <div id="wrapper">
    
            {/* Sidebar */}
            <Sidebar></Sidebar>
            {/* End of Sidebar */}
    
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
    
                {/* Main Content */}
                <div id="content">
    
                    {/* Topbar */}
                    <Header></Header>
                    {/* End of Topbar */}
    
                    {/* Begin Page Content */}
                    <Outlet></Outlet>
                    {/* container-fluid */}
    
                </div>
                {/* End of Main Content */}
    
                {/* Footer */}
                <Footer></Footer>
                {/* End of Footer */}
    
    
            </div>
            {/* End of Content Wrapper  */}

            {/* <!-- Scroll to Top Button--> */}
            <a className="scroll-to-top rounded" href="/">
                <i className="fas fa-angle-up"></i>
            </a>

            {/* <!-- Logout Modal--> */}
            <div className="modal fade" id="logoutModal" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="/">Logout</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        // End of Page Wrapper
    );
};

export default Main;