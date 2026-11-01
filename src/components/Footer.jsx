"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        backgroundColor: "#050505",
        padding: "45px 0 30px",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between g-4">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 700,
                margin: 0,
                color: "#fff",
              }}
            >
              Muhammad Talha
            </h3>
            <p style={{ margin: "8px 0 0", fontSize: "14px", color: "#888" }}>
              Full Stack Developer & Agentic AI Developer
            </p>
          </div>

          <div className="col-12 col-md-6 text-center text-md-end">
            <div
              style={{
                display: "inline-flex",
                gap: "15px",
                justifyContent: "center",
              }}
            >
              <a
                href="https://www.linkedin.com/in/muhammad-talha-772085392/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bx bxl-linkedin" style={{ fontSize: "18px" }}></i>
              </a>

              <a
                href="mailto:shykhtalha33@gmail.com"
                title="Email"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bx bx-envelope" style={{ fontSize: "18px" }}></i>
              </a>

              <a
                href="https://wa.me/923187019892"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bx bxl-whatsapp" style={{ fontSize: "18px" }}></i>
              </a>

              <a
                href="https://github.com/shkTalha33"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bx bxl-github" style={{ fontSize: "18px" }}></i>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            marginTop: "30px",
            paddingTop: "20px",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0, fontSize: "13px", color: "#666" }}>
            © {new Date().getFullYear()} Muhammad Talha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
