//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//* Tests for equality and inequality with strings
//* Tests using the lower case function
//* Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//* Tests using "and" and "or" operators
//* Test whether an item is in a array
//* Test whether an item is not in a array
var name_1 = "Saba";
var name_2 = "Saba Nizam";
var name_3 = "Ms Saba Nizam";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
var age_1 = 18;
var age_2 = 22;
if (age_1 == 18) {
    console.log("eligible for vote");
}
if (age_1 != 22) {
    console.log("eligible for vote in older category");
}
if (age_1 >= age_2) { //less
    console.log("Younger");
}
if (age_2 >= age_1) { //greater
    console.log("Older");
}
if (age_1 == 18 && age_2 == 22) {
    console.log("person is eligible for vote");
}
if (age_1 == 18 || age_2 != 22) {
    console.log("person is eligible not for vote");
}
var colours = ["Pink", "Purple", "Green", "Red", "Blue"];
if (colours.includes("Pink")) {
    console.log("Pink is in colour's list");
}
