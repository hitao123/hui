import docConfig from './doc.config'
import componentDocs from './docs-entry'
import componentDemos from './demo-entry'
import DemoList from './components/DemoList'

const registerRoute = (isDemo) => {
  const route = [{
    path: '*',
    redirect: to => `/`
  }];

  Object.keys(docConfig).forEach((item) => {
    if (isDemo) {
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
          // console.log(group, '=====group')
          group.list.forEach(page => addRoute(page))
        })
      } else {
        // console.log(nav, 'nav===>')
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
      // console.log(component, '🐎🐎')
      if (!component) {
        return;
      }
      if (route.name === path) {
        return;
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
  console.log(route);
  return route;
}

export default registerRoute
