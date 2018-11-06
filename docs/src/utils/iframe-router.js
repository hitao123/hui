import { isMobile, iframeReady } from './';

window.syncPath = function() {
  const router = window.vueRouter;
  const isInIframe = window !== window.top;
  const currentDir = router.history.current.path;

  if (!isInIframe && !isMobile) {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframeReady(iframe, () => {
        iframe.contentWindow.changePath(currentDir);
      });
    }
  } else if (isInIframe) {
    window.top.changePath(currentDir);
  }
};

window.changePath = function(path = '') {
  window.vueRouter.replace(path);
};
