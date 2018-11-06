import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <section className="hero is-info is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
            Welcome to all-G
        </h1>
        <h2 className="subtitle">
            For the yay-sayers!
        </h2>
        <Link to="/home" className="button">Checkout the full demo</Link>
      </div>
    </div>
  </section>
);
