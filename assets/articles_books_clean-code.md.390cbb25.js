import{o as e,c as a,d as h}from"./app.dc8a24b8.js";const r='{"title":"《代码整洁之道》","description":"","frontmatter":{},"headers":[{"level":2,"title":"代码保持整洁，如何说服产品和Leader争取时间去保持整洁？","slug":"代码保持整洁，如何说服产品和leader争取时间去保持整洁？"},{"level":2,"title":"有意义的命名","slug":"有意义的命名"},{"level":3,"title":"名副其实","slug":"名副其实"},{"level":3,"title":"避免误导","slug":"避免误导"},{"level":3,"title":"做有意义的区分","slug":"做有意义的区分"},{"level":3,"title":"使用读得出来的名称","slug":"使用读得出来的名称"},{"level":3,"title":"使用可搜索的名称","slug":"使用可搜索的名称"},{"level":3,"title":"类名","slug":"类名"},{"level":3,"title":"方法名","slug":"方法名"},{"level":2,"title":"函数","slug":"函数"},{"level":3,"title":"短小","slug":"短小"},{"level":3,"title":"只做一件事","slug":"只做一件事"},{"level":3,"title":"每个函数一个抽象层级","slug":"每个函数一个抽象层级"},{"level":3,"title":"Switch语句","slug":"switch语句"},{"level":3,"title":"使用具有描述性的名称","slug":"使用具有描述性的名称"},{"level":3,"title":"函数参数","slug":"函数参数"},{"level":3,"title":"无副作用","slug":"无副作用"},{"level":3,"title":"分隔指令与询问","slug":"分隔指令与询问"},{"level":3,"title":"使用异常代替返回错误码","slug":"使用异常代替返回错误码"},{"level":3,"title":"别重复自己","slug":"别重复自己"},{"level":2,"title":"注释","slug":"注释"},{"level":2,"title":"格式","slug":"格式"},{"level":2,"title":"对象","slug":"对象"},{"level":2,"title":"错误处理","slug":"错误处理"},{"level":2,"title":"边界","slug":"边界"},{"level":2,"title":"单元测试","slug":"单元测试"},{"level":2,"title":"类","slug":"类"},{"level":2,"title":"系统","slug":"系统"},{"level":2,"title":"迭代","slug":"迭代"}],"relativePath":"articles/books/clean-code.md","lastUpdated":1649347171145}',l={},d=h('<h1 id="《代码整洁之道》"><a class="header-anchor" href="#《代码整洁之道》" aria-hidden="true">#</a> 《代码整洁之道》</h1><h2 id="代码保持整洁，如何说服产品和leader争取时间去保持整洁？"><a class="header-anchor" href="#代码保持整洁，如何说服产品和leader争取时间去保持整洁？" aria-hidden="true">#</a> 代码保持整洁，如何说服产品和Leader争取时间去保持整洁？</h2><p>混乱的代码只会拖累自己，耽误更多的时间。要想做得快，代码就得写的好。</p><h2 id="有意义的命名"><a class="header-anchor" href="#有意义的命名" aria-hidden="true">#</a> 有意义的命名</h2><h3 id="名副其实"><a class="header-anchor" href="#名副其实" aria-hidden="true">#</a> 名副其实</h3><p>例如，一个消息数组命名 bad: list better: messages</p><h3 id="避免误导"><a class="header-anchor" href="#避免误导" aria-hidden="true">#</a> 避免误导</h3><p>例如：一个国家名称与简称的Map对象。 bad: countries good: countryByCodeMap</p><h3 id="做有意义的区分"><a class="header-anchor" href="#做有意义的区分" aria-hidden="true">#</a> 做有意义的区分</h3><p>如爸爸妈妈女儿三个变量命名 bad: p1, p2, p3 good: father, mother, daughter</p><h3 id="使用读得出来的名称"><a class="header-anchor" href="#使用读得出来的名称" aria-hidden="true">#</a> 使用读得出来的名称</h3><p>就别自己创造一些无法读出来的单词</p><h3 id="使用可搜索的名称"><a class="header-anchor" href="#使用可搜索的名称" aria-hidden="true">#</a> 使用可搜索的名称</h3><p>假设你命名为e, 搜索这个变量的时候会搜索到太多无关的地方</p><h3 id="类名"><a class="header-anchor" href="#类名" aria-hidden="true">#</a> 类名</h3><p>类名应该是名词或者名词短语。例如Customer,WikiPage等。应该避免使用Manager,Processor, Data 或Info这样的类名。类名不应当是动词</p><h3 id="方法名"><a class="header-anchor" href="#方法名" aria-hidden="true">#</a> 方法名</h3><p>方法名应当是动词或者动词短语，如deletePage,update或save。</p><h2 id="函数"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="短小"><a class="header-anchor" href="#短小" aria-hidden="true">#</a> 短小</h3><p>作者推荐120行以内最佳。</p><h3 id="只做一件事"><a class="header-anchor" href="#只做一件事" aria-hidden="true">#</a> 只做一件事</h3><p>你懂的</p><h3 id="每个函数一个抽象层级"><a class="header-anchor" href="#每个函数一个抽象层级" aria-hidden="true">#</a> 每个函数一个抽象层级</h3><p>大概意思就是一个函数里面做的事情是一个层面的事。比如修改UI就只做修改UI，你别把字符串拼接的代码写在一起。修改UI和拼接字符串是两个不同层级的事。</p><p>然后代码最好是自订向下按调用顺序排列</p><h3 id="switch语句"><a class="header-anchor" href="#switch语句" aria-hidden="true">#</a> Switch语句</h3><p>一但用到Switch语句实际上就表明了这个函数做了不止一件事。不过要确保每个case分支都是干的抽象层级相同的事情。比如三个case跳转到三个不同的界面，执行的都是跳转界面操作。</p><h3 id="使用具有描述性的名称"><a class="header-anchor" href="#使用具有描述性的名称" aria-hidden="true">#</a> 使用具有描述性的名称</h3><p>比如删除账号的响应函数。delete就不够好，而deleteAccount就描述得很清楚了。</p><h3 id="函数参数"><a class="header-anchor" href="#函数参数" aria-hidden="true">#</a> 函数参数</h3><p>没有参数最佳，1个参数次之，2个参数可以接受，最多不要超过三个参数。参数传一个布尔值是愚蠢的，明摆着就是在说此函数至少干了两件事。</p><h3 id="无副作用"><a class="header-anchor" href="#无副作用" aria-hidden="true">#</a> 无副作用</h3><p>做的事基本和函数名吻合，不要多做事也不要少做事。比如你在deleteAccount的函数里刷新了界面就是事情做多了，有副作用。</p><h3 id="分隔指令与询问"><a class="header-anchor" href="#分隔指令与询问" aria-hidden="true">#</a> 分隔指令与询问</h3><p>大致意思就是一个函数要么就是纯回答问题，要么就是纯执行指令。不要两件事都干</p><h3 id="使用异常代替返回错误码"><a class="header-anchor" href="#使用异常代替返回错误码" aria-hidden="true">#</a> 使用异常代替返回错误码</h3><p>当函数执行错误的时候尽量抛出异常，而不是return一个错误码。</p><h3 id="别重复自己"><a class="header-anchor" href="#别重复自己" aria-hidden="true">#</a> 别重复自己</h3><p>就是一样的代码别拷贝来拷贝去的搞的到处都是。</p><h2 id="注释"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>好的代码一眼就能看懂，不需要注释。但也不能盲目不写注释。总之要把自己放到读者的角度，一眼能看懂代码。</p><h2 id="格式"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2><p>使用大家常用的格式化工具即可，团队可以指定自己的格式和规则</p><h2 id="对象"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2><p>参数过多的时候，使用对象作为参数。</p><h2 id="错误处理"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h2><p>定义错误基类，让各种错误在基类上去定义子类</p><h2 id="边界"><a class="header-anchor" href="#边界" aria-hidden="true">#</a> 边界</h2><p>使用第三方代码时应该做好包装，不要让第三方代码在项目里到处都是。</p><h2 id="单元测试"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> 单元测试</h2><p>TDD测试驱动开发，先把测试用例都枚举了，再开发代码</p><h2 id="类"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h2><p>尽量短小精悍，高内聚低耦合，不可盲目在项目里使用太多的类和方法。</p><h2 id="系统"><a class="header-anchor" href="#系统" aria-hidden="true">#</a> 系统</h2><p>将系统的构造和使用分开</p><h2 id="迭代"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h2><p>不停的迭代自己的程序</p>',58);l.render=function(h,r,l,i,t,s){return e(),a("div",null,[d])};export default l;export{r as __pageData};
