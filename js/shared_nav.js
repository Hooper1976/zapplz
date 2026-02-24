/* css/shared_nav.js */
function injectHeader(title = "ZAPPLZ", showLogout = true) {
    const header = document.createElement('header');
    header.className = 'glass-header';
    header.innerHTML = `
        <div class="logo-brand" onclick="window.location.href='dashboard.html'" style="cursor:pointer">
            <img src="logo.png" style="width:30px; height:30px; object-fit:contain; border-radius:5px;">
            ${title}
        </div>
        <div style="display:flex; gap:15px; align-items:center;">
             <div style="font-size: 18px; color: var(--primary)"><i class="fas fa-bell"></i></div>
            ${showLogout ? '<div id="logoutBtn" style="font-size: 18px; color: #ef4444; cursor: pointer;"><i class="fas fa-sign-out-alt"></i></div>' : ''}
        </div>
    `;
    document.body.prepend(header);

    if (showLogout && document.getElementById('logoutBtn')) {
        document.getElementById('logoutBtn').onclick = async () => {
            const { createClient } = window.supabase;
            const sup = createClient("https://oxwpqwnhabldvfsujmvx.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94d3Bxd25oYWJsZHZmc3VqbXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4NTMzMDQsImV4cCI6MjA4NzQyOTMwNH0.ZDz0Pctbp9oq45QF8_4ObizhQfxglrGw9H0dhguHj5A");
            await sup.auth.signOut();
            window.location.href = 'index.html';
        };
    }
}

function injectBottomNav(activePage = "") {
    const nav = document.createElement('nav');
    nav.className = 'bottom-nav-zapplz';
    nav.innerHTML = `
        <a href="dashboard.html" class="nav-link-z ${activePage === 'home' ? 'active' : ''}">
            <i class="fas fa-home"></i>
            <span>Home</span>
        </a>
        <a href="chat.html" class="nav-link-z ${activePage === 'chat' ? 'active' : ''}">
            <i class="fas fa-comment-dots"></i>
            <span>Chat</span>
        </a>
        <a href="create_challenge.html" class="btn-plus-z">
            <i class="fas fa-plus"></i>
        </a>
        <a href="friends.html" class="nav-link-z ${activePage === 'friends' ? 'active' : ''}">
            <i class="fas fa-users"></i>
            <span>Freunde</span>
        </a>
        <a href="profile.html" class="nav-link-z ${activePage === 'profile' ? 'active' : ''}">
            <i class="fas fa-user-circle"></i>
            <span>Profil</span>
        </a>
    `;
    document.body.appendChild(nav);
}
