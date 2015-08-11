/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="./model.ts" />
class MainController {
	public tv: GF.Device;

	constructor() {
		this.tv = new GF.Device("TV", 1000);
	}	
}

angular.module("myApp").controller("MainController", MainController);