// Get DOM elements
const form = document.getElementById('resume-form');
const preview = document.getElementById('resume-preview');
const generateButton = document.getElementById('generate-resume');
const downloadButton = document.getElementById('download-pdf');



const previewSection = document.querySelector(".preview-section");
const builderResume = document.querySelector(".build-resume-section");




// Get container elements
const experienceContainer = document.getElementById('experience-container');
const projectsContainer = document.getElementById('projects-container');





// Function to add an experience entry
function addExperience() {
    const experienceSection = document.getElementById('experience-container');
    const experienceEntry = document.createElement('div');
    experienceEntry.className = 'experience-group';
    experienceEntry.innerHTML = `
      <div class="row">
                <div class="col-3">
                  <input class="form-control position" type="text" placeholder="Designation" required>
                </div>
                <div class="col">
                  <input class="form-control company" type="text" placeholder="Company Name" required>
                </div>
                <div class="col">
                  <input class="form-control duration" type="text" placeholder="Duration (2023-2024) / 3-months"
                    required>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <textarea class="form-control experience-details"
                    placeholder="Work that you did - Technologies"></textarea>
                </div>
              </div>
      <button type="button" class="remove-btn" onclick="removeSection(this)">Remove</button>
    `;
    experienceSection.appendChild(experienceEntry);
}

// Function to add a project entry
function addProject() {
    const projectsSection = document.getElementById('projects-container');
    const projectEntry = document.createElement('div');
    projectEntry.className = 'project-group';
    projectEntry.innerHTML = `
      <input class="form-control project-title" type="text" placeholder="Project title" required>
              <textarea class="form-control project-details"
                placeholder="Details about project - Technologies used"></textarea>
      <button type="button" class="remove-btn" onclick="removeSection(this)">Remove</button>
    `;
    projectsSection.appendChild(projectEntry);
}

// Function to remove an entry
function removeSection(button) {
    const entry = button.parentElement;
    entry.remove();
}





// Generate the preview







generateButton.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    // const experience = document.getElementById('experience').value;
    // const position = document.getElementById('position').value;
    // const company = document.getElementById('company').value;
    // const duration = document.getElementById('duration').value;
    // const projects = document.getElementById('projects').value;
    // const title = document.getElementById('title').value;
    const batch = document.getElementById('batch').value;
    const cgpa = document.getElementById('cgpa').value;
    const degree = document.getElementById('degree').value;
    const college = document.getElementById('college').value;
    const school = document.getElementById('school').value;
    const board = document.getElementById('board').value;
    const percentage = document.getElementById('percentage').value;
    const year = document.getElementById('year').value;
    const skills = document.getElementById('skills').value;
    const achievements = document.getElementById('achievements').value;


    const experiences = Array.from(experienceContainer.querySelectorAll('.experience-group')).map(group => ({
        position: group.querySelector('.position').value,
        company: group.querySelector('.company').value,
        duration: group.querySelector('.duration').value,
        details: group.querySelector('.experience-details').value,
    }));

    const projects = Array.from(projectsContainer.querySelectorAll('.project-group')).map(group => ({
        title: group.querySelector('.project-title').value,
        details: group.querySelector('.project-details').value,
    }));


    const skillsList = skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');

    // Generate HTML for experiences
    const experienceHTML = experiences.map(exp => `
        <ul>
            <li><strong>${exp.position}</strong> | <strong>${exp.company}</strong> <span style="float: right;">${exp.duration}</span></li>
                <p>${exp.details}</p>
        </ul>
    `).join('');

    // Generate HTML for projects
    const projectHTML = projects.map(proj => `
        <ul>
            <li><strong>${proj.title}</strong></li>
            <p>${proj.details}</p>
        </ul>
    `).join('');



    if (!name || !email || !phone) {
        alert('Please fill out Name, Email, and Phone.');
        return;
    }


    previewSection.classList.remove("hidden");
    builderResume.classList.add("hidden");






    preview.innerHTML = `
    <head>
    <style>
        #resume-preview body {
            border-radius: 8px;
            font-family: Calibri, Times New Roman, Arial, sans-serif;
            background-color: white;
            color: #333;
            line-height: 1.6;
        }
        #resume-preview .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        #resume-preview h1 {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 10px;
        }
        #resume-preview .contact-info {
            text-align: center;
            margin-bottom: 20px;
            font-size: 0.9rem;
        }
        #resume-preview .contact-info span {
            display: block;
            margin-bottom: 5px;
        }
        #resume-preview section {
            margin-bottom: 20px;
        }
        #resume-preview h2 {
            border-bottom: 2px solid #007bff;
            color: #007bff;
            font-size: 1.5rem;
            margin-bottom: 10px;
        }
        #resume-preview .content {
            margin-left: 20px;
        }
        #resume-preview .content ul {
            list-style-type: disc;
            padding-left: 20px;
        }
        #resume-preview .content ul li {
            margin-bottom: 5px;
        }
        #resume-preview .responsibility, .achievement {
            margin-left: 20px;
        }
    </style>
</head>
<body class="container">
    <!-- <div class="container"> -->
        <h1>${name}</h1>
        <div class="contact-info">
            <span>${email} | +91-${phone}</span>
        </div>

        <section>
            <h2>Experience</h2>
            <div class="content">${experienceHTML}</div>
        </section>

        <section>
            <h2>Projects</h2>
            <div class="content">${projectHTML}</div>
        </section>

        <section>
            <h2>Education</h2>
            <div class="content">
                <p>${degree} | ${college} <span style="float: right;">CGPA: ${cgpa} | ${batch}</span></p>
                <p>XII (${board}) | ${school} <span style="float: right;">${percentage}% | ${year}</span></p>
            </div>
        </section>

        <section>
            <h2>Skills</h2>
            <div class="content">
                <ul>
                    ${skillsList}
                </ul>
            </div>
        </section>

        <section>
            <h2>Achievements</h2>
            <div class="achievement">
                <p>${achievements}</p>
            </div>
        </section>
    <!-- </div> -->
</body>
    `;

    // Enable the Download button
    downloadButton.disabled = false;
});

const { jsPDF } = window.jspdf;

// Download as PDF
const options = {
    margin: [5, 5, 5, 5], // top, left, bottom, right
    filename: 'resume.pdf',
    html2canvas: {
        scale: 4, // Higher scale for better quality
    },
    jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
    },
};

downloadButton.addEventListener('click', () => {
    const previewContent = document.getElementById('resume-preview');
    html2pdf().set(options).from(previewContent).save();
});




let home = document.querySelector(".home-section");
let template = document.querySelector(".template-section");
let next = document.querySelector("#next");
let back = document.querySelector("#back");

function buildResume() {
    // console.log("Button Clicked!!");

    next.classList.add("hidden");
    back.classList.remove("hidden");
    builderResume.classList.add("hidden");
    home.classList.add("hidden");
    template.classList.remove("hidden");

}

function builder(event) {
    // Prevent default button/link behavior
    if (event) event.preventDefault();

    // Hide template section and show the builder section
    template.classList.add("hidden");
    builderResume.classList.remove("hidden");
}


function returnHome() {

    back.classList.add("hidden");
    next.classList.remove("hidden");

    home.classList.remove("hidden");
    template.classList.add("hidden");
    builderResume.classList.add("hidden");
    previewSection.classList.add("hidden");
}


function backBuilder(){
    previewSection.classList.add("hidden");
    builderResume.classList.remove("hidden");
}