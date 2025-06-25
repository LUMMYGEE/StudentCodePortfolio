// Global Variables
let currentInput = "";
let operator = "";
let previousInput = "";
let calculatorDisplay = null;

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all features
  initializeTheme();
  initializeNavigation();
  initializeAnimations();
  initializeSkillBars();
  initializeCalculator();
  initializeContactForm();
  

  // Set initial theme icon
  updateThemeIcon();
});

// Theme Toggle Functionality
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon();

  // Add transition effect
  body.style.transition = "all 0.3s ease";
  setTimeout(() => {
    body.style.transition = "";
  }, 300);
}

document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");

  document.body.setAttribute("data-theme", theme);
}

function updateThemeIcon() {
  const themeIcon = document.getElementById("theme-icon");
  const currentTheme = document.body.getAttribute("data-theme");

  if (themeIcon) {
    themeIcon.className =
      currentTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }
}

// Mobile Menu Toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  
  navLinks?.classList.toggle('active');
  hamburger?.classList.toggle('active');
}

// Navigation Functionality
function initializeNavigation() {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Close mobile menu when link is clicked
      const navLinksContainer = document.querySelector('.nav-links');
      const hamburger = document.querySelector('.hamburger');
      navLinksContainer?.classList.remove('active');
      hamburger?.classList.remove('active');

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed header
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Update active navigation link on scroll
  window.addEventListener("scroll", function () {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });

    // Add shadow to navigation on scroll
    const nav = document.querySelector("nav");
    if (nav) {
      if (window.pageYOffset > 100) {
        nav.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
      } else {
        nav.style.boxShadow = "";
      }
    }
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }
  
  initializeNavigation();
});


// Animation Functions
function initializeAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Add fade-in class to elements and observe them
  const animateElements = document.querySelectorAll(
    ".timeline-item, .skill-category, .project-card"
  );
  animateElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
}

// Skill Bars Animation
function initializeSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");

  const skillObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillBar = entry.target;
          const width = skillBar.getAttribute("data-width");
          skillBar.style.width = width + "%";
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => {
    skillObserver.observe(bar);
  });
}

// Calculator Functions
function initializeCalculator() {
  calculatorDisplay = document.getElementById("calc-display");
  if (calculatorDisplay) {
    calculatorDisplay.value = "0";
  }
}

function appendToDisplay(value) {
  if (!calculatorDisplay) return;

  if (calculatorDisplay.value === "0" && value !== ".") {
    calculatorDisplay.value = value;
  } else {
    calculatorDisplay.value += value;
  }
}

function clearDisplay() {
  if (!calculatorDisplay) return;
  calculatorDisplay.value = "0";
  currentInput = "";
  operator = "";
  previousInput = "";
}

function deleteLast() {
  if (!calculatorDisplay) return;

  if (calculatorDisplay.value.length > 1) {
    calculatorDisplay.value = calculatorDisplay.value.slice(0, -1);
  } else {
    calculatorDisplay.value = "0";
  }
}

function calculate() {
  if (!calculatorDisplay) return;

  try {
    // Replace × with * for evaluation
    let expression = calculatorDisplay.value.replace(/×/g, "*");
    let result = eval(expression);

    // Handle division by zero
    if (!isFinite(result)) {
      calculatorDisplay.value = "Error";
      return;
    }

    // Round to avoid floating point issues
    result = Math.round(result * 100000000) / 100000000;
    calculatorDisplay.value = result.toString();

    // Add animation effect
    calculatorDisplay.style.transform = "scale(1.05)";
    setTimeout(() => {
      calculatorDisplay.style.transform = "scale(1)";
    }, 200);
  } catch (error) {
    calculatorDisplay.value = "Error";
  }
}

// Initial state
let questions = [];
let currentQuestionIndex = 0;
let score = 0;

function getRandomQuestions(allQuestions, questionCount) {
  // Shuffle array using Fisher-Yates algorithm
  const shuffled = [...allQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Return first 'count' questions
  return shuffled.slice(0, questionCount);
}

function selectLanguage() {
  const lang = document.getElementById("language-select").value;
  const questionCount = parseInt(
    document.getElementById("question-count").value
  );
  const nextButton = document.getElementById("next-btn");
  const restartButton = document.getElementById("restart-btn");

  if (lang) {
    let allQuestions = [];
    // Load questions based on selected language
    if (lang === "html") {
      allQuestions = htmlQuestions;
    } else if (lang === "css") {
      allQuestions = cssQuestions;
    } else if (lang === "javascript") {
      allQuestions = jSQuestions;
    }

      // Get random subset of questions
        questions = getRandomQuestions(allQuestions, questionCount);

    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();

    // Show both buttons when language is selected
    if (nextButton) nextButton.style.display = "inline-block";
    if (restartButton) restartButton.style.display = "inline-block";
  } else {
    // Hide both buttons when no language selected
    if (nextButton) nextButton.style.display = "none";
    if (restartButton) restartButton.style.display = "none";
  }
}

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("quiz-options");
  const resultElement = document.getElementById("quiz-result");

  if (!questionElement || !optionsElement) return;

  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "quiz-btn";
      button.textContent = option;
      button.onclick = () => selectAnswer(index);
      optionsElement.appendChild(button);
    });

    if (resultElement) {
      resultElement.style.display = "none";
      resultElement.classList.remove("correct", "incorrect");
    }

    // Keep next button visible throughout the quiz
  } else {
    showQuizResults();
  }
}

function selectAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const resultElement = document.getElementById("quiz-result");
  const nextButton = document.getElementById("next-btn");
  const buttons = document.querySelectorAll(".quiz-btn");

  buttons.forEach((btn) => (btn.disabled = true));

  if (resultElement) {
    resultElement.style.display = "block";

    if (selectedIndex === currentQuestion.correct) {
      score++;
      resultElement.textContent = "Correct! Well done! 🎉";
      resultElement.classList.add("correct");
      buttons[selectedIndex].style.backgroundColor = "#28a745";
      buttons[selectedIndex].style.color = "white";
    } else {
      resultElement.textContent = `Incorrect. The correct answer is: ${
        currentQuestion.options[currentQuestion.correct]
      }`;
      resultElement.classList.add("incorrect");
      buttons[selectedIndex].style.backgroundColor = "#dc3545";
      buttons[selectedIndex].style.color = "white";
      buttons[currentQuestion.correct].style.backgroundColor = "#28a745";
      buttons[currentQuestion.correct].style.color = "white";
    }
  }

  if (nextButton) {
    nextButton.style.display = "block";
  }
}

function nextQuestion() {
  currentQuestionIndex++;

  const buttons = document.querySelectorAll(".quiz-btn");
  buttons.forEach((btn) => {
    btn.disabled = false;
    btn.style.backgroundColor = "";
    btn.style.color = "";
  });

  loadQuestion();
}

function showQuizResults() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("quiz-options");
  const resultElement = document.getElementById("quiz-result");
  const nextButton = document.getElementById("next-btn");

  if (questionElement) {
    questionElement.textContent = `Quiz Complete! Your Score: ${score}/${questions.length}`;
  }

  if (optionsElement) {
    optionsElement.innerHTML = "";
  }

  if (resultElement) {
    let message = "";
    const percentage = (score / questions.length) * 100;

    if (percentage >= 80) {
      message = "Excellent! You really know your web development! 🌟";
    } else if (percentage >= 60) {
      message = "Good job! Keep learning and practicing! 👍";
    } else {
      message = "Keep studying! You'll get better with practice! 📚";
    }

    resultElement.textContent = message;
    resultElement.style.display = "block";
    resultElement.classList.add("correct");
  }

  if (nextButton) {
    nextButton.style.display = "none";
  }

  const restartButton = document.getElementById("restart-btn");
  if (restartButton) {
    restartButton.style.display = "block";
  }
}

function restartQuiz() {
  // Reset core data
  questions = [];
  currentQuestionIndex = 0;
  score = 0;

  // Reset UI
  document.getElementById("language-select").value = "";
  document.getElementById("question").innerText =
    "Please select a language to begin.";
  document.getElementById("quiz-options").innerHTML = "";
  document.getElementById("quiz-result").innerText = "";

  // Hide navigation buttons
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("restart-btn").style.display = "none";
}

// Contact Form Functions
function initializeContactForm() {
  const form = document.querySelector(".contact-form");
  if (form) {
    // Add input animations
    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      input.addEventListener("focus", function () {
        this.parentElement.classList.add("focused");
      });

      input.addEventListener("blur", function () {
        if (!this.value) {
          this.parentElement.classList.remove("focused");
        }
      });
    });
  }
  
  // Initialize EmailJS
  emailjs.init("oTeFxR44zIR7x5rjW"); // Replace with your EmailJS public key
}

// Initialize EmailJS
document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("oTeFxR44zIR7x5rjW"); // Replace with your EmailJS public key
});

function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const submitButton = form.querySelector(".submit-btn");
  const successMessage = document.getElementById("success-message");

  // Show loading state
  const originalText = submitButton.innerHTML;
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitButton.disabled = true;

  // Send email using EmailJS
  emailjs.sendForm('service_604uzni', 'template_5yw7b5i', form)
    .then(function(response) {
      
      // Show success message
      if (successMessage) {
        successMessage.style.display = "flex";
        successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      // Reset form
      form.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        if (successMessage) {
          successMessage.style.display = "none";
        }
      }, 5000);
      
    }, function(error) {
      alert('Failed to send message. Please try again.');
    })
    .finally(() => {
      // Reset button
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    });
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add smooth scrolling to all anchor links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 70;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    });
  });
});

// Keyboard shortcuts
document.addEventListener("keydown", function (e) {
  // Toggle theme with Ctrl + D
  if (e.ctrlKey && e.key === "d") {
    e.preventDefault();
    toggleTheme();
  }

  // Focus search with Ctrl/Cmd + K (if you add search later)
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    // Focus search input if it exists
  }
});

// Add typing effect to hero text (optional enhancement)
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Performance optimization: Lazy load images
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Add parallax effect to hero section (optional)
function initParallax() {
  const hero = document.querySelector(".hero");

  if (hero) {
    const parallaxElements = hero.querySelectorAll(".hero-text, .hero-image");

    window.addEventListener(
      "scroll",
      debounce(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        parallaxElements.forEach((element) => {
          element.style.transform = `translateY(${rate}px)`;
        });
      }, 10)
    );
  }
}

// Add easter egg (Konami code)
let konamiCode = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

document.addEventListener("keydown", function (e) {
  konamiCode.push(e.code);

  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    // Easter egg activated!
    document.body.style.animation = "rainbow 2s infinite";
    setTimeout(() => {
      document.body.style.animation = "";
    }, 4000);

    konamiCode = [];
  }
});

// Add rainbow animation for easter egg
const style = document.createElement("style");
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Export functions for global use (if needed)
window.portfolioFunctions = {
  toggleTheme,
  calculate,
  clearDisplay,
  deleteLast,
  appendToDisplay,
  selectAnswer,
  nextQuestion,
  submitForm,
};
