import * as ko from "knockout";
import HomeViewModel = require("./home");
class HelloViewModel {
    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>
    list: KnockoutObservable<Array<HomeViewModel.HomeViewModel>>
    constructor(language: string, framework: string) {
        this.language = ko.observable(language);
        this.framework = ko.observable(framework);
        this.list = ko.observable([
            new HomeViewModel.HomeViewModel("Some", 10),
            new HomeViewModel.HomeViewModel("Another", 2)
        ]);
    }
}

ko.applyBindings(new HelloViewModel("TypeScript", "Knockout"));