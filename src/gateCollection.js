// This contaians practical question for the gate
var processValue = function (data) {
    if (typeof data == "string") {
        return data.toUpperCase();
    }
    else if (typeof data == "number") {
        return data * data;
    }
    else if (typeof data == "number") {
        return data * data;
    }
    else if (typeof data == "boolean") {
        return !data;
    }
    else {
        throw console.error("invalid Data here! Check data well");
    }
};
console.log(processValue("name"));
console.log(processValue(12));
console.log(processValue(true));
console.log(processValue(null));
