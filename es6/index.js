	const car = {
    model: 'Mitsubishi',
    carcass: 'Sedan',
    numCar: 7683,
    gas: false,
    brake: true,
    motor: {
		cylinders: 4
	},
	startCar: () => 'The car is move',
	stopCar: () => 'The car is stop'
};

let {
	model,
	carcass, 
	numCar,
	gas,
	brake,
	motor, 
	startCar,	//Не понятно, как таким способом передать, данной переменной, результат фунции, а не саму функцию
	stopCar
} = car;

console.log(' Model of car: ', model, '\n', 'Carcass of car: ', carcass, '\n','Number of car: ', numCar, '\n', 'Gas is on: ', gas, '\n', 'Brake is on: ', brake, '\n', 'Motor of car: ', motor, '\n', 'Function-Start: ', startCar, '\n', 'Function-Stop: ', stopCar);
