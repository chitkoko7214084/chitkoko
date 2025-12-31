<template>
  <div class="scroll-smooth">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <ul class="flex gap-8 list-none">
          <li><a href="#home" class="text-gray-600 font-medium hover:text-blue-500 transition-colors">Home</a></li>
          <li><a href="#about" class="text-gray-600 font-medium hover:text-blue-500 transition-colors">About</a></li>
          <li><a href="#education" class="text-gray-600 font-medium hover:text-blue-500 transition-colors">Education</a></li>
          <li><a href="#resume" class="text-gray-600 font-medium hover:text-blue-500 transition-colors">Resume</a></li>
          <li><a href="#projects" class="text-gray-600 font-medium hover:text-blue-500 transition-colors">Projects</a></li>
          <li><a href="#contact" class="text-gray-600 font-medium hover:text-blue-500 transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-center px-8">
      <div class="max-w-4xl">
        <img src="./assets/profile.jpg" alt="Chit Ko Ko" class="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-2xl object-cover">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Hi, everyone</h1>
        <p class="text-2xl md:text-3xl mb-4 opacity-90">I am a Software Engineer.</p>
        <p class="text-lg md:text-xl mb-8 opacity-80">Creating beautiful and functional web experiences</p>
        <a href="#contact" class="inline-block px-10 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">Get In Touch</a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
        <p class="text-center text-xl max-w-3xl mx-auto mb-8 text-gray-600">
          I'm a passionate web developer with experience in modern web technologies.
          I love creating clean, efficient, and user-friendly applications.
        </p>
        <div class="flex justify-center flex-wrap gap-4">
          <span class="px-6 py-2 bg-white rounded-full font-medium text-indigo-600 shadow-md">Vue.js</span>
          <span class="px-6 py-2 bg-white rounded-full font-medium text-indigo-600 shadow-md">JavaScript</span>
          <span class="px-6 py-2 bg-white rounded-full font-medium text-indigo-600 shadow-md">HTML/CSS</span>
          <span class="px-6 py-2 bg-white rounded-full font-medium text-indigo-600 shadow-md">Node.js</span>
          <span class="px-6 py-2 bg-white rounded-full font-medium text-indigo-600 shadow-md">Git</span>
          <span class="px-6 py-2 bg-white rounded-full font-medium text-indigo-600 shadow-md">Flask</span>
          <span class="px-6 py-2 bg-white rounded-full font-medium text-indigo-600 shadow-md">SQL</span>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="py-24 px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Education</h2>
        <div class="max-w-4xl mx-auto space-y-8">
          <div class="bg-white rounded-xl shadow-lg p-8 border-l-4 border-indigo-600">
            <div class="flex justify-between items-start flex-wrap gap-4 mb-4">
              <div>
                <h3 class="text-2xl font-bold text-gray-800">Bachelor's Degree in Computer Science</h3>
                <p class="text-lg text-indigo-600 font-semibold mt-2">Ball State University</p>
              </div>
              <span class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium">2020 - 2024</span>
            </div>
            <p class="text-gray-600">Completed coursework in software development, database systems, web technologies, and algorithms.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Resume Section -->
    <section id="resume" class="py-24 px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Work Experience</h2>
        <div class="max-w-4xl mx-auto space-y-8">
          <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <div class="flex justify-between items-start flex-wrap gap-4 mb-4">
              <div>
                <h3 class="text-2xl font-bold text-gray-800">Web Developer</h3>
                <p class="text-lg text-indigo-600 font-semibold mt-2">Freelance</p>
              </div>
              <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">2023 - Present</span>
            </div>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <span class="text-indigo-600 mr-2">•</span>
                <span>Developed and maintained responsive websites using Vue.js and Firebase</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-600 mr-2">•</span>
                <span>Collaborated with clients to gather requirements and deliver tailored solutions</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-600 mr-2">•</span>
                <span>Improved customer engagement by 40% through optimized web solutions</span>
              </li>
            </ul>
          </div>
          <div class="text-center mt-12">
            <a href="./assets/ChitKoKoResume_web (1).pdf" download class="inline-block px-10 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 hover:shadow-lg transition-all duration-300">
              Download Full Resume PDF
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-8 bg-white rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <h3 class="text-2xl font-semibold mb-4 text-gray-800">uniquetireandrepair</h3>
            <p class="text-gray-600 mb-4">Developed and maintained a functional, responsive website using Vue.js and Firebase, improving customer engagement by 40% and streamlining appointment scheduling. Collaborated with clients to gather requirements and delivered a tailored web solution, meeting 100% of business needs.</p>
            <a href="https://uniquetireandrepair.com/" class="text-indigo-600 font-semibold hover:text-purple-600 transition-colors">View Project →</a>
          </div>
          <div class="p-8 bg-white rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <h3 class="text-2xl font-semibold mb-4 text-gray-800">Project</h3>
            <p class="text-gray-600 mb-4">A brief description of your second project and the technologies used.</p>
            <a href="#" class="text-indigo-600 font-semibold hover:text-purple-600 transition-colors">View Project →</a>
          </div>
          <div class="p-8 bg-white rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <h3 class="text-2xl font-semibold mb-4 text-gray-800">Mightly Sport</h3>
            <p class="text-gray-600 mb-4">Developed a sports tournament management web application using Vue.js, Firebase Firestore, Storage, flask (python) and Cloud Functions. 
              Built scalable admin dashboard for approving teams, tracking players, and check the payment in real time.</p>
            <a href="https://mightysport.org/" class="text-indigo-600 font-semibold hover:text-purple-600 transition-colors">View Project →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto text-center">

        <!-- Social Links -->
        <div class="flex justify-center gap-8 flex-wrap">
          <a href="https://github.com/chitkoko7214084/" target="_blank" class="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" class="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">LinkedIn</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 bg-gray-800 text-white text-center">
      <p>&copy; 2025 Chit Ko Ko. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
