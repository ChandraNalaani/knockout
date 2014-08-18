function AppViewModel() {
    this.firstName = ko.observable("Zsa Zsa");
    this.lastName = ko.observable("Gabor");
    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);
    this.capitalizeLastName = function() {
        var currentVal = this.lastName();
        this.lastName(currentVal.toUpperCase());
    };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
