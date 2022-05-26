export default {
  async fetch(request, env) {
    const day1 = 'sanditable.herokuapp.com';
    const day2 = 'threetables.herokuapp.com';
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      let day = new Date();
      if (day.getDay() % 2) {
        url.hostname = day1;
      } else {
        url.hostname = day2;
      }
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
