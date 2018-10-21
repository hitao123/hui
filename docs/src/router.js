import docConfig from './doc.config'
import componentDocs from './docs-entry'
import componentDemos from './demo-entry'

const registerRoute = (isDemo) => {
  const route = [{
    path: '*',
    redirect: to => `/`
  }];

  Object.keys(docConfig).forEach((item) => {
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
      // console.log(path, '🐶')
      let component
      // if (path === 'demo') {
      //   component = DemosPage;
      // } else {
      //   component = componentDemos[path]
      // }
      component = isDemo ? componentDemos[path] : componentDocs[`${path}.README`]
      console.log(component, '🐎🐎')
      if (!component) {
        return;
      }
      if (route.name === path) {
        return;
      }
      route.push({
        name: path,
        component,
        path: `/${path}`
      })
    }
  }
  console.log(route);
  return route;
}

export default registerRoute
