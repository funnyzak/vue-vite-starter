System.register(["./_plugin-vue_export-helper-legacy.9d5929c9.js","./index-legacy.4aa21dc1.js","./main-legacy.1b582617.js"],(function(t,e){"use strict";var n,a,s,r,c,o,u,l,i,d,p,m,y,h,f,v,x;return{setters:[t=>{n=t.j,a=t.r,s=t.O,r=t.l,c=t.C,o=t.H,u=t.J,l=t.u,i=t.I,d=t.b,p=t.F,m=t.K,y=t._},t=>{h=t.s,f=t.c},t=>{v=t.u,x=t.g}],execute:function(){const{default_headers:e}=f,g=t=>{const{url:n,method:a,params:s,data:r,headersType:c,responseType:o}=t;return h({url:n,method:a,params:s,data:r,responseType:o,headers:{"Content-Type":c||e}})};async function T(t){const e=await g({method:"GET",...t});return e.data||e}async function b(t){const e=await g({method:"POST",...t});return e.data||e}async function k(t){const e=await g({method:"DELETE",...t});return e.data||e}async function w(t){const e=await g({method:"PUT",...t});return e.data||e}const _={get:T,post:b,delete:k,put:w},C={class:"mt-10 text-center space-y-2 space-x-2 flex-col"},j={class:"mx-auto"},E={class:"flex-row space-x-5"},P=o("input",{type:"text"},null,-1),U=n({name:"UserPost",inheritAttrs:!1}),O=n({...U,setup(t){const{t:e}=x(),{back:n}=v();let y=a([]);function h(){_.get({url:"/posts"}).then((t=>{y.value=t}))}return s((()=>{h()})),(t,a)=>(r(),c("section",C,[o("div",j,[u("这是文章中心。 "),o("button",{onClick:a[0]||(a[0]=()=>{l(n)()})},i(l(e)("common.back")),1)]),o("div",E,[o("button",{onClick:h},"加载数据"),o("button",{onClick:a[1]||(a[1]=()=>{d(y)?y.value=[]:y=[]})},"清除数据"),P]),o("ul",null,[(r(!0),c(p,null,m(l(y),((t,e)=>(r(),c("li",{key:e},i(t.title),1)))),128))])]))}});t("default",y(O,[["__file","/home/runner/work/vue-starter/vue-starter/src/views/User/Post.vue"]]))}}}));
