(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{P7dd:function(e,t,a){"use strict";var r=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var o=r(a("bx4M"));a("+L6B");var s=r(a("2/Rp")),u=r(a("jehZ"));a("5NDa");var n=r(a("5rEg"));a("y8nQ");var d,c,p,i,m=r(a("Vl3Y")),f=a("MuoO"),h=l(a("q1tI")),g=r(a("ZNrE")),b=(d=(0,f.connect)(e=>{var t=e.global,a=e.loading;return{groups:t.groups,createAppByCompose:a.effects["createApp/createAppByCompose"]}},null,null,{withRef:!0}),c=m.default.create(),d(p=c((i=class extends h.PureComponent{constructor(e){super(e),this.handleSubmit=(e=>{e.preventDefault();var t=this.props,a=t.form,r=t.onSubmit;a.validateFields((e,t)=>{!e&&r&&r(t)})}),this.handleValiateNameSpace=((e,t,a)=>{if(!t)return a(new Error("\u8bf7\u8f93\u5165\u7ec4\u4ef6\u82f1\u6587\u540d\u79f0"));if(t&&t.length<=32){var r=/^[a-z]([-a-z0-9]*[a-z0-9])?$/;if(!r.test(t))return a(new Error("\u53ea\u652f\u6301\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u6216\u201c-\u201d\uff0c\u5e76\u4e14\u5fc5\u987b\u4ee5\u5b57\u6bcd\u5f00\u59cb\u3001\u4ee5\u6570\u5b57\u6216\u5b57\u6bcd\u7ed3\u5c3e"));a()}return t.length>32?a(new Error("\u4e0d\u80fd\u5927\u4e8e32\u4e2a\u5b57\u7b26")):void 0}),this.state={showUsernameAndPass:!1}}render(){var e={labelCol:{span:5},wrapperCol:{span:19}},t=this.props,a=t.form,r=t.data,l=void 0===r?{}:r,d=t.createAppByCompose,c=t.showSubmitBtn,p=void 0===c||c,i=a.getFieldDecorator,f=a.setFieldsValue;return h.default.createElement(h.Fragment,null,h.default.createElement(o.default,{style:{width:"800px",margin:"0 auto"},bordered:!1},h.default.createElement(m.default,{autocomplete:"off",onSubmit:this.handleSubmit,layout:"horizontal",hideRequiredMark:!0},h.default.createElement(m.default.Item,(0,u.default)({},e,{label:"\u5e94\u7528\u540d\u79f0"}),i("group_name",{initialValue:l.group_name||"",rules:[{required:!0,message:"\u5e94\u7528\u540d\u79f0"}]})(h.default.createElement(n.default,{style:{maxWidth:300},placeholder:"\u5e94\u7528\u540d\u79f0",autocomplete:"off"}))),h.default.createElement(m.default.Item,(0,u.default)({},e,{label:"\u5e94\u7528\u82f1\u6587\u540d\u79f0"}),i("k8s_app",{rules:[{required:!0,validator:this.handleValiateNameSpace}]})(h.default.createElement(n.default,{placeholder:"\u5e94\u7528\u7684\u82f1\u6587\u540d\u79f0"}))),h.default.createElement(g.default,{setFieldsValue:f,formItemLayout:e,Form:m.default,width:"594px",getFieldDecorator:i,name:"yaml_content",label:"DockerCompose\u914d\u7f6e",message:"\u8bf7\u8f93\u5165DockerCompose\u914d\u7f6e\u5185\u5bb9",mode:"yaml",data:l.yaml_content||""}),h.default.createElement(m.default.Item,(0,u.default)({},e,{label:"\u6ce8\u610f"}),"\u5c06\u89e3\u6790 DockerCompose \u914d\u7f6e\u4e2d\u7684\u7ec4\u4ef6\u76f8\u5173\u5c5e\u6027\u7528\u6765\u4fbf\u6377\u521b\u5efa\u7ec4\u4ef6\uff0c\u5176\u4e2d\u7684\u52a8\u6001\u53d8\u91cf\u4e0d\u652f\u6301\u89e3\u6790\u8d4b\u503c, \u5176\u4e2d\u4f7f\u7528\u4e86\u79c1\u6709\u4ed3\u5e93\u7684\u955c\u50cf?"," ",h.default.createElement("a",{onClick:()=>{this.setState({showUsernameAndPass:!0})},href:"javascript:;"},"\u586b\u5199\u4ed3\u5e93\u8d26\u53f7\u5bc6\u7801")),h.default.createElement(m.default.Item,(0,u.default)({style:{display:this.state.showUsernameAndPass?"":"none"}},e,{label:"\u4ed3\u5e93\u7528\u6237\u540d"}),i("user_name",{initialValue:l.user_name||"",rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u7528\u6237\u540d"}]})(h.default.createElement(n.default,{style:{maxWidth:300},autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u7528\u6237\u540d"}))),h.default.createElement(m.default.Item,(0,u.default)({style:{display:this.state.showUsernameAndPass?"":"none"}},e,{label:"\u4ed3\u5e93\u5bc6\u7801"}),i("password",{initialValue:l.password||"",rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u5bc6\u7801"}]})(h.default.createElement(n.default,{autoComplete:"new-password",type:"password",style:{maxWidth:300},placeholder:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u5bc6\u7801"}))),p?h.default.createElement(m.default.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:e.wrapperCol.span,offset:e.labelCol.span}},label:""},h.default.createElement(s.default,{onClick:this.handleSubmit,type:"primary",loading:d},"\u786e\u8ba4\u521b\u5efa")):null)))}},p=i))||p)||p);t.default=b},cdBT:function(e,t,a){"use strict";var r=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s,u,n=r(a("q1tI")),d=a("MuoO"),c=a("7DNP"),p=l(a("XZXw")),i=l(a("CNGZ")),m=l(a("sXRX")),f=l(a("g9JJ")),h=l(a("hMqj")),g=l(a("QDog")),b=a("vSx2"),v=(o=(0,d.connect)(e=>{var t=e.teamControl,a=e.enterprise;return{currentTeam:t.currentTeam,currentRegionName:t.currentRegionName,currentEnterprise:a.currentEnterprise,currentTeamPermissionsInfo:t.currentTeamPermissionsInfo}},null,null,{pure:!1}),o((u=class extends n.PureComponent{constructor(){super(...arguments),this.handleTabChange=(e=>{var t=this.props.dispatch;t(c.routerRedux.push("/team/".concat(g.default.getCurrTeamName(),"/region/").concat(g.default.getCurrRegionName(),"/create/image/").concat(e)))})}componentWillMount(){var e=this.props,t=e.currentTeamPermissionsInfo,a=e.dispatch;h.default.canCreateComponent(t,a)}render(){var e={custom:i.default,dockerrun:m.default,Dockercompose:f.default},t=[{key:"custom",tab:"\u6307\u5b9a\u955c\u50cf"},{key:"dockerrun",tab:"DockerRun\u547d\u4ee4"},{key:"Dockercompose",tab:"DockerCompose"}],a=this.props,r=a.currentEnterprise,l=a.currentTeam,o=a.currentRegionName,s=a.match,u=s.params.type;u||(u="custom");var d=e[u],c=[];return c=(0,b.createTeam)((0,b.createEnterprise)(c,r),l,o),c.push({title:"\u521b\u5efa\u7ec4\u4ef6"}),n.default.createElement(p.default,{breadcrumbList:c,title:"\u4eceDocker\u955c\u50cf\u521b\u5efa\u7ec4\u4ef6",onTabChange:this.handleTabChange,content:"\u652f\u6301\u4ece\u5355\u4e00\u955c\u50cf\u3001Docker\u547d\u4ee4\u3001DockerCompose\u914d\u7f6e\u521b\u5efa\u5e94\u7528",tabActiveKey:u,tabList:t},d?n.default.createElement(d,this.props):"\u53c2\u6570\u9519\u8bef")}},s=u))||s);t.default=v},g9JJ:function(e,t,a){"use strict";var r=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var o,s,u,n=r(a("bx4M")),d=r(a("p0pE")),c=a("MuoO"),p=a("7DNP"),i=l(a("q1tI")),m=r(a("P7dd")),f=r(a("/BFj")),h=r(a("QDog")),g=r(a("51sS")),b=(o=(0,c.connect)(e=>{var t=e.user,a=e.global;return{currUser:t.currentUser,groups:a.groups}}),o((u=class extends i.PureComponent{constructor(e){super(e),this.onAddGroup=(()=>{this.setState({addGroup:!0})}),this.cancelAddGroup=(()=>{this.setState({addGroup:!1})}),this.handleAddGroup=(e=>{var t=this.props.form.setFieldsValue;this.props.dispatch({type:"application/addGroup",payload:(0,d.default)({team_name:h.default.getCurrTeamName()},e),callback:e=>{e&&this.props.dispatch({type:"global/fetchGroups",payload:{team_name:h.default.getCurrTeamName(),region_name:h.default.getCurrRegionName()},callback:()=>{t({group_id:e.group_id}),this.cancelAddGroup()}})}})}),this.hideShowKey=(()=>{this.setState({showKey:!1})}),this.handleSubmit=(e=>{var t=h.default.getCurrTeamName();this.props.dispatch({type:"createApp/createAppByCompose",payload:(0,d.default)({team_name:t,image_type:"docker_compose"},e),callback:e=>{var t=e.bean.group_id,a=e.bean.compose_id;this.props.dispatch(p.routerRedux.push("/team/".concat(h.default.getCurrTeamName(),"/region/").concat(h.default.getCurrRegionName(),"/create/create-compose-check/").concat(t,"/").concat(a)))}})}),this.state={}}render(){return i.default.createElement(n.default,null,i.default.createElement(f.default,null),i.default.createElement("div",{className:g.default.formWrap},i.default.createElement(m.default,{onSubmit:this.handleSubmit})))}},s=u))||s);t.default=b}}]);