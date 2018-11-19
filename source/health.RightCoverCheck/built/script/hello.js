define(["require", "exports", "knockout", "./home"], function (require, exports, ko, HomeViewModel) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HelloViewModel = /** @class */ (function () {
        function HelloViewModel(language, framework) {
            this.language = ko.observable(language);
            this.framework = ko.observable(framework);
            this.list = ko.observable([
                new HomeViewModel.HomeViewModel("Some", 10),
                new HomeViewModel.HomeViewModel("Another", 2)
            ]);
        }
        return HelloViewModel;
    }());
    ko.applyBindings(new HelloViewModel("TypeScript", "Knockout"));
});
//# sourceMappingURL=hello.js.map