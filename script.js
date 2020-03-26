const my_Name = "Ayangade Adeoluwa";

const course_List = ["html", "css", "javascript", "python", "nodejs"];

console.log(my_Name);
console.log(course_List);

const n = 200;

function print_odd_numbers(n) {
  for (var i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

if (course_List.length % 2 === 0) {
  console.log(print_odd_numbers(n));
}
