
//let id =0;
const name = document.querySelector('#courseName');
const category = document.querySelector('#courseCategory');
const price = document.querySelector('#coursePrice');
const description = document.querySelector('#courseDescription');
const capacity = document.querySelector('#courseCapacity');
const Btn=document.querySelector('#click');
let courses = [];

if(localStorage.getItem('courses') !== null){
    courses = JSON.parse(localStorage.getItem('courses'));
    displayCourse();

}
//console.log(name, category, price, description, capacity);

Btn.addEventListener('click', (e) => {
    e.preventDefault();
    const course = {
      //  id: id++,
        name: name.value,
        category: category.value,
        price: price.value,
        description: description.value,
        capacity: capacity.value
      
    };
   // console.log(course);

    courses.push(course);
   // console.log(courses);
   localStorage.setItem('courses', JSON.stringify(courses));
   Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Course Added Successfully",
    showConfirmButton: false,
    timer: 1500
  });
   displayCourse();
    
});



function displayCourse(){
 const result = courses.map((course ,index) => {

    return `
    <tr>
     <td>${index}</td>
     <td> ${course.name}</td>
     <td> ${course.category}</td>
     <td> ${course.price}</td>
     <td> ${course.description}</td>
     <td> ${course.capacity}</td>
    </tr>
    `;
 }).join('');
document.querySelector('#data').innerHTML = result;
} 