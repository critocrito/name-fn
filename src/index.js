// @flow

const namefn = (name: string, fn: () => mixed): (() => mixed) => {
  Object.defineProperty(fn, "name", {value: name, configureable: true});
  return fn;
};

export default namefn;
