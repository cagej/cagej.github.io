const applyForm = document.getElementById('apply-form');
const workContainer = document.getElementById("work-container");
const addWorkBtn = document.getElementById("add-work-btn");
const formContainer = document.getElementById('form-container');

addWorkBtn.addEventListener('click', () => {
    const card = document.createElement('div');
    const jobTitleLabel = document.createElement('label');
    const jobDescriptionLabel = document.createElement('label');
    const jobTitle = document.createElement('input');
    const jobDescription = document.createElement('textarea');
    const divider = document.createElement('hr');
    const deleteBtn = document.createElement('button');

    jobTitleLabel.innerText = "Job Title ";
    jobTitleLabel.appendChild(jobTitle);

    jobDescriptionLabel.innerText = "\nJob Description ";
    jobDescriptionLabel.appendChild(jobDescription);

    jobTitle.setAttribute('type', 'text');
    jobTitle.setAttribute('required', 'true')
    jobDescription.setAttribute('type', 'text');
    jobDescription.setAttribute('required', 'true')
    
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute('type', 'button');

    deleteBtn.addEventListener('click', () => {
        card.parentNode.removeChild(card);
    });

    card.append(jobTitleLabel);
    card.append(jobDescriptionLabel);
    card.append(deleteBtn);
    card.append(divider);

    workContainer.appendChild(card);
});

const jobExp = () => {
    const HTMLString = 
    `
    <p>Thank you applying at Barone Sanitation! You will recieve a phone call within the next 7 business days regarding you application status.</p>
    `; 

    formContainer.innerHTML = HTMLString;
};

const priorWork = (inputJob) => {
    if (inputJob.length === 0) {
        return `<p>N/A</p>`;
    } else {
        let pos = 0;
        let HTMLString = ``;
        const max = inputJob.length / 2;
        while (pos < max) {
            HTMLString += `<li><b>${inputJob[pos * 2].value}:</b> ${inputJob[(pos * 2) + 1].value}</li>`;
            pos++;
        }
        return HTMLString;
    }
}

applyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    jobExp();
});