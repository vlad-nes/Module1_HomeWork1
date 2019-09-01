var car = {
    model: 'Mitsubishi',
    carcass: 'Sedan',
    numCar: 7683,
    gas: false,
    brake: true,
    motor: {
		cylinders: 4
	},
	startCar: function() {
		return 'The car is move'
	},
	stopCar: function() {
		return 'The car is stop'
	}
};

var item1 = car.model;
var item2 = car.carcass;
var item3 = car.numCar;
var item4 = car.gas;
var item5 = car.brake;
var item6 = car.motor;
var item7 = car.startCar();
var item8 = car.stopCar();

console.log(' Model of car: ', item1, '\n', 'Carcass of car: ', item2, '\n','Number of car: ', item3, '\n', 'Gas is on: ', item4, '\n', 'Brake is on: ', item5, '\n', 'Motor of car: ', item6, '\n', 'Function-Start: ', item7, '\n', 'Function-Stop: ', item8);
