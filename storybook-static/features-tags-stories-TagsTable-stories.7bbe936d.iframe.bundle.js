"use strict";(self.webpackChunkstackoverflow_tags_explorer=self.webpackChunkstackoverflow_tags_explorer||[]).push([[730],{"./src/features/tags/stories/TagsTable.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Empty:()=>Empty,Error:()=>Error,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components_TagsTable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/features/tags/components/TagsTable.jsx"),_MockTagsProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/features/tags/stories/MockTagsProvider.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Features/Tags/TagsTable",component:_components_TagsTable__WEBPACK_IMPORTED_MODULE_0__.A},Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MockTagsProvider__WEBPACK_IMPORTED_MODULE_1__.A,{value:{...args,tagsError:new window.Error(args.tagsError)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_TagsTable__WEBPACK_IMPORTED_MODULE_0__.A,{})});Default.args={tags:[{name:"react",count:100},{name:"javascript",count:200},{name:"css",count:150},{name:"material",count:125},{name:"storybook",count:75}],tagsPerPage:5,page:0,isLoadingTags:!1,isErrorTags:!1,tagsError:"An error occured while fetching tags."};const Loading=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MockTagsProvider__WEBPACK_IMPORTED_MODULE_1__.A,{value:{...args,tags:[{name:"xyz",count:null}]},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_TagsTable__WEBPACK_IMPORTED_MODULE_0__.A,{})});Loading.args={isLoadingTags:!0};const Error=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MockTagsProvider__WEBPACK_IMPORTED_MODULE_1__.A,{value:{...args,tags:[{name:"xyz",count:null}],tagsError:new window.Error(args.tagsError)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_TagsTable__WEBPACK_IMPORTED_MODULE_0__.A,{})});Error.args={isErrorTags:!0,tagsError:"An error occured while fetching tags."};const Empty=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MockTagsProvider__WEBPACK_IMPORTED_MODULE_1__.A,{value:{...args,tagsError:new window.Error(args.tagsError)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_TagsTable__WEBPACK_IMPORTED_MODULE_0__.A,{})});Empty.args={tags:[],tagsPerPage:5,page:0,isLoadingTags:!1,isErrorTags:!1,tagsError:"An error occured while fetching tags."},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <MockTagsProvider value={{\n  ...args,\n  tagsError: new window.Error(args.tagsError)\n}}>\r\n    <TagsTable />\r\n  </MockTagsProvider>",...Default.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"args => <MockTagsProvider value={{\n  ...args,\n  tags: [{\n    name: 'xyz',\n    count: null\n  }]\n}}>\r\n    <TagsTable />\r\n  </MockTagsProvider>",...Loading.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"args => <MockTagsProvider value={{\n  ...args,\n  tags: [{\n    name: 'xyz',\n    count: null\n  }],\n  tagsError: new window.Error(args.tagsError)\n}}>\r\n    <TagsTable />\r\n  </MockTagsProvider>",...Error.parameters?.docs?.source}}},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"args => <MockTagsProvider value={{\n  ...args,\n  tagsError: new window.Error(args.tagsError)\n}}>\r\n    <TagsTable />\r\n  </MockTagsProvider>",...Empty.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Loading","Error","Empty"]},"./src/features/tags/components/TagsTable.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/TableContainer/TableContainer.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Table/Table.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/TableHead/TableHead.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/TableBody/TableBody.js"),_mui_material__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),_mui_material__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/material/CircularProgress/CircularProgress.js"),_contexts_TagsContext__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/contexts/TagsContext.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TagsTable(){const{isLoadingTags,isErrorTags,tagsError,tags,currentTags}=(0,_contexts_TagsContext__WEBPACK_IMPORTED_MODULE_0__.ac)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.A,{component:_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,elevation:2,sx:{maxHeight:"70vh",overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{stickyHeader:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,{sx:{fontWeight:"bold"},children:"Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,{sx:{fontWeight:"bold"},align:"right",children:"Count"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.A,{children:[isErrorTags&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,{colSpan:"100%",align:"center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.A,{severity:"error",align:"center",children:[null==tagsError?void 0:tagsError.message," Please try again later."]})})})}),isLoadingTags&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,{colSpan:"100%",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.A,{})})})}),0===(null==tags?void 0:tags.length)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,{align:"center",colSpan:"100%",children:"There are no tags to display."})}),null==currentTags?void 0:currentTags.map((tag=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,{component:"th",scope:"row",children:tag.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,{align:"right",children:tag.count})]},tag.name)))]})]})})}const __WEBPACK_DEFAULT_EXPORT__=TagsTable;TagsTable.__docgenInfo={description:"",methods:[],displayName:"TagsTable"}},"./src/features/tags/stories/MockTagsProvider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_contexts_TagsContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/contexts/TagsContext.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function MockTagsProvider(_ref){var _value$sortedTags;let{children,value}=_ref;const{tags,sortField,sortDirection,tagsPerPage,page}=value,sortedTags=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>tags?[...tags].sort(((a,b)=>{const isAsc="asc"===sortDirection;return"count"===sortField?isAsc?a.count-b.count:b.count-a.count:isAsc?a.name.localeCompare(b.name):b.name.localeCompare(a.name)})):[]),[tags,sortField,sortDirection]);value.sortedTags=sortedTags;const currentTags=null===(_value$sortedTags=value.sortedTags)||void 0===_value$sortedTags?void 0:_value$sortedTags.slice(page*tagsPerPage,page*tagsPerPage+tagsPerPage);return value.currentTags=currentTags,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts_TagsContext__WEBPACK_IMPORTED_MODULE_1__.ji.Provider,{value,children})}const __WEBPACK_DEFAULT_EXPORT__=MockTagsProvider;MockTagsProvider.__docgenInfo={description:"",methods:[],displayName:"MockTagsProvider"}}}]);