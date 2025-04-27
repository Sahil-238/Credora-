import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRobot, FaTimes, FaHome, FaInfoCircle, FaBriefcase, 
  FaCertificate, FaThumbsUp, FaThumbsDown, FaRegSmile
} from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [feedbackStates, setFeedbackStates] = useState({});
  const messagesEndRef = useRef(null);

  const quickOptions = [
    { icon: <FaHome />, text: "Tell me about Credora" },
    { icon: <FaBriefcase />, text: "Available internships" },
    { icon: <FaCertificate />, text: "Certificate verification" },
    { icon: <FaInfoCircle />, text: "Meet the team" }
  ];
    // RL Policy Management
    const rlPolicy = useRef({
      explorationRate: 0.2,
      get shouldExplore() {
        return Math.random() < this.explorationRate;
      }
    });
  
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

  const formatBotResponse = (response) => {
    return response
      .split('\n')
      .map(line => line.trim())
      .filter(line => line)
      .join('\n\n');
  };

  const addMessage = useCallback((text, sender) => {
    const formattedText = sender === 'bot' ? formatBotResponse(text) : text;
    setMessages(prev => [...prev, { text: formattedText, sender, id: Date.now() }]);
  }, []);
    // RL Feedback Handler
    const handleFeedback = async (messageId, isHelpful) => {
      try {
        const response = await fetch(`/api/chat/feedback/${messageId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ helpful: isHelpful })
        });
        
        if (response.ok) {
          setFeedbackStates(prev => ({
            ...prev,
            [messageId]: isHelpful ? 'helpful' : 'unhelpful'
          }));
          
          // Adjust exploration rate based on feedback
          rlPolicy.current.explorationRate = Math.max(
            0.1,
            rlPolicy.current.explorationRate * (isHelpful ? 0.95 : 1.05)
          );
        }
      } catch (error) {
        console.error('Feedback submission failed:', error);
      }
    };
  
    // RL Response Selection
    const getRLResponse = async (userMessage) => {
      try {
        const response = await fetch(
          `/api/chat/similar?query=${encodeURIComponent(userMessage)}&helpful=true`
        );
        const similarResponses = await response.json();
        
        if (similarResponses.length > 0 && !rlPolicy.current.shouldExplore) {
          // Select best response based on RL score
          const bestResponse = similarResponses[0].bot_response;
          await recordResponseUsage(similarResponses[0].id);
          return bestResponse;
        }
      } catch (error) {
        console.error('RL response fetch failed:', error);
      }
      return null;
    };
  
    const recordResponseUsage = async (interactionId) => {
      try {
        await fetch(`/api/chat/interaction/${interactionId}/usage`, {
          method: 'POST'
        });
      } catch (error) {
        console.error('Usage recording failed:', error);
      }
    };

  const hasGreeted = useRef(false);
  useEffect(() => {
    if (!hasGreeted.current) {
      hasGreeted.current = true;
      setIsOpen(true);
      setTimeout(() => {
        addMessage("Hello! I'm Credora Assist. How may I help you today?", 'bot');
      }, 1000);
    }
  }, [addMessage]);

  const handleQuickOption = (option) => {
    addMessage(option.text, 'user');
    handleBotResponse(option.text);
  };

  const handleBotResponse = async (userMessage) => {
    setIsTyping(true);
    const msg = userMessage.trim().toLowerCase();

    // Custom replies for greetings and thanks
    if (["hi", "hello", "hey"].includes(msg)) {
      addMessage("Hello! How can I assist you today?", 'bot');
      setIsTyping(false);
      return;
    }

    if (["thank you", "thanks", "ty", "thankyou"].includes(msg)) {
      addMessage("You're welcome! Let me know if there's anything else I can help with.", 'bot');
      setIsTyping(false);
      return;
    }

    try {
      const systemPrompt = `You are Credora Assist, a professional and helpful AI assistant for Credora. Here's updated information about Credora:

- Credora is a dynamic and fast-growing internship platform dedicated to empowering students and early-career professionals.
- Located in Wardha, Maharashtra.
- Founders: Sahil Dhawale (Founder), Nayan Raut (Co-Founder), Aniket Kumare (HR).
- Offers internships in domains like Web Development (Frontend, Backend, Full Stack), Mobile App Development (iOS, Android, Flutter), Data Science (Machine Learning, Artificial Intelligence, Deep Learning), Data Analysis (Visualization, Reporting, Excel, Python), Content Writing (Blogs, Technical Writing, SEO), Human Resources (Recruitment, Talent Acquisition), Social Media Marketing (Strategy, Content Creation, Growth Hacking), Business Development (Sales, Market Research, CRM Management), and Graphic Designing (Branding, UI/UX Design, Visual Storytelling).
- Internships are remote, providing unmatched flexibility and real-world experience.
- Certificates are awarded upon successful completion of the program.
- Frequently Asked Questions (FAQs) include details about application processes, tasks, certificates, and more.
- Contact: hr@credora.space / aniket@credora.space.
- Welcome to Credora: Your Ultimate Internship Journey!
- Location: Wardha, Maharashtra
- Our Team:
- Sahil Dhawale - Founder
- Nayan Raut - Co-Founder
- Aniket Kumare - HR
- About Credora:
- Credora is a dynamic and fast-growing internship platform dedicated to empowering students and early-career professionals. We offer practical, hands-on exposure across a wide variety of in-demand domains. Our internships are conducted entirely remotely, giving participants unmatched flexibility, real-world work experience, and the opportunity to build strong portfolios. Each intern not only sharpens their skills but also earns certificates that significantly boost their career profiles.
- At Credora, we believe in nurturing talent, providing mentorship, and creating a vibrant, engaging learning environment.
- Domains Offered at Credora:
- Web Development (Frontend, Backend, Full Stack)
- Mobile App Development (iOS, Android, Flutter)
- Data Science (Machine Learning, Artificial Intelligence, Deep Learning)
- Data Analysis (Visualization, Reporting, Excel, Python)
- Content Writing (Blogs, Technical Writing, SEO)
- Human Resources (Recruitment, Talent Acquisition)
- Social Media Marketing (Strategy, Content Creation, Growth Hacking)
- Business Development (Sales, Market Research, CRM Management)
- Graphic Designing (Branding, UI/UX Design, Visual Storytelling)
- Frequently Asked Questions (FAQs):
- Q1: What is Credora?
- Credora is your gateway to premium internship programs across multiple professional fields. We help you build a solid career foundation through live projects, continuous mentorship, industry-aligned tasks, and recognized certifications.
- Q2: Are the internships paid?
- Most of our internships are currently unpaid but packed with value! You gain mentorship, real-world exposure, portfolio-building projects, personalized feedback, certificates, and even opportunities to win bonuses through competitions.
- Q3: How can I apply for an internship?
- You can apply by filling out our Internship Interest Forms, available through LinkedIn posts, WhatsApp broadcasts, and other community groups. Selected candidates will receive an official offer letter via email.
- Q4: I didn't receive my offer letter. What should I do?
- First, check your spam or junk mail folders. If not found, it’s possible your application was submitted after the first batch of selections. Stay tuned for further opportunities!
- Q5: What tasks will I have to complete?
- Tasks are assigned weekly, simulating real-world work scenarios. They are designed to be moderately challenging, helping you upskill while building an impressive portfolio.
- Q6: How are tasks submitted?
- You’ll receive weekly submission links (Google Forms or portal links) through your domain-specific WhatsApp groups.
- Q7: Will I receive a certificate?
- Absolutely! Upon successful completion of the internship, fulfilling all submission and participation requirements, you’ll receive a verified digital certificate.
- Q8: How can I connect with fellow interns?
- All interns are grouped into domain-specific WhatsApp groups for updates, discussions, collaboration, and query resolution. Plus, live meets and virtual workshops are organized regularly!
- Your Internship Journey at Credora:
- 1. Complete the Internship Interest Form.
- 2. Await shortlisting and receive your official offer letter.
- 3. Join your domain-specific WhatsApp group.
- 4. Receive and complete weekly tasks and assignments.
- 5. Submit tasks by the specified deadlines.
- 6. Participate in live meets, webinars, and Q&A sessions.
- 7. Successfully complete the program and receive your certificate!
- Important Reminders for Interns:
- Check your email (including spam folders) regularly for updates.
- Stay responsive and active in all communication channels.
- Meet deadlines diligently to qualify for certifications.
- Engage with your peers and mentors actively.
- Follow Credora on LinkedIn for exclusive news, updates, and tips.
- Special Engagement Activities:
- LinkedIn Profile Update: Add "Credora Intern" to your LinkedIn Experience section.
- Social Media Challenge: Post your offer letter, tag Credora, and get a chance to win Amazon vouchers worth ₹1000!
- Hackathons & Contests: Join our exclusive hackathons and competitions to win exciting prizes and bonus certificates.
- Leaderboards: Top performers get special recognition on our LinkedIn page and other bonus rewards!
- Contact and Support:
- Official Email: hr@credora.space / aniket@credora.space
- LinkedIn: https://www.linkedin.com/company/credora-space
- WhatsApp: Invitation links are sent along with offer letters. Join early to stay informed!
- Thank You for Choosing Credora!
- We are excited to have you onboard. Get ready to explore, learn, innovate, and grow. Your career journey starts here, and we're honored to be part of it. Let's create success together—one project, one skill, one achievement at a time!
- Welcome to the Credora Family!

Interaction Guidelines:
- Provide professional, concise, and relevant responses.
- Avoid unnecessary information unless explicitly asked.
- Use a warm and friendly tone while maintaining professionalism.
- For WhatsApp and LinkedIn links, provide clickable text like "Join WhatsApp group" or "See our LinkedIn page" that redirects users to the respective links in a new tab.
- Ensure responses are natural and human-like.`;

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

      // Replace links with clickable text
      botResponse = botResponse.replace(
        'https://chat.whatsapp.com/CSAG3Ev8PdE3yXMlqL14wb',
        '<a href="https://chat.whatsapp.com/CSAG3Ev8PdE3yXMlqL14wb" target="_blank" rel="noopener noreferrer">Join WhatsApp group</a>'
      );
      botResponse = botResponse.replace(
        'https://www.linkedin.com/company/credora-space',
        '<a href="https://www.linkedin.com/company/credora-space" target="_blank" rel="noopener noreferrer">See our LinkedIn page</a>'
      );

      addMessage(botResponse, 'bot');
    } catch (error) {
      addMessage('Sorry, I encountered an error. Please try again later.', 'bot');
    }

    setIsTyping(false);
    setShowOptions(false);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    addMessage(input, 'user');
    setInput('');
    await handleBotResponse(input);
  };

  const styles = {
    container: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
    },
    chatIcon: {
      backgroundColor: '#2563eb',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    },
    chatWindow: {
      position: 'absolute',
      bottom: '80px',
      right: '0',
      width: '350px',
      height: '500px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      backgroundColor: '#2563eb',
      padding: '16px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    messagesContainer: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px',
      scrollBehavior: 'smooth',
    },
    message: {
      marginBottom: '16px',
      maxWidth: '80%',
      padding: '12px',
      borderRadius: '8px',
      whiteSpace: 'pre-wrap',
    },
    userMessage: {
      backgroundColor: '#2563eb',
      color: 'white',
      marginLeft: 'auto',
    },
    botMessage: {
      backgroundColor: '#f8fafc',
      color: '#1e293b',
    },
    quickOptions: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '8px',
      padding: '16px',
    },
    quickOption: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px',
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.2s',
    },
    inputContainer: {
      padding: '16px',
      borderTop: '1px solid #e2e8f0',
      display: 'flex',
      gap: '8px',
    },
    input: {
      flex: 1,
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      fontSize: '14px',
    },
    sendButton: {
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '12px 24px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
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
              <h3>Credora Assist</h3>
              <FaTimes
                style={{ cursor: 'pointer' }}
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div style={styles.messagesContainer}>
              {messages.map(message => (
                <div
                  key={message.id}
                  style={{
                    ...styles.message,
                    ...(message.sender === 'user' ? styles.userMessage : styles.botMessage),
                  }}
                  dangerouslySetInnerHTML={{ __html: message.text }}
                />
              ))}
              {isTyping && (
                <div style={{ ...styles.message, ...styles.botMessage }}>
                  Typing...
                </div>
              )}
            </div>
            {showOptions && (
              <div style={styles.quickOptions}>
                {quickOptions.map((option, index) => (
                  <div
                    key={index}
                    style={styles.quickOption}
                    onClick={() => handleQuickOption(option)}
                  >
                    {option.icon}
                    <span>{option.text}</span>
                  </div>
                ))}
              </div>
            )}
            <div style={styles.inputContainer}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                style={styles.input}
              />
              <button onClick={handleSend} style={styles.sendButton}>
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;