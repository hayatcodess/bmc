const profileContainer = document.getElementById("profile");

// Complete configured profile dataset 
const teamMembers = [
    {
        name: "Dr. Harris",
        role: "CEO & Founder",
        image: "https://i.pinimg.com/1200x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
        caption: "Dr. Harris is the founder of BMC. He spent his early career years researching and innovating bio-medical technologies."
    },
     {
        name: "Dr. Ajay Dhakal",
        role: " Lab Advisor",
        image: "https://i.pinimg.com/1200x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
        caption: "Dr. Ajay Dhakal is an oncologist with extensive experience in medicine and interests in cancer research."
    },
    
    {
        name: "Samantha Magowo",
        role: "Lab Member",
        image: "https://i.pinimg.com/1200x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
        caption: "Samantha is a dedicated lab member with extensive experience in biomedical research."
    },
     {
        name: "Jeffrey Bartley",
        role: " Bioengineer",
        image: "https://i.pinimg.com/1200x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
        caption: "Jeffrey is a skilled bioengineer with a passion for developing innovative solutions in biomedical research."
    },
     {
        name: "Justin M. Lipschutz",
        role: "Bioengineer",
        image: "https://i.pinimg.com/1200x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
        caption: "Justin is a skilled bioengineer with a passion for developing innovative solutions in biomedical research."
    },
     {
        name: "Zuhayr Baig",
        role: "Bioengineer",
        image: "https://i.pinimg.com/1200x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
        caption: "Zuhayr is a talented bioengineer with a strong background in developing cutting-edge medical devices."
    }
];

// Initialize container layout properties cleanly
profileContainer.style.padding = "20px 0";
profileContainer.style.display = "flex";
profileContainer.style.flexWrap = "wrap";
profileContainer.style.justifyContent = "center";
profileContainer.style.gap = "30px";

// Generate DOM cards by mapping content array 
function renderTeam() {
    profileContainer.innerHTML = teamMembers.map(member => `
        <div class="team-card">
            <img src="${member.image}" alt="${member.name}" class="team-img" />
            <div class="team-info">
                <h3>${member.name}</h3>
                <p class="role">${member.role}</p>
                <p class="caption">${member.caption}</p>
            </div>
        </div>
    `).join('');
}

// Execute logic when script compiles
renderTeam();
