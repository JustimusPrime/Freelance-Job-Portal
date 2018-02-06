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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProposalShowComponent = /** @class */ (function () {
    function ProposalShowComponent(route) {
        this.route = route;
    }
    ProposalShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeId = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
    };
    ProposalShowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'proposal-show',
            templateUrl: 'proposal-show.component.html',
            styleUrls: ['proposal-show.component.css'],
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], ProposalShowComponent);
    return ProposalShowComponent;
}());
exports.ProposalShowComponent = ProposalShowComponent;
// dependency injection - private - value of argument - data type
// want to let component know that as soon as new class has been istantiated (when someone goes to the proposal show page) it will immediately call this constructor, which will call an instance of this activated route and store it in this route argument which we can use throughout the rest of our class
// subcribe - something that gives access to the object you wanna communicate with. 
//# sourceMappingURL=proposal-show.component.js.map