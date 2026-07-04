var lastModal;

function changeClass(modalType) {
    document.getElementById("modal-c").className = modalType;
    document.body.classList.add("body-opened");
}

function returnBody(modalType) {
    document.body.classList.remove("body-opened");
}

function openModal(projectId) {
    changeClass('modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClick);
}

function openModalAbout(projectId) {
    changeClass('about-modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClickAbout);
}

function openModalDemo(projectId) {
    changeClass('demo-modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClickDemo);
}

function closeModal() {
    var modal = document.getElementById("myModal");
    var youtubeVideo = document.getElementById("youtubeVideo");
    returnBody();

    youtubeVideo.src = "";
    window.removeEventListener('click', outsideClick);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function closeModalAbout() {
    var modal = document.getElementById("myModal");

    returnBody();

    window.removeEventListener('click', outsideClickAbout);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function closeModalDemo() {
    var modal = document.getElementById("myModal");
    var youtubeVideo = document.getElementById("youtubeVideo");
    returnBody();

    youtubeVideo.src = "";
    window.removeEventListener('click', outsideClickDemo);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function outsideClick(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModal();
    }
}

function outsideClickAbout(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModalAbout();
    }
}

function outsideClickDemo(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModalDemo();
    }
}

function getProjectContent(projectId) {

    var videoId; // Set the YouTube video ID for each project
    var projectContent;

    // Determine the video ID and project information based on the selected project
    switch (projectId) {
        case 'about':
            videoId = 'N4vmPq09dN4?si=eyzXwmLVzzDp4Ayt';
            projectContent = `
                            <div class="about-title-bg">
                                <h2 class="project-title">About me</h2>
                            </div>
                         

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>
                              I'm Huyen, a Playable Ads Developer with six years of experience using Unity and Cocos Creator.
                                   </p>
                                </div>
                            </div>

                            <div class="project-stack">
                                <h2>Stack</h2>
                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/unity.png">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/csharp.png">
                                </a>                             

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/clanguage.png">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/javascript.png">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/htmllanguage.png">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/construct3.png">
                                </a>
                            </div>

                            <div class="close">
                                <span onclick="closeModalAbout()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'demo':
            videoId = 'X4AbyjhvVHM?si=X_6ZS1wjPM4crLG3';
            projectContent = `
                            <div class="demo-title-bg">
                                <h2 class="project-title">Demo reel</h2>
                            </div>

                            <div class="demo-video-BG">
                            <div class="demo-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>
Welcome! This is my demo reel showcasing a selection of my game development projects, highlighting the skills and creativity I've applied across different platforms. I hope you enjoy watching and feel inspired by the work!                                    </p>
                                </div>
                            </div>

                            <div class="demo-close">
                                <span onclick="closeModalDemo()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;

        case 'project1':
            videoId = 'N4vmPq09dN4?si=eyzXwmLVzzDp4Ayt';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>
                            
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/CakeSort_V20_Huyen_270126_applovin.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>`                   ;
            break;
        case 'project2':
            videoId = 'FlSIC41wyX4?si=sri-3iJzy4L83Xct';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>
                            
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/PA3_BlockHole_061025_Huyen__applovin.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>

                    
`                   ;
            break;
        case 'project3':
            videoId = 'FYDE9CoZ1YU?si=agUJZaT7XYShrXkz';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>
                            
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/ScrewSort.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>` ;
            break;
        case 'project4':
            videoId = 'gT8AB68s_2k?si=9lWQuuRO1j9Kbjin';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>
                            
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/Hexa_Slinky_Huyen_V1_170924_applovin.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>

                    
`                   ;
            break;
        case 'project5':
            videoId = 'cs_BVRnD4QU?si=wNPxuS40Bg4ij1Vz';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>
                            
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/Cooking_Sizzle_V1.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>

                    
`                   ;
            break;
        case 'project6':
            videoId = 'eK7_MLSFprU?si=GgySrIEi62Ylybsh';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>
                            
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/GoodsFrenzy_Huyen_V33_191125_Applovin.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>

                    
`                   ;
            break;
        case 'project7':
            videoId = '6iZYMm5oXdk?si=OHhVYIERtpBtTUa0';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>
                            
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/DrinkSort_Duy_V1_301025_applovin.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>

                    
`                   ;
            break;
        case 'project8':
            videoId = '_rkVQpotLIw?si=jvUrWaw5Q3xtb5Ub';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>
                            
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/LPG-6T8P-892_CoinJam_Huyen_V1_011024_applovin.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>

                    
`                   ;
            break;
        case 'project9':
            videoId = '8RWrj6cPtd0?si=NjWYzSLpEmjNZJco';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>                          
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/ScrewUnlock_Huyen_V1_070426_applovin.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>

                    
`                   ;
            break;
        case 'project10':
            videoId = 'YI0jJG-jhSo?si=VpCqWNVHP1jQJTjO';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>
                            
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/FlowerSort_V3_Huyen_14052025_Applovin.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>
                                                                                                                                                                                                                                                                                                            
                    
`                   ;
            break;
        case 'project11':
            videoId = 'b4Fqc6md3SQ?si=cbq8plc5bLiPIbt4';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>
                            
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/ST_V35_Huyen_210426_applovin.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>

                    
`                   ;
            break;
        case 'project12':
            videoId = 'piHodHzVQ28?si=nf1lvqtgdO9DZ8Jm';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>
                            
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/satis.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>

                    
`                   ;
            break;
        case 'project13':
            videoId = 'piHodHzVQ28?si=nf1lvqtgdO9DZ8Jm';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>
                            
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/CarBlast_Huyen_V22_160426_applovin.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>

                    
`                   ;
            break;
        case 'project14':
            videoId = 'piHodHzVQ28?si=nf1lvqtgdO9DZ8Jm';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>
                            
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/CupHero_Huyen_V6_030325_Unity.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>

                    
`                   ;
            break;
        case 'project15':
            videoId = 'piHodHzVQ28?si=nf1lvqtgdO9DZ8Jm';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>
                            
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/PA49_Corn_Trong_251225_applovin.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>

                    
`                   ;
            break;
        case 'project16':
            videoId = 'piHodHzVQ28?si=nf1lvqtgdO9DZ8Jm';
            projectContent = `
                           

                            <div class="project-video-BG">
                            <div class="project-video"><span class="iframe-close" onclick="closeModal()">&times;</span>
                            
                                <iframe id="youtubeVideo" width="1080" height="1920" src="https://huyenbk97.github.io/DemoPLY/P_547_V5_AL.html" frameborder="0" sandbox="allow-scripts allow-same-origin" allowfullscreen></iframe>
                            </div>
                            </div>

                    
`                   ;
            break;
    }


    return projectContent;
}

