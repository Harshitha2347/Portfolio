import projects from "./data/projects.js";
import { motion } from "framer-motion";

const sectionAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background:
          "radial-gradient(circle at top, #2a0a3d 0%, #14001f 45%, #0a0014 100%)",
        color: "#ede9fe",
        fontFamily: "Inter, Arial, sans-serif",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%", padding: "72px 24px" }}>
        {/* ABOUT ME */}
        <motion.section {...sectionAnimation} style={{ marginBottom: "110px" }}>
          <h1 style={{ fontSize: "44px", marginBottom: "6px" }}>
            Harshitha B
          </h1>
          <h3 style={{ fontWeight: 400, color: "#d8b4fe" }}>
            Integrated MSc Data Science Student
          </h3>
          <p
            style={{
              marginTop: "24px",
              fontSize: "16.5px",
              lineHeight: "1.8",
              color: "#e9d5ff",
              maxWidth: "900px"
            }}
          >
            Data Science student with hands-on experience in machine learning,
            deep learning, and intelligent systems. I enjoy working on
            real-world, data-driven problems through practical experimentation,
            model development, and continuous learning, with a focus on building
            scalable and impactful solutions.
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
                score: "CGPA: 8.27 / 10 (up to 7th semester)"
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
                  background:
                    "linear-gradient(180deg, #1f0030 0%, #130020 100%)",
                  border: "1px solid #6d28d9",
                  borderRadius: "18px",
                  padding: "26px"
                }}
              >
                <p style={{ color: "#c084fc", fontSize: "13px" }}>
                  {edu.period}
                </p>
                <h3 style={{ margin: "10px 0" }}>{edu.title}</h3>
                <p style={{ color: "#d8b4fe" }}>{edu.place}</p>
                <p style={{ marginTop: "6px", color: "#ede9fe" }}>
                  {edu.score}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SKILLS & INTERESTS */}
        <motion.section {...sectionAnimation} style={{ marginBottom: "120px" }}>
          <h2 style={{ marginBottom: "36px" }}>Skills & Interests</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            {[
              "Natural Language Processing",
              "Machine Learning",
              "Deep Learning",
              "Artificial Intelligence",
              "Data Analytics",
              "Statistical Inference",
              "Big Data",
              "Image Processing",
              "Python",
              "SQL",
              "C#",
              "GraphQL",
              "Frontend Development",
              "LangGraph",
              "LLM-based Systems"
            ].map((skill, i) => (
              <span
                key={i}
                style={{
                  padding: "12px 22px",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(135deg, #7c3aed, #a855f7)",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 500,
                  boxShadow: "0 6px 20px rgba(124,58,237,0.25)"
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
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                style={{
                  background:
                    "linear-gradient(180deg, #1f0030 0%, #12001f 100%)",
                  border: "1px solid #6d28d9",
                  borderRadius: "20px",
                  padding: "28px",
                  position: "relative",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
                }}
              >
                {(index >= projects.length - 2) && (
                  <span
                    style={{
                      position: "absolute",
                      top: "18px",
                      right: "18px",
                      fontSize: "12px",
                      padding: "4px 12px",
                      borderRadius: "999px",
                      background: "rgba(34,197,94,0.15)",
                      border: "1px solid rgba(34,197,94,0.4)",
                      color: "#86efac"
                    }}
                  >
                    Ongoing
                  </span>
                )}

                <h3 style={{ marginBottom: "12px" }}>{project.title}</h3>
                <p style={{ color: "#e9d5ff", lineHeight: "1.65" }}>
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
                        background: "rgba(216,180,254,0.15)",
                        border: "1px solid rgba(216,180,254,0.4)",
                        color: "#ede9fe"
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
              background:
                "linear-gradient(180deg, #1f0030 0%, #12001f 100%)",
              border: "1px solid #6d28d9",
              borderRadius: "22px",
              padding: "30px",
              maxWidth: "1000px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.35)"
            }}
          >
            <p
              style={{
                lineHeight: "1.9",
                color: "#ede9fe",
                fontSize: "15.5px"
              }}
            >
             ·Deep learning for Computer Vision ·AI concepts and techniques · Data Analytics with Excel· Python for Data Science	            with ExcelPython for Data Science

            </p>
          </div>
        </motion.section>

        {/* GET IN TOUCH */}
        <motion.section {...sectionAnimation}>
          <div
            style={{
              background:
                "linear-gradient(180deg, #1f0030 0%, #12001f 100%)",
              border: "1px solid #6d28d9",
              borderRadius: "24px",
              padding: "40px",
              textAlign: "center",
              boxShadow: "0 14px 36px rgba(0,0,0,0.4)"
            }}
          >
            <h2 style={{ marginBottom: "18px" }}>Get in Touch</h2>
            <p style={{ marginBottom: "14px" }}>
              <a
                href="mailto:harshithababu2316@gmail.com"
                style={{ color: "#d8b4fe", textDecoration: "none" }}
              >
                📧 harshithababu2316@gmail.com
              </a>
            </p>
            <p style={{ marginBottom: "14px" }}>
              <a
                href="https://github.com/Harshitha2347"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#d8b4fe", textDecoration: "none" }}
              >
                💻 GitHub
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/harshitha-b-619813353"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#d8b4fe", textDecoration: "none" }}
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
