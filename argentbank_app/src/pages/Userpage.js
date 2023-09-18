import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EditNameModal from '../components/editNameModal.js';
import { connect } from 'react-redux';

const Userpage = (props) => {
    console.log("Props in Userpage:", props);

    const [isModalOpen, setModalOpen] = useState(false);

    const { userName } = props;
    console.log("Props in Userpage:", props);
    return (
        <div>
            <Navigation />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{userName}!</h1>
                    <button className="edit-button" onClick={() => setModalOpen(true)}>Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                    <div>
                        {isModalOpen && <EditNameModal onClose={() => setModalOpen(false)} />}
                    </div>
                </section>

                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>

                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log("State in mapStateToProps:", state);
    return {
        userName: state.auth?.user?.body?.userName
    };
};
export default connect(mapStateToProps)(Userpage);
