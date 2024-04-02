"use strict";(self.webpackChunkstackoverflow_tags_explorer=self.webpackChunkstackoverflow_tags_explorer||[]).push([[554],{"./node_modules/@mui/material/TablePagination/TablePagination.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TablePagination_TablePagination});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),isHostComponent=__webpack_require__("./node_modules/@mui/base/utils/isHostComponent.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),InputBase=__webpack_require__("./node_modules/@mui/material/InputBase/InputBase.js"),MenuItem=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),Select=__webpack_require__("./node_modules/@mui/material/Select/Select.js"),TableCell=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getToolbarUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiToolbar",slot)}(0,generateUtilityClasses.A)("MuiToolbar",["root","gutters","regular","dense"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","disableGutters","variant"],ToolbarRoot=(0,styled.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,!ownerState.disableGutters&&styles.gutters,styles[ownerState.variant]]}})((({theme,ownerState})=>(0,esm_extends.A)({position:"relative",display:"flex",alignItems:"center"},!ownerState.disableGutters&&{paddingLeft:theme.spacing(2),paddingRight:theme.spacing(2),[theme.breakpoints.up("sm")]:{paddingLeft:theme.spacing(3),paddingRight:theme.spacing(3)}},"dense"===ownerState.variant&&{minHeight:48})),(({theme,ownerState})=>"regular"===ownerState.variant&&theme.mixins.toolbar)),Toolbar_Toolbar=react.forwardRef((function Toolbar(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiToolbar"}),{className,component="div",disableGutters=!1,variant="regular"}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{component,disableGutters,variant}),classes=(ownerState=>{const{classes,disableGutters,variant}=ownerState,slots={root:["root",!disableGutters&&"gutters",variant]};return(0,composeClasses.A)(slots,getToolbarUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(ToolbarRoot,(0,esm_extends.A)({as:component,className:(0,clsx.A)(classes.root,className),ref,ownerState},other))}));var RtlProvider=__webpack_require__("./node_modules/@mui/system/esm/RtlProvider/index.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js");const KeyboardArrowLeft=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),KeyboardArrowRight=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");var IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js");const LastPage=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),FirstPage=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),TablePaginationActions_excluded=["backIconButtonProps","count","disabled","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton","slots","slotProps"],TablePagination_TablePaginationActions=react.forwardRef((function TablePaginationActions(props,ref){var _slots$firstButton,_slots$lastButton,_slots$nextButton,_slots$previousButton,_slots$firstButtonIco,_slots$lastButtonIcon,_slots$nextButtonIcon,_slots$previousButton2;const{backIconButtonProps,count,disabled=!1,getItemAriaLabel,nextIconButtonProps,onPageChange,page,rowsPerPage,showFirstButton,showLastButton,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.A)(props,TablePaginationActions_excluded),isRtl=(0,RtlProvider.I)(),FirstButton=null!=(_slots$firstButton=slots.firstButton)?_slots$firstButton:IconButton.A,LastButton=null!=(_slots$lastButton=slots.lastButton)?_slots$lastButton:IconButton.A,NextButton=null!=(_slots$nextButton=slots.nextButton)?_slots$nextButton:IconButton.A,PreviousButton=null!=(_slots$previousButton=slots.previousButton)?_slots$previousButton:IconButton.A,FirstButtonIcon=null!=(_slots$firstButtonIco=slots.firstButtonIcon)?_slots$firstButtonIco:FirstPage,LastButtonIcon=null!=(_slots$lastButtonIcon=slots.lastButtonIcon)?_slots$lastButtonIcon:LastPage,NextButtonIcon=null!=(_slots$nextButtonIcon=slots.nextButtonIcon)?_slots$nextButtonIcon:KeyboardArrowRight,PreviousButtonIcon=null!=(_slots$previousButton2=slots.previousButtonIcon)?_slots$previousButton2:KeyboardArrowLeft,FirstButtonSlot=isRtl?LastButton:FirstButton,PreviousButtonSlot=isRtl?NextButton:PreviousButton,NextButtonSlot=isRtl?PreviousButton:NextButton,LastButtonSlot=isRtl?FirstButton:LastButton,firstButtonSlotProps=isRtl?slotProps.lastButton:slotProps.firstButton,previousButtonSlotProps=isRtl?slotProps.nextButton:slotProps.previousButton,nextButtonSlotProps=isRtl?slotProps.previousButton:slotProps.nextButton,lastButtonSlotProps=isRtl?slotProps.firstButton:slotProps.lastButton;return(0,jsx_runtime.jsxs)("div",(0,esm_extends.A)({ref},other,{children:[showFirstButton&&(0,jsx_runtime.jsx)(FirstButtonSlot,(0,esm_extends.A)({onClick:event=>{onPageChange(event,0)},disabled:disabled||0===page,"aria-label":getItemAriaLabel("first",page),title:getItemAriaLabel("first",page)},firstButtonSlotProps,{children:isRtl?(0,jsx_runtime.jsx)(LastButtonIcon,(0,esm_extends.A)({},slotProps.lastButtonIcon)):(0,jsx_runtime.jsx)(FirstButtonIcon,(0,esm_extends.A)({},slotProps.firstButtonIcon))})),(0,jsx_runtime.jsx)(PreviousButtonSlot,(0,esm_extends.A)({onClick:event=>{onPageChange(event,page-1)},disabled:disabled||0===page,color:"inherit","aria-label":getItemAriaLabel("previous",page),title:getItemAriaLabel("previous",page)},null!=previousButtonSlotProps?previousButtonSlotProps:backIconButtonProps,{children:isRtl?(0,jsx_runtime.jsx)(NextButtonIcon,(0,esm_extends.A)({},slotProps.nextButtonIcon)):(0,jsx_runtime.jsx)(PreviousButtonIcon,(0,esm_extends.A)({},slotProps.previousButtonIcon))})),(0,jsx_runtime.jsx)(NextButtonSlot,(0,esm_extends.A)({onClick:event=>{onPageChange(event,page+1)},disabled:disabled||-1!==count&&page>=Math.ceil(count/rowsPerPage)-1,color:"inherit","aria-label":getItemAriaLabel("next",page),title:getItemAriaLabel("next",page)},null!=nextButtonSlotProps?nextButtonSlotProps:nextIconButtonProps,{children:isRtl?(0,jsx_runtime.jsx)(PreviousButtonIcon,(0,esm_extends.A)({},slotProps.previousButtonIcon)):(0,jsx_runtime.jsx)(NextButtonIcon,(0,esm_extends.A)({},slotProps.nextButtonIcon))})),showLastButton&&(0,jsx_runtime.jsx)(LastButtonSlot,(0,esm_extends.A)({onClick:event=>{onPageChange(event,Math.max(0,Math.ceil(count/rowsPerPage)-1))},disabled:disabled||page>=Math.ceil(count/rowsPerPage)-1,"aria-label":getItemAriaLabel("last",page),title:getItemAriaLabel("last",page)},lastButtonSlotProps,{children:isRtl?(0,jsx_runtime.jsx)(FirstButtonIcon,(0,esm_extends.A)({},slotProps.firstButtonIcon)):(0,jsx_runtime.jsx)(LastButtonIcon,(0,esm_extends.A)({},slotProps.lastButtonIcon))}))]}))}));const utils_useId=__webpack_require__("./node_modules/@mui/utils/useId/useId.js").A;function getTablePaginationUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiTablePagination",slot)}const TablePagination_tablePaginationClasses=(0,generateUtilityClasses.A)("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);var _InputBase;const TablePagination_excluded=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","disabled","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton","slotProps","slots"],TablePaginationRoot=(0,styled.Ay)(TableCell.A,{name:"MuiTablePagination",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme})=>({overflow:"auto",color:(theme.vars||theme).palette.text.primary,fontSize:theme.typography.pxToRem(14),"&:last-child":{padding:0}}))),TablePaginationToolbar=(0,styled.Ay)(Toolbar_Toolbar,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(props,styles)=>(0,esm_extends.A)({[`& .${TablePagination_tablePaginationClasses.actions}`]:styles.actions},styles.toolbar)})((({theme})=>({minHeight:52,paddingRight:2,[`${theme.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[theme.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${TablePagination_tablePaginationClasses.actions}`]:{flexShrink:0,marginLeft:20}}))),TablePaginationSpacer=(0,styled.Ay)("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(props,styles)=>styles.spacer})({flex:"1 1 100%"}),TablePaginationSelectLabel=(0,styled.Ay)("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(props,styles)=>styles.selectLabel})((({theme})=>(0,esm_extends.A)({},theme.typography.body2,{flexShrink:0}))),TablePaginationSelect=(0,styled.Ay)(Select.A,{name:"MuiTablePagination",slot:"Select",overridesResolver:(props,styles)=>(0,esm_extends.A)({[`& .${TablePagination_tablePaginationClasses.selectIcon}`]:styles.selectIcon,[`& .${TablePagination_tablePaginationClasses.select}`]:styles.select},styles.input,styles.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${TablePagination_tablePaginationClasses.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),TablePaginationMenuItem=(0,styled.Ay)(MenuItem.A,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(props,styles)=>styles.menuItem})({}),TablePaginationDisplayedRows=(0,styled.Ay)("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(props,styles)=>styles.displayedRows})((({theme})=>(0,esm_extends.A)({},theme.typography.body2,{flexShrink:0})));function defaultLabelDisplayedRows({from,to,count}){return`${from}–${to} of ${-1!==count?count:`more than ${to}`}`}function defaultGetAriaLabel(type){return`Go to ${type} page`}const TablePagination_TablePagination=react.forwardRef((function TablePagination(inProps,ref){var _slotProps$select;const props=(0,useThemeProps.A)({props:inProps,name:"MuiTablePagination"}),{ActionsComponent=TablePagination_TablePaginationActions,backIconButtonProps,className,colSpan:colSpanProp,component=TableCell.A,count,disabled=!1,getItemAriaLabel=defaultGetAriaLabel,labelDisplayedRows=defaultLabelDisplayedRows,labelRowsPerPage="Rows per page:",nextIconButtonProps,onPageChange,onRowsPerPageChange,page,rowsPerPage,rowsPerPageOptions=[10,25,50,100],SelectProps={},showFirstButton=!1,showLastButton=!1,slotProps={},slots={}}=props,other=(0,objectWithoutPropertiesLoose.A)(props,TablePagination_excluded),ownerState=props,classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.A)({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},getTablePaginationUtilityClass,classes)})(ownerState),selectProps=null!=(_slotProps$select=null==slotProps?void 0:slotProps.select)?_slotProps$select:SelectProps,MenuItemComponent=selectProps.native?"option":TablePaginationMenuItem;let colSpan;component!==TableCell.A&&"td"!==component||(colSpan=colSpanProp||1e3);const selectId=utils_useId(selectProps.id),labelId=utils_useId(selectProps.labelId);return(0,jsx_runtime.jsx)(TablePaginationRoot,(0,esm_extends.A)({colSpan,ref,as:component,ownerState,className:(0,clsx.A)(classes.root,className)},other,{children:(0,jsx_runtime.jsxs)(TablePaginationToolbar,{className:classes.toolbar,children:[(0,jsx_runtime.jsx)(TablePaginationSpacer,{className:classes.spacer}),rowsPerPageOptions.length>1&&(0,jsx_runtime.jsx)(TablePaginationSelectLabel,{className:classes.selectLabel,id:labelId,children:labelRowsPerPage}),rowsPerPageOptions.length>1&&(0,jsx_runtime.jsx)(TablePaginationSelect,(0,esm_extends.A)({variant:"standard"},!selectProps.variant&&{input:_InputBase||(_InputBase=(0,jsx_runtime.jsx)(InputBase.Ay,{}))},{value:rowsPerPage,onChange:onRowsPerPageChange,id:selectId,labelId},selectProps,{classes:(0,esm_extends.A)({},selectProps.classes,{root:(0,clsx.A)(classes.input,classes.selectRoot,(selectProps.classes||{}).root),select:(0,clsx.A)(classes.select,(selectProps.classes||{}).select),icon:(0,clsx.A)(classes.selectIcon,(selectProps.classes||{}).icon)}),disabled,children:rowsPerPageOptions.map((rowsPerPageOption=>(0,react.createElement)(MenuItemComponent,(0,esm_extends.A)({},!(0,isHostComponent.g)(MenuItemComponent)&&{ownerState},{className:classes.menuItem,key:rowsPerPageOption.label?rowsPerPageOption.label:rowsPerPageOption,value:rowsPerPageOption.value?rowsPerPageOption.value:rowsPerPageOption}),rowsPerPageOption.label?rowsPerPageOption.label:rowsPerPageOption)))})),(0,jsx_runtime.jsx)(TablePaginationDisplayedRows,{className:classes.displayedRows,children:labelDisplayedRows({from:0===count?0:page*rowsPerPage+1,to:-1===count?(page+1)*rowsPerPage:-1===rowsPerPage?count:Math.min(count,(page+1)*rowsPerPage),count:-1===count?-1:count,page})}),(0,jsx_runtime.jsx)(ActionsComponent,{className:classes.actions,backIconButtonProps,count,nextIconButtonProps,onPageChange,page,rowsPerPage,showFirstButton,showLastButton,slotProps:slotProps.actions,slots:slots.actions,getItemAriaLabel,disabled})]})}))}))}}]);