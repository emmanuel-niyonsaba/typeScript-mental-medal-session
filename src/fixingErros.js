//Before 
function printCarModel(car) {
    console.log(car.brand);
    console.log(car.model.toUpperCase());
    console.log(car.price.toFixed(2));
}
printCarModel({ brand: "Toyota", model: "Honda", price: 3000 });
