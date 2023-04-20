
function getSubject(details,data){
document.getElementById("Name_show").innerHTML = details[0];
document.getElementById("rollNo_show").innerHTML = details[1];
document.getElementById("Department_show").innerHTML = details[2];

document.getElementById("head").innerHTML = data.department_name;
const subjectsContainer = document.querySelector('.subjects-container');

data.subjects.forEach(subject => {
const subjectCard = document.createElement('div');
subjectCard.classList.add('subject-card');

const subjectName = document.createElement('h2');
subjectName.textContent = subject.subject_name;

const subjectCount = document.createElement('p');
subjectCount.textContent = `Count:${subject.count}/ ${subject.Total_count}`;

const subjectDescription = document.createElement('p');
subjectDescription.innerHTML = subject.description;

const selectButton = document.createElement('button');
selectButton.textContent = "Select";
selectButton.addEventListener('click', () => {
    alert(`Selected ${subject.subject_name}`);
    document.getElementById("subject").value = subject.subject_name;

});

subjectCard.appendChild(subjectName);
subjectCard.appendChild(subjectCount);
subjectCard.appendChild(subjectDescription);
subjectCard.appendChild(selectButton);

subjectsContainer.appendChild(subjectCard);
});
}