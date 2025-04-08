document.addEventListener('DOMContentLoaded', function() {
  // Mentor data
  const mentorData = {
    mentor1: {
      name: "Dr. Ana Rodríguez",
      title: "Computational Astrophysics",
      bio: "Dr. Ana Rodríguez is a leading researcher in computational astrophysics with over 15 years of experience. She completed her Ph.D. at the University of Barcelona and has held positions at prestigious institutions including MIT and the Max Planck Institute for Astrophysics. Her research focuses on developing novel computational methods for simulating galaxy formation and evolution, with a particular emphasis on dark matter interactions. She has published over 50 papers in high-impact journals and mentored numerous graduate students.",
      achievements: [
        "Developed the GalaxyFormation.py framework for high-performance astrophysical simulations",
        "Lead researcher on the COSMOS dark matter mapping project",
        "2022 Recipient of the National Science Foundation's CAREER Award",
        "Guest lecturer at universities across Europe and the Americas"
      ],
      courses: [
        "Advanced Numerical Methods for Astrophysics",
        "Data Analysis Techniques for Large Astronomical Datasets",
        "Introduction to Parallel Computing for Scientific Applications"
      ]
    },
    mentor2: {
      name: "Prof. Carlos Mendoza",
      title: "Machine Learning & Biophysics",
      bio: "Professor Carlos Mendoza bridges the fields of machine learning and biophysics, creating innovative approaches to complex biological problems. After receiving his Ph.D. from Stanford University, he pioneered new computational methods for predicting protein structure and function. His interdisciplinary approach has led to breakthroughs in drug discovery and molecular dynamics simulations. He currently leads the Computational Biophysics Laboratory at Universidad Yachay Tech.",
      achievements: [
        "Creator of the BioPredictML algorithm for protein folding prediction",
        "Principal investigator on multiple NIH and NSF-funded research projects",
        "Published over 30 papers in journals including Nature Methods and PNAS",
        "Developed open-source tools used by thousands of researchers worldwide"
      ],
      courses: [
        "Machine Learning for Molecular Biology",
        "Computational Methods in Drug Discovery",
        "Statistical Physics of Biological Systems"
      ]
    },
    mentor3: {
      name: "Dr. María Gutiérrez",
      title: "Data Science & Image Analysis",
      bio: "Dr. María Gutiérrez specializes in the intersection of data science and image analysis, with applications ranging from medical imaging to remote sensing. She earned her doctorate from the Technical University of Madrid before joining the research faculty at Universidad de las Américas. Her work focuses on developing algorithms that can extract meaningful information from complex image datasets, with particular interest in neural network architectures for image segmentation and classification.",
      achievements: [
        "Developer of ImageAnalyticsPro, an open-source toolkit for scientific image processing",
        "Co-founder of the Latin American Network for Computational Imaging",
        "Recipient of the 2023 Innovation Award from the Ministry of Science and Technology",
        "Author of 'Modern Approaches to Scientific Image Analysis', a widely-used textbook"
      ],
      courses: [
        "Computer Vision Fundamentals",
        "Neural Networks for Image Processing",
        "Scientific Visualization Techniques"
      ]
    }
  };

  // Mentor modal functionality
  const mentorButtons = document.querySelectorAll('.mentor-more');
  const mentorModal = document.getElementById('mentorModal');
  const modalTitle = document.querySelector('#mentorModal .modal-title');
  const modalBody = document.querySelector('#mentorModal .modal-body');
  
  mentorButtons.forEach(button => {
    button.addEventListener('click', function() {
      const mentorId = this.getAttribute('data-mentor');
      const mentor = mentorData[mentorId];
      
      modalTitle.textContent = mentor.name;
      
      let achievementsHTML = '';
      mentor.achievements.forEach(achievement => {
        achievementsHTML += `<li>${achievement}</li>`;
      });
      
      let coursesHTML = '';
      mentor.courses.forEach(course => {
        coursesHTML += `<li>${course}</li>`;
      });
      
      modalBody.innerHTML = `
        <div class="row">
          <div class="col-md-4">
            <img src="/api/placeholder/300/300" alt="${mentor.name}" class="img-fluid">
          </div>
          <div class="col-md-8">
            <h4>${mentor.title}</h4>
            <p>${mentor.bio}</p>
            
            <h5>Key Achievements</h5>
            <ul>${achievementsHTML}</ul>
            
            <h5>Courses & Workshops</h5>
            <ul>${coursesHTML}</ul>
          </div>
        </div>
      `;
      
      // Show modal (using Bootstrap's modal method)
      $('#mentorModal').modal('show');
    });
  });
});