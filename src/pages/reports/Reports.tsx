import React from 'react';
import './Reports.css';
import HeaderComponent from './../../components/header/Header';
import FooterComponent from './../../components/footer/Footer';

const Reports = () => {

    function handleOnChange() {
        //
    }
    return (
        <>
            <HeaderComponent />
            <main className="superContainer">
                <h1 className="pageTitle">Reports</h1>

                <p>Busque por nome de usuário ou palavra:</p>

                <input 
                    type="text" 
                    name="text" 
                    id="search" 
                    onChange={handleOnChange}
                    className="input"
                />

                <span className="reportContainer">
                    <div className="top">
                        <h3 className="username">User name</h3>
                        <p className="datetime">12/12/12 00:00</p>
                        <p className="type_of">WARNING</p>
                        <p className="count_event">Count of events: 100</p>
                    </div>

                    <strong className="title">Report Title</strong>

                    <p className="details">Possession her thoroughly remarkably terminated 
                        man continuing. Removed greater to do ability. 
                        You shy shall while but wrote marry. Call why 
                        sake has sing pure. Gay six set polite nature 
                        worthy. So matter be me we wisdom should basket
                        moment merely. Me burst ample wrong which would
                        mr he could. Visit arise my point timed drawn no. 
                        Can friendly laughter goodness man him appetite 
                        carriage. Any widen see gay forth alone fruit 
                        bed. 
                    </p>
                </span>

                <span className="reportContainer">
                    <div className="top">
                        <h3 className="username">User name</h3>
                        <p className="datetime">12/12/12 00:00</p>
                        <p className="type_of">WARNING</p>
                        <p className="count_event">Count of events: 100</p>
                    </div>

                    <strong className="title">Report Title</strong>

                    <p className="details">Possession her thoroughly remarkably terminated 
                        man continuing. Removed greater to do ability. 
                        You shy shall while but wrote marry. Call why 
                        sake has sing pure. Gay six set polite nature 
                        worthy. So matter be me we wisdom should basket
                        moment merely. Me burst ample wrong which would
                        mr he could. Visit arise my point timed drawn no. 
                        Can friendly laughter goodness man him appetite 
                        carriage. Any widen see gay forth alone fruit 
                        bed. 
                    </p>
                </span>
            </main>
            
            <FooterComponent />
        </>
    );
}

export default Reports;