var module = window.ul = window.ul || {};

(function(module) {

    var st = window.localStorage;
    var os = window.ul.objectStorage;
    
    module.initialize = function() {
	console.log("initialize");
	os.clear();

	os.putObject('ul.settings', {});

	window.ul.testData.forEach(function(entry) {
	    os.putObject('ul.entries.' + entry.uuid, entry);

	    if (entry.parent === null) {
		os.putObject('ul.entries.root', entry.uuid);
	    }
	});

	os.putObject('ul.templates', []);
    };
    
    module.test = function () {
	var rootEntryDbUUID = os.getObject('ul.entries.root');
	var rootEntryDb = os.getObject('ul.entries.' + rootEntryDbUUID);
	
	var rootEntry = module.models.createEntryModel(rootEntryDb);
	
	console.log(rootEntry);
    };

    if (st.length === 0) {
	module.initialize();
    }
    
})(module);