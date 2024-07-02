document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let website = document.getElementById('website').value;
    let imageLink = document.getElementById('imageLink').value;
    let gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    let skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(skill => skill.value).join(', ');

    let tbody = document.querySelector('#enrolledStudents tbody');

    let row = document.createElement('tr');

    let descriptionCell = document.createElement('td');
    descriptionCell.innerHTML = `
        <p><strong>${name}</strong></p>
        <p>${gender}</p>
        <p>${email}</p>
        <p><a href="${website}" target="_blank">${website}</a></p>
        <p>${skills}</p>
    `;
    
    let imageCell = document.createElement('td');
    imageCell.innerHTML = `<img src="${imageLink}" alt="Student Image">`;

    row.appendChild(descriptionCell);
    row.appendChild(imageCell);

    tbody.appendChild(row);

    document.getElementById('enrollmentForm').reset();
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('enrollmentForm').reset();
});
