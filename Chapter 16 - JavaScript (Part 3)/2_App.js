// 2. Trim

let str = "  abc";

console.log("Without Trim : ", str);
console.log("With Trim    : ", str.trim());

// 4. Changing Case

let name = "Garuav Pawar";

console.log("Original   : ", name);
console.log("Lower Case : ", name.toLowerCase());
console.log("Upper Case : ", name.toUpperCase());

// 5. Indexof

let subject = "Operating System";

console.log("Subject       s: ", subject);
console.log("Index Of ting : ", subject.indexOf("ting"));
console.log("Index Of tong : ", subject.indexOf("tong"));

// 6. Method Chaining

console.log("Without Chain : ", str);
console.log("Without Chain : ", str.toUpperCase().trim());

// 7. Slicing

let sliced = "LeetCode";

console.log("Slice(5) : ", sliced.slice(5));
console.log("Slice(4, n) : ", sliced.slice(4, sliced.length));
console.log("Slice(-5) : ", sliced.slice(-5));

// 8. Replace and Repeat

let strings = "leetcoding";

console.log("Original : ", strings);
console.log("Replace eet : ", strings.replace("eet", "x"));
console.log("Replace e : ", strings.replace("e", "x"));

console.log("Repeat 3 : ", strings.repeat(3));