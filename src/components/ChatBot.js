import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRobot, FaTimes, FaHome, FaInfoCircle, FaBriefcase, 
  FaCertificate, FaThumbsUp, FaThumbsDown, FaPaperPlane,
} from 'react-icons/fa';
import styled from 'styled-components';

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
      fontSize: "1.1rem",
      opacity: disabled ? 0.4 : 1,
      transition: "color 0.2s, transform 0.2s",
      transform: active ? "scale(1.1)" : "scale(1)",
      padding: "4px"
    }}
    aria-label={type === "up" ? "Helpful" : "Not helpful"}
  >
    {type === "up" ? <FaThumbsUp /> : <FaThumbsDown />}
  </button>
);

const HeaderButton = styled(motion.button)`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: ${props => props.isMobile ? '8px' : '3px'}; // Increased padding for mobile
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.isMobile ? '1.2rem' : '1.1rem'}; // Larger size for mobile
  position: relative;
  z-index: 1600;
  
  &:active {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const HeaderButtons = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: ${props => props.isMobile ? 'absolute' : 'relative'};
  right: ${props => props.isMobile ? '16px' : 'auto'};
  top: ${props => props.isMobile ? '50%' : 'auto'};
  transform: ${props => props.isMobile ? 'translateY(-50%)' : 'none'};
  z-index: 2000;
`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [feedbackStates, setFeedbackStates] = useState({});
  const [isMinimized, setIsMinimized] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Responsive state management
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 768,
    height: typeof window !== 'undefined' ? window.innerHeight : 600
  });

  const isMobile = screenSize.width <= 768;
  const isSmallMobile = screenSize.width <= 480;
  const isVerySmall = screenSize.width <= 360;

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll handling
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isOpen, isMobile]);

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
    
    // Count bot messages and hide options after 2-3 messages
    if (sender === 'bot') {
      setMessageCount(prev => {
        const newCount = prev + 1;
        // Hide options after 2 bot responses
        if (newCount >= 2) {
          setShowOptions(false);
        }
        return newCount;
      });
    }
  }, []);

  const handleFeedback = async (messageId, isHelpful) => {
    setFeedbackStates(prev => ({
      ...prev,
      [messageId]: isHelpful ? 'helpful' : 'unhelpful'
    }));
  };

  // Initial greeting
  const hasGreeted = useRef(false);
  useEffect(() => {
    if (!hasGreeted.current && isOpen) {
      hasGreeted.current = true;
      setTimeout(() => {
        addMessage("👋 Hello! I'm Credora's AI assistant. How can I help you today?", "bot");
      }, 800);
    }
  }, [isOpen, addMessage]);

  const handleQuickOption = (option) => {
    addMessage(option.text, "user");
    handleBotResponse(option.text);
  };

  const handleBotResponse = async (userMessage) => {
    setIsTyping(true);
    const msg = userMessage.trim().toLowerCase();

    // Predefined responses for common Credora-related questions
    if (msg.includes("founder")) {
      addMessage("Credora was founded by Sahil Dhawale along with our dedicated team of Nayan Raut (Co-Founder) and Aniket Kumare (HR).", "bot");
      setIsTyping(false);
      return;
    } else if (msg.includes("about credora")) {
      addMessage(
        "Credora is a dynamic internship platform dedicated to empowering students and early-career professionals. We offer remote internships with flexible schedules, hands-on exposure, and verified certificates. For more details, check out our <a href=\"https://www.linkedin.com/company/credora-space\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn page</a> or <a href=\"https://chat.whatsapp.com/CSAG3Ev8PdE3yXMlqL14wb\" target=\"_blank\" rel=\"noopener noreferrer\">join our WhatsApp group</a>.",
        "bot"
      );
      setIsTyping(false);
      return;
    } else if (msg.includes("internship")) {
      addMessage(
        "We offer remote internships in various domains such as Web Development, Data Science, Mobile App Development, Data Analysis, and more. Our programs provide real-world exposure along with mentorship and verified certificates upon completion.",
        "bot"
      );
      setIsTyping(false);
      return;
    } else if (msg.includes("certificate")) {
      addMessage("Yes, upon successful completion of our internship programs, you will receive a verified digital certificate.", "bot");
      setIsTyping(false);
      return;
    } else if (msg.includes("team")) {
      addMessage("Our team includes Sahil Dhawale (Founder), Nayan Raut (Co-Founder), and Aniket Kumare (HR).", "bot");
      setIsTyping(false);
      return;
    } else if (msg.includes("contact")) {
      addMessage(
        "For any inquiries, you can reach us at hr@credora.space or aniket@credora.space. We're here to help!",
        "bot"
      );
      setIsTyping(false);
      return;
    }
    
    // Fallback: Use the Together API for a conversational response
    try {
      const systemPrompt = `You are Credora Assist, a professional and helpful AI assistant for Credora.
Key Information:
- Founded by Sahil Dhawale (Founder), Nayan Raut (Co-Founder), and Aniket Kumare (HR)
- Located in Wardha, Maharashtra
- Offering remote internships in Web Development, Data Science, Mobile App Development, Data Analysis, and more
- Contact: hr@credora.space or aniket@credora.space

Important Links:
- To visit our LinkedIn page, click here: Visit our LinkedIn page (https://www.linkedin.com/company/credora-space)
- To join our WhatsApp group, click here: Join our WhatsApp community (https://chat.whatsapp.com/CSAG3Ev8PdE3yXMlqL14wb)

Response Guidelines:
- For greetings (hi, hello, hey, etc.), respond in 2-3 lines maximum
- Keep all responses concise and friendly
- When mentioning social media, use the format: "Visit our [platform] (link)"
- Avoid HTML tags in responses
- For general questions, limit responses to 4-5 lines maximum`;
      
      const response = await fetch('https://api.together.xyz/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_TOGETHER_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });
      
      const data = await response.json();
      let botResponse = data.choices[0].message.content;
      
      // Convert markdown-style links to HTML anchor tags
      botResponse = botResponse.replace(
        /([^[]*)?\[(.*?)\]\((.*?)\)/g,
        (_, prefix, text, url) => {
          return `${prefix || ''}<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #8b5cf6; text-decoration: underline;">${text}</a>`;
        }
      );

      // Also handle plain URLs for LinkedIn and WhatsApp
      botResponse = botResponse
        .replace(
          /(https:\/\/chat\.whatsapp\.com\/CSAG3Ev8PdE3yXMlqL14wb)/g,
          '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: #8b5cf6; text-decoration: underline;">Join WhatsApp group</a>'
        )
        .replace(
          /(https:\/\/www\.linkedin\.com\/company\/credora-space)/g,
          '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: #8b5cf6; text-decoration: underline;">Visit LinkedIn page</a>'
        );
      
      addMessage(botResponse, 'bot');
    } catch (error) {
      addMessage('Sorry, I encountered an error. Please try again later.', 'bot');
      console.error(error);
    }
    
    setIsTyping(false);
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

  // Dynamic positioning and sizing
  const getFloatingButtonStyles = () => ({
    position: 'fixed',
    bottom: isMobile ? (isVerySmall ? '15px' : '20px') : '28px',
    right: isMobile ? (isVerySmall ? '15px' : '20px') : '28px',
    zIndex: 1000,
    transition: 'all 0.3s ease'
  });

  const getChatModalStyles = () => {
    if (isMobile) {
      return {
        position: 'fixed',
        bottom: '90px', // Positioned above the floating button
        right: '20px',
        width: '300px', // Small chat window for mobile
        height: isMinimized ? '50px' : '400px',  // 50px when minimized, 400px when open
        background: colors.background,
        borderRadius: isMinimized ? "25px" : "16px", // Rounded corners
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${colors.border}`,
        backdropFilter: colors.glassBlur,
        zIndex: 1000,
        transition: 'all 0.3s ease'
      };
    }
    
    // Existing desktop style
    return {
      position: 'fixed',
      bottom: '110px',
      right: '28px',
      width: isMinimized ? '300px' : 'min(350px, calc(100vw - 56px))',
      height: isMinimized ? '50px' : 'min(500px, calc(100vh - 140px))',
      background: colors.background,
      borderRadius: isMinimized ? "25px" : "16px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      border: `1px solid ${colors.border}`,
      backdropFilter: colors.glassBlur,
      zIndex: 1000,
      transition: 'all 0.3s ease'
    };
  };

  const getHeaderStyles = () => ({
    background: colors.gradient1,
    padding: isMobile ? "12px 10px" : isMinimized ? "16px 12px" : "16px 12px",
    color: "white",
    display: "flex",
    alignItems: "center",
    fontFamily: fonts.heading,
    fontSize: isMobile ? (isVerySmall ? "0.9rem" : "1rem") : "1.1rem",
    fontWeight: "600",
    minHeight: isMobile ? "30px" : "auto",
    position: "relative" // Enables absolute positioning of button group
  });

  const getMessageStyles = (sender) => ({
    marginBottom: "12px",
    maxWidth: isMobile ? "90%" : "85%",
    padding: isMobile ? "10px 14px" : "12px 16px",
    borderRadius: isMobile ? "12px" : "16px",
    fontSize: isMobile ? (isVerySmall ? "0.85rem" : "0.9rem") : "0.95rem",
    lineHeight: 1.5,
    wordBreak: "break-word",
    animation: "fadeInUp 0.3s ease",
    ...(sender === "user" ? {
      background: colors.primary,
      color: "white",
      marginLeft: "auto",
      borderBottomRightRadius: "4px",
    } : {
      background: colors.border,
      color: colors.text,
      marginRight: "auto",
      borderBottomLeftRadius: "4px",
    })
  });

  const getQuickOptionsStyles = () => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr",
    gap: isMobile ? "6px" : "8px",
    padding: isMobile ? "10px 12px" : "12px 16px",
    background: colors.background,
    borderTop: `1px solid ${colors.border}`,
  });

  const getInputContainerStyles = () => ({
    padding: isMobile ? "12px" : "16px",
    background: colors.background,
    borderTop: `1px solid ${colors.border}`,
    display: "flex",
    gap: isMobile ? "8px" : "12px",
    position: "relative",
  });

  return (
    <div 
      ref={chatContainerRef}
      style={getFloatingButtonStyles()}
    >
      {/* Floating Chat Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        style={{
          background: colors.gradient1,
          borderRadius: "50%",
          width: isMobile ? (isVerySmall ? "50px" : "56px") : "65px",
          height: isMobile ? (isVerySmall ? "50px" : "56px") : "65px",
          display: isOpen && isMobile ? "none" : "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "white",
          boxShadow: "0 4px 20px rgba(99,102,241,0.25)",
          border: `1px solid ${colors.glass}`,
          backdropFilter: colors.glassBlur,
        }}
      >
        <FaRobot size={isMobile ? (isVerySmall ? 20 : 24) : 28} />
      </motion.div>

      {/* Overlay covers the screen when chat is open */}
      <AnimatePresence>
        {isOpen && (
          // This overlay catches all clicks outside the chat modal
          <motion.div
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.4)',
              zIndex: 900,
            }}
          >
            {/* Chat Modal */}
            <motion.div
              onClick={e => e.stopPropagation()} // Prevents closing when clicking inside chat modal
              initial={isMobile ? { opacity: 0, scale: 0.95 } : { opacity: 0, y: 20, scale: 0.95 }}
              animate={isMobile ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={isMobile ? { opacity: 0, scale: 0.95 } : { opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={getChatModalStyles()}
            >
              {/* Header */}
              <div style={getHeaderStyles()}>
                <span style={{ flex: 1, textAlign: 'left', paddingLeft: '16px' }}>
                  Credora Assistant
                </span>
                {/* Button container absolutely positioned at top-right */}
                <div style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  display: 'flex',
                  gap: '8px'
                }}>
                  <HeaderButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMinimized(!isMinimized);
                    }}
                    isMobile={isMobile}
                    isVerySmall={isVerySmall}
                  >
                    {isMinimized ? <FaRobot /> : <FaTimes style={{ transform: 'rotate(45deg)' }} />}
                  </HeaderButton>
                  <HeaderButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                    isMobile={isMobile}
                    isVerySmall={isVerySmall}
                  >
                    <FaTimes />
                  </HeaderButton>
                </div>
              </div>

              {/* Messages Area */}
              <div style={{
                flex: 1,
                overflowY: "auto",
                padding: isMobile ? "16px 12px" : "20px 16px",
                background: colors.background,
              }}>
                {messages.map(message => (
                  <div key={message.id}>
                    <div
                      style={getMessageStyles(message.sender)}
                      dangerouslySetInnerHTML={{ __html: message.text }}
                    />
                    {message.sender === "bot" && (
                      <div style={{ 
                        display: "flex", 
                        gap: "4px", 
                        marginTop: "4px", 
                        marginLeft: "4px",
                        marginBottom: "8px"
                      }}>
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
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div style={{
                    ...getMessageStyles("bot"),
                    marginRight: "auto"
                  }}>
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

              {/* Quick Options */}
              {showOptions && (
                <div style={getQuickOptionsStyles()}>
                  {quickOptions.map((option, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: isMobile ? "6px" : "8px",
                        padding: isMobile ? "10px" : "12px",
                        background: colors.dark,
                        border: `1px solid ${colors.border}`,
                        borderRadius: isMobile ? "10px" : "12px",
                        cursor: "pointer",
                        color: colors.text,
                        fontSize: isMobile ? (isVerySmall ? "0.8rem" : "0.85rem") : "0.9rem",
                        transition: "all 0.2s",
                      }}
                      onClick={() => handleQuickOption(option)}
                    >
                      <span style={{ fontSize: isMobile ? "0.9rem" : "1rem" }}>{option.icon}</span>
                      <span>{option.text}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Input Area */}
              <div style={getInputContainerStyles()}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  style={{
                    flex: 1,
                    padding: isMobile ? "12px" : "14px",
                    borderRadius: isMobile ? "10px" : "12px",
                    border: `1px solid ${colors.border}`,
                    background: colors.dark,
                    color: colors.text,
                    fontSize: isMobile ? (isVerySmall ? "0.85rem" : "0.9rem") : "0.95rem",
                    outline: "none",
                    fontFamily: fonts.primary,
                    transition: "border-color 0.2s",
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  style={{
                    background: colors.primary,
                    color: "white",
                    border: "none",
                    borderRadius: isMobile ? "10px" : "12px",
                    width: isMobile ? "44px" : "50px",
                    height: isMobile ? "44px" : "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                  }}
                >
                  <FaPaperPlane size={isMobile ? (isVerySmall ? 14 : 16) : 18} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;