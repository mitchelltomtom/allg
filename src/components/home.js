import React from 'react';
import PropTypes from 'prop-types';
import GuestLayout from './guest-layout';
import Logo from '../resources/img/gorilla-logo.svg';

const Column = (props) => {
  const { title, description, link } = props;
  return (
    <div className="column">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {title}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            {description}
            {' '}
            {!!link.length && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Read more
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
Column.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default () => (
  <GuestLayout>
    <section className="hero is-medium is-info is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="home-logo-container">
            <img alt="logo" src={Logo} />
          </div>
          <h1 className="title">
            all-G
          </h1>
          <h2 className="subtitle">
            The good news gorillas
          </h2>
        </div>
      </div>
    </section>
    <section className="m-t-lg">
      <div className="container p-l-md p-r-md">
        <h4 className="title is-4">
          There is a reason this page exists.
          There is a reason you exist.
          I&apos;m not saying the two are related.
        </h4>
        <div className="columns">
          <Column
            title="Interesting Fact 1"
            description="Place interesting shit here"
            link="/"
          />
          <Column
            title="Interesting Fact 2"
            description="more interesting shit here"
            link="/"
          />
          <Column
            title="Interesting Fact 3"
            description="less interesting shit here"
            link="/"
          />
        </div>
      </div>
    </section>
  </GuestLayout>
);
