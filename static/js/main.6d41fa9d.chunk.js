(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(3),c=a.n(r),o=(a(15),a(4)),i=a(5),h=a(7),u=a(6),l=a(8),m=a(1),k=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onFormSubmit()}},s.a.createElement("input",{autoFocus:!0,type:"text",placeholder:"Enter search term...",onChange:function(t){return e.onInputChange(t.target.value)},required:!0,value:e.searchTerm}),s.a.createElement("div",null,s.a.createElement("button",{type:"submit",disabled:e.isSearching},"Search"),s.a.createElement("button",{type:"button",onClick:e.onRandomize,disabled:e.isSearching,className:"randomize-button"},"Randomize"))))},d=function(e){return s.a.createElement("ul",null,e.jokes.map(function(e){return s.a.createElement("li",{key:e.id},e.joke)}))},j=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).state={searchTerm:"",jokes:[],isFetchingJokes:!1,isSearch:!1},e.onSearchChange=e.onSearchChange.bind(Object(m.a)(Object(m.a)(e))),e.randomizeJokes=e.randomizeJokes.bind(Object(m.a)(Object(m.a)(e))),e.searchJokes=e.searchJokes.bind(Object(m.a)(Object(m.a)(e))),e}return Object(l.a)(t,e),Object(i.a)(t,[{key:"randomizeJokes",value:function(){var e=this;this.setState({isFetchingJokes:!0,isSearch:!1}),fetch("https://icanhazdadjoke.com/",{method:"GET",headers:{Accept:"application/json"}}).then(function(e){return e.json()}).then(function(t){var a=t.joke;e.setState({joke:a,isFetchingJokes:!1})})}},{key:"searchJokes",value:function(){var e=this;""!==this.state.searchTerm&&(this.setState({isFetchingJokes:!0,isSearch:!0}),fetch("https://icanhazdadjoke.com/search?term=".concat(this.state.searchTerm,"&limit=50"),{method:"GET",headers:{Accept:"application/json"}}).then(function(e){return e.json()}).then(function(t){var a=t.results;e.setState({jokes:a,isFetchingJokes:!1,searchTerm:""})}))}},{key:"onSearchChange",value:function(e){this.setState({searchTerm:e})}},{key:"jokeRender",value:function(){return s.a.createElement("div",null,this.state.isSearch&&this.state.jokes.length>0&&s.a.createElement(d,{jokes:this.state.jokes}),this.state.isSearch&&0===this.state.jokes.length&&s.a.createElement("p",{className:"no-results-msg"},"Sorry, no results."),!this.state.isSearch&&s.a.createElement("p",{className:"random-joke"},this.state.joke))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Dad Jokes"),s.a.createElement(k,{onFormSubmit:this.searchJokes,onInputChange:this.onSearchChange,isSearching:this.state.isFetchingJokes,onRandomize:this.randomizeJokes,searchTerm:this.state.searchTerm}),this.state.isFetchingJokes?s.a.createElement("p",{className:"searching-msg"},"Searching for jokes..."):this.jokeRender())}}]),t}(n.Component);c.a.render(s.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.6d41fa9d.chunk.js.map