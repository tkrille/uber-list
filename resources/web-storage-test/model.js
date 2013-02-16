window.ul = window.ul || {};

var module = window.ul.models = window.ul.models || {};

(function(module) {

    var os = window.ul.objectStorage;
    
    var EntryModel = module.EntryModel = Backbone.Model.extend({
	
    });
    
    var ListEntryModel = module.ListEntryModel = EntryModel.extend({
	
    });
    
    module.createEntryModel = function (entryData) {
	var type = entryData.type;
	
	if (!type) {
	    type = "list";
	}
	
	var result = null;
	
	if (module['create' + _.str.capitalize(type) + 'EntryModel']) {
	    result = module['create' + _.str.capitalize(type) + 'EntryModel'](entryData);
	}
	
	if (result === null) {
	    return null;
	}
	
	return result;
    };
    
    var createListEntryModel =  module.createListEntryModel = function (entryData) {
	return new ListEntryModel(entryData);
    };
    
})(module);