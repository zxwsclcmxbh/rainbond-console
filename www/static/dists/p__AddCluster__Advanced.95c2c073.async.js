(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"4XIh":function(e,a,t){"use strict";var s=t("tAuX"),n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("14J3");var r=n(t("BMrR"));t("Pwec");var l=n(t("CtXQ"));t("jCWc");var o=n(t("kPKH"));t("5NDa");var d=n(t("5rEg")),i=s(t("q1tI")),c=t("LLXN");class u extends i.Component{constructor(e){super(e),this.handleNodes=((e,a)=>{var t=this.state.values;t[a].ip=e,this.triggerChange(t),this.setValues(t)}),this.add=(()=>{var e=this.state.values;if(e.length>99)return null;this.setState({values:e.concat({ip:""})})}),this.remove=(e=>{var a=this.state.values;a.splice(e,1),this.setValues(a),this.triggerChange(a)}),this.state={values:[{ip:""}]}}setValues(e){var a=e||[];a.length||a.push({ip:""}),this.setState({values:a})}initFromProps(e){var a=e;a&&this.setValues(a)}triggerChange(e){for(var a=[],t=0;t<e.length;t++)a.push({ip:e[t].ip});var s=this.props.onChange;s&&s(a)}render(){var e="".concat((0,c.formatMessage)({id:"enterpriseColony.Advanced.end"})),a=this.state.values;return i.default.createElement("div",null,a.map((a,t)=>{var s=0===t;return i.default.createElement(r.default,{key:t,style:{width:"100%",display:"flex"}},i.default.createElement(o.default,{span:24,style:{marginRight:"10px"}},i.default.createElement(d.default,{name:"ip",onChange:e=>{this.handleNodes(e.target.value,t)},value:a.ip,placeholder:e,style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})),i.default.createElement(o.default,{span:4,style:{textAlign:"center"}},i.default.createElement(l.default,{type:s?"plus-circle":"minus-circle",style:{fontSize:"20px"},onClick:()=>{s?this.add():this.remove(t)}})))}))}}var m=u;a.default=m},"4Z0a":function(e,a,t){e.exports={antd_row:"antd_row___3ywyl",titleBox:"titleBox___kBcCg",title:"title___2L__9",titleSpan:"titleSpan___3-aBr",en_titleSpan:"en_titleSpan___3gC5y",config:"config___1Aj8c",antd_row_btn:"antd_row_btn___3So1w",antd_btn:"antd_btn___2_2mA",data_base:"data_base___14bry",desc:"desc___3JAxA"}},FMI5:function(e,a,t){"use strict";var s=t("tAuX"),n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("14J3");var r=n(t("BMrR"));t("Pwec");var l=n(t("CtXQ"));t("jCWc");var o=n(t("kPKH"));t("5NDa");var d=n(t("5rEg")),i=s(t("q1tI")),c=t("LLXN");class u extends i.Component{constructor(e){super(e),this.handleNodes=((e,a)=>{var t=this.state.values;t[a].name=e,this.triggerChange(t),this.setValues(t)}),this.add=(()=>{var e=this.state.values;if(e.length>99)return null;this.setState({values:e.concat({name:""})})}),this.remove=(e=>{var a=this.state.values;a.splice(e,1),this.setValues(a),this.triggerChange(a)}),this.state={values:[{name:""}]}}setValues(e){var a=e||[];a.length||a.push({name:""}),this.setState({values:a})}initFromProps(e){var a=e;a&&this.setValues(a)}triggerChange(e){for(var a=[],t=0;t<e.length;t++)a.push({name:e[t].name});var s=this.props.onChange;s&&s(a)}render(){var e="".concat((0,c.formatMessage)({id:"enterpriseColony.Advanced.master"})),a=this.state.values;return i.default.createElement("div",null,a.map((a,t)=>{var s=0===t;return i.default.createElement(r.default,{key:t,style:{width:"100%",display:"flex"}},i.default.createElement(o.default,{span:24,style:{marginRight:"10px"}},i.default.createElement(d.default,{name:"name",onChange:e=>{this.handleNodes(e.target.value,t)},value:a.name,placeholder:e})),i.default.createElement(o.default,{span:4,style:{textAlign:"center"}},i.default.createElement(l.default,{type:s?"plus-circle":"minus-circle",style:{fontSize:"20px"},onClick:()=>{s?this.add():this.remove(t)}})))}))}}var m=u;a.default=m},sm3r:function(e,a,t){"use strict";var s=t("g09b"),n=t("tAuX");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("IzEo");var r=s(t("bx4M"));t("+L6B");var l=s(t("2/Rp")),o=s(t("jehZ"));t("5NDa");var d=s(t("5rEg")),i=s(t("p0pE"));t("14J3");var c=s(t("BMrR"));t("+BJd");var u=s(t("mr32"));t("FJo9");var m=s(t("L41K"));t("y8nQ");var p,f,g,b,v=s(t("Vl3Y")),h=t("MuoO"),C=t("7DNP"),y=s(t("Qyje")),_=n(t("q1tI")),w=t("LLXN"),M=s(t("3a4m")),E=s(t("XZXw")),A=s(t("+iC2")),N=s(t("FMI5")),x=s(t("4XIh")),F=s(t("8+Sn")),S=s(t("4Z0a")),k=v.default.Item,D=m.default.Step,R=u.default.CheckableTag,W=(p=v.default.create(),f=(0,h.connect)(e=>{var a=e.user,t=e.list,s=e.loading,n=e.global,r=e.index,l=e.region;return{user:a.currentUser,list:t,loading:s.models.list,rainbondInfo:n.rainbondInfo,enterprise:n.enterprise,isRegist:n.isRegist,oauthLongin:s.effects["global/creatOauth"],overviewInfo:r.overviewInfo,advanceConfiguration:l.advance_configuration}}),p(g=f((b=class extends _.PureComponent{constructor(e){super(e),this.loadSteps=(()=>{var e=[{title:(0,w.formatMessage)({id:"enterpriseColony.ACksterList.basic"})},{title:(0,w.formatMessage)({id:"enterpriseColony.ACksterList.senior"})},{title:(0,w.formatMessage)({id:"enterpriseColony.ACksterList.install"})},{title:(0,w.formatMessage)({id:"enterpriseColony.ACksterList.Docking"})}];return e}),this.handleSubmit=(()=>{}),this.toLinkNext=(e=>{var a=this.props,t=a.match.params.eid,s=a.location.search,n=a.form,r=s&&y.default.parse(this.props.location.search.substr(1)),l=r.data,o=r.name,d=r.cloudserver,i=this.state,c=i.etcd_enabled,u=i.storage_enabled,m=i.database_enabled,p=i.image_enabled,f=i.node_enabled;i.language;if("next"===e){var g=l||{},b={enableHA:!1,gatewayIngressIPs:"",imageHub:{enable:!1,domain:"",namespace:"",username:"",password:""},etcd:{enable:!1,endpoints:[],secretName:""},estorage:{enable:!1,RWX:{enable:!1,config:{server:"",storageClassName:""}},RWO:{enable:!1,storageClassName:""},NFS:{enable:!1,server:"",path:""}},type:g.type,database:{enable:!1,uiDatabase:{host:"",port:"",username:"",password:"",dbname:"",enable:!1},regionDatabase:{host:"",port:"",username:"",password:"",dbname:"",enable:!1}},nodesForChaos:{enable:!1,nodes:[]},nodesForGateway:{enable:!0,nodes:[]}};n.validateFields((e,a)=>{if(!e&&a){switch(o){case"helm":c==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?b.etcd.enable=!1:b.etcd.enable=!0,u==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?(b.estorage.enable=!1,b.estorage.RWX.enable=!1,b.estorage.RWO.enable=!1):(b.estorage.enable=!0,b.estorage.RWX.enable=!0,b.estorage.RWO.enable=!0),m==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?(b.database.enable=!1,b.database.regionDatabase.enable=!1):(b.database.enable=!0,b.database.regionDatabase.enable=!0),p==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?b.imageHub.enable=!1:b.imageHub.enable=!0,f==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?b.nodesForChaos.enable=!1:b.nodesForChaos.enable=!0;break;case"ack":b.estorage.enable=g&&g.estorage&&g.estorage.enable||!1,b.estorage.RWX.enable=g&&g.estorage&&g.estorage.RWX&&g.estorage.RWX.enable||!1,b.estorage.RWO.enable=g&&g.estorage&&g.estorage.RWO&&g.estorage.RWO.enable||!1,b.database.enable=g&&g.database&&g.database.enable||!1,b.database.regionDatabase.enable=g&&g.database&&g.database.regionDatabase&&g.database.regionDatabase.enable||!1,b.imageHub.enable=g&&g.imageHub&&g.imageHub.enable||!1,b.nodesForGateway.enable=g&&g.nodesForGateway&&g.nodesForGateway.enable||!1,f==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?b.nodesForChaos.enable=!1:b.nodesForChaos.enable=!0,c==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?b.etcd.enable=!1:b.etcd.enable=!0;break;case"huawei":b.estorage.enable=g&&g.estorage&&g.estorage.enable||!1,b.estorage.RWX.enable=g&&g.estorage&&g.estorage.RWX&&g.estorage.RWX.enable||!1,b.estorage.RWO.enable=g&&g.estorage&&g.estorage.RWO&&g.estorage.RWO.enable||!1,b.estorage.RWX.enable=g&&g.estorage&&g.estorage.NFS&&g.estorage.NFS.enable||!1,b.database.enable=g&&g.database&&g.database.enable||!1,b.database.regionDatabase.enable=g&&g.database&&g.database.regionDatabase&&g.database.regionDatabase.enable||!1,b.imageHub.enable=g&&g.imageHub&&g.imageHub.enable||!1,b.nodesForGateway.enable=g&&g.nodesForGateway&&g.nodesForGateway.enable||!1,f==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?b.nodesForChaos.enable=!1:b.nodesForChaos.enable=!0,c==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?b.etcd.enable=!1:b.etcd.enable=!0;break;case"tencent":b.estorage.enable=g&&g.estorage&&g.estorage.enable||!1,b.estorage.RWX.enable=g&&g.estorage&&g.estorage.RWX&&g.estorage.RWX.enable||!1,b.estorage.RWO.enable=g&&g.estorage&&g.estorage.RWO&&g.estorage.RWO.enable||!1,b.estorage.RWX.enable=g&&g.estorage&&g.estorage.NFS&&g.estorage.NFS.enable||!1,b.database.enable=g&&g.database&&g.database.enable||!1,b.database.regionDatabase.enable=g&&g.database&&g.database.regionDatabase&&g.database.regionDatabase.enable||!1,b.imageHub.enable=g&&g.imageHub&&g.imageHub.enable||!1,b.nodesForGateway.enable=g&&g.nodesForGateway&&g.nodesForGateway.enable||!1,f==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?b.nodesForChaos.enable=!1:b.nodesForChaos.enable=!0,c==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?b.etcd.enable=!1:b.etcd.enable=!0;break;default:break}b.gatewayIngressIPs=a.gatewayIngressIPs||g.gatewayIngressIPs||"",b.nodesForGateway.nodes=a.nodesForGateway||g&&g.nodesForGateway&&g.nodesForGateway.nodes||[],b.imageHub.domain=a.domain||g&&g.imageHub&&g.imageHub.domain||"",b.imageHub.namespace=a.namespace||g&&g.imageHub&&g.imageHub.namespace||"",b.imageHub.username=a.username||g&&g.imageHub&&g.imageHub.username||"",b.imageHub.password=a.password||g&&g.imageHub&&g.imageHub.password||"",b.estorage.RWX.config.storageClassName=a.storageClassName1||"",b.estorage.RWO.storageClassName=a.storageClassName2||g&&g.estorage&&g.estorage.RWO&&g.estorage.RWO.storageClassName||"",b.estorage.RWO.server=g&&g.estorage&&g.estorage.RWX&&g.estorage.RWX.config&&g.estorage.RWX.config.server||"",b.estorage.NFS.server=g&&g.estorage&&g.estorage.NFS&&g.estorage.NFS.server||"",b.estorage.NFS.path=g&&g.estorage&&g.estorage.NFS&&g.estorage.NFS.path||"",b.database.regionDatabase.host=a.regionDatabase_host||g&&g.database&&g.database.regionDatabase&&g.database.regionDatabase.host||"",b.database.regionDatabase.port=a.regionDatabase_port||g&&g.database&&g.database.regionDatabase&&g.database.regionDatabase.port||"",b.database.regionDatabase.username=a.regionDatabase_username||g&&g.database&&g.database.regionDatabase&&g.database.regionDatabase.username||"",b.database.regionDatabase.password=a.regionDatabase_password||g&&g.database&&g.database.regionDatabase&&g.database.regionDatabase.password||"",b.database.regionDatabase.dbname=a.regionDatabase_dbname||g&&g.database&&g.database.regionDatabase&&g.database.regionDatabase.dbname||"",b.etcd.endpoints=a.endpoints||[],b.etcd.secretName=a.secretName||"",b.nodesForChaos.nodes=a.nodesForChaos||[],M.default.push({pathname:"/enterprise/".concat(t,"/provider/ACksterList/install"),search:y.default.stringify({name:o,step:"advanced",data:b,cloudserver:d})})}})}else if("goback"===e)switch(o){case"helm":M.default.push({pathname:"/enterprise/".concat(t,"/provider/ACksterList")});break;case"ack":M.default.push({pathname:"/enterprise/".concat(t,"/provider/Aliack")});break;case"huawei":M.default.push({pathname:"/enterprise/".concat(t,"/provider/HuaweiList")});break;case"tencent":M.default.push({pathname:"/enterprise/".concat(t,"/provider/TencentList")});break;default:break}}),this.handleValidatorsNodes=((e,a,t)=>{if(a&&a.length>0){var s=!1;a.some(e=>{if(!e.ip&&!e.name)return s=!1,!0;s=!0;var a=/^[^\s]*$/;e.ip.match(a)&&e.name.match(a)?t():t(new Error("".concat((0,w.formatMessage)({id:"placeholder.no_spaces"}))))}),s?t():t("\u8bf7\u586b\u5199\u5b8c\u6574\u7684\u8282\u70b9\u540d\u79f0")}else t()});var a=this.props.user,t=A.default.isCompanyAdmin(a);this.state={adminer:t,etcd:!1,storage:!1,database:!1,build:!1,gateway:!1,repositories:!1,etcd_enabled:(0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}),storage_enabled:(0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}),database_enabled:(0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}),image_enabled:(0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}),node_enabled:(0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}),language:"zh-CN"===F.default.get("language")}}componentWillMount(){var e=this.state.adminer,a=this.props.dispatch;e||a(C.routerRedux.push("/"))}render(){var e=this.props,a=e.match.params,t=(a.eid,a.provider,a.clusterID,e.form.getFieldDecorator),s=e.location.search,n=s&&y.default.parse(this.props.location.search.substr(1)),u=(n.data,n.name),p=this.state,f=p.etcd_enabled,g=p.storage_enabled,b=p.database_enabled,h=p.image_enabled,C=p.node_enabled,M=p.language,A={labelCol:{xs:{span:4},sm:{span:4}},wrapperCol:{xs:{span:9},sm:{span:9}}},F={labelCol:{xs:{span:4},sm:{span:4}},wrapperCol:{xs:{span:9},sm:{span:9}}},W={labelCol:{xs:{span:8},sm:{span:8}},wrapperCol:{xs:{span:8},sm:{span:8}}},H={labelCol:{xs:{span:3},sm:{span:3}},wrapperCol:{xs:{span:6},sm:{span:6}}},O={labelCol:{xs:{span:8},sm:{span:8}},wrapperCol:{xs:{span:6},sm:{span:6}}},X={labelCol:{xs:{span:4},sm:{span:4}},wrapperCol:{xs:{span:6},sm:{span:6}}},I=M?H:O,L=M?A:F,q=M?H:X;return _.default.createElement(E.default,{title:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.button.text"}),content:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.PageHeaderLayout.content"})},_.default.createElement(c.default,{style:{marginBottom:"16px"}},_.default.createElement(m.default,{current:1},this.loadSteps().map(e=>_.default.createElement(D,{key:e.title,title:e.title})))),_.default.createElement(r.default,{style:{padding:"24px"}},_.default.createElement(v.default,{onSubmit:this.handleSubmit},_.default.createElement(c.default,{className:S.default.antd_row},_.default.createElement("div",{className:S.default.titleBox},_.default.createElement("div",{className:S.default.title},_.default.createElement("span",{className:M?S.default.titleSpan:S.default.en_titleSpan},"Etcd"),_.default.createElement(R,{checked:f!=="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.Close"}))||!1,onChange:()=>{this.setState(e=>{return(0,i.default)({},e,{etcd_enabled:f==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?(0,w.formatMessage)({id:"enterpriseColony.Advanced.Close"}):(0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"})})})},style:{fontSize:"13px",fontWeight:"bold",lineHeight:"30px",height:"30px"}},f))),f!=="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?_.default.createElement("div",{className:S.default.config},_.default.createElement(k,(0,o.default)({},L,{label:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.name"})}),t("secretName",{rules:[{required:!0,message:(0,w.formatMessage)({id:"enterpriseColony.Advanced.inpiut_name"})},{pattern:/^[^\s]*$/,message:(0,w.formatMessage)({id:"placeholder.no_spaces"})}]})(_.default.createElement(d.default,{placeholder:(0,w.formatMessage)({id:"enterpriseColony.Advanced.inpiut_Name"}),style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}))),_.default.createElement(k,(0,o.default)({},L,{label:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.node"}),className:S.default.antd_form}),t("endpoints",{rules:[{required:!0,message:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_node"})},{validator:this.handleValidatorsNodes}]})(_.default.createElement(x.default,null)))):_.default.createElement("div",{className:S.default.desc},_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.input_Node"}))),"ack"!==u&&"huawei"!==u&&"tencent"!==u&&_.default.createElement(c.default,{className:S.default.antd_row},_.default.createElement("div",{className:S.default.titleBox},_.default.createElement("div",{className:S.default.title},_.default.createElement("span",{className:M?S.default.titleSpan:S.default.en_titleSpan},_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.storage"})),_.default.createElement(R,{checked:g!=="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.Close"}))||!1,onChange:()=>{this.setState(e=>{return(0,i.default)({},e,{storage_enabled:g==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?(0,w.formatMessage)({id:"enterpriseColony.Advanced.Close"}):(0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"})})})},style:{fontSize:"13px",fontWeight:"bold",lineHeight:"30px",height:"30px"}},g))),g!=="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?_.default.createElement("div",{className:S.default.config},_.default.createElement(k,(0,o.default)({},W,{label:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.storageClass"}),className:S.default.antd_form}),t("storageClassName1",{rules:[{required:!0,message:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_storageClass"})},{pattern:/^[^\s]*$/,message:(0,w.formatMessage)({id:"placeholder.no_spaces"})}]})(_.default.createElement(d.default,{placeholder:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_StorageClass"}),style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}))),_.default.createElement(k,(0,o.default)({},W,{label:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.StorageClass"}),className:S.default.antd_form}),t("storageClassName2",{rules:[{required:!0,message:(0,w.formatMessage)({id:"enterpriseColony.Advanced.StorageClass"})},{pattern:/^[^\s]*$/,message:(0,w.formatMessage)({id:"placeholder.no_spaces"})}]})(_.default.createElement(d.default,{placeholder:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_storage"}),style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})))):_.default.createElement("div",{className:S.default.desc},_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.Not_required_StorageClass"}))),"ack"!==u&&"huawei"!==u&&"tencent"!==u&&_.default.createElement(c.default,{className:S.default.antd_row},_.default.createElement("div",{className:S.default.titleBox},_.default.createElement("div",{className:S.default.title},_.default.createElement("span",{className:M?S.default.titleSpan:S.default.en_titleSpan},_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.access"})),_.default.createElement(R,{checked:b!=="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.Close"}))||!1,onChange:()=>{this.setState(e=>{return(0,i.default)({},e,{database_enabled:b==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?(0,w.formatMessage)({id:"enterpriseColony.Advanced.Close"}):(0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"})})})},style:{fontSize:"13px",fontWeight:"bold",lineHeight:"30px",height:"30px"}},b))),b!=="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?_.default.createElement("div",{className:"".concat(S.default.config," ").concat(S.default.data_base)},_.default.createElement(k,(0,o.default)({},I,{label:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.address"}),style:{display:"flex"}}),t("regionDatabase_host",{rules:[{required:!0,message:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_address"})},{pattern:/^[^\s]*$/,message:(0,w.formatMessage)({id:"placeholder.no_spaces"})}]})(_.default.createElement(d.default,{placeholder:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_address"}),style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}))),_.default.createElement(k,(0,o.default)({},I,{label:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.port"}),style:{display:"flex"}}),t("regionDatabase_port",{rules:[{required:!0,message:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_port"})},{pattern:/^[^\s]*$/,message:(0,w.formatMessage)({id:"placeholder.no_spaces"})}]})(_.default.createElement(d.default,{placeholder:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_Port"}),style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}))),_.default.createElement(k,(0,o.default)({},I,{label:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.user_name"}),style:{display:"flex"}}),t("regionDatabase_username",{rules:[{required:!0,message:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_user_name"})},{pattern:/^[^\s]*$/,message:(0,w.formatMessage)({id:"placeholder.no_spaces"})}]})(_.default.createElement(d.default,{placeholder:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_user_Name"}),style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}))),_.default.createElement(k,(0,o.default)({},I,{label:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.password"}),style:{display:"flex"}}),t("regionDatabase_password",{rules:[{required:!0,message:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_password"})},{pattern:/^[^\s]*$/,message:(0,w.formatMessage)({id:"placeholder.no_spaces"})}]})(_.default.createElement(d.default,{type:"password",placeholder:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_password"}),style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}))),_.default.createElement(k,(0,o.default)({},I,{label:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.access_name"}),style:{display:"flex"}}),t("regionDatabase_dbname",{rules:[{required:!0,message:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_access_name"})},{pattern:/^[^\s]*$/,message:(0,w.formatMessage)({id:"placeholder.no_spaces"})}]})(_.default.createElement(d.default,{placeholder:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_access_Name"}),style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})))):_.default.createElement("div",{className:S.default.desc},_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.Not_required_access"}))),"ack"!==u&&"huawei"!==u&&"tencent"!==u&&_.default.createElement(c.default,{className:S.default.antd_row},_.default.createElement("div",{className:S.default.titleBox},_.default.createElement("div",{className:S.default.title},_.default.createElement("span",{className:M?S.default.titleSpan:S.default.en_titleSpan},_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.mirror"})),_.default.createElement(R,{checked:h!=="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.Close"}))||!1,onChange:()=>{this.setState(e=>{return(0,i.default)({},e,{image_enabled:h==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?(0,w.formatMessage)({id:"enterpriseColony.Advanced.Close"}):(0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"})})})},style:{fontSize:"13px",fontWeight:"bold",lineHeight:"30px",height:"30px"}},h))),h!=="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?_.default.createElement("div",{className:S.default.config},_.default.createElement(k,(0,o.default)({},I,{label:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.mirror_name"}),className:S.default.antd_form}),t("domain",{rules:[{required:!0,message:(0,w.formatMessage)({id:"enterpriseColony.Advanced.add_mirror"})},{pattern:/^[^\s]*$/,message:(0,w.formatMessage)({id:"placeholder.no_spaces"})}]})(_.default.createElement(d.default,{placeholder:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_mirror"}),style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}))),_.default.createElement(k,(0,o.default)({},I,{label:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.namespace"}),className:S.default.antd_form}),t("namespace",{rules:[{required:!0,message:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_namespace"})},{pattern:/^[^\s]*$/,message:(0,w.formatMessage)({id:"placeholder.no_spaces"})}]})(_.default.createElement(d.default,{placeholder:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_namespace"}),style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}))),_.default.createElement(k,(0,o.default)({},I,{label:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.user_name"}),className:S.default.antd_form}),t("username",{rules:[{required:!0,message:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_user_name"})},{pattern:/^[^\s]*$/,message:(0,w.formatMessage)({id:"placeholder.no_spaces"})}]})(_.default.createElement(d.default,{placeholder:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_user_name"}),style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}))),_.default.createElement(k,(0,o.default)({},I,{label:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.password"}),className:S.default.antd_form}),t("password",{rules:[{required:!0,message:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_password"})},{pattern:/^[^\s]*$/,message:(0,w.formatMessage)({id:"placeholder.no_spaces"})}]})(_.default.createElement(d.default,{type:"password",placeholder:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_password"}),style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})))):_.default.createElement("div",{className:S.default.desc},_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.Not_required_mirror"}))),_.default.createElement(c.default,{className:S.default.antd_row},_.default.createElement("div",{className:S.default.titleBox},_.default.createElement("div",{className:S.default.title},_.default.createElement("span",{className:M?S.default.titleSpan:S.default.en_titleSpan},_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.creat_node"})),_.default.createElement(R,{checked:C!=="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.Close"}))||!1,onChange:()=>{this.setState(e=>{return(0,i.default)({},e,{node_enabled:C==="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?(0,w.formatMessage)({id:"enterpriseColony.Advanced.Close"}):(0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"})})})},style:{fontSize:"13px",fontWeight:"bold",lineHeight:"30px",height:"30px"}},C))),C!=="".concat((0,w.formatMessage)({id:"enterpriseColony.Advanced.configuration"}))?_.default.createElement("div",{className:S.default.config},_.default.createElement(k,(0,o.default)({},q,{label:_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.node_name"}),className:S.default.antd_form}),t("nodesForChaos",{rules:[{required:!0,message:(0,w.formatMessage)({id:"enterpriseColony.Advanced.input_node"})},{validator:this.handleValidatorsNodes}]})(_.default.createElement(N.default,null)))):_.default.createElement("div",{className:S.default.desc},_.default.createElement(w.FormattedMessage,{id:"enterpriseColony.Advanced.kubernetes"}))),_.default.createElement(c.default,null,_.default.createElement(k,{className:S.default.antd_row_btn},_.default.createElement(l.default,{className:S.default.antd_btn,type:"primary",onClick:()=>{this.toLinkNext("goback")}},_.default.createElement(w.FormattedMessage,{id:"button.previous"})),_.default.createElement(l.default,{className:S.default.antd_btn,type:"primary",onClick:()=>{this.toLinkNext("next")}},_.default.createElement(w.FormattedMessage,{id:"button.next"})))))))}},g=b))||g)||g);a.default=W}}]);