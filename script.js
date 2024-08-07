// function to load main header when page loads
window.onload = function() {
    var sentence = "I am currently working as a cloud engineer, at Amazon Web Services (AWS), before that, I was a Junior Designer with a software development background with over 3 years of experience.";
    var typingText = document.getElementById("typing");
//  function to type sentence 
    function typeSentence(index) {
        // if to write all sentence of the "sentence" variable
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
//   on click of the button
  toggleButton.addEventListener('click', function() {
// toggle dark-mode
    document.body.classList.toggle('dark-mode');
  });

//   function to hide/show display of the navbar (navbar contact part)
  function toggleContact() {
    var contactContent = document.getElementById("contact-content");
    if (contactContent.style.display === "none") {
      contactContent.style.display = "block";
    } else {
      contactContent.style.display = "none";
    }
  }
  
//   function to display text of the about me section
  function displayText(section) {
    var text = "";
    // adding in each separated section 
    if (section === "work-experience") {
      text = "<h4>Work Experience</h4><h5> CSA - AWS - July 2024 to Present </h5> <p> Work on critical, highly complex customer problems that may span multiple AWS services. </p> <p> Learn and use groundbreaking technologies.</p> <p> Write tutorials, how-to videos, and other technical articles for the developer community. </p> <p> Apply advanced troubleshooting techniques to provide unique solutions to customers. </p> <p> Interact with leading engineers around the world. </p> <p> Partner with AWS teams to help reproduce and resolve issues. </p> <p> Leverage customer support experience to provide feedback with AWS teams on how to improve. </p> <p> Drive communication during critical events. </p> <p> Drive projects that improve support-related processes and customers' technical support experience. </p> <h5>Junior Developer and Data Analyst Intern - Cosmos - September 2023 to June 2024 </h5><p> Understanding of web development and data analysis.</p><p>Familiarity with HTML, CSS, JavaScript and database management systems like MySQL or MongoDB.</p><p>Grasp of user experience design principles.</p><p>Team-oriented mindset and proactive approach to learning and problem solving.</p><p>Experience/coursework in back-end technologies like PHP or Node.js.</p><p>Understanding of data analysis tools such as Excel or Python libraries like Pandas.</p><p>Excellent communication skills, both written and verbal.</p><h5>Digital Marketing Intern - Dublin Coding School - February 2023 to September 2023 </h5><p>General and Detailed Knowledge about tech coursers provided by the company, including UX/UI Design, Web Development, Quality assurance testing, Data analysis and CyberSecurity.</p><p>Write blogs, manager social media and web channels. WordPress. Use of software such as Canvas, Figma, Photoshop.</p><p> Event marketing and create events for digital marketing campaigns, participate on meetings, engaging with students and IT staff, Including translations and administrative skills.</p><p>Published Blog Post: Interview of a professional UX/UI designer and developer. Available on the Company's Website.</p><h5>Fresh food Manager and Spar Assistant Manager - December 2021 to June 2024 </h5><p>Managing, hiring and training staff on Insomnia, Deli, Spar and Subway, make and participate on regular meetings, Including over shop floor supervision and management.</p><p>Make sure the standards are achieved and take care of all stock levels, send payroll and regular reports.</p><p>Implement new products and deals in order to increase revenue, set margins and prices to get more profit.</p><p>Assist EHO (Environmental Health) auditors from EIQA (Excellence Ireland Quality Association) and BWG to carry out Corrective Actions.</p>";
    } else if (section === "education") {
      text = "<h4>Education</h4><p>Bachelor of Science in Computing and Information Technology – CCT College Dublin NFQ level 8 - September 2020 to May 2024 </p>";
    } else if (section === "personal-projects") {
      text = "<h4>Certifications</h4><p>AWS Academy Graduate - Cloud Foundations - Jan 2024</p><p>Java LinkedIn Skill Assessment - Sep 2022</p><p>Python Programming - CCT College Dublin - Aug 2022</p><p>Diploma in Digital Marketing -CCT College Dublin - Aug 2021</p><p>Food Safety Training for Management level 3 - BWG foods UC - Sep 2022</p><p>Atlas Language School – Advanced Level English certification</p>";
    } else if (section === "mentoring-and-volunteering") {
      text = "<h4>Mentoring and Volunteering:</h4><h5>Student Mentoring Academy - CCT College Dublin - September 2021 to July 2024 </h5><p>Mentoring the subjects: JAVA, PYTHON, MATH, NETWORKING and DATABASES</p><h5>Sales Assistant voluntary at St Vincent de Paul in George´s Street – Ireland, May 2019 to September 2019</h5><p>Specific housekeeping, organisation of books and knowledge about it, cooperation with manager, conference members and other volunteers.</p>";
    } else if (section === "soft-skills") {
      text = "<h4>Soft Skills:</h4><p> I fluently speak two languages: Portuguese and English, I also have elementary proficiency in Spanish and basic knowledge in Italian.</p><p>On my free time I enjoy reading and surfing. But I am always looking for new hobbies, and I have a keen interrest in music, I play guitar and piano, and for the moment I am self taughting ukulele.</p>";
    }

    document.getElementById("about-me").innerHTML = text;
  
    // Scroll to the about-me div, to show content after clicking the button 
    var aboutMeDiv = document.getElementById("about-me");
    aboutMeDiv.scrollIntoView({ behavior: "smooth" });
  }
  