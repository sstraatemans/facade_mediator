export let app = app || {};

app.start = () => {
  window.onload = () => {
    app.core.startAll();
  };
};

app.start();
