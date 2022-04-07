if (!Object.fromEntries) {
  Object.defineProperty(Object, 'fromEntries', {
    value(entries) {
      return [...entries].reduce((obj, [key, val]) => {
        obj[key] = val;
        return obj;
      }, {});
    },
  });
}
