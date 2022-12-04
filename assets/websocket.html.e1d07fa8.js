import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,d as e}from"./app.87dae731.js";const o={},p=e(`<h1 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> websocket</h1><h2 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h2><p>/edit</p><h2 id="onopen" tabindex="-1"><a class="header-anchor" href="#onopen" aria-hidden="true">#</a> onOpen</h2><h3 id="param" tabindex="-1"><a class="header-anchor" href="#param" aria-hidden="true">#</a> param</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;utoken&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> response</h3><p>successfully connected</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;opcode&quot;</span><span class="token operator">:</span><span class="token number">-1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>unauthorized</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">401</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;unauthorized&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;opcode&quot;</span><span class="token operator">:</span><span class="token number">-1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="onmessage" tabindex="-1"><a class="header-anchor" href="#onmessage" aria-hidden="true">#</a> onMessage</h2><h3 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> message</h3><p>save a cell</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;opcode&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;sheetId&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;row&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;col&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;format&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sender&quot;</span><span class="token operator">:</span><span class="token string">&quot;xxx&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>add sheet</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;opcode&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token string">&quot;sheet1&quot;</span><span class="token punctuation">,</span><span class="token comment">//\u76F4\u63A5\u653E\u65B0\u7684\u5DE5\u4F5C\u8868\u7684\u540D\u79F0</span>
    <span class="token property">&quot;sender&quot;</span><span class="token operator">:</span><span class="token string">&quot;xxx&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>delete sheet</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;opcode&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span><span class="token comment">//\u653E\u8981\u5220\u9664\u7684\u5DE5\u4F5C\u8868ID\uFF0C\u6CE8\u610F\u9700\u8981\u662F\u6570\u5B57\u5B57\u7B26\u4E32</span>
    <span class="token property">&quot;sender&quot;</span><span class="token operator">:</span><span class="token string">&quot;xxx&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>modify sheet name</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;opcode&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;sheetId&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sheetName&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sender&quot;</span><span class="token operator">:</span><span class="token string">&quot;xxx&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;opcode&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sender&quot;</span><span class="token operator">:</span><span class="token string">&quot;xxx&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-1" tabindex="-1"><a class="header-anchor" href="#response-1" aria-hidden="true">#</a> response</h3><p>\u6210\u529F\u53D1\u9001\u5230\u670D\u52A1\u5668\u5E76\u8F6C\u53D1\u7ED9\u5176\u4ED6\u4F1A\u8BDD\uFF0Copcode=-1\u8868\u793A\u670D\u52A1\u5668\u53D1\u51FA\u7684\u6D88\u606F\uFF0C\u5176\u4ED6\u662F\u76F4\u63A5\u8F6C\u53D1\u5BA2\u6237\u7AEF\u53D1\u6765\u7684\u6D88\u606F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;opcode&quot;</span><span class="token operator">:</span><span class="token number">-1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53D1\u9001\u7684\u6D88\u606F\u683C\u5F0F\u6709\u8BEF\uFF0C\u6CA1\u6709\u6210\u529F\u89E3\u6790JSON</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">400</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;bad request&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;opcode&quot;</span><span class="token operator">:</span><span class="token number">-1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>unauthorized</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">401</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;unauthorized&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;opcode&quot;</span><span class="token operator">:</span><span class="token number">-1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CA1\u6709\u5199\u7684\u6743\u9650</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">401</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;unauthorized&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;opcode&quot;</span><span class="token operator">:</span><span class="token number">-1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="onclose" tabindex="-1"><a class="header-anchor" href="#onclose" aria-hidden="true">#</a> onClose</h2><p>\u5173\u95ED\u8FDE\u63A5</p>`,33),t=[p];function l(c,r){return n(),a("div",null,t)}const d=s(o,[["render",l],["__file","websocket.html.vue"]]);export{d as default};