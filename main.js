// Require JS  Config File

require.config({
	paths : {
		"angular" : "lib/angular"
//        "ui-bootstrap" : "lib/ui-bootstrap/ui-bootstrap"
        //"bootstrap-tabs" : "lib/bootstrap-angular-ui/tabs"
	},
	shim : {
		angular  :{
			exports : "angular"
		}
	},
    baseUrl: ''
});


require(["app"],
    function(App) {
        App.initialize();
    }
);