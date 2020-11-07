(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XlM":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.service */ "ZSeD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "ccyI");
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
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "card-body", "bg-light"], [1, "d-flex", "flex-row", "justify-content-center"], ["routerLink", "/userChats", 2, "font-size", "2.33em", "margin", "0 4vw 0 6vw", 3, "icon"], [1, "text-center", 2, "font-size", "2.33em", "margin", "0 6vw 0 6vw"], [2, "font-size", "2.33em", "margin", "0 6vw 0 4vw", 3, "icon", "click"], [1, "d-flex", "flex-row"], ["class", "chatContainer", 4, "ngIf"], [1, "form"], ["placeHolder", "type enter to send", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "btn-primary", 3, "click"], [1, "fa", "fa-smile-o"], [1, "btn", "btn-success", 3, "click"], [1, "chatContainer"], [4, "ngFor", "ngForOf"], ["class", "emoji-mart", "title", "Pick your emoji\u2026", 3, "set", "emojiSelect", 4, "ngIf"], ["id", "MyChat", 4, "ngIf"], ["id", "MyChat"], [1, "card-body", "container", "d-flex", "flex-row"], [1, "text-break", "mes", 3, "ngStyle"], [3, "ngStyle"], [1, "float-right", 2, "margin-left", "1vw"], ["alt", "PP", 3, "src"], ["title", "Pick your emoji\u2026", 1, "emoji-mart", 3, "set", "emojiSelect"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatComponent_div_0_Template, 20, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_8__["PickerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], angular_emojify__WEBPACK_IMPORTED_MODULE_9__["EmojifyPipe"]], styles: [".userprofile[_ngcontent-%COMP%]   btn[_ngcontent-%COMP%]{\r\n  max-width:50px;\r\n}\r\n\r\n.chatContainer[_ngcontent-%COMP%]{\r\n  min-width: 800px;\r\n}\r\n\r\n.mes[_ngcontent-%COMP%]{\r\n  border-radius: 25px;\r\n  color:black;\r\n  border: solid 1px black;\r\n  box-shadow: 4px 4px 4px black;\r\n  text-align: left;\r\n  padding: 10px;\r\n  margin:auto;\r\n}\r\n\r\n#MyChat[_ngcontent-%COMP%]{\r\n  min-width: -webkit-max-content;\r\n  min-width: max-content;\r\n  width:50vw;\r\n  height:450px;\r\n  overflow: auto;\r\n  background-color: lightblue;\r\n}\r\n\r\n.message[_ngcontent-%COMP%]{\r\n  width: auto;\r\n  color:black;\r\n  border-radius: 25px;\r\n  margin: auto;\r\n  padding: 0;\r\n  text-align: left;\r\n}\r\n\r\n.btn-success[_ngcontent-%COMP%]{\r\n  width:100%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  border-radius: 150px;\r\n  width: 30px;\r\n  display:inline-block;\r\n}\r\n\r\n.cmdP[_ngcontent-%COMP%] {\r\n  margin:0 2vw 0 2vw;\r\n}\r\n\r\n.colblock[_ngcontent-%COMP%] {\r\n  border-radius: 100%;\r\n  box-shadow: 3px 3px 0;\r\n  margin:auto;\r\n  width:2.5vw;\r\n  height:2.5vw;\r\n  border:black solid 1px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsOEJBQXNCO0VBQXRCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VycHJvZmlsZSBidG57XHJcbiAgbWF4LXdpZHRoOjUwcHg7XHJcbn1cclxuXHJcbi5jaGF0Q29udGFpbmVye1xyXG4gIG1pbi13aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbi5tZXN7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBjb2xvcjpibGFjaztcclxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICBib3gtc2hhZG93OiA0cHggNHB4IDRweCBibGFjaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbiNNeUNoYXR7XHJcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcclxuICB3aWR0aDo1MHZ3O1xyXG4gIGhlaWdodDo0NTBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbi5tZXNzYWdle1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNze1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbmltZ3tcclxuICBib3JkZXItcmFkaXVzOiAxNTBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNtZFAge1xyXG4gIG1hcmdpbjowIDJ2dyAwIDJ2dztcclxufVxyXG5cclxuLmNvbGJsb2NrIHtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMDtcclxuICBtYXJnaW46YXV0bztcclxuICB3aWR0aDoyLjV2dztcclxuICBoZWlnaHQ6Mi41dnc7XHJcbiAgYm9yZGVyOmJsYWNrIHNvbGlkIDFweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css'],
            }]
    }], function () { return [{ type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "/K+B":
/*!******************************************************!*\
  !*** ./src/app/matter-game/matter-game.component.ts ***!
  \******************************************************/
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
                engine: engine
            });
            //set canvas width height
            render.canvas.setAttribute('width', "800");
            render.canvas.setAttribute('height', "600px");
            let ground = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].rectangle(600, 550, 1200, 60, { isStatic: true });
            let wallLeft = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].rectangle(0, 200, 60, 810, { isStatic: true });
            let wallRight = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].rectangle(790, 200, 60, 810, { isStatic: true });
            let boxA = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].rectangle(400, 200, 80, 80);
            let boxB = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].rectangle(450, 50, 80, 80);
            let mouse = matter_js__WEBPACK_IMPORTED_MODULE_1__["Mouse"].create(render.canvas);
            let mouseConstraint = matter_js__WEBPACK_IMPORTED_MODULE_1__["MouseConstraint"].create(engine, {
                mouse: mouse,
            });
            render.controller.mouse = mouse;
            let stack = matter_js__WEBPACK_IMPORTED_MODULE_1__["Composites"].stack(500, 100, 14, 15, 0, 0, (x, y) => {
                return matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].polygon(x, y, 8, 10);
            });
            let supp = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].rectangle(600, 400, 300, 20, { isStatic: true });
            let ball = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].circle(150, 450, 30);
            let sling = matter_js__WEBPACK_IMPORTED_MODULE_1__["Constraint"].create({
                pointA: { x: 150, y: 400 },
                bodyB: ball,
                stiffness: 0.0056
            });
            let firing = false;
            matter_js__WEBPACK_IMPORTED_MODULE_1__["Events"].on(mouseConstraint, 'enddrag', function (e) {
                if (e.body === ball)
                    firing = true;
            });
            matter_js__WEBPACK_IMPORTED_MODULE_1__["Events"].on(engine, 'afterUpdate', function () {
                if (firing && Math.abs(ball.position.x - 150) < 20 && Math.abs(ball.position.y - 400) < 20) {
                    ball = matter_js__WEBPACK_IMPORTED_MODULE_1__["Bodies"].circle(150, 450, 20);
                    matter_js__WEBPACK_IMPORTED_MODULE_1__["World"].add(engine.world, ball);
                    sling.bodyB = ball;
                    firing = false;
                }
            });
            matter_js__WEBPACK_IMPORTED_MODULE_1__["World"].add(engine.world, [ground, supp, ball]);
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
    } }, styles: ["#matter[_ngcontent-%COMP%]{\r\nmax-width: -webkit-fit-content;\r\nmax-width: -moz-fit-content;\r\nmax-width: fit-content;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0dGVyLWdhbWUvbWF0dGVyLWdhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhCQUFzQjtBQUF0QiwyQkFBc0I7QUFBdEIsc0JBQXNCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbWF0dGVyLWdhbWUvbWF0dGVyLWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXR0ZXJ7XHJcbm1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatterGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-matter-game',
                templateUrl: './matter-game.component.html',
                styleUrls: ['./matter-game.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Zprograms\AngularFireChat\FireChatNG\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.service */ "ZSeD");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_ng_template_12_span_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.switchCreate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Create FireChat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_ng_template_12_span_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.switchJoin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Join FireChat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_0_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_ng_template_12_span_0_Template, 16, 0, "span", 6);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function HomeComponent_div_0_ng_template_14_Template_input_keydown_enter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.addChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_ng_template_14_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.addChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Bring the fire!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.auth.signOut(); });
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
        this.auth = authService;
        this.cs = chatS;
    }
    ngOnInit() {
        //this.chats = this.auth.userDetails.chats;
        this.chats = this.cs.getChatsCollection().valueChanges({ idField: 'eventId' });
    }
    ngAfterViewInit() {
    }
    init() {
        this.inputCN = document.querySelector('input.chatName');
        this.addChatBtn = document.querySelector('button#addChat');
        this.inputCN.addEventListener('keyup', () => {
            this.newchatName = this.inputCN.value;
            console.log("blabla");
        });
        this.addChatBtn.addEventListener('click', () => {
            console.log(this.newchatName);
        });
    }
    addChat() {
        this.init();
        this.cs.create(this.newchatName);
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
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 3, consts: [["class", "bodyApp text-center", 4, "ngIf"], [1, "bodyApp", "text-center"], [2, "margin", "auto"], ["alt", "", 3, "src"], ["type", "button", "name", "button", 1, "btn", "bg-dark", 2, "color", "white", "margin", "auto"], [1, "flex-row", "d-flex", "text-center", "justify-content-center"], [4, "ngIf", "ngIfElse"], ["class", ""], ["Join", ""], ["Create", ""], ["type", "button", "name", "button", 1, "chatBtns", "btn", "btn-danger", 3, "click"], [1, "form"], ["type", "text", "placeHolder", "Type the ChatId you want to Join: send with Enter ", "name", "", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown.enter"], ["type", "button", "name", "button", 1, "btn", "bg-light", 3, "click"], [1, "d-flex", "flex-column"], ["type", "button", "name", "button", 1, "chatBtns", "btn", "btn-primary", 3, "click"], ["type", "button", "name", "button", 1, "chatBtns", "btn", "bg-light", 3, "click"], ["for", "Name"], ["type", "text", 1, "chatName", 3, "keydown.enter"], ["id", "addChat", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 19, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".bodyApp[_ngcontent-%COMP%]{\r\n  max-width: -webkit-fit-content;\r\n  max-width: -moz-fit-content;\r\n  max-width: fit-content;\r\n  min-width: 40vw;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  border-radius: 150px;\r\n  width:8vw;\r\n  max-width: 100px;\r\n  margin:auto;\r\n}\r\n\r\n.btn-sm[_ngcontent-%COMP%]{\r\n  margin:5vh auto 5vh ;\r\n}\r\n\r\n.chatBtns[_ngcontent-%COMP%]{\r\n  margin-left:2vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBc0I7RUFBdEIsMkJBQXNCO0VBQXRCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHlBcHB7XHJcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICBtaW4td2lkdGg6IDQwdnc7XHJcbn1cclxuXHJcbmltZ3tcclxuICBib3JkZXItcmFkaXVzOiAxNTBweDtcclxuICB3aWR0aDo4dnc7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBtYXJnaW46YXV0bztcclxufVxyXG5cclxuLmJ0bi1zbXtcclxuICBtYXJnaW46NXZoIGF1dG8gNXZoIDtcclxufVxyXG5cclxuLmNoYXRCdG5ze1xyXG4gIG1hcmdpbi1sZWZ0OjJ2dztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ "ZSeD");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to FireChatNG !!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 4, consts: [[1, "login", "text-center"], [1, "logo"], ["class", "d-flex flex-row", 4, "ngIf", "ngIfElse"], ["login", ""], [1, "d-flex", "flex-row"], [1, "center", "card-body", "bg-light", "text-center"], [1, "card-body", "bg-light", "text-center", "center"], ["type", "button", "name", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".login[_ngcontent-%COMP%]{\r\n  display:grid;\r\n  place-items: center;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\ntext-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;\r\nfont-size:50px;\r\nfont-weight: bolder;\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n  margin:10vw;\r\n  border-radius: 25px;\r\n  height: 80vh;\r\n  width:15vw;\r\n}\r\n\r\n.center[_ngcontent-%COMP%]{\r\n  margin:4vh 5vh 5vh 5vh;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  border-radius: 25px;\r\n}\r\n\r\n.centerLog[_ngcontent-%COMP%]{\r\n  margin-top:30vh;\r\n  color:black;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  width:75vw;\r\n}\r\n\r\n@media screen and (max-width:950px){\r\n  .logo[_ngcontent-%COMP%]{\r\n    margin-top:8vh;\r\n  }\r\n\r\n  .center[_ngcontent-%COMP%]{\r\n    width: -webkit-min-content;\r\n    width: min-content;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0FBQ0Esa0xBQWtMO0FBQ2xMLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkI7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLDBCQUFrQjtJQUFsQixrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gIGRpc3BsYXk6Z3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbnRleHQtc2hhZG93OiAwIDAgMjBweCAjZmVmY2M5LCAxMHB4IC0xMHB4IDMwcHggI2ZlZWM4NSwgLTIwcHggLTIwcHggNDBweCAjZmZhZTM0LCAyMHB4IC00MHB4IDUwcHggI2VjNzYwYywgLTIwcHggLTYwcHggNjBweCAjY2Q0NjA2LCAwIC04MHB4IDcwcHggIzk3MzcxNiwgMTBweCAtOTBweCA4MHB4ICM0NTFiMGU7XHJcbmZvbnQtc2l6ZTo1MHB4O1xyXG5mb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG5cclxuLmxlZnQge1xyXG4gIG1hcmdpbjoxMHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIHdpZHRoOjE1dnc7XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgbWFyZ2luOjR2aCA1dmggNXZoIDV2aDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG4uY2VudGVyTG9ne1xyXG4gIG1hcmdpbi10b3A6MzB2aDtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDo3NXZ3O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk1MHB4KXtcclxuICAubG9nb3tcclxuICAgIG1hcmdpbi10b3A6OHZoO1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlcntcclxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "WAb2":
/*!****************************************************!*\
  !*** ./src/app/user-chats/user-chats.component.ts ***!
  \****************************************************/
/*! exports provided: UserChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChatsComponent", function() { return UserChatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat.service */ "ZSeD");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");
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
UserChatsComponent.ɵfac = function UserChatsComponent_Factory(t) { return new (t || UserChatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
UserChatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserChatsComponent, selectors: [["app-user-chats"]], decls: 2, vars: 3, consts: [["class", "text-center", 4, "ngIf"], [1, "text-center"], [1, "chatList", "d-flex", "flex-row"], ["class", "ctn", 4, "ngFor", "ngForOf"], [1, "ctn"], ["class", "ChatListElement", 4, "ngIf"], [1, "ChatListElement"], [1, "btn-danger", "float-right", 3, "click"], [3, "routerLink"], ["ngForm", ""], ["type", "text", "placeholder", "add your friend ID", "name", "", "value", "", 1, "form-control", 2, "border", "solid", "margin", "auto", "text-align", "center", "width", "180px", 3, "ngModelOptions", "ngModel", "ngModelChange", "keydown.enter"]], template: function UserChatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserChatsComponent_div_0_Template, 7, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".chatList[_ngcontent-%COMP%]{\r\n    min-width: -webkit-min-content;\r\n    min-width: min-content;\r\n    max-width: -webkit-max-content;\r\n    max-width: max-content;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n\r\n.ChatListElement[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    background-color: lightblue;\r\n    border: dashed 2px black;\r\n    margin:auto;\r\n    padding:10px;\r\n    \r\n    min-width: 250px;\r\n  }\r\n\r\n\r\n.ctn[_ngcontent-%COMP%]{\r\n  margin: 2.5vh;\r\n  display: flex;\r\n  flex-direction: row ;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1jaGF0cy91c2VyLWNoYXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBc0I7SUFBdEIsc0JBQXNCO0lBQ3RCLDhCQUFzQjtJQUF0QixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTs7SUFFWixnQkFBZ0I7RUFDbEI7OztBQUVGO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixvQkFBb0I7O0FBRXRCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1jaGF0cy91c2VyLWNoYXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdExpc3R7XHJcbiAgICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xyXG4gICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuXHJcbi5DaGF0TGlzdEVsZW1lbnQge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgYm9yZGVyOiBkYXNoZWQgMnB4IGJsYWNrO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4uY3Rue1xyXG4gIG1hcmdpbjogMi41dmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93IDtcclxuICBcclxufVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserChatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-chats',
                templateUrl: './user-chats.component.html',
                styleUrls: ['./user-chats.component.css']
            }]
    }], function () { return [{ type: _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


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
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat/chat.component */ "+XlM");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _user_profil_user_profil_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-profil/user-profil.component */ "kRAc");
/* harmony import */ var _user_chats_user_chats_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-chats/user-chats.component */ "WAb2");
/* harmony import */ var _youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./youtube-player/youtube-player.component */ "cZxl");
/* harmony import */ var _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./audio-player/audio-player.component */ "tnGF");
/* harmony import */ var angular_emojify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-emojify */ "5EyG");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "KN7V");
/* harmony import */ var _matter_game_matter_game_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./matter-game/matter-game.component */ "/K+B");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            // Initialize Firebase
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
            angular_emojify__WEBPACK_IMPORTED_MODULE_15__["EmojifyModule"],
            _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_16__["PickerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
        _user_profil_user_profil_component__WEBPACK_IMPORTED_MODULE_11__["UserProfilComponent"],
        _user_chats_user_chats_component__WEBPACK_IMPORTED_MODULE_12__["UserChatsComponent"],
        _youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_13__["YoutubePlayerComponent"],
        _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_14__["AudioPlayerComponent"],
        _matter_game_matter_game_component__WEBPACK_IMPORTED_MODULE_17__["MatterGameComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
        angular_emojify__WEBPACK_IMPORTED_MODULE_15__["EmojifyModule"],
        _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_16__["PickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                    _user_profil_user_profil_component__WEBPACK_IMPORTED_MODULE_11__["UserProfilComponent"],
                    _user_chats_user_chats_component__WEBPACK_IMPORTED_MODULE_12__["UserChatsComponent"],
                    _youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_13__["YoutubePlayerComponent"],
                    _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_14__["AudioPlayerComponent"],
                    _matter_game_matter_game_component__WEBPACK_IMPORTED_MODULE_17__["MatterGameComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    // Initialize Firebase
                    _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
                    angular_emojify__WEBPACK_IMPORTED_MODULE_15__["EmojifyModule"],
                    _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_16__["PickerModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZSeD":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "ccyI");
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

/***/ "cZxl":
/*!************************************************************!*\
  !*** ./src/app/youtube-player/youtube-player.component.ts ***!
  \************************************************************/
/*! exports provided: YoutubePlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerComponent", function() { return YoutubePlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class YoutubePlayerComponent {
    constructor() {
        let input = document.querySelector('input#search');
        let player = document.querySelector('iframe#ytb');
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.input.addEventListener('keyup', (event) => {
            this.url = this.input.value;
            console.log(this.verif());
        });
        console.log(this.player.getAttribute('src'));
    }
    verif() {
        let got = false;
        fetch(this.url, {
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
YoutubePlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YoutubePlayerComponent, selectors: [["app-youtube-player"]], decls: 4, vars: 0, consts: [["id", "search", "type", "text", "placeholder", "youtube video url"], ["id", "player"], ["src", "https://www.youtube.com/watch?v=xVNnBeVrD0o&t=1s", "frameborder", "0"]], template: function YoutubePlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 2);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUtcGxheWVyL3lvdXR1YmUtcGxheWVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubePlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-youtube-player',
                templateUrl: './youtube-player.component.html',
                styleUrls: ['./youtube-player.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
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

/***/ "kRAc":
/*!******************************************************!*\
  !*** ./src/app/user-profil/user-profil.component.ts ***!
  \******************************************************/
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
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsL3VzZXItcHJvZmlsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profil',
                templateUrl: './user-profil.component.html',
                styleUrls: ['./user-profil.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 13);
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
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 4, vars: 2, consts: [[1, "navBar"], ["id", "cpBar", 4, "ngIf", "ngIfElse"], ["nav", ""], ["id", "cpBar"], [1, "btn", "bg-light", 3, "click"], [1, "fa-bars", "fa"], ["routerLink", "/home", 1, "btn", "bg-light"], [1, "fa-home", "fa"], ["routerLink", "/userChats", 1, "btn", "bg-light"], [1, "fa-fire", "fa"], ["routerLink", "/youtubePlayer", 1, "btn", "bg-light"], [1, "fa-youtube-play", "fa"], ["routerLink", "/MatterJs", 1, "btn", "bg-light"], [1, "fa", "fa-gamepad"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_ul_1_Template, 3, 0, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_ng_template_2_Template, 11, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.open)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["@media screen and (min-width:950px){\r\n\r\n    #cpBar[_ngcontent-%COMP%]{\r\n        max-width: -webkit-min-content;\r\n        max-width: min-content;\r\n        position: fixed;\r\n        margin-top:25vh;\r\n        left:0px;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    \r\n    button[_ngcontent-%COMP%]{\r\n        width:-webkit-fit-content;\r\n        width:-moz-fit-content;\r\n        width:fit-content;\r\n        height: -webkit-fit-content;\r\n        height: -moz-fit-content;\r\n        height: fit-content;\r\n        color: rgb(221, 54, 24);\r\n        margin-bottom: 4vh;\r\n    }\r\n    \r\n    i[_ngcontent-%COMP%]{\r\n    width:4vh;\r\n    padding:1vh;\r\n    border-radius: 25rem;\r\n    background-color: rgba(223, 163, 0, .612);\r\n    }\r\n    \r\n}\r\n\r\n@media screen and (max-width:950px){\r\n    .navBar[_ngcontent-%COMP%]{padding-top: 1vh;}\r\n#cpBar[_ngcontent-%COMP%]{\r\n    max-width: -webkit-min-content;\r\n    max-width: min-content;\r\n    position: fixed;\r\n    margin:auto;\r\n    display: flex;\r\n    flex-direction: row;   \r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    width:-webkit-fit-content;\r\n    width:-moz-fit-content;\r\n    width:fit-content;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    color: rgb(221, 54, 24);\r\n    margin-right: 4vh;\r\n}\r\n\r\ni[_ngcontent-%COMP%]{\r\nwidth:4vh;\r\npadding:1vh;\r\nborder-radius: 25vh;\r\nbackground-color: rgba(223, 163, 0, .612);\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSTtRQUNJLDhCQUFzQjtRQUF0QixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLGVBQWU7UUFDZixRQUFRO1FBQ1IsYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLHlCQUFpQjtRQUFqQixzQkFBaUI7UUFBakIsaUJBQWlCO1FBQ2pCLDJCQUFtQjtRQUFuQix3QkFBbUI7UUFBbkIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixrQkFBa0I7SUFDdEI7O0lBRUE7SUFDQSxTQUFTO0lBQ1QsV0FBVztJQUNYLG9CQUFvQjtJQUNwQix5Q0FBeUM7SUFDekM7O0FBRUo7O0FBRUE7SUFDSSxRQUFRLGdCQUFnQixDQUFDO0FBQzdCO0lBQ0ksOEJBQXNCO0lBQXRCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBaUI7SUFBakIsc0JBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0FBQ0EsU0FBUztBQUNULFdBQVc7QUFDWCxtQkFBbUI7QUFDbkIseUNBQXlDO0FBQ3pDO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5NTBweCl7XHJcblxyXG4gICAgI2NwQmFye1xyXG4gICAgICAgIG1heC13aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6MjV2aDtcclxuICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ1dHRvbntcclxuICAgICAgICB3aWR0aDpmaXQtY29udGVudDtcclxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjIxLCA1NCwgMjQpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDR2aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaXtcclxuICAgIHdpZHRoOjR2aDtcclxuICAgIHBhZGRpbmc6MXZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMTYzLCAwLCAuNjEyKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk1MHB4KXtcclxuICAgIC5uYXZCYXJ7cGFkZGluZy10b3A6IDF2aDt9XHJcbiNjcEJhcntcclxuICAgIG1heC13aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyAgIFxyXG59XHJcblxyXG5idXR0b257XHJcbiAgICB3aWR0aDpmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBjb2xvcjogcmdiKDIyMSwgNTQsIDI0KTtcclxuICAgIG1hcmdpbi1yaWdodDogNHZoO1xyXG59XHJcblxyXG5pe1xyXG53aWR0aDo0dmg7XHJcbnBhZGRpbmc6MXZoO1xyXG5ib3JkZXItcmFkaXVzOiAyNXZoO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMTYzLCAwLCAuNjEyKTtcclxufVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tnGF":
/*!********************************************************!*\
  !*** ./src/app/audio-player/audio-player.component.ts ***!
  \********************************************************/
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
AudioPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudioPlayerComponent, selectors: [["app-audio-player"]], decls: 0, vars: 0, template: function AudioPlayerComponent_Template(rf, ctx) { }, styles: ["#myProgress[_ngcontent-%COMP%] {\r\n    width: 420px;\r\n     background-color: #d9d9f2; \r\n    cursor: pointer;\r\n    border-radius: 10px;\r\n  }\r\n  \r\n  #myBar[_ngcontent-%COMP%] {\r\n    width: 0%;\r\n    height: 5px;\r\n    background-color: #ffc266;\r\n    border-radius: 10px;\r\n  }\r\n  \r\n  .logo[_ngcontent-%COMP%] {\r\n    fill: red;\r\n  }\r\n  \r\n  .btn-action[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    padding-top: 10px;\r\n    width: 30px;\r\n  }\r\n  \r\n  .btn-ctn[_ngcontent-%COMP%], .infos-ctn[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .infos-ctn[_ngcontent-%COMP%]{\r\n  padding-top: 20px;\r\n  }\r\n  \r\n  .btn-ctn[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n   padding: 5px;\r\n   margin-top: 18px;\r\n   margin-bottom: 18px;\r\n  }\r\n  \r\n  .infos-ctn[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n   margin-bottom: 8px;\r\n   color: #ffc266;\r\n  }\r\n  \r\n  .first-btn[_ngcontent-%COMP%]{\r\n    margin-left: 3px;\r\n  }\r\n  \r\n  .duration[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .title[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    width: 210px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .player-ctn[_ngcontent-%COMP%]{\r\n    border-radius: 15px;\r\n    width: 420px;\r\n    padding: 10px;\r\n    background-color: #373737;\r\n    margin:auto;\r\n    margin-top: 100px;\r\n  }\r\n  \r\n  .playlist-track-ctn[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    background-color: #464646;\r\n    margin-top: 3px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .playlist-track-ctn[_ngcontent-%COMP%]:last-child{\r\n    \r\n  }\r\n  \r\n  .playlist-track-ctn[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    margin:10px;\r\n  }\r\n  \r\n  .playlist-info-track[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n  }\r\n  \r\n  .playlist-info-track[_ngcontent-%COMP%], .playlist-duration[_ngcontent-%COMP%]{\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n    color: #e9cc95;\r\n    font-size: 14px;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .playlist-ctn[_ngcontent-%COMP%]{\r\n     padding-bottom: 20px;\r\n  }\r\n  \r\n  .active-track[_ngcontent-%COMP%]{\r\n    background: #4d4d4d;\r\n    color: #ffc266 !important;\r\n    font-weight: bold;\r\n    \r\n  }\r\n  \r\n  .active-track[_ngcontent-%COMP%]    > .playlist-info-track[_ngcontent-%COMP%], .active-track[_ngcontent-%COMP%]    > .playlist-duration[_ngcontent-%COMP%], .active-track[_ngcontent-%COMP%]    > .playlist-btn-play[_ngcontent-%COMP%]{\r\n    color: #ffc266 !important;\r\n  }\r\n  \r\n  .playlist-btn-play[_ngcontent-%COMP%]{\r\n    pointer-events: none;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n  }\r\n  \r\n  .fas[_ngcontent-%COMP%]{\r\n    color: #ffc266;\r\n    font-size: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXVkaW8tcGxheWVyL2F1ZGlvLXBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7S0FDWCx5QkFBeUI7SUFDMUIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBQ0E7RUFDQSxpQkFBaUI7RUFDakI7O0VBRUE7R0FDQyxZQUFZO0dBQ1osZ0JBQWdCO0dBQ2hCLG1CQUFtQjtFQUNwQjs7RUFFQTtHQUNDLGtCQUFrQjtHQUNsQixjQUFjO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxVQUFVO0VBQ1o7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0VBQ3RCOztFQUNBO0tBQ0csb0JBQW9CO0VBQ3ZCOztFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixpQkFBaUI7O0VBRW5COztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUdBO0lBQ0Usb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2F1ZGlvLXBsYXllci9hdWRpby1wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jbXlQcm9ncmVzcyB7XHJcbiAgICB3aWR0aDogNDIwcHg7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlmMjsgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAjbXlCYXIge1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMjY2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ28ge1xyXG4gICAgZmlsbDogcmVkO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWFjdGlvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tY3RuLCAuaW5mb3MtY3Rue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmluZm9zLWN0bntcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1jdG4gPiBkaXYge1xyXG4gICBwYWRkaW5nOiA1cHg7XHJcbiAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbmZvcy1jdG4gPiBkaXYge1xyXG4gICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgIGNvbG9yOiAjZmZjMjY2O1xyXG4gIH1cclxuICBcclxuICAuZmlyc3QtYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICB9XHJcbiAgXHJcbiAgLmR1cmF0aW9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucGxheWVyLWN0bntcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB3aWR0aDogNDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzczNztcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wbGF5bGlzdC10cmFjay1jdG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDY0NjtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnBsYXlsaXN0LXRyYWNrLWN0bjpsYXN0LWNoaWxke1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCAjZmZjMjY2OyAqL1xyXG4gIH1cclxuICBcclxuICAucGxheWxpc3QtdHJhY2stY3RuID4gZGl2e1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgfVxyXG4gIC5wbGF5bGlzdC1pbmZvLXRyYWNre1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgLnBsYXlsaXN0LWluZm8tdHJhY2ssLnBsYXlsaXN0LWR1cmF0aW9ue1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBjb2xvcjogI2U5Y2M5NTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuICAucGxheWxpc3QtY3Rue1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAuYWN0aXZlLXRyYWNre1xyXG4gICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcclxuICAgIGNvbG9yOiAjZmZjMjY2ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuYWN0aXZlLXRyYWNrID4gLnBsYXlsaXN0LWluZm8tdHJhY2ssLmFjdGl2ZS10cmFjayA+LnBsYXlsaXN0LWR1cmF0aW9uLC5hY3RpdmUtdHJhY2sgPiAucGxheWxpc3QtYnRuLXBsYXl7XHJcbiAgICBjb2xvcjogI2ZmYzI2NiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBcclxuICAucGxheWxpc3QtYnRuLXBsYXl7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAuZmFze1xyXG4gICAgY29sb3I6ICNmZmMyNjY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-audio-player',
                templateUrl: './audio-player.component.html',
                styleUrls: ['./audio-player.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "+XlM");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _matter_game_matter_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matter-game/matter-game.component */ "/K+B");
/* harmony import */ var _user_chats_user_chats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-chats/user-chats.component */ "WAb2");
/* harmony import */ var _youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./youtube-player/youtube-player.component */ "cZxl");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: 'chats/:id', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"], pathMatch: 'full' },
    { path: 'userChats', component: _user_chats_user_chats_component__WEBPACK_IMPORTED_MODULE_5__["UserChatsComponent"], pathMatch: 'full' },
    { path: 'youtubePlayer', component: _youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_6__["YoutubePlayerComponent"], pathMatch: 'full' },
    { path: 'MatterJs', component: _matter_game_matter_game_component__WEBPACK_IMPORTED_MODULE_4__["MatterGameComponent"], pathMatch: 'full' }
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