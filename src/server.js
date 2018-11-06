import React from 'react';
import GorrillaFavIcon from './resources/img/gorilla-favicon-512.png';

export default class Server {
  // eslint-disable-next-line class-methods-use-this
  apply(serverHandler) {
    serverHandler.hooks.beforeHtmlRender.tapPromise('AddFavIcon', async (Application) => {localStorage
      const { htmlProps: { head } } = Application;
      // console.log(Application);
      head.push(<link key="favicon" rel="shortcut icon" type="image/png" href={GorrillaFavIcon} />);
      return true;
    });
  }
}
