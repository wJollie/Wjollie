// src/data/projects.js
export const projects = [
  {
    id: "home-server",
    title: "Home Server / NAS Cart",
    period: "2025",
    repo: "https://github.com/wJollie/home-server",
    summary:
      "32TB TrueNAS SCALE box for media, backup, and game hosting. Portable cart, airflow mods, and remote monitoring.",
    software: ["TrueNAS SCALE", "Docker", "Grafana", "Rust", "React"],
    hardware: ["Ryzen 5 3600", "4 8TB HDD", "1660 super", "APC UPS"],
    images: [
      "/Project-Images/Home-Server/Desktop.jpg",
      "/Project-Images/Home-Server/Cable Back.jpg",
      "/Project-Images/Home-Server/HD Store.jpg",
      "/Project-Images/Home-Server/In-Drawer.jpg",
      "/Project-Images/Home-Server/Monitoring.jpg",
      "/Project-Images/Home-Server/PC Back.jpg",
      "/Project-Images/Home-Server/Top.jpg",
    ],
    links: [
      { label: "Build Log", url: "https://…" },
      { label: "Live Dashboard", url: "https://…" },
    ],
  },

  // Add more projects below by copy/paste:
  // {
  //   id: "fpga-pwm",
  //   title: "FPGA PWM Motor Driver",
  //   period: "2024",
  //   repo: "https://github.com/wJollie/fpga-pwm",
  //   summary: "Verilog PWM with current limiting and Hall feedback; custom 4-layer PCB.",
  //   software: ["Verilog", "STM32", "KiCad"],
  //   hardware: ["BLDC", "Logic Analyzer", "4‑Layer PCB"],
  //   images: ["/Project-Images/fpga/1.jpg"],
  //   links: [{ label: "Demo Video", url: "https://…" }]
  // },
];
