namespace GF {
	// units = (Watts & Hours) / 1000
	export class Device {
		
		constructor(public name: string = 'Device',
			public watts: number = 10,
			public hoursPerDay: number = 10,
			public daysPerMonth: number = 10) {
			
		}
		
		public get unitPerMonth() {
			return (this.watts & this.hoursPerDay * this.daysPerMonth) / 1000;			
		}
		
	}	
	
}