// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   FaRobot, FaTimes, FaHome, FaInfoCircle, FaBriefcase, 
//   FaCertificate, FaThumbsUp, FaThumbsDown, FaPaperPlane
// } from 'react-icons/fa';

// // Modern color palette and fonts matching the app theme
// const colors = {
//   primary: "#6366f1",
//   secondary: "#8b5cf6",
//   accent: "#f59e0b",
//   background: "#0f172a",
//   dark: "#0f172a",
//   text: "#e2e8f0",
//   lightText: "#94a3b8",
//   border: "#1e293b",
//   glass: "rgba(255,255,255,0.08)",
//   glassBg: "rgba(255,255,255,0.09)",
//   glassBlur: "blur(20px)",
//   gradient1: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//   gradient2: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
// };

// const fonts = {
//   primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
//   heading: "'Poppins', 'Inter', sans-serif"
// };

// const quickOptions = [
//   { icon: <FaHome />, text: "About Credora" },
//   { icon: <FaBriefcase />, text: "Internships" },
//   { icon: <FaCertificate />, text: "Certificates" },
//   { icon: <FaInfoCircle />, text: "Meet Team" }
// ];

// // Feedback Button Component
// const FeedbackButton = ({ onClick, active, type, disabled }) => (
//   <button
//     onClick={onClick}
//     disabled={disabled}
//     style={{
//       border: "none",
//       background: "transparent",
//       cursor: disabled ? "default" : "pointer",
//       marginLeft: type === "up" ? 0 : 8,
//       color: active === "helpful" ? "#22c55e" : 
//              active === "unhelpful" ? "#ef4444" : "#94a3b8",
//       fontSize: "1.2rem",
//       opacity: disabled ? 0.4 : 1,
//       transition: "color 0.2s, transform 0.2s",
//       transform: active ? "scale(1.1)" : "scale(1)"
//     }}
//     aria-label={type === "up" ? "Helpful" : "Not helpful"}
//   >
//     {type === "up" ? <FaThumbsUp /> : <FaThumbsDown />}
//   </button>
// );

// const ChatBot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [showOptions, setShowOptions] = useState(true);
//   const [feedbackStates, setFeedbackStates] = useState({});
//   const messagesEndRef = useRef(null);

//   // Scroll to bottom on new messages
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, isTyping]);

//   const formatBotResponse = (response) => {
//     return response
//       .split('\n')
//       .map(line => line.trim())
//       .filter(line => line)
//       .join('\n\n');
//   };

//   const addMessage = useCallback((text, sender, id = Date.now()) => {
//     const formattedText = sender === 'bot' ? formatBotResponse(text) : text;
//     setMessages(prev => [...prev, { text: formattedText, sender, id }]);
//   }, []);

//   // Handle feedback
//   const handleFeedback = async (messageId, isHelpful) => {
//     setFeedbackStates(prev => ({
//       ...prev,
//       [messageId]: isHelpful ? 'helpful' : 'unhelpful'
//     }));
//   };

//   // Only greet once per mount
//   const hasGreeted = useRef(false);
//   useEffect(() => {
//     if (!hasGreeted.current) {
//       hasGreeted.current = true;
//       setIsOpen(true);
//       setTimeout(() => {
//         addMessage("👋 Hello! I'm Credora's AI assistant. How can I help you today?", "bot");
//       }, 800);
//     }
//   }, [addMessage]);

//   const handleQuickOption = (option) => {
//     addMessage(option.text, "user");
//     handleBotResponse(option.text);
//   };

//   // Bot response handler
//   const handleBotResponse = async (userMessage) => {
//     setIsTyping(true);
//     setShowOptions(false);
//     const msg = userMessage.trim().toLowerCase();

//     // Add response delay for natural feel
//     setTimeout(() => {
//       let botResponse = 
//         msg.includes("about credora")
//           ? "Credora is a dynamic internship platform dedicated to empowering students and early-career professionals. [Visit LinkedIn](https://www.linkedin.com/company/credora-space) | [Join WhatsApp](https://chat.whatsapp.com/CSAG3Ev8PdE3yXMlqL14wb)"
//           : msg.includes("internship")
//           ? "We offer remote internships in Web Development, Data Science, Java, Python, and more! All programs are flexible and certificate-based. [Apply here](https://forms.gle/oQbxp8PJ1caBqth97)"
//           : msg.includes("certificate")
//           ? "We provide verified certificates upon successful completion of our internships. To verify a certificate, visit our certificate verification page."
//           : msg.includes("team")
//           ? "Our team includes Sahil Dhawale (Founder), Nayan Raut (Co-Founder), and Aniket Kumare (HR)."
//           : "I'm here to help with anything related to Credora's internships, certificates, or team!";

//       // Make links clickable
//       botResponse = botResponse
//         .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: #8b5cf6; text-decoration: none; font-weight: 500;">$1</a>');

//       addMessage(botResponse, "bot");
//       setIsTyping(false);
//     }, 1000);
//   };

//   const handleSend = () => {
//     if (!input.trim()) return;
//     addMessage(input, "user");
//     setInput("");
//     handleBotResponse(input);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   // Styles
//   const styles = {
//     container: {
//       position: "fixed",
//       bottom: "28px",
//       right: "28px",
//       zIndex: 1000,
//     },
//     chatIcon: {
//       background: colors.gradient1,
//       borderRadius: "50%",
//       width: "65px",
//       height: "65px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       cursor: "pointer",
//       color: "white",
//       boxShadow: "0 4px 20px rgba(99,102,241,0.25)",
//       border: `1px solid ${colors.glass}`,
//       backdropFilter: colors.glassBlur,
//     },
//     chatWindow: {
//       position: "fixed",
//       bottom: "110px",
//       right: "28px",
//       width: "min(400px, calc(100vw - 56px))",
//       height: "min(600px, calc(100vh - 140px))",
//       background: colors.background,
//       borderRadius: "24px",
//       boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
//       overflow: "hidden",
//       display: "flex",
//       flexDirection: "column",
//       border: `1px solid ${colors.border}`,
//       backdropFilter: colors.glassBlur,
//     },
//     header: {
//       background: colors.gradient1,
//       padding: "20px 24px",
//       color: "white",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       fontFamily: fonts.heading,
//       fontSize: "1.25rem",
//       fontWeight: "600",
//     },
//     messagesContainer: {
//       flex: 1,
//       overflowY: "auto",
//       padding: "20px 16px",
//       background: colors.background,
//     },
//     message: {
//       marginBottom: "16px",
//       maxWidth: "85%",
//       padding: "12px 16px",
//       borderRadius: "16px",
//       fontSize: "0.95rem",
//       lineHeight: 1.5,
//       wordBreak: "break-word",
//       animation: "fadeInUp 0.3s ease",
//     },
//     userMessage: {
//       background: colors.primary,
//       color: "white",
//       marginLeft: "auto",
//       borderBottomRightRadius: "4px",
//     },
//     botMessage: {
//       background: colors.border,
//       color: colors.text,
//       marginRight: "auto",
//       borderBottomLeftRadius: "4px",
//     },
//     inputContainer: {
//       padding: "16px",
//       background: colors.background,
//       borderTop: `1px solid ${colors.border}`,
//       display: "flex",
//       gap: "12px",
//       position: "relative",
//     },
//     input: {
//       flex: 1,
//       padding: "14px",
//       borderRadius: "12px",
//       border: `1px solid ${colors.border}`,
//       background: colors.dark,
//       color: colors.text,
//       fontSize: "0.95rem",
//       outline: "none",
//       fontFamily: fonts.primary,
//       transition: "border-color 0.2s",
//       '&:focus': {
//         borderColor: colors.primary,
//       }
//     },
//     sendButton: {
//       background: colors.primary,
//       color: "white",
//       border: "none",
//       borderRadius: "12px",
//       width: "50px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       cursor: "pointer",
//       transition: "transform 0.2s",
//       '&:hover': {
//         transform: "scale(1.05)",
//       }
//     },
//     quickOptions: {
//       display: "grid",
//       gridTemplateColumns: "1fr 1fr",
//       gap: "8px",
//       padding: "12px 16px",
//       background: colors.background,
//       borderTop: `1px solid ${colors.border}`,
//     },
//     quickOption: {
//       display: "flex",
//       alignItems: "center",
//       gap: "8px",
//       padding: "12px",
//       background: colors.dark,
//       border: `1px solid ${colors.border}`,
//       borderRadius: "12px",
//       cursor: "pointer",
//       color: colors.text,
//       fontSize: "0.9rem",
//       transition: "all 0.2s",
//       '&:hover': {
//         background: colors.border,
//         borderColor: colors.primary,
//       }
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setIsOpen(true)
//         }
//         style={styles.chatIcon}
//       >
//         <FaRobot size={28} />
//       </motion.div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//             style={styles.chatWindow}
//           >
//             <div style={styles.header}>
//               <span>Credora Assistant</span>
//               <motion.div
//                 whileHover={{ rotate: 90 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <FaTimes
//                   style={{ cursor: "pointer", fontSize: "1.25rem" }}
//                   onClick={() => setIsOpen(false)}
//                 />
//               </motion.div>
//             </div>

//             <div style={styles.messagesContainer}>
//               {messages.map(message => (
//                 <div key={message.id}>
//                   <div
//                     style={{
//                       ...styles.message,
//                       ...(message.sender === "user" ? styles.userMessage : styles.botMessage)
//                     }}
//                     dangerouslySetInnerHTML={{ __html: message.text }}
//                   />
//                   {message.sender === "bot" && (
//                     <div style={{ display: "flex", gap: "4px", marginTop: "4px", marginLeft: "4px" }}>
//                       <FeedbackButton
//                         type="up"
//                         onClick={() => handleFeedback(message.id, true)}
//                         active={feedbackStates[message.id]}
//                         disabled={!!feedbackStates[message.id]}
//                       />
//                       <FeedbackButton
//                         type="down"
//                         onClick={() => handleFeedback(message.id, false)}
//                         active={feedbackStates[message.id]}
//                         disabled={!!feedbackStates[message.id]}
//                       />
//                     </div>
//                   )}
//                 </div>
//               ))}
//               {isTyping && (
//                 <div style={{ ...styles.message, ...styles.botMessage }}>
//                   <motion.div
//                     animate={{ opacity: [0.4, 1, 0.4] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     Typing...
//                   </motion.div>
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </div>

//             {showOptions && (
//               <div style={styles.quickOptions}>
//                 {quickOptions.map((option, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     style={styles.quickOption}
//                     onClick={() => handleQuickOption(option)}
//                   >
//                     {option.icon}
//                     <span>{option.text}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             )}

//             <div style={styles.inputContainer}>
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 placeholder="Type your message..."
//                 style={styles.input}
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleSend}
//                 style={styles.sendButton}
//               >
//                 <FaPaperPlane />
//               </motion.button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ChatBot;





import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRobot, FaTimes, FaHome, FaInfoCircle, FaBriefcase, 
  FaCertificate, FaThumbsUp, FaThumbsDown, FaPaperPlane
} from 'react-icons/fa';

// Modern color palette and fonts matching the app theme
const colors = {
  primary: "#6366f1",
  secondary: "#8b5cf6",
  accent: "#f59e0b",
  background: "#0f172a",
  dark: "#0f172a",
  text: "#e2e8f0",
  lightText: "#94a3b8",
  border: "#1e293b",
  glass: "rgba(255,255,255,0.08)",
  glassBg: "rgba(255,255,255,0.09)",
  glassBlur: "blur(20px)",
  gradient1: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  gradient2: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
};

const fonts = {
  primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  heading: "'Poppins', 'Inter', sans-serif"
};

const quickOptions = [
  { icon: <FaHome />, text: "About Credora" },
  { icon: <FaBriefcase />, text: "Internships" },
  { icon: <FaCertificate />, text: "Certificates" },
  { icon: <FaInfoCircle />, text: "Meet Team" }
];

// Feedback Button Component
const FeedbackButton = ({ onClick, active, type, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      border: "none",
      background: "transparent",
      cursor: disabled ? "default" : "pointer",
      marginLeft: type === "up" ? 0 : 8,
      color: active === "helpful" ? "#22c55e" : 
             active === "unhelpful" ? "#ef4444" : "#94a3b8",
      fontSize: "1.2rem",
      opacity: disabled ? 0.4 : 1,
      transition: "color 0.2s, transform 0.2s",
      transform: active ? "scale(1.1)" : "scale(1)"
    }}
    aria-label={type === "up" ? "Helpful" : "Not helpful"}
  >
    {type === "up" ? <FaThumbsUp /> : <FaThumbsDown />}
  </button>
);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [feedbackStates, setFeedbackStates] = useState({});
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const formatBotResponse = (response) => {
    return response
      .split('\n')
      .map(line => line.trim())
      .filter(line => line)
      .join('\n\n');
  };

  const addMessage = useCallback((text, sender, id = Date.now()) => {
    const formattedText = sender === 'bot' ? formatBotResponse(text) : text;
    setMessages(prev => [...prev, { text: formattedText, sender, id }]);
  }, []);

  // Handle feedback
  const handleFeedback = async (messageId, isHelpful) => {
    setFeedbackStates(prev => ({
      ...prev,
      [messageId]: isHelpful ? 'helpful' : 'unhelpful'
    }));
  };

  // Only greet once per mount
  const hasGreeted = useRef(false);
  useEffect(() => {
    if (!hasGreeted.current) {
      hasGreeted.current = true;
      setIsOpen(true);
      setTimeout(() => {
        addMessage("👋 Hello! I'm Credora's AI assistant. How can I help you today?", "bot");
      }, 800);
    }
  }, [addMessage]);

  const handleQuickOption = (option) => {
    addMessage(option.text, "user");
    handleBotResponse(option.text);
  };

  // Bot response handler
  const handleBotResponse = async (userMessage) => {
    setIsTyping(true);
    setShowOptions(false);
    const msg = userMessage.trim().toLowerCase();

    // Add response delay for natural feel
    setTimeout(() => {
      let botResponse = 
        msg.includes("about credora")
          ? "Credora is a dynamic internship platform dedicated to empowering students and early-career professionals. [Visit LinkedIn](https://www.linkedin.com/company/credora-space) | [Join WhatsApp](https://chat.whatsapp.com/CSAG3Ev8PdE3yXMlqL14wb)"
          : msg.includes("internship")
          ? "We offer remote internships in Web Development, Data Science, Java, Python, and more! All programs are flexible and certificate-based. [Apply here](https://forms.gle/oQbxp8PJ1caBqth97)"
          : msg.includes("certificate")
          ? "We provide verified certificates upon successful completion of our internships. To verify a certificate, visit our certificate verification page."
          : msg.includes("team")
          ? "Our team includes Sahil Dhawale (Founder), Nayan Raut (Co-Founder), and Aniket Kumare (HR)."
          : "I'm here to help with anything related to Credora's internships, certificates, or team!";

      // Make links clickable
      botResponse = botResponse
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: #8b5cf6; text-decoration: none; font-weight: 500;">$1</a>');

      addMessage(botResponse, "bot");
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    addMessage(input, "user");
    setInput("");
    handleBotResponse(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Styles
  const styles = {
    container: {
      position: "fixed",
      bottom: "28px",
      right: "28px",
      zIndex: 1000,
    },
    chatIcon: {
      background: colors.gradient1,
      borderRadius: "50%",
      width: "65px",
      height: "65px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: "white",
      boxShadow: "0 4px 20px rgba(99,102,241,0.25)",
      border: `1px solid ${colors.glass}`,
      backdropFilter: colors.glassBlur,
    },
    chatWindow: {
      position: "fixed",
      bottom: "110px",
      right: "28px",
      width: "min(400px, calc(100vw - 56px))",
      height: "min(600px, calc(100vh - 140px))",
      background: colors.background,
      borderRadius: "24px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      border: `1px solid ${colors.border}`,
      backdropFilter: colors.glassBlur,
    },
    header: {
      background: colors.gradient1,
      padding: "20px 24px",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: fonts.heading,
      fontSize: "1.25rem",
      fontWeight: "600",
    },
    messagesContainer: {
      flex: 1,
      overflowY: "auto",
      padding: "20px 16px",
      background: colors.background,
    },
    message: {
      marginBottom: "16px",
      maxWidth: "85%",
      padding: "12px 16px",
      borderRadius: "16px",
      fontSize: "0.95rem",
      lineHeight: 1.5,
      wordBreak: "break-word",
      animation: "fadeInUp 0.3s ease",
    },
    userMessage: {
      background: colors.primary,
      color: "white",
      marginLeft: "auto",
      borderBottomRightRadius: "4px",
    },
    botMessage: {
      background: colors.border,
      color: colors.text,
      marginRight: "auto",
      borderBottomLeftRadius: "4px",
    },
    inputContainer: {
      padding: "16px",
      background: colors.background,
      borderTop: `1px solid ${colors.border}`,
      display: "flex",
      gap: "12px",
      position: "relative",
    },
    input: {
      flex: 1,
      padding: "14px",
      borderRadius: "12px",
      border: `1px solid ${colors.border}`,
      background: colors.dark,
      color: colors.text,
      fontSize: "0.95rem",
      outline: "none",
      fontFamily: fonts.primary,
      transition: "border-color 0.2s",
      '&:focus': {
        borderColor: colors.primary,
      }
    },
    sendButton: {
      background: colors.primary,
      color: "white",
      border: "none",
      borderRadius: "12px",
      width: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "transform 0.2s",
      '&:hover': {
        transform: "scale(1.05)",
      }
    },
    quickOptions: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "8px",
      padding: "12px 16px",
      background: colors.background,
      borderTop: `1px solid ${colors.border}`,
    },
    quickOption: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px",
      background: colors.dark,
      border: `1px solid ${colors.border}`,
      borderRadius: "12px",
      cursor: "pointer",
      color: colors.text,
      fontSize: "0.9rem",
      transition: "all 0.2s",
      '&:hover': {
        background: colors.border,
        borderColor: colors.primary,
      }
    }
  };

  return (
    <div style={styles.container}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        style={styles.chatIcon}
      >
        <FaRobot size={28} />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={styles.chatWindow}
          >
            <div style={styles.header}>
              <span>Credora Assistant</span>
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes
                  style={{ cursor: "pointer", fontSize: "1.25rem" }}
                  onClick={() => setIsOpen(false)}
                />
              </motion.div>
            </div>

            <div style={styles.messagesContainer}>
              {messages.map(message => (
                <div key={message.id}>
                  <div
                    style={{
                      ...styles.message,
                      ...(message.sender === "user" ? styles.userMessage : styles.botMessage)
                    }}
                    dangerouslySetInnerHTML={{ __html: message.text }}
                  />
                  {message.sender === "bot" && (
                    <div style={{ display: "flex", gap: "4px", marginTop: "4px", marginLeft: "4px" }}>
                      <FeedbackButton
                        type="up"
                        onClick={() => handleFeedback(message.id, true)}
                        active={feedbackStates[message.id]}
                        disabled={!!feedbackStates[message.id]}
                      />
                      <FeedbackButton
                        type="down"
                        onClick={() => handleFeedback(message.id, false)}
                        active={feedbackStates[message.id]}
                        disabled={!!feedbackStates[message.id]}
                      />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div style={{ ...styles.message, ...styles.botMessage }}>
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Typing...
                  </motion.div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {showOptions && (
              <div style={styles.quickOptions}>
                {quickOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={styles.quickOption}
                    onClick={() => handleQuickOption(option)}
                  >
                    {option.icon}
                    <span>{option.text}</span>
                  </motion.div>
                ))}
              </div>
            )}

            <div style={styles.inputContainer}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                style={styles.input}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                style={styles.sendButton}
              >
                <FaPaperPlane />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;