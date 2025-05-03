import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-parallax";
import confetti from "canvas-confetti";
import {
  FaTrophy,
  FaCalendar,
  FaUsers,
  FaRocket,
  FaReact,
  FaNode,
  FaPython,
  FaJava,
  FaAngular,
  FaVuejs,
  FaLightbulb,
  FaCode,
  FaClock,
} from "react-icons/fa";

const Hackathon = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const deadline = new Date("June 1, 2025").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const techIcons = [FaReact, FaNode, FaPython, FaJava, FaAngular, FaVuejs];

  const floatingIconStyle = (index) => ({
    position: "absolute",
    fontSize: "2rem",
    color: "rgba(0, 255, 255, 0.2)",
    animation: `float ${3 + index}s ease-in-out infinite`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a192f",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'IBM Plex Mono', monospace",
        color: "#64ffda",
      }}
    >
      {techIcons.map((Icon, index) => (
        <Icon key={index} style={floatingIconStyle(index)} />
      ))}

      <header
        style={{
          padding: "80px 20px",
          textAlign: "center",
          position: "relative",
          background: "linear-gradient(45deg, #0a192f, #112240)",
          borderBottom: "2px solid #64ffda",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "20px",
              fontWeight: "bold",
              textShadow: "0 0 10px rgba(100, 255, 218, 0.5)",
              letterSpacing: "2px",
            }}
          >
            Credathon 2025
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              marginBottom: "30px",
              color: "#8892b0",
            }}
          >
            Where Innovation Meets Excellence
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              margin: "40px 0",
              flexWrap: "wrap",
            }}
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                whileHover={{ scale: 1.1 }}
                style={{
                  background: "rgba(100, 255, 218, 0.1)",
                  padding: "20px",
                  borderRadius: "10px",
                  minWidth: "120px",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(100, 255, 218, 0.2)",
                }}
              >
                <h2 style={{ fontSize: "2.5rem" }}>{value}</h2>
                <p style={{ textTransform: "uppercase" }}>{unit}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#"
            style={{
              display: "inline-block",
              padding: "20px 40px",
              fontSize: "1.5rem",
              textDecoration: "none",
              background: "transparent",
              color: "#64ffda",
              border: "2px solid #64ffda",
              borderRadius: "4px",
              position: "relative",
              overflow: "hidden",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(100, 255, 218, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now on Unstop
          </motion.a>
        </motion.div>
      </header>

      <section
        style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            color: "#ccd6f6",
          }}
        >
          Event Timeline
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {[
            { date: "May 15, 2025", title: "Registration Opens" },
            { date: "May 25, 2025", title: "Registration Closes" },
            { date: "June 1, 2025", title: "Event Start" },
            { date: "June 15, 2025", title: "Results" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(100, 255, 218, 0.2)",
              }}
              style={{
                flex: "1",
                minWidth: "250px",
                padding: "30px",
                background: "rgba(17, 34, 64, 0.8)",
                borderRadius: "8px",
                border: "1px solid rgba(100, 255, 218, 0.2)",
                backdropFilter: "blur(5px)",
              }}
            >
              <FaCalendar
                style={{
                  color: "#64ffda",
                  marginBottom: "10px",
                  fontSize: "2rem",
                }}
              />
              <h3 style={{ color: "#ccd6f6", marginBottom: "10px" }}>
                {item.title}
              </h3>
              <p style={{ color: "#8892b0" }}>{item.date}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            color: "#ccd6f6",
          }}
        >
          Prizes
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            { title: "First Prize", prize: "₹50,000", color: "#ffd700" },
            { title: "Second Prize", prize: "₹30,000", color: "#c0c0c0" },
            { title: "Third Prize", prize: "₹20,000", color: "#cd7f32" },
          ].map((prize, index) => (
            <motion.div
              key={index}
              whileHover={{
                rotateY: 15,
                scale: 1.05,
                z: 50,
              }}
              onHoverStart={triggerConfetti}
              style={{
                padding: "40px",
                background: "rgba(17, 34, 64, 0.8)",
                borderRadius: "15px",
                border: "1px solid rgba(100, 255, 218, 0.2)",
                textAlign: "center",
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <FaTrophy
                style={{
                  fontSize: "4rem",
                  color: prize.color,
                  marginBottom: "20px",
                  filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))",
                }}
              />
              <h3
                style={{
                  color: "#ccd6f6",
                  marginBottom: "10px",
                  fontSize: "1.5rem",
                }}
              >
                {prize.title}
              </h3>
              <p
                style={{
                  color: prize.color,
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                {prize.prize}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section
        style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            color: "#ccd6f6",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              question: "Who can participate?",
              answer:
                "Any student or professional passionate about technology and innovation can participate.",
            },
            {
              question: "What should I bring?",
              answer:
                "Your laptop, charger, and any hardware you might need for your project.",
            },
            {
              question: "Is there a registration fee?",
              answer: "No, participation is completely free!",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              style={{
                padding: "30px",
                background: "rgba(17, 34, 64, 0.8)",
                borderRadius: "12px",
                border: "1px solid rgba(100, 255, 218, 0.2)",
              }}
            >
              <h3 style={{ color: "#64ffda", marginBottom: "15px" }}>
                {faq.question}
              </h3>
              <p style={{ color: "#8892b0" }}>{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          background: "rgba(17, 34, 64, 0.3)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            color: "#ccd6f6",
          }}
        >
          Resources & Support
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              icon: <FaLightbulb />,
              title: "Mentorship",
              description: "Get guidance from industry experts",
            },
            {
              icon: <FaCode />,
              title: "Technical Support",
              description: "Access to development tools and APIs",
            },
            {
              icon: <FaClock />,
              title: "24/7 Assistance",
              description: "Round-the-clock support during the event",
            },
          ].map((resource, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              style={{
                padding: "30px",
                textAlign: "center",
                background: "rgba(17, 34, 64, 0.8)",
                borderRadius: "12px",
                border: "1px solid rgba(100, 255, 218, 0.2)",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  color: "#64ffda",
                  marginBottom: "20px",
                }}
              >
                {resource.icon}
              </div>
              <h3 style={{ color: "#ccd6f6", marginBottom: "15px" }}>
                {resource.title}
              </h3>
              <p style={{ color: "#8892b0" }}>{resource.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Judging Criteria Section */}
      <section
        style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            color: "#ccd6f6",
          }}
        >
          Judging Criteria
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              criteria: "Innovation & Creativity",
              weight: "30%",
              description:
                "Originality of the idea and creative problem-solving approach",
            },
            {
              criteria: "Technical Complexity",
              weight: "25%",
              description:
                "Implementation difficulty and technical sophistication",
            },
            {
              criteria: "Impact & Practicality",
              weight: "25%",
              description: "Potential real-world impact and feasibility",
            },
            {
              criteria: "Presentation",
              weight: "20%",
              description: "Quality of demo and project presentation",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: "30px",
                background: "rgba(17, 34, 64, 0.8)",
                borderRadius: "12px",
                border: "1px solid rgba(100, 255, 218, 0.2)",
              }}
            >
              <h3 style={{ color: "#64ffda", marginBottom: "10px" }}>
                {item.criteria}
              </h3>
              <p
                style={{
                  color: "#ccd6f6",
                  fontSize: "1.5rem",
                  marginBottom: "10px",
                }}
              >
                {item.weight}
              </p>
              <p style={{ color: "#8892b0" }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Previous Winners Section */}
      <section
        style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            color: "#ccd6f6",
          }}
        >
          Previous Winners
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              team: "TeamInnovate",
              project: "EcoTrack",
              description: "AI-powered sustainability monitoring system",
              year: "2024",
            },
            {
              team: "ByteCrafters",
              project: "HealthHub",
              description: "Decentralized healthcare management platform",
              year: "2023",
            },
            {
              team: "CodeCrusaders",
              project: "SmartLearn",
              description: "Adaptive learning platform using ML",
              year: "2022",
            },
          ].map((winner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: "30px",
                background: "rgba(17, 34, 64, 0.8)",
                borderRadius: "12px",
                border: "1px solid rgba(100, 255, 218, 0.2)",
              }}
            >
              <h3 style={{ color: "#64ffda", marginBottom: "10px" }}>
                {winner.team}
              </h3>
              <h4 style={{ color: "#ccd6f6", marginBottom: "10px" }}>
                {winner.project}
              </h4>
              <p style={{ color: "#8892b0", marginBottom: "10px" }}>
                {winner.description}
              </p>
              <p style={{ color: "#64ffda" }}>Winner {winner.year}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Background Animation */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.1,
          background: `
          radial-gradient(circle at 20% 20%, #64ffda 0%, transparent 10%),
          radial-gradient(circle at 80% 50%, #64ffda 0%, transparent 10%),
          radial-gradient(circle at 40% 80%, #64ffda 0%, transparent 10%)
        `,
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: "2px",
              height: "2px",
              background: "#64ffda",
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Sponsors Section */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            color: "#ccd6f6",
          }}
        >
          Our Sponsors
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
            alignItems: "stretch",
          }}
        >
          {[
            { name: "CareerZone", logo: "/images/slider1.png" },
            { name: "InfoSpy", logo: "/images/slider2.png" },
            { name: "IndMeet", logo: "/images/slider3.png" },
          ].map((sponsor, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                padding: "40px",
                background: "rgba(17, 34, 64, 0.9)",
                borderRadius: "12px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "300px",
                border: "1px solid rgba(100, 255, 218, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h3
                style={{
                  color: "#64ffda",
                  fontSize: "1.5rem",
                  marginTop: "20px",
                }}
              >
                {sponsor.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Categories Section */}
      <section
        style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            color: "#ccd6f6",
          }}
        >
          Project Categories
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "AI/ML Solutions",
              description:
                "Projects focusing on artificial intelligence and machine learning applications",
            },
            {
              title: "FinTech Innovation",
              description:
                "Solutions for financial technology and digital banking",
            },
            {
              title: "HealthTech",
              description: "Healthcare and medical technology solutions",
            },
            {
              title: "Sustainability",
              description: "Projects addressing environmental challenges",
            },
            {
              title: "Full Stack Development",
              description: "Complete project frontend+backend+database",
            },
            {
              title: "Open Innovation",
              description: "Build anything you want to build",
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: "30px",
                background: "rgba(17, 34, 64, 0.8)",
                borderRadius: "12px",
                border: "1px solid rgba(100, 255, 218, 0.2)",
              }}
            >
              <h3 style={{ color: "#64ffda", marginBottom: "15px" }}>
                {category.title}
              </h3>
              <p style={{ color: "#8892b0" }}>{category.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Schedule Section */}
      <section
        style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            color: "#ccd6f6",
          }}
        >
          Event Schedule
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {[
            {
              time: "Day 1 - 10:00 AM",
              event: "Opening Ceremony & Team Formation",
            },
            { time: "Day 1 - 11:00 AM", event: "Hackathon Kickoff" },
            { time: "Day 2 - 2:00 PM", event: "Mentorship Sessions" },
            { time: "Day 2 - 6:00 PM", event: "Progress Check-in" },
            { time: "Day 3 - 2:00 PM", event: "Project Submissions" },
            { time: "Day 3 - 4:00 PM", event: "Presentations & Judging" },
            { time: "Day 3 - 6:00 PM", event: "Awards Ceremony" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 10 }}
              style={{
                padding: "20px",
                background: "rgba(17, 34, 64, 0.8)",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3 style={{ color: "#64ffda" }}>{item.time}</h3>
              <p style={{ color: "#8892b0" }}>{item.event}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rules & Guidelines Section */}
      <section
        style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            color: "#ccd6f6",
          }}
        >
          Rules & Guidelines
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Team Size",
              description: "Teams must consist of 2-4 members",
            },
            {
              title: "Original Work",
              description: "All code must be written during the hackathon",
            },
            {
              title: "Technology Stack",
              description: "Use any programming language or framework",
            },
            {
              title: "Code of Conduct",
              description: "Maintain professional and respectful behavior",
            },
          ].map((rule, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: "30px",
                background: "rgba(17, 34, 64, 0.8)",
                borderRadius: "12px",
                border: "1px solid rgba(100, 255, 218, 0.2)",
              }}
            >
              <h3 style={{ color: "#64ffda", marginBottom: "15px" }}>
                {rule.title}
              </h3>
              <p style={{ color: "#8892b0" }}>{rule.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Venue Section */}
      <section
        style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            color: "#ccd6f6",
          }}
        >
          Venue
        </h2>
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{
            padding: "40px",
            background: "rgba(17, 34, 64, 0.8)",
            borderRadius: "12px",
            border: "1px solid rgba(100, 255, 218, 0.2)",
            textAlign: "center",
          }}
        >
          <FaRocket
            style={{ fontSize: "3rem", color: "#64ffda", marginBottom: "20px" }}
          />
          <h3
            style={{
              color: "#ccd6f6",
              marginBottom: "15px",
              fontSize: "1.5rem",
            }}
          >
            Remote Event
          </h3>
          <p style={{ color: "#8892b0", fontSize: "1.1rem" }}>
            Join us from anywhere in the world! All activities will be conducted
            online through our virtual platforms.
          </p>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            color: "#ccd6f6",
          }}
        >
          What Past Participants Say
        </h2>
        <motion.div
          style={{
            display: "flex",
            gap: "30px",
            padding: "20px 0",
            flexWrap: "nowrap",
            justifyContent: "center",
            width: "max-content",
          }}
          animate={{
            x: [0, -1000],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            },
          }}
        >
          {[
            {
              text: "The hackathon experience was transformative. With excellent mentorship and a supportive environment, I learned new technologies and made lasting connections with fellow developers.",
              name: "Alex Chen",
              role: "Winner 2024",
            },
            {
              text: "Credathon provided the perfect platform to showcase my skills. The diverse challenges and collaborative atmosphere helped me grow both technically and professionally.",
              name: "Sarah Kumar",
              role: "Runner-up 2024",
            },
            {
              text: "The event's organization was impeccable. From workshops to networking sessions, every aspect was designed to maximize learning and innovation.",
              name: "Mike Wilson",
              role: "Participant 2024",
            },
            {
              text: "As a first-time participant, I was amazed by the inclusive community and technical resources provided. It truly helped kickstart my development journey.",
              name: "Emma Zhang",
              role: "Rising Star 2024",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              style={{
                padding: "25px",
                background: "rgba(17, 34, 64, 0.8)",
                borderRadius: "12px",
                border: "1px solid rgba(100, 255, 218, 0.2)",
                minWidth: "300px",
                width: "300px",
                height: "auto",
                minHeight: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    color: "#8892b0",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.text}"
                </p>
              </div>
              <div
                style={{
                  borderTop: "1px solid rgba(100, 255, 218, 0.2)",
                  paddingTop: "15px",
                  marginTop: "auto",
                }}
              >
                <h4 style={{ color: "#64ffda", marginBottom: "5px", fontSize: "1rem" }}>
                  {testimonial.name}
                </h4>
                <p style={{ color: "#8892b0", fontSize: "0.9rem" }}>{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background:
            "linear-gradient(180deg, rgba(17, 34, 64, 0) 0%, rgba(17, 34, 64, 0.8) 100%)",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            color: "#64ffda",
            marginBottom: "20px",
          }}
        >
          Ready to Innovate?
        </h2>
        <p
          style={{
            color: "#8892b0",
            fontSize: "1.2rem",
            marginBottom: "40px",
            maxWidth: "600px",
            margin: "0 auto 40px",
          }}
        >
          Join us in shaping the future of technology
        </p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.1 }}
          style={{
            display: "inline-block",
            padding: "20px 40px",
            fontSize: "1.5rem",
            background: "#64ffda",
            color: "#0a192f",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
        >
          Register Now
        </motion.a>
      </section>
    </div>
  );
};

export default Hackathon;