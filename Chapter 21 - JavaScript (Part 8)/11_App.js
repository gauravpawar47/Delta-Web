function sum(...args)
{
    return args.reduce((sum, el) => sum + el);
}

console.log("Sum of 1 to 5 : ", sum(1, 2, 3, 4, 5));
console.log("Min of 1 to 5 : ", getMin(1, 2, 3, 4, 5));
console.log("Max of 1 to 5 : ", getMax(1, 2, 3, 4, 5));

function getMin(...args)
{
    return args.reduce((min, el) => {
        return Math.min(min, el);
    });
}

function getMax(...args)
{
    return args.reduce((max, el) => {
        return Math.max(max, el);
    });
}