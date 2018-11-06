import GuestRoutes from './pages/guest';
import AuthRoutes from './pages/auth';
import SplashScreen from './pages/splash';

export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler) {
    routeHandler.setPwaSchema({
      name: 'allG',
      short_name: 'allG',
    });
    routeHandler.setDefaultSeoSchema({
      title: 'allG',
    });

    const routes = [
      ...GuestRoutes,
      ...AuthRoutes,
      ...SplashScreen,
      ...SplashScreen,
    ];

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
