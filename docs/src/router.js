import docConfig from './doc.config'
import componentDocs from './docs-entry'
import componentDemos from './demo-entry'
import DemoList from './components/DemoList'
import './utils/iframe-router';

/**
 * @param {boolean} isMobile
 * 是否在模拟器
 */
const registerRoute = (isMobile) => {
  const route = [{
    path: '*',
    redirect: to => `/`
  }];

  Object.keys(docConfig).forEach((item) => {
    if (isMobile) {
      route.push({
        path: `/`,
        component: DemoList
      });
    } else {
      route.push({
        path: `/`,
        redirect: `/intro`
      });
    }

    const navs = docConfig.nav || [];
    navs.forEach(nav => {
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(page => addRoute(page))
        })
      } else {
        addRoute(nav)
      }
    });
  });

  function addRoute(page) {
    let { path } = page;
    if (path) {
      path = path.replace('/', '');
      let component

      component = isMobile ? componentDemos[path] : componentDocs[`${path}.README`]

      if (!component) {
        return;
      }

      for (let i = 0; i < route.length; i++) {
        const hasRoutePath = route[i].path && route[i].path.replace('/', '');
        if (hasRoutePath === path) {
          return;
        }
      }

      route.push({
        name: path,
        component,
        path: `/${path}`,
        meta: {
          path,
          name: page.title
        }
      })
    }
  }

  return route;
}

export default registerRoute
