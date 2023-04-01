// Get all days and tasks lists
const days = document.querySelectorAll('.days');
const taskLists = document.querySelectorAll('.weeks');

// Add event listener to each day
days.forEach((day, index) => {
  day.addEventListener('click', (e) => {
    e.preventDefault();
    // Hide all task lists
    taskLists.forEach((taskList) => {
      taskList.classList.add('hide__days');
    });
    // Show the corresponding task list
    taskLists[index].classList.remove('hide__days');
  });
});








//? let monday = document.querySelector(".days1");
// let tuesday = document.querySelector(".days2");
// let wednesday= document.querySelector(".days3");
// let thursday = document.querySelector(".days4");
// let friday = document.querySelector(".days5");
// let saturday = document.querySelector(".days6");
// let sunday = document.querySelector(".days7");

// let taskslist1 = document.querySelector(".weeks1");
// let taskslist2 = document.querySelector(".weeks2");
// let taskslist3 = document.querySelector(".weeks3");
// let taskslist4 = document.querySelector(".weeks4");
// let taskslist5 = document.querySelector(".weeks5");
// let taskslist6 = document.querySelector(".weeks6");
// let taskslist7 = document.querySelector(".weeks7");

// monday.addEventListener('click', hide);
// function hide(e){
//     e.preventDefault();
//     taskslist1.classList.remove("hide__days");
//     taskslist2.classList.add("hide__days");
//     taskslist3.classList.add("hide__days");
//     taskslist4.classList.add("hide__days");
//     taskslist5.classList.add("hide__days");
//     taskslist6.classList.add("hide__days");
//     taskslist7.classList.add("hide__days");
// }

// tuesday.addEventListener('click', tu);

// function tu(e){
//     e.preventDefault();
//     taskslist1.classList.add("hide__days");
//     taskslist2.classList.remove("hide__days");
//     taskslist3.classList.add("hide__days");
//     taskslist4.classList.add("hide__days");
//     taskslist5.classList.add("hide__days");
//     taskslist6.classList.add("hide__days");
//     taskslist7.classList.add("hide__days");
    
// }

// wednesday.addEventListener('click', we);

// function we(e){
//     e.preventDefault();
//     taskslist1.classList.add("hide__days");
//     taskslist2.classList.add("hide__days");
//     taskslist3.classList.remove("hide__days");
//     taskslist4.classList.add("hide__days");
//     taskslist5.classList.add("hide__days");
//     taskslist6.classList.add("hide__days");
//     taskslist7.classList.add("hide__days");
// }

// thursday.addEventListener('click', thu);

// function thu(e){
//     e.preventDefault();
//     taskslist1.classList.add("hide__days");
//     taskslist2.classList.add("hide__days");
//     taskslist3.classList.add("hide__days");
//     taskslist4.classList.remove("hide__days");
//     taskslist5.classList.add("hide__days");
//     taskslist6.classList.add("hide__days");
//     taskslist7.classList.add("hide__days");
// }

// friday.addEventListener('click',fri);

// function fri(e){
//     e.preventDefault();
//     taskslist1.classList.add("hide__days");
//     taskslist2.classList.add("hide__days");
//     taskslist3.classList.add("hide__days");
//     taskslist4.classList.add("hide__days");
//     taskslist5.classList.remove("hide__days");
//     taskslist6.classList.add("hide__days");
//     taskslist7.classList.add("hide__days");
// }
// saturday.addEventListener('click', sa);

// function sa(e){
//     e.preventDefault();
//     taskslist1.classList.add("hide__days");
//     taskslist2.classList.add("hide__days");
//     taskslist3.classList.add("hide__days");
//     taskslist4.classList.add("hide__days");
//     taskslist5.classList.add("hide__days")
//     taskslist6.classList.remove("hide__days");
//     taskslist7.classList.add("hide__days");
// }

// sunday.addEventListener('click', s);

// function s(e){
//     e.preventDefault();
//     taskslist1.classList.add("hide__days");
//     taskslist2.classList.add("hide__days");
//     taskslist3.classList.add("hide__days");
//     taskslist4.classList.add("hide__days");
//     taskslist5.classList.add("hide__days");
//     taskslist6.classList.add("hide__days");
//     taskslist7.classList.remove("hide__days");
//* }


