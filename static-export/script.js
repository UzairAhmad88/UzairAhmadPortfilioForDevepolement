import * as THREE from "three";

const glow = document.querySelector(".cursor-glow");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

window.addEventListener("pointermove", (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

const ticker = document.querySelector(".ticker-strip div");

if (ticker) {
  ticker.innerHTML += ticker.innerHTML;
}

const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category || "";
      card.classList.toggle("hidden-project", filter !== "all" && !categories.includes(filter));
    });
  });
});

const pipelineButtons = document.querySelectorAll(".architecture-pipeline button");
const pipelineNote = document.querySelector(".pipeline-note");

pipelineButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    if (pipelineNote) pipelineNote.textContent = button.dataset.skill;
  });
  button.addEventListener("focus", () => {
    if (pipelineNote) pipelineNote.textContent = button.dataset.skill;
  });
  button.addEventListener("mouseleave", () => {
    if (pipelineNote) pipelineNote.textContent = "Hover a layer to reveal the skill behind it.";
  });
});

const tiltCards = document.querySelectorAll(".capability-card, .project-card, .featured-project, .lab-card");

tiltCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tilt-x", `${x * 3.5}deg`);
    card.style.setProperty("--tilt-y", `${y * -3.5}deg`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.removeProperty("--tilt-x");
    card.style.removeProperty("--tilt-y");
  });
});

const canvas = document.querySelector(".three-field");

if (canvas && !reduceMotion) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 8);

  const group = new THREE.Group();
  scene.add(group);

  const teal = new THREE.Color("#7ed8c4");
  const lavender = new THREE.Color("#bda6ff");
  const clay = new THREE.Color("#d2a071");

  const nodeGeometry = new THREE.IcosahedronGeometry(0.06, 1);
  const lineMaterial = new THREE.LineBasicMaterial({
    color: teal,
    transparent: true,
    opacity: 0.18,
  });

  const nodeMaterials = [
    new THREE.MeshBasicMaterial({ color: teal, transparent: true, opacity: 0.72 }),
    new THREE.MeshBasicMaterial({ color: lavender, transparent: true, opacity: 0.62 }),
    new THREE.MeshBasicMaterial({ color: clay, transparent: true, opacity: 0.58 }),
  ];

  const points = [];
  const nodeCount = 44;

  for (let index = 0; index < nodeCount; index += 1) {
    const radius = 1.5 + (index % 7) * 0.28;
    const angle = index * 0.78;
    const depth = Math.sin(index * 1.7) * 1.4;
    const point = new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.62, depth);
    points.push(point);

    const node = new THREE.Mesh(nodeGeometry, nodeMaterials[index % nodeMaterials.length]);
    node.position.copy(point);
    group.add(node);
  }

  for (let index = 0; index < points.length - 1; index += 1) {
    if (index % 3 === 0 || index % 5 === 0) {
      const geometry = new THREE.BufferGeometry().setFromPoints([points[index], points[(index + 7) % points.length]]);
      group.add(new THREE.Line(geometry, lineMaterial));
    }
  }

  const ringGeometry = new THREE.TorusGeometry(1.2, 0.004, 8, 96);
  const ringMaterial = new THREE.MeshBasicMaterial({ color: lavender, transparent: true, opacity: 0.18 });
  const rings = [0, 1, 2].map((index) => {
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.set(index * 0.7, index * 0.4, index * 0.9);
    ring.scale.setScalar(1 + index * 0.55);
    group.add(ring);
    return ring;
  });

  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener("pointermove", (event) => {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 0.5;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 0.5;
  });

  const resize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  window.addEventListener("resize", resize);
  resize();

  const animate = () => {
    group.rotation.y += 0.0018;
    group.rotation.x += 0.0007;
    group.position.x += (mouseX - group.position.x) * 0.025;
    group.position.y += (-mouseY - group.position.y) * 0.025;

    rings.forEach((ring, index) => {
      ring.rotation.x += 0.001 + index * 0.0004;
      ring.rotation.z -= 0.0012 + index * 0.0002;
    });

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();
}
