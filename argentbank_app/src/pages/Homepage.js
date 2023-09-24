import React from 'react';
import Navigation from "../components/Navigation.js";
import Footer from '../components/Footer.js';
import FeatureItem from '../components/FeatureItem.js';

const Homepage = () => {
    return (
        <div>
            <Navigation />
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <FeatureItem
                        iconSrc="./img/icon-chat.webp"
                        altText="Chat Icon"
                        title="You are our #1 priority"
                        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                    />
                    <FeatureItem
                        iconSrc="./img/icon-money.webp"
                        altText="Money Icon"
                        title="More savings means higher rates"
                        description="The more you save with us, the higher your interest rate will be!"
                    />
                    <FeatureItem
                        iconSrc="./img/icon-security.webp"
                        altText="Security Icon"
                        title="Security you can trust"
                        description="We use top of the line encryption to make sure your data and money is always safe."
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Homepage;