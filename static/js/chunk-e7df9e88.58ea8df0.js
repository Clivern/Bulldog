(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7df9e88"],{"44e7":function(t,e,o){var n=o("861d"),a=o("c6b6"),r=o("b622"),i=r("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==a(t))}},"5b81":function(t,e,o){"use strict";var n=o("23e7"),a=o("da84"),r=o("c65b"),i=o("e330"),s=o("1d80"),l=o("1626"),u=o("44e7"),c=o("577e"),v=o("dc4a"),p=o("ad6d"),d=o("0cb2"),f=o("b622"),h=o("c430"),m=f("replace"),g=RegExp.prototype,_=a.TypeError,b=i(p),x=i("".indexOf),y=i("".replace),w=i("".slice),C=Math.max,k=function(t,e,o){return o>t.length?-1:""===e?o:x(t,e,o)};n({target:"String",proto:!0},{replaceAll:function(t,e){var o,n,a,i,p,f,$,S,E,O=s(this),H=0,M=0,P="";if(null!=t){if(o=u(t),o&&(n=c(s("flags"in g?t.flags:b(t))),!~x(n,"g")))throw _("`.replaceAll` does not allow non-global regexes");if(a=v(t,m),a)return r(a,t,O,e);if(h&&o)return y(c(O),t,e)}i=c(O),p=c(t),f=l(e),f||(e=c(e)),$=p.length,S=C(1,$),H=k(i,p,0);while(-1!==H)E=f?c(e(p,H,i)):d(p,i,H,[],void 0,e),P+=w(i,M,H)+E,M=H+$,H=k(i,p,H+S);return M<i.length&&(P+=w(i,M)),P}})},"6b36":function(t,e,o){"use strict";o("967f")},8578:function(t,e,o){},"967f":function(t,e,o){},eb5a:function(t,e,o){"use strict";o("8578")},f4a9:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home_page"},[o("br"),t._m(0),o("div",{staticClass:"columns editor"},[o("div",{staticClass:"column is-three-fifths"},[o("codemirror",{attrs:{options:t.cmOption},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-full editor-footer"},[o("b-field",{attrs:{grouped:""}},[o("b-field",[o("b-select",{attrs:{placeholder:"Select Language"},on:{input:function(e){return t.onChange()}},model:{value:t.form.lang,callback:function(e){t.$set(t.form,"lang",e)},expression:"form.lang"}},[o("option",{attrs:{value:"php"}},[t._v("PHP")]),o("option",{attrs:{value:"go"}},[t._v("Go")]),o("option",{attrs:{value:"java"}},[t._v("Java")]),o("option",{attrs:{value:"python"}},[t._v("Python")]),o("option",{attrs:{value:"ruby"}},[t._v("Ruby")]),o("option",{attrs:{value:"rust"}},[t._v("Rust")])])],1),"php"==t.form.lang?[o("b-field",[o("b-select",{attrs:{placeholder:"Select Version"},model:{value:t.form.version,callback:function(e){t.$set(t.form,"version",e)},expression:"form.version"}},[o("option",{attrs:{value:"7.0"}},[t._v("7.0")]),o("option",{attrs:{value:"7.1"}},[t._v("7.1")]),o("option",{attrs:{value:"7.2"}},[t._v("7.2")]),o("option",{attrs:{value:"7.3"}},[t._v("7.3")]),o("option",{attrs:{value:"7.4"}},[t._v("7.4")]),o("option",{attrs:{value:"8.0"}},[t._v("8.0")]),o("option",{attrs:{value:"8.1"}},[t._v("8.1")])])],1)]:t._e(),"go"==t.form.lang?[o("b-field",[o("b-select",{attrs:{placeholder:"Select Version"},model:{value:t.form.version,callback:function(e){t.$set(t.form,"version",e)},expression:"form.version"}},[o("option",{attrs:{value:"1.8"}},[t._v("1.8")]),o("option",{attrs:{value:"1.9"}},[t._v("1.9")]),o("option",{attrs:{value:"1.10"}},[t._v("1.10")]),o("option",{attrs:{value:"1.11"}},[t._v("1.11")]),o("option",{attrs:{value:"1.12"}},[t._v("1.12")]),o("option",{attrs:{value:"1.13"}},[t._v("1.13")]),o("option",{attrs:{value:"1.14"}},[t._v("1.14")]),o("option",{attrs:{value:"1.15"}},[t._v("1.15")]),o("option",{attrs:{value:"1.16"}},[t._v("1.16")]),o("option",{attrs:{value:"1.17"}},[t._v("1.17")])])],1)]:t._e(),"java"==t.form.lang?[o("b-field",[o("b-select",{attrs:{placeholder:"Select Version"},model:{value:t.form.version,callback:function(e){t.$set(t.form,"version",e)},expression:"form.version"}},[o("option",{attrs:{value:"10.0"}},[t._v("10.0")]),o("option",{attrs:{value:"11.0"}},[t._v("11.0")]),o("option",{attrs:{value:"12.0"}},[t._v("12.0")]),o("option",{attrs:{value:"13.0"}},[t._v("13.0")]),o("option",{attrs:{value:"14.0"}},[t._v("14.0")]),o("option",{attrs:{value:"15.0"}},[t._v("15.0")]),o("option",{attrs:{value:"16.0"}},[t._v("16.0")]),o("option",{attrs:{value:"17.0"}},[t._v("17.0")])])],1)]:t._e(),"python"==t.form.lang?[o("b-field",[o("b-select",{attrs:{placeholder:"Select Version"},model:{value:t.form.version,callback:function(e){t.$set(t.form,"version",e)},expression:"form.version"}},[o("option",{attrs:{value:"2.7"}},[t._v("2.7")]),o("option",{attrs:{value:"3"}},[t._v("3")]),o("option",{attrs:{value:"3.6"}},[t._v("3.6")]),o("option",{attrs:{value:"3.7"}},[t._v("3.7")]),o("option",{attrs:{value:"3.8"}},[t._v("3.8")]),o("option",{attrs:{value:"3.9"}},[t._v("3.9")])])],1)]:t._e(),"ruby"==t.form.lang?[o("b-field",[o("b-select",{attrs:{placeholder:"Select Version"},model:{value:t.form.version,callback:function(e){t.$set(t.form,"version",e)},expression:"form.version"}},[o("option",{attrs:{value:"2.6"}},[t._v("2.6")]),o("option",{attrs:{value:"2.6.1"}},[t._v("2.6.1")]),o("option",{attrs:{value:"2.6.2"}},[t._v("2.6.2")]),o("option",{attrs:{value:"2.6.3"}},[t._v("2.6.3")]),o("option",{attrs:{value:"2.6.4"}},[t._v("2.6.4")]),o("option",{attrs:{value:"2.6.5"}},[t._v("2.6.5")]),o("option",{attrs:{value:"2.6.6"}},[t._v("2.6.6")]),o("option",{attrs:{value:"2.6.7"}},[t._v("2.6.7")]),o("option",{attrs:{value:"2.6.8"}},[t._v("2.6.8")]),o("option",{attrs:{value:"2.6.9"}},[t._v("2.6.9")]),o("option",{attrs:{value:"2.7.0"}},[t._v("2.7.0")]),o("option",{attrs:{value:"2.7.1"}},[t._v("2.7.1")]),o("option",{attrs:{value:"2.7.3"}},[t._v("2.7.3")]),o("option",{attrs:{value:"2.7.4"}},[t._v("2.7.4")]),o("option",{attrs:{value:"2.7.5"}},[t._v("2.7.5")]),o("option",{attrs:{value:"3.0.0"}},[t._v("3.0.0")])])],1)]:t._e(),"rust"==t.form.lang?[o("b-field",[o("b-select",{attrs:{placeholder:"Select Version"},model:{value:t.form.version,callback:function(e){t.$set(t.form,"version",e)},expression:"form.version"}},[o("option",{attrs:{value:"1.54.0"}},[t._v("1.54.0")]),o("option",{attrs:{value:"1.55.0"}},[t._v("1.55.0")]),o("option",{attrs:{value:"1.56.0"}},[t._v("1.56.0")]),o("option",{attrs:{value:"1.57.0"}},[t._v("1.57.0")])])],1)]:t._e(),o("b-field",[o("b-button",{attrs:{type:"is-warning"},on:{click:function(e){return t.runCode()}}},[t._v("Run")])],1),o("b-field",[o("b-button",{attrs:{type:"is-warning"},on:{click:function(e){return t.shareCode()}}},[t._v("Share")])],1)],2)],1)])],1),o("div",{staticClass:"column"},[o("pre",{staticStyle:{"min-height":"300px"}},[t._v(t._s(t.output))])])]),o("br"),o("br"),t._m(1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-full logo"},[n("a",{attrs:{href:"/"}},[n("img",{attrs:{alt:"logo",src:o("cf05"),width:"130"}})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-full copyright"},[t._v(" Powered by "),o("a",{attrs:{href:"https://clivern.com/",target:"_blank",rel:"noopener"}},[t._v(" Clivern")]),o("br")])])}],r=(o("ac1f"),o("5319"),o("5b81"),o("8f94")),i=(o("4ff4"),o("b18e"),o("4ba6"),o("db91"),o("8536"),o("44d5"),o("0176"),{name:"home_page",components:{codemirror:r["codemirror"]},data:function(){return{form:{lang:"python",version:""},loader:{isFullPage:!0,ref:null},cmOption:{tabSize:4,styleActiveLine:!0,lineNumbers:!0,line:!0,mode:"text/x-go",theme:"hopscotch"},code:"",output:"Hello, world!"}},methods:{loading:function(){this.loader.ref=this.$buefy.loading.open({container:this.loader.isFullPage?null:this.$refs.element.$el})},runCode:function(){var t=this;this.output="Sit tight while we run your code ...",this.loading(),this.$store.dispatch("api/post",{uri:"/api/v1/execute",request:{content:this.code,language:this.form.lang,version:this.form.version}}).then((function(e){var o=setInterval((function(){t.$store.dispatch("api/get",{uri:"/api/v1/task/"+e.data.id}).then((function(e){var n=e.data.status;"SUCCEEDED"==n&&(t.output=e.data.result.output,t.output+="\n\n----\n",null!=e.data.result.build_time&&(t.output+="Build Time: "+e.data.result.build_time+" Milliseconds\n"),null!=e.data.result.execution_time&&(t.output+="Execution Time: "+e.data.result.execution_time+" Milliseconds\n"),t.output+="\n",t.loader.ref.close(),clearInterval(o)),"FAILED"==n&&(t.output=e.data.result.output,t.output+="\n",t.loader.ref.close(),clearInterval(o))}),(function(e){t.output=e.response.data.errorMessage,t.loader.ref.close()}))}),2e3)}),(function(e){t.output=e.response.data.errorMessage,t.loader.ref.close()}))},shareCode:function(){var t=this;this.output="Sit tight while we store your code ...",this.loading(),this.$store.dispatch("api/post",{uri:"/api/v1/code",request:{content:this.code,language:this.form.lang,version:this.form.version}}).then((function(e){var o=e.data.slug,n=e.data.token;localStorage.setItem("item_"+o+"_token",n),t.loader.ref.close(),t.$router.push("/p/"+o)}),(function(e){t.output="",t.$buefy.toast.open({message:e.response.data.errorMessage,type:"is-danger"}),t.loader.ref.close()}))},onChange:function(){var t=window.location.href.replaceAll(/\?lang=(.)+/g,"");window.location.href=t+"?lang="+this.form.lang,location.reload()},resetEditor:function(){var t=this.$route.query.lang||this.form.lang,e=["java","php","python","ruby","go","rust"];this.output="Hello, world!",-1!=e.indexOf(t)&&(this.form.lang=t),"java"==this.form.lang&&(this.form.version="10.0",this.code='// You can edit this code!\n// Click here and start typing...\n\npublic class Main {\n\n    /**\n     * @param args The command line arguments.\n     **/\n    public static void main(String []args) {\n        System.out.println("Hello, world!");\n    }\n}\n',this.cmOption.mode="text/x-java"),"php"==this.form.lang&&(this.form.version="7.0",this.code='<?php\n// You can edit this code!\n// Click here and start typing...\n\necho "Hello, world!";\n',this.cmOption.mode="text/x-php"),"python"==this.form.lang&&(this.form.version="2.7",this.code='# You can edit this code!\n# Click here and start typing...\n\nprint("Hello, world!")\n',this.cmOption.mode="text/x-python"),"ruby"==this.form.lang&&(this.form.version="2.6",this.code='# You can edit this code!\n# Click here and start typing...\n\nputs "Hello, world!"\n',this.cmOption.mode="text/x-ruby"),"go"==this.form.lang&&(this.form.version="1.8",this.code='// You can edit this code!\n// Click here and start typing...\n\npackage main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    fmt.Println("Hello, world!")\n}\n',this.cmOption.mode="text/x-go"),"rust"==this.form.lang&&(this.form.version="1.54.0",this.code='// You can edit this code!\n// Click here and start typing...\n\nfn main() {\n    println!("Hello, world!");\n}\n',this.cmOption.mode="text/x-rustsrc")}},mounted:function(){this.resetEditor()}}),s=i,l=(o("6b36"),o("eb5a"),o("2877")),u=Object(l["a"])(s,n,a,!1,null,"57617f33",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-e7df9e88.58ea8df0.js.map