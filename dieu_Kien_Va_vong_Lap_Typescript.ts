let count = 50;

if (count > 0) {
    count--;
} else {
    count = 0;
}
document.getElementById("hienThi").innerHTML = count;

alert("for loop");

const keys = "abcdef";
for (let idx = 0; idx < keys.length; ++idx) {
    alert(keys[idx]);
}

alert("while loop");
let idx = 0;
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
for (const item of keys) {
    alert(item);
}

alert("for-in loop");
const user = {
    name: 'Bob',
    age: 55
};
for (const key in user) {
    alert(`${key}: ${user[key]}`);
}