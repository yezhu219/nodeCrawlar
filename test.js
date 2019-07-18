var TurndownService = require('turndown')

var turndownService = new TurndownService()
const str =`<div class="article fmt article__content" data-id="1190000019796451" data-license="">
                    
<h2 id="articleHeader0">前言</h2>
<p>一道经典面试题：</p>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="//JS实现一个无限累加的add函数
add(1)  //1 
add(1)(2)  //3
add(1)(2)(3)  //6" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="javascript"><span class="hljs-comment">//JS实现一个无限累加的add函数</span>
add(<span class="hljs-number">1</span>)  <span class="hljs-comment">//1 </span>
add(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)  <span class="hljs-comment">//3</span>
add(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>)  <span class="hljs-comment">//6</span></code></pre>
<p>当大家看到这个面试题的时候，能否在第一时间想到使用<strong>高阶函数</strong>实现？想到在实际项目开发过程中，用到哪些高级函数？有没有想过自己创造一个高阶函数呢？开始本篇文章的学习</p>
<p>文章已同步都github博客地址：<br><a href="https://github.com/koala-coding/goodBlog" rel="nofollow noreferrer" target="_blank">程序员成长指北技术栈博客地址</a></p>
<h2 id="articleHeader1">高阶函数定义</h2>
<p><code>高阶函数</code>英文叫 <code>Higher-order function</code>。高阶函数是对其他函数进行操作的函数，操作可以是将它们作为参数，或者返回它们。简单总结为高阶函数是<code>一个接收函数作为参数</code>或者将<code>函数作为返回输出</code>的函数。</p>
<h2 id="articleHeader2">函数作为参数情况</h2>
<p><code>Array.prototype.map</code>，<code>Array.prototype.filter</code>，<code>Array.prototype.reduce</code>和<code>Array.prototype.sort</code>是JavaScript中内置的高阶函数。它们接受一个函数作为参数，并应用这个函数到列表的每一个元素。下面是一些内置高阶函数的具体说明讲解，以及和不使用高阶函数情况下的对比</p>
<h2 id="articleHeader3">Array.prototype.map</h2>
<p><code>map()</code>(映射)方法最后生成一个新数组，不改变原始数组的值。其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="array.map(callback,[ thisObject]);" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript" style="word-break: break-word; white-space: initial;">array.map(callback,[ thisObject]);</code></pre>
<p>callback(回调函数)</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="[].map(function(currentValue, index, array) {
    // ...
});" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript">[].map(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">currentValue, index, array</span>) </span>{
    <span class="hljs-comment">// ...</span>
});</code></pre>
<p>传递给 <code>map</code> 的回调函数（<code>callback</code>）接受三个参数，分别是<code>currentValue</code>——正在遍历的元素、index（可选）——元素索引、array（可选）——原数组本身，除了 <code>callback</code> 之外还可以接受 this 值（可选），用于执行 <code>callback</code> 函数时使用的this 值。</p>
<p>来个简单的例子方便理解，现在有一个数组<code>[1,2,3,4]</code>，我们想要生成一个新数组，其每个元素皆是之前数组的两倍，那么我们有下面两种使用高阶和不使用高阶函数的方式来实现。</p>
<h3 id="articleHeader4">不使用高阶函数</h3>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="// koala
const arr1 = [1, 2, 3, 4];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push( arr1[i] * 2);
}

console.log( arr2 );
// [2, 4, 6, 8]
console.log( arr1 );
// [1, 2, 3, 4]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="javascript"><span class="hljs-comment">// koala</span>
<span class="hljs-keyword">const</span> arr1 = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];
<span class="hljs-keyword">const</span> arr2 = [];
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; arr1.length; i++) {
  arr2.push( arr1[i] * <span class="hljs-number">2</span>);
}

<span class="hljs-built_in">console</span>.log( arr2 );
<span class="hljs-comment">// [2, 4, 6, 8]</span>
<span class="hljs-built_in">console</span>.log( arr1 );
<span class="hljs-comment">// [1, 2, 3, 4]</span></code></pre>
<h3 id="articleHeader5">使用高阶函数</h3>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="// kaola
const arr1 = [1, 2, 3, 4];
const arr2 = arr1.map(item => item * 2);

console.log( arr2 );
// [2, 4, 6, 8]
console.log( arr1 );
// [1, 2, 3, 4]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="javascript"><span class="hljs-comment">// kaola</span>
<span class="hljs-keyword">const</span> arr1 = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];
<span class="hljs-keyword">const</span> arr2 = arr1.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item * <span class="hljs-number">2</span>);

<span class="hljs-built_in">console</span>.log( arr2 );
<span class="hljs-comment">// [2, 4, 6, 8]</span>
<span class="hljs-built_in">console</span>.log( arr1 );
<span class="hljs-comment">// [1, 2, 3, 4]</span></code></pre>
<h3 id="articleHeader6">map高阶函数注意点</h3>
<p>callback需要有return值，否则会出现所有项映射为undefind；</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="// kaola
const arr1 = [1, 2, 3, 4];
const arr2 = arr1.map(item => {});

console.log( arr2 );
// [ undefined, undefined, undefined, undefined ]
console.log( arr1 );
// [1, 2, 3, 4]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="javascript"><span class="hljs-comment">// kaola</span>
<span class="hljs-keyword">const</span> arr1 = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];
<span class="hljs-keyword">const</span> arr2 = arr1.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {});

<span class="hljs-built_in">console</span>.log( arr2 );
<span class="hljs-comment">// [ undefined, undefined, undefined, undefined ]</span>
<span class="hljs-built_in">console</span>.log( arr1 );
<span class="hljs-comment">// [1, 2, 3, 4]</span></code></pre>
<h3 id="articleHeader7">map高阶函数对应的一道经典面试题</h3>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="//输出结果
[&quot;1&quot;, &quot;2&quot;, &quot;3&quot;].map(parseInt);" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="javascript"><span class="hljs-comment">//输出结果</span>
[<span class="hljs-string">"1"</span>, <span class="hljs-string">"2"</span>, <span class="hljs-string">"3"</span>].map(<span class="hljs-built_in">parseInt</span>);</code></pre>
<p>看了这道题不知道会不会有大多数开发者认为输出结果是[1,2,3],<strong>错误</strong></p>
<p>正确的输出结果为：</p>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="[1,NaN,NaN]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript" style="word-break: break-word; white-space: initial;">[<span class="hljs-number">1</span>,<span class="hljs-literal">NaN</span>,<span class="hljs-literal">NaN</span>]</code></pre>
<h5>分析与讲解</h5>
<p>因为<code>map</code>的<code>callback</code>函数有三个参数，正在遍历的元素, 元素索引(index), 原数组本身(array)。<code>parseInt</code>有两个参数，string和radix(进制)，注意第二个参数进制当为0或者没有参数的时候，parseInt()会根据string来判断数字的基数。当忽略参数 radix , JavaScript 默认数字的基数如下:</p>
<ul>
<li>如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。</li>
<li>如果 string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。</li>
<li>如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。</li>
</ul>
<p>只传入parseInt的话，map callback会自动忽略第三个参数array。而index参数不会被忽略。而不被忽略的index(0,1,2)就会被parseInt当做第二个参数。</p>
<p>将其拆开看：</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="parseInt(&quot;1&quot;,0);//上面说过第二个参数为进制，所以&quot;1&quot;，radix为0上面提到过，会忽略，根据string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数1。
parseInt(&quot;2&quot;,1);//此时将2转为1进制数，由于超过进制数1，所以返回NaN。
parseInt(&quot;3&quot;,2);//此时将3转为2进制数，由于超过进制数1，所以返回NaN。" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="javascript"><span class="hljs-built_in">parseInt</span>(<span class="hljs-string">"1"</span>,<span class="hljs-number">0</span>);<span class="hljs-comment">//上面说过第二个参数为进制，所以"1"，radix为0上面提到过，会忽略，根据string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数1。</span>
<span class="hljs-built_in">parseInt</span>(<span class="hljs-string">"2"</span>,<span class="hljs-number">1</span>);<span class="hljs-comment">//此时将2转为1进制数，由于超过进制数1，所以返回NaN。</span>
<span class="hljs-built_in">parseInt</span>(<span class="hljs-string">"3"</span>,<span class="hljs-number">2</span>);<span class="hljs-comment">//此时将3转为2进制数，由于超过进制数1，所以返回NaN。</span></code></pre>
<p>所以最终的结果为<code>[1,NaN,NaN]</code>。</p>
<p>那么如果想要得到<code>[1,2,3]</code>该怎么写。</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;].map((x)=>{
    return parseInt(x);
});" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="javascript">[<span class="hljs-string">"1"</span>,<span class="hljs-string">"2"</span>,<span class="hljs-string">"3"</span>].map(<span class="hljs-function">(<span class="hljs-params">x</span>)=&gt;</span>{
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">parseInt</span>(x);
});</code></pre>
<p>也可以简写为：<br><code>["1","2","3"].map(x=&gt;parseInt(x));</code></p>
<p>这样写为什么就能返回想要的值呢？因为，传一个完整函数进去，有形参，有返回值。这样就不会造成因为参数传入错误而造成结果错误了，最后返回一个经纯函数处理过的新数组。</p>
<h2 id="articleHeader8">Array.prototype.reduce</h2>
<p><code>reduce()</code> 方法对数组中的每个元素执行一个提供的 reducer 函数(升序执行)，将其结果汇总为单个返回值。传递给 reduce 的回调函数（<code>callback</code>）接受四个参数，分别是累加器 <code>accumulator</code>、<code>currentValue</code>——正在操作的元素、<code>currentIndex</code>（可选）——元素索引，但是它的开始会有特殊说明、array（可选）——原始数组本身，除了 <code>callback</code> 之外还可以接受初始值 <code>initialValue</code> 值（可选）。</p>
<ul>
<li>如果没有提供 initialValue，那么第一次调用 callback 函数时，accumulator 使用原数组中的第一个元素，currentValue 即是数组中的第二个元素。 在没有初始值的空数组上调用 reduce 将报错。</li>
<li>如果提供了 initialValue，那么将作为第一次调用 callback 函数时的第一个参数的值，即 accumulator，currentValue 使用原数组中的第一个元素。</li>
</ul>
<p>例子，现在有一个数组  [0, 1, 2, 3, 4]，需要计算数组元素的和，需求比较简单，来看下代码实现。</p>
<h3 id="articleHeader9">不使用高阶函数</h3>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="//koala
const arr = [0, 1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log( sum );
// 10
console.log( arr );
// [0, 1, 2, 3, 4]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript"><span class="hljs-comment">//koala</span>
<span class="hljs-keyword">const</span> arr = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];
<span class="hljs-keyword">let</span> sum = <span class="hljs-number">0</span>;
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; arr.length; i++) {
  sum += arr[i];
}

<span class="hljs-built_in">console</span>.log( sum );
<span class="hljs-comment">// 10</span>
<span class="hljs-built_in">console</span>.log( arr );
<span class="hljs-comment">// [0, 1, 2, 3, 4]</span></code></pre>
<h3 id="articleHeader10">使用高阶函数</h3>
<h4>无 initialValue 值</h4>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="const arr = [0, 1, 2, 3, 4];
let sum = arr.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
});

console.log( sum );
// 10
console.log( arr );
// [0, 1, 2, 3, 4]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript"><span class="hljs-keyword">const</span> arr = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];
<span class="hljs-keyword">let</span> sum = arr.reduce(<span class="hljs-function">(<span class="hljs-params">accumulator, currentValue, currentIndex, array</span>) =&gt;</span> {
  <span class="hljs-keyword">return</span> accumulator + currentValue;
});

<span class="hljs-built_in">console</span>.log( sum );
<span class="hljs-comment">// 10</span>
<span class="hljs-built_in">console</span>.log( arr );
<span class="hljs-comment">// [0, 1, 2, 3, 4]</span></code></pre>
<p>上面是没有 initialValue 的情况，代码的执行过程如下，callback 总共调用四次。</p>
<table>
<thead><tr>
<th>callback</th>
<th>accumulator</th>
<th>currentValue</th>
<th>currentIndex</th>
<th>array</th>
<th>return value</th>
</tr></thead>
<tbody>
<tr>
<td>first call</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td>[0, 1, 2, 3, 4]</td>
<td>1</td>
</tr>
<tr>
<td>second call</td>
<td>1</td>
<td>2</td>
<td>2</td>
<td>[0, 1, 2, 3, 4]</td>
<td>3</td>
</tr>
<tr>
<td>third call</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>[0, 1, 2, 3, 4]</td>
<td>6</td>
</tr>
<tr>
<td>fourth call</td>
<td>6</td>
<td>4</td>
<td>4</td>
<td>[0, 1, 2, 3, 4]</td>
<td>10</td>
</tr>
</tbody>
</table>
<h4>有 initialValue 值</h4>
<p>我们再来看下有 initialValue 的情况，假设 initialValue 值为 10，我们看下代码。</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="//koala
const arr = [0, 1, 2, 3, 4];
let sum = arr.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
}, 10);

console.log( sum );
// 20
console.log( arr );
// [0, 1, 2, 3, 4]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript"><span class="hljs-comment">//koala</span>
<span class="hljs-keyword">const</span> arr = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];
<span class="hljs-keyword">let</span> sum = arr.reduce(<span class="hljs-function">(<span class="hljs-params">accumulator, currentValue, currentIndex, array</span>) =&gt;</span> {
  <span class="hljs-keyword">return</span> accumulator + currentValue;
}, <span class="hljs-number">10</span>);

<span class="hljs-built_in">console</span>.log( sum );
<span class="hljs-comment">// 20</span>
<span class="hljs-built_in">console</span>.log( arr );
<span class="hljs-comment">// [0, 1, 2, 3, 4]</span></code></pre>
<p>代码的执行过程如下所示，callback 总共调用五次。</p>
<table>
<thead><tr>
<th>callback</th>
<th>accumulator</th>
<th>currentValue</th>
<th>currentIndex</th>
<th>array</th>
<th>return value</th>
</tr></thead>
<tbody>
<tr>
<td>first call</td>
<td>10</td>
<td>0</td>
<td>0</td>
<td>[0, 1, 2, 3, 4]</td>
<td>10</td>
</tr>
<tr>
<td>second call</td>
<td>10</td>
<td>1</td>
<td>1</td>
<td>[0, 1, 2, 3, 4]</td>
<td>11</td>
</tr>
<tr>
<td>third call</td>
<td>11</td>
<td>2</td>
<td>2</td>
<td>[0, 1, 2, 3, 4]</td>
<td>13</td>
</tr>
<tr>
<td>fourth call</td>
<td>13</td>
<td>3</td>
<td>3</td>
<td>[0, 1, 2, 3, 4]</td>
<td>16</td>
</tr>
<tr>
<td>fifth call</td>
<td>16</td>
<td>4</td>
<td>4</td>
<td>[0, 1, 2, 3, 4]</td>
<td>20</td>
</tr>
</tbody>
</table>
<h2 id="articleHeader11">Array.prototype.filter</h2>
<p><code>filter</code>(过滤，筛选) 方法创建一个新数组,原始数组不发生改变。</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="array.filter(callback,[ thisObject]);" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="javascript" style="word-break: break-word; white-space: initial;">array.filter(callback,[ thisObject]);</code></pre>
<p>其包含通过提供函数实现的测试的所有元素。接收的参数和 map 是一样的，filter的<code>callbac</code>k函数需要返回布尔值true或false. 如果为true则表示通过啦！如果为false则失败，其返回值是一个新数组，由通过测试为true的所有元素组成，如果没有任何数组元素通过测试，则返回空数组。</p>
<p>来个例子介绍下，现在有一个数组 <code>[1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]</code>，我们想要生成一个新数组，这个数组要求没有重复的内容，即为去重。</p>
<h3 id="articleHeader12">不使用高阶函数</h3>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="const arr1 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr1.indexOf( arr1[i] ) === i) {
    arr2.push( arr1[i] );
  }
}
console.log( arr2 );
// [1, 2, 3, 5, 4]
console.log( arr1 );
// [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript"><span class="hljs-keyword">const</span> arr1 = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>];
<span class="hljs-keyword">const</span> arr2 = [];
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; arr1.length; i++) {
  <span class="hljs-keyword">if</span> (arr1.indexOf( arr1[i] ) === i) {
    arr2.push( arr1[i] );
  }
}
<span class="hljs-built_in">console</span>.log( arr2 );
<span class="hljs-comment">// [1, 2, 3, 5, 4]</span>
<span class="hljs-built_in">console</span>.log( arr1 );
<span class="hljs-comment">// [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]</span></code></pre>
<h3 id="articleHeader13">使用高阶函数</h3>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="const arr1 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const arr2 = arr1.filter( (element, index, self) => {
    return self.indexOf( element ) === index;
});

console.log( arr2 );
// [1, 2, 3, 5, 4]
console.log( arr1 );
// [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript"><span class="hljs-keyword">const</span> arr1 = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>];
<span class="hljs-keyword">const</span> arr2 = arr1.filter( <span class="hljs-function">(<span class="hljs-params">element, index, self</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> self.indexOf( element ) === index;
});

<span class="hljs-built_in">console</span>.log( arr2 );
<span class="hljs-comment">// [1, 2, 3, 5, 4]</span>
<span class="hljs-built_in">console</span>.log( arr1 );
<span class="hljs-comment">// [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]</span></code></pre>
<h3 id="articleHeader14">filter注意点说明</h3>
<p><code>callback</code>在过滤测试的时候，一定要是Boolean值吗？<br>例子：</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="var arr = [0, 1, 2, 3];
var arrayFilter = arr.filter(function(item) {
    return item;
});
console.log(arrayFilter); // [1, 2, 3]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript"><span class="hljs-keyword">var</span> arr = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
<span class="hljs-keyword">var</span> arrayFilter = arr.filter(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">item</span>) </span>{
    <span class="hljs-keyword">return</span> item;
});
<span class="hljs-built_in">console</span>.log(arrayFilter); <span class="hljs-comment">// [1, 2, 3]</span></code></pre>
<p>通过例子可以看出:过滤测试的返回值只要是弱等于== true/false就可以了，而非非得返回 === true/false.</p>
<h2 id="articleHeader15">Array.prototype.sort</h2>
<p><code>sort() </code>方法用原地算法对数组的元素进行排序，并返回数组，该排序方法会在原数组上直接进行排序，并不会生成一个排好序的新数组。排序算法现在是稳定的。默认排序顺序是根据字符串Unicode码点。</p>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="// 语法
arr.sort([compareFunction])" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript"><span class="hljs-comment">// 语法</span>
arr.sort([compareFunction])</code></pre>
<p><code>compareFunction</code>参数是可选的，用来指定按某种顺序进行排列的函数。注意该函数有两个参数：</p>
<p><strong>参数1:firstEl</strong></p>
<p>第一个用于比较的元素。</p>
<p><strong>参数2:secondEl</strong></p>
<p>第二个用于比较的元素。看下面的例子与说明：</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="// 未指明compareFunction函数

['Google', 'Apple', 'Microsoft'].sort(); // ['Apple', 'Google', 'Microsoft'];

// apple排在了最后:
['Google', 'apple', 'Microsoft'].sort(); // ['Google', 'Microsoft&quot;, 'apple']

// 无法理解的结果:
[10, 20, 1, 2].sort(); // [1, 10, 2, 20]
//正确的结果
[6, 8, 1, 2].sort(); // [1, 2，6, 8]

// 指明compareFunction函数
'use strict';
var arr = [10, 20, 1, 2];
    arr.sort(function (x, y) {
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });
console.log(arr); // [1, 2, 10, 20]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript"><span class="hljs-comment">// 未指明compareFunction函数</span>

[<span class="hljs-string">'Google'</span>, <span class="hljs-string">'Apple'</span>, <span class="hljs-string">'Microsoft'</span>].sort(); <span class="hljs-comment">// ['Apple', 'Google', 'Microsoft'];</span>

<span class="hljs-comment">// apple排在了最后:</span>
[<span class="hljs-string">'Google'</span>, <span class="hljs-string">'apple'</span>, <span class="hljs-string">'Microsoft'</span>].sort(); <span class="hljs-comment">// ['Google', 'Microsoft", 'apple']</span>

<span class="hljs-comment">// 无法理解的结果:</span>
[<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>].sort(); <span class="hljs-comment">// [1, 10, 2, 20]</span>
<span class="hljs-comment">//正确的结果</span>
[<span class="hljs-number">6</span>, <span class="hljs-number">8</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>].sort(); <span class="hljs-comment">// [1, 2，6, 8]</span>

<span class="hljs-comment">// 指明compareFunction函数</span>
<span class="hljs-meta">'use strict'</span>;
<span class="hljs-keyword">var</span> arr = [<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>];
    arr.sort(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">x, y</span>) </span>{
        <span class="hljs-keyword">if</span> (x &lt; y) {
            <span class="hljs-keyword">return</span> <span class="hljs-number">-1</span>;
        }
        <span class="hljs-keyword">if</span> (x &gt; y) {
            <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
        }
        <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
    });
<span class="hljs-built_in">console</span>.log(arr); <span class="hljs-comment">// [1, 2, 10, 20]</span></code></pre>
<p>如果没有指明 <code>compareFunction</code> ，那么元素会按照转换为的字符串的诸个字符的<code>Unicode</code>位点进行排序。例如 "Banana" 会被排列到 "cherry" 之前。当数字按由小到大排序时，10 出现在 2 之前，但因为（没有指明 <code>compareFunction</code>），比较的数字会先被转换为字符串，所以在<code>Unicode</code>顺序上 "10" 要比 "2" 要靠前。</p>
<p>如果指明了 <code>compareFunction</code> ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：</p>
<ul>
<li>如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；</li>
<li>如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；</li>
<li>如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。</li>
</ul>
<p>compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。</p>
<h3 id="articleHeader16">sort排序算法的底层实现</h3>
<p>看了上面<code>sort</code>的排序介绍，我想小伙伴们肯定会对sort排序算法的内部实现感兴趣，我在sf上面搜了一下，发现有些争议。于是去查看了V8引擎的源码，发现在源码中的710行</p>
<blockquote>源码地址：<a href="https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js" rel="nofollow noreferrer" target="_blank">https://github.com/v8/v8/blob...</a>
</blockquote>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="// In-place QuickSort algorithm.
// For short (length <= 22) arrays, insertion sort is used for efficiency." title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript"><span class="hljs-comment">// In-place QuickSort algorithm.</span>
<span class="hljs-comment">// For short (length &lt;= 22) arrays, insertion sort is used for efficiency.</span></code></pre>
<p>V8 引擎 sort 函数只给出了两种排序 <code>InsertionSort</code>和 <code>QuickSort</code>，<strong>数量小于等于22</strong>的数组使用 <code>InsertionSort</code>，比22大的数组则使用 <code>QuickSort</code>，有兴趣的可以看看具体算法实现。</p>
<blockquote>注意：不同的浏览器引擎可能算法实现并不同，我这里只是查看了V8引擎的算法实现，有兴趣的小伙伴可以查看下其他开源浏览器具体sort的算法实现。</blockquote>
<h3 id="articleHeader17">如何改进排序算法实现数字正确排序呢？</h3>
<p>对于要比较数字而非字符串，比较函数可以简单的以 a 减 b，如下的函数将会将数组升序排列，降序排序则使用b-a。</p>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="let compareNumbers= function (a, b) {
    return a - b;
}
let koala=[10, 20, 1, 2].sort(compareNumbers)

console.log(koala);
// [1 , 2 , 10 , 20]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript"><span class="hljs-keyword">let</span> compareNumbers= <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">a, b</span>) </span>{
    <span class="hljs-keyword">return</span> a - b;
}
<span class="hljs-keyword">let</span> koala=[<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>].sort(compareNumbers)

<span class="hljs-built_in">console</span>.log(koala);
<span class="hljs-comment">// [1 , 2 , 10 , 20]</span></code></pre>
<h2 id="articleHeader18">函数作为返回值输出</h2>
<p>返回一个函数，下面直接看两个例子来加深理解。</p>
<h3 id="articleHeader19">isType 函数</h3>
<p>我们知道在判断类型的时候可以通过<code>Object.prototype.toString.call</code> 来获取对应对象返回的字符串，比如：</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="let isString = obj => Object.prototype.toString.call( obj ) === '[object String]';

let isArray = obj => Object.prototype.toString.call( obj ) === '[object Array]';

let isNumber = obj => Object.prototype.toString.call( obj ) === '[object Number]';" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript"><span class="hljs-keyword">let</span> isString = <span class="hljs-function"><span class="hljs-params">obj</span> =&gt;</span> <span class="hljs-built_in">Object</span>.prototype.toString.call( obj ) === <span class="hljs-string">'[object String]'</span>;

<span class="hljs-keyword">let</span> isArray = <span class="hljs-function"><span class="hljs-params">obj</span> =&gt;</span> <span class="hljs-built_in">Object</span>.prototype.toString.call( obj ) === <span class="hljs-string">'[object Array]'</span>;

<span class="hljs-keyword">let</span> isNumber = <span class="hljs-function"><span class="hljs-params">obj</span> =&gt;</span> <span class="hljs-built_in">Object</span>.prototype.toString.call( obj ) === <span class="hljs-string">'[object Number]'</span>;</code></pre>
<p>可以发现上面三行代码有很多重复代码，只需要把具体的类型抽离出来就可以封装成一个判断类型的方法了，代码如下。</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="let isType = type => obj => {
  return Object.prototype.toString.call( obj ) === '[object ' + type + ']';
}

isType('String')('123');        // true
isType('Array')([1, 2, 3]);    // true
isType('Number')(123);            // true" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript"><span class="hljs-keyword">let</span> isType = <span class="hljs-function"><span class="hljs-params">type</span> =&gt;</span> obj =&gt; {
  <span class="hljs-keyword">return</span> <span class="hljs-built_in">Object</span>.prototype.toString.call( obj ) === <span class="hljs-string">'[object '</span> + type + <span class="hljs-string">']'</span>;
}

isType(<span class="hljs-string">'String'</span>)(<span class="hljs-string">'123'</span>);        <span class="hljs-comment">// true</span>
isType(<span class="hljs-string">'Array'</span>)([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]);    <span class="hljs-comment">// true</span>
isType(<span class="hljs-string">'Number'</span>)(<span class="hljs-number">123</span>);            <span class="hljs-comment">// true</span></code></pre>
<p>这里就是一个高阶函数，因为 isType 函数将 <code>obj =&gt; { ... }</code> 这一函数作为返回值输出。</p>
<h3 id="articleHeader20">add求和函数</h3>
<p>前言中的面试题，用 JS 实现一个无限累加的函数 add，示例如下：</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="add(1); // 1
add(1)(2);  // 3
add(1)(2)(3)； // 6" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript">add(<span class="hljs-number">1</span>); <span class="hljs-comment">// 1</span>
add(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>);  <span class="hljs-comment">// 3</span>
add(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>)； <span class="hljs-comment">// 6</span></code></pre>
<p>分析面试题的结构，都是将函数作为返回值输出，然后接收新的参数并进行计算。</p>
<p>我们知道打印函数时会自动调用 <code>toString()</code>方法（如果不知道的可以去看我的这篇文章），函数 add(a) 返回一个sum(b)函数，函数 sum() 中累加计算 a = a + b，只需要重写sum.toString()方法返回变量 a 就可以了。</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="function add(a) {
    function sum(b) { // 使用闭包
        a = a + b; // 累加
        return sum;
     }
     sum.toString = function() { // 重写toString()方法
        return a;
    }
     return sum; // 返回一个函数
}

add(1); // 1
add(1)(2);  // 3
add(1)(2)(3)； // 6" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">a</span>) </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sum</span>(<span class="hljs-params">b</span>) </span>{ <span class="hljs-comment">// 使用闭包</span>
        a = a + b; <span class="hljs-comment">// 累加</span>
        <span class="hljs-keyword">return</span> sum;
     }
     sum.toString = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-comment">// 重写toString()方法</span>
        <span class="hljs-keyword">return</span> a;
    }
     <span class="hljs-keyword">return</span> sum; <span class="hljs-comment">// 返回一个函数</span>
}

add(<span class="hljs-number">1</span>); <span class="hljs-comment">// 1</span>
add(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>);  <span class="hljs-comment">// 3</span>
add(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>)； <span class="hljs-comment">// 6</span></code></pre>
<h2 id="articleHeader21">如何自己创建高阶函数</h2>
<p>前面讲了语言中内置的各种高阶函数。知道了到底啊什么是高阶函数，有哪些类型的高阶函数。那么让我们<strong>自己创建一个高阶函数吧！</strong></p>
<p>假设 JavaScript 没有原生的<code> map </code>方法。 我们自己构建个类似map的高阶函数，从而创建我们自己的高阶函数。<br>假设我们有一个字符串数组，我们希望把它转换为整数数组，其中每个元素代表原始数组中字符串的长度。</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="const strArray=['JavaScript','PHP','JAVA','C','Python'];
function mapForEach(arr,fn){
    const newArray = [];
    for(let i = 0; i<arr.length;i++){
        newArray.push({
            fn(arr[i])
        );
    }
    return newArray;
}
const lenArray = mapForEach(strArray,function(item){
    return item.length;
});

console.log(lenArray);//[10,3,4,1,6]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="javascript hljs"><code class="JavaScript"><span class="hljs-keyword">const</span> strArray=[<span class="hljs-string">'JavaScript'</span>,<span class="hljs-string">'PHP'</span>,<span class="hljs-string">'JAVA'</span>,<span class="hljs-string">'C'</span>,<span class="hljs-string">'Python'</span>];
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mapForEach</span>(<span class="hljs-params">arr,fn</span>)</span>{
    <span class="hljs-keyword">const</span> newArray = [];
    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i&lt;arr.length;i++){
        newArray.push({
            fn(arr[i])
        );
    }
    <span class="hljs-keyword">return</span> newArray;
}
<span class="hljs-keyword">const</span> lenArray = mapForEach(strArray,<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">item</span>)</span>{
    <span class="hljs-keyword">return</span> item.length;
});

<span class="hljs-built_in">console</span>.log(lenArray);<span class="hljs-comment">//[10,3,4,1,6]</span></code></pre>
<h3 id="articleHeader22">代码分析讲解：</h3>
<p>我们创建了一个高阶函数 mapForEach ，它接受一个数组和一个回调函数 fn。 它循环遍历传入的数组，并在每次迭代时在 newArray.push 方法调用回调函数 fn 。</p>
<p>回调函数 fn 接收数组的当前元素并返回该元素的长度，该元素存储在 newArray 中。 for 循环完成后，newArray 被返回并赋值给 lenArray。</p>
<h2 id="articleHeader23">总结</h2>
<p>我们已经了解了高阶函数和一些内置的高阶函数，还学习了如何创建自己的高阶函数。简而言之，高阶函数是一个可以接收函数作为参数，甚至返回一个函数的函数。 它就像常规函数一样，只是多了接收和返回其他函数的附加能力，即参数和输出。</p>
<h3 id="articleHeader24">公众号技术栈路线</h3>
<p>大家好，我是koala，公众号「程序员成长指北」作者，这篇文章是【JS必知必会系列】的高阶函数讲解。目前在做一个node后端高级工程师进阶路线，加入我们一起学习吧！</p>
<p><span class="img-wrap"><img data-src="/img/bVbvd7y?w=1576&amp;h=800" src="/img/bVbvd7y?w=1576&amp;h=800" alt="16b8a3c3064ef334?w=1576&amp;h=800&amp;f=png&amp;s=330091" title="16b8a3c3064ef334?w=1576&amp;h=800&amp;f=png&amp;s=330091" style="cursor: pointer; display: inline;"></span></p>
<h3 id="articleHeader25">加入我们</h3>
<p><span class="img-wrap"><img data-src="/img/bVbtNje?w=940&amp;h=400" src="/img/bVbtNje?w=940&amp;h=400" alt="16b8a3d23a52b7d0?w=940&amp;h=400&amp;f=jpeg&amp;s=217901" title="16b8a3d23a52b7d0?w=940&amp;h=400&amp;f=jpeg&amp;s=217901" style="cursor: pointer; display: inline;"></span></p>

                </div>`
var markdown = turndownService.turndown(str)
console.log(markdown)