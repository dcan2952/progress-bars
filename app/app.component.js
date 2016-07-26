"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_service_1 = require('./app.service');
var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.response = {
            "buttons": [
                10,
                38,
                -13,
                -18,
                90,
                20
            ],
            "bars": [
                62,
                45,
                62
            ],
            "limit": 230
        };
        this.buttonColumns = function () {
            if (12 % this.response.buttons.length == 0) {
                return 12 / this.response.buttons.length;
            }
            else {
                return 2;
            }
        };
        this.selectedBarIndex = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.get()
            .then(function (response) { return _this.response = response; });
    };
    AppComponent.prototype.editProgress = function (editValue) {
        if (this.response.bars[this.selectedBarIndex] + editValue < 0) {
            this.response.bars[this.selectedBarIndex] = 0;
        }
        else {
            this.response.bars[this.selectedBarIndex] = this.response.bars[this.selectedBarIndex] + editValue;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            providers: [app_service_1.AppService]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map