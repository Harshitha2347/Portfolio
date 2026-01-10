import projects from "./data/projects.js";
import { motion } from "framer-motion";

const sectionAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

/* ================= THEME DETECTION ================= */

// 1️⃣ Read from Vite env
const envTarget = import.meta.env.VITE_DEPLOY_TARGET;

// 2️⃣ Fallback based on hostname (VERY IMPORTANT)
const hostname = window.location.hostname;

let deployTarget = envTarget;

if (!deployTarget) {
  if (hostname.includes("github.io")) deployTarget = "github";
  else if (hostname.includes("netlify.app")) deployTarget = "netlify";
  else if (hostname.includes("vercel.app")) deployTarget = "vercel";
  else deployTarget = "github";
}

/* ================= THEME CONFIG ================= */

const themes = {
  github: {
    name: "GitHub Pages",
    background:
      "radial-gradient(circle at top, #2a0a3d 0%, #14001f 45%, #0a0014 100%)",
    cardBg: "linear-gradient(180deg, #1f0030 0%, #12001f 100%)",
    border: "#6d28d9",
    primary: "#a855f7",
    secondary: "#d8b4fe",
    text: "#ede9fe",
    muted: "#e9d5ff"
  },

  netlify: {
    name: "Netlify",
    background:
      "radial-gradient(circle at top, #e0f2fe 0%, #f0f9ff 45%, #ffffff 100%)",
    cardBg: "#ffffff",
    border: "#bae6fd",
    primary: "#38bdf8",
    secondary: "#0ea5e9",
    text: "#0f172a",
    muted: "#334155"
  },

  vercel: {
    name: "Vercel",
    background:
      "radial-gradient(circle at top, #faf5ff 0%, #ffffff 45%, #f5f3ff 100%)",
    cardBg: "#ffffff",
    border: "#ddd6fe",
    primary: "#a78bfa",
    secondary: "#7c3aed",
    text: "#1e1b4b",
    muted: "#4338ca"
  }
};

const theme = themes[deployTarget];

/* ================================================= */

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: theme.background,
        color: theme.text,
        fontFamily: "Inter, Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        position: "relative"
      }}
    >
      {/* THEME INDICATOR */}
      <div
        style={{
          position: "fixed",
          top: "16px",
          right: "18px",
          fontSize: "12px",
          padding: "6px 14px",
          borderRadius: "999px",
          background: theme.cardBg,
          border: `1px solid ${theme.border}`,
          color: theme.primary,
          zIndex: 1000
        }}
      >
        {theme.name} theme
      </div>

      <div style={{ maxWidth: "1200px", width: "100%", padding: "72px 24px" }}>
        {/* ABOUT */}
        <motion.section {...sectionAnimation} style={{ marginBottom: "110px" }}>
          <h1 style={{ fontSize: "44px", marginBottom: "6px" }}>
            Harshitha B
          </h1>
          <h3 style={{ fontWeight: 400, color: theme.secondary }}>
            Integrated MSc Data Science Student
          </h3>
          <p
            style={{
              marginTop: "24px",
              fontSize: "16.5px",
              lineHeight: "1.8",
              color: theme.muted,
              maxWidth: "900px"
            }}
          >
            Data Science student with hands-on experience in machine learning,
            deep learning, and intelligent systems. Interested in applying
            analytical thinking and practical experimentation to build scalable,
            real-world AI solutions.
          </p>
        </motion.section>

        {/* EDUCATION */}
        <motion.section {...sectionAnimation} style={{ marginBottom: "120px" }}>
          <h2 style={{ marginBottom: "42px" }}>Education</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px"
            }}
          >
            {[
              {
                period: "2022 – 2027",
                title: "Integrated MSc Data Science",
                place: "Amrita Vishwa Vidyapeetham",
                score: "CGPA: 8.27 / 10"
              },
              {
                period: "2020 – 2022",
                title: "Higher Secondary Education (XII)",
                place: "Adwaith GNS Matric Higher Secondary School",
                score: "93%"
              },
              {
                period: "2018 – 2020",
                title: "Secondary Education (X)",
                place: "Adwaith GNS Matric Higher Secondary School",
                score: "96.4%"
              }
            ].map((edu, i) => (
              <div
                key={i}
                style={{
                  background: theme.cardBg,
                  border: `1px solid ${theme.border}`,
                  borderRadius: "18px",
                  padding: "26px"
                }}
              >
                <p style={{ color: theme.secondary, fontSize: "13px" }}>
                  {edu.period}
                </p>
                <h3 style={{ margin: "10px 0" }}>{edu.title}</h3>
                <p style={{ color: theme.muted }}>{edu.place}</p>
                <p style={{ marginTop: "6px" }}>{edu.score}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section {...sectionAnimation} style={{ marginBottom: "120px" }}>
          <h2 style={{ marginBottom: "36px" }}>Skills & Interests</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            {[
              "Machine Learning",
              "Deep Learning",
              "Natural Language Processing",
              "Artificial Intelligence",
              "Data Analytics",
              "Computer Vision",
              "Python",
              "SQL",
              "C#",
              "GraphQL",
              "LangGraph",
              "LLM-based Systems"
            ].map((skill, i) => (
              <span
                key={i}
                style={{
                  padding: "12px 22px",
                  borderRadius: "999px",
                  background: theme.primary,
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 500
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section {...sectionAnimation} style={{ marginBottom: "140px" }}>
          <h2 style={{ marginBottom: "52px" }}>Projects</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px"
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                style={{
                  background: theme.cardBg,
                  border: `1px solid ${theme.border}`,
                  borderRadius: "20px",
                  padding: "28px"
                }}
              >
                <h3 style={{ marginBottom: "12px" }}>{project.title}</h3>
                <p style={{ color: theme.muted, lineHeight: "1.65" }}>
                  {project.description}
                </p>

                <div
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px"
                  }}
                >
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "6px 14px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        border: `1px solid ${theme.primary}`,
                        color: theme.primary
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CERTIFICATIONS */}
        <motion.section {...sectionAnimation} style={{ marginBottom: "120px" }}>
          <h2 style={{ marginBottom: "28px" }}>Certifications</h2>

          <div
            style={{
              background: theme.cardBg,
              border: `1px solid ${theme.border}`,
              borderRadius: "22px",
              padding: "30px"
            }}
          >
            Deep learning for Computer Vision ·AI concepts and techniques · Data Analytics
            with Excel. Python for Data Science
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section {...sectionAnimation}>
          <div
            style={{
              background: theme.cardBg,
              border: `1px solid ${theme.border}`,
              borderRadius: "24px",
              padding: "40px",
              textAlign: "center"
            }}
          >
            <h2 style={{ marginBottom: "18px" }}>Get in Touch</h2>

            <p>
              <a
                href="mailto:harshithababu2316@gmail.com"
                style={{ color: theme.primary, textDecoration: "none" }}
              >
                📧 harshithababu2316@gmail.com
              </a>
            </p>

            <p>
              <a
                href="https://github.com/Harshitha2347"
                target="_blank"
                rel="noreferrer"
                style={{ color: theme.primary, textDecoration: "none" }}
              >
                💻 GitHub
              </a>
            </p>

            <p>
              <a
                href="https://www.linkedin.com/in/harshitha-b-619813353"
                target="_blank"
                rel="noreferrer"
                style={{ color: theme.primary, textDecoration: "none" }}
              >
                🔗 LinkedIn
              </a>
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default App;
