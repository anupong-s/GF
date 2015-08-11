/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./model.ts" />
/// <reference path="./service.ts" />
class MainController {
	
	public static $inject = ['DeviceService'];
	
	constructor(public deviceService: DeviceService) {
		//
	}
	
	public getAllDevices() {
		return this.deviceService.getAll();
	}
	
	public removeDevice(d: GF.Device): void {
	    this.deviceService.remove(d);
	}
	
	public addDevice(): void {
    	var d = new GF.Device();
		d.name = "My machine";
		
		this.deviceService.add(d);
	}	
}

angular.module("myApp").controller("MainController", MainController);