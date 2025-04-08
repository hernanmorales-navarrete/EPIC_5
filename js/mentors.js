document.addEventListener('DOMContentLoaded', function() {
  // Mentor data
  const mentorData = {
    mentor1: {
      name: "Wladimir Banda, Ph.D.",
      title: "Computational Astrophysics",
      bio: "I am a computational astrophysicist working at the boundary between astrophysical gas dynamics and magnetohydrodynamics. I am originally from Quito, Ecuador. I did my undergraduate studies at the Physics Department of Escuela Politécnica Nacional in Quito, and completed my PhD at the Research School of Astronomy and Astrophysics of the Australian National University in Canberra. I have worked as a physics lecturer and astrophysics researcher at several institutes, including Ecuador’s Meteorology Office (INAMHI), Observatorio Astronómico de Quito, Universidad Técnica de Ambato, Hamburg Observatory of Hamburg University, and more recently I joined Universidad Yachay Tech in Urcuquí. The main tools for my research are supercomputers. I use them to numerically simulate astrophysical gases in both the interstellar and circumgalactic media. I study how such flows evolve under different initial environmental conditions and relate the results to telescope observations of e.g. dense gas clouds embedded in hot winds, high-velocity clouds in galactic outflows, and turbulent clouds in the Galactic centre.",
      achievements: [
        "Shock-multicloud interactions in galactic outflows – II. Radiative fractal clouds and cold gas thermodynamics",
        "Structure and kinematics of shocked gas in Sgr B2: further evidence of a cloud-cloud collision from SiO emission maps",
        "Shock-multicloud interactions in galactic outflows – I. Cloud layers with lognormal density distributions",
        "Filament formation in wind-cloud interactions. II. Clouds with turbulent density, velocity, and magnetic fields"
      ],
      courses: [
        "Magnetohydrodynamics",
        "Astrophysical gas dynamics",
        "Computational fluid mechanics",
        "Galactic winds and the Galactic centre"
      ]
    },
    mentor2: {
      name: "Helga Dénes, Ph.D.",
      title: "Radio Astronomy & Astrophysics",
      bio: "Helga Dénes has a Masters degree in Astronomy from the Eötwös Lórand University in Budapest, Hungary. She obtain her PhD in Astrophysics in 2015 from Swinburne University of Technology in Melbourne, Australia. After her PhD she was a postdoctoral researcher jointly at CSIRO Astronomy and Space Science in Sydney and at The Australian National University in Canberra, Australia. After finishing her position in Sydney she was a postdoctoral researcher at ASTRON, The Netherlands Institute for Radio Astronomy. At the moment she is a Professor at Yachay Tech University in the School of Physical Sciences and Nanotechnology. Helga’s main scientific interest is how the gas content of galaxies influences their evolution. She works on both extragalactic and Galactic astrophysics topics and is a member of several large radio astronomy survey teams, such as the Apertif Imaging Surveys, the WALLABY Survey and the GASKAP Survey. She is a member of the International Astronomical Union (IAU) and the Astronomical Society of Australia (ASA).",
      achievements: [
        "New H I scaling relations to probe the H I content of galaxies via global H I-deficiency maps.",
        "Cold gas outflows from the Small Magellanic Cloud traced with ASKAP.",
        "H I-deficient galaxies in intermediate-density environments.",
        "Calibrating the HISA temperature: Measuring the temperature of the Riegel-Crutcher cloud."
      ],
      courses: [
        "Galaxy evolution",
        "Gas content of galaxies",
        "Interstellar medium",
        "Radio astronomy surveys"
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