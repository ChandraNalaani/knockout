// define self-invoking function, pass in jQuery to alias $
(function ($) {
// define model (local array, or data from a web service)
	var model = [
		// people objects from contacts database, each with delete method
		{  name: "John",  address: "1, a road, a town, a county, a postcode",  tel: "1234567890",  site: "www.aurl.com", pic: "/img/john.jpg",  deleteMe: function () { viewModel.people.remove(this); }},
		{  name: "Jane",  address: "2, a street, a city, a county, a postcode",  tel: "1234567890",  site: "www.aurl.com",  pic: "/img/jane.jpg",  deleteMe: function () { viewModel.people.remove(this); }},
		{  name: "Fred",  address: "3, an avenue, a village, a county, a postcode",  tel: "1234567890",  site: "www.aurl.com",  pic: "/img/fred.jpg",  deleteMe: function () { viewModel.people.remove(this); }},
		{  name: "Freda",  address: "4, a street, a suburb, a county, a postcode",  tel: "1234567890",  site: "www.aurl.com",  pic: "/img/jane.jpg",  deleteMe: function () { viewModel.people.remove(this); }}
    ],
    viewModel = { // represents current UI state
        // knockout method adds people array to viewModel obj, allows others to see/react onchange
        people: ko.observableArray(model), 
		// <a> in view observes value
		displayButton: ko.observable(true), 
		// fieldset (observer) initially hidden
		displayForm: ko.observable(false), 
		// show/hide form updated automatically in view since observable
		showForm: function () { viewModel.displayForm(true).displayButton(false);}, 		hideForm: function () { viewModel.displayForm(false).displayButton(true);},
		// hide form, show button, create obj literal containing vals entered into 
		// text fields, then push obj into people array
		addPerson: function () { viewModel.displayForm(false).displayButton(true).people.push({ name: $("#name").val(), address: $("#address").val(), tel: $("#tel").val(), site: $("#site").val(), pic: "", deleteMe: function () { viewModel.people.remove(this); 
	//	KO's JSON serialiser writes observable array to JSON obj																																																																		
	//	if passing data back to server.																																																				
	//	to test: console.log(ko.toJSON(viewModel.people));																																																										
		}																																																											
        });  
    }  
    };
    // begin managing viewModel
	// apply 'data-bind="template: {name: 'personTemplate', foreach: people}"'
    ko.applyBindings(viewModel); 
})(jQuery); // end declarative bindings & observables in knockout.js 