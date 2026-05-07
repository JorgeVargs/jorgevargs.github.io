"use strict";
(self["webpackChunkportafolio"] = self["webpackChunkportafolio"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent
}, {
  path: '**',
  component: _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
  pathMatch: 'full'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 9847);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 5473);




//decorador
class AppComponent {
  title(title) {
    throw new Error('Method not implemented.');
  }
  constructor() {}
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar")(1, "router-outlet")(2, "app-footer");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _translate_translate_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translate/translate.module */ 4427);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel-o */ 6821);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 9847);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ 385);
/* harmony import */ var _components_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/work-experience/work-experience.component */ 2021);
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/skills/skills.component */ 1199);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/projects.component */ 3607);
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contacto/contacto.component */ 1489);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ 5473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
















class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _translate_translate_module__WEBPACK_IMPORTED_MODULE_2__.NgxTranslateModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _components_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_5__.WorkExperienceComponent, _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__.SkillsComponent, _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__.ProjectsComponent, _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_8__.ContactoComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__.FooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _translate_translate_module__WEBPACK_IMPORTED_MODULE_2__.NgxTranslateModule]
  });
})();

/***/ }),

/***/ 1489:
/*!***********************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactoComponent: () => (/* binding */ ContactoComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);






const _c0 = a0 => ({
  "is-invalid": a0
});
function ContactoComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El email es incorrecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class ContactoComponent {
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.formDatos = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormGroup({
      nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(10)]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]),
      mensaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(10)])
    });
  }
  isValid(nombreControl) {
    return this.formDatos.get(nombreControl).invalid && this.formDatos.get(nombreControl).touched;
  }
  enviarFormulario() {
    console.log(this.formDatos.value);
    const email = this.formDatos.value;
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.http.post('https://formspree.io/f/xdkngaqg', {
      name: email.nombre,
      replyto: email.email,
      message: email.mensaje
    }, {
      'headers': headers
    }).subscribe(response => {
      if (response.ok) {
        alert("Se ha enviado correctamente el correo");
        this.formDatos.reset();
      } else {
        alert(response);
      }
    });
  }
  static {
    this.ɵfac = function ContactoComponent_Factory(t) {
      return new (t || ContactoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactoComponent,
      selectors: [["app-contacto"]],
      decls: 24,
      vars: 12,
      consts: [["id", "contacto", 1, "contacto"], [1, "container"], [1, "row", "align-items-center"], [1, "col-md-6"], ["src", "./assets/images/contacto-ilustracion.png", "alt", "Contacto", 1, "img-fluid"], [1, "col-md-6", "text-center"], [3, "formGroup"], [1, "mt-5"], ["for", "nombre", 1, "form-label"], ["type", "text", "name", "nombre", "formControlName", "nombre", 1, "form-control", 3, "ngClass"], ["for", "input_email", 1, "form-label"], ["type", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "input_mensaje", 1, "form-label"], ["name", "mensaje", "formControlName", "mensaje", "id", "input_mensaje", "rows", "3", 1, "form-control", 3, "ngClass"], ["type", "button", 1, "btn", "btn-blue", "mt-5", 3, "click", "disabled"], [1, "invalid-feedback"]],
      template: function ContactoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contacto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6)(9, "div", 7)(10, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7)(14, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Correo:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContactoComponent_div_17_Template, 2, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7)(19, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mensaje");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoComponent_Template_button_click_22_listener() {
            return ctx.enviarFormulario();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Enviar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formDatos);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isValid("nombre")));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.isValid("email")));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formDatos.get("email").status == "INVALID" && ctx.formDatos.get("email").touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.isValid("mensaje")));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formDatos.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
      styles: ["form[_ngcontent-%COMP%] {\n  text-align: left;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\nform[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  border: 0px;\n  border-bottom: 1px solid var(--primary-color);\n}\nform[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:active, form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:active, form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:active, form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\nform[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50px;\n  width: 200px;\n  height: 55px;\n  font-size: 26px;\n  box-shadow: 0px 11px 15px -6px rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0by9jb250YWN0by5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0x1aXMlMjBWYXJnYXMvRG9jdW1lbnRzL1Byb3llY3Rvcy9Qb3J0YWZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0by9jb250YWN0by5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Fzcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtBQ0RKO0FERUk7RUFDSSxlQUFBO0FDQVI7QURHSTs7O0VBR0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7QUNEUjtBREdROzs7OztFQUVJLGdCQUFBO0FDRVo7QURFSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFRWRKLGlERmVJO0FDRVIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy9taXhpbnNcIjtcclxuXHJcbmZvcm17XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gICAgdGV4dGFyZWF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJvcmRlcjowcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpOztcclxuXHJcbiAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgJjpmb2N1c3tcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1ibHVle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIEBpbmNsdWRlIGJveHNoYWRvdyggMHB4IDExcHggMTVweCAtNnB4IHJnYmEoMCwwLDAsMC42KSk7XHJcbiAgICB9XHJcbn0iLCJmb3JtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmZvcm0gbGFiZWwge1xuICBmb250LXNpemU6IDIycHg7XG59XG5mb3JtIGlucHV0W3R5cGU9ZW1haWxdLFxuZm9ybSBpbnB1dFt0eXBlPXRleHRdLFxuZm9ybSB0ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbmZvcm0gaW5wdXRbdHlwZT1lbWFpbF06YWN0aXZlLCBmb3JtIGlucHV0W3R5cGU9ZW1haWxdOmZvY3VzLFxuZm9ybSBpbnB1dFt0eXBlPXRleHRdOmFjdGl2ZSxcbmZvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxcbmZvcm0gdGV4dGFyZWE6YWN0aXZlLFxuZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5mb3JtIC5idG4tYmx1ZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDExcHggMTVweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMTFweCAxNXB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3gtc2hhZG93OiAwcHggMTFweCAxNXB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xufSIsIkBtaXhpbiBmb250cygkZmFtaWx5LCAkcGF0aCkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3RcIik7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIjeyRwYXRofS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIiN7JHBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveHNoYWRvdygkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGYtc2l6ZSwgJGYtZmFtaWx5KSB7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRlZ3JhZGFkbygkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuQG1peGluIGltZy1kZWdyYWRhZG8oJHVybCwgJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeXNcclxuJG1lZGlhX3F1ZXJpZXMgOiAoXHJcbiAgICAnbW9iaWxlJyA6IFwiKG1heC13aWR0aDogNDc5cHgpXCIsXHJcbiAgICAnbW9iaWxlMic6IFwiKG1heC13aWR0aDogNTk5cHgpXCIsXHJcbiAgICAndGFibGV0JyA6IFwiKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICAndGFibGV0Mic6IFwiKG1heC13aWR0aDogOTkxcHgpXCIsXHJcbiAgICAnZGVza3RvcCcgOiBcIihtYXgtd2lkdGg6MTE5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AxJzogXCIobWF4LXdpZHRoOjEzOTlweClcIixcclxuICAgICdkZXNrdG9wMicgOiBcIihtYXgtd2lkdGg6MTU5OXB4KVwiXHJcbik7XHJcblxyXG5AbWl4aW4gZm9yX2JyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiN7JGJyZWFrcG9pbnR9cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5473:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FooterComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 22,
      vars: 0,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], ["src", "./assets/images/logo-luis-vargas-blanco.png", 1, "img-fluid", "d-block", "m-auto"], ["href", "#about-me"], ["href", "#experiencia"], ["href", "#habilidades"], ["href", "#portafolio"], ["href", "#contacto"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "div", 1)(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "ul")(7, "li")(8, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Acerca de M\u00ED");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Experiencia");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Habilidades");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Portafolio");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contacto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        }
      },
      styles: ["footer[_ngcontent-%COMP%] {\n  padding: 30px 0px;\n  background-color: var(--primary-color);\n}\n@media (max-width: 480px) {\n  footer[_ngcontent-%COMP%] {\n    padding: 30px 0px 10px;\n  }\n}\n@media (max-width: 991px) {\n  footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 80px;\n  }\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 30px;\n  padding-left: 0px;\n  flex-wrap: wrap;\n}\n@media (max-width: 480px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 30px;\n}\n@media (max-width: 991px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0px 20px;\n  }\n}\n@media (max-width: 767px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0px 20px 10px;\n  }\n}\n@media (max-width: 480px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0px 20px 20px;\n  }\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: white;\n  font-size: 22px;\n  text-decoration: none;\n}\n@media (max-width: 991px) {\n  footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vTHVpcyUyMFZhcmdhcy9Eb2N1bWVudHMvUHJveWVjdG9zL1BvcnRhZm9saW8vc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Nhc3MvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxzQ0FBQTtBQ0RGO0FDOEVJO0VGL0VKO0lBS0csc0JBQUE7RUNBRDtBQUNGO0FDeUVJO0VGdkVGO0lBRUksZUFBQTtFQ0FKO0FBQ0Y7QURHRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FDMkRJO0VGakVGO0lBVUksc0JBQUE7SUFDQSxrQkFBQTtFQ0FKO0FBQ0Y7QURFSTtFQUNFLGdCQUFBO0FDQU47QUNrREk7RUZuREE7SUFJSSxnQkFBQTtFQ0NOO0FBQ0Y7QUM2Q0k7RUZuREE7SUFRSSxxQkFBQTtFQ0VOO0FBQ0Y7QUN3Q0k7RUZuREE7SUFXSSxxQkFBQTtFQ0lOO0FBQ0Y7QURGTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0lSO0FDNkJJO0VGckNFO0lBT0ksZUFBQTtFQ0tSO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy9taXhpbnMnO1xyXG5cclxuZm9vdGVyIHtcclxuICBwYWRkaW5nOiAzMHB4IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTs7XHJcblxyXG4gIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICBwYWRkaW5nOiAzMHB4IDBweCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDk5MSkge1xyXG4gICAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW46IDBweCAzMHB4O1xyXG5cclxuICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoOTkxKSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNzY3KSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMjBweCAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDIwcHggMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoOTkxKSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiZm9vdGVyIHtcbiAgcGFkZGluZzogMzBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIGZvb3RlciB7XG4gICAgcGFkZGluZzogMzBweCAwcHggMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIGZvb3RlciBpbWcge1xuICAgIG1heC13aWR0aDogODBweDtcbiAgfVxufVxuZm9vdGVyIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICBmb290ZXIgdWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5mb290ZXIgdWwgbGkge1xuICBtYXJnaW46IDBweCAzMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIGZvb3RlciB1bCBsaSB7XG4gICAgbWFyZ2luOiAwcHggMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGZvb3RlciB1bCBsaSB7XG4gICAgbWFyZ2luOiAwcHggMjBweCAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgZm9vdGVyIHVsIGxpIHtcbiAgICBtYXJnaW46IDBweCAyMHB4IDIwcHg7XG4gIH1cbn1cbmZvb3RlciB1bCBsaSBhIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICBmb290ZXIgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59IiwiQG1peGluIGZvbnRzKCRmYW1pbHksICRwYXRoKSB7XHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZhbWlseTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdFwiKTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIiN7JHBhdGh9LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiI3skcGF0aH0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94c2hhZG93KCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIGJveC1zaGFkb3c6ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1vLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICB0cmFuc2Zvcm06ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZi1zaXplLCAkZi1mYW1pbHkpIHtcclxuICAgICY6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVncmFkYWRvKCRhcmdzLi4uKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG5AbWl4aW4gaW1nLWRlZ3JhZGFkbygkdXJsLCAkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIGxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJ5c1xyXG4kbWVkaWFfcXVlcmllcyA6IChcclxuICAgICdtb2JpbGUnIDogXCIobWF4LXdpZHRoOiA0NzlweClcIixcclxuICAgICdtb2JpbGUyJzogXCIobWF4LXdpZHRoOiA1OTlweClcIixcclxuICAgICd0YWJsZXQnIDogXCIobWF4LXdpZHRoOiA3NjdweClcIixcclxuICAgICd0YWJsZXQyJzogXCIobWF4LXdpZHRoOiA5OTFweClcIixcclxuICAgICdkZXNrdG9wJyA6IFwiKG1heC13aWR0aDoxMTk5cHgpXCIsXHJcbiAgICAnZGVza3RvcDEnOiBcIihtYXgtd2lkdGg6MTM5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AyJyA6IFwiKG1heC13aWR0aDoxNTk5cHgpXCJcclxuKTtcclxuXHJcbkBtaXhpbiBmb3JfYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6I3skYnJlYWtwb2ludH1weCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 385:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../work-experience/work-experience.component */ 2021);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skills/skills.component */ 1199);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects/projects.component */ 3607);
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contacto/contacto.component */ 1489);





class HeaderComponent {
  constructor() {
    this.titulo = "Luis Vargas";
    this.puesto = "Desarrollador Front-End";
    this.cv = "./assets/jorge-luis-vargas-hernandez-2026.pdf";
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 26,
      vars: 3,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @suppress {msgDescriptions}
           */
          const MSG_EXTERNAL_7621493436691074184$$SRC_APP_COMPONENTS_HEADER_HEADER_COMPONENT_TS_0 = goog.getMsg("Acerca de M\u00ED");
          i18n_0 = MSG_EXTERNAL_7621493436691074184$$SRC_APP_COMPONENTS_HEADER_HEADER_COMPONENT_TS_0;
        } else {
          i18n_0 = $localize`Acerca de Mí`;
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @suppress {msgDescriptions}
           */
          const MSG_EXTERNAL_749450760725508242$$SRC_APP_COMPONENTS_HEADER_HEADER_COMPONENT_TS_1 = goog.getMsg("Soy una persona que est\u00E1 en busca de nuevos retos profesionales, uno de mis objetivos es seguir aprendiendo de este basto mundo de las {$startTagStrong}tecnolog\u00EDas de desarrollo web{$closeTagStrong}. De igual manera considero que podr\u00EDa aportar mis conocimientos en los proyectos, as\u00ED como tambi\u00E9n aprender de ellos.", {
            "closeTagStrong": "\uFFFD/#18\uFFFD",
            "startTagStrong": "\uFFFD#18\uFFFD"
          }, {
            original_code: {
              "closeTagStrong": "</strong>",
              "startTagStrong": "<strong>"
            }
          });
          i18n_1 = MSG_EXTERNAL_749450760725508242$$SRC_APP_COMPONENTS_HEADER_HEADER_COMPONENT_TS_1;
        } else {
          i18n_1 = $localize`Soy una persona que está en busca de nuevos retos profesionales, uno de mis objetivos es seguir aprendiendo de este basto mundo de las ${"\uFFFD#18\uFFFD"}:START_TAG_STRONG:tecnologías de desarrollo web${"\uFFFD/#18\uFFFD"}:CLOSE_TAG_STRONG:. De igual manera considero que podría aportar mis conocimientos en los proyectos, así como también aprender de ellos.`;
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          /**
           * @suppress {msgDescriptions}
           */
          const MSG_EXTERNAL_5388321826564188188$$SRC_APP_COMPONENTS_HEADER_HEADER_COMPONENT_TS_2 = goog.getMsg("Actualmente me desempe\u00F1o como desarrollador {$startTagStrong}Front-End{$closeTagStrong}, y estoy dispuesto a seguir aprendiendo para mejorar en cada uno de los proyectos tanto personales como profesionales.", {
            "closeTagStrong": "\uFFFD/#21\uFFFD",
            "startTagStrong": "\uFFFD#21\uFFFD"
          }, {
            original_code: {
              "closeTagStrong": "</strong>",
              "startTagStrong": "<strong>"
            }
          });
          i18n_2 = MSG_EXTERNAL_5388321826564188188$$SRC_APP_COMPONENTS_HEADER_HEADER_COMPONENT_TS_2;
        } else {
          i18n_2 = $localize`Actualmente me desempeño como desarrollador ${"\uFFFD#21\uFFFD"}:START_TAG_STRONG:Front-End${"\uFFFD/#21\uFFFD"}:CLOSE_TAG_STRONG:, y estoy dispuesto a seguir aprendiendo para mejorar en cada uno de los proyectos tanto personales como profesionales.`;
        }
        return [i18n_0, i18n_1, i18n_2, [1, "header"], [1, "animate__animated", "animate__backInDown"], [1, "animate__animated", "animate__backInLeft", "animate__delay-1s"], ["target", "_blank", 1, "btn", "btn-blue", "animate__animated", "animate__fadeInUp", 3, "href"], ["id", "about-me", 1, "about-me"], [1, "container"], [1, "row"], [1, "col-8", "offset-2", "col-sm-8", "offset-sm-2", "col-md-6", "offset-md-0", "d-flex", "justify-content-center", "align-items-center"], [1, "imagen"], ["src", "assets/images/about-me.jpg", "alt", "Luis Vargas", 1, "img-fluid", "m-auto"], [1, "col-sm-12", "col-md-6", "animate__animated", "animate__fadeInUp"]];
      },
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 3)(1, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Descargar CV");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "section", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 13)(14, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nStart"](17, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nStart"](20, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "app-work-experience")(23, "app-skills")(24, "app-projects")(25, "app-contacto");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.titulo);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.puesto);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx.cv, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_0__.WorkExperienceComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_1__.SkillsComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent, _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__.ContactoComponent],
      styles: [".header[_ngcontent-%COMP%] {\n  background-image: url('header-developer.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 1080px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 5%;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%] {\n    font-size: 140px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%] {\n    font-size: 100px;\n  }\n}\n@media (max-width: 991px) {\n  .header[_ngcontent-%COMP%] {\n    font-size: 80px;\n  }\n}\n@media (max-width: 575px) {\n  .header[_ngcontent-%COMP%] {\n    height: 550px;\n    background-position: right;\n  }\n}\n@media (max-width: 480px) {\n  .header[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  font-size: 150px;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 140px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 100px;\n  }\n}\n@media (max-width: 991px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 80px;\n  }\n}\n@media (max-width: 767px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 70px;\n  }\n}\n@media (max-width: 480px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 400;\n  font-size: 80px;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media (max-width: 991px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n@media (max-width: 767px) {\n  .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n.header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 60px;\n  margin-top: 20px;\n}\n@media (max-width: 1599px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 280px;\n    font-size: 28px;\n  }\n}\n@media (max-width: 1399px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 250px;\n    font-size: 24px;\n  }\n}\n@media (max-width: 767px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 220px;\n    font-size: 22px;\n    height: 55px;\n  }\n}\n@media (max-width: 479px) {\n  .header[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vTHVpcyUyMFZhcmdhcy9Eb2N1bWVudHMvUHJveWVjdG9zL1BvcnRhZm9saW8vc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Nhc3MvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksNkNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNGSjtBQ3NFSTtFRi9FSjtJQWNNLGdCQUFBO0VDREo7QUFDRjtBQ2lFSTtFRi9FSjtJQWtCTSxnQkFBQTtFQ0FKO0FBQ0Y7QUM0REk7RUYvRUo7SUFzQk0sZUFBQTtFQ0NKO0FBQ0Y7QUN1REk7RUYvRUo7SUEwQlEsYUFBQTtJQUNBLDBCQUFBO0VDRU47QUFDRjtBQ2lESTtFRi9FSjtJQStCTSxlQUFBO0VDR0o7QUFDRjtBRERHO0VBQ0ssWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHUjtBQ3VDSTtFRjdDRDtJQU1TLGdCQUFBO0VDSVY7QUFDRjtBQ2tDSTtFRjdDRDtJQVdTLGdCQUFBO0VDSVY7QUFDRjtBQzZCSTtFRjdDRDtJQWdCUyxlQUFBO0VDSVY7QUFDRjtBQ3dCSTtFRjdDRDtJQXFCUyxlQUFBO0VDSVY7QUFDRjtBQ21CSTtFRjdDRDtJQXlCUyxlQUFBO0VDS1Y7QUFDRjtBREZFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0lKO0FDU0k7RUZoQkY7SUFNSSxlQUFBO0VDS0o7QUFDRjtBQ0lJO0VGaEJGO0lBVUksZUFBQTtFQ01KO0FBQ0Y7QUNESTtFRmhCRjtJQWNJLGVBQUE7RUNPSjtBQUNGO0FDTkk7RUZoQkY7SUFrQkksZUFBQTtFQ1FKO0FBQ0Y7QURMRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNPSjtBQ2hCSTtFRk1GO0lBTUksWUFBQTtJQUNBLGVBQUE7RUNRSjtBQUNGO0FDdEJJO0VGTUY7SUFXSSxZQUFBO0lBQ0EsZUFBQTtFQ1NKO0FBQ0Y7QUM1Qkk7RUZNRjtJQWdCSSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUNVSjtBQUNGO0FDbkNJO0VGTUY7SUFzQkksWUFBQTtFQ1dKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zXCI7XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1wb3J0YWZvbGlvLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItZGV2ZWxvcGVyLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTU5OSkge1xyXG4gICAgICBmb250LXNpemU6IDE0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDEzOTkpIHtcclxuICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg5OTEpIHtcclxuICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNTc1KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICBoMSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTBweDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTU5OSkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDEzOTkpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg5OTEpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDc2Nykge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgaDMge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuXHJcbiAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxNTk5KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxMzk5KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg5OTEpIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDc2Nykge1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuLWJsdWUge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxNTk5KSB7XHJcbiAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDEzOTkpIHtcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNzY3KSB7XHJcbiAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNDc5KSB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci1kZXZlbG9wZXIuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNTk5cHgpIHtcbiAgLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzOTlweCkge1xuICAuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmhlYWRlciB7XG4gICAgaGVpZ2h0OiA1NTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxufVxuLmhlYWRlciBoMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNTk5cHgpIHtcbiAgLmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAxNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzOTlweCkge1xuICAuaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG59XG4uaGVhZGVyIGgzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDgwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTU5OXB4KSB7XG4gIC5oZWFkZXIgaDMge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzOTlweCkge1xuICAuaGVhZGVyIGgzIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuaGVhZGVyIGgzIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaGVhZGVyIGgzIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbn1cbi5oZWFkZXIgLmJ0bi1ibHVlIHtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTU5OXB4KSB7XG4gIC5oZWFkZXIgLmJ0bi1ibHVlIHtcbiAgICB3aWR0aDogMjgwcHg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM5OXB4KSB7XG4gIC5oZWFkZXIgLmJ0bi1ibHVlIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmhlYWRlciAuYnRuLWJsdWUge1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgLmhlYWRlciAuYnRuLWJsdWUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufSIsIkBtaXhpbiBmb250cygkZmFtaWx5LCAkcGF0aCkge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3RcIik7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIjeyRwYXRofS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIjeyRwYXRofS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIiN7JHBhdGh9LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGJveHNoYWRvdygkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGYtc2l6ZSwgJGYtZmFtaWx5KSB7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAkZi1zaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZi1mYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRlZ3JhZGFkbygkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxufVxyXG5cclxuQG1peGluIGltZy1kZWdyYWRhZG8oJHVybCwgJGFyZ3MuLi4pIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1vei1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1tcy1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtby1saW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeXNcclxuJG1lZGlhX3F1ZXJpZXMgOiAoXHJcbiAgICAnbW9iaWxlJyA6IFwiKG1heC13aWR0aDogNDc5cHgpXCIsXHJcbiAgICAnbW9iaWxlMic6IFwiKG1heC13aWR0aDogNTk5cHgpXCIsXHJcbiAgICAndGFibGV0JyA6IFwiKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICAndGFibGV0Mic6IFwiKG1heC13aWR0aDogOTkxcHgpXCIsXHJcbiAgICAnZGVza3RvcCcgOiBcIihtYXgtd2lkdGg6MTE5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AxJzogXCIobWF4LXdpZHRoOjEzOTlweClcIixcclxuICAgICdkZXNrdG9wMicgOiBcIihtYXgtd2lkdGg6MTU5OXB4KVwiXHJcbik7XHJcblxyXG5AbWl4aW4gZm9yX2JyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiN7JGJyZWFrcG9pbnR9cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9847:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


const _c0 = a0 => ({
  "small": a0
});
const _c1 = a0 => ({
  "active": a0
});
const _c2 = a0 => ({
  "show": a0
});
class NavbarComponent {
  constructor() {
    this.scrolled = false;
    this.winWidth = 0;
    this.currentSection = 'section1';
    this.isShown = false;
  }
  changeState() {
    this.isShown = !this.isShown;
  }
  onSectionChange(sectionId) {
    this.currentSection = sectionId;
    console.log(this.currentSection);
  }
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 150;
    if (this.scrolled) {
      this.isShown = false;
    } else {
      this.scrolled = false;
    }
  }
  onResize(event) {
    this.winWidth = event.target.innerWidth;
  }
  static {
    this.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("resize", function NavbarComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 23,
      vars: 9,
      consts: [["id", "navbar-main2", 1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", 3, "ngClass"], [1, "container-xl", "p-0", "p-lg-4"], ["href", "#", 1, "navbar-brand"], ["src", "assets/images/logo-luis-vargas.png", "alt", "logo luis vargas", 1, "img-fluid"], [1, "navbar-toggler", 3, "click", "ngClass"], [1, "menu-icon"], ["id", "navbar-main", 1, "navbar-collapse", "collapse", 3, "ngClass"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "#about-me", 1, "nav-link"], ["href", "#experiencia", 1, "nav-link"], ["href", "#habilidades", 1, "nav-link"], ["href", "#portafolio", 1, "nav-link"], [1, "nav-item", "btn", "btn-blue"], ["href", "#contacto", 1, "nav-link"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() {
            return ctx.changeState();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Acerca de M\u00ED");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8)(12, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Experiencia");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8)(15, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Habilidades");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8)(18, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Portafolio");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13)(21, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contacto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.scrolled && ctx.winWidth > 991));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.isShown));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.isShown));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
      styles: [".ml-auto[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  height: 120px;\n  background-color: white;\n  box-shadow: 0px 11px 15px -6px rgba(0, 0, 0, 0.6);\n  transition: height 0.3s linear;\n}\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%] {\n    height: 90px;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 90%;\n}\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  padding: 0px;\n  width: 50px;\n  height: 40px;\n  position: relative;\n  margin-right: 20px;\n  color: transparent;\n  background-color: var(--primary-color);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 4px;\n  background-color: white;\n  border-radius: 5px;\n  transition: all 0.2s linear;\n  display: block;\n  margin: 0 auto;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 40px;\n  height: 4px;\n  background-color: white;\n  top: 4px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  position: absolute;\n  border-radius: 5px;\n  transition: all 0.2s linear;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 40px;\n  height: 4px;\n  background-color: white;\n  bottom: 4px;\n  position: absolute;\n  border-radius: 5px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  transition: all 0.2s linear;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler.active[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler.active[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::before {\n  top: 16px;\n  transform: rotate(45deg);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler.active[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]::after {\n  top: 3px;\n  transform: rotate(-45deg);\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 600;\n  font-size: 22px;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]::after {\n  background-color: var(--primary-color);\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 3px;\n}\n.navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover::after {\n  background-color: var(--primary-color);\n}\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%] {\n    background-color: white;\n    padding: 5%;\n    box-shadow: 0px 11px 15px -6px rgba(0, 0, 0, 0.6);\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]::after {\n    width: 20%;\n    margin: auto;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%] {\n    width: 200px;\n    margin: auto;\n    text-align: center;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.btn-blue[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n}\n.navbar.small[_ngcontent-%COMP%] {\n  height: 80px;\n}\n.navbar.small[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 60%;\n}\n.navbar.small[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vTHVpcyUyMFZhcmdhcy9Eb2N1bWVudHMvUHJveWVjdG9zL1BvcnRhZm9saW8vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Nhc3MvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFRUtFLGlERkhGO0VFV0UsOEJGVkY7QUNJRjtBQ2tFSTtFRjNFSjtJQVFJLFlBQUE7RUNLRjtBQUNGO0FERkk7RUFDRSxjQUFBO0FDSU47QUMwREk7RUZoRUY7SUFRSSxrQkFBQTtFQ0VKO0VEQUk7SUFDRSxVQUFBO0VDRU47QUFDRjtBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUNBSjtBREVJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0FOO0FERU07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDQVI7QURHTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNEUjtBRE1NO0VBQ0UsNkJBQUE7QUNKUjtBRE1RO0VBQ0UsU0FBQTtFRTFETix3QkYyRE07QUNBVjtBREdRO0VBQ0UsUUFBQTtFRS9ETix5QkZnRU07QUNHVjtBREtJO0VBQ0UsZ0JBQUE7QUNITjtBREtNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0hSO0FET1E7RUFDRSxzQ0FBQTtBQ0xWO0FEU007RUFDRSxZQUFBO0FDUFI7QURTUTtFQUNFLFlBQUE7QUNQVjtBRFNVO0VBQ0UsMkJBQUE7QUNQWjtBRFlNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZSO0FEY1E7RUFDRSxzQ0FBQTtBQ1pWO0FDNUNJO0VGbUJGO0lBMkNJLHVCQUFBO0lBQ0EsV0FBQTtJRW5JRixpREZvSUU7RUNaSjtFRGNJO0lBQ0Usa0JBQUE7RUNaTjtFRGNNO0lBQ0UsZ0JBQUE7RUNaUjtFRGNRO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RUNaVjtFRGVRO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQ2JWO0VEZVU7SUFDRSxhQUFBO0VDYlo7RURnQlU7SUFDRSxjQUFBO0lBQ0EsV0FBQTtFQ2RaO0FBQ0Y7QURxQkU7RUFDRSxZQUFBO0FDbkJKO0FEdUJNO0VBQ0UsY0FBQTtBQ3JCUjtBRDJCUTtFQUNFLGVBQUE7QUN6QlYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zXCI7XHJcblxyXG4ubWwtYXV0byB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIEBpbmNsdWRlIGJveHNoYWRvdygwcHggMTFweCAxNXB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjYpKTtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGhlaWdodCAuM3MgbGluZWFyKTtcclxuXHJcbiAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoOTkxKSB7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWJyYW5kIHtcclxuICAgIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogOTAlO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoOTkxKSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7O1xyXG5cclxuICAgIC5tZW51LWljb24ge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm90dG9tOiA0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgLm1lbnUtaWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICB0b3A6IDE2cHg7XHJcbiAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlKDQ1ZGVnKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHJvdGF0ZSgtNDVkZWcpKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5jb2xsYXBzZSB7XHJcbiAgICAubmF2LWl0ZW0ge1xyXG4gICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG5cclxuICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1ibHVlIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDk5MSkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogNSU7XHJcbiAgICAgIEBpbmNsdWRlIGJveHNoYWRvdygwcHggMTFweCAxNXB4IC02cHggcmdiKDAgMCAwIC8gNjAlKSk7XHJcblxyXG4gICAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuXHJcbiAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmJ0bi1ibHVlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5zbWFsbCB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcblxyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7O1xyXG4gICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29sbGFwc2Uge1xyXG4gICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLm1sLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLm5hdmJhciB7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDExcHggMTVweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYm94LXNoYWRvdzogMHB4IDExcHggMTVweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGxpbmVhcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubmF2YmFyIHtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gIH1cbn1cbi5uYXZiYXIgLm5hdmJhci1icmFuZCBpbWcge1xuICBtYXgtd2lkdGg6IDkwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubmF2YmFyIC5uYXZiYXItYnJhbmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubmF2YmFyIC5uYXZiYXItYnJhbmQgaW1nIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG4ubmF2YmFyIC5uYXZiYXItdG9nZ2xlciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4ubmF2YmFyIC5uYXZiYXItdG9nZ2xlciAubWVudS1pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5uYXZiYXIgLm5hdmJhci10b2dnbGVyIC5tZW51LWljb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cbi5uYXZiYXIgLm5hdmJhci10b2dnbGVyIC5tZW51LWljb246OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvdHRvbTogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xufVxuLm5hdmJhciAubmF2YmFyLXRvZ2dsZXIuYWN0aXZlIC5tZW51LWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5uYXZiYXIgLm5hdmJhci10b2dnbGVyLmFjdGl2ZSAubWVudS1pY29uOjpiZWZvcmUge1xuICB0b3A6IDE2cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4ubmF2YmFyIC5uYXZiYXItdG9nZ2xlci5hY3RpdmUgLm1lbnUtaWNvbjo6YWZ0ZXIge1xuICB0b3A6IDNweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuLm5hdmJhciAuY29sbGFwc2UgLm5hdi1pdGVtIHtcbiAgbWFyZ2luOiAwcHggMTBweDtcbn1cbi5uYXZiYXIgLmNvbGxhcHNlIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5uYXZiYXIgLmNvbGxhcHNlIC5uYXYtaXRlbS5hY3RpdmU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4ubmF2YmFyIC5jb2xsYXBzZSAubmF2LWl0ZW0uYnRuLWJsdWUge1xuICBoZWlnaHQ6IDUwcHg7XG59XG4ubmF2YmFyIC5jb2xsYXBzZSAubmF2LWl0ZW0uYnRuLWJsdWUgLm5hdi1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm5hdmJhciAuY29sbGFwc2UgLm5hdi1pdGVtLmJ0bi1ibHVlIC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbi5uYXZiYXIgLmNvbGxhcHNlIC5uYXYtaXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3B4O1xufVxuLm5hdmJhciAuY29sbGFwc2UgLm5hdi1pdGVtOmhvdmVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5uYXZiYXIgLmNvbGxhcHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMTFweCAxNXB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIH1cbiAgLm5hdmJhciAuY29sbGFwc2UgLm5hdmJhci1uYXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubmF2YmFyIC5jb2xsYXBzZSAubmF2YmFyLW5hdiAubmF2LWl0ZW0ge1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gIH1cbiAgLm5hdmJhciAuY29sbGFwc2UgLm5hdmJhci1uYXYgLm5hdi1pdGVtOjphZnRlciB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLm5hdmJhciAuY29sbGFwc2UgLm5hdmJhci1uYXYgLm5hdi1pdGVtLmJ0bi1ibHVlIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubmF2YmFyIC5jb2xsYXBzZSAubmF2YmFyLW5hdiAubmF2LWl0ZW0uYnRuLWJsdWU6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5uYXZiYXIgLmNvbGxhcHNlIC5uYXZiYXItbmF2IC5uYXYtaXRlbS5idG4tYmx1ZSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLm5hdmJhci5zbWFsbCB7XG4gIGhlaWdodDogODBweDtcbn1cbi5uYXZiYXIuc21hbGwgLm5hdmJhci1icmFuZCBpbWcge1xuICBtYXgtd2lkdGg6IDYwJTtcbn1cbi5uYXZiYXIuc21hbGwgLmNvbGxhcHNlIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBmb250LXNpemU6IDE4cHg7XG59IiwiQG1peGluIGZvbnRzKCRmYW1pbHksICRwYXRoKSB7XHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZhbWlseTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdFwiKTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIiN7JHBhdGh9LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiI3skcGF0aH0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94c2hhZG93KCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIGJveC1zaGFkb3c6ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1vLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICB0cmFuc2Zvcm06ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZi1zaXplLCAkZi1mYW1pbHkpIHtcclxuICAgICY6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVncmFkYWRvKCRhcmdzLi4uKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG5AbWl4aW4gaW1nLWRlZ3JhZGFkbygkdXJsLCAkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIGxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJ5c1xyXG4kbWVkaWFfcXVlcmllcyA6IChcclxuICAgICdtb2JpbGUnIDogXCIobWF4LXdpZHRoOiA0NzlweClcIixcclxuICAgICdtb2JpbGUyJzogXCIobWF4LXdpZHRoOiA1OTlweClcIixcclxuICAgICd0YWJsZXQnIDogXCIobWF4LXdpZHRoOiA3NjdweClcIixcclxuICAgICd0YWJsZXQyJzogXCIobWF4LXdpZHRoOiA5OTFweClcIixcclxuICAgICdkZXNrdG9wJyA6IFwiKG1heC13aWR0aDoxMTk5cHgpXCIsXHJcbiAgICAnZGVza3RvcDEnOiBcIihtYXgtd2lkdGg6MTM5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AyJyA6IFwiKG1heC13aWR0aDoxNTk5cHgpXCJcclxuKTtcclxuXHJcbkBtaXhpbiBmb3JfYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6I3skYnJlYWtwb2ludH1weCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3607:
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function ProjectsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const proyecto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", proyecto_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", proyecto_r1.screen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyecto_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", proyecto_r1.tecnologia, " ");
  }
}
class ProjectsComponent {
  constructor() {
    this.proyectos = [{
      screen: "./assets/images/proyectos/grand-tower-polanco.jpg",
      nombre: "Grand Tower Polanco",
      tecnologia: "Angular, HTML5 & CSS3",
      url: "https://grandtowerpolanco.com/"
    }, {
      screen: "./assets/images/proyectos/la-dolce-backery.jpg",
      nombre: "La Dolce Bakery",
      tecnologia: "Bootstrap & Wordpress",
      url: "https://ladolcenj.com/"
    }, {
      screen: "./assets/images/proyectos/cecoban.jpg",
      nombre: "Cecoban",
      tecnologia: "Bootstrap & Wordpress",
      url: "https://www.cecoban.com/"
    }, {
      screen: "./assets/images/proyectos/grandcentral-165.jpg",
      nombre: "Grand Central",
      tecnologia: "Angular, HTML5 & CSS3",
      url: "https://grandcentral165.com/"
    }, {
      screen: "./assets/images/proyectos/hotsale-aeromexico-rewards.jpg",
      nombre: "Banners Hot Sale Aeromexico Rewards(Google)",
      tecnologia: "Google Web Designer (HTML5)"
    }, {
      screen: "./assets/images/proyectos/manuelgonzalez-165.jpg",
      nombre: "Manuel Gonzalez 165",
      tecnologia: "Angular, HTML5 & CSS3",
      url: "https://pruvimg165.com/"
    }, {
      screen: "./assets/images/proyectos/anafloresabogada.png",
      nombre: "Ana Flores Abogada",
      tecnologia: "Wordpress & Bootstrap",
      url: "https://anafloresabogada.com/"
    }, {
      screen: "./assets/images/proyectos/superior-56.jpg",
      nombre: "Superior 56",
      tecnologia: "Angular, HTML5 & CSS3"
    }, {
      screen: "./assets/images/proyectos/banners.png",
      nombre: "Banners (Google & Amazon)",
      tecnologia: "Google Web Designer (HTML5)"
    }, {
      screen: "./assets/images/proyectos/hersheys-reposteria.png",
      nombre: "hershey's Repostería",
      tecnologia: "Bootstrap & Wordpress"
    }, {
      screen: "./assets/images/proyectos/hersheys-profesional.png",
      nombre: "hershey's Profesional",
      tecnologia: "Bootstrap & Wordpress"
    }, {
      screen: "./assets/images/proyectos/acento-mixcoac.png",
      nombre: "Acento Mixcoac",
      tecnologia: "Landing Page: HTML, JQuery, CSS, PHP"
    }, {
      screen: "./assets/images/proyectos/jorgevargsbooks.png",
      nombre: "Jorgevargsbooks",
      tecnologia: "Materialize & Wordpress"
    }, {
      screen: "./assets/images/proyectos/msmedia.png",
      nombre: "Ms&Media",
      tecnologia: "Bootstrap & Wordpress",
      url: "https://msmedia.com.mx/publicidad-exterior/"
    }, {
      screen: "./assets/images/proyectos/openfinancehub.png",
      nombre: "Open Finance Hub",
      tecnologia: "Bootstrap & Wordpress",
      url: "https://cecoban.com/openfinancehub/"
    }, {
      screen: "./assets/images/proyectos/periferico1991.png",
      nombre: "Landing Periferico 1991",
      tecnologia: "Landing Page: HTML, Jquery, CSS, PHP"
    }, {
      screen: "./assets/images/proyectos/olimpiadasespeciales.png",
      nombre: "Olimpiadas Especiales",
      tecnologia: "Bootstrap & Wordpress",
      url: "https://specialolympics.org.mx/"
    }];
  }
  static {
    this.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 8,
      vars: 1,
      consts: [["id", "portafolio", 1, "projects"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], ["class", "col-6 col-md-4", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-4"], ["target", "_blank", 1, "proyecto"], [1, "img-fluid", 3, "src"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Portafolio");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectsComponent_div_7_Template, 7, 4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectos);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".proyecto[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  margin: 30px 0px;\n  text-align: center;\n}\n.proyecto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 30px auto;\n}\n@media (max-width: 480px) {\n  .proyecto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 20px auto;\n  }\n}\n.proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 22px;\n  color: black;\n}\n@media (max-width: 1399px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 1199px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media (max-width: 480px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 26px;\n}\n@media (max-width: 1399px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media (max-width: 1199px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media (max-width: 1199px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .proyecto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0x1aXMlMjBWYXJnYXMvRG9jdW1lbnRzL1Byb3llY3Rvcy9Qb3J0YWZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Fzcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREo7QURFSTtFQUNJLGlCQUFBO0FDQVI7QUN5RUk7RUYxRUE7SUFHUSxpQkFBQTtFQ0VWO0FBQ0Y7QURDSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDUjtBQytESTtFRm5FQTtJQU1RLGVBQUE7RUNFVjtBQUNGO0FDMERJO0VGbkVBO0lBU1EsZUFBQTtFQ0lWO0FBQ0Y7QUNxREk7RUZuRUE7SUFZUSxlQUFBO0VDTVY7QUFDRjtBREZRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNJWjtBQzRDSTtFRmxESTtJQUtRLGVBQUE7RUNLZDtBQUNGO0FDdUNJO0VGbERJO0lBUVEsZUFBQTtFQ09kO0FBQ0Y7QUNrQ0k7RUZsREk7SUFXUSxlQUFBO0VDU2Q7QUFDRjtBQzZCSTtFRmxESTtJQWNRLGVBQUE7RUNXZDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zJztcclxuXHJcbi5wcm95ZWN0b3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOjMwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTM5OSkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDExOTkpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgICBzdHJvbmd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCgxMzk5KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoMTE5OSkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDExOTkpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufSIsIi5wcm95ZWN0byB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogMzBweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm95ZWN0byBpbWcge1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucHJveWVjdG8gaW1nIHtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgfVxufVxuLnByb3llY3RvIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzOTlweCkge1xuICAucHJveWVjdG8gcCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC5wcm95ZWN0byBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucHJveWVjdG8gcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4ucHJveWVjdG8gcCBzdHJvbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzOTlweCkge1xuICAucHJveWVjdG8gcCBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAucHJveWVjdG8gcCBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAucHJveWVjdG8gcCBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5wcm95ZWN0byBwIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59IiwiQG1peGluIGZvbnRzKCRmYW1pbHksICRwYXRoKSB7XHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZhbWlseTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdFwiKTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIiN7JHBhdGh9LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiI3skcGF0aH0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94c2hhZG93KCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIGJveC1zaGFkb3c6ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1vLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICB0cmFuc2Zvcm06ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZi1zaXplLCAkZi1mYW1pbHkpIHtcclxuICAgICY6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVncmFkYWRvKCRhcmdzLi4uKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG5AbWl4aW4gaW1nLWRlZ3JhZGFkbygkdXJsLCAkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIGxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJ5c1xyXG4kbWVkaWFfcXVlcmllcyA6IChcclxuICAgICdtb2JpbGUnIDogXCIobWF4LXdpZHRoOiA0NzlweClcIixcclxuICAgICdtb2JpbGUyJzogXCIobWF4LXdpZHRoOiA1OTlweClcIixcclxuICAgICd0YWJsZXQnIDogXCIobWF4LXdpZHRoOiA3NjdweClcIixcclxuICAgICd0YWJsZXQyJzogXCIobWF4LXdpZHRoOiA5OTFweClcIixcclxuICAgICdkZXNrdG9wJyA6IFwiKG1heC13aWR0aDoxMTk5cHgpXCIsXHJcbiAgICAnZGVza3RvcDEnOiBcIihtYXgtd2lkdGg6MTM5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AyJyA6IFwiKG1heC13aWR0aDoxNTk5cHgpXCJcclxuKTtcclxuXHJcbkBtaXhpbiBmb3JfYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6I3skYnJlYWtwb2ludH1weCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1199:
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsComponent: () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function SkillsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", skill_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", skill_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", skill_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.nombre);
  }
}
class SkillsComponent {
  constructor() {
    this.skills = [{
      logo: "./assets/images/skills/html5.png",
      nombre: "HTML 5"
    }, {
      logo: "./assets/images/skills/css3.png",
      nombre: "CSS 3"
    }, {
      logo: "./assets/images/skills/javascript.png",
      nombre: "JAVASCRIPT"
    }, {
      logo: "./assets/images/skills/sass.png",
      nombre: "SASS"
    }, {
      logo: "./assets/images/skills/wordpress.png",
      nombre: "WORDPRESS"
    }, {
      logo: "./assets/images/skills/bootstrap.png",
      nombre: "BOOTSTRAP"
    }, {
      logo: "./assets/images/skills/materialize.png",
      nombre: "MATERIALIZE"
    }, {
      logo: "./assets/images/skills/php.png",
      nombre: "PHP"
    }, {
      logo: "./assets/images/skills/jquery.png",
      nombre: "JQUERY"
    }, {
      logo: "./assets/images/skills/git.png",
      nombre: "GIT"
    }, {
      logo: "./assets/images/skills/google-web-designer.png",
      nombre: "GOOGLE WEB DESIGNER"
    }, {
      logo: "./assets/images/skills/mailchimp.png",
      nombre: "MAILCHIMP"
    }, {
      logo: "./assets/images/skills/angular.png",
      nombre: "ANGULAR"
    }, {
      logo: "./assets/images/skills/mysql.png",
      nombre: "MYSQL"
    }, {
      logo: "./assets/images/skills/tailwindcss.png",
      nombre: "Tailwindcss"
    }];
  }
  static {
    this.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 8,
      vars: 1,
      consts: [["id", "habilidades", 1, "habilidades"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], ["class", "col-6 col-sm-4 col-md-3", 4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-4", "col-md-3"], [1, "skill"], [1, "img-fluid", 3, "src", "alt", "title"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Habilidades");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SkillsComponent_div_7_Template, 5, 4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".skill[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  display: block;\n  margin: 50px auto;\n  border-radius: 50%;\n  box-shadow: 0px 10px 22px -4px rgba(0, 0, 0, 0.75);\n}\n.skill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n  font-weight: bold;\n  margin-top: 20px;\n}\n@media (max-width: 480px) {\n  .skill[_ngcontent-%COMP%] {\n    width: 130px;\n    height: 130px;\n  }\n  .skill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zYXNzL19taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0x1aXMlMjBWYXJnYXMvRG9jdW1lbnRzL1Byb3llY3Rvcy9Qb3J0YWZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQ01BLGtERExBO0FFQ0o7QUZDSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUVDUjtBRGtFSTtFRC9FSjtJQWdCUSxZQUFBO0lBQ0EsYUFBQTtFRUNOO0VGQ007SUFDSSxlQUFBO0VFQ1Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzL21peGlucyc7XHJcblxyXG4uc2tpbGx7XHJcbiAgICB3aWR0aDoxNjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgQGluY2x1ZGUgYm94c2hhZG93KDBweCAxMHB4IDIycHggLTRweCByZ2JhKDAsMCwwLDAuNzUpKTtcclxuXHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBmb3JfYnJlYWtwb2ludCg0ODApIHtcclxuICAgICAgICB3aWR0aDoxMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG5cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQG1peGluIGZvbnRzKCRmYW1pbHksICRwYXRoKSB7XHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZhbWlseTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdFwiKTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIiN7JHBhdGh9LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiI3skcGF0aH0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94c2hhZG93KCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIGJveC1zaGFkb3c6ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1vLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICB0cmFuc2Zvcm06ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZi1zaXplLCAkZi1mYW1pbHkpIHtcclxuICAgICY6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVncmFkYWRvKCRhcmdzLi4uKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG5AbWl4aW4gaW1nLWRlZ3JhZGFkbygkdXJsLCAkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIGxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJ5c1xyXG4kbWVkaWFfcXVlcmllcyA6IChcclxuICAgICdtb2JpbGUnIDogXCIobWF4LXdpZHRoOiA0NzlweClcIixcclxuICAgICdtb2JpbGUyJzogXCIobWF4LXdpZHRoOiA1OTlweClcIixcclxuICAgICd0YWJsZXQnIDogXCIobWF4LXdpZHRoOiA3NjdweClcIixcclxuICAgICd0YWJsZXQyJzogXCIobWF4LXdpZHRoOiA5OTFweClcIixcclxuICAgICdkZXNrdG9wJyA6IFwiKG1heC13aWR0aDoxMTk5cHgpXCIsXHJcbiAgICAnZGVza3RvcDEnOiBcIihtYXgtd2lkdGg6MTM5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AyJyA6IFwiKG1heC13aWR0aDoxNTk5cHgpXCJcclxuKTtcclxuXHJcbkBtaXhpbiBmb3JfYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6I3skYnJlYWtwb2ludH1weCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLnNraWxsIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAyMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMTBweCAyMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG4uc2tpbGwgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuc2tpbGwge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICB9XG4gIC5za2lsbCBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2021:
/*!*************************************************************************!*\
  !*** ./src/app/components/work-experience/work-experience.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkExperienceComponent: () => (/* binding */ WorkExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 6821);



function WorkExperienceComponent_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const company_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", company_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r1.puesto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r1.periodo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r1.descripcion);
  }
}
function WorkExperienceComponent_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkExperienceComponent_8_ng_template_0_Template, 8, 4, "ng-template", 6);
  }
}
class WorkExperienceComponent {
  constructor() {
    this.companys = [{
      logo: "./assets/images/uceda.jpg",
      puesto: "Front-End Developer",
      periodo: "2024 - Actual",
      descripcion: "Soporte y mantenimiento de sistema interno. Creación de nuevos módulos y funcionalidades."
    }, {
      logo: "./assets/images/valenetwork.jpg",
      puesto: "Programador Web",
      periodo: "2020 - 2024",
      descripcion: "Maquetación e integración de sitios web. Creación de maillings y configuración de los mismos."
    }, {
      logo: "./assets/images/clickspublicitarios.jpg",
      puesto: "Desarrollador Front-End",
      periodo: "2018 - 2020",
      descripcion: "Maquetación, integración y mantenimiento de sitios web."
    }, {
      //publicidad en línea
      logo: "./assets/images/publicidadenlinea.jpg",
      puesto: "Desarrollador Web",
      periodo: "2017 - 2019",
      descripcion: "Maquetación, integración, mantenimiento de sitios web."
    }, {
      logo: "./assets/images/anzen-digital.png",
      puesto: "Desarrollador Front-End",
      periodo: "2016 - 2017",
      descripcion: "Maquetación de prototipos para bancas empresariales y personales."
    }, {
      //grupo dara
      logo: "./assets/images/grupo-dara.jpg",
      puesto: "Coordinador de TI",
      periodo: "2014 - 2015",
      descripcion: "Mantenimiento de equipos de computo, sitios web e implementación de sistemas web."
    }, {
      logo: "./assets/images/innovattia.jpg",
      puesto: "Desarrollador Web",
      periodo: "2014 (Prácticas)",
      descripcion: "Maquetación, integración, mantenimiento de sitios web."
    }];
    this.owlOptions = {
      loop: false,
      mouseDrag: false,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      navSpeed: 700,
      navText: ['&#8249', '&#8250;'],
      responsive: {
        0: {
          items: 1
        },
        767: {
          items: 2
        },
        991: {
          items: 3
        }
      },
      nav: false
    };
  }
  ngOnInit() {}
  static {
    this.ɵfac = function WorkExperienceComponent_Factory(t) {
      return new (t || WorkExperienceComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkExperienceComponent,
      selectors: [["app-work-experience"]],
      decls: 9,
      vars: 2,
      consts: [["id", "experiencia", 1, "experiencia"], [1, "container"], [1, "row"], [1, "col-lg-12", "text-center"], [3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "slide", "card"], ["alt", "Content 1", 3, "src"]],
      template: function WorkExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Experiencia");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "owl-carousel-o", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WorkExperienceComponent_8_Template, 1, 0, null, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.owlOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companys);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
      styles: [".experiencia[_ngcontent-%COMP%] {\n  background-color: var(--gray);\n  padding: 7% 0px;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 335px;\n  background-color: white;\n  padding: 30px 25px;\n  box-shadow: 0px 10px 19px -1px rgba(0, 0, 0, 0.24);\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 40px;\n  border-radius: 10px;\n}\n@media (max-width: 480px) {\n  .card[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--blue-title);\n  font-weight: 700;\n  margin-top: 40px;\n  font-size: 30px;\n  height: 75px;\n}\n@media (max-width: 767px) {\n  .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n    height: 55px;\n  }\n}\n@media (max-width: 480px) {\n  .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n    height: 50px;\n    margin-top: 25px;\n  }\n}\n.card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 300;\n  font-size: 24px;\n  margin: 20px auto;\n}\n@media (max-width: 767px) {\n  .card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n  font-size: 20px;\n  height: 120px;\n}\n@media (max-width: 767px) {\n  .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy93b3JrLWV4cGVyaWVuY2Uvd29yay1leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vTHVpcyUyMFZhcmdhcy9Eb2N1bWVudHMvUHJveWVjdG9zL1BvcnRhZm9saW8vc3JjL2FwcC9jb21wb25lbnRzL3dvcmstZXhwZXJpZW5jZS93b3JrLWV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Nhc3MvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUVHQSxrREZGQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QUNpRUk7RUYxRUo7SUFXUSxnQkFBQTtFQ0VOO0FBQ0Y7QURJSTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNGUjtBQ29ESTtFRnhEQTtJQVNRLGVBQUE7SUFDQSxZQUFBO0VDRFY7QUFDRjtBQzhDSTtFRnhEQTtJQWNRLGVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUNBVjtBQUNGO0FER0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRFI7QUNpQ0k7RUZwQ0E7SUFPUSxlQUFBO0VDQVY7QUFDRjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDRlI7QUNzQkk7RUZ4QkE7SUFPUSxlQUFBO0VDRFY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uL2Fzc2V0cy9zYXNzL21peGluc1wiO1xyXG5cclxuLmV4cGVyaWVuY2lhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xyXG4gICAgcGFkZGluZzogNyUgMHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDMzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDI1cHg7XHJcbiAgICBAaW5jbHVkZSBib3hzaGFkb3coIDBweCAxMHB4IDE5cHggLTFweCByZ2JhKDAsMCwwLDAuMjQpKTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNDgwKSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBpbWd7XHJcbiAgICAgICAgLy8gbWFyZ2luOjAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBoM3tcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBjb2xvcjp2YXIoLS1ibHVlLXRpdGxlKTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDc2Nykge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGZvcl9icmVha3BvaW50KDQ4MCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjMwMDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luOjIwcHggYXV0bztcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNzY3KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDoxMjBweDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZm9yX2JyZWFrcG9pbnQoNzY3KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmV4cGVyaWVuY2lhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XG4gIHBhZGRpbmc6IDclIDBweDtcbn1cblxuLmNhcmQge1xuICBtYXgtd2lkdGg6IDMzNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMzBweCAyNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDE5cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDE5cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxOXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY2FyZCB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxufVxuLmNhcmQgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1ibHVlLXRpdGxlKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcmQgaDMge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY2FyZCBoMyB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICB9XG59XG4uY2FyZCBoNSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FyZCBoNSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG4uY2FyZCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcmQgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59IiwiQG1peGluIGZvbnRzKCRmYW1pbHksICRwYXRoKSB7XHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZhbWlseTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdFwiKTtcclxuICAgICAgICBzcmM6IHVybChcIiN7JHBhdGh9LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIiN7JHBhdGh9LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiI3skcGF0aH0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94c2hhZG93KCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAkYXJncztcclxuICAgIGJveC1zaGFkb3c6ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkYXJncztcclxuICAgIC1vLXRyYW5zZm9ybTogJGFyZ3M7XHJcbiAgICB0cmFuc2Zvcm06ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZi1zaXplLCAkZi1mYW1pbHkpIHtcclxuICAgICY6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICAgICAgICBmb250LXNpemU6ICRmLXNpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmLWZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgICAgICAgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtc2l6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJGYtZmFtaWx5O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVncmFkYWRvKCRhcmdzLi4uKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGFyZ3MpO1xyXG59XHJcblxyXG5AbWl4aW4gaW1nLWRlZ3JhZGFkbygkdXJsLCAkYXJncy4uLikge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR1cmwpLCAtbW96LWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhcmdzKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgkdXJsKSwgLW1zLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIC1vLWxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHVybCksIGxpbmVhci1ncmFkaWVudCgkYXJncyk7XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJ5c1xyXG4kbWVkaWFfcXVlcmllcyA6IChcclxuICAgICdtb2JpbGUnIDogXCIobWF4LXdpZHRoOiA0NzlweClcIixcclxuICAgICdtb2JpbGUyJzogXCIobWF4LXdpZHRoOiA1OTlweClcIixcclxuICAgICd0YWJsZXQnIDogXCIobWF4LXdpZHRoOiA3NjdweClcIixcclxuICAgICd0YWJsZXQyJzogXCIobWF4LXdpZHRoOiA5OTFweClcIixcclxuICAgICdkZXNrdG9wJyA6IFwiKG1heC13aWR0aDoxMTk5cHgpXCIsXHJcbiAgICAnZGVza3RvcDEnOiBcIihtYXgtd2lkdGg6MTM5OXB4KVwiLFxyXG4gICAgJ2Rlc2t0b3AyJyA6IFwiKG1heC13aWR0aDoxNTk5cHgpXCJcclxuKTtcclxuXHJcbkBtaXhpbiBmb3JfYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6I3skYnJlYWtwb2ludH1weCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4427:
/*!***********************************************!*\
  !*** ./src/app/translate/translate.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory),
/* harmony export */   NgxTranslateModule: () => (/* binding */ NgxTranslateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8952);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);






function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class NgxTranslateModule {
  static {
    this.ɵfac = function NgxTranslateModule_Factory(t) {
      return new (t || NgxTranslateModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgxTranslateModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient]
        }
      }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxTranslateModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule],
    exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule]
  });
})();

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map