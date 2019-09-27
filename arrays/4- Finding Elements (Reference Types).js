const courses = [{ id: 1, name: "a" }, { id: 1, name: "b" }];
//not able to use because reference types are stored in different parts of memory
// console.log(courses.includes({id:1,name:'a'}))
const course = courses.find(function(course) {
  return course.name === "a";
});
console.log(course);

const c = courses.findIndex(function(course) {
  return course.name === "xyz";
});
console.log(course);
