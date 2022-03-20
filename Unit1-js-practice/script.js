document.write("JavaScript works!");


console.log("Hello console!");

console.warn("This is only a test!");

let myName = ("Robert");

let workFromHome = true;

let side = 15;

let radius = 10

console.log(`My name is ${myName}.`);
console.log(`I work from home: ${workFromHome}`);
console.log(`The length of each side of the square is ${side}`);
console.log(`the radius of the circle is ${radius}`);

let squareArea = side**=2;

let squarePerimeter = 4*side;

let circleArea = Math.PI*radius*radius;

let circlePerimeter = 2*Math.PI*radius;

console.log(`The square area is ${squareArea}.`);
console.log(`The circle area is ${circleArea} and the perimeter is ${circlePerimeter}.`);
console.log(`The square are is${squareArea} the perimeter is ${squarePerimeter}`);


let travelOptions = ["foot","bike","car","airplane" ];

console.log(`The travel options are:`);
console.log(`1) ${travelOptions[0]}`);
console.log(`2) ${travelOptions[1]}`);
console.log(`3) ${travelOptions[2]}`);
console.log(`4) ${travelOptions[3]}`);



let travelType = prompt ("How would you like to travel?");

let distance = 100;
let time = 0;
let cost = 0;

    if (travelType ==="foot") {
        console.log("Walking is free! Speed is 3mph.");
        cost = 0;
        time = distance /3;
          console.log(`Travel Type: ${travelType}`)
        }
        else if(travelType === "bike") {
            let rentBike = prompt("Do you need to rent the bike? (yes or no)");
        
        if (rentBike === "yes") {
            console.log("Bike Rental is $45! Speed is 10mph.");
            cost=45;
        }
         else  {
            console.log("Biking is free! Speed is 10mph.");
            cost = 0;
         }
            time = distance /10;
    }   
            console.log("Biking is free! Speed is 10 mph");
            cost = 0;
            time = distance / 10;
            console.log(`Travel Type: ${travelType}`);
    
        }  else if(travelType === "car"){
            console.log("Driving is $0.25/mi. Speed is 60mph.");
            cost = 0.25*distance;
            time = distance / 60;
            console.log(`Travel Type: ${travelType}`)
        }
        else if(travelType === "airplane"){
            let passengerCount = prompt("How many passengers?)");
            cost = 0;
            console.log("Flying is $0.10/mi. Spead is 400mph.");
            cost = 0.10*distance*passengerCount;
            time = distance / 400;
            console.log(`Travel Type: ${travelType}`)
      }
        else {
        console.log(`Sorry. ${travelType} is an invalid option.`);
    }
  
    console.log(`Traveling ${distance} miles by ${travelType} took ${time} hours and cost ${cost}!`);

    let costBar = "Cost: ";
// this loop repeats 5 times

    costBar += "$"; // adds one $

    costBar += "$"; // adds another $

    costBar += "$"; // adds another $
    

    for (let i=0; i<10; i++) {
        costBar += "$";
    }
    console.log(costBar); // "Cost: $$$$$""

    // Time / per hour

    let timeBar = "Time: ";
// this loop repeats 5 times

    timeBar += "/"; // adds one /

    timeBar += "/"; // adds another /

    timeBar += "/"; // adds another /

    for (let i=0; i<33; i++) {
        timeBar += "/";
    }
  
   // console.log(timeBar); // "time:  ///"

    // if (travelType ==="car") {
    //     // All code for this step goes inside here

    //    let coin = ["quarter","dime","nickel","penny"];

    //         console.log(`1) ${coin [0]}`);
    //         console.log(`2) ${coin [1]}`);
    //         console.log(`3) ${coin [2]}`);
    //         console.log(`3) ${coin[3]}`);
           
    //     let meterCostRemaining = 1.00;
    //         while (meterCostRemaining > 0) {
            
    //         let coin = prompt(`$${meterCostRemaining} remaining. Tye a coin to insert.`);
    //         //TODO: check which coin was chosen: "quarter", "dime", "nickel", or "penny"
    //         //and subtract that form meterCostRemaining
        
    //         meterCostRemaining -= ${coin};
        
    //         console.log("Meter cost remaining: " + meterCostRemaining);
    //     }

    //     console.log("You have paid the parking meter.")


    }




    

