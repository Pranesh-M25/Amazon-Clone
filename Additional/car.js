class car{
  #brand;
  #model;
  speed;
  isTrunkOpen;

  constructor(carDetails){
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
    this.speed = carDetails.speed;
  };

  displayInfo() {

    const trunkStatus = 
    this.isTrunkOpen  ? 'Open'  : 'Closed'

    console.log(`${this.#brand}, ${this.#model}, ${this.speed}km/hr, Trunk is ${trunkStatus}`)
  };

  speed = 0;
  isTrunkOpen = false;

  go(){ if(!this.isTrunkOpen){
    this.speed = this.speed+5;
  }

  if(this.speed > 200){
    this.speed = 200
  }
  };

  brake(){
    this.speed = this.speed-5;

    if(this.speed<0){
      this.speed=0;
    }
   
  };

  openTrunk(){
    if(this.speed === 0){
      this.isTrunkOpen = true
    }
  }

  closeTrunk(){
    this.isTrunkOpen = false;
  }
}

class raceCar extends car{
  acceleration;

  constructor(carDetails){
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go(){
    this.speed = this.speed+this.acceleration;
    if(this.speed >= 300){
      this.speed = 300
    }
  }

  openTrunk() {
    console.log('Race cars do not have a trunk.');
  }

  closeTrunk() {
    console.log('Race cars do not have a trunk.');
  }

  displayInfo() {

    const trunkStatus = 
    this.isTrunkOpen  ? 'Open'  : 'Closed'

    console.log(`${this.brand}, ${this.model}, ${this.speed}km/hr, Trunk is ${trunkStatus}`)
  };

}

const rc1 = new raceCar({
  brand: 'McLaren',
  model: 'F1',
  speed: 0,
  acceleration: 50
});


const car1 = new car({
  brand: 'Mahindra',
  model: 'Thar',
  speed: 0
});

const car2 = new car({
  brand: 'Toyota',
  model: 'Corolla',
  speed: 0
});

const car3 = new car({
  brand: 'Tesla',
  model: 'Model 3',
  speed: 0

});

console.log(car1,car2,car3,rc1);


car1.go();
car1.go();
car1.go();
car1.brake();
car1.displayInfo();

car1.openTrunk();
car1.displayInfo();

car2.go();
car2.go();
car2.go();
car2.go();
car2.go();
car2.go();
car2.brake();
car2.brake();
car2.displayInfo();

car3.openTrunk();
car3.go();
car3.displayInfo();

rc1.displayInfo();
rc1.go();
rc1.go();
rc1.go();
rc1.go();
rc1.go();
rc1.go();
rc1.brake();
rc1.brake();
rc1.brake();
rc1.displayInfo();
rc1.openTrunk();
rc1.brake();
rc1.brake();
rc1.displayInfo();
