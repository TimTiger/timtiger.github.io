import{o as n,c as s,d as a}from"./app.b293b4f5.js";const t='{"title":"CSS @规则(at-rule)","description":"","frontmatter":{},"headers":[{"level":2,"title":"@charset","slug":"charset"},{"level":2,"title":"@import","slug":"import"},{"level":2,"title":"@media","slug":"media"},{"level":3,"title":"用法","slug":"用法"},{"level":3,"title":"语法","slug":"语法"},{"level":2,"title":"@supports","slug":"supports"},{"level":2,"title":"@keyframes","slug":"keyframes"},{"level":2,"title":"@page","slug":"page"},{"level":2,"title":"@font-face","slug":"font-face"}],"relativePath":"articles/stylesheet/css-at-rule.md","lastUpdated":1640306902934}',p={},e=a('<h1 id="css-规则-at-rule"><a class="header-anchor" href="#css-规则-at-rule" aria-hidden="true">#</a> CSS @规则(at-rule)</h1><p>css除了普通的选择器+声明块的规则外，还有一种@规则。用来描述样式使用的字符集、引入外部样式、条件判断等等。</p><h2 id="charset"><a class="header-anchor" href="#charset" aria-hidden="true">#</a> @charset</h2><p>定义样式表使用的字符集</p><div class="language-css"><pre><code>  <span class="token atrule"><span class="token rule">@charset</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">;</span></span>\n</code></pre></div><h2 id="import"><a class="header-anchor" href="#import" aria-hidden="true">#</a> @import</h2><p>告诉 CSS 引擎引入一个外部样式表. 第一个参数需要导入样式的地址。</p><div class="language-css"><pre><code>  @import <span class="token string">&quot;font.css&quot;</span>\n  @import <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;font.css&quot;</span><span class="token punctuation">)</span></span>\n</code></pre></div><p>后面可以跟support condition 和 media query list</p><div class="language-css"><pre><code>  @import <span class="token string">&quot;font.css&quot;</span> <span class="token function">supports</span><span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">)</span> print\n</code></pre></div><h2 id="media"><a class="header-anchor" href="#media" aria-hidden="true">#</a> @media</h2><h3 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><p>媒体查询（Media queries）非常实用，尤其是当你想要根据设备的大致类型（如打印设备与带屏幕的设备）或者特定的特征和设备参数（例如屏幕分辨率和浏览器视窗宽度）来修改网站或应用程序时。</p><p>媒体查询常被用于以下目的：</p><ul><li><p>有条件的通过 @media 和 @import at-rules 用CSS 装饰样式。 如：</p><div class="language-css"><pre><code>  <span class="token atrule"><span class="token rule">@media</span> screen</span> <span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre></div></li><li><p>用media=属性为style, link, source和其他HTML元素指定特定的媒体类型。如:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styles.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styles.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>print<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div></li><li><p>使用Window.matchMedia() 和MediaQueryList.addListener() 方法来测试和监控媒体状态。</p></li></ul><h3 id="语法"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><p>每条媒体查询语句都由一个可选的媒体类型和任意数量的媒体特性表达式构成。可以使用多种逻辑操作符合并多条媒体查询语句。媒体查询语句不区分大小写。</p><p>当媒体类型（如果指定）与在其上显示文档的设备匹配并且所有媒体功能表达式都计算为true时，媒体查询将计算为true。 涉及未知媒体类型的查询始终为false。</p><div class="language-css"><pre><code>  关键字  + 媒体类型<span class="token punctuation">(</span>all<span class="token punctuation">,</span>print<span class="token punctuation">,</span>screen<span class="token punctuation">,</span>speech<span class="token punctuation">)</span>  \n  <span class="token atrule"><span class="token rule">@media</span> screen</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n  关键字  + 媒体特性\n  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">hover</span><span class="token punctuation">:</span> hover<span class="token punctuation">)</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  //媒体特性必须用一对括号括起来\n  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre></div><ul><li><p>媒体类型 all、print、screen、speech</p></li><li><p>媒体特性 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries#media_features" target="_blank" rel="noopener noreferrer">链接</a></p></li><li><p>逻辑操作符 and、not、only、,、or(level4加的跟，是一个意思)</p></li></ul><div class="language-css"><pre><code>  <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">not</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span> //not是否定整条媒体查询\n  <span class="token atrule"><span class="token rule">@media</span> screen<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span> //<span class="token punctuation">,</span>链接多条媒体查询，任意一条媒体查询为true，则样式会被应用\n  <span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span> //only是为了兼容老浏览器，现在几乎不用了。\n</code></pre></div><h2 id="supports"><a class="header-anchor" href="#supports" aria-hidden="true">#</a> @supports</h2><p>您可以指定依赖于浏览器中的一个或多个特定的CSS功能的支持声明。这被称为特性查询。该规则可以放在代码的顶层，也可以嵌套在任何其他条件组规则中。</p><div class="language-css"><pre><code>  //关键字 + 条件语句\n  <span class="token atrule"><span class="token rule">@supports</span> <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n    <span class="token selector">div</span> <span class="token punctuation">{</span>\n      <span class="token property">display</span><span class="token punctuation">:</span> grid\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  \n  //可搭配not<span class="token punctuation">,</span>and<span class="token punctuation">,</span>or使用\n  <span class="token atrule"><span class="token rule">@supports</span> <span class="token keyword">not</span> <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">)</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token atrule"><span class="token rule">@supports</span>  <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">)</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token atrule"><span class="token rule">@supports</span>  <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">)</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre></div><h2 id="keyframes"><a class="header-anchor" href="#keyframes" aria-hidden="true">#</a> @keyframes</h2><p>关键帧 @keyframes 规则通过在动画序列中定义关键帧（或waypoints）的样式来控制CSS动画序列中的中间步骤。和 转换 transition 相比，关键帧 keyframes 可以控制动画序列的中间步骤。</p><div class="language-css"><pre><code>  <span class="token atrule"><span class="token rule">@keyframes</span> slidein</span> <span class="token punctuation">{</span>\n    <span class="token selector">from</span> <span class="token punctuation">{</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0%<span class="token punctuation">)</span><span class="token punctuation">;</span> \n    <span class="token punctuation">}</span>\n\n    <span class="token selector">to</span> <span class="token punctuation">{</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre></div><h2 id="page"><a class="header-anchor" href="#page" aria-hidden="true">#</a> @page</h2><p>@page 规则用于在打印文档时修改某些CSS属性。你不能用@page规则来修改所有的CSS属性，而是只能修改margin,orphans,widow 和 page breaks of the document。对其他属性的修改是无效的。</p><div class="language-css"><pre><code>  <span class="token atrule"><span class="token rule">@page</span></span> <span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 1cm<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token atrule"><span class="token rule">@page</span> <span class="token punctuation">:</span>first</span> <span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 2cm<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre></div><h2 id="font-face"><a class="header-anchor" href="#font-face" aria-hidden="true">#</a> @font-face</h2><p>这是一个叫做@font-face 的CSS @规则 ，它允许网页开发者为其网页指定在线字体。 通过这种作者自备字体的方式，@font-face 可以消除对用户电脑字体的依赖。 @font-face 不仅可以放在在CSS的最顶层, 也可以放在 @规则 的 条件规则组 中。</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Web Font Sample<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen, print<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n    <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>\n      <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Bitstream Vera Serif Bold&quot;</span><span class="token punctuation">;</span>\n      <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;https://developer.mozilla.org/@api/deki/files/2934/=VeraSeBd.ttf&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">body</span> <span class="token punctuation">{</span> <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Bitstream Vera Serif Bold&quot;</span><span class="token punctuation">,</span> serif <span class="token punctuation">}</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n  This is Bitstream Vera Serif Bold.\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',33);p.render=function(a,t,p,o,c,l){return n(),s("div",null,[e])};export default p;export{t as __pageData};
