# vue-practice
### [算出プロパティとメソッドの違い](https://jp.vuejs.org/v2/guide/computed.html#%E7%AE%97%E5%87%BA%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3-vs-%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89)
- 算出プロパティはリアクティブな依存関係にもとづきキャッシュされる
- リアクティブな依存関係が更新されたときにだけ再評価される
- 実行の度に現在時刻を返すなどの場合はメソッドを使うのが望ましい
- メソッド呼び出しは再描画が起こると常に関数を実行する
- キャッシングの必要がないかつ、巨大な配列をループしたり多くの計算を必要とする場合はcomputedを使う。

### イベントについて
```html
<!-- クリックイベントのバブリングをしない -->
<a v-on:click.stop="doThis"></a>

<!-- submitイベントで画面遷移しない -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修飾子は繋げて書ける -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 値を指定せず修飾子だけの指定が可能 -->
<form v-on:submit.prevent></form>

<!-- キャプチャリングを使用する。内部要素を対象とするイベントはその要素によって処理される前にここで処理される -->
<div v-on:click.capture="doThis"></div>

<!-- event.targetが要素自身のときだけイベントハンドラが呼び出される。子要素の時は呼び出されない。 -->
<div v-on:click.self="doThat"></div>
```

### コンポーネント
DOM上で直接コンポーネントを使用する場合の命名は W3C rules に従ったカスタムタグ名(小文字のチェーンケース)を推奨
```javascript
Vue.component('sample-a', {/*...*/});
Vue.component('sample-b', {/*...*/});
Vue.component('sample-c', {/*...*/});
// これらは全てグローバルに定義されているため定義後に作成された全てのVueインスタンスのテンプレート内で使用できる
new Vue({el: "#app"})
```
```html
<div id="app">
    <sample-a></sample-a>
    <sample-b></sample-b>
    <sample-c></sample-c>
</div>
```

ローカルとして定義する場合
```javascript
const componentA = {/*...*/}
const componentB = {/*...*/}
const componentC = {/*...*/}
new Vue({
  el: '#app',
  components: {
    'component-a': componentA,
    'component-b': componentB,
    'component-c': componentC,
  }
})
```
https://jp.vuejs.org/v2/guide/components-registration.html#%E5%9F%BA%E5%BA%95%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E8%87%AA%E5%8B%95%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%90%E3%83%AB%E7%99%BB%E9%8C%B2
