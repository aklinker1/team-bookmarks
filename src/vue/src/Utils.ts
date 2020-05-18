export function as<T>(data: T): T {
  return data;
}

export default {
  insertQueryParam(key: string, value: string) {
    key = encodeURI(key);
    value = encodeURI(value);
    var kvp = document.location.search.substr(1).split('&');
    var i = kvp.length;
    var x;
    while (i--) {
      x = kvp[i].split('=');

      if (x[0] == key) {
        x[1] = value;
        kvp[i] = x.join('=');
        break;
      }
    }
    if (i < 0) {
      kvp[kvp.length] = [key, value].join('=');
    }
    document.location.search = kvp.join('&');
  },
  reloadGrid(instance: Vue, timeout = 0): void {
    // @ts-ignore
    if (typeof instance.$redrawVueMasonry === 'function') {
      setTimeout(() => {
        // @ts-ignore
        instance.$redrawVueMasonry();
        console.log('redrawing', arguments);
      }, timeout);
    }
  },
};
