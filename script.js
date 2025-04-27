document.addEventListener("DOMContentLoaded", () => {
  // Inicializar partículas
  // Assuming particlesJS is a global function provided by a library
  // If not, you'll need to import or define it here.
  // For example, if it's in a separate file:
  // import particlesJS from './particles';

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffc44d",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffc44d",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5,
          },
        },
        bubble: {
          distance: 400,
          size: 4,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  })

  // Smooth scrolling para enlaces de anclaje
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Efecto de scroll en el header
  const header = document.querySelector("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "10px 0"
      header.style.backgroundColor = "rgba(10, 10, 10, 0.95)"
    } else {
      header.style.padding = "15px 0"
      header.style.backgroundColor = "rgba(10, 10, 10, 0.8)"
    }
  })

  // Animación para las tarjetas de características
  const featureCards = document.querySelectorAll(".feature-card")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    { threshold: 0.1 },
  )

  featureCards.forEach((card) => {
    card.style.opacity = 0
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    observer.observe(card)
  })

  // Efecto de hover para los botones
  const buttons = document.querySelectorAll(".btn")

  buttons.forEach((button) => {
    button.addEventListener("mouseover", function () {
      this.style.transform = "translateY(-5px)"
    })

    button.addEventListener("mouseout", function () {
      this.style.transform = "translateY(0)"
    })
  })
  // Efecto de carga para botones secundarios
  document.querySelectorAll('.btn-secondary, .btn-glow').forEach(button => {
    button.addEventListener('click', function(e) {
      // Prevent multiple clicks
      if(this.classList.contains('loading')) return;
      
      // Store original text
      const originalText = this.textContent;
      
      // Add loading state
      this.classList.add('loading');
      this.textContent = 'Añadiendo a Hydra Launcher...';

      // Restore after 3 seconds (or completion)
      setTimeout(() => {
        this.classList.remove('loading');
        this.textContent = originalText;
      }, 3000);
    });
  });
})
