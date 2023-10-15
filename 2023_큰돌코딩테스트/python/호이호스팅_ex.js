function fullname() {
    console.log(last);
    last = "Hong";
    return function (first) {
        return last + " " + first;
    };
}
const last = "Lee";
x = fullname();
console.log(x("gilgdong"));
console.log(last);
