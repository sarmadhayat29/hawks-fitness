// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navMenu = document.getElementById("navMenu")

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.98)"
  } else {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.95)"
  }
})

// Motivation Quotes
const quotes = [
  { text: "The only bad workout is the one that didn't happen.", author: "Unknown" },
  { text: "Success starts with self-discipline.", author: "Unknown" },
  { text: "Your body can stand almost anything. It's your mind you have to convince.", author: "Unknown" },
  { text: "Don't wish for it. Work for it.", author: "Unknown" },
  { text: "The pain you feel today will be the strength you feel tomorrow.", author: "Unknown" },
  {
    text: "Strength doesn't come from what you can do. It comes from overcoming what you thought you couldn't.",
    author: "Rikki Rogers",
  },
  { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
]

let currentQuoteIndex = 0

function rotateQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length
  const quote = quotes[currentQuoteIndex]
  document.getElementById("motivationQuote").textContent = quote.text
  document.getElementById("motivationAuthor").textContent = `— ${quote.author}`
}

// Rotate quotes every 5 seconds
setInterval(rotateQuote, 5000)

// Programs Filter
const filterButtons = document.querySelectorAll(".filter-btn")
const programCards = document.querySelectorAll(".program-card")

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter

    filterButtons.forEach((btn) => btn.classList.remove("active"))
    button.classList.add("active")

    programCards.forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  })
})

// Exercise Data
const exerciseData = {
  chest: [
    {
      name: "Barbell Bench Press",
      image: "public/barbell-bench-press.png",
      description:
        "The king of chest exercises. Lie on a bench and press the barbell up, focusing on chest contraction.",
    },
    {
      name: "Incline Dumbbell Press",
      image: "public/incline-dumbbell-press-exercise.jpg",
      description: "Targets upper chest. Set bench to 30-45 degrees and press dumbbells upward.",
    },
    {
      name: "Cable Flyes",
      image: "public/cable-flyes-chest-exercise.jpg",
      description: "Great for chest isolation. Bring cables together in front of you with a slight bend in elbows.",
    },
    {
      name: "Push-Ups",
      image: "public/push-ups-exercise-proper-form.jpg",
      description: "Classic bodyweight exercise. Keep body straight and lower chest to ground.",
    },
  ],
  back: [
    {
      name: "Deadlift",
      image: "public/deadlift-exercise-proper-form.jpg",
      description: "Full back developer. Lift barbell from ground keeping back straight and core tight.",
    },
    {
      name: "Pull-Ups",
      image: "public/pull-ups-exercise-lat-workout.jpg",
      description: "Best upper back exercise. Pull yourself up until chin clears the bar.",
    },
    {
      name: "Barbell Rows",
      image: "public/barbell-rows-back-exercise.jpg",
      description: "Builds back thickness. Bend over and row barbell to lower chest.",
    },
    {
      name: "Lat Pulldowns",
      image: "public/lat-pulldown-cable-exercise.jpg",
      description: "Great for lat width. Pull bar down to upper chest with wide grip.",
    },
  ],
  legs: [
    {
      name: "Barbell Squats",
      image: "public/barbell-squats-leg-exercise.jpg",
      description: "King of leg exercises. Squat down until thighs parallel to ground.",
    },
    {
      name: "Romanian Deadlifts",
      image: "public/deadlift-exercise-proper-form.jpg",
      description: "Targets hamstrings. Lower barbell along legs keeping back straight.",
    },
    {
      name: "Leg Press",
      image: "public/barbell-squats-leg-exercise.jpg",
      description: "Quad builder. Push platform away with feet shoulder-width apart.",
    },
    {
      name: "Lunges",
      image: "public/barbell-squats-leg-exercise.jpg",
      description: "Unilateral leg developer. Step forward and lower back knee toward ground.",
    },
  ],
  shoulders: [
    {
      name: "Overhead Press",
      image: "public/overhead-press-shoulder-exercise.jpg",
      description: "Main shoulder builder. Press barbell overhead from shoulders.",
    },
    {
      name: "Lateral Raises",
      image: "public/lateral-raises-dumbbell-shoulders.jpg",
      description: "Side delt isolation. Raise dumbbells out to sides until shoulder height.",
    },
    {
      name: "Face Pulls",
      image: "public/face-pulls-cable-rear-delts.jpg",
      description: "Rear delt and posture. Pull rope toward face with elbows high.",
    },
    {
      name: "Arnold Press",
      image: "public/arnold-press-dumbbell-exercise.jpg",
      description: "All-around shoulder developer. Rotate palms while pressing dumbbells up.",
    },
  ],
  arms: [
    {
      name: "Barbell Curls",
      image: "public/barbell-curls-biceps-exercise.jpg",
      description: "Classic bicep builder. Curl barbell up keeping elbows stationary.",
    },
    {
      name: "Tricep Dips",
      image: "public/tricep-dips-exercise-proper-form.jpg",
      description: "Best tricep mass builder. Lower body between parallel bars.",
    },
    {
      name: "Hammer Curls",
      image: "public/hammer-curls-dumbbell-biceps.jpg",
      description: "Targets brachialis. Curl dumbbells with neutral grip.",
    },
    {
      name: "Skull Crushers",
      image: "public/tricep-pushdown-cable-exercise.jpg",
      description: "Tricep isolation. Lower barbell to forehead and extend back up.",
    },
  ],
  core: [
    {
      name: "Planks",
      image: "public/push-ups-exercise-proper-form.jpg",
      description: "Core stability. Hold body straight in push-up position on forearms.",
    },
    {
      name: "Russian Twists",
      image: "public/deadlift-exercise-proper-form.jpg",
      description: "Oblique developer. Rotate torso side to side while leaning back.",
    },
    {
      name: "Hanging Leg Raises",
      image: "public/pull-ups-exercise-lat-workout.jpg",
      description: "Lower ab killer. Raise legs while hanging from bar.",
    },
    {
      name: "Cable Crunches",
      image: "public/cable-flyes-chest-exercise.jpg",
      description: "Upper ab focus. Crunch down using cable resistance.",
    },
  ],
}

// Load exercises
function loadExercises(muscle) {
  const grid = document.getElementById("exercisesGrid")
  grid.innerHTML = ""

  exerciseData[muscle].forEach((exercise) => {
    const card = document.createElement("div")
    card.className = "exercise-card"
    card.innerHTML = `
            <img src="${exercise.image}" alt="${exercise.name}" class="exercise-image" onerror="this.src='https://via.placeholder.com/300x200?text=${exercise.name}'">
            <div class="exercise-info">
                <h3>${exercise.name}</h3>
                <span class="exercise-category">${muscle.toUpperCase()}</span>
                <p>${exercise.description}</p>
            </div>
        `
    grid.appendChild(card)
  })
}

// Exercise tabs
const exerciseTabs = document.querySelectorAll(".exercise-tab")
exerciseTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    exerciseTabs.forEach((t) => t.classList.remove("active"))
    tab.classList.add("active")
    loadExercises(tab.dataset.muscle)
  })
})

// Load default exercises (chest)
loadExercises("chest")

// Workout Schedules
const scheduleData = {
  beginner: [
    { day: "Monday", workout: "Upper Body - Push-ups, Dumbbell Rows, Shoulder Press (3 sets x 10 reps)" },
    { day: "Tuesday", workout: "Lower Body - Bodyweight Squats, Lunges, Calf Raises (3 sets x 12 reps)" },
    { day: "Wednesday", workout: "Rest or Light Cardio - 20-30 minutes walking" },
    { day: "Thursday", workout: "Full Body - Planks, Deadlifts, Lat Pulldowns (3 sets x 10 reps)" },
    { day: "Friday", workout: "Cardio & Core - 30 min cardio, Crunches, Russian Twists (3 sets)" },
    { day: "Saturday", workout: "Active Recovery - Yoga or Stretching" },
    { day: "Sunday", workout: "Rest Day" },
  ],
  intermediate: [
    {
      day: "Monday",
      workout: "Chest & Triceps - Bench Press 4x8, Incline DB Press 3x10, Dips 3x12, Tricep Extensions 3x12",
    },
    { day: "Tuesday", workout: "Back & Biceps - Deadlifts 4x6, Pull-ups 3x10, Rows 3x10, Barbell Curls 3x12" },
    { day: "Wednesday", workout: "Legs - Squats 4x8, Romanian Deadlifts 3x10, Leg Press 3x12, Calf Raises 4x15" },
    {
      day: "Thursday",
      workout: "Shoulders & Abs - Military Press 4x8, Lateral Raises 3x12, Face Pulls 3x15, Ab Circuit",
    },
    { day: "Friday", workout: "HIIT Cardio - 30 minutes interval training" },
    { day: "Saturday", workout: "Full Body Circuit - Compound movements, 3 rounds" },
    { day: "Sunday", workout: "Rest Day" },
  ],
  advanced: [
    {
      day: "Monday",
      workout: "Push Day - Bench Press 5x5, Incline Press 4x8, Overhead Press 4x8, Dips 3x12, Tricep Work 4 sets",
    },
    {
      day: "Tuesday",
      workout: "Pull Day - Deadlifts 5x5, Pull-ups 4x8, Barbell Rows 4x8, Face Pulls 3x15, Bicep Work 4 sets",
    },
    { day: "Wednesday", workout: "Legs - Squats 5x5, Front Squats 3x8, RDLs 4x8, Leg Curl 3x12, Calves 5x15" },
    {
      day: "Thursday",
      workout: "Push Day - Incline Bench 5x5, Flat DB Press 4x10, Arnold Press 4x10, Lateral Raises 4x12",
    },
    { day: "Friday", workout: "Pull Day - Weighted Pull-ups 4x6, T-Bar Rows 4x8, Cable Rows 3x12, Rear Delts 4x15" },
    { day: "Saturday", workout: "Legs & Conditioning - Front Squats 4x8, Bulgarian Splits 3x10, HIIT Cardio 20 min" },
    { day: "Sunday", workout: "Active Recovery - Light cardio, mobility work" },
  ],
}

function loadSchedule(level) {
  const content = document.getElementById("scheduleContent")
  content.innerHTML = ""

  scheduleData[level].forEach((day) => {
    const dayCard = document.createElement("div")
    dayCard.className = "schedule-day"
    dayCard.innerHTML = `
            <h3>${day.day}</h3>
            <ul><li>${day.workout}</li></ul>
        `
    content.appendChild(dayCard)
  })
}

const scheduleTabs = document.querySelectorAll(".schedule-tab")
scheduleTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    scheduleTabs.forEach((t) => t.classList.remove("active"))
    tab.classList.add("active")
    loadSchedule(tab.dataset.level)
  })
})

loadSchedule("beginner")

// Diet Plans
const dietData = {
  cutting: {
    title: "Cutting Diet Plan",
    description: "Designed for fat loss while preserving muscle mass. High protein, moderate carbs, lower fats.",
    macros: { calories: "2000", protein: "180g", carbs: "150g", fats: "60g" },
    meals: [
      { name: "Breakfast", foods: ["4 egg whites + 2 whole eggs", "Oatmeal (50g)", "Banana", "Black coffee"] },
      { name: "Mid-Morning Snack", foods: ["Protein shake (30g)", "Apple", "Almonds (15g)"] },
      {
        name: "Lunch",
        foods: ["Grilled chicken breast (200g)", "Brown rice (80g)", "Mixed vegetables", "Olive oil (1 tbsp)"],
      },
      { name: "Pre-Workout", foods: ["Rice cakes", "Peanut butter (1 tbsp)", "Banana"] },
      { name: "Post-Workout", foods: ["Protein shake (40g)", "Sweet potato (150g)"] },
      { name: "Dinner", foods: ["Lean beef or fish (200g)", "Quinoa (60g)", "Green salad", "Avocado (1/4)"] },
    ],
  },
  bulking: {
    title: "Bulking Diet Plan",
    description: "Optimized for muscle gain with caloric surplus. High protein, high carbs, moderate fats.",
    macros: { calories: "3500", protein: "200g", carbs: "400g", fats: "100g" },
    meals: [
      {
        name: "Breakfast",
        foods: ["6 whole eggs", "Oatmeal (100g)", "Banana", "Peanut butter (2 tbsp)", "Whole milk"],
      },
      { name: "Mid-Morning Snack", foods: ["Mass gainer shake (60g)", "Bagel with cream cheese", "Orange juice"] },
      {
        name: "Lunch",
        foods: ["Chicken breast (250g)", "White rice (150g)", "Mixed vegetables", "Olive oil (2 tbsp)"],
      },
      { name: "Pre-Workout", foods: ["Pasta (100g)", "Ground beef (150g)", "Banana"] },
      { name: "Post-Workout", foods: ["Protein shake (50g)", "White rice (100g)", "Honey"] },
      { name: "Dinner", foods: ["Salmon or steak (250g)", "Sweet potato (200g)", "Vegetables", "Butter (1 tbsp)"] },
      { name: "Before Bed", foods: ["Casein protein (30g)", "Greek yogurt", "Berries", "Nuts (30g)"] },
    ],
  },
  maintenance: {
    title: "Maintenance Diet Plan",
    description: "Balanced nutrition for maintaining current physique. Moderate protein, carbs, and fats.",
    macros: { calories: "2500", protein: "160g", carbs: "250g", fats: "80g" },
    meals: [
      { name: "Breakfast", foods: ["3 whole eggs + 2 egg whites", "Oatmeal (70g)", "Berries", "Coffee with milk"] },
      { name: "Mid-Morning Snack", foods: ["Protein shake (25g)", "Apple", "Almonds (20g)"] },
      { name: "Lunch", foods: ["Grilled chicken (180g)", "Jasmine rice (100g)", "Mixed salad", "Olive oil (1 tbsp)"] },
      { name: "Afternoon Snack", foods: ["Greek yogurt", "Granola", "Honey"] },
      { name: "Dinner", foods: ["Fish or lean beef (200g)", "Sweet potato (120g)", "Broccoli", "Avocado (1/3)"] },
      { name: "Evening Snack", foods: ["Cottage cheese", "Walnuts (15g)", "Berries"] },
    ],
  },
}

function loadDiet(plan) {
  const content = document.getElementById("dietContent")
  const diet = dietData[plan]

  content.innerHTML = `
        <div class="diet-plan active">
            <div class="diet-overview">
                <h3>${diet.title}</h3>
                <p>${diet.description}</p>
                <div class="diet-macros">
                    <div class="macro-item">
                        <div class="macro-value">${diet.macros.calories}</div>
                        <div class="macro-label">Calories</div>
                    </div>
                    <div class="macro-item">
                        <div class="macro-value">${diet.macros.protein}</div>
                        <div class="macro-label">Protein</div>
                    </div>
                    <div class="macro-item">
                        <div class="macro-value">${diet.macros.carbs}</div>
                        <div class="macro-label">Carbs</div>
                    </div>
                    <div class="macro-item">
                        <div class="macro-value">${diet.macros.fats}</div>
                        <div class="macro-label">Fats</div>
                    </div>
                </div>
            </div>
            <div class="diet-meals">
                ${diet.meals
                  .map(
                    (meal) => `
                    <div class="meal-card">
                        <h4>${meal.name}</h4>
                        <ul>
                            ${meal.foods.map((food) => `<li>${food}</li>`).join("")}
                        </ul>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `
}

const dietTabs = document.querySelectorAll(".diet-tab")
dietTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    dietTabs.forEach((t) => t.classList.remove("active"))
    tab.classList.add("active")
    loadDiet(tab.dataset.plan)
  })
})

loadDiet("cutting")

// BMI Calculator
const bmiForm = document.getElementById("bmiForm")
const bmiResult = document.getElementById("bmiResult")

bmiForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const weight = Number.parseFloat(document.getElementById("weight").value)
  const height = Number.parseFloat(document.getElementById("height").value) / 100 // convert cm to m

  if (weight && height) {
    const bmi = (weight / (height * height)).toFixed(1)
    let category = ""
    let recommendation = ""

    if (bmi < 18.5) {
      category = "Underweight"
      recommendation =
        "You may need to gain weight. Consider our Bulking program and high-calorie meal plans. Consult with our nutritionist for personalized guidance."
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal Weight"
      recommendation =
        "Great! You're in a healthy range. Focus on maintaining with our Maintenance program and balanced nutrition plans."
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight"
      recommendation =
        "Consider our Cutting program combined with cardio training. Our trainers can help you reach your ideal weight safely."
    } else {
      category = "Obese"
      recommendation =
        "We recommend starting with our beginner programs and consulting with our fitness experts for a safe, sustainable weight loss journey."
    }

    document.getElementById("bmiNumber").textContent = bmi
    document.getElementById("bmiCategory").textContent = category
    document.getElementById("bmiRecommendation").innerHTML = `<strong>Recommendation:</strong><br>${recommendation}`

    bmiResult.style.display = "block"
    bmiResult.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }
})

// Testimonials Slider
let currentTestimonial = 0
const testimonialCards = document.querySelectorAll(".testimonial-card")

function showTestimonial(index) {
  testimonialCards.forEach((card, i) => {
    card.classList.remove("active")
    if (i === index) {
      card.classList.add("active")
    }
  })
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length
  showTestimonial(currentTestimonial)
})

document.getElementById("nextBtn").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonialCards.length
  showTestimonial(currentTestimonial)
})

// Auto-rotate testimonials every 5 seconds
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonialCards.length
  showTestimonial(currentTestimonial)
}, 5000)

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (name && email && phone && message) {
    fetch("https://hawks-fitness-4skddjgqs-glitchauras-projects.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message || `Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message. Try again later.");
      });
  } else {
    alert("Please fill all fields");
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
