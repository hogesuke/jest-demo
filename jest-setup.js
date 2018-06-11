import 'mock-local-storage';

// https://github.com/jsdom/jsdom/issues/937
window.getSelection = () => {
  return {
    addRange: () => {},
    removeAllRanges: () => {}
  };
};
