(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{P7dd:function(e,a,t){"use strict";var r=t("g09b"),s=t("tAuX");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("IzEo");var o=r(t("bx4M"));t("+L6B");var l=r(t("2/Rp")),d=r(t("jehZ"));t("5NDa");var n=r(t("5rEg"));t("y8nQ");var u,m,i,c,p=r(t("Vl3Y")),f=t("MuoO"),g=s(t("q1tI")),h=t("LLXN"),b=r(t("ZNrE")),y=r(t("8+Sn")),v=(u=(0,f.connect)(e=>{var a=e.global,t=e.loading;return{groups:a.groups,createAppByCompose:t.effects["createApp/createAppByCompose"]}},null,null,{withRef:!0}),m=p.default.create(),u(i=m((c=class extends g.PureComponent{constructor(e){super(e),this.handleSubmit=(e=>{e.preventDefault();var a=this.props,t=a.form,r=a.onSubmit;t.validateFields((e,a)=>{!e&&r&&r(a)})}),this.handleValiateNameSpace=((e,a,t)=>{if(!a)return t(new Error((0,h.formatMessage)({id:"placeholder.k8s_component_name"})));if(a&&a.length<=32){var r=/^[a-z]([-a-z0-9]*[a-z0-9])?$/;if(!r.test(a))return t((0,h.formatMessage)({id:"placeholder.nameSpaceReg"}));t()}return a.length>32?t(new Error((0,h.formatMessage)({id:"placeholder.max32"}))):void 0}),this.state={showUsernameAndPass:!1,language:"zh-CN"===y.default.get("language")}}render(){var e={labelCol:{span:5},wrapperCol:{span:19}},a={labelCol:{span:8},wrapperCol:{span:16}},t=this.props,r=t.form,s=t.data,u=void 0===s?{}:s,m=t.createAppByCompose,i=t.showSubmitBtn,c=void 0===i||i,f=r.getFieldDecorator,y=r.setFieldsValue,v=this.state.language,M=v?e:a;return g.default.createElement(g.Fragment,null,g.default.createElement(o.default,{style:{width:"800px",margin:"0 auto"},bordered:!1},g.default.createElement(p.default,{autocomplete:"off",onSubmit:this.handleSubmit,layout:"horizontal",hideRequiredMark:!0},g.default.createElement(p.default.Item,(0,d.default)({},M,{label:(0,h.formatMessage)({id:"teamAdd.create.form.appName"})}),f("group_name",{initialValue:u.group_name||"",rules:[{required:!0,message:(0,h.formatMessage)({id:"placeholder.appName"})}]})(g.default.createElement(n.default,{style:{maxWidth:300},placeholder:(0,h.formatMessage)({id:"placeholder.group_name"}),autocomplete:"off"}))),g.default.createElement(p.default.Item,(0,d.default)({},M,{label:(0,h.formatMessage)({id:"teamAdd.create.form.k8s_component_name"})}),f("k8s_app",{rules:[{required:!0,validator:this.handleValiateNameSpace}]})(g.default.createElement(n.default,{placeholder:(0,h.formatMessage)({id:"placeholder.k8s_component_name"})}))),g.default.createElement(b.default,{setFieldsValue:y,formItemLayout:M,Form:p.default,getFieldDecorator:f,name:"yaml_content",label:(0,h.formatMessage)({id:"teamAdd.create.image.config"}),message:(0,h.formatMessage)({id:"placeholder.yaml_content"}),mode:"yaml",data:u.yaml_content||""}),g.default.createElement(p.default.Item,(0,d.default)({},M,{label:(0,h.formatMessage)({id:"teamAdd.create.image.notice"})}),(0,h.formatMessage)({id:"teamAdd.create.image.configHint"})," ",g.default.createElement("a",{onClick:()=>{this.setState({showUsernameAndPass:!0})},href:"javascript:;"},(0,h.formatMessage)({id:"teamAdd.create.image.hint2"}))),g.default.createElement(p.default.Item,(0,d.default)({style:{display:this.state.showUsernameAndPass?"":"none"}},M,{label:(0,h.formatMessage)({id:"teamAdd.create.form.user"})}),f("user_name",{initialValue:u.user_name||"",rules:[{required:!1,message:(0,h.formatMessage)({id:"placeholder.user_name"})}]})(g.default.createElement(n.default,{style:{maxWidth:300},autoComplete:"off",placeholder:(0,h.formatMessage)({id:"placeholder.user_name"})}))),g.default.createElement(p.default.Item,(0,d.default)({style:{display:this.state.showUsernameAndPass?"":"none"}},M,{label:(0,h.formatMessage)({id:"teamAdd.create.form.password"})}),f("password",{initialValue:u.password||"",rules:[{required:!1,message:(0,h.formatMessage)({id:"placeholder.password"})}]})(g.default.createElement(n.default,{autoComplete:"new-password",type:"password",style:{maxWidth:300},placeholder:(0,h.formatMessage)({id:"placeholder.password"})}))),c?g.default.createElement(p.default.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:M.wrapperCol.span,offset:M.labelCol.span}},label:""},g.default.createElement(l.default,{onClick:this.handleSubmit,type:"primary",loading:m},(0,h.formatMessage)({id:"teamAdd.create.btn.create"}))):null)))}},i=c))||i)||i);a.default=v},cdBT:function(e,a,t){"use strict";var r=t("tAuX"),s=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o,l,d,n=r(t("q1tI")),u=t("MuoO"),m=t("LLXN"),i=t("7DNP"),c=s(t("XZXw")),p=s(t("CNGZ")),f=s(t("sXRX")),g=s(t("g9JJ")),h=s(t("hMqj")),b=s(t("QDog")),y=t("vSx2"),v=(o=(0,u.connect)(e=>{var a=e.teamControl,t=e.enterprise;return{currentTeam:a.currentTeam,currentRegionName:a.currentRegionName,currentEnterprise:t.currentEnterprise,currentTeamPermissionsInfo:a.currentTeamPermissionsInfo}},null,null,{pure:!1}),o((d=class extends n.PureComponent{constructor(){super(...arguments),this.handleTabChange=(e=>{var a=this.props.dispatch;a(i.routerRedux.push("/team/".concat(b.default.getCurrTeamName(),"/region/").concat(b.default.getCurrRegionName(),"/create/image/").concat(e)))})}componentWillMount(){var e=this.props,a=e.currentTeamPermissionsInfo,t=e.dispatch;h.default.canCreateComponent(a,t)}render(){var e={custom:p.default,dockerrun:f.default,Dockercompose:g.default},a=[{key:"custom",tab:(0,m.formatMessage)({id:"teamAdd.create.image.tabImage"})},{key:"dockerrun",tab:(0,m.formatMessage)({id:"teamAdd.create.image.DockerRun"})},{key:"Dockercompose",tab:"DockerCompose"}],t=this.props,r=t.currentEnterprise,s=t.currentTeam,o=t.currentRegionName,l=t.match,d=l.params.type;d||(d="custom");var u=e[d],i=[];return i=(0,y.createTeam)((0,y.createEnterprise)(i,r),s,o),i.push({title:(0,m.formatMessage)({id:"teamAdd.create.createComponentTitle"})}),n.default.createElement(c.default,{breadcrumbList:i,title:(0,m.formatMessage)({id:"teamAdd.create.image.title"}),onTabChange:this.handleTabChange,content:(0,m.formatMessage)({id:"teamAdd.create.image.desc"}),tabActiveKey:d,tabList:a},u?n.default.createElement(u,this.props):n.default.createElement(m.FormattedMessage,{id:"teamAdd.create.error"}))}},l=d))||l);a.default=v},g9JJ:function(e,a,t){"use strict";var r=t("g09b"),s=t("tAuX");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("IzEo");var o,l,d,n=r(t("bx4M")),u=r(t("p0pE")),m=t("MuoO"),i=t("7DNP"),c=s(t("q1tI")),p=r(t("P7dd")),f=r(t("/BFj")),g=r(t("QDog")),h=r(t("51sS")),b=(o=(0,m.connect)(e=>{var a=e.user,t=e.global;return{currUser:a.currentUser,groups:t.groups}}),o((d=class extends c.PureComponent{constructor(e){super(e),this.onAddGroup=(()=>{this.setState({addGroup:!0})}),this.cancelAddGroup=(()=>{this.setState({addGroup:!1})}),this.handleAddGroup=(e=>{var a=this.props.form.setFieldsValue;this.props.dispatch({type:"application/addGroup",payload:(0,u.default)({team_name:g.default.getCurrTeamName()},e),callback:e=>{e&&this.props.dispatch({type:"global/fetchGroups",payload:{team_name:g.default.getCurrTeamName(),region_name:g.default.getCurrRegionName()},callback:()=>{a({group_id:e.group_id}),this.cancelAddGroup()}})}})}),this.hideShowKey=(()=>{this.setState({showKey:!1})}),this.handleSubmit=(e=>{var a=g.default.getCurrTeamName();this.props.dispatch({type:"createApp/createAppByCompose",payload:(0,u.default)({team_name:a,image_type:"docker_compose"},e),callback:e=>{var a=e.bean.group_id,t=e.bean.compose_id;this.props.dispatch(i.routerRedux.push("/team/".concat(g.default.getCurrTeamName(),"/region/").concat(g.default.getCurrRegionName(),"/create/create-compose-check/").concat(a,"/").concat(t)))}})}),this.state={}}render(){return c.default.createElement(n.default,null,c.default.createElement(f.default,null),c.default.createElement("div",{className:h.default.formWrap},c.default.createElement(p.default,{onSubmit:this.handleSubmit})))}},l=d))||l);a.default=b}}]);