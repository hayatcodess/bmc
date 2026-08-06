const profileContainer = document.getElementById("profile");

// Complete configured profile dataset 
const teamMembers = [
    {
        name: "Dr. Harris",
        role: "CEO & Founder",
        image: "https://unsplash.com",
        caption: "Dr. Harris is the founder of BMC. He spent his early career years researching and innovating bio-medical technologies."
    },
    {
        name: "Jane Smith",
        role: "Lead Developer",
        image: "https://unsplash.com",
        caption: "Jane heads our system infrastructure architecture, converting intricate algorithms into practical software modules."
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
