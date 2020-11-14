(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Zprograms\AngularFireChat\FireChatNG\src\main.ts */"zUnb");


/***/ }),

/***/ "3tD2":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat.service */ "sjK5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "KN7V");
/* harmony import */ var angular_emojify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-emojify */ "5EyG");











const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = function (a0) { return { "color": a0 }; };
function ChatComponent_div_0_ng_container_9_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "emojify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r9.msgColorBG));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx_r9.msgColorText));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, msg_r10.createdAt, "shortTime"), " : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, msg_r10.content), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", msg_r10.userPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msg_r10.userName, " ");
} }
function ChatComponent_div_0_ng_container_9_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_0_ng_container_9_div_1_div_1_div_1_div_1_Template, 12, 15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", chat_r6.messages);
} }
function ChatComponent_div_0_ng_container_9_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_0_ng_container_9_div_1_div_1_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r6.eventId == ctx_r7.chatId);
} }
function ChatComponent_div_0_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_0_ng_container_9_div_1_div_1_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r6 = ctx.$implicit;
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r6.ownersId.indexOf(user_r1.uid) > -1);
} }
function ChatComponent_div_0_ng_container_9_emoji_mart_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "emoji-mart", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emojiSelect", function ChatComponent_div_0_ng_container_9_emoji_mart_2_Template_emoji_mart_emojiSelect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.addEmoji($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("set", ctx_r5.set);
} }
function ChatComponent_div_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_0_ng_container_9_div_1_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_div_0_ng_container_9_emoji_mart_2_Template, 1, 1, "emoji-mart", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const chats_r3 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", chats_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showEmojisPicker);
} }
function ChatComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Command Panel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_0_Template_fa_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.deleteChat(ctx_r16.chatId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatComponent_div_0_ng_container_9_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_div_0_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.newMsg = $event; })("keydown.enter", function ChatComponent_div_0_Template_input_keydown_enter_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.emojiBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.iconArrowLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.iconTrashAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx_r0.chat$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newMsg);
} }
class ChatComponent {
    constructor(cs, route, authService) {
        this.cs = cs;
        this.route = route;
        this.authService = authService;
        this.iconArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowCircleLeft"];
        this.iconTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"];
        this.newMsg = "";
        this.showEmojisPicker = false;
        this.sets = [
            'native',
            'google',
            'twitter',
            'facebook',
            'emojione',
            'apple',
            'messenger'
        ];
        this.set = 'twitter';
        this.emojis = [
            ":100:", ":aries:", ":taurus:", ":sagittarius:", ":capricorn:", ":aquarius:", ":pisces:", ":cancer:",
            ":thumbsup:", ":smile:", ":grinning:",
            ""
        ];
        this.auth = authService;
    }
    changeBGColor(color) {
        this.msgColorBG = color;
    }
    changeTextColor(color) {
        this.msgColorText = color;
    }
    ngOnInit() {
        this.chatId = this.route.snapshot.paramMap.get('id');
        this.msgColorBG = "white";
        this.msgColorText = "black";
        const source = this.cs.get(this.chatId);
        this.chat$ = this.cs.getChatsCollection().valueChanges({ idField: 'eventId' });
        /*
        this.emojis.forEach(e => {e = ':'+e.toString+':'})
        console.log(this.emojis)*/
    }
    emojiBox() {
        this.showEmojisPicker = !this.showEmojisPicker;
        console.log(this.showEmojisPicker);
    }
    addEmojiToMessage(emoji) {
        this.newMsg += emoji;
    }
    addEmoji(event) {
        console.log(this.newMsg);
        const { newMsg } = this;
        console.log(newMsg);
        console.log(`${event.emoji.native}`);
        const text = `${newMsg}${event.emoji.native}`;
        this.newMsg = text;
        // this.showEmojiPicker = false;
    }
    scrollbarToBot() {
        let v = window.setInterval(function () {
            let elem = document.getElementById('MyChat');
            elem.scrollTo(0, elem.scrollHeight);
        }, 10);
        setTimeout(() => {
            clearInterval(v);
        }, 100);
    }
    submit() {
        console.log(this.newMsg);
        if (!this.newMsg) {
            return alert('you need to enter something');
        }
        else {
            this.cs.sendMessage(this.chatId, this.newMsg);
            //réinit le newMsg
            this.newMsg = '';
        }
        this.scrollbarToBot();
    }
    trackByCreated(i, msg) {
        return msg.createdAt;
    }
    deleteChat(chatId) {
        this.cs.delete(chatId);
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "card-body", "bg-light"], [1, "d-flex", "flex-row", "justify-content-center"], ["routerLink", "/userChats", 2, "font-size", "2.33em", "margin", "0 4vw 0 6vw", 3, "icon"], [1, "text-center", 2, "font-size", "2.33em", "margin", "0 6vw 0 6vw"], [2, "font-size", "2.33em", "margin", "0 6vw 0 4vw", 3, "icon", "click"], [1, "d-flex", "flex-row"], ["class", "chatContainer", 4, "ngIf"], [1, "form"], ["placeHolder", "type enter to send", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "btn-primary", 3, "click"], [1, "fa", "fa-smile-o"], [1, "btn", "btn-success", 3, "click"], [1, "chatContainer"], [4, "ngFor", "ngForOf"], ["class", "emoji-mart", "title", "Pick your emoji\u2026", 3, "set", "emojiSelect", 4, "ngIf"], ["id", "MyChat", 4, "ngIf"], ["id", "MyChat"], [1, "card-body", "container", "d-flex", "flex-row"], [1, "text-break", "mes", 3, "ngStyle"], [3, "ngStyle"], [1, "float-right", 2, "margin-left", "1vw"], ["alt", "PP", 3, "src"], ["title", "Pick your emoji\u2026", 1, "emoji-mart", 3, "set", "emojiSelect"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatComponent_div_0_Template, 20, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_8__["PickerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], angular_emojify__WEBPACK_IMPORTED_MODULE_9__["EmojifyPipe"]], styles: [".userprofile[_ngcontent-%COMP%]   btn[_ngcontent-%COMP%]{\r\n  max-width:50px;\r\n}\r\n\r\n.chatContainer[_ngcontent-%COMP%]{\r\n  min-width: 800px;\r\n}\r\n\r\n.mes[_ngcontent-%COMP%]{\r\n  border-radius: 25px;\r\n  color:black;\r\n  border: solid 1px black;\r\n  box-shadow: 4px 4px 4px black;\r\n  text-align: left;\r\n  padding: 10px;\r\n  margin:auto;\r\n}\r\n\r\n#MyChat[_ngcontent-%COMP%]{\r\n  min-width: -webkit-max-content;\r\n  min-width: max-content;\r\n  width:50vw;\r\n  height:450px;\r\n  overflow: auto;\r\n  background-color: lightblue;\r\n}\r\n\r\n.message[_ngcontent-%COMP%]{\r\n  width: auto;\r\n  color:black;\r\n  border-radius: 25px;\r\n  margin: auto;\r\n  padding: 0;\r\n  text-align: left;\r\n}\r\n\r\n.btn-success[_ngcontent-%COMP%]{\r\n  width:100%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  border-radius: 150px;\r\n  width: 30px;\r\n  display:inline-block;\r\n}\r\n\r\n.cmdP[_ngcontent-%COMP%] {\r\n  margin:0 2vw 0 2vw;\r\n}\r\n\r\n.colblock[_ngcontent-%COMP%] {\r\n  border-radius: 100%;\r\n  box-shadow: 3px 3px 0;\r\n  margin:auto;\r\n  width:2.5vw;\r\n  height:2.5vw;\r\n  border:black solid 1px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw4QkFBc0I7RUFBdEIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcnByb2ZpbGUgYnRue1xyXG4gIG1heC13aWR0aDo1MHB4O1xyXG59XHJcblxyXG4uY2hhdENvbnRhaW5lcntcclxuICBtaW4td2lkdGg6IDgwMHB4O1xyXG59XHJcblxyXG4ubWVze1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjphdXRvO1xyXG59XHJcblxyXG4jTXlDaGF0e1xyXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgd2lkdGg6NTB2dztcclxuICBoZWlnaHQ6NDUwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcblxyXG4ubWVzc2FnZXtcclxuICB3aWR0aDogYXV0bztcclxuICBjb2xvcjpibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5idG4tc3VjY2Vzc3tcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jbWRQIHtcclxuICBtYXJnaW46MCAydncgMCAydnc7XHJcbn1cclxuXHJcbi5jb2xibG9jayB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDA7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgd2lkdGg6Mi41dnc7XHJcbiAgaGVpZ2h0OjIuNXZ3O1xyXG4gIGJvcmRlcjpibGFjayBzb2xpZCAxcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css'],
            }]
    }], function () { return [{ type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "8/PQ":
/*!*****************************************************!*\
  !*** ./src/app/components/anima/anima.component.ts ***!
  \*****************************************************/
/*! exports provided: AnimaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimaComponent", function() { return AnimaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "RyHr");




class AnimaComponent {
    constructor() {
        this.addLight = () => {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new three__WEBPACK_IMPORTED_MODULE_1__["DirectionalLight"](color, intensity);
            light.position.set(0, 20, 20);
            this.scene.add(light);
        };
        this.addLightParam = (color, intensity, [x, y, z]) => {
            const light = new three__WEBPACK_IMPORTED_MODULE_1__["DirectionalLight"](color, intensity);
            light.position.set(x, y, z);
            this.scene.add(light);
        };
        this.deposerCreerForme = () => {
            this.forme = new three__WEBPACK_IMPORTED_MODULE_1__["Group"]();
            let geometrie1 = new three__WEBPACK_IMPORTED_MODULE_1__["TorusKnotGeometry"](10, 3, 100, 16);
            //let geometrie2 = new THREE.RingGeometry(5,15,120,120,180,2);
            let geometrie3 = new three__WEBPACK_IMPORTED_MODULE_1__["BoxGeometry"](4, 6, 8, 20, 20, 20);
            let geometrie4 = new three__WEBPACK_IMPORTED_MODULE_1__["OctahedronGeometry"](10, 5);
            let materiel = new three__WEBPACK_IMPORTED_MODULE_1__["MeshPhongMaterial"]({
                color: '#15f2ff',
                transparent: true,
                opacity: 1,
                wireframe: true,
                wireframeLinewidth: 5,
            });
            /*
                this.setObject(geometrie1,materiel,0)
                this.setObject(geometrie3,materiel,25)
                this.setObject(geometrie3,materiel,-25)
            */
            //this.setObject(geometrie4,materiel,-40)
            //this.setObject(geometrie4,materiel,50)
            let sunUrl = '../../../assets/images/2k_sun.jpg';
            this.setMesh(this.createSphere(2200, sunUrl, ''), -3000);
            this.setMesh(this.createSphere(30), 10);
            this.setMesh(this.createCloud(20), 10);
            let moonUrl = '../../../assets/images/2k_moon.jpg';
            this.setMesh(this.createSphere(7, moonUrl, ''), 50);
            this.scene.add(this.forme);
        };
        this.setMesh = (mesh, posX) => {
            mesh.position.x = posX;
            this.forme.add(mesh);
        };
        this.setObject = (geoX, mat, positionX) => {
            const o = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geoX, mat);
            o.position.x = positionX;
            this.forme.add(o);
        };
        this.renderer = () => {
            this.rendu.render(this.scene, this.camera);
        };
        this.animer = () => {
            requestAnimationFrame(this.animer);
            this.forme.children.forEach(el => {
                el.rotation.x += 0.0000000000000001;
                el.rotation.y += 0.0025;
            });
            this.renderer();
        };
        this.createCube = function (color) {
            var color = color || 0x00ff00;
            //Cube geometry
            var geometry = new three__WEBPACK_IMPORTED_MODULE_1__["BoxGeometry"](1, 1, 1);
            //Basic material
            var material = new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ color: color });
            //Mesh
            var cube = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, material);
            return cube;
        };
        this.createSphere = function (radius, mapUrl = '../../../assets/images/earthmap4k.jpg', bumpMapUrl = '../../../assets/images/earthbump4k.jpg') {
            var radius = radius || 1;
            let map, bumpMap;
            var mapUrl = mapUrl;
            var bumpMapUrl = bumpMapUrl;
            // widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
            // heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
            var globeGeometry = new three__WEBPACK_IMPORTED_MODULE_1__["SphereGeometry"](radius, 32, 16);
            //Create the texture map
            map = new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]().load(mapUrl);
            bumpMap = new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]().load(bumpMapUrl);
            var globeMaterial = new three__WEBPACK_IMPORTED_MODULE_1__["MeshPhongMaterial"]({ map: map, bumpMap: bumpMap, bumpScale: 2 });
            var globeMesh = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](globeGeometry, globeMaterial);
            console.log('m', globeMaterial);
            return globeMesh;
        };
        this.createCloud = function (radius) {
            //Geo
            var cloudGeometry = new three__WEBPACK_IMPORTED_MODULE_1__["SphereGeometry"](radius, 32, 32);
            //Material
            var cloudMaterial = new three__WEBPACK_IMPORTED_MODULE_1__["MeshPhongMaterial"]({
                map: three__WEBPACK_IMPORTED_MODULE_1__["ImageUtils"].loadTexture('../../../assets/images/earthclouds4k.png'),
                opacity: 0.8,
                transparent: true,
                depthWrite: false
            });
            //Mesh
            var cloudMesh = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](cloudGeometry, cloudMaterial);
            return cloudMesh;
        };
    }
    ngOnInit() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](35, window.innerWidth / window.innerHeight, 0.2, 3000);
        this.camera.position.z = 100;
        this.threeDWindow = document.querySelector('#animaComponent');
        this.rendu = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]();
        const loader = new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]();
        let texture = loader.load('../../../assets/images/2k_stars_milky_way.jpg');
        this.scene.background = texture;
        //this.rendu.setClearColor('lightblack');
        this.rendu.setSize(window.innerWidth / 1.2, window.innerHeight / 1.2);
        this.threeDWindow.appendChild(this.rendu.domElement);
        this.addLight();
        this.addLightParam('white', 1.5, [-2010, 0, 0]);
        this.deposerCreerForme();
        //rotate the planets
        this.animer();
        //manage mouse Controls
        this.control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__["OrbitControls"](this.camera, this.threeDWindow);
        this.control.update();
        this.renderer();
    }
}
AnimaComponent.ɵfac = function AnimaComponent_Factory(t) { return new (t || AnimaComponent)(); };
AnimaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimaComponent, selectors: [["app-anima"]], decls: 1, vars: 0, consts: [["id", "animaComponent"]], template: function AnimaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["#animaComponent[_ngcontent-%COMP%]{\r\n    background-image: url('2k_stars_milky_way.jpg') no-repeat center center;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbmltYS9hbmltYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUVBQThGOztBQUVsRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5pbWEvYW5pbWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhbmltYUNvbXBvbmVudHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8ya19zdGFyc19taWxreV93YXkuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anima',
                templateUrl: './anima.component.html',
                styleUrls: ['./anima.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    firebaseConfig: {
        apiKey: "AIzaSyD4-4zViLg8oKqVdf9uWh0AZZRts-kRRSQ",
        authDomain: "firechatng-cf387.firebaseapp.com",
        databaseURL: "https://firechatng-cf387.firebaseio.com",
        projectId: "firechatng-cf387",
        storageBucket: "firechatng-cf387.appspot.com",
        messagingSenderId: "655044225790",
        appId: "1:655044225790:web:45781458bb00f15e4813af",
        measurementId: "G-NZYE9D7MPL"
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function NavbarComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ul_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.openNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.openNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor() {
        this.open = false;
    }
    ngOnInit() {
    }
    openNav() {
        this.open = !this.open;
        console.log(this.open);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 4, vars: 2, consts: [[1, "navBar"], ["id", "cpBar", 4, "ngIf", "ngIfElse"], ["nav", ""], ["id", "cpBar"], [1, "btn", "bg-light", 3, "click"], [1, "fa-bars", "fa"], ["routerLink", "/home", 1, "btn", "bg-light"], [1, "fa-home", "fa"], ["routerLink", "/userChats", 1, "btn", "bg-light"], [1, "fa-fire", "fa"], ["routerLink", "/youtubePlayer", 1, "btn", "bg-light"], [1, "fa-youtube-play", "fa"], ["id", "cpBarRight"], ["routerLink", "/skybox", 1, "btn", "bg-light"], [1, "fa", "fa-gamepad"], ["routerLink", "/anima", 1, "btn", "bg-light"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_ul_1_Template, 3, 0, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_ng_template_2_Template, 14, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.open)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["@media screen and (min-width:950px){\r\n\r\n    #cpBar[_ngcontent-%COMP%]{\r\n        max-width: -webkit-min-content;\r\n        max-width: min-content;\r\n        position: fixed;\r\n        margin-top:25vh;\r\n        left:0px;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    #cpBarRight[_ngcontent-%COMP%]{\r\n        max-width: -webkit-min-content;\r\n        max-width: min-content;\r\n        position: fixed;\r\n        margin-top:25vh;\r\n        right:2vw;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    \r\n    button[_ngcontent-%COMP%]{\r\n        width:-webkit-fit-content;\r\n        width:-moz-fit-content;\r\n        width:fit-content;\r\n        height: -webkit-fit-content;\r\n        height: -moz-fit-content;\r\n        height: fit-content;\r\n        color: rgb(221, 54, 24);\r\n        margin-bottom: 4vh;\r\n    }\r\n    \r\n    i[_ngcontent-%COMP%]{\r\n    width:4vh;\r\n    padding:1vh;\r\n    border-radius: 25rem;\r\n    background-color: rgba(223, 163, 0, .612);\r\n    }\r\n    \r\n}\r\n\r\n@media screen and (max-width:950px){\r\n    .navBar[_ngcontent-%COMP%]{padding-top: 1vh;}\r\n#cpBar[_ngcontent-%COMP%]{\r\n    max-width: -webkit-min-content;\r\n    max-width: min-content;\r\n    position: fixed;\r\n    margin:auto;\r\n    display: flex;\r\n    flex-direction: row;   \r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    width:-webkit-fit-content;\r\n    width:-moz-fit-content;\r\n    width:fit-content;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    color: rgb(221, 54, 24);\r\n    margin-right: 4vh;\r\n}\r\n\r\ni[_ngcontent-%COMP%]{\r\nwidth:4vh;\r\npadding:1vh;\r\nborder-radius: 25vh;\r\nbackground-color: rgba(223, 163, 0, .612);\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUk7UUFDSSw4QkFBc0I7UUFBdEIsc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixlQUFlO1FBQ2YsUUFBUTtRQUNSLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSw4QkFBc0I7UUFBdEIsc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixlQUFlO1FBQ2YsU0FBUztRQUNULGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSx5QkFBaUI7UUFBakIsc0JBQWlCO1FBQWpCLGlCQUFpQjtRQUNqQiwyQkFBbUI7UUFBbkIsd0JBQW1CO1FBQW5CLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsa0JBQWtCO0lBQ3RCOztJQUVBO0lBQ0EsU0FBUztJQUNULFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIseUNBQXlDO0lBQ3pDOztBQUVKOztBQUVBO0lBQ0ksUUFBUSxnQkFBZ0IsQ0FBQztBQUM3QjtJQUNJLDhCQUFzQjtJQUF0QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQWlCO0lBQWpCLHNCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtBQUNBLFNBQVM7QUFDVCxXQUFXO0FBQ1gsbUJBQW1CO0FBQ25CLHlDQUF5QztBQUN6QztBQUNBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk1MHB4KXtcclxuXHJcbiAgICAjY3BCYXJ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyNXZoO1xyXG4gICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAjY3BCYXJSaWdodHtcclxuICAgICAgICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBtYXJnaW4tdG9wOjI1dmg7XHJcbiAgICAgICAgcmlnaHQ6MnZ3O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOmZpdC1jb250ZW50O1xyXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgY29sb3I6IHJnYigyMjEsIDU0LCAyNCk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHZoO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpe1xyXG4gICAgd2lkdGg6NHZoO1xyXG4gICAgcGFkZGluZzoxdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAxNjMsIDAsIC42MTIpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTUwcHgpe1xyXG4gICAgLm5hdkJhcntwYWRkaW5nLXRvcDogMXZoO31cclxuI2NwQmFye1xyXG4gICAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7ICAgXHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGNvbG9yOiByZ2IoMjIxLCA1NCwgMjQpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0dmg7XHJcbn1cclxuXHJcbml7XHJcbndpZHRoOjR2aDtcclxucGFkZGluZzoxdmg7XHJcbmJvcmRlci1yYWRpdXM6IDI1dmg7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAxNjMsIDAsIC42MTIpO1xyXG59XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GiPk":
/*!*****************************************************************!*\
  !*** ./src/app/components/matter-game/matter-game.component.ts ***!
  \*****************************************************************/
/*! exports provided: MatterGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatterGameComponent", function() { return MatterGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! matter-js */ "uL9F");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_1__);



class MatterGameComponent {
    constructor() {
        this.init = () => {
            let engine = matter_js__WEBPACK_IMPORTED_MODULE_1__["Engine"].create();
            let render = matter_js__WEBPACK_IMPORTED_MODULE_1__["Render"].create({
                element: document.getElementById('matter'),
                engine: engine,
                options: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    wireframes: false,
                }
            });
            //set canvas width height
            render.canvas.setAttribute('width', "800");
            render.canvas.setAttribute('height', "600px");
            let ground = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].rectangle(600, 550, 1200, 100, { isStatic: true });
            let wallLeft = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].rectangle(0, 200, 60, 810, { isStatic: true });
            let wallRight = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].rectangle(790, 200, 60, 810, { isStatic: true });
            let boxA = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].rectangle(400, 200, 80, 80);
            let boxB = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].rectangle(450, 50, 80, 80);
            let mouse = matter_js__WEBPACK_IMPORTED_MODULE_1__["Mouse"].create(render.canvas);
            let mouseConstraint = matter_js__WEBPACK_IMPORTED_MODULE_1__["MouseConstraint"].create(engine, {
                mouse: mouse,
            });
            render.controller.mouse = mouse;
            let stack = matter_js__WEBPACK_IMPORTED_MODULE_1__["Composites"].stack(10, 10, 10, 10, 10, 10, (x, y) => {
                return matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].polygon(x, y, 18, 15, {
                    render: {
                        fillStyle: 'goldenrod',
                        strokeStyle: 'whitesmoke',
                        lineWidth: 2,
                    }
                });
            });
            let supp = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].rectangle(600, 400, 300, 20, { isStatic: true });
            let ball = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].circle(250, 300, 30);
            let sling = matter_js__WEBPACK_IMPORTED_MODULE_1__["Constraint"].create({
                pointA: { x: 250, y: 300 },
                bodyB: ball,
                stiffness: 0.005,
            });
            let firing = false;
            matter_js__WEBPACK_IMPORTED_MODULE_1__["Events"].on(mouseConstraint, 'enddrag', function (e) {
                if (e.body === ball)
                    firing = true;
            });
            matter_js__WEBPACK_IMPORTED_MODULE_1__["Events"].on(engine, 'afterUpdate', function () {
                if (firing && Math.abs(ball.position.x - 250) < 15 && Math.abs(ball.position.y - 300) < 15) {
                    ball = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].circle(250, 300, 30);
                    matter_js__WEBPACK_IMPORTED_MODULE_1__["World"].add(engine.world, ball);
                    sling.bodyB = ball;
                    firing = false;
                }
            });
            matter_js__WEBPACK_IMPORTED_MODULE_1__["World"].add(engine.world, [ground, ball, wallLeft, wallRight]);
            matter_js__WEBPACK_IMPORTED_MODULE_1__["World"].add(engine.world, stack);
            matter_js__WEBPACK_IMPORTED_MODULE_1__["World"].add(engine.world, mouseConstraint);
            matter_js__WEBPACK_IMPORTED_MODULE_1__["World"].add(engine.world, sling);
            matter_js__WEBPACK_IMPORTED_MODULE_1__["Engine"].run(engine);
            matter_js__WEBPACK_IMPORTED_MODULE_1__["Render"].run(render);
        };
    }
    ngOnInit() {
        this.init();
    }
}
MatterGameComponent.ɵfac = function MatterGameComponent_Factory(t) { return new (t || MatterGameComponent)(); };
MatterGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatterGameComponent, selectors: [["app-matter-game"]], decls: 1, vars: 0, consts: [["id", "matter"]], template: function MatterGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["#matter[_ngcontent-%COMP%]{\r\nmax-width: -webkit-fit-content;\r\nmax-width: -moz-fit-content;\r\nmax-width: fit-content;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXR0ZXItZ2FtZS9tYXR0ZXItZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOEJBQXNCO0FBQXRCLDJCQUFzQjtBQUF0QixzQkFBc0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hdHRlci1nYW1lL21hdHRlci1nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWF0dGVye1xyXG5tYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatterGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-matter-game',
                templateUrl: './matter-game.component.html',
                styleUrls: ['./matter-game.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NmkA":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-profil/user-profil.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilComponent", function() { return UserProfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserProfilComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserProfilComponent.ɵfac = function UserProfilComponent_Factory(t) { return new (t || UserProfilComponent)(); };
UserProfilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfilComponent, selectors: [["app-user-profil"]], decls: 2, vars: 0, template: function UserProfilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-profil works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcm9maWwvdXNlci1wcm9maWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profil',
                templateUrl: './user-profil.component.html',
                styleUrls: ['./user-profil.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/chat.service */ "sjK5");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to FireChatNG !!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.auth.googleSignin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login with Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(authService, cs) {
        this.authService = authService;
        this.cs = cs;
        this.title = 'FireChatNG';
        this.auth = authService;
        this.chatServe = cs;
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 4, consts: [[1, "login"], [1, "logo"], ["class", "row", 4, "ngIf", "ngIfElse"], ["login", ""], [1, "row"], [1, "card-body", "bg-light", "main"], ["type", "button", "name", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " FireChatNG ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_ng_template_7_Template, 5, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.auth.user$))("ngIfElse", _r1);
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".row[_ngcontent-%COMP%]{\r\n  display:flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.col[_ngcontent-%COMP%]{\r\n  display:flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]{\r\n  display:grid;\r\n  place-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\ntext-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;\r\nfont-size:50px;\r\nfont-weight: bolder;\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n  margin:10vw;\r\n  border-radius: 25px;\r\n  height: 80vh;\r\n  width:15vw;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]{\r\n  margin:4vh 5vh 5vh 5vh;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  border-radius: 25px;\r\n  text-align: center;\r\n\r\n}\r\n\r\n.centerLog[_ngcontent-%COMP%]{\r\n  margin-top:30vh;\r\n  color:black;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  width:75vw;\r\n}\r\n\r\n@media screen and (max-width:950px){\r\n  .logo[_ngcontent-%COMP%]{\r\n    margin-top:8vh;\r\n  }\r\n\r\n  .center[_ngcontent-%COMP%]{\r\n    width: -webkit-min-content;\r\n    width: min-content;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0FBQ0Esa0xBQWtMO0FBQ2xMLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkI7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjs7QUFFcEI7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsMEJBQWtCO0lBQWxCLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY29se1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubG9naW57XHJcbiAgZGlzcGxheTpncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbnRleHQtc2hhZG93OiAwIDAgMjBweCAjZmVmY2M5LCAxMHB4IC0xMHB4IDMwcHggI2ZlZWM4NSwgLTIwcHggLTIwcHggNDBweCAjZmZhZTM0LCAyMHB4IC00MHB4IDUwcHggI2VjNzYwYywgLTIwcHggLTYwcHggNjBweCAjY2Q0NjA2LCAwIC04MHB4IDcwcHggIzk3MzcxNiwgMTBweCAtOTBweCA4MHB4ICM0NTFiMGU7XHJcbmZvbnQtc2l6ZTo1MHB4O1xyXG5mb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG5cclxuLmxlZnQge1xyXG4gIG1hcmdpbjoxMHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIHdpZHRoOjE1dnc7XHJcbn1cclxuXHJcbi5tYWlue1xyXG4gIG1hcmdpbjo0dmggNXZoIDV2aCA1dmg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuXHJcbi5jZW50ZXJMb2d7XHJcbiAgbWFyZ2luLXRvcDozMHZoO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOjc1dnc7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTUwcHgpe1xyXG4gIC5sb2dve1xyXG4gICAgbWFyZ2luLXRvcDo4dmg7XHJcbiAgfVxyXG5cclxuICAuY2VudGVye1xyXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var angular_emojify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-emojify */ "5EyG");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "KN7V");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/chat/chat.component */ "3tD2");
/* harmony import */ var _shared_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/home/home.component */ "ZEqh");
/* harmony import */ var _components_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/audio-player/audio-player.component */ "yDXV");
/* harmony import */ var _components_matter_game_matter_game_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/matter-game/matter-game.component */ "GiPk");
/* harmony import */ var _components_user_chats_user_chats_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user-chats/user-chats.component */ "dgf1");
/* harmony import */ var _components_user_profil_user_profil_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user-profil/user-profil.component */ "NmkA");
/* harmony import */ var _components_youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/youtube-player/youtube-player.component */ "fZIn");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _components_anima_anima_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/anima/anima.component */ "8/PQ");
/* harmony import */ var _skybox3d_skybox3d_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./skybox3d/skybox3d.component */ "j3fi");








//not used

//actually used














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            // Initialize Firebase
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            angular_emojify__WEBPACK_IMPORTED_MODULE_8__["EmojifyModule"],
            _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_9__["PickerModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_10__["YouTubePlayerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_11__["ChatComponent"],
        _shared_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"],
        _components_user_profil_user_profil_component__WEBPACK_IMPORTED_MODULE_16__["UserProfilComponent"],
        _components_user_chats_user_chats_component__WEBPACK_IMPORTED_MODULE_15__["UserChatsComponent"],
        _components_youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_17__["YoutubePlayerComponent"],
        _components_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_13__["AudioPlayerComponent"],
        _components_matter_game_matter_game_component__WEBPACK_IMPORTED_MODULE_14__["MatterGameComponent"],
        _components_anima_anima_component__WEBPACK_IMPORTED_MODULE_19__["AnimaComponent"],
        _skybox3d_skybox3d_component__WEBPACK_IMPORTED_MODULE_20__["Skybox3dComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        angular_emojify__WEBPACK_IMPORTED_MODULE_8__["EmojifyModule"],
        _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_9__["PickerModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_10__["YouTubePlayerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_11__["ChatComponent"],
                    _shared_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"],
                    _components_user_profil_user_profil_component__WEBPACK_IMPORTED_MODULE_16__["UserProfilComponent"],
                    _components_user_chats_user_chats_component__WEBPACK_IMPORTED_MODULE_15__["UserChatsComponent"],
                    _components_youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_17__["YoutubePlayerComponent"],
                    _components_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_13__["AudioPlayerComponent"],
                    _components_matter_game_matter_game_component__WEBPACK_IMPORTED_MODULE_14__["MatterGameComponent"],
                    _components_anima_anima_component__WEBPACK_IMPORTED_MODULE_19__["AnimaComponent"],
                    _skybox3d_skybox3d_component__WEBPACK_IMPORTED_MODULE_20__["Skybox3dComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    // Initialize Firebase
                    _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                    angular_emojify__WEBPACK_IMPORTED_MODULE_8__["EmojifyModule"],
                    _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_9__["PickerModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_10__["YouTubePlayerModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZEqh":
/*!***********************************************!*\
  !*** ./src/app/shared/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat.service */ "sjK5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function HomeComponent_div_0_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_0_span_11_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.joinChatId = $event; })("keydown.enter", function HomeComponent_div_0_span_11_Template_input_keydown_enter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.join(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_span_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.switchJoin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.joinChatId);
} }
function HomeComponent_div_0_ng_template_12_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "How to access a Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " To Join a FireChat you need ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The ID of the Chat , then click on join FireChat and paste it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "To Create a new FireChat, then go to your ChatList with the navbar at the left then add your Friend's ID to the chatOwners");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*Note : You can multiple Chats with the same Name as each one will be created with a unique timestamp*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*New features, chatArchives coming soon...* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_ng_template_12_span_0_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.switchCreate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Create FireChat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_ng_template_12_span_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.switchJoin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Join FireChat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_0_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_ng_template_12_span_0_Template, 20, 0, "span", 6);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.createChat)("ngIfElse", _r5);
} }
function HomeComponent_div_0_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chat Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_ng_template_14_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.addChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Bring the fire!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Your ID :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_0_span_11_Template, 5, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_0_ng_template_12_Template, 1, 2, "ng-template", 7, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_0_ng_template_14_Template, 7, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.auth.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sign Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.ngIf;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r1.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.uid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.joinChat)("ngIfElse", _r3);
} }
class HomeComponent {
    constructor(authService, chatS, router) {
        this.authService = authService;
        this.chatS = chatS;
        this.router = router;
        this.joinChat = false;
        this.createChat = false;
        this.alreadyExists = (newName) => {
            return this.chats.forEach(element => {
                element.forEach(el => {
                    if (this.auth.currentUserId == el.ownerId) {
                        console.log(el);
                        if (newName == el.nameC) {
                            console.log('doublons!!!!!');
                            //return true;
                        }
                    }
                });
            });
            //return false;
        };
        this.auth = authService;
        this.cs = chatS;
    }
    ngOnInit() {
        this.chats = this.cs.getChatsCollection().valueChanges({ idField: 'eventId' });
    }
    addChat() {
        this.addChatBtn = document.querySelector('button#addChat');
        this.inputCN = document.getElementById('chatName');
        this.newchatName = this.inputCN.value;
        //still in test
        console.log(this.alreadyExists(this.newchatName));
        if (this.newchatName) {
            if (this.alreadyExists(this.newchatName)) {
                alert("This chat name already Exists...");
            }
            else {
                this.cs.create(this.newchatName);
                alert('you chat is now in your chatlist');
            }
        }
        else {
            alert('newchatName is null');
        }
    }
    switchJoin() {
        this.joinChat = !this.joinChat;
    }
    switchCreate() {
        this.createChat = !this.createChat;
    }
    join() {
        if (this.joinChatId.length == 20) {
            console.log(this.cs.get(this.joinChatId).toString());
            //si l'utilisateur Id est bien dans le chat OwnersId array alors ok sinon message de non permis ;
            if (this.auth.currentUserId in this.cs.get(this.joinChatId)) {
                this.router.navigate(['/chats', this.joinChatId]);
            }
            else {
                alert("vous ne pouvez acceder a ce chat");
            }
        }
        else {
            alert('Enter a Chat Id to Join !');
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 3, consts: [["class", "bodyApp", 4, "ngIf"], [1, "bodyApp"], [1, "margo"], ["alt", "", 3, "src"], ["type", "button", "name", "button", 1, "btn", "bg-dark", "margo"], [1, "row", "margo"], [4, "ngIf", "ngIfElse"], ["class", ""], ["Join", ""], ["Create", ""], ["type", "button", "name", "button", 1, "chatBtns", "btn", "btn-danger", 3, "click"], [1, "form"], ["type", "text", "placeHolder", "Type the ChatId you want to Join: send with Enter ", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown.enter"], ["type", "button", "name", "button", 1, "btn", "bg-light", 3, "click"], [1, "d-flex", "flex-column"], ["type", "button", "name", "button", 1, "chatBtns", "btn", "btn-primary", 3, "click"], ["type", "button", "name", "button", 1, "chatBtns", "btn", "bg-light", 3, "click"], ["for", "Name"], ["type", "text", "id", "chatName"], ["id", "addChat", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 19, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".bodyApp[_ngcontent-%COMP%]{\r\n  max-width: -webkit-fit-content;\r\n  max-width: -moz-fit-content;\r\n  max-width: fit-content;\r\n  min-width: 40vw;\r\n  text-align: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  border-radius: 150px;\r\n  width:8vw;\r\n  max-width: 100px;\r\n  margin:auto;\r\n}\r\n\r\n.btn-sm[_ngcontent-%COMP%]{\r\n  margin:5vh auto 5vh ;\r\n}\r\n\r\n.chatBtns[_ngcontent-%COMP%]{\r\n  margin-left:2vw;\r\n}\r\n\r\n.margo[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQXNCO0VBQXRCLDJCQUFzQjtFQUF0QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHlBcHB7XHJcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICBtaW4td2lkdGg6IDQwdnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XHJcbiAgd2lkdGg6OHZ3O1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5idG4tc217XHJcbiAgbWFyZ2luOjV2aCBhdXRvIDV2aCA7XHJcbn1cclxuXHJcbi5jaGF0QnRuc3tcclxuICBtYXJnaW4tbGVmdDoydnc7XHJcbn1cclxuXHJcbi5tYXJnb3tcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG57XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "dgf1":
/*!***************************************************************!*\
  !*** ./src/app/components/user-chats/user-chats.component.ts ***!
  \***************************************************************/
/*! exports provided: UserChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChatsComponent", function() { return UserChatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat.service */ "sjK5");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = function (a1) { return ["/chats", a1]; };
const _c1 = function () { return { standalone: true }; };
function UserChatsComponent_div_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserChatsComponent_div_0_div_5_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const chat_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.cs.delete(chat_r3.eventId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ChatID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserChatsComponent_div_0_div_5_div_1_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r9.chats[i_r4] = $event); })("keydown.enter", function UserChatsComponent_div_0_div_5_div_1_Template_input_keydown_enter_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const chat_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.addFriendToChat(chat_r3.eventId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const chat_r3 = ctx_r13.$implicit;
    const i_r4 = ctx_r13.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r3.nameC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, chat_r3.eventId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chat_r3.eventId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created at : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 6, chat_r3.createdAt, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1))("ngModel", ctx_r5.chats[i_r4]);
} }
function UserChatsComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserChatsComponent_div_0_div_5_div_1_Template, 15, 12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r3 = ctx.$implicit;
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r3.ownersId.indexOf(user_r1.uid) > -1);
} }
function UserChatsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Chats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserChatsComponent_div_0_div_5_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx_r0.chats));
} }
class UserChatsComponent {
    constructor(cs, auth) {
        this.cs = cs;
        this.auth = auth;
    }
    ngOnInit() {
        this.chats = this.cs.getChatsCollection().valueChanges({ idField: 'eventId' });
    }
    addFriendToChat(chatId) {
        if (this.friendId.length == 28) {
            this.cs.addFriend(chatId, this.friendId);
        }
        else {
            alert('wrong FireChat User ID ! ');
        }
    }
}
UserChatsComponent.ɵfac = function UserChatsComponent_Factory(t) { return new (t || UserChatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
UserChatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserChatsComponent, selectors: [["app-user-chats"]], decls: 2, vars: 3, consts: [["class", "text-center", 4, "ngIf"], [1, "text-center"], [1, "chatList", "d-flex", "flex-row"], ["class", "ctn", 4, "ngFor", "ngForOf"], [1, "ctn"], ["class", "ChatListElement", 4, "ngIf"], [1, "ChatListElement"], [1, "btn-danger", "float-right", 3, "click"], [3, "routerLink"], ["ngForm", ""], ["type", "text", "placeholder", "add your friend ID", "name", "", "value", "", 1, "form-control", 2, "border", "solid", "margin", "auto", "text-align", "center", "width", "180px", 3, "ngModelOptions", "ngModel", "ngModelChange", "keydown.enter"]], template: function UserChatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserChatsComponent_div_0_Template, 7, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".chatList[_ngcontent-%COMP%]{\r\n    min-width: -webkit-min-content;\r\n    min-width: min-content;\r\n    max-width: -webkit-max-content;\r\n    max-width: max-content;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n\r\n.ChatListElement[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    background-color: lightblue;\r\n    border: dashed 2px black;\r\n    margin:auto;\r\n    padding:10px;\r\n    \r\n    min-width: 250px;\r\n  }\r\n\r\n\r\n.ctn[_ngcontent-%COMP%]{\r\n  margin: 2.5vh;\r\n  display: flex;\r\n  flex-direction: row ;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWNoYXRzL3VzZXItY2hhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUFzQjtJQUF0QixzQkFBc0I7SUFDdEIsOEJBQXNCO0lBQXRCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZOztJQUVaLGdCQUFnQjtFQUNsQjs7O0FBRUY7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFvQjs7QUFFdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItY2hhdHMvdXNlci1jaGF0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXRMaXN0e1xyXG4gICAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcclxuICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcblxyXG4uQ2hhdExpc3RFbGVtZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgIGJvcmRlcjogZGFzaGVkIDJweCBibGFjaztcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgXHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuLmN0bntcclxuICBtYXJnaW46IDIuNXZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdyA7XHJcbiAgXHJcbn1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserChatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-chats',
                templateUrl: './user-chats.component.html',
                styleUrls: ['./user-chats.component.css']
            }]
    }], function () { return [{ type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "fZIn":
/*!***********************************************************************!*\
  !*** ./src/app/components/youtube-player/youtube-player.component.ts ***!
  \***********************************************************************/
/*! exports provided: YoutubePlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerComponent", function() { return YoutubePlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class YoutubePlayerComponent {
    constructor() {
    }
    ngOnInit() {
        this.input = document.querySelector('input#search');
        this.player = document.querySelector('div#player');
        this.list = document.querySelector('ul#videoIdList');
        this.init();
    }
    init() {
        console.log(this.player);
        this.input.addEventListener('keyup', (event) => {
            if (this.input.value != null) {
                this.url = this.input.value;
            }
            console.log(this.input.value);
        });
    }
    onYouTubeIframeAPIReady() {
        this.player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: this.url,
            playerVars: { 'autoplay': 1, 'controls': 1 },
            events: {
                'onReady': this.onPlayerReady,
            }
        });
    }
    onPlayerReady(event) {
        event.target.playVideo();
    }
    addToList() {
        let pocket = document.createElement('li');
        pocket.textContent = this.url;
        this.list.appendChild(pocket);
    }
    getThatVideo() {
        this.onYouTubeIframeAPIReady();
        console.log(this.player);
    }
    verif() {
        let got = false;
        let uRI = "https://www.youtube.com/watch?v=" + this.url;
        fetch(uRI, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then(resp => {
            console.log(resp);
            if (resp.status != 200) {
                got = false;
            }
            else {
                got = true;
            }
        });
        return got;
    }
}
YoutubePlayerComponent.ɵfac = function YoutubePlayerComponent_Factory(t) { return new (t || YoutubePlayerComponent)(); };
YoutubePlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YoutubePlayerComponent, selectors: [["app-youtube-player"]], decls: 18, vars: 0, consts: [["id", "search", "type", "text", "placeholder", "youtube video url"], [3, "click"], [1, "vidList", "container", "d-flex", "flex-column"], ["id", "player"], ["id", "videoIdList"]], template: function YoutubePlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How to Use ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "https://www.youtube.com/watch?v=HjxZYiTpU3k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\nSee that url ? i need you to give me only the part after \"v=\" ,\njust put it into the input , thank you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YoutubePlayerComponent_Template_button_click_8_listener() { return ctx.getThatVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search on youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "player : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YoutubePlayerComponent_Template_button_click_13_listener() { return ctx.addToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add to your Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "HjxZYiTpU3k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#ytbP[_ngcontent-%COMP%]{\r\n    min-width: 500px;\r\n    min-height: 50vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy95b3V0dWJlLXBsYXllci95b3V0dWJlLXBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveW91dHViZS1wbGF5ZXIveW91dHViZS1wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN5dGJQe1xyXG4gICAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubePlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-youtube-player',
                templateUrl: './youtube-player.component.html',
                styleUrls: ['./youtube-player.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "j3fi":
/*!************************************************!*\
  !*** ./src/app/skybox3d/skybox3d.component.ts ***!
  \************************************************/
/*! exports provided: Skybox3dComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skybox3dComponent", function() { return Skybox3dComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "RyHr");




class Skybox3dComponent {
    constructor() {
        this.animate = () => {
            this.rendu.render(this.scene, this.camera);
            requestAnimationFrame(this.animate);
        };
    }
    ngOnInit() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](35, window.innerWidth / window.innerHeight, 0.2, 3000);
        this.camera.position.set(0, 0, -500);
        this.rendu = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({ antialias: true });
        this.rendu.setSize(window.innerWidth / 1.2, window.innerHeight / 1.2);
        this.page = document.querySelector('div#skybox');
        this.page.appendChild(this.rendu.domElement);
        //manage mouse Controls
        this.control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__["OrbitControls"](this.camera, this.page);
        this.control.update();
        this.control.addEventListener('change', this.animate);
        const loader = new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]();
        let materialArray = [];
        let texture_ft = loader.load('../../assets/skyboxes/zpos.png');
        let texture_bk = loader.load('../../assets/skyboxes/zneg.png');
        let texture_up = loader.load('../../assets/skyboxes/ypos.png');
        let texture_dn = loader.load('../../assets/skyboxes/yneg.png');
        let texture_rt = loader.load('../../assets/skyboxes/xneg.png');
        let texture_lf = loader.load('../../assets/skyboxes/xpos.png');
        materialArray.push(new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ map: texture_ft }));
        materialArray.push(new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ map: texture_bk }));
        materialArray.push(new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ map: texture_up }));
        materialArray.push(new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ map: texture_dn }));
        materialArray.push(new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ map: texture_rt }));
        materialArray.push(new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ map: texture_lf }));
        materialArray.push(new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ map: texture_ft }));
        materialArray.push(new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ map: texture_bk }));
        materialArray.push(new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ map: texture_up }));
        materialArray.push(new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ map: texture_dn }));
        materialArray.push(new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ map: texture_rt }));
        materialArray.push(new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ map: texture_lf }));
        for (let i = 0; i < 6; i++) {
            materialArray[i].side = three__WEBPACK_IMPORTED_MODULE_1__["BackSide"];
        }
        for (let i = 6; i < 12; i++) {
            materialArray[i].side = three__WEBPACK_IMPORTED_MODULE_1__["FrontSide"];
        }
        let skyboxGeo = new three__WEBPACK_IMPORTED_MODULE_1__["BoxGeometry"](1000, 1000, 1000);
        let skybox = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](skyboxGeo, materialArray);
        this.scene.add(skybox);
        this.rendu.render(this.scene, this.camera);
    }
}
Skybox3dComponent.ɵfac = function Skybox3dComponent_Factory(t) { return new (t || Skybox3dComponent)(); };
Skybox3dComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Skybox3dComponent, selectors: [["app-skybox3d"]], decls: 1, vars: 0, consts: [["id", "skybox"]], template: function Skybox3dComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NreWJveDNkL3NreWJveDNkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Skybox3dComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skybox3d',
                templateUrl: './skybox3d.component.html',
                styleUrls: ['./skybox3d.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");









class AuthService {
    constructor(router, afAuth, afs) {
        this.router = router;
        this.afAuth = afAuth;
        this.afs = afs;
        this.userDetails = null;
        this.user$ = afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(user => {
            if (user) {
                return this.afs.doc(`users/${user.uid}`).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }
        }));
        this.user = afAuth.authState;
        this.user.subscribe((user) => {
            if (user) {
                this.userDetails = user;
            }
            else {
                this.userDetails = null;
            }
        });
        if (this.getUser()) {
            router.navigate(['home']);
        }
    }
    get currentUserPhoto() {
        return this.userDetails.photoURL;
    }
    get currentUserName() {
        return this.userDetails.displayName;
    }
    get currentUserId() {
        return this.userDetails.uid;
    }
    getUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.user$.pipe().toPromise();
        });
    }
    googleSignin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
            const credential = yield this.afAuth.signInWithPopup(provider);
            return this.updateUserData(credential.user);
        });
    }
    signOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.signOut();
            return this.router.navigate(['/']);
        });
    }
    updateUserData(user) {
        // Sets user data to firestore on login
        const userRef = this.afs.doc(`users/${user.uid}`);
        const data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        };
        return userRef.set(data);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "sjK5":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class ChatService {
    constructor(afs, auth, router) {
        this.afs = afs;
        this.auth = auth;
        this.router = router;
    }
    getChatsCollection() {
        return this.afs.collection('chats');
    }
    getChats() {
        return this.afs.collection('chats').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(doc => {
            return doc;
        }));
    }
    get(chatId) {
        return this.afs.collection('chats').doc(chatId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(d => {
            return { id: d.payload.id, data: d.payload.data() };
        }));
    }
    create(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ownersId = [this.auth.currentUserId];
            const ownerId = ownersId[0];
            const nameC = name;
            const data = {
                nameC,
                ownersId,
                ownerId,
                createdAt: Date.now(),
                count: 0,
                messages: []
            };
            const docRef = yield this.afs.collection('chats').add(data);
            return this.router.navigate(['chats', docRef.id]);
        });
    }
    sendMessage(chatId, content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uid = this.auth.currentUserId;
            const userName = this.auth.currentUserName;
            const userPhoto = this.auth.currentUserPhoto;
            const data = {
                uid,
                userName,
                userPhoto,
                content,
                createdAt: Date.now()
            };
            if (uid) {
                const ref = this.afs.collection('chats').doc(chatId);
                return ref.update({
                    messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(data)
                });
            }
        });
    }
    addFriend(chatId, fireId) {
        this.afs.collection('chats').doc(chatId).update({
            ownersId: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(fireId)
        });
    }
    delete(chatId) {
        //ajouter si celui qui veut delete est le propriétaire du chat
        this.afs.collection('chats').doc(chatId).delete();
        return this.router.navigate(['/userChats']);
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_anima_anima_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/anima/anima.component */ "8/PQ");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chat/chat.component */ "3tD2");
/* harmony import */ var _components_matter_game_matter_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/matter-game/matter-game.component */ "GiPk");
/* harmony import */ var _components_user_chats_user_chats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-chats/user-chats.component */ "dgf1");
/* harmony import */ var _components_youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/youtube-player/youtube-player.component */ "fZIn");
/* harmony import */ var _shared_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/home/home.component */ "ZEqh");
/* harmony import */ var _skybox3d_skybox3d_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skybox3d/skybox3d.component */ "j3fi");











const routes = [
    { path: 'home', component: _shared_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
    { path: 'chats/:id', component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"], pathMatch: 'full' },
    { path: 'userChats', component: _components_user_chats_user_chats_component__WEBPACK_IMPORTED_MODULE_5__["UserChatsComponent"], pathMatch: 'full' },
    { path: 'youtubePlayer', component: _components_youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_6__["YoutubePlayerComponent"], pathMatch: 'full' },
    { path: 'MatterJs', component: _components_matter_game_matter_game_component__WEBPACK_IMPORTED_MODULE_4__["MatterGameComponent"], pathMatch: 'full' },
    { path: 'skybox', component: _skybox3d_skybox3d_component__WEBPACK_IMPORTED_MODULE_8__["Skybox3dComponent"], pathMatch: 'full' },
    { path: 'anima', component: _components_anima_anima_component__WEBPACK_IMPORTED_MODULE_2__["AnimaComponent"], pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yDXV":
/*!*******************************************************************!*\
  !*** ./src/app/components/audio-player/audio-player.component.ts ***!
  \*******************************************************************/
/*! exports provided: AudioPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerComponent", function() { return AudioPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AudioPlayerComponent {
    constructor() { }
    ngOnInit() {
    }
}
AudioPlayerComponent.ɵfac = function AudioPlayerComponent_Factory(t) { return new (t || AudioPlayerComponent)(); };
AudioPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudioPlayerComponent, selectors: [["app-audio-player"]], decls: 0, vars: 0, template: function AudioPlayerComponent_Template(rf, ctx) { }, styles: ["#myProgress[_ngcontent-%COMP%] {\r\n    width: 420px;\r\n     background-color: #d9d9f2; \r\n    cursor: pointer;\r\n    border-radius: 10px;\r\n  }\r\n  \r\n  #myBar[_ngcontent-%COMP%] {\r\n    width: 0%;\r\n    height: 5px;\r\n    background-color: #ffc266;\r\n    border-radius: 10px;\r\n  }\r\n  \r\n  .logo[_ngcontent-%COMP%] {\r\n    fill: red;\r\n  }\r\n  \r\n  .btn-action[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    padding-top: 10px;\r\n    width: 30px;\r\n  }\r\n  \r\n  .btn-ctn[_ngcontent-%COMP%], .infos-ctn[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .infos-ctn[_ngcontent-%COMP%]{\r\n  padding-top: 20px;\r\n  }\r\n  \r\n  .btn-ctn[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n   padding: 5px;\r\n   margin-top: 18px;\r\n   margin-bottom: 18px;\r\n  }\r\n  \r\n  .infos-ctn[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n   margin-bottom: 8px;\r\n   color: #ffc266;\r\n  }\r\n  \r\n  .first-btn[_ngcontent-%COMP%]{\r\n    margin-left: 3px;\r\n  }\r\n  \r\n  .duration[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .title[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    width: 210px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .player-ctn[_ngcontent-%COMP%]{\r\n    border-radius: 15px;\r\n    width: 420px;\r\n    padding: 10px;\r\n    background-color: #373737;\r\n    margin:auto;\r\n    margin-top: 100px;\r\n  }\r\n  \r\n  .playlist-track-ctn[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    background-color: #464646;\r\n    margin-top: 3px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .playlist-track-ctn[_ngcontent-%COMP%]:last-child{\r\n    \r\n  }\r\n  \r\n  .playlist-track-ctn[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    margin:10px;\r\n  }\r\n  \r\n  .playlist-info-track[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n  }\r\n  \r\n  .playlist-info-track[_ngcontent-%COMP%], .playlist-duration[_ngcontent-%COMP%]{\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n    color: #e9cc95;\r\n    font-size: 14px;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .playlist-ctn[_ngcontent-%COMP%]{\r\n     padding-bottom: 20px;\r\n  }\r\n  \r\n  .active-track[_ngcontent-%COMP%]{\r\n    background: #4d4d4d;\r\n    color: #ffc266 !important;\r\n    font-weight: bold;\r\n    \r\n  }\r\n  \r\n  .active-track[_ngcontent-%COMP%]    > .playlist-info-track[_ngcontent-%COMP%], .active-track[_ngcontent-%COMP%]    > .playlist-duration[_ngcontent-%COMP%], .active-track[_ngcontent-%COMP%]    > .playlist-btn-play[_ngcontent-%COMP%]{\r\n    color: #ffc266 !important;\r\n  }\r\n  \r\n  .playlist-btn-play[_ngcontent-%COMP%]{\r\n    pointer-events: none;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n  }\r\n  \r\n  .fas[_ngcontent-%COMP%]{\r\n    color: #ffc266;\r\n    font-size: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdWRpby1wbGF5ZXIvYXVkaW8tcGxheWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtLQUNYLHlCQUF5QjtJQUMxQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsU0FBUztJQUNULFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7RUFDQTtFQUNBLGlCQUFpQjtFQUNqQjs7RUFFQTtHQUNDLFlBQVk7R0FDWixnQkFBZ0I7R0FDaEIsbUJBQW1CO0VBQ3BCOztFQUVBO0dBQ0Msa0JBQWtCO0dBQ2xCLGNBQWM7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFDQTtJQUNFLFVBQVU7RUFDWjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0I7RUFDdEI7O0VBQ0E7S0FDRyxvQkFBb0I7RUFDdkI7O0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlCQUFpQjs7RUFFbkI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBR0E7SUFDRSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdWRpby1wbGF5ZXIvYXVkaW8tcGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI215UHJvZ3Jlc3Mge1xyXG4gICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZjI7IFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgI215QmFyIHtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzI2NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvIHtcclxuICAgIGZpbGw6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1hY3Rpb257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuYnRuLWN0biwgLmluZm9zLWN0bntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pbmZvcy1jdG57XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tY3RuID4gZGl2IHtcclxuICAgcGFkZGluZzogNXB4O1xyXG4gICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICAuaW5mb3MtY3RuID4gZGl2IHtcclxuICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICBjb2xvcjogI2ZmYzI2NjtcclxuICB9XHJcbiAgXHJcbiAgLmZpcnN0LWJ0bntcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kdXJhdGlvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAudGl0bGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnBsYXllci1jdG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzM3Mzc7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAucGxheWxpc3QtdHJhY2stY3Rue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjQ2NDY7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5wbGF5bGlzdC10cmFjay1jdG46bGFzdC1jaGlsZHtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgI2ZmYzI2NjsgKi9cclxuICB9XHJcbiAgXHJcbiAgLnBsYXlsaXN0LXRyYWNrLWN0biA+IGRpdntcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gIH1cclxuICAucGxheWxpc3QtaW5mby10cmFja3tcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIC5wbGF5bGlzdC1pbmZvLXRyYWNrLC5wbGF5bGlzdC1kdXJhdGlvbntcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgY29sb3I6ICNlOWNjOTU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgLnBsYXlsaXN0LWN0bntcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLmFjdGl2ZS10cmFja3tcclxuICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XHJcbiAgICBjb2xvcjogI2ZmYzI2NiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLmFjdGl2ZS10cmFjayA+IC5wbGF5bGlzdC1pbmZvLXRyYWNrLC5hY3RpdmUtdHJhY2sgPi5wbGF5bGlzdC1kdXJhdGlvbiwuYWN0aXZlLXRyYWNrID4gLnBsYXlsaXN0LWJ0bi1wbGF5e1xyXG4gICAgY29sb3I6ICNmZmMyNjYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnBsYXlsaXN0LWJ0bi1wbGF5e1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcbiAgLmZhc3tcclxuICAgIGNvbG9yOiAjZmZjMjY2O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-audio-player',
                templateUrl: './audio-player.component.html',
                styleUrls: ['./audio-player.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map