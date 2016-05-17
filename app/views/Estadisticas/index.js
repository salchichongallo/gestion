// Polyfill
if(typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) };

module.exports = {
  path: 'estadisticas',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Estadisticas.jsx'));
    })
  }
}
