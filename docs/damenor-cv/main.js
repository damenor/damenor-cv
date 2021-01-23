(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/b9C":
/*!************************************************!*\
  !*** ./src/app/constants/hobbies.constanst.ts ***!
  \************************************************/
/*! exports provided: HOBBIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOBBIES", function() { return HOBBIES; });
const HOBBIES = {
    title: 'Aficiones',
    items: [
        'Videojuegos',
        'Fútbol',
        'Películas',
        'Viajar',
        'Series',
        'Tecnologías',
    ]
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dmeno\Documents\Projects\Angular\damenor-cv\src\main.ts */"zUnb");


/***/ }),

/***/ "0PT/":
/*!******************************************************************!*\
  !*** ./src/app/components/common/timeline/timeline.component.ts ***!
  \******************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1) { return { "timeline__item--left": a0, "timeline__item--right": a1 }; };
function TimelineComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r0.isLeft(i_r2), !ctx_r0.isLeft(i_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class TimelineComponent {
    constructor() {
        this.isLeft = i => i % 2 === 0;
    }
    ngOnInit() {
        console.log(this.items);
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], inputs: { items: "items" }, decls: 2, vars: 1, consts: [[1, "timeline"], ["class", "timeline__item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "timeline__item", 3, "ngClass"], [1, "timeline__item-data"], [1, "timeline__item-data-date"], [1, "timeline__item-data-title"], [1, "timeline__item-description"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimelineComponent_div_1_Template, 8, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".timeline[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 0.5rem 0;\n  padding: 0;\n  background-color: #2D2D3A;\n}\n@media only screen and (min-width: 992px) {\n  .timeline[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n.timeline__item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 1rem;\n  text-align: left;\n}\n.timeline__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.timeline__item[_ngcontent-%COMP%]:last-child:after {\n  background-color: inherit;\n}\n.timeline__item[_ngcontent-%COMP%]:before, .timeline__item[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n}\n.timeline__item[_ngcontent-%COMP%]:before {\n  z-index: 2;\n  left: -0.5rem;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  background-color: #FFC107;\n}\n.timeline__item[_ngcontent-%COMP%]:after {\n  width: 2px;\n  left: 0rem;\n  height: 100%;\n  background-color: #2EBD7A;\n}\n@media only screen and (min-width: 992px) {\n  .timeline__item[_ngcontent-%COMP%]:before, .timeline__item[_ngcontent-%COMP%]:after {\n    top: 0.25rem;\n  }\n  .timeline__item.timeline__item--right[_ngcontent-%COMP%] {\n    margin-left: 50%;\n  }\n  .timeline__item.timeline__item--right[_ngcontent-%COMP%]:before {\n    left: -0.5rem;\n  }\n  .timeline__item.timeline__item--right[_ngcontent-%COMP%]:after {\n    left: -1px;\n  }\n  .timeline__item.timeline__item--left[_ngcontent-%COMP%] {\n    margin-right: 50%;\n    text-align: right;\n  }\n  .timeline__item.timeline__item--left[_ngcontent-%COMP%]:before {\n    right: -0.5rem;\n    left: auto;\n  }\n  .timeline__item.timeline__item--left[_ngcontent-%COMP%]:after {\n    right: -1px;\n    left: auto;\n  }\n  .timeline__item.timeline__item--left[_ngcontent-%COMP%]   .timeline__item-data[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n}\n.timeline__item-data[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  font-size: 0.7rem;\n}\n.timeline__item-data-date[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  background-color: #191923;\n  border-radius: 1rem;\n}\n.timeline__item-data-title[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  color: #FFC107;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.timeline__item-description[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNhc3NcXG1peGluc1xcY2FyZHMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcdmFyaWFibGVzXFxjb2xvcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcbWl4aW5zXFxtZWRpYS1xdWVyeS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzYXNzXFxtaXhpbnNcXGZsZXhib3guc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcdmFyaWFibGVzXFxmb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDR0UsV0FMbUI7RUFNbkIsb0JBTmtEO0VBT2xELFVESndCO0VDS3hCLHlCQ0dvQjtBRk50QjtBR0VFO0VITEY7SUFHSSxhQUFBO0VBSUY7QUFDRjtBQUhFO0VBRUUsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJSjtBQUhJO0VBQ0UsbUJBQUE7QUFLTjtBQUpNO0VBQ0UseUJBQUE7QUFNUjtBQUZJO0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkUvQlU7QUZrQ2hCO0FBREk7RUFDRSxVQTFCZTtFQTJCZixVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRW5DWTtBRnNDbEI7QUdqQ0U7RUhpQ0k7SUFFRSxZQUFBO0VBRU47RUFDSTtJQUNFLGdCQUFBO0VBQ047RUFBTTtJQUNFLGFBQUE7RUFFUjtFQUFNO0lBQ0UsVUFBQTtFQUVSO0VBQ0k7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VBQ047RUFBTTtJQUNFLGNBQUE7SUFDQSxVQUFBO0VBRVI7RUFBTTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VBRVI7RUFBTTtJQUNFLDJCQUFBO0VBRVI7QUFDRjtBQUVJO0VJdEVGLGFBQUE7RUFpQkEsMkJKc0RzQjtFSTFEdEIsbUJKMERzQztFSWxEdkIsZUFBQTtFSm1EWCxpQkt6RVU7QUw0RWhCO0FBRk07RUFDRSx3QkFBQTtFQUNBLHlCRWxFUTtFRm1FUixtQkFBQTtBQUlSO0FBRk07RUFDRSxjQUFBO0VBQ0EsY0VqRlE7RUZrRlIsZ0JLeEVTO0VMeUVULHlCQUFBO0FBSVI7QUFESTtFQUNFLGVBQUE7RUFDQSxpQkt0RlE7QUx5RmQiLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdpbXBvcnRzJztcclxuXHJcbi50aW1lbGluZSB7XHJcbiAgQGluY2x1ZGUgY2FyZCgkcGFkZGluZzogMCk7XHJcbiAgQGluY2x1ZGUgbWVkaWFRdWVyeURlc2t0b3Age1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcbiAgJl9faXRlbSB7XHJcbiAgICAkd2lkdGhTZXBhcmF0b3I6IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBsZWZ0OiAtMC41cmVtO1xyXG4gICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHdpZHRoOiAkd2lkdGhTZXBhcmF0b3I7XHJcbiAgICAgIGxlZnQ6IDByZW07XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIG1lZGlhUXVlcnlEZXNrdG9wIHtcclxuICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHRvcDogMC4yNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi50aW1lbGluZV9faXRlbS0tcmlnaHQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7IFxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIGxlZnQ6IC0wLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgbGVmdDogLSN7JHdpZHRoU2VwYXJhdG9yLyAyfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi50aW1lbGluZV9faXRlbS0tbGVmdCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MCU7IFxyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIHJpZ2h0OiAtMC41cmVtO1xyXG4gICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICByaWdodDogLSN7JHdpZHRoU2VwYXJhdG9yLyAyfTtcclxuICAgICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aW1lbGluZV9faXRlbS1kYXRhIHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWRhdGEge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4KCR4OiBmbGV4LXN0YXJ0LCAkeTogY2VudGVyKTtcclxuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcclxuICAgICAgJi1kYXRlIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnLWRhcms7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgfVxyXG4gICAgICAmLXRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC14bDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLWRlc2NyaXB0aW9uIHtcclxuICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICBmb250LXNpemU6ICRmb250LXNpemUtcztcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCJAbWl4aW4gY2FyZCAoJHdpZHRoOiAxMDAlLCAkcGFkZGluZzogMXJlbSwgJG1hcmdpbjogMCAwIDAuNXJlbSAwLCAkYm9yZGVyLXJhZGl1czogMXJlbSwgJGlzSW5zZXQ6IGZhbHNlKSB7XHJcbiAgJHNoYWRvdzogJHNoYWRvdy1kYXJrO1xyXG4gIEBpZiAoJGlzSW5zZXQgPT0gdHJ1ZSkge1xyXG4gICAgJHNoYWRvdzogJHNoYWRvdy1kYXJrLWluc2V0O1xyXG4gIH0gXHJcbiAgd2lkdGg6ICR3aWR0aDtcclxuICBtYXJnaW46ICRtYXJnaW47XHJcbiAgcGFkZGluZzogJHBhZGRpbmc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnLWRhcmstbGlnaHQ7XHJcbn1cclxuIiwiJGNvbG9yLXByaW1hcnk6ICNGRkMxMDc7XHJcbiRjb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMTkxOTIzO1xyXG4kY29sb3Itc2Vjb25kYXJ5OiAjMkVCRDdBO1xyXG4kY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjMTkxOTIzO1xyXG5cclxuJGNvbG9yLWRhcms6ICMyZDJkMmQ7XHJcbiRjb2xvci1ncmF5OiAjNTU1O1xyXG4kY29sb3ItZ3JheS1saWdodDogIzk5OTtcclxuJGNvbG9yLWxpZ2h0OiAjZjJmMmYyO1xyXG5cclxuJGNvbG9yLWJnLWRhcms6ICMxOTE5MjM7XHJcbiRjb2xvci1iZy1kYXJrLWxpZ2h0OiAjMkQyRDNBO1xyXG4kY29sb3ItYmctbGlnaHQ6ICNmZmY7XHJcbiRjb2xvci1iZy1saWdodC1kYXJrOiAjZjBmMGYwOyIsIkBtaXhpbiBtZWRpYVF1ZXJ5VGFibGV0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYVF1ZXJ5RGVza3RvcCB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWFRdWVyeUxhcmdlIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59IiwiQG1peGluIGZsZXgoJGRpcmVjdGlvbjogcm93LCAkeDogbnVsbCwgJHk6IG51bGwsICRpc1dyYXA6IHRydWUpe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgQGlmKCRkaXJlY3Rpb24gPT0gcm93KXtcclxuICAgIEBpZigkeCkgeyBAaW5jbHVkZSBmbGV4SnVzdGlmeUNvbnRlbnQoJHgpOyB9XHJcbiAgICBAaWYoJHkpIHsgQGluY2x1ZGUgZmxleEFsaWduSXRlbXMoJHkpOyB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAgIEBpZigkeCkgeyBAaW5jbHVkZSBmbGV4QWxpZ25JdGVtcygkeCk7IH1cclxuICAgIEBpZigkeSkgeyBAaW5jbHVkZSBmbGV4SnVzdGlmeUNvbnRlbnQoJHkpOyB9XHJcbiAgfVxyXG4gIEBpbmNsdWRlIGZsZXhXcmFwKCRpc1dyYXApO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleEFsaWduSXRlbXMoJHBvc2l0aW9uKSB7XHJcbiAgYWxpZ24taXRlbXM6ICRwb3NpdGlvblxyXG59XHJcblxyXG5AbWl4aW4gZmxleEp1c3RpZnlDb250ZW50KCRwb3NpdGlvbikge1xyXG4gIGp1c3RpZnktY29udGVudDogJHBvc2l0aW9uO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleFdyYXAoJGlzV3JhcCl7XHJcbiAgQGlmKCRpc1dyYXApIHsgZmxleC13cmFwOiB3cmFwIH1cclxuICBAaWYoJGlzV3JhcCA9PSBmYWxzZSkgeyBmbGV4LXdyYXA6IG5vd3JhcCB9XHJcbn1cclxuIiwiJGZvbnQtc2l6ZS14eHM6IDAuN3JlbTtcclxuJGZvbnQtc2l6ZS14czogMC44cmVtO1xyXG4kZm9udC1zaXplLXM6IDAuOXJlbTtcclxuJGZvbnQtc2l6ZS1tOiAxcmVtO1xyXG4kZm9udC1zaXplLWw6IDEuMjVyZW07XHJcbiRmb250LXNpemUteGw6IDEuNXJlbTtcclxuJGZvbnQtc2l6ZS14eGw6IDJyZW07XHJcblxyXG4kZm9udC13ZWlnaHQteHM6IDMwMDtcclxuJGZvbnQtd2VpZ2h0LW06IDQwMDtcclxuJGZvbnQtd2VpZ2h0LXhsOiA3MDA7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.scss']
            }]
    }], null, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "2zM9":
/*!***********************************************!*\
  !*** ./src/app/constants/experience/index.ts ***!
  \***********************************************/
/*! exports provided: EXPERIENCIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPERIENCIES", function() { return EXPERIENCIES; });
/* harmony import */ var _experience_academy_constanst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience-academy.constanst */ "Apfb");
/* harmony import */ var _experience_jobs_constanst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience-jobs.constanst */ "XOga");
/* harmony import */ var _experience_others_constanst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience-others.constanst */ "hqHN");



const EXPERIENCIES = {
    jobs: _experience_jobs_constanst__WEBPACK_IMPORTED_MODULE_1__["EXPERIENCIES_JOBS"],
    academy: _experience_academy_constanst__WEBPACK_IMPORTED_MODULE_0__["EXPERIENCIES_ACADEMY"],
    others: _experience_others_constanst__WEBPACK_IMPORTED_MODULE_2__["EXPERIENCIES_OTHERS"]
};


/***/ }),

/***/ "5gzz":
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/card/card.component */ "hYms");
/* harmony import */ var _common_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/carousel/carousel.component */ "hiim");
/* harmony import */ var _experience_jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience-jobs.component */ "rvQl");
/* harmony import */ var _experience_academy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience-academy.component */ "iI2S");






function ExperienceComponent_app_experience_jobs_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience-jobs");
} }
function ExperienceComponent_app_experience_academy_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience-academy");
} }
class ExperienceComponent {
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 4, vars: 1, consts: [[1, "timeline"], [3, "topControls"], [4, "carouselItem"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExperienceComponent_app_experience_jobs_2_Template, 1, 0, "app-experience-jobs", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExperienceComponent_app_experience_academy_3_Template, 1, 0, "app-experience-academy", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("topControls", true);
    } }, directives: [_common_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _common_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _common_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselItemDirective"], _experience_jobs_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceJobsComponent"], _experience_academy_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceAcademyComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                template: `
    <app-card  class="timeline">
      <app-carousel [topControls]="true">
        <app-experience-jobs  *carouselItem></app-experience-jobs>
        <app-experience-academy  *carouselItem></app-experience-academy>
      </app-carousel>
    </app-card>
    
  `,
                styles: []
            }]
    }], null, null); })();


/***/ }),

/***/ "8BVX":
/*!*********************************************************!*\
  !*** ./src/app/components/socials/socials.component.ts ***!
  \*********************************************************/
/*! exports provided: SocialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialsComponent", function() { return SocialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "OaWH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





function SocialsComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const social_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", social_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", social_r1.icon);
} }
class SocialsComponent {
    constructor(appService) {
        this.appService = appService;
    }
}
SocialsComponent.ɵfac = function SocialsComponent_Factory(t) { return new (t || SocialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
SocialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialsComponent, selectors: [["app-socials"]], decls: 2, vars: 1, consts: [[1, "socials"], ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], [3, "icon"]], template: function SocialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialsComponent_a_1_Template, 2, 2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appService.socials);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".socials[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 100%;\n  margin: 0 0 0.5rem 0;\n  padding: 0.25rem;\n  background-color: #2D2D3A;\n  width: 100%;\n}\n.socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n  color: #555;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzb2NpYWxzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcbWl4aW5zXFxmbGV4Ym94LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzYXNzXFxtaXhpbnNcXGNhcmRzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzYXNzXFx2YXJpYWJsZXNcXGNvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcdmFyaWFibGVzXFxmb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDREUsYUFBQTtFQWlCQSx1QkRma0I7RUNtQkgsZUFBQTtFQ2pCZixXQUxtQjtFQU1uQixvQkFOa0Q7RUFPbEQsZ0JGSHdCO0VFSXhCLHlCQ0dvQjtFSE5wQixXQUFBO0FBSUY7QUFIRTtFQUNFLGdCQUFBO0VBQ0EsV0dGUztFSEdULGlCSUpXO0FKU2YiLCJmaWxlIjoic29jaWFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2ltcG9ydHMnO1xyXG5cclxuLnNvY2lhbHMge1xyXG4gIEBpbmNsdWRlIGZsZXgoJHg6IGNlbnRlcik7XHJcbiAgQGluY2x1ZGUgY2FyZCgkcGFkZGluZzogMC4yNXJlbSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYSB7XHJcbiAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gICAgY29sb3I6ICRjb2xvci1ncmF5O1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhsO1xyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gZmxleCgkZGlyZWN0aW9uOiByb3csICR4OiBudWxsLCAkeTogbnVsbCwgJGlzV3JhcDogdHJ1ZSl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBAaWYoJGRpcmVjdGlvbiA9PSByb3cpe1xyXG4gICAgQGlmKCR4KSB7IEBpbmNsdWRlIGZsZXhKdXN0aWZ5Q29udGVudCgkeCk7IH1cclxuICAgIEBpZigkeSkgeyBAaW5jbHVkZSBmbGV4QWxpZ25JdGVtcygkeSk7IH1cclxuICB9IEBlbHNlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gICAgQGlmKCR4KSB7IEBpbmNsdWRlIGZsZXhBbGlnbkl0ZW1zKCR4KTsgfVxyXG4gICAgQGlmKCR5KSB7IEBpbmNsdWRlIGZsZXhKdXN0aWZ5Q29udGVudCgkeSk7IH1cclxuICB9XHJcbiAgQGluY2x1ZGUgZmxleFdyYXAoJGlzV3JhcCk7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4QWxpZ25JdGVtcygkcG9zaXRpb24pIHtcclxuICBhbGlnbi1pdGVtczogJHBvc2l0aW9uXHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4SnVzdGlmeUNvbnRlbnQoJHBvc2l0aW9uKSB7XHJcbiAganVzdGlmeS1jb250ZW50OiAkcG9zaXRpb247XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4V3JhcCgkaXNXcmFwKXtcclxuICBAaWYoJGlzV3JhcCkgeyBmbGV4LXdyYXA6IHdyYXAgfVxyXG4gIEBpZigkaXNXcmFwID09IGZhbHNlKSB7IGZsZXgtd3JhcDogbm93cmFwIH1cclxufVxyXG4iLCJAbWl4aW4gY2FyZCAoJHdpZHRoOiAxMDAlLCAkcGFkZGluZzogMXJlbSwgJG1hcmdpbjogMCAwIDAuNXJlbSAwLCAkYm9yZGVyLXJhZGl1czogMXJlbSwgJGlzSW5zZXQ6IGZhbHNlKSB7XHJcbiAgJHNoYWRvdzogJHNoYWRvdy1kYXJrO1xyXG4gIEBpZiAoJGlzSW5zZXQgPT0gdHJ1ZSkge1xyXG4gICAgJHNoYWRvdzogJHNoYWRvdy1kYXJrLWluc2V0O1xyXG4gIH0gXHJcbiAgd2lkdGg6ICR3aWR0aDtcclxuICBtYXJnaW46ICRtYXJnaW47XHJcbiAgcGFkZGluZzogJHBhZGRpbmc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnLWRhcmstbGlnaHQ7XHJcbn1cclxuIiwiJGNvbG9yLXByaW1hcnk6ICNGRkMxMDc7XHJcbiRjb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMTkxOTIzO1xyXG4kY29sb3Itc2Vjb25kYXJ5OiAjMkVCRDdBO1xyXG4kY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjMTkxOTIzO1xyXG5cclxuJGNvbG9yLWRhcms6ICMyZDJkMmQ7XHJcbiRjb2xvci1ncmF5OiAjNTU1O1xyXG4kY29sb3ItZ3JheS1saWdodDogIzk5OTtcclxuJGNvbG9yLWxpZ2h0OiAjZjJmMmYyO1xyXG5cclxuJGNvbG9yLWJnLWRhcms6ICMxOTE5MjM7XHJcbiRjb2xvci1iZy1kYXJrLWxpZ2h0OiAjMkQyRDNBO1xyXG4kY29sb3ItYmctbGlnaHQ6ICNmZmY7XHJcbiRjb2xvci1iZy1saWdodC1kYXJrOiAjZjBmMGYwOyIsIiRmb250LXNpemUteHhzOiAwLjdyZW07XHJcbiRmb250LXNpemUteHM6IDAuOHJlbTtcclxuJGZvbnQtc2l6ZS1zOiAwLjlyZW07XHJcbiRmb250LXNpemUtbTogMXJlbTtcclxuJGZvbnQtc2l6ZS1sOiAxLjI1cmVtO1xyXG4kZm9udC1zaXplLXhsOiAxLjVyZW07XHJcbiRmb250LXNpemUteHhsOiAycmVtO1xyXG5cclxuJGZvbnQtd2VpZ2h0LXhzOiAzMDA7XHJcbiRmb250LXdlaWdodC1tOiA0MDA7XHJcbiRmb250LXdlaWdodC14bDogNzAwO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-socials',
                template: `
    <div class="socials">
    <a *ngFor="let social of appService.socials" [href]="social.href" target="_blank">
      <fa-icon [icon]="social.icon"></fa-icon>
    </a>
  </div>
  `,
                styleUrls: ['./socials.component.scss']
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "Apfb":
/*!**********************************************************************!*\
  !*** ./src/app/constants/experience/experience-academy.constanst.ts ***!
  \**********************************************************************/
/*! exports provided: EXPERIENCIES_ACADEMY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPERIENCIES_ACADEMY", function() { return EXPERIENCIES_ACADEMY; });
const EXPERIENCIES_ACADEMY = {
    title: 'Experiencia académica',
    items: [
        {
            date: 'Sept 2004 - Abril 2006',
            title: 'FP Medio Administración',
            description: 'IES Pintor Rafael Requena - Caudete (Albacete)'
        },
        {
            date: 'Sept 2007 - Junio 2009',
            title: 'FP Medio Administración y Finanzas',
            description: 'IES Pintor Rafael Requena - Caudete (Albacete)'
        },
        {
            date: 'Sept 2010 - Junio 2014',
            title: 'Grado de ADE',
            description: 'Universidad de Castilla La Mancha y Universidad de Alicante'
        },
        {
            date: 'Sept 2016 - Junio 2017',
            title: 'FP Superior DAW',
            description: 'IES Joan D´Austria - Barcelona'
        },
    ]
};


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
    production: false
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

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/app.service */ "OaWH");
/* harmony import */ var _btn_download_cv_btn_download_cv_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../btn-download-cv/btn-download-cv.component */ "zMXQ");
/* harmony import */ var _socials_socials_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socials/socials.component */ "8BVX");





class ProfileComponent {
    constructor(appService) {
        this.appService = appService;
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 10, vars: 0, consts: [[1, "profile"], [1, "profile__data"], [1, "profile__data-img"], ["src", "assets/img/me.jpg", "alt", "photo"], [1, "profile__data-name"], [1, "profile__data-job"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "David Menor Molina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Frontend developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-btn-download-cv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-socials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_btn_download_cv_btn_download_cv_component__WEBPACK_IMPORTED_MODULE_2__["BtnDownloadCvComponent"], _socials_socials_component__WEBPACK_IMPORTED_MODULE_3__["SocialsComponent"]], styles: [".profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.profile__data[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 0.5rem 0;\n  padding: 1rem;\n  background-color: #2D2D3A;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  max-width: 100%;\n}\n.profile__data-img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  margin: 0 auto;\n  padding: 0.5rem;\n  border-radius: 50%;\n  background: #191923;\n}\n.profile__data-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.profile__data-name[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 1.25rem;\n  text-align: center;\n}\n.profile__data-job[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 0.8rem;\n  text-align: center;\n}\n.profile[_ngcontent-%COMP%]   app-socials[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcbWl4aW5zXFxmbGV4Ym94LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzYXNzXFxtaXhpbnNcXGNhcmRzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzYXNzXFx2YXJpYWJsZXNcXGNvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcdmFyaWFibGVzXFxmb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDREUsYUFBQTtFQUtFLHNCREh3QjtFQ1cxQixtQkRYc0M7RUNtQnZCLGVBQUE7QURqQmpCO0FBQUU7RUVBQSxXQUxtQjtFQU1uQixvQkFOa0Q7RUFPbEQsYUFQbUM7RUFRbkMseUJDR29CO0VGVnBCLGFBQUE7RUFLRSxzQkRFa0Q7RUNNcEQsbUJETm9CO0VDVXBCLHVCRFZnQztFQ2NqQixlQUFBO0VEYmIsZUFBQTtBQVFKO0FBTkk7RUFFRSxZQURPO0VBRVAsYUFGTztFQUdQLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkdSVTtBSGVoQjtBQU5NO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVFSO0FBSkk7RUFDRSxnQkFBQTtFQUNBLGtCSXhCUTtFSnlCUixrQkFBQTtBQU1OO0FBSkk7RUFDRSxXR3pCYTtFSDBCYixpQkloQ1M7RUppQ1Qsa0JBQUE7QUFNTjtBQURFO0VBQ0UsV0FBQTtBQUdKIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdpbXBvcnRzJztcclxuXHJcbi5wcm9maWxlIHtcclxuICBAaW5jbHVkZSBmbGV4KCRkaXJlY3Rpb246IGNvbHVtbiwgJHg6IGNlbnRlcik7XHJcbiAgICBcclxuICAmX19kYXRhIHtcclxuICAgIFxyXG4gICAgQGluY2x1ZGUgY2FyZDtcclxuICAgIEBpbmNsdWRlIGZsZXgoJHg6IGNlbnRlciwgJHk6IGNlbnRlciwgJGRpcmVjdGlvbjogY29sdW1uKTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgICAmLWltZyB7XHJcbiAgICAgICRzaXplOiAxMjBweDtcclxuICAgICAgd2lkdGg6ICRzaXplO1xyXG4gICAgICBoZWlnaHQ6ICRzaXplO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1iZy1kYXJrO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLW5hbWUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICBmb250LXNpemU6ICRmb250LXNpemUtbDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgJi1qb2Ige1xyXG4gICAgICBjb2xvcjogJGNvbG9yLWdyYXktbGlnaHQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIGFwcC1zb2NpYWxzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbn0iLCJAbWl4aW4gZmxleCgkZGlyZWN0aW9uOiByb3csICR4OiBudWxsLCAkeTogbnVsbCwgJGlzV3JhcDogdHJ1ZSl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBAaWYoJGRpcmVjdGlvbiA9PSByb3cpe1xyXG4gICAgQGlmKCR4KSB7IEBpbmNsdWRlIGZsZXhKdXN0aWZ5Q29udGVudCgkeCk7IH1cclxuICAgIEBpZigkeSkgeyBAaW5jbHVkZSBmbGV4QWxpZ25JdGVtcygkeSk7IH1cclxuICB9IEBlbHNlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gICAgQGlmKCR4KSB7IEBpbmNsdWRlIGZsZXhBbGlnbkl0ZW1zKCR4KTsgfVxyXG4gICAgQGlmKCR5KSB7IEBpbmNsdWRlIGZsZXhKdXN0aWZ5Q29udGVudCgkeSk7IH1cclxuICB9XHJcbiAgQGluY2x1ZGUgZmxleFdyYXAoJGlzV3JhcCk7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4QWxpZ25JdGVtcygkcG9zaXRpb24pIHtcclxuICBhbGlnbi1pdGVtczogJHBvc2l0aW9uXHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4SnVzdGlmeUNvbnRlbnQoJHBvc2l0aW9uKSB7XHJcbiAganVzdGlmeS1jb250ZW50OiAkcG9zaXRpb247XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4V3JhcCgkaXNXcmFwKXtcclxuICBAaWYoJGlzV3JhcCkgeyBmbGV4LXdyYXA6IHdyYXAgfVxyXG4gIEBpZigkaXNXcmFwID09IGZhbHNlKSB7IGZsZXgtd3JhcDogbm93cmFwIH1cclxufVxyXG4iLCJAbWl4aW4gY2FyZCAoJHdpZHRoOiAxMDAlLCAkcGFkZGluZzogMXJlbSwgJG1hcmdpbjogMCAwIDAuNXJlbSAwLCAkYm9yZGVyLXJhZGl1czogMXJlbSwgJGlzSW5zZXQ6IGZhbHNlKSB7XHJcbiAgJHNoYWRvdzogJHNoYWRvdy1kYXJrO1xyXG4gIEBpZiAoJGlzSW5zZXQgPT0gdHJ1ZSkge1xyXG4gICAgJHNoYWRvdzogJHNoYWRvdy1kYXJrLWluc2V0O1xyXG4gIH0gXHJcbiAgd2lkdGg6ICR3aWR0aDtcclxuICBtYXJnaW46ICRtYXJnaW47XHJcbiAgcGFkZGluZzogJHBhZGRpbmc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnLWRhcmstbGlnaHQ7XHJcbn1cclxuIiwiJGNvbG9yLXByaW1hcnk6ICNGRkMxMDc7XHJcbiRjb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMTkxOTIzO1xyXG4kY29sb3Itc2Vjb25kYXJ5OiAjMkVCRDdBO1xyXG4kY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjMTkxOTIzO1xyXG5cclxuJGNvbG9yLWRhcms6ICMyZDJkMmQ7XHJcbiRjb2xvci1ncmF5OiAjNTU1O1xyXG4kY29sb3ItZ3JheS1saWdodDogIzk5OTtcclxuJGNvbG9yLWxpZ2h0OiAjZjJmMmYyO1xyXG5cclxuJGNvbG9yLWJnLWRhcms6ICMxOTE5MjM7XHJcbiRjb2xvci1iZy1kYXJrLWxpZ2h0OiAjMkQyRDNBO1xyXG4kY29sb3ItYmctbGlnaHQ6ICNmZmY7XHJcbiRjb2xvci1iZy1saWdodC1kYXJrOiAjZjBmMGYwOyIsIiRmb250LXNpemUteHhzOiAwLjdyZW07XHJcbiRmb250LXNpemUteHM6IDAuOHJlbTtcclxuJGZvbnQtc2l6ZS1zOiAwLjlyZW07XHJcbiRmb250LXNpemUtbTogMXJlbTtcclxuJGZvbnQtc2l6ZS1sOiAxLjI1cmVtO1xyXG4kZm9udC1zaXplLXhsOiAxLjVyZW07XHJcbiRmb250LXNpemUteHhsOiAycmVtO1xyXG5cclxuJGZvbnQtd2VpZ2h0LXhzOiAzMDA7XHJcbiRmb250LXdlaWdodC1tOiA0MDA7XHJcbiRmb250LXdlaWdodC14bDogNzAwO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "E/7d":
/*!****************************************************************!*\
  !*** ./src/app/components/skills/skills-tecnical.component.ts ***!
  \****************************************************************/
/*! exports provided: SkillsTecnicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsTecnicalComponent", function() { return SkillsTecnicalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "OaWH");
/* harmony import */ var _common_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/carousel/carousel.component */ "hiim");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/card/card.component */ "hYms");
/* harmony import */ var _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/progress-bar/progress-bar.component */ "NfKg");







function SkillsTecnicalComponent_ng_container_1_app_card_1_app_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-progress-bar", 4);
} if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", skill_r4.name)("percentage", skill_r4.percentage);
} }
function SkillsTecnicalComponent_ng_container_1_app_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillsTecnicalComponent_ng_container_1_app_card_1_app_progress_bar_1_Template, 1, 2, "app-progress-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carousel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r2.appService.skillsTecnicals.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", carousel_r1);
} }
function SkillsTecnicalComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillsTecnicalComponent_ng_container_1_app_card_1_Template, 2, 2, "app-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class SkillsTecnicalComponent {
    constructor(appService) {
        this.appService = appService;
        this.numberPerCarousel = 5;
        this.carousels = [];
        this.createCarousels = () => {
            let count = 0;
            let carousel = [];
            this.appService.skillsTecnicals.items.map((item, i) => {
                carousel = [...carousel, item];
                count++;
                if (count >= this.numberPerCarousel || this.isLast(i)) {
                    this.addCarousel(carousel);
                    count = 0;
                    carousel = [];
                }
            });
        };
        this.addCarousel = carousel => this.carousels = [...this.carousels, carousel];
        this.isLast = i => i === this.appService.skillsTecnicals.items.length - 1;
    }
    ngOnInit() {
        this.createCarousels();
    }
}
SkillsTecnicalComponent.ɵfac = function SkillsTecnicalComponent_Factory(t) { return new (t || SkillsTecnicalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
SkillsTecnicalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsTecnicalComponent, selectors: [["app-skills-tecnical"]], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "title", 4, "carouselItem"], [3, "title"], [3, "text", "percentage", 4, "ngFor", "ngForOf"], [3, "text", "percentage"]], template: function SkillsTecnicalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillsTecnicalComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carousels);
    } }, directives: [_common_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _common_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselItemDirective"], _common_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__["ProgressBarComponent"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsTecnicalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills-tecnical',
                template: `
    <app-carousel>
      <ng-container *ngFor="let carousel of carousels">
        <app-card [title]="appService.skillsTecnicals.title" *carouselItem>
          <app-progress-bar 
            *ngFor="let skill of carousel"
            [text]="skill.name"
            [percentage]="skill.percentage">
          </app-progress-bar>
        </app-card>
      </ng-container>
    </app-carousel>
  `,
                styles: [``]
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "JvQ2":
/*!**********************************************************************!*\
  !*** ./src/app/components/experience/experience-others.component.ts ***!
  \**********************************************************************/
/*! exports provided: ExperienceOthersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceOthersComponent", function() { return ExperienceOthersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/app.service */ "OaWH");
/* harmony import */ var _common_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/card/card.component */ "hYms");
/* harmony import */ var _common_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/timeline/timeline.component */ "0PT/");





class ExperienceOthersComponent {
    constructor(appService) {
        this.appService = appService;
        this.init = () => this.options = this.appService.experiences.others;
    }
    ngOnInit() {
        this.init();
    }
}
ExperienceOthersComponent.ɵfac = function ExperienceOthersComponent_Factory(t) { return new (t || ExperienceOthersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
ExperienceOthersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceOthersComponent, selectors: [["app-experience-others"]], decls: 2, vars: 2, consts: [[3, "title"], [3, "items"]], template: function ExperienceOthersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.options.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.options.items);
    } }, directives: [_common_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _common_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceOthersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience-others',
                template: `
    <app-card [title]="options.title">
      <app-timeline [items]="options.items"></app-timeline>
    </app-card>
    
  `,
                styles: []
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "NfKg":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/progress-bar/progress-bar.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["bar"];
const _c1 = function (a0) { return { "width.%": a0 }; };
class ProgressBarComponent {
    constructor(builder) {
        this.builder = builder;
        this.text = '';
        this.percentage = 0;
    }
    ngAfterViewInit() {
        const animation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: `${this.percentage}%` }))
        ]);
        console.log(this.bar);
        const player = animation.create(this.bar.nativeElement);
        player.play();
    }
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"])); };
ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["app-progress-bar"]], viewQuery: function ProgressBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bar = _t.first);
    } }, inputs: { text: "text", percentage: "percentage" }, decls: 5, vars: 4, consts: [[1, "progress-bar"], [1, "progress-bar__value", 3, "ngStyle"], ["bar", ""], [1, "progress-bar__value-text"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.percentage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0.5rem 0;\n  background-color: #555;\n  border-radius: 0.25rem;\n}\n.progress-bar__value[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #2EBD7A;\n  border-radius: inherit;\n}\n.progress-bar__value-text[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem;\n  color: #191923;\n  font-size: 0.9rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzYXNzXFx2YXJpYWJsZXNcXGNvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzYXNzXFx2YXJpYWJsZXNcXGZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkNDVztFREFYLHNCQUFBO0FBREY7QUFFRTtFQUNFLFlBQUE7RUFDQSx5QkNQYztFRFFkLHNCQUFBO0FBQUo7QUFDSTtFQUNFLHFCQUFBO0VBQ0EsY0NWcUI7RURXckIsaUJFWlE7RUZhUixnQkVMVztFRk1YLHlCQUFBO0VBQ0EsbUJBQUE7QUFDTiIsImZpbGUiOiJwcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdpbXBvcnRzJztcclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAmX192YWx1ZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgICYtdGV4dCB7XHJcbiAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcclxuICAgICAgY29sb3I6ICRjb2xvci1zZWNvbmRhcnktY29udHJhc3Q7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zO1xyXG4gICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXhsO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkY29sb3ItcHJpbWFyeTogI0ZGQzEwNztcclxuJGNvbG9yLXByaW1hcnktY29udHJhc3Q6ICMxOTE5MjM7XHJcbiRjb2xvci1zZWNvbmRhcnk6ICMyRUJEN0E7XHJcbiRjb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICMxOTE5MjM7XHJcblxyXG4kY29sb3ItZGFyazogIzJkMmQyZDtcclxuJGNvbG9yLWdyYXk6ICM1NTU7XHJcbiRjb2xvci1ncmF5LWxpZ2h0OiAjOTk5O1xyXG4kY29sb3ItbGlnaHQ6ICNmMmYyZjI7XHJcblxyXG4kY29sb3ItYmctZGFyazogIzE5MTkyMztcclxuJGNvbG9yLWJnLWRhcmstbGlnaHQ6ICMyRDJEM0E7XHJcbiRjb2xvci1iZy1saWdodDogI2ZmZjtcclxuJGNvbG9yLWJnLWxpZ2h0LWRhcms6ICNmMGYwZjA7IiwiJGZvbnQtc2l6ZS14eHM6IDAuN3JlbTtcclxuJGZvbnQtc2l6ZS14czogMC44cmVtO1xyXG4kZm9udC1zaXplLXM6IDAuOXJlbTtcclxuJGZvbnQtc2l6ZS1tOiAxcmVtO1xyXG4kZm9udC1zaXplLWw6IDEuMjVyZW07XHJcbiRmb250LXNpemUteGw6IDEuNXJlbTtcclxuJGZvbnQtc2l6ZS14eGw6IDJyZW07XHJcblxyXG4kZm9udC13ZWlnaHQteHM6IDMwMDtcclxuJGZvbnQtd2VpZ2h0LW06IDQwMDtcclxuJGZvbnQtd2VpZ2h0LXhsOiA3MDA7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-progress-bar',
                styleUrls: ['./progress-bar.component.scss'],
                template: `
     <div class="progress-bar">
      <div class="progress-bar__value" #bar [ngStyle]="{ 'width.%': percentage }">
        <p class="progress-bar__value-text">{{ text }}</p>
      </div>
    </div>
  `,
            }]
    }], function () { return [{ type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] }]; }, { bar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['bar']
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], percentage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "OaWH":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "U7T7");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AppService {
    constructor(http) {
        this.http = http;
        this.hobbies = _constants__WEBPACK_IMPORTED_MODULE_1__["HOBBIES"];
        this.socials = _constants__WEBPACK_IMPORTED_MODULE_1__["SOCIALS"];
        this.skillsTecnicals = _constants__WEBPACK_IMPORTED_MODULE_1__["SKILLS"].tecnicals;
        this.skillsOthers = _constants__WEBPACK_IMPORTED_MODULE_1__["SKILLS"].others;
        this.experiences = _constants__WEBPACK_IMPORTED_MODULE_1__["EXPERIENCIES"];
        this.downloadCV = () => {
            this.http.get('/assets/downloads/cv.txt', { responseType: 'blob' })
                .subscribe(blob => {
                const a = document.createElement('a');
                const objctUrl = URL.createObjectURL(blob);
                a.href = objctUrl;
                a.download = 'cv_david_menor_molina.pdf';
                a.click();
                URL.revokeObjectURL(objctUrl);
            });
        };
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "QKJn":
/*!***********************************************!*\
  !*** ./src/app/constants/skills.constanst.ts ***!
  \***********************************************/
/*! exports provided: SKILLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILLS", function() { return SKILLS; });
const SKILLS = {
    tecnicals: {
        title: 'Tecnical skills',
        items: [
            { name: 'Javascript', percentage: '80' },
            { name: 'Angular', percentage: '75' },
            { name: 'Vue', percentage: '65' },
            { name: 'React', percentage: '75' },
            { name: 'NodeJS', percentage: '60' },
            { name: 'NextJS', percentage: '80' },
            { name: 'HTML', percentage: '95' },
            { name: 'MongoDB', percentage: '70' },
            { name: 'GraphQL', percentage: '65' },
            { name: 'MySQL', percentage: '50' },
            { name: 'CSS', percentage: '90' },
            { name: 'SASS', percentage: '85' },
            { name: 'Electron', percentage: '60' },
            { name: 'Ionic', percentage: '70' },
            { name: 'Flutter', percentage: '50' },
        ]
    },
    others: {
        title: 'Otras skills',
        items: [
            { name: 'Android', percentage: '30' },
            { name: 'Google extensions', percentage: '50' },
            { name: 'Android', percentage: '50' },
            { name: 'Android', percentage: '50' },
            { name: 'Android', percentage: '50' },
        ]
    }
};


/***/ }),

/***/ "SXxN":
/*!*********************************************************!*\
  !*** ./src/app/components/hobbies/hobbies.component.ts ***!
  \*********************************************************/
/*! exports provided: HobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesComponent", function() { return HobbiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "OaWH");
/* harmony import */ var _common_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/card/card.component */ "hYms");
/* harmony import */ var _common_tags_tags_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/tags/tags.component */ "hwSh");





class HobbiesComponent {
    constructor(appService) {
        this.appService = appService;
    }
}
HobbiesComponent.ɵfac = function HobbiesComponent_Factory(t) { return new (t || HobbiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
HobbiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HobbiesComponent, selectors: [["app-hobbies"]], decls: 2, vars: 2, consts: [[3, "title"], [3, "items"]], template: function HobbiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tags", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.appService.hobbies.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.appService.hobbies.items);
    } }, directives: [_common_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _common_tags_tags_component__WEBPACK_IMPORTED_MODULE_3__["TagsComponent"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HobbiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hobbies',
                template: `
    <app-card [title]="appService.hobbies.title">
      <app-tags [items]="appService.hobbies.items"></app-tags>
    </app-card>
  `,
                styles: [``]
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/app.service */ "OaWH");
/* harmony import */ var _components_btn_download_cv_btn_download_cv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/btn-download-cv/btn-download-cv.component */ "zMXQ");
/* harmony import */ var _components_skills_skills_tecnical_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/skills/skills-tecnical.component */ "E/7d");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/experience/experience.component */ "5gzz");
/* harmony import */ var _components_skills_skills_others_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/skills/skills-others.component */ "vl5r");
/* harmony import */ var _components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/hobbies/hobbies.component */ "SXxN");
/* harmony import */ var _components_socials_socials_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/socials/socials.component */ "8BVX");
/* harmony import */ var _components_experience_experience_others_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/experience/experience-others.component */ "JvQ2");












class AppComponent {
    constructor(appService) {
        this.appService = appService;
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 0, consts: [[1, "container"], [1, "home"], [1, "home__content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A1Hola! Soy David Menor, bienvenido a mi espacio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-btn-download-cv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-skills-tecnical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-skills-others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-hobbies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-socials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-experience-others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_btn_download_cv_btn_download_cv_component__WEBPACK_IMPORTED_MODULE_3__["BtnDownloadCvComponent"], _components_skills_skills_tecnical_component__WEBPACK_IMPORTED_MODULE_4__["SkillsTecnicalComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"], _components_skills_skills_others_component__WEBPACK_IMPORTED_MODULE_7__["SkillsOthersComponent"], _components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_8__["HobbiesComponent"], _components_socials_socials_component__WEBPACK_IMPORTED_MODULE_9__["SocialsComponent"], _components_experience_experience_others_component__WEBPACK_IMPORTED_MODULE_10__["ExperienceOthersComponent"]], styles: [".home[_ngcontent-%COMP%] {\n  position: relative;\n  height: 400px;\n  z-index: 0;\n  margin-bottom: 1rem;\n  background-size: cover;\n  background-position: center;\n  background-image: url(https://bslthemes.com/arter-wp/wp-content/uploads/2020/09/bg.jpg);\n}\n.home[_ngcontent-%COMP%]:before {\n  z-index: -1;\n  position: absolute;\n  content: \"\";\n  width: 95%;\n  height: 1rem;\n  top: -1rem;\n  left: calc((100% - 95%) / 2);\n  background-color: #2d2d3a;\n}\n.home__content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-top: 3rem;\n  background: linear-gradient(0deg, rgba(25, 25, 35, 0.95) 0%, rgba(25, 25, 35, 0.4) 100%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.home__content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 0 2rem;\n  font-size: 1.5rem;\n  text-align: center;\n}\n@media only screen and (min-width: 992px) {\n  .home__content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    max-width: 500px;\n    font-size: 2rem;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n  display: grid;\n  grid-template-columns: 100%;\n}\n@media only screen and (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n    grid-template-columns: 300px auto 300px;\n    column-gap: 0.5rem;\n  }\n  .container[_ngcontent-%COMP%]   .home[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 4;\n  }\n  .container[_ngcontent-%COMP%]   app-profile[_ngcontent-%COMP%] {\n    grid-row: 2;\n    grid-column: 1;\n  }\n  .container[_ngcontent-%COMP%]   app-skills-tecnical[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-column-end: 4;\n  }\n  .container[_ngcontent-%COMP%]   app-socials[_ngcontent-%COMP%] {\n    grid-row: 5;\n    grid-column: 3;\n  }\n  .container[_ngcontent-%COMP%]   app-skills-others[_ngcontent-%COMP%] {\n    grid-row-start: 4;\n    grid-row-end: 6;\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n  .container[_ngcontent-%COMP%]   app-experience[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   app-experience-others[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 4;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxzYXNzXFxtaXhpbnNcXGZsZXhib3guc2NzcyIsIi4uXFwuLlxcc2Fzc1xcdmFyaWFibGVzXFxmb250cy5zY3NzIiwiLi5cXC4uXFxzYXNzXFxtaXhpbnNcXG1lZGlhLXF1ZXJ5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUZBQUE7QUFERjtBQUVFO0VBR0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBTFE7RUFNUixZQUxTO0VBTVQsVUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUFGSjtBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHdGQUFBO0VDekJGLGFBQUE7RUFLRSxzQkRxQjBCO0VDYjVCLG1CRGF3QztFQ1R4Qyx1QkRTb0Q7RUNMckMsZUFBQTtBRE9qQjtBQURJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJFM0JTO0VGNEJULGtCQUFBO0FBR047QUc3QkU7RUg2Qkk7SUFDRSxnQkFBQTtJQUNBLGVFaENRO0VGbUNkO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBQ0Y7QUczQ0U7RUhxQ0Y7SUFPSSxlQUFBO0lBQ0EsdUNBQUE7SUFDQSxrQkFBQTtFQUdGO0VBREU7SUFDRSxvQkFBQTtJQUNBLGtCQUFBO0VBR0o7RUFBRTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VBRUo7RUFDRTtJQUNFLG9CQUFBO0lBQ0Esa0JBQUE7RUFDSjtFQUVFO0lBQ0UsV0FBQTtJQUNBLGNBQUE7RUFBSjtFQUdFO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtFQURKO0VBSUU7O0lBRUUsb0JBQUE7SUFDQSxrQkFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnaW1wb3J0cyc7XHJcblxyXG4uaG9tZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgei1pbmRleDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2JzbHRoZW1lcy5jb20vYXJ0ZXItd3Avd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDkvYmcuanBnKTtcclxuICAmOmJlZm9yZSB7XHJcbiAgICAkd2lkdGg6IDk1JTtcclxuICAgICRoZWlnaHQ6IDFyZW07XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIGhlaWdodDogJGhlaWdodDtcclxuICAgIHRvcDogLSRoZWlnaHQ7XHJcbiAgICBsZWZ0OiBjYWxjKCgxMDAlIC0gI3skd2lkdGh9KSAvIDIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItYmctZGFyay1saWdodCwgMSk7XHJcbiAgfVxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKCRjb2xvci1iZy1kYXJrICwwLjk1KSAwJSwgcmdiYSgkY29sb3ItYmctZGFyayAsMC40KSAxMDAlKTs7XHJcbiAgICBAaW5jbHVkZSBmbGV4KCRkaXJlY3Rpb246IGNvbHVtbiwgJHg6IGNlbnRlciwgJHk6IGNlbnRlcik7XHJcbiAgICBoMiB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhsO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBtZWRpYVF1ZXJ5RGVza3RvcCB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eGw7O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICBAaW5jbHVkZSBtZWRpYVF1ZXJ5RGVza3RvcCB7XHJcbiAgICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IGF1dG8gMzAwcHg7XHJcbiAgICBjb2x1bW4tZ2FwOiAwLjVyZW07XHJcblxyXG4gICAgLmhvbWUge1xyXG4gICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xyXG4gICAgfVxyXG5cclxuICAgIGFwcC1wcm9maWxlIHtcclxuICAgICAgZ3JpZC1yb3c6IDI7XHJcbiAgICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcC1za2lsbHMtdGVjbmljYWwge1xyXG4gICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xyXG4gICAgfVxyXG5cclxuICAgIGFwcC1zb2NpYWxzIHtcclxuICAgICAgZ3JpZC1yb3c6IDU7XHJcbiAgICAgIGdyaWQtY29sdW1uOiAzO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcC1za2lsbHMtb3RoZXJzIHtcclxuICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XHJcbiAgICAgIGdyaWQtcm93LWVuZDogNjtcclxuICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuICAgIH1cclxuXHJcbiAgICBhcHAtZXhwZXJpZW5jZSxcclxuICAgIGFwcC1leHBlcmllbmNlLW90aGVycyB7XHJcbiAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gZmxleCgkZGlyZWN0aW9uOiByb3csICR4OiBudWxsLCAkeTogbnVsbCwgJGlzV3JhcDogdHJ1ZSl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBAaWYoJGRpcmVjdGlvbiA9PSByb3cpe1xyXG4gICAgQGlmKCR4KSB7IEBpbmNsdWRlIGZsZXhKdXN0aWZ5Q29udGVudCgkeCk7IH1cclxuICAgIEBpZigkeSkgeyBAaW5jbHVkZSBmbGV4QWxpZ25JdGVtcygkeSk7IH1cclxuICB9IEBlbHNlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gICAgQGlmKCR4KSB7IEBpbmNsdWRlIGZsZXhBbGlnbkl0ZW1zKCR4KTsgfVxyXG4gICAgQGlmKCR5KSB7IEBpbmNsdWRlIGZsZXhKdXN0aWZ5Q29udGVudCgkeSk7IH1cclxuICB9XHJcbiAgQGluY2x1ZGUgZmxleFdyYXAoJGlzV3JhcCk7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4QWxpZ25JdGVtcygkcG9zaXRpb24pIHtcclxuICBhbGlnbi1pdGVtczogJHBvc2l0aW9uXHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4SnVzdGlmeUNvbnRlbnQoJHBvc2l0aW9uKSB7XHJcbiAganVzdGlmeS1jb250ZW50OiAkcG9zaXRpb247XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4V3JhcCgkaXNXcmFwKXtcclxuICBAaWYoJGlzV3JhcCkgeyBmbGV4LXdyYXA6IHdyYXAgfVxyXG4gIEBpZigkaXNXcmFwID09IGZhbHNlKSB7IGZsZXgtd3JhcDogbm93cmFwIH1cclxufVxyXG4iLCIkZm9udC1zaXplLXh4czogMC43cmVtO1xyXG4kZm9udC1zaXplLXhzOiAwLjhyZW07XHJcbiRmb250LXNpemUtczogMC45cmVtO1xyXG4kZm9udC1zaXplLW06IDFyZW07XHJcbiRmb250LXNpemUtbDogMS4yNXJlbTtcclxuJGZvbnQtc2l6ZS14bDogMS41cmVtO1xyXG4kZm9udC1zaXplLXh4bDogMnJlbTtcclxuXHJcbiRmb250LXdlaWdodC14czogMzAwO1xyXG4kZm9udC13ZWlnaHQtbTogNDAwO1xyXG4kZm9udC13ZWlnaHQteGw6IDcwMDtcclxuIiwiQG1peGluIG1lZGlhUXVlcnlUYWJsZXQge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhUXVlcnlEZXNrdG9wIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYVF1ZXJ5TGFyZ2Uge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }]; }, null); })();


/***/ }),

/***/ "U7T7":
/*!************************************!*\
  !*** ./src/app/constants/index.ts ***!
  \************************************/
/*! exports provided: EXPERIENCIES, HOBBIES, SKILLS, SOCIALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _experience__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience */ "2zM9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXPERIENCIES", function() { return _experience__WEBPACK_IMPORTED_MODULE_0__["EXPERIENCIES"]; });

/* harmony import */ var _hobbies_constanst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hobbies.constanst */ "/b9C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HOBBIES", function() { return _hobbies_constanst__WEBPACK_IMPORTED_MODULE_1__["HOBBIES"]; });

/* harmony import */ var _skills_constanst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills.constanst */ "QKJn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SKILLS", function() { return _skills_constanst__WEBPACK_IMPORTED_MODULE_2__["SKILLS"]; });

/* harmony import */ var _socials_constanst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socials.constanst */ "dxJs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SOCIALS", function() { return _socials_constanst__WEBPACK_IMPORTED_MODULE_3__["SOCIALS"]; });







/***/ }),

/***/ "XOga":
/*!*******************************************************************!*\
  !*** ./src/app/constants/experience/experience-jobs.constanst.ts ***!
  \*******************************************************************/
/*! exports provided: EXPERIENCIES_JOBS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPERIENCIES_JOBS", function() { return EXPERIENCIES_JOBS; });
const EXPERIENCIES_JOBS = {
    title: 'Experiencia laboral',
    items: [
        {
            date: '2010 - Actualidad',
            title: 'Freelance',
            description: 'Desarrollos de aplicaciones hibrídas, webs y de escritorio.'
        },
        {
            date: 'Ago 2016 - Ago 2017',
            title: 'Sapas',
            description: 'Desarrollador junior de SAP y el desarrollo de una aplicación móvil para la gestión de hospitales en Ionic/Angular.'
        },
        {
            date: 'Ago 2017 - Oct 2017',
            title: 'Innofis',
            description: 'Frontend developer en el desarrolo híbrido de aplicación móvil con Ionic y Angular para importante banco de Arabis Saudi.'
        },
        {
            date: 'Oct 2017 - Actualidad',
            title: 'Atos',
            description: 'Frontend developer en diferentes proyectos desarrollados en ReactJS y Angular, acompañados de SASS, para grandes grandes empresas electricas españolas y eventos deportivos mundiales.'
        },
    ]
};


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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dxJs":
/*!************************************************!*\
  !*** ./src/app/constants/socials.constanst.ts ***!
  \************************************************/
/*! exports provided: SOCIALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIALS", function() { return SOCIALS; });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");


const SOCIALS = [
    { icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faLinkedin"], href: 'www.linkedin.com/in/damenor' },
    { icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGithub"], href: 'https://github.com/damenor' },
    { icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faNpm"], href: 'https://www.npmjs.com/~damenor' },
    { icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGooglePlay"], href: 'https://play.google.com/store/apps/developer?id=dmenor' },
    { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"], href: 'mailto:davidmenormolina@gmail.com' },
];


/***/ }),

/***/ "hYms":
/*!**********************************************************!*\
  !*** ./src/app/components/common/card/card.component.ts ***!
  \**********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CardComponent_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
} }
const _c0 = ["*"];
class CardComponent {
    constructor() {
        this.styles = {};
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { title: "title", styles: "styles" }, ngContentSelectors: _c0, decls: 4, vars: 2, consts: [[1, "card", 3, "ngStyle"], ["class", "card__title", 4, "ngIf"], [1, "card__content"], [1, "card__title"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_h3_1_Template, 2, 1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.styles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 0.5rem 0;\n  padding: 1rem;\n  background-color: #2D2D3A;\n  overflow: hidden;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #555;\n}\n@media only screen and (min-width: 992px) {\n  .card__title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FyZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcbWl4aW5zXFxjYXJkcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzYXNzXFx2YXJpYWJsZXNcXGNvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzYXNzXFx2YXJpYWJsZXNcXGZvbnRzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNhc3NcXG1peGluc1xcbWVkaWEtcXVlcnkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQ0dFLFdBTG1CO0VBTW5CLG9CQU5rRDtFQU9sRCxhQVBtQztFQVFuQyx5QkNHb0I7RUZQcEIsZ0JBQUE7QUFFRjtBQURFO0VBQ0UsZ0JHSWE7RUhIYixlR0pVO0VIS1YsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBR0o7QUlORTtFSkZBO0lBT0ksa0JHUlE7RUhhWjtBQUNGIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdpbXBvcnRzJztcclxuXHJcbi5jYXJkIHtcclxuICBAaW5jbHVkZSBjYXJkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC14bDtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLWdyYXk7XHJcbiAgICBAaW5jbHVkZSBtZWRpYVF1ZXJ5RGVza3RvcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gY2FyZCAoJHdpZHRoOiAxMDAlLCAkcGFkZGluZzogMXJlbSwgJG1hcmdpbjogMCAwIDAuNXJlbSAwLCAkYm9yZGVyLXJhZGl1czogMXJlbSwgJGlzSW5zZXQ6IGZhbHNlKSB7XHJcbiAgJHNoYWRvdzogJHNoYWRvdy1kYXJrO1xyXG4gIEBpZiAoJGlzSW5zZXQgPT0gdHJ1ZSkge1xyXG4gICAgJHNoYWRvdzogJHNoYWRvdy1kYXJrLWluc2V0O1xyXG4gIH0gXHJcbiAgd2lkdGg6ICR3aWR0aDtcclxuICBtYXJnaW46ICRtYXJnaW47XHJcbiAgcGFkZGluZzogJHBhZGRpbmc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnLWRhcmstbGlnaHQ7XHJcbn1cclxuIiwiJGNvbG9yLXByaW1hcnk6ICNGRkMxMDc7XHJcbiRjb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMTkxOTIzO1xyXG4kY29sb3Itc2Vjb25kYXJ5OiAjMkVCRDdBO1xyXG4kY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjMTkxOTIzO1xyXG5cclxuJGNvbG9yLWRhcms6ICMyZDJkMmQ7XHJcbiRjb2xvci1ncmF5OiAjNTU1O1xyXG4kY29sb3ItZ3JheS1saWdodDogIzk5OTtcclxuJGNvbG9yLWxpZ2h0OiAjZjJmMmYyO1xyXG5cclxuJGNvbG9yLWJnLWRhcms6ICMxOTE5MjM7XHJcbiRjb2xvci1iZy1kYXJrLWxpZ2h0OiAjMkQyRDNBO1xyXG4kY29sb3ItYmctbGlnaHQ6ICNmZmY7XHJcbiRjb2xvci1iZy1saWdodC1kYXJrOiAjZjBmMGYwOyIsIiRmb250LXNpemUteHhzOiAwLjdyZW07XHJcbiRmb250LXNpemUteHM6IDAuOHJlbTtcclxuJGZvbnQtc2l6ZS1zOiAwLjlyZW07XHJcbiRmb250LXNpemUtbTogMXJlbTtcclxuJGZvbnQtc2l6ZS1sOiAxLjI1cmVtO1xyXG4kZm9udC1zaXplLXhsOiAxLjVyZW07XHJcbiRmb250LXNpemUteHhsOiAycmVtO1xyXG5cclxuJGZvbnQtd2VpZ2h0LXhzOiAzMDA7XHJcbiRmb250LXdlaWdodC1tOiA0MDA7XHJcbiRmb250LXdlaWdodC14bDogNzAwO1xyXG4iLCJAbWl4aW4gbWVkaWFRdWVyeVRhYmxldCB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWFRdWVyeURlc2t0b3Age1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhUXVlcnlMYXJnZSB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "hiim":
/*!******************************************************************!*\
  !*** ./src/app/components/common/carousel/carousel.component.ts ***!
  \******************************************************************/
/*! exports provided: CarouselItemDirective, CarouselItemElement, CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemDirective", function() { return CarouselItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemElement", function() { return CarouselItemElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







const _c0 = ["carousel"];
const _c1 = function (a0) { return { "carousel__content-item--active": a0 }; };
function CarouselComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r1.currentPosition === i_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r3.tpl);
} }
const _c2 = function (a0) { return { "carousel__buttons-steps-item--active": a0 }; };
function CarouselComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_5_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.setCurrentPosition(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r5.currentPosition === i_r7));
} }
function CarouselComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_5_Template_fa_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_div_5_div_3_Template, 1, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_5_Template_fa_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faChevronLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faChevronRight);
} }
const _c3 = function (a0) { return { "carousel--reverse": a0 }; };
class CarouselItemDirective {
    constructor(tpl) {
        this.tpl = tpl;
    }
}
CarouselItemDirective.ɵfac = function CarouselItemDirective_Factory(t) { return new (t || CarouselItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
CarouselItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CarouselItemDirective, selectors: [["", "carouselItem", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[carouselItem]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
class CarouselItemElement {
}
CarouselItemElement.ɵfac = function CarouselItemElement_Factory(t) { return new (t || CarouselItemElement)(); };
CarouselItemElement.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CarouselItemElement, selectors: [["", 8, "carousel__content-item"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselItemElement, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '.carousel__content-item'
            }]
    }], null, null); })();
class CarouselComponent {
    constructor(builder) {
        this.builder = builder;
        this.timing = '500ms';
        this.showControls = true;
        this.topControls = false;
        this.currentPosition = 0;
        this.faChevronLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronLeft"];
        this.faChevronRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronRight"];
        this.setCurrentPosition = (position) => {
            const percentage = -100 * position;
            this.currentPosition = position;
            this.loadAnimation(percentage);
        };
        this.initWidthCarousel = () => {
            const width = this.items.length * 100;
            this.carousel.nativeElement.style.width = `${width}%`;
        };
    }
    ngAfterViewInit() {
        this.initWidthCarousel();
    }
    next() {
        let nextPosition = this.currentPosition + 1;
        if (nextPosition === this.items.length)
            nextPosition = 0;
        this.setCurrentPosition(nextPosition);
    }
    prev() {
        let backPosition = this.currentPosition - 1;
        if (backPosition < 0)
            backPosition = this.items.length - 1;
        this.setCurrentPosition(backPosition);
    }
    loadAnimation(percentage) {
        percentage = percentage / this.items.length;
        const animation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(this.timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: `translateX(${percentage}%)` }))
        ]);
        const player = animation.create(this.carousel.nativeElement);
        player.play();
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CarouselItemDirective, false);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
    } }, viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, inputs: { timing: "timing", showControls: "showControls", topControls: "topControls" }, decls: 6, vars: 5, consts: [[1, "carousel", 3, "ngClass"], [1, "carousel__content"], ["carousel", ""], ["class", "carousel__content-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "carousel__buttons", 4, "ngIf"], [1, "carousel__content-item", 3, "ngClass"], [3, "ngTemplateOutlet"], [1, "carousel__buttons"], [3, "icon", "click"], [1, "carousel__buttons-steps"], ["class", "carousel__buttons-steps-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "carousel__buttons-steps-item", 3, "ngClass", "click"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_div_4_Template, 2, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_div_5_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx.topControls));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showControls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: [".carousel[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel--reverse[_ngcontent-%COMP%] {\n  flex-direction: column-reverse;\n}\n.carousel__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow: hidden;\n}\n.carousel__content-item[_ngcontent-%COMP%] {\n  width: 100%;\n  opacity: 0;\n  transform: scale(0.75) translateY(-25%);\n  transition: all 0.5s;\n}\n.carousel__content-item--active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n}\n.carousel__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n.carousel__buttons[_ngcontent-%COMP%]    > fa-icon[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  color: #555;\n  font-size: 2rem;\n  cursor: pointer;\n  transition: 0.25s all ease-in-out;\n}\n.carousel__buttons[_ngcontent-%COMP%]    > fa-icon[_ngcontent-%COMP%]:active {\n  color: #FFC107;\n}\n.carousel__buttons-steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.carousel__buttons-steps-item[_ngcontent-%COMP%] {\n  height: 0.75rem;\n  width: 1rem;\n  margin: 0 0.25rem;\n  border: 2px solid #999;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: 0.25s all ease-in-out;\n}\n.carousel__buttons-steps-item--active[_ngcontent-%COMP%] {\n  width: 2rem;\n  background-color: #FFC107;\n  border: 2px solid #FFC107;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNhc3NcXG1peGluc1xcZmxleGJveC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzYXNzXFx2YXJpYWJsZXNcXGNvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzYXNzXFx2YXJpYWJsZXNcXGZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQ0ZBLGFBQUE7RUFLRSxzQkRGd0I7RUNrQlgsZUFBQTtFRGpCZixXQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUFFO0VBQ0UsOEJBQUE7QUFFSjtBQUFFO0VDVEEsYUFBQTtFQXNCd0IsaUJBQUE7RURYdEIsZ0JBQUE7QUFHSjtBQUZJO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtFQUNBLG9CQUFBO0FBSU47QUFITTtFQUNFLFVBQUE7RUFDQSxpQ0FBQTtBQUtSO0FBQUU7RUN4QkEsYUFBQTtFQWlCQSx1QkRRb0I7RUNacEIsbUJEWWdDO0VDSmpCLGVBQUE7RURLYixXQUFBO0VBQ0EscUJBQUE7QUFLSjtBQUpJO0VBQ0UsY0FBQTtFQUNBLFdFekJPO0VGMEJQLGVHMUJVO0VIMkJWLGVBQUE7RUFDQSxpQ0FBQTtBQU1OO0FBTE07RUFDRSxjRXBDUTtBRjJDaEI7QUFKSTtFQ3RDRixhQUFBO0VBcUJlLGVBQUE7QUR5QmpCO0FBTk07RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQVFSO0FBUFE7RUFDRSxXQUFBO0VBQ0EseUJFbkRNO0VGb0ROLHlCQUFBO0FBU1YiLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdpbXBvcnRzJztcclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIEBpbmNsdWRlIGZsZXgoJGRpcmVjdGlvbjogY29sdW1uKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICYtLXJldmVyc2Uge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIH1cclxuICAmX19jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIGZsZXgoJGlzV3JhcDogZmFsc2UpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICYtaXRlbSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpIHRyYW5zbGF0ZVkoLTI1JSk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAmLS1hY3RpdmUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19idXR0b25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgoJHg6IGNlbnRlciwgJHk6IGNlbnRlcik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgID4gZmEtaWNvbiB7XHJcbiAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICBjb2xvcjogJGNvbG9yLWdyYXk7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eGw7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogMC4yNXMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLXN0ZXBzIHtcclxuICAgICAgQGluY2x1ZGUgZmxleDtcclxuICAgICAgJi1pdGVtIHtcclxuICAgICAgICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwIDAuMjVyZW07XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLWdyYXktbGlnaHQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjI1cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgJi0tYWN0aXZlIHtcclxuICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIkBtaXhpbiBmbGV4KCRkaXJlY3Rpb246IHJvdywgJHg6IG51bGwsICR5OiBudWxsLCAkaXNXcmFwOiB0cnVlKXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIEBpZigkZGlyZWN0aW9uID09IHJvdyl7XHJcbiAgICBAaWYoJHgpIHsgQGluY2x1ZGUgZmxleEp1c3RpZnlDb250ZW50KCR4KTsgfVxyXG4gICAgQGlmKCR5KSB7IEBpbmNsdWRlIGZsZXhBbGlnbkl0ZW1zKCR5KTsgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbiAgICBAaWYoJHgpIHsgQGluY2x1ZGUgZmxleEFsaWduSXRlbXMoJHgpOyB9XHJcbiAgICBAaWYoJHkpIHsgQGluY2x1ZGUgZmxleEp1c3RpZnlDb250ZW50KCR5KTsgfVxyXG4gIH1cclxuICBAaW5jbHVkZSBmbGV4V3JhcCgkaXNXcmFwKTtcclxufVxyXG5cclxuQG1peGluIGZsZXhBbGlnbkl0ZW1zKCRwb3NpdGlvbikge1xyXG4gIGFsaWduLWl0ZW1zOiAkcG9zaXRpb25cclxufVxyXG5cclxuQG1peGluIGZsZXhKdXN0aWZ5Q29udGVudCgkcG9zaXRpb24pIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRwb3NpdGlvbjtcclxufVxyXG5cclxuQG1peGluIGZsZXhXcmFwKCRpc1dyYXApe1xyXG4gIEBpZigkaXNXcmFwKSB7IGZsZXgtd3JhcDogd3JhcCB9XHJcbiAgQGlmKCRpc1dyYXAgPT0gZmFsc2UpIHsgZmxleC13cmFwOiBub3dyYXAgfVxyXG59XHJcbiIsIiRjb2xvci1wcmltYXJ5OiAjRkZDMTA3O1xyXG4kY29sb3ItcHJpbWFyeS1jb250cmFzdDogIzE5MTkyMztcclxuJGNvbG9yLXNlY29uZGFyeTogIzJFQkQ3QTtcclxuJGNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogIzE5MTkyMztcclxuXHJcbiRjb2xvci1kYXJrOiAjMmQyZDJkO1xyXG4kY29sb3ItZ3JheTogIzU1NTtcclxuJGNvbG9yLWdyYXktbGlnaHQ6ICM5OTk7XHJcbiRjb2xvci1saWdodDogI2YyZjJmMjtcclxuXHJcbiRjb2xvci1iZy1kYXJrOiAjMTkxOTIzO1xyXG4kY29sb3ItYmctZGFyay1saWdodDogIzJEMkQzQTtcclxuJGNvbG9yLWJnLWxpZ2h0OiAjZmZmO1xyXG4kY29sb3ItYmctbGlnaHQtZGFyazogI2YwZjBmMDsiLCIkZm9udC1zaXplLXh4czogMC43cmVtO1xyXG4kZm9udC1zaXplLXhzOiAwLjhyZW07XHJcbiRmb250LXNpemUtczogMC45cmVtO1xyXG4kZm9udC1zaXplLW06IDFyZW07XHJcbiRmb250LXNpemUtbDogMS4yNXJlbTtcclxuJGZvbnQtc2l6ZS14bDogMS41cmVtO1xyXG4kZm9udC1zaXplLXh4bDogMnJlbTtcclxuXHJcbiRmb250LXdlaWdodC14czogMzAwO1xyXG4kZm9udC13ZWlnaHQtbTogNDAwO1xyXG4kZm9udC13ZWlnaHQteGw6IDcwMDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.scss']
            }]
    }], function () { return [{ type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CarouselItemDirective]
        }], carousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['carousel']
        }], timing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], topControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "hqHN":
/*!*********************************************************************!*\
  !*** ./src/app/constants/experience/experience-others.constanst.ts ***!
  \*********************************************************************/
/*! exports provided: EXPERIENCIES_OTHERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPERIENCIES_OTHERS", function() { return EXPERIENCIES_OTHERS; });
const EXPERIENCIES_OTHERS = {
    title: 'Otras experiencias laborales',
    items: [
        {
            date: 'Marzo 2002 - Sept 2002',
            title: 'Eusebio Molla e hijos',
            description: 'Aprendiz de chapista soldador'
        },
        {
            date: 'Sept 2002 - Enero 2003',
            title: 'Construcciones Caudete',
            description: 'Peón de obra'
        },
        {
            date: 'Enero 2003 - Sept 2005',
            title: 'Caudexmobel',
            description: 'Tapicero - mozo de almacén'
        },
        {
            date: 'Dic 2005 - Abril 2006',
            title: 'Martam Asesores',
            description: 'Auxiliar administrativo'
        },
        {
            date: 'Junio 2006 - Sept 2006',
            title: 'La Goleta',
            description: 'Repartidor'
        },
        {
            date: 'Junio 2007 - Enero 2008',
            title: 'Cantos y Pastor',
            description: 'Administrativo'
        },
        {
            date: 'Abril 2008 - Oct 2008',
            title: 'Gasolinera BP',
            description: ''
        },
        {
            date: 'Abril 2009 - Julio 2009',
            title: 'Agullo e Hijos',
            description: 'Administrativo'
        },
        {
            date: 'Abril 2009 - Julio 2009',
            title: 'Agullo e Hijos',
            description: 'Administrativo'
        },
        {
            date: 'Feb 2015 - Abril 2015',
            title: 'Vertigo',
            description: 'Promotor comercial'
        },
    ]
};


/***/ }),

/***/ "hwSh":
/*!**********************************************************!*\
  !*** ./src/app/components/common/tags/tags.component.ts ***!
  \**********************************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TagsComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
} }
class TagsComponent {
}
TagsComponent.ɵfac = function TagsComponent_Factory(t) { return new (t || TagsComponent)(); };
TagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagsComponent, selectors: [["app-tags"]], inputs: { items: "items" }, decls: 2, vars: 1, consts: [[1, "tags"], ["class", "tags__item", 4, "ngFor", "ngForOf"], [1, "tags__item"]], template: function TagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TagsComponent_p_1_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".tags[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  max-width: 360px;\n  margin: 0 auto;\n}\n.tags__item[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n  padding: 0.5rem;\n  color: #191923;\n  font-size: 0.9rem;\n  font-weight: 700;\n  letter-spacing: 1px;\n  background-color: #FFC107;\n  border-radius: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGFncy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcbWl4aW5zXFxmbGV4Ym94LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNhc3NcXHZhcmlhYmxlc1xcY29sb3JzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNhc3NcXHZhcmlhYmxlc1xcZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQ0RFLGFBQUE7RUFpQkEsdUJEZmtCO0VDbUJILGVBQUE7RURsQmYsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0VScUI7RUZTckIsaUJHUlU7RUhTVixnQkdEYTtFSEViLG1CQUFBO0VBQ0EseUJFYlk7RUZjWixtQkFBQTtBQUVKIiwiZmlsZSI6InRhZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdpbXBvcnRzJztcclxuXHJcbi50YWdzIHtcclxuICBAaW5jbHVkZSBmbGV4KCR4OiBjZW50ZXIpO1xyXG4gIG1heC13aWR0aDogMzYwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgJl9faXRlbSB7XHJcbiAgICBtYXJnaW46IDAuMjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnktY29udHJhc3Q7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtcztcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQteGw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIH1cclxufSIsIkBtaXhpbiBmbGV4KCRkaXJlY3Rpb246IHJvdywgJHg6IG51bGwsICR5OiBudWxsLCAkaXNXcmFwOiB0cnVlKXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIEBpZigkZGlyZWN0aW9uID09IHJvdyl7XHJcbiAgICBAaWYoJHgpIHsgQGluY2x1ZGUgZmxleEp1c3RpZnlDb250ZW50KCR4KTsgfVxyXG4gICAgQGlmKCR5KSB7IEBpbmNsdWRlIGZsZXhBbGlnbkl0ZW1zKCR5KTsgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbiAgICBAaWYoJHgpIHsgQGluY2x1ZGUgZmxleEFsaWduSXRlbXMoJHgpOyB9XHJcbiAgICBAaWYoJHkpIHsgQGluY2x1ZGUgZmxleEp1c3RpZnlDb250ZW50KCR5KTsgfVxyXG4gIH1cclxuICBAaW5jbHVkZSBmbGV4V3JhcCgkaXNXcmFwKTtcclxufVxyXG5cclxuQG1peGluIGZsZXhBbGlnbkl0ZW1zKCRwb3NpdGlvbikge1xyXG4gIGFsaWduLWl0ZW1zOiAkcG9zaXRpb25cclxufVxyXG5cclxuQG1peGluIGZsZXhKdXN0aWZ5Q29udGVudCgkcG9zaXRpb24pIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRwb3NpdGlvbjtcclxufVxyXG5cclxuQG1peGluIGZsZXhXcmFwKCRpc1dyYXApe1xyXG4gIEBpZigkaXNXcmFwKSB7IGZsZXgtd3JhcDogd3JhcCB9XHJcbiAgQGlmKCRpc1dyYXAgPT0gZmFsc2UpIHsgZmxleC13cmFwOiBub3dyYXAgfVxyXG59XHJcbiIsIiRjb2xvci1wcmltYXJ5OiAjRkZDMTA3O1xyXG4kY29sb3ItcHJpbWFyeS1jb250cmFzdDogIzE5MTkyMztcclxuJGNvbG9yLXNlY29uZGFyeTogIzJFQkQ3QTtcclxuJGNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogIzE5MTkyMztcclxuXHJcbiRjb2xvci1kYXJrOiAjMmQyZDJkO1xyXG4kY29sb3ItZ3JheTogIzU1NTtcclxuJGNvbG9yLWdyYXktbGlnaHQ6ICM5OTk7XHJcbiRjb2xvci1saWdodDogI2YyZjJmMjtcclxuXHJcbiRjb2xvci1iZy1kYXJrOiAjMTkxOTIzO1xyXG4kY29sb3ItYmctZGFyay1saWdodDogIzJEMkQzQTtcclxuJGNvbG9yLWJnLWxpZ2h0OiAjZmZmO1xyXG4kY29sb3ItYmctbGlnaHQtZGFyazogI2YwZjBmMDsiLCIkZm9udC1zaXplLXh4czogMC43cmVtO1xyXG4kZm9udC1zaXplLXhzOiAwLjhyZW07XHJcbiRmb250LXNpemUtczogMC45cmVtO1xyXG4kZm9udC1zaXplLW06IDFyZW07XHJcbiRmb250LXNpemUtbDogMS4yNXJlbTtcclxuJGZvbnQtc2l6ZS14bDogMS41cmVtO1xyXG4kZm9udC1zaXplLXh4bDogMnJlbTtcclxuXHJcbiRmb250LXdlaWdodC14czogMzAwO1xyXG4kZm9udC13ZWlnaHQtbTogNDAwO1xyXG4kZm9udC13ZWlnaHQteGw6IDcwMDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tags',
                template: `
    <div class="tags">
      <p *ngFor="let item of items" class="tags__item">{{ item }}</p>
    </div>
  `,
                styleUrls: ['./tags.component.scss']
            }]
    }], null, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "iI2S":
/*!***********************************************************************!*\
  !*** ./src/app/components/experience/experience-academy.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExperienceAcademyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceAcademyComponent", function() { return ExperienceAcademyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/app.service */ "OaWH");
/* harmony import */ var _common_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/card/card.component */ "hYms");
/* harmony import */ var _common_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/timeline/timeline.component */ "0PT/");





class ExperienceAcademyComponent {
    constructor(appService) {
        this.appService = appService;
        this.init = () => this.options = this.appService.experiences.academy;
    }
    ngOnInit() {
        this.init();
    }
}
ExperienceAcademyComponent.ɵfac = function ExperienceAcademyComponent_Factory(t) { return new (t || ExperienceAcademyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
ExperienceAcademyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceAcademyComponent, selectors: [["app-experience-academy"]], decls: 2, vars: 2, consts: [[3, "title"], [3, "items"]], template: function ExperienceAcademyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.options.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.options.items);
    } }, directives: [_common_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _common_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceAcademyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience-academy',
                template: `
    <app-card [title]="options.title">
      <app-timeline [items]="options.items"></app-timeline>
    </app-card>
    
  `,
                styles: []
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _common_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/carousel/carousel.component */ "hiim");
/* harmony import */ var _common_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/card/card.component */ "hYms");
/* harmony import */ var _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hobbies/hobbies.component */ "SXxN");
/* harmony import */ var _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/progress-bar/progress-bar.component */ "NfKg");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "DZ0t");
/* harmony import */ var _skills_skills_tecnical_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills/skills-tecnical.component */ "E/7d");
/* harmony import */ var _skills_skills_others_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skills/skills-others.component */ "vl5r");
/* harmony import */ var _common_tags_tags_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/tags/tags.component */ "hwSh");
/* harmony import */ var _common_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/timeline/timeline.component */ "0PT/");
/* harmony import */ var _experience_experience_academy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./experience/experience-academy.component */ "iI2S");
/* harmony import */ var _experience_experience_jobs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./experience/experience-jobs.component */ "rvQl");
/* harmony import */ var _experience_experience_others_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./experience/experience-others.component */ "JvQ2");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./experience/experience.component */ "5gzz");
/* harmony import */ var _socials_socials_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./socials/socials.component */ "8BVX");
/* harmony import */ var _btn_download_cv_btn_download_cv_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./btn-download-cv/btn-download-cv.component */ "zMXQ");



















const exportComponents = [
    _btn_download_cv_btn_download_cv_component__WEBPACK_IMPORTED_MODULE_17__["BtnDownloadCvComponent"],
    _common_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"],
    _common_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselItemDirective"],
    _common_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
    _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_5__["HobbiesComponent"],
    _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
    _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__["ProgressBarComponent"],
    _skills_skills_tecnical_component__WEBPACK_IMPORTED_MODULE_8__["SkillsTecnicalComponent"],
    _skills_skills_others_component__WEBPACK_IMPORTED_MODULE_9__["SkillsOthersComponent"],
    _common_tags_tags_component__WEBPACK_IMPORTED_MODULE_10__["TagsComponent"],
    _common_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_11__["TimelineComponent"],
    _experience_experience_component__WEBPACK_IMPORTED_MODULE_15__["ExperienceComponent"],
    _experience_experience_others_component__WEBPACK_IMPORTED_MODULE_14__["ExperienceOthersComponent"],
    _socials_socials_component__WEBPACK_IMPORTED_MODULE_16__["SocialsComponent"],
];
const internalComponents = [
    _experience_experience_academy_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceAcademyComponent"],
    _experience_experience_jobs_component__WEBPACK_IMPORTED_MODULE_13__["ExperienceJobsComponent"],
];
class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        ], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_btn_download_cv_btn_download_cv_component__WEBPACK_IMPORTED_MODULE_17__["BtnDownloadCvComponent"],
        _common_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"],
        _common_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselItemDirective"],
        _common_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
        _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_5__["HobbiesComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__["ProgressBarComponent"],
        _skills_skills_tecnical_component__WEBPACK_IMPORTED_MODULE_8__["SkillsTecnicalComponent"],
        _skills_skills_others_component__WEBPACK_IMPORTED_MODULE_9__["SkillsOthersComponent"],
        _common_tags_tags_component__WEBPACK_IMPORTED_MODULE_10__["TagsComponent"],
        _common_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_11__["TimelineComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_15__["ExperienceComponent"],
        _experience_experience_others_component__WEBPACK_IMPORTED_MODULE_14__["ExperienceOthersComponent"],
        _socials_socials_component__WEBPACK_IMPORTED_MODULE_16__["SocialsComponent"], _experience_experience_academy_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceAcademyComponent"],
        _experience_experience_jobs_component__WEBPACK_IMPORTED_MODULE_13__["ExperienceJobsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]], exports: [_btn_download_cv_btn_download_cv_component__WEBPACK_IMPORTED_MODULE_17__["BtnDownloadCvComponent"],
        _common_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"],
        _common_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselItemDirective"],
        _common_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
        _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_5__["HobbiesComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__["ProgressBarComponent"],
        _skills_skills_tecnical_component__WEBPACK_IMPORTED_MODULE_8__["SkillsTecnicalComponent"],
        _skills_skills_others_component__WEBPACK_IMPORTED_MODULE_9__["SkillsOthersComponent"],
        _common_tags_tags_component__WEBPACK_IMPORTED_MODULE_10__["TagsComponent"],
        _common_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_11__["TimelineComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_15__["ExperienceComponent"],
        _experience_experience_others_component__WEBPACK_IMPORTED_MODULE_14__["ExperienceOthersComponent"],
        _socials_socials_component__WEBPACK_IMPORTED_MODULE_16__["SocialsComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    ...exportComponents,
                    ...internalComponents,
                ],
                exports: [
                    ...exportComponents,
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "rvQl":
/*!********************************************************************!*\
  !*** ./src/app/components/experience/experience-jobs.component.ts ***!
  \********************************************************************/
/*! exports provided: ExperienceJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceJobsComponent", function() { return ExperienceJobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/app.service */ "OaWH");
/* harmony import */ var _common_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/card/card.component */ "hYms");
/* harmony import */ var _common_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/timeline/timeline.component */ "0PT/");





class ExperienceJobsComponent {
    constructor(appService) {
        this.appService = appService;
        this.init = () => this.options = this.appService.experiences.jobs;
    }
    ngOnInit() {
        this.init();
    }
}
ExperienceJobsComponent.ɵfac = function ExperienceJobsComponent_Factory(t) { return new (t || ExperienceJobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
ExperienceJobsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceJobsComponent, selectors: [["app-experience-jobs"]], decls: 2, vars: 2, consts: [[3, "title"], [3, "items"]], template: function ExperienceJobsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.options.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.options.items);
    } }, directives: [_common_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _common_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceJobsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience-jobs',
                template: `
    <app-card [title]="options.title">
      <app-timeline [items]="options.items"></app-timeline>
    </app-card>
    
  `,
                styles: []
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "vl5r":
/*!**************************************************************!*\
  !*** ./src/app/components/skills/skills-others.component.ts ***!
  \**************************************************************/
/*! exports provided: SkillsOthersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsOthersComponent", function() { return SkillsOthersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "OaWH");
/* harmony import */ var _common_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/card/card.component */ "hYms");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/progress-bar/progress-bar.component */ "NfKg");






function SkillsOthersComponent_app_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-progress-bar", 2);
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", skill_r1.name)("percentage", skill_r1.percentage);
} }
class SkillsOthersComponent {
    constructor(appService) {
        this.appService = appService;
    }
}
SkillsOthersComponent.ɵfac = function SkillsOthersComponent_Factory(t) { return new (t || SkillsOthersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
SkillsOthersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsOthersComponent, selectors: [["app-skills-others"]], decls: 2, vars: 2, consts: [[3, "title"], [3, "text", "percentage", 4, "ngFor", "ngForOf"], [3, "text", "percentage"]], template: function SkillsOthersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillsOthersComponent_app_progress_bar_1_Template, 1, 2, "app-progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.appService.skillsOthers.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appService.skillsOthers.items);
    } }, directives: [_common_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__["ProgressBarComponent"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsOthersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills-others',
                template: `
    <app-card [title]="appService.skillsOthers.title">
      <app-progress-bar 
        *ngFor="let skill of appService.skillsOthers.items"
        [text]="skill.name"
        [percentage]="skill.percentage">
      </app-progress-bar>
    </app-card>
  `,
                styles: [``]
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "zMXQ":
/*!*************************************************************************!*\
  !*** ./src/app/components/btn-download-cv/btn-download-cv.component.ts ***!
  \*************************************************************************/
/*! exports provided: BtnDownloadCvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnDownloadCvComponent", function() { return BtnDownloadCvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/app.service */ "OaWH");



class BtnDownloadCvComponent {
    constructor(appService) {
        this.appService = appService;
    }
}
BtnDownloadCvComponent.ɵfac = function BtnDownloadCvComponent_Factory(t) { return new (t || BtnDownloadCvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
BtnDownloadCvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BtnDownloadCvComponent, selectors: [["app-btn-download-cv"]], decls: 2, vars: 0, consts: [[1, "btn-download-cv", 3, "click"]], template: function BtnDownloadCvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BtnDownloadCvComponent_Template_button_click_0_listener() { return ctx.appService.downloadCV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Descargar CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".btn-download-cv[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #191923;\n  font-weight: 700;\n  text-transform: uppercase;\n  background-color: #FFC107;\n}\n.btn-download-cv[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxidG4tZG93bmxvYWQtY3YuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzYXNzXFx2YXJpYWJsZXNcXGNvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzc1xcdmFyaWFibGVzXFxmb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxjQ0h1QjtFREl2QixnQkVLZTtFRkpmLHlCQUFBO0VBQ0EseUJDUGM7QURNaEI7QUFFRTtFQUNFLHNCQUFBO0FBQUoiLCJmaWxlIjoiYnRuLWRvd25sb2FkLWN2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnaW1wb3J0cyc7XHJcblxyXG4uYnRuLWRvd25sb2FkLWN2IHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1jb250cmFzdDtcclxuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXhsO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgJjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICB9XHJcbn1cclxuIiwiJGNvbG9yLXByaW1hcnk6ICNGRkMxMDc7XHJcbiRjb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMTkxOTIzO1xyXG4kY29sb3Itc2Vjb25kYXJ5OiAjMkVCRDdBO1xyXG4kY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjMTkxOTIzO1xyXG5cclxuJGNvbG9yLWRhcms6ICMyZDJkMmQ7XHJcbiRjb2xvci1ncmF5OiAjNTU1O1xyXG4kY29sb3ItZ3JheS1saWdodDogIzk5OTtcclxuJGNvbG9yLWxpZ2h0OiAjZjJmMmYyO1xyXG5cclxuJGNvbG9yLWJnLWRhcms6ICMxOTE5MjM7XHJcbiRjb2xvci1iZy1kYXJrLWxpZ2h0OiAjMkQyRDNBO1xyXG4kY29sb3ItYmctbGlnaHQ6ICNmZmY7XHJcbiRjb2xvci1iZy1saWdodC1kYXJrOiAjZjBmMGYwOyIsIiRmb250LXNpemUteHhzOiAwLjdyZW07XHJcbiRmb250LXNpemUteHM6IDAuOHJlbTtcclxuJGZvbnQtc2l6ZS1zOiAwLjlyZW07XHJcbiRmb250LXNpemUtbTogMXJlbTtcclxuJGZvbnQtc2l6ZS1sOiAxLjI1cmVtO1xyXG4kZm9udC1zaXplLXhsOiAxLjVyZW07XHJcbiRmb250LXNpemUteHhsOiAycmVtO1xyXG5cclxuJGZvbnQtd2VpZ2h0LXhzOiAzMDA7XHJcbiRmb250LXdlaWdodC1tOiA0MDA7XHJcbiRmb250LXdlaWdodC14bDogNzAwO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BtnDownloadCvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-btn-download-cv',
                template: `
    <button class="btn-download-cv" (click)="appService.downloadCV()">Descargar CV</button>
  `,
                styleUrls: ['./btn-download-cv.component.scss']
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


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