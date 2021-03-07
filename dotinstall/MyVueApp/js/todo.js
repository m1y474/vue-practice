(function () {
  'use strict';

  new Vue({
    el: '#app',
    // watchで指定したデータに対して変更があった時に発火される
    watch: {
      // todos自体の変更を見るだけでtodosの中身までは検知しない
      // todos: function () {
      //   localStorage.setItem('todos', JSON.stringify(this.todos));
      //   alert('Data saved!');
      // }
      todos: {
        handler: function () {
          localStorage.setItem('todos', JSON.stringify(this.todos));
          console.log('Data saved!');
        },
        // todosの中身まで見るか
        deep: true,
      }
    },
    // Vue.js のインスタンスにはのインスタンスには定義されている。
    // 今回はマウントされるタイミングなのでmountedとする
    mounted: function () {
      this.todos = JSON.parse(localStorage.getItem('todos')) || []
    },
    data: {
      newItem: '',
      // todos: [{
      //   title: 'task 1',
      //   isDone: false
      // }, {
      //   title: 'task 2',
      //   isDone: false
      // }, {
      //   title: 'task 3',
      //   isDone: true
      // },
      // ],
      // タスクがない場合
      todos: [],
    },
    methods: {
      // addItem: function (e) {
      //   e.preventDefault(); // submitしないように
      //   this.todos.push(this.newItem)
      // },
      addItem: function () {
        var item = {
          title: this.newItem,
          isDone: false,
        }
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function (index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1);
        }
      },
      purge: function () {
        if (!confirm('終了済みのタスクを削除しますか?')) {
          return;
        }
        // 終了していないタスクのみにする
        // this.todos = this.todos.filter(function (todo) {
        //   return !todo.isDone;
        // });
        this.todos = this.remaining;
      },
    },
    computed: {
      // 終了しているタスク数の表示
      remaining: function () {
        return this.todos.filter(function (todo) {
          return !todo.isDone;
        });
      },
    }
  });
})();
