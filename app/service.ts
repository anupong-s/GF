/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./model.ts" />

class DeviceService {
	
	private devices: GF.Device[];
	
	constructor() {
		this.devices = [];
	}
	
	public getAll() {
		return this.devices;		
	}
	
	public add(d: GF.Device) {
		this.devices.push(d);
	}
	
	public remove(d: GF.Device){
		var n = this.devices.indexOf(d);
		this.devices.splice(n, 1);
	}	
}

angular.module('myApp')
	.service('DeviceService', DeviceService);