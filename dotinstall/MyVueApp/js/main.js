Vue.config.devtools = true;

(function () {
  'use strict';

  // two way data binging (to UI) データをUIに紐付ける
  // UI に結びつくModelをViewModelという
  var vm = new Vue({
    el: '#app',
    data: {
      name: 'miyata',
    }
  });
})();
