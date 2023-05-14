window.onload = function() {
  var sentence = "I am a Junior Designer with a software development background with over 3 years of experience.";
  var typingText = document.getElementById("typing");

  function typeSentence(index) {
    if (index < sentence.length) {
      typingText.innerHTML += sentence.charAt(index);
      index++;
      setTimeout(function() {
        typeSentence(index);
      }, 45);
    }
  }

  typeSentence(0);
};

// Get the toggle button element
var toggleButton = document.getElementById('darkModeToggle');

// Add event listener to the toggle button
toggleButton.addEventListener('click', function() {
  // Toggle the "dark-mode" class on the body element
  document.body.classList.toggle('dark-mode');
});



function toggleContact() {
  var contactContent = document.getElementById("contact-content");
  if (contactContent.style.display === "none") {
    contactContent.style.display = "block";
  } else {
    contactContent.style.display = "none";
  }
}


function displayText(section) {
  var text = "";
  if (section === "work-experience") {
    text = "<h4>Work Experience</h4><h5>Digital Marketing Intern – Dublin Coding School – February 2023 to present</h5><p>General and Detailed Knowledge about tech coursers provided by the company, including UX/UI Design, Web Development, Quality assurance testing, Data analysis and CyberSecurity.</p><p>Write blogs, manager social media and web channels. WordPress. Use of software such as Canvas, Figma, Photoshop.</p><p> Event marketing and create events for digital marketing campaigns, participate on meetings, engaging with students and IT staff, Including translations and administrative skills.</p><p>Published Blog Post: Interview of a professional UX/UI designer and developer. Available on the Company's Website.</p><h5>Fresh food Manager and Spar Assistant Manager - December 2021 to Present</h5><p>Managing, hiring and training staff on Insomnia, Deli, Spar and Subway, make and participate on regular meetings, Including over shop floor supervision and management.</p><p>Make sure the standards are achieved and take care of all stock levels, send payroll and regular reports.</p><p>Implement new products and deals in order to increase revenue, set margins and prices to get more profit.</p><p>Assist EHO (Environmental Health) auditors from EIQA (Excellence Ireland Quality Association) and BWG to carry out Corrective Actions.</p>";
  } else if (section === "education") {
    text = "<h4>Education</h4><p>Bachelor of Science in Computing and Information Technology – CCT College Dublin NFQ level 8 - 2020 to present</p>";
  } else if (section === "personal-projects") {
    text = "<h4>Certifications</h4><p>Java LinkedIn Skill Assessment - Sep 2022</p><p>Python Programming – CCT College Dublin - Aug 2022</p><p>Diploma in Digital Marketing -CCT College Dublin - Aug 2021</p><p>Food Safety Training for Management level 3 - BWG foods UC - Sep 2022</p><p>Atlas Language School – Advanced Level English certification</p>";
  } else if (section === "mentoring-and-volunteering") {
    text = "<h4>Mentoring and Volunteering:</h4><h5>Student Mentoring Academy - CCT College Dublin - September 2021 to present</h5><p>Mentoring the subjects: JAVA, PYTHON, MATH, NETWORKING and DATABASES</p><h5>Sales Assistant voluntary at St Vincent de Paul in George´s Street – Ireland, May 2019 to September 2019</h5><p>Specific housekeeping, organisation of books and knowledge about it, cooperation with manager, conference members and other volunteers.</p>";
  } else if (section === "soft-skills") {
    text = "<h4>Soft Skills:</h4><p> I fluently speak two languages: Portuguese and English, I also have elementary proficiency in Spanish and basic knowledge in Italian.</p><p>On my free time I enjoy reading and surfing. But I am always looking for new hobbies, and I have a keen interrest in music, I play guitar and piano, and for the moment I am self taughting ukulele.</p>";
  }
  document.getElementById("about-me").innerHTML = text;

  // Scroll to the about-me div
  var aboutMeDiv = document.getElementById("about-me");
  aboutMeDiv.scrollIntoView({ behavior: "smooth" });
}
