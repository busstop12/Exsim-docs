import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as o,a as e,b as a,f as r,d as p,r as c}from"./app.4c414db3.js";const i="/assets/reCaptcha1.4f4f6621.png",d="/assets/reCaptcha2.19cb3b6d.png",l="/assets/reCaptcha3.3d80d43f.png",u={},h=e("h1",{id:"how-to-use-recaptcha",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-use-recaptcha","aria-hidden":"true"},"#"),a(" How to use reCaptcha")],-1),m=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),a(" Overview")],-1),v={href:"https://www.google.com/recaptcha/about/",target:"_blank",rel:"noopener noreferrer"},k=p('<p>\u5728\u5B98\u7F51\u4E2D\u70B9\u51FB<code>v3 Admin Console</code>\uFF0C\u5EFA\u7ACB\u4E00\u4E2A\u65B0\u7F51\u7AD9:</p><p><img src="'+i+'" alt="alt reCaptcha1" title="reCaptcha\u5B98\u7F51"></p><p>\u5982\u56FE\u586B\u5165\u6807\u7B7E\u3001\u57DF\u540D\u3001\u7C7B\u578B:</p><p><img src="'+d+'" alt="alt reCaptcha2" title="\u5EFA\u7ACB\u4E00\u4E2A\u65B0\u7F51\u7AD9"></p><p>\u5EFA\u7ACB\u5B8C\u6210\u540E\uFF0C\u5C06\u4F1A\u5F97\u5230<code>site key</code>\u548C<code>private key</code>:</p><p><img src="'+l+`" alt="alt reCaptcha3" title="key"></p><div class="custom-container danger"><p class="custom-container-title">Warning</p><p>\u5FC5\u987B\u4E25\u683C\u4FDD\u5BC6private key</p></div><h2 id="\u524D\u7AEF\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u4F7F\u7528" aria-hidden="true">#</a> \u524D\u7AEF\u4F7F\u7528</h2><h3 id="\u5728\u7F51\u9875\u4E2D\u52A0\u5165recaptcha" tabindex="-1"><a class="header-anchor" href="#\u5728\u7F51\u9875\u4E2D\u52A0\u5165recaptcha" aria-hidden="true">#</a> \u5728\u7F51\u9875\u4E2D\u52A0\u5165reCaptcha</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> 
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>g-recaptcha<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-sitekey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>site-key<span class="token punctuation">&quot;</span></span> 
    <span class="token attr-name">data-callback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleReCaptcha<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>data-sitekey</code>\u5C5E\u6027\u4E2D\u9700\u8981\u586B\u5165<code>site key</code>\u3002<code>data-callback</code>\u4E3A\u9A8C\u8BC1\u6210\u529F\u65F6\u7684\u56DE\u8C03\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">handleReCaptcha</span><span class="token punctuation">(</span><span class="token parameter">token</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// The g-recaptcha-response token</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728js\u6216\u8005\u8868\u5355\u4E2D\u53EF\u4EE5\u62FF\u5230\u9A8C\u8BC1\u6210\u529F\u65F6\u7684<code>g-recaptcha-response token</code></p><p>\u5728\u8BF7\u6C42\u9700\u8981\u9A8C\u8BC1\u7801\u7684api\u65F6\uFF0C\u8BF7\u6C42\u4E2D\u643A\u5E26\u6B64\u5B57\u6BB5\uFF0C\u4EA4\u7ED9\u540E\u7AEF\u8FDB\u884C\u6821\u9A8C\u3002</p><h3 id="apis" tabindex="-1"><a class="header-anchor" href="#apis" aria-hidden="true">#</a> APIs</h3><p>\u53C2\u8003 https://developers.google.com/recaptcha/docs/display</p><h2 id="\u540E\u7AEF\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u540E\u7AEF\u6821\u9A8C" aria-hidden="true">#</a> \u540E\u7AEF\u6821\u9A8C</h2><p>\u540E\u7AEF\u63A5\u6536\u5230\u9700\u8981\u8FDB\u884C\u6821\u9A8C\u7684\u8BF7\u6C42\u540E\uFF0C\u5411reCaptcha\u8FDB\u884C\u6821\u9A8C\u3002</p><h3 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> Request</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST https://www.recaptcha.net/recaptcha/api/siteverify
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="request-body" tabindex="-1"><a class="header-anchor" href="#request-body" aria-hidden="true">#</a> Request Body</h3><table><thead><tr><th>POST Parameter</th><th>Description</th></tr></thead><tbody><tr><td>secret</td><td>Required. The shared key between your site and reCAPTCHA.</td></tr><tr><td>response</td><td>Required. The user response token provided by the reCAPTCHA client-side integration on your site.</td></tr><tr><td>remoteip</td><td>Optional. The user&#39;s IP address.</td></tr></tbody></table><h3 id="reponse" tabindex="-1"><a class="header-anchor" href="#reponse" aria-hidden="true">#</a> Reponse</h3><p>The response is a JSON object:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;success&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>|<span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;challenge_ts&quot;</span><span class="token operator">:</span> timestamp<span class="token punctuation">,</span>  <span class="token comment">// timestamp of the challenge load (ISO format yyyy-MM-dd&#39;T&#39;HH:mm:ssZZ)</span>
  <span class="token property">&quot;hostname&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>         <span class="token comment">// the hostname of the site where the reCAPTCHA was solved</span>
  <span class="token property">&quot;error-codes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>...<span class="token punctuation">]</span>        <span class="token comment">// optional</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="error-code-reference" tabindex="-1"><a class="header-anchor" href="#error-code-reference" aria-hidden="true">#</a> Error code reference</h3><table><thead><tr><th>Error code</th><th>Description</th></tr></thead><tbody><tr><td>missing-input-secret</td><td>The secret parameter is missing.</td></tr><tr><td>invalid-input-secret</td><td>The secret parameter is invalid or malformed.</td></tr><tr><td>missing-input-response</td><td>The response parameter is missing.</td></tr><tr><td>invalid-input-response</td><td>The response parameter is invalid or malformed.</td></tr><tr><td>bad-request</td><td>The request is invalid or malformed.</td></tr><tr><td>timeout-or-duplicate</td><td>The response is no longer valid: either is too old or has been used previously.</td></tr></tbody></table>`,27);function b(g,f){const s=c("ExternalLinkIcon");return n(),o("div",null,[h,m,e("p",null,[a("Google reCaptcha\u5B98\u7F51\uFF1A"),e("a",v,[a("reCaptcha"),r(s)])]),k])}const q=t(u,[["render",b],["__file","recaptcha.html.vue"]]);export{q as default};