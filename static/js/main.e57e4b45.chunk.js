(this["webpackJsonpanother-to-do"]=this["webpackJsonpanother-to-do"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(8),i=n.n(s),o=(n(14),n(2)),d=n(3),l=n(5),u=n(4),p=n(7),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).submitHandler=function(t){var n=e.props.handleUpdateItems,a=new FormData(t.target),c=document.getElementById("task-input");t.preventDefault(),n(a.get("task")),c.value=""},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("form",{onSubmit:this.submitHandler,children:Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("input",{type:"text",id:"task-input",className:"form-control",name:"task",placeholder:"New task"}),Object(a.jsx)("div",{className:"input-group-append",children:Object(a.jsx)("button",{className:"btn btn-outline-secondary",type:"submit",children:"Add"})})]})})}}]),n}(c.Component),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).updateCheckBox=function(e){a.updateHandler(a.props.text,e.target.checked,a.index)},a.updateTaskText=function(e){a.props.check||a.updateHandler(e.target.value,a.props.check,a.index)},a.updateHandler=a.props.updateHandler,a.deleteHandler=a.props.deleteHandler,a.index=a.props.index,a}return Object(d.a)(n,[{key:"render",value:function(){var e,t,n=this,c=this.props,r=c.check,s=c.text;return r?(e="text-muted",t=Object(a.jsx)("div",{className:"input-group-append",children:Object(a.jsx)("span",{className:"input-group-text bg-secondary",children:Object(a.jsx)("span",{className:"fa fa-times-circle delete-item",onClick:function(){return n.deleteHandler(n.props.index)}})})})):(e="",t=""),Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("div",{className:"input-group-text",children:Object(a.jsx)("input",{type:"checkbox",onChange:this.updateCheckBox,checked:r})})}),Object(a.jsx)("input",{type:"text",onChange:this.updateTaskText,readOnly:r,value:s,className:"form-control "+e}),t]})}}]),n}(c.Component),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.handleUpdateItems,c=e.handleDeleteItem;return Object(a.jsxs)("ul",{className:"list-group",children:[" ",t.map((function(e){return Object(a.jsx)(j,{index:e.index,check:e.check,text:e.text,updateHandler:n,deleteHandler:c},e.index)}))]})}}]),n}(c.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleUpdateItems=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=Object(p.a)({},a.state);if(null===n)n=c.counter++,c.items.push({index:n,text:e,check:"true"===t});else{var r=c.items.findIndex((function(e){return e.index===n}));c.items[r]={index:n,text:e,check:t}}localStorage.setItem("another-to-do",JSON.stringify(c)),a.setState(c)},a.handleDeleteItem=function(e){var t=Object(p.a)({},a.state),n=t.items.findIndex((function(t){return t.index===e}));t.items.splice(n,1),localStorage.setItem("another-to-do",JSON.stringify(t)),a.setState(t)},a.state={counter:0,items:[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("another-to-do");null!==e?this.setState(JSON.parse(e)):localStorage.setItem("another-to-do",JSON.stringify(this.state))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"col-6",children:[Object(a.jsx)("h2",{children:"To-do"}),Object(a.jsx)("hr",{className:"mb-3"}),Object(a.jsx)(m,{items:this.state.items,handleUpdateItems:this.handleUpdateItems,handleDeleteItem:this.handleDeleteItem}),Object(a.jsx)(h,{handleUpdateItems:this.handleUpdateItems})]})}}]),n}(c.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container-xl",children:Object(a.jsx)("div",{className:"row justify-content-center py-5",children:Object(a.jsx)(b,{})})})}}]),n}(c.Component);var O=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(x,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.e57e4b45.chunk.js.map