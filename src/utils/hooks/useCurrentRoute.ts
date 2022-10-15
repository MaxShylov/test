import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import routes, { IRoute } from 'routes';

export const useCurrentRoute = () => {
  const { pathname } = useLocation();
  const [route, setRoute] = useState<IRoute | undefined>();

  useEffect(() => {
    const currentRoute = routes.find(item => item.path === pathname);
    if (currentRoute) {
      setRoute(currentRoute);
    }
  }, [pathname]);

  return route;
};
