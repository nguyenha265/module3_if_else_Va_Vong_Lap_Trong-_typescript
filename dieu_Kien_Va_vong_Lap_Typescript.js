var count = 50;
if (count > 0) {
    count--;
}
else {
    count = 0;
}
document.getElementById("hienThi").innerHTML = count;
/**
 * loop
 */
alert("for loop");
var keys = "abcdef";
for (var idx_1 = 0; idx_1 < keys.length; ++idx_1) {
    alert(keys[idx_1]);
}
alert("while loop");
var idx = 0;
while (idx < keys.length) {
    alert(keys[idx]);
    ++idx;
}
alert("do-while loop");
idx = 0;
do {
    alert(keys[idx]);
    ++idx;
} while (idx < keys.length);
alert("for-of loop");
for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
    var item = keys_1[_i];
    alert(item);
}
alert("for-in loop");
var user = {
    name: 'Bob',
    age: 55
};
for (var key in user) {
    alert(key + ": " + user[key]);
}
