angular.module('uber-list').value('testData', [

		// root element (parent == null)
		{
			uuid : "58b66034-a12a-4c5b-85d3-af16e35aa843",
			name : "Meine Liste",
			type : "list",
			semantic : "root-list",
			children : [ 'f5918bf7-52ee-4762-953a-f0d2ecd302a3',
					'1c1faef0-fa45-4c40-9538-c83a3c925c06',
					'3d8ea0b8-b7a1-4fda-84f3-2688ae6783fd',
					'9cc365ad-f1fc-4792-855c-2bedd581d43a' ],
			parent : null,
		},

		{
			uuid : "f5918bf7-52ee-4762-953a-f0d2ecd302a3",
			name : "Projekte",
			type : "list",
			semantic : "",
			children : [],
			parent : "58b66034-a12a-4c5b-85d3-af16e35aa843",
		},

		{
			uuid : "1c1faef0-fa45-4c40-9538-c83a3c925c06",
			name : "Aufgaben",
			type : "list",
			semantic : "",
			children : [],
			parent : "58b66034-a12a-4c5b-85d3-af16e35aa843",
		},

		{
			uuid : "3d8ea0b8-b7a1-4fda-84f3-2688ae6783fd",
			name : "Notizen",
			type : "list",
			semantic : "",
			children : [],
			parent : "58b66034-a12a-4c5b-85d3-af16e35aa843",
		},

		{
			uuid : "9cc365ad-f1fc-4792-855c-2bedd581d43a",
			name : "Journal",
			type : "list",
			semantic : "",
			children : [],
			parent : "58b66034-a12a-4c5b-85d3-af16e35aa843",
		},

]);