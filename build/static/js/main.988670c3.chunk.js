(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={container:"Container_container__3e1Mh"}},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),o=n(11),s=n(2),u=n(3),l=n(5),d=n(4),b=n(12),m=n(9),h=n(0);var j=function(e){var t=e.type,n=e.text,a=e.onClick,r=e.disabled;return Object(h.jsx)("button",{type:t,onClick:a,disabled:r,children:n})},p=n(6),f=n.n(p),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleInputChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(m.a)({},a,r))},e.onBtnClick=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;e.props.addContact(a,r),e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.handleInputChange,t=this.onBtnClick,n=this.state,a=n.name,r=n.number;return Object(h.jsx)("form",{onSubmit:t,children:Object(h.jsxs)("label",{className:f.a.form,children:[Object(h.jsx)("p",{children:"Name"}),Object(h.jsx)("input",{onChange:e,value:a,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:f.a.input}),Object(h.jsx)("p",{children:"Number"}),Object(h.jsx)("input",{onChange:e,value:r,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,className:f.a.input}),Object(h.jsx)(j,{text:"Add Contact",type:"submit",disabled:!r||!a})]})})}}]),n}(a.Component),O=C;var v=function(e){var t=e.value,n=e.onFilterChange;return Object(h.jsxs)("label",{children:["Find contacts by name :",Object(h.jsx)("input",{onChange:n,value:t,type:"text",name:"filter"})]})};var x=function(e){var t=e.name,n=e.number,a=e.idx,r=e.onClick;return Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:[a+1," - ",t,": ",n,Object(h.jsx)(j,{onClick:r,text:"Delete",type:"button"})]})})};var g=function(e){var t=e.list,n=e.onClick;return Object(h.jsx)("ul",{children:t.map((function(e,t){var a=e.name,r=e.number,c=e.id;return Object(h.jsx)(x,{idx:t,name:a,number:r,onClick:function(){n(c)}},c)}))})},y=n(10),k=n.n(y),F=function(e){var t=e.children;return Object(h.jsx)("div",{className:k.a.container,children:t})},w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t,n){e.state.contacts.every((function(e){return e.name!==t}))?e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[{name:t,number:n,id:Object(b.a)()}])}})):alert("".concat(t," is alredy in contacts"))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.handleFilterChange=function(t){e.setState({filter:t.currentTarget.value})},e.getFindContact=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.addContact,n=this.deleteContact,a=this.handleFilterChange,r=this.getFindContact;return Object(h.jsxs)(F,{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(O,{addContact:t}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(v,{value:e,onFilterChange:a}),Object(h.jsx)(g,{list:r(),onClick:n})]})}}]),n}(a.Component),A=w;i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={form:"ContactForm_form__2IF4m",input:"ContactForm_input__3dHde"}}},[[18,1,2]]]);
//# sourceMappingURL=main.988670c3.chunk.js.map