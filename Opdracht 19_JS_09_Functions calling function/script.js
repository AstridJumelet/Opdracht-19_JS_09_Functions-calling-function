console.log("** Oefening Hey kiddo **");
const checkAge = function (age) {
    console.log("entering checkAge met inputwaarde:", age);
    if (age >= 18) {
        return true;
    }
    return false;
};
//console.log("de return value van checkAge is: ", return);// welke ? hoe output definieren? //waarom bovenaan in console 
//console.log();

const ageMessage = function (waarde) {
    console.log("entering ageMessage met inputwaarde", waarde);
    if (waarde === true) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};
//console.log ("de return value van ageMessage is: ", );  //waar en hoe zet ik deze weg?

const makeGreetings = function (age) {
    console.log("entering makeGreetings met inputwaarde", age);
    const adult = checkAge(age);
    const greetAge = ageMessage(adult);
    return greetAge;
};

console.log(makeGreetings(17));//output moet zijn: hey kiddo
console.log(makeGreetings(21));//output moet zijn: hello there


console.log("** VAT - 1 **");
const calcPriceIncl = function (price, vatPerc) {
    console.log("entering calcPriceIncl met inputwaarden prijs €", price, "en VAT%:", vatPerc);
    const VAT = price * vatPerc / 100;
    console.log("output, berekende VAT", VAT);
    const PriceIncl = price + VAT;
    console.log("entering PriceIncl met waarde VAT", VAT);
    return PriceIncl;
};
console.log(calcPriceIncl(1000, 21));//expected output = 1210
console.log(calcPriceIncl(2500, 9));//expected output = 2725 (VAT = 225)

console.log("** VAT - 2 **");
const calcPriceExcl = function (price, vatPerc) {
    console.log("entering calcPriceExcl met inputwaarden prijs €", price, "en VAT%:", vatPerc);
    const VAT = price - (price / (1 + vatPerc / 100));
    console.log("output, berekende VAT", VAT);
    const PriceExcl = price / (1 + vatPerc / 100);
    console.log("entering PriceExcl met waarde VAT", VAT);
    return PriceExcl;
};
console.log(calcPriceExcl(1210, 21));//expected output = 1000
console.log(calcPriceExcl(2500, 9));//expected output = 2293,578 (VAT 206,422)
