let calculateInterest = function(principle, rateOfInterest, numberOfYeras){
    let simpleInterest = (principle * rateOfInterest * numberOfYeras) / 100;
    return simpleInterest;
};

let response = calculateInterest(1000, 8, 5);
console.log(response);