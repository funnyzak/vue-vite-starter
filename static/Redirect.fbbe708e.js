import{j as n,u as p,l as _,C as i,_ as u}from"./_plugin-vue_export-helper.fbc90c70.js";import{u as l}from"./main.c5f164c3.js";const m=n({__name:"Redirect",setup(d){const{currentRoute:c,replace:a}=l(),{params:e,query:s}=p(c),{path:r,_redirect_type:o="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return a(o==="name"?{name:t,query:s,params:e}:{path:t.startsWith("/")?t:"/"+t,query:s}),(f,h)=>(_(),i("div"))}}),v=u(m,[["__file","/home/runner/work/vue-starter/vue-starter/src/views/Redirect/Redirect.vue"]]);export{v as default};