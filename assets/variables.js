const variables = {
  greetings: {
    morning: "Good Morning",
    day: "Good Day",
    afternoon: "Good Afternoon",
    evening: "Good Evening",
    night: "Good Night",
  },
  quotes: [
    { quote: "Di hari yang penuh dengan gemerlap bintang, kuucapkan selamat ulang tahun untuk kekasihku yang terindah, Dina Meilinda Salsabila. Km adalah sinar dalam kegelapan, keindahan dalam kekacauan, dan kebahagiaan dalam setiap detik hidupku. Terima kasih sudah mengisi setiap hari dengan cinta dan kehangatan. Semoga tahun ini membawa berkah yang tak terhitung jumlahnya untukmu. Selamat ulang tahun sayang♥️♥️♥️", author: "Dhmskvn" },
    { quote: "Di hari yang penuh dengan gemerlap bintang, kuucapkan selamat ulang tahun untuk kekasihku yang terindah, Dina Meilinda Salsabila. Km adalah sinar dalam kegelapan, keindahan dalam kekacauan, dan kebahagiaan dalam setiap detik hidupku. Terima kasih sudah mengisi setiap hari dengan cinta dan kehangatan. Semoga tahun ini membawa berkah yang tak terhitung jumlahnya untukmu. Selamat ulang tahun sayang♥️♥️♥️", author: "Dhsmkvn" },
    { quote: "Di hari yang penuh dengan gemerlap bintang, kuucapkan selamat ulang tahun untuk kekasihku yang terindah, Dina Meilinda Salsabila. Km adalah sinar dalam kegelapan, keindahan dalam kekacauan, dan kebahagiaan dalam setiap detik hidupku. Terima kasih sudah mengisi setiap hari dengan cinta dan kehangatan. Semoga tahun ini membawa berkah yang tak terhitung jumlahnya untukmu. Selamat ulang tahun sayang♥️♥️♥️", author: "Dhmskvn" },
    { quote: "Di hari yang penuh dengan gemerlap bintang, kuucapkan selamat ulang tahun untuk kekasihku yang terindah, Dina Meilinda Salsabila. Km adalah sinar dalam kegelapan, keindahan dalam kekacauan, dan kebahagiaan dalam setiap detik hidupku. Terima kasih sudah mengisi setiap hari dengan cinta dan kehangatan. Semoga tahun ini membawa berkah yang tak terhitung jumlahnya untukmu. Selamat ulang tahun sayang♥️♥️♥️", author: "Dhmskvn" },
    { quote: "Di hari yang penuh dengan gemerlap bintang, kuucapkan selamat ulang tahun untuk kekasihku yang terindah, Dina Meilinda Salsabila. Km adalah sinar dalam kegelapan, keindahan dalam kekacauan, dan kebahagiaan dalam setiap detik hidupku. Terima kasih sudah mengisi setiap hari dengan cinta dan kehangatan. Semoga tahun ini membawa berkah yang tak terhitung jumlahnya untukmu. Selamat ulang tahun sayang♥️♥️♥️", author: "Dhmskvn" },
  ],
  nicknames: ["Dinakuuu", "Dinakuu", "Dinaasygg", "Dinaakuu", "Dinakuu", "Dinaaaku"],
  generated: ["{greetings}, {nicknames}!!"],
};

const particlesConfig = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 8000,
      },
    },
    color: {
      value: "#000",
    },
    shape: {
      type: "image",
      stroke: {
        width: 2,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "./assets/heart.png",
        width: 50,
        height: 50,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        size_min: 0.5,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 80,
      color: "#000",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "right",
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
        distance: 150,
        line_linked: {
          opacity: 0.3,
        },
      },
      bubble: {
        distance: 800,
        size: 80,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 2,
      },
      remove: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};
