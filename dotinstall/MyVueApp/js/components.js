Vue.config.devtools = true;
(function () {
  'use strict';

  var likeComponents = Vue.extend({
    // template煮含めることのできる要素は1つのみ
    // template: '<button>Like</button><button>Like</button>' // 兄弟要素は書けない
    // template: '<div><button>Like</button><button>Like</button></div>' // 親要素1つであればOK

    // コンポーネントのdataは関数で返してあげる必要がある
    data: function () {
      return {
        count: 0
      }
    },
    // プロパティ
    // props: ['message'],
    props: {
      // 型とデフォルト値を設定することができる
      message: {
        type: String,
        default: 'Like',
      }
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    methods: {
      countUp: function () {
        this.count++;
        this.$emit('increment');
      }
    }
  })
  new Vue({
    el: '#app',
    components: {
      'like-component': likeComponents
    },
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function () {
        this.total++;
      }
    }
  });
})();
