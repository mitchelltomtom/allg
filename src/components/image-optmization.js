import React from 'react';
import Picture from '@pawjs/srcset/picture';
import GuestLayout from './guest-layout';
import CatDog from '../resources/img/dog-cat.jpg';
// eslint-disable-next-line
import CatDogSrcset from '../resources/img/dog-cat.jpg?sizes=1200w+1000w+800w+600w+400w&placeholder';

export default () => {
  return (
    <GuestLayout>
      <div className="container p-t-xl">
        <h1 className="title">Sample image page</h1>
        <p>
          Some pets innit...
        </p>
        <img alt="Cat & Dog Sleeping" src={CatDog} />
        <hr />
        <h2 className="title">Lazy loading</h2>
        <div className="content">
          Lazy pets innit...
        </div>
        <Picture alt="Cat & Dog" image={CatDogSrcset} />
      </div>
    </GuestLayout>
  );
};
