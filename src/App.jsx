import { useState, useEffect } from 'react';
import { Box, CheckCircle2, Database, Monitor, Cpu, Layers, Zap, Settings, Layout, Globe, ShieldAlert, ArrowLeft, Star } from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [subject, setSubject] = useState('ICT');
  const [countdown, setCountdown] = useState({});
  const [starredQuestions, setStarredQuestions] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('starredQuestions')) || {};
    } catch {
      return {};
    }
  });

  // Exam dates for each subject
  const examDates = {
    Chinese: '2026-04-09',
    English: '2026-04-10',
    Maths: '2026-04-13',
    CS: '2026-04-14',
    Physics: '2026-04-22',
    ICT: '2026-04-24',
    M2: '2026-04-30'
  };

  // Calculate countdown for a specific date
  const calculateCountdown = (dateString) => {
    // Parse date as local timezone (not UTC)
    const [year, month, day] = dateString.split('-');
    const targetDate = new Date(year, parseInt(month) - 1, day, 0, 0, 0, 0).getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  // Countdown Timer Effect
  useEffect(() => {
    const updateCountdown = () => {
      const newCountdown = {};
      Object.entries(examDates).forEach(([subject, date]) => {
        newCountdown[subject] = calculateCountdown(date);
      });
      setCountdown(newCountdown);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Get next exam
  const getNextExam = () => {
    let nextExam = null;
    let minDays = Infinity;
    Object.entries(examDates).forEach(([subject, date]) => {
      const cd = countdown[subject] || { days: 0, hours: 0, minutes: 0, seconds: 0 };
      if (cd.days >= 0 && cd.days < minDays) {
        minDays = cd.days;
        nextExam = subject;
      }
    });
    return nextExam;
  }; 

  // Handle starring questions
  const toggleStar = (questionId) => {
    setStarredQuestions(prev => {
      const updated = { ...prev };
      if (updated[questionId]) {
        delete updated[questionId];
      } else {
        updated[questionId] = true;
      }
      localStorage.setItem('starredQuestions', JSON.stringify(updated));
      return updated;
    });
  };

  // Star Button Component
  const StarButton = ({ questionId }) => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleStar(questionId);
      }}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '6px',
        transition: 'all 0.2s',
        backgroundColor: starredQuestions[questionId] ? '#fef3c7' : '#f3f4f6'
      }}
      title={starredQuestions[questionId] ? 'Unstar question' : 'Star question'}
    >
      <Star
        size={20}
        fill={starredQuestions[questionId] ? '#fbbf24' : 'none'}
        color={starredQuestions[questionId] ? '#f59e0b' : '#9ca3af'}
      />
    </button>
  );

  const topics = [
    // --- Chinese Topics ---
    { id: 'chinese_01', title: 'Ch1: 出師表', description: '語譯和問答 - Classical Chinese Translation & Q&A', icon: <Globe />, category: 'Classical Chinese', color: '#dc2626' },

    // --- ICT Topics ---
    { id: 'ict_comp_a_ch1', title: 'Compulsory A Ch1: Data and Information', description: 'Data Types, Images, & Information Age', icon: <Box />, category: 'Compulsory A', color: '#2563eb' },
    { id: 'ict_comp_a_ch2', title: 'Compulsory A Ch2: Data Control', description: 'GIGO, Data Validation & Verification', icon: <CheckCircle2 />, category: 'Compulsory A', color: '#3b82f6' },
    { id: 'ict_comp_a_ch3', title: 'Compulsory A Ch3: Data Representation', description: 'Data Representation & File Formats', icon: <Database />, category: 'Compulsory A', color: '#10b981' },
    { id: 'ict_comp_b_ch1', title: 'Compulsory B Ch1: Hardware Components', description: 'Monitors, Projectors, & Printers Comparison', icon: <Monitor />, category: 'Compulsory B', color: '#4f46e5' },
    { id: 'ict_comp_b_ch2', title: 'Compulsory B Ch2: System Hardware', description: 'The System Unit, CPU, GPU, & Storage', icon: <Cpu />, category: 'Compulsory B', color: '#0891b2' },
    { id: 'ict_comp_b_ch3', title: 'Compulsory B Ch3: System Software', description: 'System Software, OS, & Utilities', icon: <Layers />, category: 'Compulsory B', color: '#7c3aed' },
    { id: 'ict_comp_c_ch1', title: 'Compulsory C Ch1: Computer Networking and Internet Basics', description: 'Computer Networking & Internet Access', icon: <Zap />, category: 'Compulsory C', color: '#8b5cf6' },
    { id: 'ict_comp_c_ch2', title: 'Compulsory C Ch2: Internet Protocols', description: 'Network Protocols & IP Addressing', icon: <Settings />, category: 'Compulsory C', color: '#f59e0b' },
    { id: 'ict_comp_c_ch3', title: 'Compulsory C Ch3: Internet Services & Applications', description: 'IoT, Cloud, Smart City, & Online Services', icon: <Layout />, category: 'Compulsory C', color: '#db2777' },
    { id: 'ict_comp_c_ch4', title: 'Compulsory C Ch4: Web Authoring Basics', description: 'HTML, Editors, Tags, & UI/UX Design', icon: <Globe />, category: 'Compulsory C', color: '#ec4899' },
    { id: 'ict_comp_c_ch5', title: 'Compulsory C Ch5: Network Security & Privacy', description: 'Malware, Attacks, Protection, & Privacy', icon: <ShieldAlert />, category: 'Compulsory C', color: '#dc2626' },
    
    // --- Physics Topics ---
    { id: 'phy_comp_4_ch2', title: 'Compulsory 4 Ch2: Electric Circuits', description: 'Electric Circuits, Current & Voltage', icon: <Zap />, category: 'Compulsory 4', color: '#f97316' },
    { id: 'phy_comp_4_ch3', title: 'Compulsory 4 Ch3: Domestic Electricity', description: 'Domestic Electricity, Safety & Appliances', icon: <Zap />, category: 'Compulsory 4', color: '#f97316' },
    { id: 'phy_e_2_ch1', title: 'E2 Ch1: Rutherford\'s atomic model', description: 'Rutherford\'s Model, Scattering & Limitations', icon: <Zap />, category: 'Elective 2', color: '#f97316' },
    { id: 'phy_e_3_ch1', title: 'E3 Ch1: Electricity at home', description: 'Efficiency, Lighting, Appliances & AC', icon: <Zap />, category: 'Elective 3', color: '#eab308' },
    { id: 'phy_e_3_ch2', title: 'E3 Ch2: Energy efficiency in buildings', description: 'Conduction, Radiation & Vehicles', icon: <Zap />, category: 'Elective 3', color: '#f59e0b' },
    { id: 'phy_e_3_ch3', title: 'E3 Ch3: Renewable energy', description: 'Nuclear, Wind, Hydro & Solar Energy', icon: <Zap />, category: 'Elective 3', color: '#84cc16' },
  ];

  const handleInputChange = (id, val) => {
    setUserAnswers(prev => ({ ...prev, [id]: val }));
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setShowAnswers(false);
  };

  // Define categories per subject
  const categories = {
    Chinese: ['Classical Chinese'],
    ICT: ['Compulsory A', 'Compulsory B', 'Compulsory C'],
    Physics: ['Compulsory 4', 'Elective 2', 'Elective 3']
  };

  const styles = {
    container: { minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif' },
    wrapper: { maxWidth: '1000px', margin: '0 auto' },
    header: { textAlign: 'center', marginBottom: '40px' },
    title: { fontSize: '2.5rem', fontWeight: '800', color: '#1e1b4b', marginBottom: '10px', letterSpacing: '-0.025em' },
    subtitle: { color: '#64748b', fontSize: '1.1rem', marginBottom: '20px' },
    
    // New Style for Subject Toggle
    subjectToggleContainer: { display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px' },
    subjectBtn: (isActive) => ({
      padding: '10px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', fontWeight: '700', fontSize: '1rem', transition: 'all 0.2s',
      backgroundColor: isActive ? '#4f46e5' : '#e2e8f0', color: isActive ? 'white' : '#64748b', boxShadow: isActive ? '0 4px 12px rgba(79, 70, 229, 0.3)' : 'none'
    }),

    categoryTitle: { fontSize: '1.25rem', fontWeight: '700', marginBottom: '20px', borderLeft: '4px solid #4f46e5', paddingLeft: '15px', color: '#334155', marginTop: '40px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
    card: { display: 'flex', alignItems: 'center', padding: '24px', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' },
    iconBox: { padding: '12px', borderRadius: '12px', marginRight: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    quizBox: { backgroundColor: '#fff', borderRadius: '24px', padding: '30px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' },
    backBtn: { display: 'flex', alignItems: 'center', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', marginBottom: '24px', fontWeight: '600' },
    qSection: { marginBottom: '40px', padding: '20px', borderRadius: '12px', border: '1px solid #f1f5f9', backgroundColor: '#fdfdff' },
    qTitle: { fontSize: '1.2rem', fontWeight: '700', color: '#4338ca', marginBottom: '15px' },
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '10px' },
    th: { backgroundColor: '#f8fafc', padding: '12px', textAlign: 'left', border: '1px solid #e2e8f0', fontSize: '0.9rem', color: '#64748b' },
    td: { padding: '10px', border: '1px solid #e2e8f0' },
    input: { width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.95rem' },
    answerKey: { marginTop: '10px', padding: '12px', backgroundColor: '#f0fdf4', borderRadius: '8px', borderLeft: '4px solid #22c55e', color: '#166534', fontSize: '0.9rem', whiteSpace: 'pre-wrap' },
    submitBtn: { backgroundColor: '#4f46e5', color: 'white', padding: '14px 30px', borderRadius: '12px', border: 'none', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s' },
    timerContainer: { backgroundColor: '#fee2e2', border: '2px solid #dc2626', borderRadius: '12px', padding: '20px', marginBottom: '30px', textAlign: 'center' },
    timerTitle: { fontSize: '1.1rem', fontWeight: '700', color: '#991b1b', marginBottom: '10px' },
    timerDisplay: { display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' },
    timerUnit: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
    timerNumber: { fontSize: '2.5rem', fontWeight: '800', color: '#dc2626', minWidth: '80px' },
    timerLabel: { fontSize: '0.9rem', color: '#991b1b', fontWeight: '600', marginTop: '5px' },
    examSchedule: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', marginTop: '15px' },
    examCard: (isNext) => ({
      padding: '12px',
      borderRadius: '8px',
      backgroundColor: isNext ? '#fef3c7' : '#f9fafb',
      border: `2px solid ${isNext ? '#d97706' : '#e5e7eb'}`,
      textAlign: 'center',
      transition: 'all 0.3s'
    }),
    examSubject: { fontSize: '0.85rem', fontWeight: '700', color: '#374151', marginBottom: '6px' },
    examDate: { fontSize: '0.75rem', color: '#6b7280', marginBottom: '6px' },
    examCountdown: { fontSize: '0.8rem', fontWeight: '600', color: '#1f2937' },
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {currentView === 'home' ? (
          <div>
            <header style={styles.header}>
              <h1 style={styles.title}>Study Portal</h1>
              <p style={styles.subtitle}>I'm cooked fuck you HKDSE</p>
              
              {/* Exam Schedule Countdown */}
              <div style={styles.timerContainer}>
                <div style={styles.timerTitle}>📋 Exam Schedule Countdown</div>
                <div style={styles.examSchedule}>
                  {Object.entries(examDates).map(([subject, date]) => {
                    const cd = countdown[subject] || { days: 0, hours: 0, minutes: 0, seconds: 0 };
                    const isNext = subject === getNextExam();
                    const dateObj = new Date(date);
                    const dateStr = `${String(dateObj.getDate()).padStart(2, '0')}/${String(dateObj.getMonth() + 1).padStart(2, '0')}`;
                    return (
                      <div key={subject} style={styles.examCard(isNext)}>
                        <div style={styles.examSubject}>{subject}</div>
                        <div style={styles.examDate}>{dateStr}/2026</div>
                        <div style={styles.examCountdown}>
                          {cd.days}d {cd.hours}h {cd.minutes}m
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Subject Selector */}
              <div style={styles.subjectToggleContainer}>
                <button style={styles.subjectBtn(subject === 'Chinese')} onClick={() => setSubject('Chinese')}>Chinese</button>
                <button style={styles.subjectBtn(subject === 'ICT')} onClick={() => setSubject('ICT')}>ICT</button>
                <button style={styles.subjectBtn(subject === 'Physics')} onClick={() => setSubject('Physics')}>Physics</button>
              </div>
            </header>
            
            {categories[subject].map(cat => (
              <div key={cat}>
                <h2 style={styles.categoryTitle}>{cat}</h2>
                <div style={styles.grid}>
                  {topics.filter(t => t.category === cat).map(topic => (
                    <div key={topic.id} style={styles.card} onClick={() => { setSelectedTopic(topic.id); setCurrentView('quiz'); resetQuiz(); }}>
                      <div style={{...styles.iconBox, backgroundColor: `${topic.color}15`, color: topic.color}}>{topic.icon}</div>
                      <div>
                        <div style={{fontWeight: '700', fontSize: '1.1rem'}}>{topic.title}</div>
                        <div style={{fontSize: '0.85rem', color: '#64748b'}}>{topic.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={styles.quizBox}>
            <button style={styles.backBtn} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
            <h2 style={{fontSize: '1.75rem', fontWeight: '800', marginBottom: '30px', color: '#1e1b4b'}}>{selectedTopic === 'chinese_01' ? '出師表' : selectedTopic === 'chinese_01' ? '出師表' : selectedTopic.replace(/_/g, ' ').toUpperCase()}</h2>
            
            {/* Chinese Components */}
            {selectedTopic === 'chinese_01' && <Chinese_01 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            
            {/* ICT Components */}
            {selectedTopic === 'ict_comp_a_ch1' && <ICT_Comp_A_Ch1 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            {selectedTopic === 'ict_comp_a_ch2' && <ICT_Comp_A_Ch2 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            {selectedTopic === 'ict_comp_a_ch3' && <ICT_Comp_A_Ch3 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            {selectedTopic === 'ict_comp_b_ch1' && <ICT_Comp_B_Ch1 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            {selectedTopic === 'ict_comp_b_ch2' && <ICT_Comp_B_Ch2 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            {selectedTopic === 'ict_comp_b_ch3' && <ICT_Comp_B_Ch3 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            {selectedTopic === 'ict_comp_c_ch1' && <ICT_Comp_C_Ch1 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            {selectedTopic === 'ict_comp_c_ch2' && <ICT_Comp_C_Ch2 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            {selectedTopic === 'ict_comp_c_ch3' && <ICT_Comp_C_Ch3 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            {selectedTopic === 'ict_comp_c_ch4' && <ICT_Comp_C_Ch4 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            {selectedTopic === 'ict_comp_c_ch5' && <ICT_Comp_C_Ch5 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            
            {/* Physics Components */}
            {selectedTopic === 'phy_comp_4_ch2' && <Phy_Comp_4_Ch2 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            {selectedTopic === 'phy_comp_4_ch3' && <Phy_Comp_4_Ch3 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            {selectedTopic === 'phy_e_2_ch1' && <Phy_E_2_Ch1 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            {selectedTopic === 'phy_e_3_ch1' && <Phy_E_3_Ch1 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            {selectedTopic === 'phy_e_3_ch2' && <Phy_E_3_Ch2 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
            {selectedTopic === 'phy_e_3_ch3' && <Phy_E_3_Ch3 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}

            <div style={{textAlign: 'center', marginTop: '40px'}}>
              {!showAnswers ? (
                <button style={styles.submitBtn} onClick={() => setShowAnswers(true)}>Check My Answers</button>
              ) : (
                <button style={{...styles.submitBtn, backgroundColor: '#64748b'}} onClick={() => setShowAnswers(false)}>Hide Answers</button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- COMPULSORY A CH 1 ---
const ICT_Comp_A_Ch1 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Text */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Text Types</h3>
        <StarButton questionId="a1q1" />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <p>Definition of <b>Plain Text</b>:</p>
        <input style={styles.input} onChange={(e) => onChange('a1q1_plain', e.target.value)} value={userAnswers.a1q1_plain || ''}/>
        <p>Definition of <b>Formatted Text</b>:</p>
        <input style={styles.input} onChange={(e) => onChange('a1q1_form', e.target.value)} value={userAnswers.a1q1_form || ''}/>
        <p>Difference between them:</p>
        <input style={styles.input} onChange={(e) => onChange('a1q1_diff', e.target.value)} value={userAnswers.a1q1_diff || ''}/>
      </div>
      {showAnswers && <div style={styles.answerKey}>Plain Text: Stores characters only. Formatted Text: Stores characters and their formatting data. Difference: Formatted text usually has larger file size.</div>}
    </div>

    {/* Q2: Image */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Image Representation</h3>
        <StarButton questionId="a1q2" />
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div>
          <p><b>Bitmap Image</b></p>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginBottom: '8px'}}>Definition:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('a1q2_bit_def', e.target.value)} value={userAnswers.a1q2_bit_def || ''}/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '10px', marginBottom: '8px'}}>Advantages:</p>
          <input style={{...styles.input, marginBottom: '8px'}} placeholder="Advantage 1" onChange={(e) => onChange('a1q2_bit_adv1', e.target.value)} value={userAnswers.a1q2_bit_adv1 || ''}/>
          <input style={styles.input} placeholder="Advantage 2" onChange={(e) => onChange('a1q2_bit_adv2', e.target.value)} value={userAnswers.a1q2_bit_adv2 || ''}/>
        </div>
        <div>
          <p><b>Vector Image</b></p>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginBottom: '8px'}}>Definition:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('a1q2_vec_def', e.target.value)} value={userAnswers.a1q2_vec_def || ''}/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '10px', marginBottom: '8px'}}>Advantages:</p>
          <input style={{...styles.input, marginBottom: '8px'}} placeholder="Advantage 1" onChange={(e) => onChange('a1q2_vec_adv1', e.target.value)} value={userAnswers.a1q2_vec_adv1 || ''}/>
          <input style={styles.input} placeholder="Advantage 2" onChange={(e) => onChange('a1q2_vec_adv2', e.target.value)} value={userAnswers.a1q2_vec_adv2 || ''}/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Bitmap:</b> Stores images as a series of pixels. Adv: 1. Real life images are usually bitmap images 2. Can be edited by common image editing tools<br/>
          <b>Vector:</b> Stores image as mathematical formulae. Adv: 1. Tends to have smaller file size 2. Does not have rough edges and does not become blurry when scaled up
        </div>
      )}
    </div>

    {/* Q3: Information Processing */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Information Processing Steps</h3>
        <StarButton questionId="a1q3" />
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
        {[1, 2, 3, 4].map(i => (
          <input key={i} style={styles.input} placeholder={`Step ${i}`} onChange={(e) => onChange(`a1q3_s${i}`, e.target.value)} value={userAnswers[`a1q3_s${i}`] || ''}/>
        ))}
      </div>
      {showAnswers && <div style={styles.answerKey}>1. Data Collection, 2. Organization, 3. Processing and Analysis, 4. Transmission and Presentation</div>}
    </div>

    {/* Q4: Information Age */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: The Information Age</h3>
        <StarButton questionId="a1q4" />
      </div>
      <p>Definition:</p>
      <input style={styles.input} onChange={(e) => onChange('a1q4_def', e.target.value)} value={userAnswers.a1q4_def || ''}/>
      
      <p style={{marginTop: '15px'}}>Causes (4 points):</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        {[1, 2, 3, 4].map(i => (
          <input key={i} style={styles.input} placeholder={`Cause ${i}`} onChange={(e) => onChange(`a1q4_cause_${i}`, e.target.value)} value={userAnswers[`a1q4_cause_${i}`] || ''}/>
        ))}
      </div>
      
      <p style={{marginTop: '15px'}}>Key Developments (3 points):</p>
      <div style={{display: 'flex', gap: '10px'}}>
        <input style={styles.input} placeholder="1" onChange={(e) => onChange('a1q4_dev1', e.target.value)} value={userAnswers.a1q4_dev1 || ''}/>
        <input style={styles.input} placeholder="2" onChange={(e) => onChange('a1q4_dev2', e.target.value)} value={userAnswers.a1q4_dev2 || ''}/>
        <input style={styles.input} placeholder="3" onChange={(e) => onChange('a1q4_dev3', e.target.value)} value={userAnswers.a1q4_dev3 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Def: Fast development of Information and Communication Technology. Causes: 1. Lower price of device 2. Better performance of devices 3. Better user interface design 4. Faster network connection. Developments: 1. IoT 2. Big Data 3. AI
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

const ICT_Comp_A_Ch2 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: GIGO */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: GIGO & Input Errors</h3>
        <StarButton questionId="a2q1" />
      </div>
      <p>Definition of <b>GIGO</b>:</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('a2q1_gigo', e.target.value)} value={userAnswers.a2q1_gigo || ''}/>
      
      <p style={{marginTop: '15px'}}><b>Input Errors (Name & Definition):</b></p>
      <table style={styles.table}>
        <thead>
          <tr><th style={styles.th}>Error Type Name</th><th style={styles.th}>Definition</th></tr>
        </thead>
        <tbody>
          {['1', '2', '3'].map(idx => (
            <tr key={idx}>
              <td><input style={styles.input} onChange={(e) => onChange(`a2q1_err_name_${idx}`, e.target.value)} value={userAnswers[`a2q1_err_name_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a2q1_err_def_${idx}`, e.target.value)} value={userAnswers[`a2q1_err_def_${idx}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          GIGO: The result of data analysis is not useful when the input data is not reliable.<br/>
          1. Data Source Error: Use incorrect data<br/>
          2. Transcription Error: Data is misread/misheard and inputted<br/>
          3. Transposition Error: The position of input data is wrong
        </div>
      )}
    </div>

    {/* Q2: Data Validation */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Data Validation</h3>
        <StarButton questionId="a2q2" />
      </div>
      <p>Is validation done by computer or human?</p>
      <input style={styles.input} onChange={(e) => onChange('a2q2_who', e.target.value)} value={userAnswers.a2q2_who || ''}/>
      
      <p style={{marginTop: '15px'}}>Name of 7 data checking types:</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
        {[1, 2, 3, 4, 5, 6, 7].map(i => (
          <input key={i} style={styles.input} onChange={(e) => onChange(`a2q2_check_${i}`, e.target.value)} value={userAnswers[`a2q2_check_${i}`] || ''}/>
        ))}
      </div>

      <p style={{marginTop: '15px'}}><b>How UI elements apply data validation:</b></p>
      <table style={styles.table}>
        <thead>
          <tr><th style={styles.th}>UI Element</th><th style={styles.th}>Check Type Applied</th></tr>
        </thead>
        <tbody>
          <tr><td>Radio Button / Drop-down List</td><td><input style={styles.input} onChange={(e) => onChange('a2q2_ui1', e.target.value)} value={userAnswers.a2q2_ui1 || ''}/></td></tr>
          <tr><td>Check Boxes</td><td><input style={styles.input} onChange={(e) => onChange('a2q2_ui2', e.target.value)} value={userAnswers.a2q2_ui2 || ''}/></td></tr>
          <tr><td>Date Picker</td><td><input style={styles.input} onChange={(e) => onChange('a2q2_ui3', e.target.value)} value={userAnswers.a2q2_ui3 || ''}/></td></tr>
        </tbody>
      </table>

      <div style={{marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div style={{padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
          <p style={{fontSize: '1rem', fontWeight: '700', color: '#4338ca', marginBottom: '10px'}}><b>Check Digit Attributes:</b></p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <div>
              <p style={{fontSize: '0.85rem', color: '#64748b', marginBottom: '4px'}}>1. Use for:</p>
              <input style={styles.input} onChange={(e) => onChange('a2q2_cd_1', e.target.value)} value={userAnswers.a2q2_cd_1 || ''}/>
            </div>
            <div>
              <p style={{fontSize: '0.85rem', color: '#64748b', marginBottom: '4px'}}>2. How generated and appended:</p>
              <input style={styles.input} onChange={(e) => onChange('a2q2_cd_2', e.target.value)} value={userAnswers.a2q2_cd_2 || ''}/>
            </div>
            <div>
              <p style={{fontSize: '0.85rem', color: '#64748b', marginBottom: '4px'}}>3. Number of check digits allowed:</p>
              <input style={styles.input} onChange={(e) => onChange('a2q2_cd_3', e.target.value)} value={userAnswers.a2q2_cd_3 || ''}/>
            </div>
            <div>
              <p style={{fontSize: '0.85rem', color: '#64748b', marginBottom: '4px'}}>4. Validity condition:</p>
              <input style={styles.input} onChange={(e) => onChange('a2q2_cd_4', e.target.value)} value={userAnswers.a2q2_cd_4 || ''}/>
            </div>
          </div>
        </div>
        <div style={{padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
          <p style={{fontSize: '1rem', fontWeight: '700', color: '#4338ca', marginBottom: '10px'}}><b>Parity Check Attributes:</b></p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <div>
              <p style={{fontSize: '0.85rem', color: '#64748b', marginBottom: '4px'}}>1. Purpose:</p>
              <input style={styles.input} onChange={(e) => onChange('a2q2_pc_1', e.target.value)} value={userAnswers.a2q2_pc_1 || ''}/>
            </div>
            <div>
              <p style={{fontSize: '0.85rem', color: '#64748b', marginBottom: '4px'}}>2. Parity bit function:</p>
              <input style={styles.input} onChange={(e) => onChange('a2q2_pc_2', e.target.value)} value={userAnswers.a2q2_pc_2 || ''}/>
            </div>
            <div>
              <p style={{fontSize: '0.85rem', color: '#64748b', marginBottom: '4px'}}>3. What it cannot detect:</p>
              <input style={styles.input} onChange={(e) => onChange('a2q2_pc_3', e.target.value)} value={userAnswers.a2q2_pc_3 || ''}/>
            </div>
          </div>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Who: Computer<br/>
          Checks: Range Check, Format Check, Presence Check, Fixed Value Check, Type Check, Length Check, Uniqueness Check<br/>
          UI: Radio/Dropdown: Fixed Value Check | Checkboxes: Fixed Value Check, allows multiple values | Date Picker: Format Check and Type Check<br/>
          Check Digit: 1. Numeric data 2. Generated by algorithm and appended to end 3. Allow more than one 4. If passes algorithm = valid, else invalid<br/>
          Parity Check: 1. Detect error during transmission 2. Parity bit appended to ensure number of 1s is odd or even 3. Cannot detect transposition
        </div>
      )}
    </div>

    {/* Q3: Data Verification */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Data Verification</h3>
        <StarButton questionId="a2q3" />
      </div>
      <p>Is verification done by computer or human?</p>
      <input style={styles.input} onChange={(e) => onChange('a2q3_who', e.target.value)} value={userAnswers.a2q3_who || ''}/>
      
      <p style={{marginTop: '15px'}}><b>Name 3 data verification methods:</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input style={styles.input} onChange={(e) => onChange('a2q3_m1', e.target.value)} value={userAnswers.a2q3_m1 || ''}/>
        <input style={styles.input} onChange={(e) => onChange('a2q3_m2', e.target.value)} value={userAnswers.a2q3_m2 || ''}/>
        <input style={styles.input} onChange={(e) => onChange('a2q3_m3', e.target.value)} value={userAnswers.a2q3_m3 || ''}/>
      </div>
      {showAnswers && <div style={styles.answerKey}>Verification done by: Human. Methods: 1. Double data entry 2. Input data twice 3. Proofreading data</div>}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

const ICT_Comp_A_Ch3 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Unit of Data */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Unit of Data</h3>
        <StarButton questionId="a3q1" />
      </div>
      <p>Unit of data (smallest):</p>
      <input style={styles.input} onChange={(e) => onChange('a3q1_unit', e.target.value)} value={userAnswers.a3q1_unit || ''}/>
      
      <p style={{marginTop: '10px'}}>Conversion of unit:</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
        <div>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>8 bit =</p>
          <input style={styles.input} onChange={(e) => onChange('a3q1_conv1', e.target.value)} value={userAnswers.a3q1_conv1 || ''}/>
        </div>
        <div>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>1 KB =</p>
          <input style={styles.input} onChange={(e) => onChange('a3q1_conv2', e.target.value)} value={userAnswers.a3q1_conv2 || ''}/>
        </div>
      </div>

      <p style={{marginTop: '15px'}}>Unit of data transferred per unit time:</p>
      <input style={styles.input} onChange={(e) => onChange('a3q1_transfer', e.target.value)} value={userAnswers.a3q1_transfer || ''}/>
      
      <p style={{marginTop: '10px'}}>Conversion:</p>
      <input style={styles.input} placeholder="1 kbps =" onChange={(e) => onChange('a3q1_transfer_conv', e.target.value)} value={userAnswers.a3q1_transfer_conv || ''}/>

      <p style={{marginTop: '15px'}}>Maximum number of patterns represented by binary number (n bits):</p>
      <input style={styles.input} onChange={(e) => onChange('a3q1_patterns', e.target.value)} value={userAnswers.a3q1_patterns || ''}/>
      
      {showAnswers && <div style={styles.answerKey}>Unit: bit (b). Conversions: 8 bit = 1 byte, 1024 B = 1 KB. Transfer unit: bps. Conversion: 1000 bps = 1 kbps. Patterns: 2^n</div>}
    </div>

    {/* Q2: Representing Numbers */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Representing Numbers</h3>
        <StarButton questionId="a3q2" />
      </div>
      
      <div style={{marginBottom: '20px'}}>
        <p><b>Unsigned Integer</b></p>
        <p style={{fontSize: '0.9rem', color: '#64748b', marginBottom: '8px'}}>Definition:</p>
        <input style={styles.input} onChange={(e) => onChange('a3q2_u_def', e.target.value)} value={userAnswers.a3q2_u_def || ''}/>
        <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '10px', marginBottom: '8px'}}>Range (n bits):</p>
        <input style={styles.input} onChange={(e) => onChange('a3q2_u_range', e.target.value)} value={userAnswers.a3q2_u_range || ''}/>
      </div>

      <div style={{marginBottom: '20px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
        <p style={{fontWeight: '700', color: '#4338ca', marginBottom: '10px'}}><b>Signed Integer (Two Methods)</b></p>
        
        <div style={{marginBottom: '15px'}}>
          <p><b>Two's Complement Representation</b></p>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginBottom: '8px'}}>First bit meaning (0/1):</p>
          <input style={styles.input} onChange={(e) => onChange('a3q2_tcr_bit', e.target.value)} value={userAnswers.a3q2_tcr_bit || ''}/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '10px', marginBottom: '8px'}}>Range (n bits):</p>
          <input style={styles.input} onChange={(e) => onChange('a3q2_tcr_range', e.target.value)} value={userAnswers.a3q2_tcr_range || ''}/>
        </div>

        <div>
          <p><b>Two's Complement</b></p>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginBottom: '8px'}}>Conversion method:</p>
          <input style={styles.input} onChange={(e) => onChange('a3q2_tc_method', e.target.value)} value={userAnswers.a3q2_tc_method || ''}/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '10px', marginBottom: '8px'}}>Range (n bits):</p>
          <input style={styles.input} onChange={(e) => onChange('a3q2_tc_range', e.target.value)} value={userAnswers.a3q2_tc_range || ''}/>
        </div>
      </div>

      <p><b>Relationship between Two's Complement and Two's Complement Representation</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q2_rel', e.target.value)} value={userAnswers.a3q2_rel || ''}/>
      
      {showAnswers && <div style={styles.answerKey}>Unsigned: Positive integer, Range 0 to (2^n)-1. Two's Complement Representation: First bit 1=negative 0=positive, Range -(2^(n-1)) to 2^(n-1)-1. Two's Complement: Interchange 1 and 0 then add 1, Range -(2^(n-1))+1 to 2^(n-1). Relationship: Two's complement of X is the two's complement representation of -X</div>}
    </div>

    {/* Q3: Character Encoding */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Character Encoding Systems</h3>
        <StarButton questionId="a3q3" />
      </div>
      
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Encoding System</th>
            <th style={styles.th}>Language / Characters</th>
            <th style={styles.th}>Bits Used</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>ASCII</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_ascii_lang', e.target.value)} value={userAnswers.a3q3_ascii_lang || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_ascii_bits', e.target.value)} value={userAnswers.a3q3_ascii_bits || ''}/></td>
          </tr>
          <tr>
            <td><b>Big-5</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_big5_lang', e.target.value)} value={userAnswers.a3q3_big5_lang || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_big5_bits', e.target.value)} value={userAnswers.a3q3_big5_bits || ''}/></td>
          </tr>
          <tr>
            <td><b>GuoBiao (GB)</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_gb_lang', e.target.value)} value={userAnswers.a3q3_gb_lang || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_gb_bits', e.target.value)} value={userAnswers.a3q3_gb_bits || ''}/></td>
          </tr>
          <tr>
            <td><b>Unicode</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_unicode_lang', e.target.value)} value={userAnswers.a3q3_unicode_lang || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_unicode_bits', e.target.value)} value={userAnswers.a3q3_unicode_bits || ''}/></td>
          </tr>
        </tbody>
      </table>

      <div style={{marginTop: '20px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
        <p><b>Why use an extra bit for ASCII? (3 reasons)</b></p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px'}}>
          <input style={styles.input} onChange={(e) => onChange('a3q3_reason1', e.target.value)} value={userAnswers.a3q3_reason1 || ''}/>
          <input style={styles.input} onChange={(e) => onChange('a3q3_reason2', e.target.value)} value={userAnswers.a3q3_reason2 || ''}/>
          <input style={styles.input} onChange={(e) => onChange('a3q3_reason3', e.target.value)} value={userAnswers.a3q3_reason3 || ''}/>
        </div>
      </div>

      <div style={{marginTop: '15px'}}>
        <p><b>Consequence of using wrong character encoding system:</b></p>
        <input style={styles.input} onChange={(e) => onChange('a3q3_consequence', e.target.value)} value={userAnswers.a3q3_consequence || ''}/>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          ASCII: English, 7 bit. Big-5: Traditional Chinese, 2 bytes. GuoBiao: Simplified Chinese, 2 bytes. Unicode: Multi-language, 2 to 4 bytes.<br/>
          Reasons for extra bit: 1. Some system process data in byte 2. Represent more character 3. As parity bit<br/>
          Consequence: Garbled text is shown
        </div>
      )}
    </div>

    {/* Q4: Barcode vs QR Code */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Barcode and QR Code</h3>
        <StarButton questionId="a3q4" />
      </div>
      <p style={{marginBottom: '15px'}}>List out comparison of Barcode and QR code in different aspects. Input both aspect name and values:</p>
      <table style={styles.table}>
        <thead>
          <tr><th style={styles.th}>Aspect Name</th><th style={styles.th}>Barcode</th><th style={styles.th}>QR Code</th></tr>
        </thead>
        <tbody>
          {[1, 2, 3].map(i => (
            <tr key={i}>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q4_asp_${i}`, e.target.value)} value={userAnswers[`a3q4_asp_${i}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q4_bar_${i}`, e.target.value)} value={userAnswers[`a3q4_bar_${i}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q4_qr_${i}`, e.target.value)} value={userAnswers[`a3q4_qr_${i}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          1. Character Set: Barcode - limited to ASCII code or number, QR Code - Unicode<br/>
          2. Character Length: Barcode - 50 max, QR Code - at least 1000<br/>
          3. Easy to Scan: Barcode - only from 0 degree or 180 degree, QR Code - any direction and angle
        </div>
      )}
    </div>

    {/* Q5: Analog vs Digital */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: Analog and Digital Data</h3>
        <StarButton questionId="a3q5" />
      </div>
      
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px'}}>
        <div>
          <p><b>Definition of Analog Data:</b></p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q5_a_def', e.target.value)} value={userAnswers.a3q5_a_def || ''}/>
        </div>
        <div>
          <p><b>Definition of Digital Data:</b></p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q5_d_def', e.target.value)} value={userAnswers.a3q5_d_def || ''}/>
        </div>
      </div>
      
      <p><b>Comparison of Analog and Digital Data. Input both aspect name and values:</b></p>
      <table style={styles.table}>
        <thead>
          <tr><th style={styles.th}>Aspect Name</th><th style={styles.th}>Analog</th><th style={styles.th}>Digital</th></tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map(i => (
            <tr key={i}>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q5_asp_${i}`, e.target.value)} value={userAnswers[`a3q5_asp_${i}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q5_ana_${i}`, e.target.value)} value={userAnswers[`a3q5_ana_${i}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q5_dig_${i}`, e.target.value)} value={userAnswers[`a3q5_dig_${i}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '20px'}}><b>Digitalizing Audio - Procedure and Steps:</b></p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
        <div>
          <p style={{fontWeight: '700', color: '#4338ca'}}>Step 1: Discretization</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q5_s1', e.target.value)} value={userAnswers.a3q5_s1 || ''}/>
        </div>
        <div>
          <p style={{fontWeight: '700', color: '#4338ca'}}>Step 2: Quantization</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q5_s2', e.target.value)} value={userAnswers.a3q5_s2 || ''}/>
        </div>
      </div>

      <p style={{marginTop: '15px'}}>Way to digitalize books (name):</p>
      <input style={styles.input} onChange={(e) => onChange('a3q5_books', e.target.value)} value={userAnswers.a3q5_books || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          Analog: Data represented physically with continuous values. Digital: Data represented by discrete symbols.<br/>
          Aspects: 1. Way of presentation - Analog: Physical matter, Digital: Discrete symbols | 2. Lifespan and durability - Analog: Shorter and less durable, Digital: Longer and more durable | 3. Viability to be compressed - Analog: Lower, Digital: Higher | 4. Resistance to data corruption - Analog: Lower, Digital: Higher<br/>
          S1: Sample the analog signal at fixed time interval. S2: Assign samples discrete value from set of fixed discrete values. Books: OCR
        </div>
      )}
    </div>

    {/* Q6: Compression */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: Compression</h3>
        <StarButton questionId="a3q6" />
      </div>
      <p><b>Definition of Compression:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q6_def', e.target.value)} value={userAnswers.a3q6_def || ''}/>
      
      <div style={{marginTop: '15px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
        <div>
          <p><b>Lossy Compression Definition:</b></p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q6_lossy', e.target.value)} value={userAnswers.a3q6_lossy || ''}/>
        </div>
        <div>
          <p><b>Lossless Compression Definition:</b></p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q6_lossless', e.target.value)} value={userAnswers.a3q6_lossless || ''}/>
        </div>
      </div>

      <p style={{marginTop: '15px'}}>Compression Ratio Formula:</p>
      <input style={styles.input} onChange={(e) => onChange('a3q6_ratio', e.target.value)} value={userAnswers.a3q6_ratio || ''}/>
      
      {showAnswers && <div style={styles.answerKey}>Compression: Reduce the size of file to save storage space and facilitate transmission. Lossy: An amount data is lost during compression, but have a higher compression ratio. Lossless: No data is lost during compression. Ratio: Uncompressed size / Compressed size</div>}
    </div>

    {/* Q7: File Size Calculations */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7: File Size Calculations</h3>
        <StarButton questionId="a3q7" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr><th style={styles.th}>File Type</th><th style={styles.th}>Formula or Attribute</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Plain Text</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q7_plain', e.target.value)} value={userAnswers.a3q7_plain || ''}/></td>
          </tr>
          <tr>
            <td><b>Formatted Text</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q7_formatted', e.target.value)} value={userAnswers.a3q7_formatted || ''}/></td>
          </tr>
          <tr>
            <td><b>Bitmap Image</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q7_bitmap', e.target.value)} value={userAnswers.a3q7_bitmap || ''}/></td>
          </tr>
          <tr>
            <td><b>Vector Image</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q7_vector', e.target.value)} value={userAnswers.a3q7_vector || ''}/></td>
          </tr>
          <tr>
            <td><b>Audio</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q7_audio', e.target.value)} value={userAnswers.a3q7_audio || ''}/></td>
          </tr>
          <tr>
            <td><b>Video</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q7_video', e.target.value)} value={userAnswers.a3q7_video || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && <div style={styles.answerKey}>Plain Text: Number of character * size of one character. Formatted Text: Usually larger size. Bitmap Image: Height * width * colour depth. Vector Image: Usually smaller file size. Audio: Sampling rate * bit depth * length * number of channels. Video: Image * fps + audio</div>}
    </div>

    {/* Q8: File Formats */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8: File Formats - Text</h3>
        <StarButton questionId="a3q8" />
      </div>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Extension</th><th style={styles.th}>File Type</th><th style={styles.th}>Attribute</th></tr></thead>
        <tbody>
          {[
            {ext: '.TXT', type: 'Plain text', attr: 'Has smaller file size'},
            {ext: '.RTF', type: 'Formatted text', attr: 'Can add hyperlinks to the file'},
            {ext: '.DOCX', type: 'Formatted text', attr: 'Can add multimedia to file'},
            {ext: '.PDF', type: 'Formatted text', attr: 'Provide a uniform layout across different platforms'}
          ].map((item, idx) => (
            <tr key={idx}>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8t_ext_${idx}`, e.target.value)} value={userAnswers[`a3q8t_ext_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8t_type_${idx}`, e.target.value)} value={userAnswers[`a3q8t_type_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8t_attr_${idx}`, e.target.value)} value={userAnswers[`a3q8t_attr_${idx}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '20px'}}><b>File Formats - Image</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Ext</th><th style={styles.th}>Transparent</th><th style={styles.th}>Animation</th><th style={styles.th}>Compression</th><th style={styles.th}>Attribute 1</th><th style={styles.th}>Attribute 2</th></tr></thead>
        <tbody>
          {[
            {ext: '.BMP', trans: 'N', anim: 'N', comp: 'Uncompressed', attr1: '24 bits of colour depth', attr2: 'Relatively large file size'},
            {ext: '.JPG', trans: 'N', anim: 'N', comp: 'Lossy', attr1: '24 bits of colour depth', attr2: 'Relatively small file size'},
            {ext: '.PNG', trans: 'Y', anim: 'N', comp: 'Lossless', attr1: '48 bits of colour depth', attr2: ''},
            {ext: '.WebP', trans: 'Y', anim: 'Y', comp: 'Lossy or lossless', attr1: '24 bits of colour depth', attr2: 'Relatively small file size'},
            {ext: '.GIF', trans: 'Y', anim: 'Y', comp: 'Lossless', attr1: '8 bits of colour depth only', attr2: ''},
            {ext: '.SVG', trans: 'Y', anim: 'Y', comp: 'Uncompressed', attr1: 'Has a lossless compressed version called SVGZ', attr2: ''}
          ].map((item, idx) => (
            <tr key={idx}>
              <td><input style={{...styles.input, width: '60px'}} onChange={(e) => onChange(`a3q8i_ext_${idx}`, e.target.value)} value={userAnswers[`a3q8i_ext_${idx}`] || ''}/></td>
              <td><input style={{...styles.input, width: '50px'}} onChange={(e) => onChange(`a3q8i_trans_${idx}`, e.target.value)} value={userAnswers[`a3q8i_trans_${idx}`] || ''}/></td>
              <td><input style={{...styles.input, width: '50px'}} onChange={(e) => onChange(`a3q8i_anim_${idx}`, e.target.value)} value={userAnswers[`a3q8i_anim_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8i_comp_${idx}`, e.target.value)} value={userAnswers[`a3q8i_comp_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8i_attr1_${idx}`, e.target.value)} value={userAnswers[`a3q8i_attr1_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8i_attr2_${idx}`, e.target.value)} value={userAnswers[`a3q8i_attr2_${idx}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '20px'}}><b>File Formats - Audio</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Extension</th><th style={styles.th}>Compression Type</th><th style={styles.th}>Attribute 1</th><th style={styles.th}>Attribute 2</th></tr></thead>
        <tbody>
          {[
            {ext: '.WAV', comp: 'Uncompressed', attr1: 'High audio quality', attr2: 'Large file size'},
            {ext: '.MP3', comp: 'Lossy', attr1: 'Small file size', attr2: ''},
            {ext: '.WMA', comp: 'Lossy or lossless', attr1: 'File size depends on compression methods', attr2: ''},
            {ext: '.MIDI', comp: 'Uncompressed', attr1: 'Stores musical notes or sampled music', attr2: 'But not real life sound'}
          ].map((item, idx) => (
            <tr key={idx}>
              <td><input style={{...styles.input, width: '60px'}} onChange={(e) => onChange(`a3q8a_ext_${idx}`, e.target.value)} value={userAnswers[`a3q8a_ext_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8a_comp_${idx}`, e.target.value)} value={userAnswers[`a3q8a_comp_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8a_attr1_${idx}`, e.target.value)} value={userAnswers[`a3q8a_attr1_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8a_attr2_${idx}`, e.target.value)} value={userAnswers[`a3q8a_attr2_${idx}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '20px'}}><b>File Formats - Video</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Extension</th><th style={styles.th}>Compression Type</th></tr></thead>
        <tbody>
          {[
            {ext: '.AVI', comp: 'Uncompressed'},
            {ext: '.MP4', comp: 'Lossy'},
            {ext: '.WebM', comp: 'Lossy or lossless'},
            {ext: '.MOV', comp: 'Lossy'}
          ].map((item, idx) => (
            <tr key={idx}>
              <td><input style={{...styles.input, width: '60px'}} onChange={(e) => onChange(`a3q8v_ext_${idx}`, e.target.value)} value={userAnswers[`a3q8v_ext_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8v_comp_${idx}`, e.target.value)} value={userAnswers[`a3q8v_comp_${idx}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Text:</b> .TXT, .RTF, .DOCX, .PDF - see table data<br/>
          <b>Image:</b> .BMP through .SVG - see table data<br/>
          <b>Audio:</b> .WAV through .MIDI - see table data<br/>
          <b>Video:</b> .AVI (Uncompressed), .MP4 (Lossy), .WebM (Lossy or lossless), .MOV (Lossy)
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

// --- COMPULSORY B CH 1: OUTPUT DEVICES ---
const ICT_Comp_B_Ch1 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Comparison of monitor types */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Comparison of Monitor Types</h3>
        <StarButton questionId="b1q1" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Working Principle</th>
            <th style={styles.th}>Advantages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}><b>LCD</b></td>
            <td style={styles.td}><textarea style={styles.input} rows="3" placeholder="Working principle..." onChange={(e) => onChange('b1q1_lcd_p', e.target.value)} value={userAnswers.b1q1_lcd_p || ''}/></td>
            <td style={styles.td}><textarea style={styles.input} rows="3" placeholder="Advantages..." onChange={(e) => onChange('b1q1_lcd_a', e.target.value)} value={userAnswers.b1q1_lcd_a || ''}/></td>
          </tr>
          <tr>
            <td style={styles.td}><b>OLED</b></td>
            <td style={styles.td}><textarea style={styles.input} rows="3" placeholder="Working principle..." onChange={(e) => onChange('b1q1_oled_p', e.target.value)} value={userAnswers.b1q1_oled_p || ''}/></td>
            <td style={styles.td}><textarea style={styles.input} rows="3" placeholder="Advantages..." onChange={(e) => onChange('b1q1_oled_a', e.target.value)} value={userAnswers.b1q1_oled_a || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>LCD:</b> Principle: Uses LED backlight; LCD crystals filter the light to show images. Adv: 1. Cheaper, 2. More screen size options.<br/>
          <b>OLED:</b> Principle: OLED itself is the light source (no backlight required). Adv: 1. Higher contrast ratio, 2. Wider viewing angle, 3. Lighter in weight.
        </div>
      )}
    </div>

    {/* Q2: Ports of monitors */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Ports of Monitors</h3>
        <StarButton questionId="b1q2" />
      </div>
      <p>Input the 4 names of port types:</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px'}}>
        {[1,2,3,4].map(i => <input key={i} style={styles.input} placeholder={`Port Name ${i}`} onChange={(e) => onChange(`b1q2_p${i}`, e.target.value)} value={userAnswers[`b1q2_p${i}`] || ''}/>)}
      </div>
      <p>Two types of ports that support audio:</p>
      <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
        <input style={styles.input} placeholder="Audio Port 1" onChange={(e) => onChange('b1q2_a1', e.target.value)} value={userAnswers.b1q2_a1 || ''}/>
        <input style={styles.input} placeholder="Audio Port 2" onChange={(e) => onChange('b1q2_a2', e.target.value)} value={userAnswers.b1q2_a2 || ''}/>
      </div>
      <p>Rearrange the 4 ports by video quality (Lowest &lt; Highest):</p>
      <input style={styles.input} placeholder="e.g. A < B < C < D" onChange={(e) => onChange('b1q2_rank', e.target.value)} value={userAnswers.b1q2_rank || ''}/>
      {showAnswers && <div style={styles.answerKey}>Ports: VGA, DVI, HDMI, DisplayPort. Audio: HDMI & DisplayPort. Quality: VGA &lt; DVI &lt; HDMI &lt; DisplayPort.</div>}
    </div>

    {/* Q3: Comparison with projectors */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Comparison with Projectors</h3>
        <StarButton questionId="b1q3" />
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div>
          <p>Advantages of <b>Projector</b>:</p>
          <textarea style={styles.input} rows="4" onChange={(e) => onChange('b1q3_proj', e.target.value)} value={userAnswers.b1q3_proj || ''}/>
        </div>
        <div>
          <p>Advantages of <b>Monitor</b>:</p>
          <textarea style={styles.input} rows="4" onChange={(e) => onChange('b1q3_mon', e.target.value)} value={userAnswers.b1q3_mon || ''}/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Projector:</b> 1. Large audience, 2. Adjustable size, 3. Portable.<br/>
          <b>Monitor:</b> 1. Personal use, 2. Better quality, 3. Lighter weight.
        </div>
      )}
    </div>

    {/* Q4: Comparison of printers */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Comparison of Printers</h3>
        <StarButton questionId="b1q4" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Advantages</th>
            <th style={styles.th}>Disadvantages</th>
          </tr>
        </thead>
        <tbody>
          {['Thermal', 'Inkjet', 'Laser'].map(type => (
            <tr key={type}>
              <td><b>{type}</b></td>
              <td><textarea style={styles.input} rows="3" onChange={(e) => onChange(`b1q4_${type}_a`, e.target.value)} value={userAnswers[`b1q4_${type}_a`] || ''}/></td>
              <td><textarea style={styles.input} rows="3" onChange={(e) => onChange(`b1q4_${type}_d`, e.target.value)} value={userAnswers[`b1q4_${type}_d`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Thermal:</b> Adv: Quiet, Fast, Low cost. Disadv: Low quality, Fades over time.<br/>
          <b>Inkjet:</b> Adv: Affordable, High quality. Disadv: Blurry when wet, Slow speed.<br/>
          <b>Laser:</b> Adv: Fast speed. Disadv: Expensive.
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

// --- COMPULSORY B CH 2: SYSTEM UNIT ---
const ICT_Comp_B_Ch2 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Overview</h3>
        <StarButton questionId="b2q1" />
      </div>
      <p>Name the components of a system unit:</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '15px'}}>
        {[1,2,3,4,5,6].map(i => <input key={i} style={styles.input} placeholder={`Comp ${i}`} onChange={(e) => onChange(`b2q1_c${i}`, e.target.value)} value={userAnswers[`b2q1_c${i}`] || ''}/>)}
      </div>
      <p>Peripheral Device Definition:</p>
      <div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap'}}>
        <input style={{...styles.input, width: '150px'}} placeholder="External" onChange={(e) => onChange('b2q1_p1', e.target.value)} value={userAnswers.b2q1_p1 || ''}/> devices that 
        <input style={{...styles.input, width: '150px'}} placeholder="connect" onChange={(e) => onChange('b2q1_p2', e.target.value)} value={userAnswers.b2q1_p2 || ''}/> to the system unit.
      </div>
      <p style={{marginTop: '15px'}}>Chip vs Chipsets:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <textarea style={styles.input} placeholder="Chip definition" onChange={(e) => onChange('b2q1_chip', e.target.value)} value={userAnswers.b2q1_chip || ''}/>
        <textarea style={styles.input} placeholder="Chipsets definition" onChange={(e) => onChange('b2q1_sets', e.target.value)} value={userAnswers.b2q1_sets || ''}/>
      </div>
      {showAnswers && <div style={styles.answerKey}>Comps: CPU, GPU, Secondary storage, PSU, motherboard, main memory. Def: External devices that connect to the system unit. Chip: IC used to manage communication. Chipsets: Collection of chips.</div>}
    </div>

    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Motherboard</h3>
        <StarButton questionId="b2q2" />
      </div>
      <p>Definition:</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('b2q2_def', e.target.value)} value={userAnswers.b2q2_def || ''}/>
      <p style={{marginTop: '15px'}}>Ports & Connected Devices:</p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Port Name</th><th style={styles.th}>Devices Connected</th></tr></thead>
        <tbody>
          {[1,2,3,4,5].map(i => (
            <tr key={i}>
                <td><input style={styles.input} placeholder="Enter Port Name" onChange={(e) => onChange(`b2q2_pn_${i}`, e.target.value)} value={userAnswers[`b2q2_pn_${i}`] || ''}/></td>
                <td><input style={styles.input} placeholder="Enter Connected Devices" onChange={(e) => onChange(`b2q2_pd_${i}`, e.target.value)} value={userAnswers[`b2q2_pd_${i}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{marginTop: '15px'}}>Advantage of an integrated surface:</p>
      <textarea style={styles.input} rows="3" onChange={(e) => onChange('b2q2_adv', e.target.value)} value={userAnswers.b2q2_adv || ''}/>
      {showAnswers && <div style={styles.answerKey}>SATA: secondary storage. PCIe: CPU, GPU, NIC. USB: Peripherals. M.2: SATA/PCIe/USB devices. VGA/HDMI: Display. Adv: Replaces expensive interfaces with integrated surface to cut building costs.</div>}
    </div>

    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: PSU</h3>
        <StarButton questionId="b2q3" />
      </div>
      <p>Use:</p>
      <input style={styles.input} onChange={(e) => onChange('b2q3_use', e.target.value)} value={userAnswers.b2q3_use || ''}/>
      <p style={{marginTop: '10px'}}>Essential Requirements & Purpose:</p>
      <div style={{display: 'flex', gap: '10px'}}>
        <input style={styles.input} placeholder="Requirement" onChange={(e) => onChange('b2q3_req', e.target.value)} value={userAnswers.b2q3_req || ''}/>
        <input style={styles.input} placeholder="Purpose" onChange={(e) => onChange('b2q3_purp', e.target.value)} value={userAnswers.b2q3_purp || ''}/>
      </div>
      <p style={{marginTop: '10px'}}>Practical Reminder & Reason:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input style={styles.input} placeholder="Reminder" onChange={(e) => onChange('b2q3_rem', e.target.value)} value={userAnswers.b2q3_rem || ''}/>
        <input style={styles.input} placeholder="Reason" onChange={(e) => onChange('b2q3_reas', e.target.value)} value={userAnswers.b2q3_reas || ''}/>
      </div>
    </div>

<div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Bus</h3>
        <StarButton questionId="b2q4" />
      </div>
      <p>Use of Bus:</p>
      <input style={styles.input} placeholder="General use of bus..." onChange={(e) => onChange('b2q4_use', e.target.value)} value={userAnswers.b2q4_use || ''}/>
      
      <div style={{marginTop: '20px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
        <h4 style={{marginBottom: '10px', color: '#1e1b4b'}}>Bus Type 1: System Bus</h4>
        <p>Use of System Bus:</p>
        <input style={{...styles.input, marginBottom: '15px'}} placeholder="Connect computer units..." onChange={(e) => onChange('b2q4_sys_use', e.target.value)} value={userAnswers.b2q4_sys_use || ''}/>
        
        <p>Relationship with CPU Word Length:</p>
        <div style={{backgroundColor: '#f8fafc', padding: '10px', borderRadius: '6px', fontSize: '0.95rem', lineHeight: '2'}}>
          Bus width is the <input style={{width: '70px', border: 'none', borderBottom: '1px solid #64748b', textAlign: 'center', backgroundColor: 'transparent'}} placeholder="" onChange={(e) => onChange('b2q4_rel1', e.target.value)} value={userAnswers.b2q4_rel1 || ''}/> as 
          <input style={{width: '150px', border: 'none', borderBottom: '1px solid #64748b', textAlign: 'center', backgroundColor: 'transparent'}} placeholder="" onChange={(e) => onChange('b2q4_rel2', e.target.value)} value={userAnswers.b2q4_rel2 || ''}/> of 
          <input style={{width: '60px', border: 'none', borderBottom: '1px solid #64748b', textAlign: 'center', backgroundColor: 'transparent'}} placeholder="" onChange={(e) => onChange('b2q4_rel3', e.target.value)} value={userAnswers.b2q4_rel3 || ''}/> usually.
        </div>

        <table style={{...styles.table, marginTop: '15px'}}>
          <thead><tr><th style={styles.th}>System Bus Type</th><th style={styles.th}>Use</th><th style={styles.th}>Direction</th></tr></thead>
          <tbody>
            <tr><td><b>Control Bus</b></td><td><input style={styles.input} onChange={(e) => onChange('b2q4_cb_u', e.target.value)} value={userAnswers.b2q4_cb_u || ''}/></td><td><input style={styles.input} onChange={(e) => onChange('b2q4_cb_d', e.target.value)} value={userAnswers.b2q4_cb_d || ''}/></td></tr>
            <tr><td><b>Address Bus</b></td><td><input style={styles.input} onChange={(e) => onChange('b2q4_ab_u', e.target.value)} value={userAnswers.b2q4_ab_u || ''}/></td><td><input style={styles.input} onChange={(e) => onChange('b2q4_ab_d', e.target.value)} value={userAnswers.b2q4_ab_d || ''}/></td></tr>
            <tr><td><b>Data Bus</b></td><td><input style={styles.input} onChange={(e) => onChange('b2q4_db_u', e.target.value)} value={userAnswers.b2q4_db_u || ''}/></td><td><input style={styles.input} onChange={(e) => onChange('b2q4_db_d', e.target.value)} value={userAnswers.b2q4_db_d || ''}/></td></tr>
          </tbody>
        </table>
        
        <p style={{marginTop: '15px'}}>Use of <b>Data Address</b>:</p>
        <textarea style={styles.input} rows="2" placeholder="Explain the use of data address..." onChange={(e) => onChange('b2q4_addr_use', e.target.value)} value={userAnswers.b2q4_addr_use || ''}/>
      </div>

      <div style={{marginTop: '20px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
        <h4 style={{marginBottom: '10px', color: '#1e1b4b'}}>Bus Type 2: USB</h4>
        <p>Use of USB:</p>
        <input style={{...styles.input, marginBottom: '10px'}} onChange={(e) => onChange('b2q4_usb_use', e.target.value)} value={userAnswers.b2q4_usb_use || ''}/>
        <p>Attributes & Explanation:</p>
        <textarea style={styles.input} rows="2" placeholder="" onChange={(e) => onChange('b2q4_usb_attr', e.target.value)} value={userAnswers.b2q4_usb_attr || ''}/>
        
        <p style={{marginTop: '10px'}}>USB Standards & Colours:</p>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px'}}>
          <input style={styles.input} placeholder="1.0 Colour" onChange={(e) => onChange('b2q4_u1_c', e.target.value)} value={userAnswers.b2q4_u1_c || ''}/>
          <input style={styles.input} placeholder="2.0 Colour" onChange={(e) => onChange('b2q4_u2_c', e.target.value)} value={userAnswers.b2q4_u2_c || ''}/>
          <input style={styles.input} placeholder="3.0 Colour" onChange={(e) => onChange('b2q4_u3_c', e.target.value)} value={userAnswers.b2q4_u3_c || ''}/>
        </div>
        <p style={{marginTop: '10px'}}>Which standard is the fastest?</p>
        <input style={styles.input} onChange={(e) => onChange('b2q4_fast', e.target.value)} value={userAnswers.b2q4_fast || ''}/>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Bus Use:</b> Connect devices via data and control signals.<br/>
          <b>System Bus:</b> Rel: [same] as [word length/size] of [CPU].<br/>
          <b>Types:</b> 1. Control: one-way from processors. 2. Address: one-way from processors. 3. Data: two-way.<br/>
          <b>Data Address:</b> To indicate which data is to be read from or written into.<br/>
          <b>USB:</b> Use: Connect peripherals. Attr: Hot swapping (plug/unplug while operating). Standards: 1.0 (White), 2.0 (Black), 3.0 (Blue). Fast: USB 3.0.
        </div>
      )}
    </div>

<div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: CPU (Central Processing Unit)</h3>
        <StarButton questionId="b2q5" />
      </div>
      
      {/* Definitions */}
      <div style={{marginBottom: '20px'}}>
        <p>Definition of <b>CPU</b>:</p>
        <textarea style={styles.input} rows="2" placeholder="Processor consisting of chipsets..." onChange={(e) => onChange('b2q5_def', e.target.value)} value={userAnswers.b2q5_def || ''}/>
        <p style={{marginTop: '10px'}}>Definition of <b>Word Length / Word Size</b>:</p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('b2q5_word_def', e.target.value)} value={userAnswers.b2q5_word_def || ''}/>
        <p style={{marginTop: '10px'}}>Advantage of larger Word Length:</p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('b2q5_word_adv', e.target.value)} value={userAnswers.b2q5_word_adv || ''}/>
      </div>

      {/* ALU & CU */}
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px'}}>
        <div style={{padding: '10px', backgroundColor: '#f8fafc', borderRadius: '8px'}}>
          <p><b>ALU</b> (Use & Data Transfer):</p>
          <textarea style={styles.input} rows="3" placeholder="" onChange={(e) => onChange('b2q5_alu', e.target.value)} value={userAnswers.b2q5_alu || ''}/>
        </div>
        <div style={{padding: '10px', backgroundColor: '#f8fafc', borderRadius: '8px'}}>
          <p><b>CU</b> (Uses):</p>
          <textarea style={styles.input} rows="3" placeholder="" onChange={(e) => onChange('b2q5_cu', e.target.value)} value={userAnswers.b2q5_cu || ''}/>
        </div>
      </div>

      {/* Registers */}
      <div style={{marginBottom: '20px'}}>
        <p><b>Registers</b> (Definition & Properties):</p>
        <textarea style={styles.input} rows="3" placeholder="" onChange={(e) => onChange('b2q5_reg_def', e.target.value)} value={userAnswers.b2q5_reg_def || ''}/>
        <table style={{...styles.table, marginTop: '10px'}}>
          <thead>
            <tr>
              <th style={styles.th}>Type</th>
              <th style={styles.th}>Purpose</th>
              <th style={styles.th}>Connect to Memory? (Via what bus?)</th>
            </tr>
          </thead>
          <tbody>
            {['CIR', 'PC', 'MAR', 'MDR', 'Accumulator'].map(reg => (
              <tr key={reg}>
                <td><b>{reg}</b></td>
                <td><input style={styles.input} onChange={(e) => onChange(`b2q5_${reg}_p`, e.target.value)} value={userAnswers[`b2q5_${reg}_p`] || ''}/></td>
                <td><input style={styles.input} placeholder="e.g. Yes via Address Bus" onChange={(e) => onChange(`b2q5_${reg}_c`, e.target.value)} value={userAnswers[`b2q5_${reg}_c`] || ''}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cache Memory */}
      <div style={{marginBottom: '20px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
        <p><b>Cache Memory</b> (Properties & Function):</p>
        <textarea style={styles.input} rows="4" placeholder="Volatile, performance, frequently accessed data..." onChange={(e) => onChange('b2q5_cache', e.target.value)} value={userAnswers.b2q5_cache || ''}/>
      </div>

      {/* Machine Cycle */}
      <div style={{marginBottom: '20px'}}>
        <p><b>Machine Cycle (7 Steps)</b>:</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          {[1,2,3,4,5,6,7].map(i => (
            <div key={i} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <span style={{fontWeight: 'bold', minWidth: '25px'}}>{i}.</span>
              <input style={styles.input} placeholder={`Step ${i}`} onChange={(e) => onChange(`b2q5_mc_${i}`, e.target.value)} value={userAnswers[`b2q5_mc_${i}`] || ''}/>
            </div>
          ))}
        </div>
      </div>

      {/* CPU Specifications */}
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div style={{padding: '10px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
          <p><b>1. Clock Rate</b> (Def & Performance):</p>
          <textarea style={styles.input} rows="4" onChange={(e) => onChange('b2q5_spec_clock', e.target.value)} value={userAnswers.b2q5_spec_clock || ''}/>
        </div>
        <div style={{padding: '10px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
          <p><b>2. Number of Cores</b> (Def & Performance):</p>
          <textarea style={styles.input} rows="4" onChange={(e) => onChange('b2q5_spec_cores', e.target.value)} value={userAnswers.b2q5_spec_cores || ''}/>
        </div>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>CPU:</b> Processor with chipsets to process data/control instructions.<br/>
          <b>Word Length:</b> Bits processed at once. Adv: Address more memory, complex functions.<br/>
          <b>ALU:</b> Logic/Arithmetic; result to Accumulator via Data Bus.<br/>
          <b>Registers:</b> CIR (current instr), PC (next addr), MAR (addr to mem - Address Bus), MDR (data from mem - Data Bus), Accumulator (ALU result).<br/>
          <b>Cache:</b> Volatile. Stores frequent data because it's faster than main memory.<br/>
          <b>Cycle:</b> 1. PC-MAR, 2. PC Update, 3. MAR-Mem (Addr Bus), 4. Mem-MDR (Data Bus), 5. MDR-CIR, 6. Decode/Exec, 7. Result-Accumulator.<br/>
          <b>Clock Rate:</b> Cycles/sec. Computer speed doesn't vary directly if main memory is slow.<br/>
          <b>Cores:</b> Parallel processors. Computer speed doesn't vary directly (depends on software).
        </div>
      )}
    </div>

    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: GPU</h3>
        <StarButton questionId="b2q6" />
      </div>
      <p>Difference with CPU:</p>
      <textarea style={styles.input} onChange={(e) => onChange('b2q6_diff', e.target.value)} value={userAnswers.b2q6_diff || ''}/>
      <p style={{marginTop: '15px'}}>Graphic Card vs iGPU Adv:</p>
      <div style={{display: 'flex', gap: '10px'}}>
        <textarea style={styles.input} placeholder="Graphic Card Adv" onChange={(e) => onChange('b2q6_gc', e.target.value)} value={userAnswers.b2q6_gc || ''}/>
        <textarea style={styles.input} placeholder="iGPU Adv" onChange={(e) => onChange('b2q6_ig', e.target.value)} value={userAnswers.b2q6_ig || ''}/>
      </div>
    </div>

<div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7: Storage Device - Main Memory</h3>
        <StarButton questionId="b2q7" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Use</th>
            <th style={styles.th}>Volatility</th>
            <th style={styles.th}>Rewritability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>ROM</b></td>
            <td><input style={styles.input} placeholder="" onChange={(e) => onChange('b2q7_rom_u', e.target.value)} value={userAnswers.b2q7_rom_u || ''}/></td>
            <td><input style={styles.input} placeholder="Volatile?" onChange={(e) => onChange('b2q7_rom_v', e.target.value)} value={userAnswers.b2q7_rom_v || ''}/></td>
            <td><input style={styles.input} placeholder="Rewritable?" onChange={(e) => onChange('b2q7_rom_r', e.target.value)} value={userAnswers.b2q7_rom_r || ''}/></td>
          </tr>
          <tr>
            <td><b>RAM</b></td>
            <td><input style={styles.input} placeholder="" onChange={(e) => onChange('b2q7_ram_u', e.target.value)} value={userAnswers.b2q7_ram_u || ''}/></td>
            <td><input style={styles.input} placeholder="Volatile?" onChange={(e) => onChange('b2q7_ram_v', e.target.value)} value={userAnswers.b2q7_ram_v || ''}/></td>
            <td><input style={styles.input} placeholder="Rewritable?" onChange={(e) => onChange('b2q7_ram_r', e.target.value)} value={userAnswers.b2q7_ram_r || ''}/></td>
          </tr>
        </tbody>
      </table>
      <p style={{marginTop: '15px'}}>Definition of <b>Firmware</b>:</p>
      <input style={styles.input} placeholder="Instructions to start computer..." onChange={(e) => onChange('b2q7_firmware', e.target.value)} value={userAnswers.b2q7_firmware || ''}/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>ROM:</b> Store firmware, non-volatile, cannot be rewritten.<br/>
          <b>RAM:</b> Temp store processing data, volatile, rewritable in high speed.<br/>
          <b>Firmware:</b> Series of instructions required to start the computer.
        </div>
      )}
    </div>

<div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8: Secondary Storage</h3>
        <StarButton questionId="b2q8" />
      </div>
      <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
        <div style={{flex: 1}}>
          <p>Definition:</p>
          <input style={styles.input} onChange={(e) => onChange('b2q8_def', e.target.value)} value={userAnswers.b2q8_def || ''}/>
        </div>
        <div style={{flex: 1}}>
          <p>Volatility:</p>
          <input style={styles.input} onChange={(e) => onChange('b2q8_vol', e.target.value)} value={userAnswers.b2q8_vol || ''}/>
        </div>
      </div>

      <p><b>Access Methods:</b></p>
      <table style={{...styles.table, fontSize: '0.85rem'}}>
        <thead>
          <tr>
            <th style={styles.th}>Method</th>
            <th style={styles.th}>Mechanism (Storage & Search)</th>
            <th style={styles.th}>Access Rate</th>
            <th style={styles.th}>Device</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Sequential</b></td>
            <td><textarea style={styles.input} rows="3" onChange={(e) => onChange('b2q8_seq_m', e.target.value)} value={userAnswers.b2q8_seq_m || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('b2q8_seq_r', e.target.value)} value={userAnswers.b2q8_seq_r || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('b2q8_seq_d', e.target.value)} value={userAnswers.b2q8_seq_d || ''}/></td>
          </tr>
          <tr>
            <td><b>Random</b></td>
            <td><textarea style={styles.input} rows="3" onChange={(e) => onChange('b2q8_ran_m', e.target.value)} value={userAnswers.b2q8_ran_m || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('b2q8_ran_r', e.target.value)} value={userAnswers.b2q8_ran_r || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('b2q8_ran_d', e.target.value)} value={userAnswers.b2q8_ran_d || ''}/></td>
          </tr>
        </tbody>
      </table>

      <p style={{marginTop: '20px'}}><b>Types of Secondary Devices:</b></p>
      <table style={{...styles.table, fontSize: '0.8rem'}}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Attribute / Advantage / Disadvantage</th>
          </tr>
        </thead>
        <tbody>
          {['Magnetic Tape', 'Hard Disk', 'SSD', 'Memory Card', 'USB Flash Drive'].map(dev => (
            <tr key={dev}>
              <td><b>{dev}</b></td>
              <td><input style={styles.input} placeholder="Storage Type" onChange={(e) => onChange(`b2q8_${dev}_type`, e.target.value)} value={userAnswers[`b2q8_${dev}_type`] || ''}/></td>
              <td><textarea style={styles.input} rows="3" placeholder="Attr/Adv/Disadv..." onChange={(e) => onChange(`b2q8_${dev}_details`, e.target.value)} value={userAnswers[`b2q8_${dev}_details`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{marginTop: '20px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
        <p><b>Optical Disk</b></p>
        <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
          <input style={styles.input} placeholder="Storage Type" onChange={(e) => onChange('b2q8_opt_type', e.target.value)} value={userAnswers.b2q8_opt_type || ''}/>
          <input style={styles.input} placeholder="Attribute/Mechanism" onChange={(e) => onChange('b2q8_opt_attr', e.target.value)} value={userAnswers.b2q8_opt_attr || ''}/>
        </div>
        <input style={styles.input} placeholder="Reminder" onChange={(e) => onChange('b2q8_opt_rem', e.target.value)} value={userAnswers.b2q8_opt_rem || ''}/>
        
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px'}}>
          <table style={styles.table}>
            <thead><tr><th style={styles.th}>Media</th><th style={styles.th}>Size</th></tr></thead>
            <tbody>
              <tr><td>CD</td><td><input style={styles.input} onChange={(e) => onChange('b2q8_sz_cd', e.target.value)} value={userAnswers.b2q8_sz_cd || ''}/></td></tr>
              <tr><td>DVD</td><td><input style={styles.input} onChange={(e) => onChange('b2q8_sz_dvd', e.target.value)} value={userAnswers.b2q8_sz_dvd || ''}/></td></tr>
              <tr><td>BD</td><td><input style={styles.input} onChange={(e) => onChange('b2q8_sz_bd', e.target.value)} value={userAnswers.b2q8_sz_bd || ''}/></td></tr>
            </tbody>
          </table>
          <table style={styles.table}>
            <thead><tr><th style={styles.th}>Rewritability</th><th style={styles.th}>Types</th></tr></thead>
            <tbody>
              <tr><td>None</td><td><input style={styles.input} placeholder="" onChange={(e) => onChange('b2q8_rw_no', e.target.value)} value={userAnswers.b2q8_rw_no || ''}/></td></tr>
              <tr><td>Once</td><td><input style={styles.input} placeholder="" onChange={(e) => onChange('b2q8_rw_one', e.target.value)} value={userAnswers.b2q8_rw_one || ''}/></td></tr>
              <tr><td>Multiple</td><td><input style={styles.input} placeholder="" onChange={(e) => onChange('b2q8_rw_multi', e.target.value)} value={userAnswers.b2q8_rw_multi || ''}/></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Access:</b> Seq (Magnetic Tape): start-to-finish search, slower. Random (SSD): unique address, direct, faster/stable.<br/>
          <b>HDD:</b> Magnetic, high speed, less durable (head crash). <b>SSD:</b> Solid-state, controller + flash, durable, expensive.<br/>
          <b>Optical:</b> CD (700MB), DVD (4.7GB), BD (25-128GB).<br/>
          <b>RW:</b> -ROM (Read only), -R (Recordable once), -RW (Rewritable).
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

// --- COMPULSORY B CH 3: SOFTWARE (COMPLETE NEW UPDATE) ---
const ICT_Comp_B_Ch3 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Introduction */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Introduction to Software</h3>
        <StarButton questionId="b3q1" />
      </div>
      <p>Use of <b>System Software</b>:</p>
      <input style={styles.input} onChange={(e) => onChange('b3q1_sys', e.target.value)} value={userAnswers.b3q1_sys || ''}/>
      <p style={{marginTop: '10px'}}>Use of <b>Application Software</b>:</p>
      <input style={styles.input} onChange={(e) => onChange('b3q1_app', e.target.value)} value={userAnswers.b3q1_app || ''}/>
      {showAnswers && <div style={styles.answerKey}>System: Control hardware. Application: Perform specific tasks.</div>}
    </div>

    {/* Q2: Operating System (OS) */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Operating System (OS)</h3>
        <StarButton questionId="b3q2" />
      </div>
      <p>Is OS System or Application software?</p>
      <select style={styles.select} onChange={(e) => onChange('b3q2_type', e.target.value)} value={userAnswers.b3q2_type || ''}>
        <option value="">Select...</option>
        <option value="System">System Software</option>
        <option value="Application">Application Software</option>
      </select>
      
      <p style={{marginTop: '15px'}}>Uses of OS (Hardware control & Disk Management):</p>
      <textarea style={styles.input} rows="3" placeholder="" onChange={(e) => onChange('b3q2_use', e.target.value)} value={userAnswers.b3q2_use || ''}/>
      
      <p style={{marginTop: '15px'}}>Benefit of <b>Partitioning</b>:</p>
      <input style={styles.input} onChange={(e) => onChange('b3q2_part_ben', e.target.value)} value={userAnswers.b3q2_part_ben || ''}/>

      <p style={{marginTop: '15px'}}><b>Categorization of OS:</b></p>
      {[1, 2, 3].map(i => (
        <div key={i} style={{marginBottom: '15px', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '8px'}}>
          <input style={{...styles.input, fontWeight: 'bold'}} placeholder={`Categorization Method ${i}`} onChange={(e) => onChange(`b3q2_cat_m${i}`, e.target.value)} value={userAnswers[`b3q2_cat_m${i}`] || ''}/>
          <textarea style={{...styles.input, marginTop: '5px'}} rows="3" placeholder="Examples and details..." onChange={(e) => onChange(`b3q2_cat_d${i}`, e.target.value)} value={userAnswers[`b3q2_cat_d${i}`] || ''}/>
        </div>
      ))}
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Uses:</b> Interact with drivers; Format (delete/restore); Partition (divide disk).<br/>
          <b>Benefit:</b> Malware/failure on one partition doesn't affect others.<br/>
          <b>Categories:</b> 1. Users (Single vs Multi), 2. Purpose (Mobile, Desktop, Network), 3. Interface (GUI: easy/resource-heavy vs CLI: fast/needs memorization).
        </div>
      )}
    </div>

    {/* Q3: Utility Program */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Utility Program</h3>
        <StarButton questionId="b3q3" />
      </div>
      <p>Is it System or Application software?</p>
      <select style={styles.select} onChange={(e) => onChange('b3q3_type', e.target.value)} value={userAnswers.b3q3_type || ''}>
        <option value="">Select...</option>
        <option value="System">System Software</option>
        <option value="Application">Application Software</option>
      </select>
      <p style={{marginTop: '15px'}}>Use of Utility:</p>
      <input style={styles.input} onChange={(e) => onChange('b3q3_use', e.target.value)} value={userAnswers.b3q3_use || ''}/>
      
      <p style={{marginTop: '15px'}}>Fragmentation vs. Defragmentation:</p>
      <textarea style={styles.input} rows="3" placeholder="Describe fragmentation and the process of defrag..." onChange={(e) => onChange('b3q3_frag', e.target.value)} value={userAnswers.b3q3_frag || ''}/>
      
      <p style={{marginTop: '15px'}}>Effect of Defragmentation:</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
        <textarea style={styles.input} placeholder="On Hard Disks..." onChange={(e) => onChange('b3q3_eff_hdd', e.target.value)} value={userAnswers.b3q3_eff_hdd || ''}/>
        <textarea style={styles.input} placeholder="On SSDs..." onChange={(e) => onChange('b3q3_eff_ssd', e.target.value)} value={userAnswers.b3q3_eff_ssd || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Type: System. Use: Efficiency/Maintenance. Defrag: Reorganize split data. HDD: Improves speed. SSD: Lowers lifespan (wears R/W cycles).
        </div>
      )}
    </div>

    {/* Q4: Driver Program */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Driver Program</h3>
        <StarButton questionId="b3q4" />
      </div>
      <p>Is it System or Application software?</p>
      <select style={styles.select} onChange={(e) => onChange('b3q4_type', e.target.value)} value={userAnswers.b3q4_type || ''}>
        <option value="">Select...</option>
        <option value="System">System Software</option>
        <option value="Application">Application Software</option>
      </select>
      <p style={{marginTop: '15px'}}>Use of Drivers:</p>
      <textarea style={styles.input} rows="2" placeholder="" onChange={(e) => onChange('b3q4_use', e.target.value)} value={userAnswers.b3q4_use || ''}/>
      
      <p style={{marginTop: '15px'}}>Attributes & Installation:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <textarea style={styles.input} placeholder="Attributes " onChange={(e) => onChange('b3q4_attr', e.target.value)} value={userAnswers.b3q4_attr || ''}/>
        <input style={styles.input} placeholder="How to install?" onChange={(e) => onChange('b3q4_inst', e.target.value)} value={userAnswers.b3q4_inst || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Type: System. Use: Connect peripherals via machine language translation. Attr: Hot swapping; specific to OS/Device. Install: Follow user manual.
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

const ICT_Comp_C_Ch1 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Network Architecture */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Network Architecture</h3>
        <StarButton questionId="c1q1" />
      </div>
      
      <p style={{marginBottom: '10px'}}><b>LAN vs WAN Definitions:</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Type</th><th style={styles.th}>Definition</th><th style={styles.th}>Connection</th></tr></thead>
        <tbody>
          <tr>
            <td>LAN</td>
            <td><textarea style={styles.input} rows="2" onChange={(e) => onChange('c1q1_lan_def', e.target.value)} value={userAnswers.c1q1_lan_def || ''}/></td>
            <td><textarea style={styles.input} rows="2" onChange={(e) => onChange('c1q1_lan_conn', e.target.value)} value={userAnswers.c1q1_lan_conn || ''}/></td>
          </tr>
          <tr>
            <td>WAN</td>
            <td><textarea style={styles.input} rows="2" onChange={(e) => onChange('c1q1_wan_def', e.target.value)} value={userAnswers.c1q1_wan_def || ''}/></td>
            <td><textarea style={styles.input} rows="2" onChange={(e) => onChange('c1q1_wan_conn', e.target.value)} value={userAnswers.c1q1_wan_conn || ''}/></td>
          </tr>
        </tbody>
      </table>

      <p style={{marginTop: '15px'}}><b>Comparison (LAN vs WAN):</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Comparison Point</th><th style={styles.th}>Relation</th></tr></thead>
        <tbody>
          {['Set up cost', 'Coverage', 'Data transmission speed'].map((pt, i) => (
            <tr key={i}>
              <td>{pt}</td>
              <td><input style={styles.input} placeholder="e.g. WAN > LAN" onChange={(e) => onChange(`c1q1_comp_${i}`, e.target.value)} value={userAnswers[`c1q1_comp_${i}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '15px'}}><b>Client-Server vs Peer-to-Peer:</b></p>
      <div style={{overflowX: 'auto'}}>
        <table style={styles.table}>
          <thead><tr><th style={styles.th}>Feature</th><th style={styles.th}>Client-Server</th><th style={styles.th}>Peer-to-Peer</th></tr></thead>
          <tbody>
            {['Purpose', 'Consists of', 'Resource Storage', 'How to share', 'Application', '3 Pros', '3 Cons'].map((feat, i) => (
              <tr key={i}>
                <td>{feat}</td>
                <td><textarea style={styles.input} rows="2" onChange={(e) => onChange(`c1q1_cs_${i}`, e.target.value)} value={userAnswers[`c1q1_cs_${i}`] || ''}/></td>
                <td><textarea style={styles.input} rows="2" onChange={(e) => onChange(`c1q1_p2p_${i}`, e.target.value)} value={userAnswers[`c1q1_p2p_${i}`] || ''}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          LAN: Small area, no ISP. WAN: Large area, uses ISP.<br/>
          Relations: Cost (WAN&gt;LAN), Coverage (WAN&gt;LAN), Speed (LAN&gt;WAN).<br/>
          CS: Server present, centralized admin/storage. P2P: No server, decentralized storage.
        </div>
      )}
    </div>

    {/* Q2: Network Services */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Network Services</h3>
        <StarButton questionId="c1q2" />
      </div>
      <p>List 6 Services (Name, Description, Attribute):</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} style={{display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '5px'}}>
            <input style={styles.input} placeholder="Name" onChange={(e) => onChange(`c1q2_n${i}`, e.target.value)} value={userAnswers[`c1q2_n${i}`] || ''}/>
            <input style={styles.input} placeholder="Description" onChange={(e) => onChange(`c1q2_d${i}`, e.target.value)} value={userAnswers[`c1q2_d${i}`] || ''}/>
            <input style={styles.input} placeholder="Attribute" onChange={(e) => onChange(`c1q2_a${i}`, e.target.value)} value={userAnswers[`c1q2_a${i}`] || ''}/>
          </div>
        ))}
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          1. Internal Comm, 2. Video Conf, 3. Hardware Sharing, 4. Software Sharing, 5. File Sharing, 6. Internet Connection Sharing.
        </div>
      )}
    </div>

{/* Q3: Network Hardware */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Network Hardware</h3>
        <StarButton questionId="c1q3" />
      </div>
      
      <p style={{fontWeight: 'bold'}}>NIC</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px'}}>
        <textarea style={styles.input} placeholder="2 Uses" onChange={(e) => onChange('c1q3_nic_u', e.target.value)} value={userAnswers.c1q3_nic_u || ''}/>
        <input style={styles.input} placeholder="Position" onChange={(e) => onChange('c1q3_nic_p', e.target.value)} value={userAnswers.c1q3_nic_p || ''}/>
        <input style={styles.input} placeholder="Equipment (Ethernet NIC)" onChange={(e) => onChange('c1q3_nic_e', e.target.value)} value={userAnswers.c1q3_nic_e || ''}/>
        <textarea style={styles.input} placeholder="MAC Address (Size, Use, location and assignment)" onChange={(e) => onChange('c1q3_nic_m', e.target.value)} value={userAnswers.c1q3_nic_m || ''}/>
      </div>

      <p style={{fontWeight: 'bold', marginTop: '15px'}}>Switch</p>
      <textarea style={styles.input} rows="3" placeholder="3 Uses" onChange={(e) => onChange('c1q3_sw', e.target.value)} value={userAnswers.c1q3_sw || ''}/>

      <p style={{fontWeight: 'bold', marginTop: '15px'}}>Access Point (AP)</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
        <textarea style={styles.input} placeholder="Use, Coverage, Max Users" onChange={(e) => onChange('c1q3_ap_u', e.target.value)} value={userAnswers.c1q3_ap_u || ''}/>
        <textarea style={styles.input} placeholder="SSID (Def, Attr) & Encryption" onChange={(e) => onChange('c1q3_ap_s', e.target.value)} value={userAnswers.c1q3_ap_s || ''}/>
      </div>
      <p style={{marginTop: '5px'}}>WiFi Roaming Steps:</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c1q3_ap_r', e.target.value)} value={userAnswers.c1q3_ap_r || ''}/>

      <p style={{fontWeight: 'bold', marginTop: '15px'}}>Router</p>
      <textarea style={styles.input} rows="2" placeholder="2 Uses, All-in-one benefit, Dual Band meaning" onChange={(e) => onChange('c1q3_rt', e.target.value)} value={userAnswers.c1q3_rt || ''}/>

      <p style={{fontWeight: 'bold', marginTop: '15px'}}>Modem</p>
      <textarea style={styles.input} rows="2" placeholder="Use, Position, DSL benefit" onChange={(e) => onChange('c1q3_md_u', e.target.value)} value={userAnswers.c1q3_md_u || ''}/>
      <div style={{display: 'flex', gap: '10px', marginTop: '5px'}}>
        <input style={styles.input} placeholder="ADSL Explanation" onChange={(e) => onChange('c1q3_md_adsl', e.target.value)} value={userAnswers.c1q3_md_adsl || ''}/>
        <input style={styles.input} placeholder="SDSL Explanation" onChange={(e) => onChange('c1q3_md_sdsl', e.target.value)} value={userAnswers.c1q3_md_sdsl || ''}/>
      </div>

      <p style={{fontWeight: 'bold', marginTop: '15px'}}>Cables</p>
      <input style={styles.input} placeholder="Use, Max distance, Long distance type" onChange={(e) => onChange('c1q3_cb_gen', e.target.value)} value={userAnswers.c1q3_cb_gen || ''}/>
      <div style={{marginTop: '5px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
        <textarea style={styles.input} placeholder="Twisted Pair (Component, Reason)" onChange={(e) => onChange('c1q3_cb_tp', e.target.value)} value={userAnswers.c1q3_cb_tp || ''}/>
        <textarea style={styles.input} placeholder="UTP (Component, Cat6 def/speed)" onChange={(e) => onChange('c1q3_cb_utp', e.target.value)} value={userAnswers.c1q3_cb_utp || ''}/>
        <textarea style={styles.input} placeholder="STP (Component, vs UTP)" onChange={(e) => onChange('c1q3_cb_stp', e.target.value)} value={userAnswers.c1q3_cb_stp || ''}/>
        <textarea style={styles.input} placeholder="Fibre Optic (vs UTP/STP)" onChange={(e) => onChange('c1q3_cb_fo', e.target.value)} value={userAnswers.c1q3_cb_fo || ''}/>
      </div>
    </div>

    {/* Q4: Wireless Communication */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Wireless Communication</h3>
        <StarButton questionId="c1q4" />
      </div>
      
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px'}}>
        <div>
          <p style={{fontWeight: 'bold'}}>Satellite</p>
          <textarea style={styles.input} rows="4" placeholder="Use, Mechanism, Interference, Cost, Factor" onChange={(e) => onChange('c1q4_sat', e.target.value)} value={userAnswers.c1q4_sat || ''}/>
        </div>
        <div>
          <p style={{fontWeight: 'bold'}}>Microwave</p>
          <textarea style={styles.input} rows="4" placeholder="Tech , Setup, Factor" onChange={(e) => onChange('c1q4_mic', e.target.value)} value={userAnswers.c1q4_mic || ''}/>
        </div>
      </div>

      <p style={{fontWeight: 'bold'}}>Wifi</p>
      <textarea style={styles.input} placeholder="Tech, How to establish" onChange={(e) => onChange('c1q4_wifi_gen', e.target.value)} value={userAnswers.c1q4_wifi_gen || ''}/>
      
      <p style={{marginTop: '10px', fontSize: '0.9rem'}}><b>Frequency Band Comparison:</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Metric</th><th style={styles.th}>Relation</th></tr></thead>
        <tbody>
          {['Speed', 'Coverage', 'Interference'].map((m, i) => (
            <tr key={i}><td>{m}</td><td><input style={styles.input} placeholder="e.g. 5GHz > 2.4GHz" onChange={(e) => onChange(`c1q4_w_rel_${i}`, e.target.value)} value={userAnswers[`c1q4_w_rel_${i}`] || ''}/></td></tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '10px', fontSize: '0.9rem'}}><b>Wifi Standards:</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Std Name</th><th style={styles.th}>IEEE Name</th><th style={styles.th}>Max Speed</th><th style={styles.th}>Band</th></tr></thead>
        <tbody>
          {[4, 5, 6].map(v => (
            <tr key={v}>
              <td>Wifi {v}</td>
              <td><input style={styles.input} onChange={(e) => onChange(`c1q4_w_ieee_${v}`, e.target.value)} value={userAnswers[`c1q4_w_ieee_${v}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`c1q4_w_spd_${v}`, e.target.value)} value={userAnswers[`c1q4_w_spd_${v}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`c1q4_w_band_${v}`, e.target.value)} value={userAnswers[`c1q4_w_band_${v}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <textarea style={{...styles.input, marginTop: '5px'}} placeholder="Effect of Wifi 6 " onChange={(e) => onChange('c1q4_w_eff', e.target.value)} value={userAnswers.c1q4_w_eff || ''}/>

      <p style={{marginTop: '15px', fontWeight: 'bold'}}>Bluetooth</p>
      <textarea style={styles.input} rows="2" placeholder="Use, Mechanism, vs Wifi" onChange={(e) => onChange('c1q4_bt', e.target.value)} value={userAnswers.c1q4_bt || ''}/>
    </div>
    {/* Q5: Wired vs Wireless */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: Wired vs Wireless Network</h3>
        <StarButton questionId="c1q5" />
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
        <div>
          <p><b>Wired</b></p>
          <textarea style={styles.input} placeholder="Advantage" onChange={(e) => onChange('c1q5_wd_adv', e.target.value)} value={userAnswers.c1q5_wd_adv || ''}/>
          <textarea style={{...styles.input, marginTop: '5px'}} placeholder="Disadvantage" onChange={(e) => onChange('c1q5_wd_dis', e.target.value)} value={userAnswers.c1q5_wd_dis || ''}/>
        </div>
        <div>
          <p><b>Wireless</b></p>
          <textarea style={styles.input} placeholder="Advantage" onChange={(e) => onChange('c1q5_wl_adv', e.target.value)} value={userAnswers.c1q5_wl_adv || ''}/>
          <textarea style={{...styles.input, marginTop: '5px'}} placeholder="Disadvantage" onChange={(e) => onChange('c1q5_wl_dis', e.target.value)} value={userAnswers.c1q5_wl_dis || ''}/>
        </div>
      </div>
      {showAnswers && <div style={styles.answerKey}>Wired: Secure/Fast but Low mobility. Wireless: Easy/Flexible but Less secure/stable.</div>}
    </div>

    {/* Q6: Internet Access */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: Method of Internet Access</h3>
        <StarButton questionId="c1q6" />
      </div>
      <p style={{fontWeight: 'bold'}}>Broadband</p>
      <textarea style={styles.input} rows="2" placeholder="Method, Attr, Comparison" onChange={(e) => onChange('c1q6_bb', e.target.value)} value={userAnswers.c1q6_bb || ''}/>
      
      <p style={{fontWeight: 'bold', marginTop: '10px'}}>Leased Line</p>
      <textarea style={styles.input} rows="2" placeholder="Def & Benefit" onChange={(e) => onChange('c1q6_ll', e.target.value)} value={userAnswers.c1q6_ll || ''}/>
      
      <p style={{fontWeight: 'bold', marginTop: '10px'}}>Mobile Data</p>
      <textarea style={styles.input} rows="2" placeholder="Use, 5G Def & Adv" onChange={(e) => onChange('c1q6_md', e.target.value)} value={userAnswers.c1q6_md || ''}/>
      
      {showAnswers && (
        <div style={styles.answerKey}>
          Broadband: Wired, wide bandwidth. FTTH &gt; FTTC &gt; ADSL.<br/>
          Leased Line: Private dedicated channel, reliable.<br/>
          Mobile Data: 5G = Faster, Large capacity, Low latency (IoT).
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

// --- COMPULSORY C CH 2 ---
const ICT_Comp_C_Ch2 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Protocol */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Protocol</h3>
        <StarButton questionId="c2q1" />
      </div>
      <p>Definition of a <b>Protocol</b>:</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c2q1_def', e.target.value)} value={userAnswers.c2q1_def || ''}/>
      {showAnswers && <div style={styles.answerKey}>A set of rules that specify the format and order of data sent and received between devices.</div>}
    </div>

    {/* Q2: TCP/IP */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: TCP/IP</h3>
        <StarButton questionId="c2q2" />
      </div>
      <p>What is TCP/IP?</p>
      <input style={styles.input} onChange={(e) => onChange('c2q2_def', e.target.value)} value={userAnswers.c2q2_def || ''}/>
      
      <p style={{marginTop: '15px'}}><b>Steps of Transmission:</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
           <span style={{fontWeight: 'bold', width: '60px'}}>Step 1:</span>
           <input style={styles.input} placeholder="" onChange={(e) => onChange('c2q2_s1', e.target.value)} value={userAnswers.c2q2_s1 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
           <span style={{fontWeight: 'bold', width: '60px'}}>Step 2:</span>
           <input style={styles.input} placeholder="" onChange={(e) => onChange('c2q2_s2', e.target.value)} value={userAnswers.c2q2_s2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
           <span style={{fontWeight: 'bold', width: '60px'}}>Step 3:</span>
           <input style={styles.input} placeholder="" onChange={(e) => onChange('c2q2_s3', e.target.value)} value={userAnswers.c2q2_s3 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
           <span style={{fontWeight: 'bold', width: '60px'}}>Step 4:</span>
           <input style={styles.input} placeholder="" onChange={(e) => onChange('c2q2_s4', e.target.value)} value={userAnswers.c2q2_s4 || ''}/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Def: Protocol that specifies how data is transmitted.<br/>
          1. TCP divides data into packets. 2. Packets are numbered and sent. 3. IP assigns dest address & finds best path. 4. TCP reassembles packets at destination.
        </div>
      )}
    </div>

    {/* Q3: IP Address */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: IP Address</h3>
        <StarButton questionId="c2q3" />
      </div>
      <p>Definition:</p>
      <input style={styles.input} onChange={(e) => onChange('c2q3_def', e.target.value)} value={userAnswers.c2q3_def || ''}/>
      
      <p style={{marginTop: '10px'}}>3 Attributes:</p>
      <div style={{display: 'flex', gap: '10px'}}>
        <input style={styles.input} placeholder="1" onChange={(e) => onChange('c2q3_att1', e.target.value)} value={userAnswers.c2q3_att1 || ''}/>
        <input style={styles.input} placeholder="2" onChange={(e) => onChange('c2q3_att2', e.target.value)} value={userAnswers.c2q3_att2 || ''}/>
        <input style={styles.input} placeholder="3" onChange={(e) => onChange('c2q3_att3', e.target.value)} value={userAnswers.c2q3_att3 || ''}/>
      </div>

      <p style={{marginTop: '15px'}}><b>Difference (MAC vs IP):</b></p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
        <input style={styles.input} placeholder="MAC identifies..." onChange={(e) => onChange('c2q3_mac', e.target.value)} value={userAnswers.c2q3_mac || ''}/>
        <input style={styles.input} placeholder="IP identifies..." onChange={(e) => onChange('c2q3_ip_role', e.target.value)} value={userAnswers.c2q3_ip_role || ''}/>
      </div>

      <p style={{marginTop: '20px'}}><b>IPv4 vs IPv6:</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Feature</th><th style={styles.th}>IPv4</th><th style={styles.th}>IPv6</th></tr></thead>
        <tbody>
          <tr>
            <td>No. of Bits</td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q3_v4_bits', e.target.value)} value={userAnswers.c2q3_v4_bits || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q3_v6_bits', e.target.value)} value={userAnswers.c2q3_v6_bits || ''}/></td>
          </tr>
          <tr>
            <td>Available Addresses</td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q3_v4_count', e.target.value)} value={userAnswers.c2q3_v4_count || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q3_v6_count', e.target.value)} value={userAnswers.c2q3_v6_count || ''}/></td>
          </tr>
          <tr>
            <td>Range / Example</td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q3_v4_range', e.target.value)} value={userAnswers.c2q3_v4_range || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q3_v6_range', e.target.value)} value={userAnswers.c2q3_v6_range || ''}/></td>
          </tr>
        </tbody>
      </table>
      
      <p style={{marginTop: '10px'}}>Reason to establish IPv6:</p>
      <input style={styles.input} onChange={(e) => onChange('c2q3_v6_reason', e.target.value)} value={userAnswers.c2q3_v6_reason || ''}/>
      
      <p style={{marginTop: '10px'}}>2 ways to shorten IPv6:</p>
      <div style={{display: 'flex', gap: '10px'}}>
        <input style={styles.input} placeholder="Method 1" onChange={(e) => onChange('c2q3_short1', e.target.value)} value={userAnswers.c2q3_short1 || ''}/>
        <input style={styles.input} placeholder="Method 2" onChange={(e) => onChange('c2q3_short2', e.target.value)} value={userAnswers.c2q3_short2 || ''}/>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          Def: Changeable numeric address identifying a device in a TCP/IP network.<br/>
          Attr: Unique in network, Assigned by ISP, Binary processed.<br/>
          Diff: MAC=Specific Device, IP=Location of Device.<br/>
          IPv4: 32 bits, 2^32 addrs, 0.0.0.0-255.255.255.255.<br/>
          IPv6: 128 bits, 2^128 addrs, 0000:..:FFFF.<br/>
          Reason: IPv4 exhaustion due to rapid ICT dev.<br/>
          Shorten: 1. Omit leading zero, 2. Turn multiple "0000:" into "::" (once).
        </div>
      )}
    </div>

    {/* Q4: DNS */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: DNS</h3>
        <StarButton questionId="c2q4" />
      </div>
      <p>Use of Domain Name:</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c2q4_dn_use', e.target.value)} value={userAnswers.c2q4_dn_use || ''}/>
      <p style={{marginTop: '10px'}}>Use of DNS Server:</p>
      <input style={styles.input} onChange={(e) => onChange('c2q4_dns_use', e.target.value)} value={userAnswers.c2q4_dns_use || ''}/>
      
      <p style={{marginTop: '15px'}}><b>Hierarchy (Example: www.google.com.hk)</b></p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
        <div><span style={{fontWeight: 'bold'}}>www</span>: <input style={styles.input} onChange={(e) => onChange('c2q4_www', e.target.value)} value={userAnswers.c2q4_www || ''}/></div>
        <div><span style={{fontWeight: 'bold'}}>google</span>: <input style={styles.input} onChange={(e) => onChange('c2q4_google', e.target.value)} value={userAnswers.c2q4_google || ''}/></div>
        <div><span style={{fontWeight: 'bold'}}>com</span>: <input style={styles.input} onChange={(e) => onChange('c2q4_com', e.target.value)} value={userAnswers.c2q4_com || ''}/></div>
        <div><span style={{fontWeight: 'bold'}}>hk</span>: <input style={styles.input} onChange={(e) => onChange('c2q4_hk', e.target.value)} value={userAnswers.c2q4_hk || ''}/></div>
      </div>
      
      <p style={{marginTop: '15px'}}>Examples:</p>
      <div style={{display: 'flex', gap: '20px'}}>
        <div style={{flex: 1}}>
          <p>gTLD Examples:</p>
          <input style={styles.input} onChange={(e) => onChange('c2q4_gtld', e.target.value)} value={userAnswers.c2q4_gtld || ''}/>
        </div>
        <div style={{flex: 1}}>
          <p>ccTLD Examples:</p>
          <input style={styles.input} onChange={(e) => onChange('c2q4_cctld', e.target.value)} value={userAnswers.c2q4_cctld || ''}/>
        </div>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          DN Use: Difficult to memorize IP, meaningful name adopted. DNS Server: Translate Domain Name to IP.<br/>
          Hierarchy: www (Host), google (Register), com (gTLD), hk (ccTLD).<br/>
          gTLD: .net, .edu, .gov. ccTLD: .jp, .uk.
        </div>
      )}
    </div>

    {/* Q5: URL */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: URL</h3>
        <StarButton questionId="c2q5" />
      </div>
      <p>Use of Port Number:</p>
      <input style={styles.input} onChange={(e) => onChange('c2q5_port', e.target.value)} value={userAnswers.c2q5_port || ''}/>
      <p style={{marginTop: '10px'}}>Use of Path:</p>
      <input style={styles.input} onChange={(e) => onChange('c2q5_path', e.target.value)} value={userAnswers.c2q5_path || ''}/>
      {showAnswers && (
        <div style={styles.answerKey}>
          Port: Specify service requested (when multiple hosted). Path: Specify resource location relative to root.
        </div>
      )}
    </div>

    {/* Q6: Network Protocol */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: HTTP & HTTPS</h3>
        <StarButton questionId="c2q6" />
      </div>
      <p>Use of HTTP/HTTPS:</p>
      <input style={styles.input} onChange={(e) => onChange('c2q6_use', e.target.value)} value={userAnswers.c2q6_use || ''}/>
      <p style={{marginTop: '10px'}}>Use of HTTP Server:</p>
      <input style={styles.input} onChange={(e) => onChange('c2q6_serv', e.target.value)} value={userAnswers.c2q6_serv || ''}/>
      
      <p style={{marginTop: '15px'}}><b>Difference & Security:</b></p>
      <p>Difference between HTTP and HTTPS:</p>
      <input style={styles.input} onChange={(e) => onChange('c2q6_diff', e.target.value)} value={userAnswers.c2q6_diff || ''}/>
      <p style={{marginTop: '10px'}}>Use of SSL:</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c2q6_ssl', e.target.value)} value={userAnswers.c2q6_ssl || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          Use: Transfer hypertext (web pages). Server: Host web pages. Diff: HTTPS is more secure (uses SSL).<br/>
          SSL: Encrypts data during transmission, making it reliable and confidential.
        </div>
      )}
    </div>

    {/* Q7: Email Protocol */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7: Email Protocol</h3>
        <StarButton questionId="c2q7" />
      </div>
      <p>2 Uses of SMTP:</p>
      <div style={{display: 'flex', gap: '10px'}}>
        <input style={styles.input} placeholder="1" onChange={(e) => onChange('c2q7_smtp1', e.target.value)} value={userAnswers.c2q7_smtp1 || ''}/>
        <input style={styles.input} placeholder="2" onChange={(e) => onChange('c2q7_smtp2', e.target.value)} value={userAnswers.c2q7_smtp2 || ''}/>
      </div>

      <p style={{marginTop: '20px'}}><b>IMAP vs POP3:</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Aspect</th><th style={styles.th}>IMAP</th><th style={styles.th}>POP3</th></tr></thead>
        <tbody>
          <tr>
            <td>General Use</td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q7_imap_use', e.target.value)} value={userAnswers.c2q7_imap_use || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q7_pop3_use', e.target.value)} value={userAnswers.c2q7_pop3_use || ''}/></td>
          </tr>
          <tr>
            <td>Email Location</td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q7_imap_loc', e.target.value)} value={userAnswers.c2q7_imap_loc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q7_pop3_loc', e.target.value)} value={userAnswers.c2q7_pop3_loc || ''}/></td>
          </tr>
          <tr>
            <td>Organization/Sync</td>
            <td><textarea style={styles.input} rows="3" onChange={(e) => onChange('c2q7_imap_org', e.target.value)} value={userAnswers.c2q7_imap_org || ''}/></td>
            <td><textarea style={styles.input} rows="3" onChange={(e) => onChange('c2q7_pop3_org', e.target.value)} value={userAnswers.c2q7_pop3_org || ''}/></td>
          </tr>
          <tr>
            <td>Internet Req</td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q7_imap_net', e.target.value)} value={userAnswers.c2q7_imap_net || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q7_pop3_net', e.target.value)} value={userAnswers.c2q7_pop3_net || ''}/></td>
          </tr>
        </tbody>
      </table>

      {showAnswers && (
        <div style={styles.answerKey}>
          SMTP: 1. Send email to server. 2. Distribute to other servers.<br/>
          IMAP: Kept on server. Syncs changes across devices. Requires internet to access.<br/>
          POP3: Download to local. Deleted from server (by default). No sync. Internet not req after download.
        </div>
      )}
    </div>

    {/* Q8: FTP */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8: FTP</h3>
        <StarButton questionId="c2q8" />
      </div>
      <p>Use:</p>
      <input style={styles.input} onChange={(e) => onChange('c2q8_use', e.target.value)} value={userAnswers.c2q8_use || ''}/>
      <p style={{marginTop: '10px'}}>Requirement:</p>
      <input style={styles.input} onChange={(e) => onChange('c2q8_req', e.target.value)} value={userAnswers.c2q8_req || ''}/>
      {showAnswers && (
        <div style={styles.answerKey}>
          Use: Transfer files between devices across network. Req: FTP server + Authentication (Login).
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

// --- COMPULSORY C CH 3 ---
const ICT_Comp_C_Ch3 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: IoT */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Internet of Things (IoT)</h3>
        <StarButton questionId="c3q1" />
      </div>
      <p><b>Type:</b> (Application / Service)</p>
      <input style={styles.input} onChange={(e) => onChange('c3q1_type', e.target.value)} value={userAnswers.c3q1_type || ''}/>
      
      <p style={{marginTop: '10px'}}><b>Definition:</b></p>
      <input style={styles.input} onChange={(e) => onChange('c3q1_def', e.target.value)} value={userAnswers.c3q1_def || ''}/>
      
      <p style={{marginTop: '10px'}}><b>Mechanism:</b></p>
      <input style={styles.input} onChange={(e) => onChange('c3q1_mech', e.target.value)} value={userAnswers.c3q1_mech || ''}/>
      
      <p style={{marginTop: '10px'}}><b>Connection Method:</b></p>
      <input style={styles.input} onChange={(e) => onChange('c3q1_conn', e.target.value)} value={userAnswers.c3q1_conn || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          Type: Application<br/>
          Def: Network of connecting physical objects.<br/>
          Mech: Shared collected data and develop new functionalities.<br/>
          Conn: Wireless connection.
        </div>
      )}
    </div>

    {/* Q2: Cloud Service */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Cloud Service</h3>
        <StarButton questionId="c3q2" />
      </div>
      <p><b>Type:</b></p>
      <input style={styles.input} onChange={(e) => onChange('c3q2_type', e.target.value)} value={userAnswers.c3q2_type || ''}/>

      <p style={{marginTop: '10px'}}><b>Definition:</b></p>
      <input style={styles.input} onChange={(e) => onChange('c3q2_def', e.target.value)} value={userAnswers.c3q2_def || ''}/>

      <p style={{marginTop: '10px'}}><b>Mechanism:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c3q2_mech', e.target.value)} value={userAnswers.c3q2_mech || ''}/>

      <div style={{marginTop: '15px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div>
          <p><b>4 Benefits:</b></p>
          <textarea style={styles.input} rows="4" onChange={(e) => onChange('c3q2_ben', e.target.value)} value={userAnswers.c3q2_ben || ''}/>
        </div>
        <div>
          <p><b>2 Drawbacks:</b></p>
          <textarea style={styles.input} rows="4" onChange={(e) => onChange('c3q2_draw', e.target.value)} value={userAnswers.c3q2_draw || ''}/>
        </div>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          Type: Application. Def: The Internet.<br/>
          Mech: Data stored in server controlled by 3rd party, accessible via internet.<br/>
          Benefits: 1. Access anytime/anywhere. 2. No SW install/HW update. 3. On-demand plans. 4. 3rd party maintenance.<br/>
          Drawbacks: 1. Requires internet. 2. Slower speed than local.
        </div>
      )}
    </div>

    {/* Q3: Smart City */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Smart City</h3>
        <StarButton questionId="c3q3" />
      </div>
      <p>Type: <input style={{...styles.input, width: '200px', display: 'inline-block', marginLeft: '10px'}} onChange={(e) => onChange('c3q3_type', e.target.value)} value={userAnswers.c3q3_type || ''}/></p>
      
      <p style={{marginTop: '15px'}}><b>Smart Economy (2 Uses):</b></p>
      <input style={styles.input} placeholder="1." onChange={(e) => onChange('c3q3_eco1', e.target.value)} value={userAnswers.c3q3_eco1 || ''}/>
      <input style={{...styles.input, marginTop: '5px'}} placeholder="2." onChange={(e) => onChange('c3q3_eco2', e.target.value)} value={userAnswers.c3q3_eco2 || ''}/>

      <p style={{marginTop: '15px'}}><b>Digital Workplace (2 Uses):</b></p>
      <input style={styles.input} placeholder="1." onChange={(e) => onChange('c3q3_work1', e.target.value)} value={userAnswers.c3q3_work1 || ''}/>
      <input style={{...styles.input, marginTop: '5px'}} placeholder="2." onChange={(e) => onChange('c3q3_work2', e.target.value)} value={userAnswers.c3q3_work2 || ''}/>

      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Role</th><th style={styles.th}>Benefit</th><th style={styles.th}>Drawback</th></tr></thead>
        <tbody>
          <tr>
            <td>Employer</td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q3_er_b', e.target.value)} value={userAnswers.c3q3_er_b || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q3_er_d', e.target.value)} value={userAnswers.c3q3_er_d || ''}/></td>
          </tr>
          <tr>
            <td>Employee</td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q3_ee_b', e.target.value)} value={userAnswers.c3q3_ee_b || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q3_ee_d', e.target.value)} value={userAnswers.c3q3_ee_d || ''}/></td>
          </tr>
        </tbody>
      </table>

      {showAnswers && (
        <div style={styles.answerKey}>
          Type: Application.<br/>
          Economy: Cashless payment/finance mgmt, Online banking (check transactions instantly).<br/>
          Workplace: Remote work (PC), Access company files anytime.<br/>
          Employer: Rent smaller office (cut cost) / Data breach risk.<br/>
          Employee: Less transport cost / Cost to setup workstation.
        </div>
      )}
    </div>

    {/* Q4: Email */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Email</h3>
        <StarButton questionId="c3q4" />
      </div>
      <p>Type: <input style={{...styles.input, width: '200px', display: 'inline-block', marginLeft: '10px'}} onChange={(e) => onChange('c3q4_type', e.target.value)} value={userAnswers.c3q4_type || ''}/></p>
      
      <p style={{marginTop: '10px'}}><b>Address Format:</b> iloveict@gmail.com</p>
      <div style={{display: 'flex', gap: '10px'}}>
        <input style={styles.input} placeholder="'iloveict' is..." onChange={(e) => onChange('c3q4_user', e.target.value)} value={userAnswers.c3q4_user || ''}/>
        <input style={styles.input} placeholder="'gmail.com' is..." onChange={(e) => onChange('c3q4_domain', e.target.value)} value={userAnswers.c3q4_domain || ''}/>
      </div>

      <p style={{marginTop: '15px'}}><b>Recipient Fields:</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Field</th><th style={styles.th}>Feature</th><th style={styles.th}>Application</th></tr></thead>
        <tbody>
          {['To', 'Cc', 'Bcc'].map(f => (
            <tr key={f}>
              <td><b>{f}</b></td>
              <td><input style={styles.input} onChange={(e) => onChange(`c3q4_${f}_feat`, e.target.value)} value={userAnswers[`c3q4_${f}_feat`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`c3q4_${f}_app`, e.target.value)} value={userAnswers[`c3q4_${f}_app`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '15px'}}><b>Reply Methods:</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Method</th><th style={styles.th}>Feature</th></tr></thead>
        <tbody>
          {['Reply', 'Reply All', 'Forward'].map(m => (
            <tr key={m}>
              <td><b>{m}</b></td>
              <td><input style={styles.input} onChange={(e) => onChange(`c3q4_${m}`, e.target.value)} value={userAnswers[`c3q4_${m}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '15px'}}><b>Sending Files:</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Method</th><th style={styles.th}>Attribute</th><th style={styles.th}>Suitable Usage</th><th style={styles.th}>Benefit</th><th style={styles.th}>Drawback</th></tr></thead>
        <tbody>
          {['Hyperlink', 'Inline Embedding', 'Attachment'].map(m => (
            <tr key={m}>
              <td style={{fontSize: '0.85rem'}}><b>{m}</b></td>
              <td><input style={styles.input} onChange={(e) => onChange(`c3q4_f_${m}_attr`, e.target.value)} value={userAnswers[`c3q4_f_${m}_attr`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`c3q4_f_${m}_use`, e.target.value)} value={userAnswers[`c3q4_f_${m}_use`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`c3q4_f_${m}_ben`, e.target.value)} value={userAnswers[`c3q4_f_${m}_ben`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`c3q4_f_${m}_draw`, e.target.value)} value={userAnswers[`c3q4_f_${m}_draw`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{marginTop: '15px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
        <div><p><b>Blacklist Use:</b></p><input style={styles.input} onChange={(e) => onChange('c3q4_bl', e.target.value)} value={userAnswers.c3q4_bl || ''}/></div>
        <div><p><b>Whitelist Use:</b></p><input style={styles.input} onChange={(e) => onChange('c3q4_wl', e.target.value)} value={userAnswers.c3q4_wl || ''}/></div>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          Type: Service. Addr: Username / Mail Server Domain Name.<br/>
          <b>Fields:</b><br/>
          To: Original email, main recipient attention.<br/>
          Cc: Shown on header, for info.<br/>
          Bcc: Not shown on header, bulk mail privacy.<br/>
          <b>Reply:</b> Reply (Sender only), Reply All (Sender + Cc), Forward (New copy to new recipient).<br/>
          <b>Files:</b><br/>
          Hyperlink: Link to browser. Send large files. No mail storage / Takes remote storage.<br/>
          Inline: Shown in box. Visual content. Visual / Maybe blocked or image only.<br/>
          Attachment: In mailbox (25MB limit). Small files. Direct download / Takes mail storage.<br/>
          Blacklist: Block (Spam). Whitelist: Approve (Not Spam).
        </div>
      )}
    </div>

    {/* Q5: Remote Logon */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: Remote Logon</h3>
        <StarButton questionId="c3q5" />
      </div>
      <p>Type: <input style={{...styles.input, width: '200px', display: 'inline-block'}} onChange={(e) => onChange('c3q5_type', e.target.value)} value={userAnswers.c3q5_type || ''}/></p>
      <p style={{marginTop: '10px'}}><b>Uses:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c3q5_use', e.target.value)} value={userAnswers.c3q5_use || ''}/>
      <div style={{display: 'flex', gap: '15px', marginTop: '10px'}}>
        <div style={{flex: 1}}><p><b>Benefit:</b></p><input style={styles.input} onChange={(e) => onChange('c3q5_ben', e.target.value)} value={userAnswers.c3q5_ben || ''}/></div>
        <div style={{flex: 1}}><p><b>Drawbacks (2):</b></p><textarea style={styles.input} rows="2" onChange={(e) => onChange('c3q5_draw', e.target.value)} value={userAnswers.c3q5_draw || ''}/></div>
      </div>
      {showAnswers && <div style={styles.answerKey}>Type: Service. Use: Remote access device, authorized connection from distance. Ben: Access files anytime/where. Draw: 1. Need stable net, 2. Data breach risk.</div>}
    </div>

    {/* Q6, Q7, Q10: Short Questions */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6, Q7, Q10: Service Checks</h3>
        <StarButton questionId="c3q6" />
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div>
          <p><b>Q6 Online Chat</b> (Type, Use, Ex):</p>
          <input style={styles.input} onChange={(e) => onChange('c3q6', e.target.value)} value={userAnswers.c3q6 || ''}/>
        </div>
        <div>
          <p><b>Q7 SNS</b> (Type, 2 Ex):</p>
          <input style={styles.input} onChange={(e) => onChange('c3q7', e.target.value)} value={userAnswers.c3q7 || ''}/>
        </div>
        <div style={{gridColumn: '1 / -1'}}>
          <p><b>Q10 Streaming</b> (Type, Def, Mech, Ben):</p>
          <textarea style={styles.input} rows="3" onChange={(e) => onChange('c3q10', e.target.value)} value={userAnswers.c3q10 || ''}/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Q6: Service. Communicate over net. Ex: Online chat support.<br/>
          Q7: Service. Ex: Social media, Discussion forum.<br/>
          Q10: Service. Def: Media continuous flow. Mech: Play while downloading. Ben: Shortened wait time.
        </div>
      )}
    </div>

    {/* Q8: File Transfer */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8: File Transfer</h3>
        <StarButton questionId="c3q8" />
      </div>
      <p>Type: <input style={{...styles.input, width: '150px', display: 'inline-block'}} onChange={(e) => onChange('c3q8_type', e.target.value)} value={userAnswers.c3q8_type || ''}/> Factors: <input style={{...styles.input, width: '300px', display: 'inline-block'}} onChange={(e) => onChange('c3q8_fac', e.target.value)} value={userAnswers.c3q8_fac || ''}/></p>
      
      <div style={{overflowX: 'auto', marginTop: '15px'}}>
        <table style={{...styles.table, minWidth: '800px'}}>
          <thead>
            <tr>
              <th style={styles.th}>Method</th>
              <th style={styles.th}>Size Limit</th>
              <th style={styles.th}>Restriction</th>
              <th style={styles.th}>Encrypted?</th>
              <th style={styles.th}>2FA?</th>
              <th style={styles.th}>Advantage</th>
              <th style={styles.th}>Disadvantage</th>
            </tr>
          </thead>
          <tbody>
            {[
              {n: 'Messaging App', k: 'msg'}, {n: 'Email', k: 'email'}, {n: 'Cloud Storage', k: 'cloud'},
              {n: 'Network Drive (VPN)', k: 'vpn'}, {n: 'P2P File Sharing', k: 'p2p'}
            ].map(row => (
              <tr key={row.k}>
                <td><b>{row.n}</b></td>
                <td><input style={styles.input} onChange={(e) => onChange(`c3q8_${row.k}_size`, e.target.value)} value={userAnswers[`c3q8_${row.k}_size`] || ''}/></td>
                <td><input style={styles.input} onChange={(e) => onChange(`c3q8_${row.k}_res`, e.target.value)} value={userAnswers[`c3q8_${row.k}_res`] || ''}/></td>
                <td><input style={styles.input} onChange={(e) => onChange(`c3q8_${row.k}_enc`, e.target.value)} value={userAnswers[`c3q8_${row.k}_enc`] || ''}/></td>
                <td><input style={styles.input} onChange={(e) => onChange(`c3q8_${row.k}_2fa`, e.target.value)} value={userAnswers[`c3q8_${row.k}_2fa`] || ''}/></td>
                <td><input style={styles.input} onChange={(e) => onChange(`c3q8_${row.k}_adv`, e.target.value)} value={userAnswers[`c3q8_${row.k}_adv`] || ''}/></td>
                <td><input style={styles.input} onChange={(e) => onChange(`c3q8_${row.k}_dis`, e.target.value)} value={userAnswers[`c3q8_${row.k}_dis`] || ''}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Type: Service. Factors: Size, Type, Security.<br/>
          Messaging: Small, Compressed, End-to-End, Y, Secure, Low Quality.<br/>
          Email: Small, None, Y (if supported), Y, Cross-platform, Fee for space.<br/>
          Cloud: Large, None, Y, Y, Cross-platform, Fee.<br/>
          VPN: No limit (storage dependent), None, N, N, Secure, Diff setup.<br/>
          P2P: No limit, None, Y (low), N, Fast, Malware risk.
        </div>
      )}
    </div>

    {/* Q9: Information Searching */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q9: Information Searching</h3>
        <StarButton questionId="c3q9" />
      </div>
      <p>Type: <input style={{...styles.input, width: '150px', display: 'inline-block'}} onChange={(e) => onChange('c3q9_type', e.target.value)} value={userAnswers.c3q9_type || ''}/></p>
      
      <p style={{marginTop: '15px'}}><b>Search Engine vs Database:</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Aspect</th><th style={styles.th}>Search Engine</th><th style={styles.th}>Database</th></tr></thead>
        <tbody>
          {['Fee', 'Structure of Data', 'Sponsors & Ads', 'Application'].map(asp => (
            <tr key={asp}>
              <td><b>{asp}</b></td>
              <td><input style={styles.input} onChange={(e) => onChange(`c3q9_${asp}_se`, e.target.value)} value={userAnswers[`c3q9_${asp}_se`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`c3q9_${asp}_db`, e.target.value)} value={userAnswers[`c3q9_${asp}_db`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '15px'}}><b>Search Steps:</b></p>
      <div style={{display: 'flex', gap: '10px'}}>
        <input style={styles.input} placeholder="Step 1" onChange={(e) => onChange('c3q9_s1', e.target.value)} value={userAnswers.c3q9_s1 || ''}/>
        <input style={styles.input} placeholder="Step 2" onChange={(e) => onChange('c3q9_s2', e.target.value)} value={userAnswers.c3q9_s2 || ''}/>
        <input style={styles.input} placeholder="Step 3" onChange={(e) => onChange('c3q9_s3', e.target.value)} value={userAnswers.c3q9_s3 || ''}/>
      </div>

      <p style={{marginTop: '15px'}}><b>Search Operators:</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Operator</th><th style={styles.th}>Technique / Description</th></tr></thead>
        <tbody>
          {['-', 'OR', '""', 'site:'].map(op => (
            <tr key={op}>
              <td style={{textAlign: 'center', fontWeight: 'bold'}}>{op}</td>
              <td><input style={styles.input} onChange={(e) => onChange(`c3q9_op_${op}`, e.target.value)} value={userAnswers[`c3q9_op_${op}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '15px'}}><b>Evaluation Criteria:</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Criteria</th><th style={styles.th}>Methods to Check</th></tr></thead>
        <tbody>
          {['Credibility', 'Reliability', 'Timeliness'].map(c => (
            <tr key={c}>
              <td><b>{c}</b></td>
              <td><input style={styles.input} onChange={(e) => onChange(`c3q9_eval_${c}`, e.target.value)} value={userAnswers[`c3q9_eval_${c}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAnswers && (
        <div style={styles.answerKey}>
          Type: Service.<br/>
          Diff: Free vs Fee, Unstructured vs Structured, Ads vs No Ads, General vs Academic.<br/>
          Steps: 1. Keywords, 2. Type/Restraints, 3. Operators.<br/>
          Ops: - (Exclude), OR (Combine), "" (Exact), site: (Specific URL).<br/>
          Eval: Credibility (Author/Domain), Reliability (Fact-check/Citations), Timeliness (Update freq/Pub date).
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

// --- COMPULSORY A CH 4 ---
const ICT_Comp_C_Ch4 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Build a Website */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Building a Website</h3>
        <StarButton questionId="c4q1" />
      </div>
      <p><b>3 Elements to design a website:</b></p>
      <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
        <input style={styles.input} placeholder="1. Structure" onChange={(e) => onChange('a4q1_e1', e.target.value)} value={userAnswers.a4q1_e1 || ''}/>
        <input style={styles.input} placeholder="2. Presentation" onChange={(e) => onChange('a4q1_e2', e.target.value)} value={userAnswers.a4q1_e2 || ''}/>
        <input style={styles.input} placeholder="3. Behavior" onChange={(e) => onChange('a4q1_e3', e.target.value)} value={userAnswers.a4q1_e3 || ''}/>
      </div>
      
      <p><b>HTML Definition:</b></p>
      <input style={styles.input} onChange={(e) => onChange('a4q1_def', e.target.value)} value={userAnswers.a4q1_def || ''}/>
      <p style={{marginTop: '10px'}}><b>HTML Attribute:</b></p>
      <input style={styles.input} placeholder="" onChange={(e) => onChange('a4q1_attr', e.target.value)} value={userAnswers.a4q1_attr || ''}/>
      
      {showAnswers && <div style={styles.answerKey}>Elements: HTML, CSS, JavaScript.<br/>Def: A markup language.<br/>Attr: Cross-platform compatible.</div>}
    </div>

    {/* Q2: HTML Editor */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: HTML Editors</h3>
        <StarButton questionId="c4q2" />
      </div>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Type</th><th style={styles.th}>Advantages</th><th style={styles.th}>Examples</th></tr></thead>
        <tbody>
          <tr>
            <td><b>Text Editors</b></td>
            <td><textarea style={styles.input} rows="3" onChange={(e) => onChange('a4q2_txt_adv', e.target.value)} value={userAnswers.a4q2_txt_adv || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('a4q2_txt_ex', e.target.value)} value={userAnswers.a4q2_txt_ex || ''}/></td>
          </tr>
          <tr>
            <td><b>Web Authoring Tools</b></td>
            <td><textarea style={styles.input} rows="3" onChange={(e) => onChange('a4q2_web_adv', e.target.value)} value={userAnswers.a4q2_web_adv || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('a4q2_web_ex', e.target.value)} value={userAnswers.a4q2_web_ex || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Text Editors:</b> Simple, all OS, good for simple code. Ex: Notepad++.<br/>
          <b>Web Tools:</b> Templates, auto-indent, debug/testing env, smoother authoring. Ex: VS Code.
        </div>
      )}
    </div>

    {/* Q3: HTML Tags */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: HTML Tags</h3>
        <StarButton questionId="c4q3" />
      </div>
      
      <p><b>Base Elements (Give Tags):</b></p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px'}}>
        <div>Title: <input style={styles.input} onChange={(e) => onChange('a4q3_title', e.target.value)} value={userAnswers.a4q3_title || ''}/></div>
        <div>Paragraph: <input style={styles.input} onChange={(e) => onChange('a4q3_p', e.target.value)} value={userAnswers.a4q3_p || ''}/></div>
        <div>Line Break: <input style={styles.input} onChange={(e) => onChange('a4q3_br', e.target.value)} value={userAnswers.a4q3_br || ''}/></div>
        <div>Horiz. Line: <input style={styles.input} onChange={(e) => onChange('a4q3_hr', e.target.value)} value={userAnswers.a4q3_hr || ''}/></div>
      </div>

      <p><b>Text Formats:</b></p>
      <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
        <input style={styles.input} placeholder="Bold tag" onChange={(e) => onChange('a4q3_b', e.target.value)} value={userAnswers.a4q3_b || ''}/>
        <input style={styles.input} placeholder="Italic tag" onChange={(e) => onChange('a4q3_i', e.target.value)} value={userAnswers.a4q3_i || ''}/>
        <input style={styles.input} placeholder="Underline tag" onChange={(e) => onChange('a4q3_u', e.target.value)} value={userAnswers.a4q3_u || ''}/>
      </div>

      <p><b>Attributes (Fill in style="..."):</b></p>
      <table style={styles.table}>
        <tbody>
          <tr><td>Font</td><td><input style={styles.input} placeholder='' onChange={(e) => onChange('a4q3_s_font', e.target.value)} value={userAnswers.a4q3_s_font || ''}/></td></tr>
          <tr><td>Size</td><td><input style={styles.input} placeholder='' onChange={(e) => onChange('a4q3_s_size', e.target.value)} value={userAnswers.a4q3_s_size || ''}/></td></tr>
          <tr><td>Alignment</td><td><input style={styles.input} placeholder='' onChange={(e) => onChange('a4q3_s_align', e.target.value)} value={userAnswers.a4q3_s_align || ''}/></td></tr>
          <tr><td>Color</td><td><input style={styles.input} placeholder='' onChange={(e) => onChange('a4q3_s_col', e.target.value)} value={userAnswers.a4q3_s_col || ''}/></td></tr>
          <tr><td>Bg Color</td><td><input style={styles.input} placeholder='' onChange={(e) => onChange('a4q3_s_bg', e.target.value)} value={userAnswers.a4q3_s_bg || ''}/></td></tr>
        </tbody>
      </table>
      <p style={{marginTop: '10px'}}>Separator for multiple values: <input style={{...styles.input, width: '50px', display: 'inline-block'}} onChange={(e) => onChange('a4q3_sep', e.target.value)} value={userAnswers.a4q3_sep || ''}/></p>

      {/* Application Question Inserted Here */}
      <div style={{marginTop: '15px', padding: '10px', backgroundColor: '#f0f9ff', borderRadius: '5px'}}>
        <p><b>Application:</b> Write the HTML code for a paragraph with:</p>
        <ul style={{fontSize: '0.9rem', margin: '5px 0 10px 20px'}}>
          <li>20px font size</li>
          <li>Aligned at centre</li>
          <li>Red text colour</li>
          <li>Green background colour</li>
        </ul>
        <textarea 
          style={{...styles.input, fontFamily: 'monospace'}} 
          rows="2" 
          placeholder='' 
          onChange={(e) => onChange('a4q3_app_code', e.target.value)} 
          value={userAnswers.a4q3_app_code || ''}
        />
        {showAnswers && (
          <div style={{marginTop: '5px', fontSize: '0.9rem', color: '#0369a1', fontFamily: 'monospace'}}>
            &lt;p style="font-size: 20px; text-align: center; color: red; background-color: green"&gt; ... &lt;/p&gt;
          </div>
        )}
      </div>

      <p style={{marginTop: '15px'}}><b>Lists (Tags):</b></p>
      <div style={{display: 'flex', gap: '10px'}}>
        <input style={styles.input} placeholder="Unordered" onChange={(e) => onChange('a4q3_ul', e.target.value)} value={userAnswers.a4q3_ul || ''}/>
        <input style={styles.input} placeholder="Ordered" onChange={(e) => onChange('a4q3_ol', e.target.value)} value={userAnswers.a4q3_ol || ''}/>
      </div>

      <p style={{marginTop: '15px'}}><b>Tables:</b></p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
        <input style={styles.input} placeholder="Define Table Tag" onChange={(e) => onChange('a4q3_tab', e.target.value)} value={userAnswers.a4q3_tab || ''}/>
        <input style={styles.input} placeholder="Define Row Tag" onChange={(e) => onChange('a4q3_tr', e.target.value)} value={userAnswers.a4q3_tr || ''}/>
        <input style={styles.input} placeholder="Define Data Tag" onChange={(e) => onChange('a4q3_td', e.target.value)} value={userAnswers.a4q3_td || ''}/>
        <input style={styles.input} placeholder="Define Header Tag" onChange={(e) => onChange('a4q3_th', e.target.value)} value={userAnswers.a4q3_th || ''}/>
      </div>
      <p style={{marginTop: '10px'}}>Attributes:</p>
      <input style={styles.input} placeholder="Border (Def)" onChange={(e) => onChange('a4q3_bord', e.target.value)} value={userAnswers.a4q3_bord || ''}/>
      <input style={{...styles.input, marginTop: '5px'}} placeholder="Style Values (4)" onChange={(e) => onChange('a4q3_tstyle', e.target.value)} value={userAnswers.a4q3_tstyle || ''}/>
      <div style={{display: 'flex', gap: '10px', marginTop: '5px'}}>
        <input style={styles.input} placeholder="Colspan Def" onChange={(e) => onChange('a4q3_cspan', e.target.value)} value={userAnswers.a4q3_cspan || ''}/>
        <input style={styles.input} placeholder="Rowspan Def" onChange={(e) => onChange('a4q3_rspan', e.target.value)} value={userAnswers.a4q3_rspan || ''}/>
      </div>

      <p style={{marginTop: '15px'}}><b>Image & Link:</b></p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
        <input style={styles.input} placeholder="Image Tag & Attr" onChange={(e) => onChange('a4q3_img', e.target.value)} value={userAnswers.a4q3_img || ''}/>
        <input style={styles.input} placeholder="Hyperlink Tag" onChange={(e) => onChange('a4q3_link', e.target.value)} value={userAnswers.a4q3_link || ''}/>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          Base: h1/h2, p, br, hr. Fmt: b, i, u.<br/>
          Styles: font-family, font-size, text-align, color, background-color. Sep: ;<br/>
          Lists: ul/li, ol/li.<br/>
          Table: table, tr, td, th. Border: thickness. Style: height, width, padding, border-spacing.<br/>
          Span: Colspan (horiz merge), Rowspan (vert merge).<br/>
          Img: img (src, height, width). Link: a href.
        </div>
      )}
    </div>

    {/* Q4: Web Interface Design */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Web Interface Design (UI/UX)</h3>
        <StarButton questionId="c4q4" />
      </div>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Name</th><th style={styles.th}>Methods</th><th style={styles.th}>Benefits</th></tr></thead>
        <tbody>
          <tr>
            <td>(A) Navigation</td>
            <td><input style={styles.input} onChange={(e) => onChange('a4q4_a_meth', e.target.value)} value={userAnswers.a4q4_a_meth || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('a4q4_a_ben', e.target.value)} value={userAnswers.a4q4_a_ben || ''}/></td>
          </tr>
          <tr>
            <td>(B) Responsive Website</td>
            <td><input style={styles.input} onChange={(e) => onChange('a4q4_b_meth', e.target.value)} value={userAnswers.a4q4_b_meth || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('a4q4_b_ben', e.target.value)} value={userAnswers.a4q4_b_ben || ''}/></td>
          </tr>
          <tr>
            <td>(C) Readability</td>
            <td><textarea style={styles.input} rows="2" onChange={(e) => onChange('a4q4_c_meth', e.target.value)} value={userAnswers.a4q4_c_meth || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('a4q4_c_ben', e.target.value)} value={userAnswers.a4q4_c_ben || ''}/></td>
          </tr>
          <tr>
            <td>(D) Data Input</td>
            <td><input style={styles.input} onChange={(e) => onChange('a4q4_d_meth', e.target.value)} value={userAnswers.a4q4_d_meth || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('a4q4_d_ben', e.target.value)} value={userAnswers.a4q4_d_ben || ''}/></td>
          </tr>
          <tr>
            <td>(E) Accessibility</td>
            <td><textarea style={styles.input} rows="3" onChange={(e) => onChange('a4q4_e_meth', e.target.value)} value={userAnswers.a4q4_e_meth || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('a4q4_e_ben', e.target.value)} value={userAnswers.a4q4_e_ben || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          A: Nav bars/sitemaps. Ben: Find info quickly.<br/>
          B: Mobile/Desktop versions. Ben: Adapt to screen sizes.<br/>
          C: Lists/tables/contrast. Ben: Easier to read.<br/>
          D: Pickers/Drop-downs. Ben: Reduce error/validation.<br/>
          E: Resize text/Alt text/Multi-lang. Ben: Accessible to disabled.
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

// --- COMPULSORY C CH 5 ---
const ICT_Comp_C_Ch5 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Malware */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Security Threats - Malware</h3>
        <StarButton questionId="c5q1" />
      </div>
      <p><b>What is the use of Malware?</b></p>
      <input style={styles.input} onChange={(e) => onChange('c5q1_use', e.target.value)} value={userAnswers.c5q1_use || ''}/>
      
      <p style={{marginTop: '15px'}}><b>Types Comparison:</b></p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Spread/Behaviour</th>
            <th style={styles.th}>Attached to file? (Y/N)</th>
            <th style={styles.th}>Self-Replicating? (Y/N)</th>
            <th style={styles.th}>Auto-Spread Net? (Y/N)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Virus</b></td>
            <td><textarea style={styles.input} rows="3" onChange={(e) => onChange('c5q1_vir_beh', e.target.value)} value={userAnswers.c5q1_vir_beh || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_vir_att', e.target.value)} value={userAnswers.c5q1_vir_att || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_vir_rep', e.target.value)} value={userAnswers.c5q1_vir_rep || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_vir_net', e.target.value)} value={userAnswers.c5q1_vir_net || ''}/></td>
          </tr>
          <tr>
            <td><b>Worm</b></td>
            <td><textarea style={styles.input} rows="3" onChange={(e) => onChange('c5q1_worm_beh', e.target.value)} value={userAnswers.c5q1_worm_beh || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_worm_att', e.target.value)} value={userAnswers.c5q1_worm_att || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_worm_rep', e.target.value)} value={userAnswers.c5q1_worm_rep || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_worm_net', e.target.value)} value={userAnswers.c5q1_worm_net || ''}/></td>
          </tr>
          <tr>
            <td><b>Trojan</b></td>
            <td><textarea style={styles.input} rows="3" onChange={(e) => onChange('c5q1_troj_beh', e.target.value)} value={userAnswers.c5q1_troj_beh || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_troj_att', e.target.value)} value={userAnswers.c5q1_troj_att || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_troj_rep', e.target.value)} value={userAnswers.c5q1_troj_rep || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_troj_net', e.target.value)} value={userAnswers.c5q1_troj_net || ''}/></td>
          </tr>
        </tbody>
      </table>

      <p style={{marginTop: '15px'}}><b>How Malware Spreads:</b></p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div>
          <p><b>1. Dynamic Web Pages (Client-side script)</b></p>
          <p style={{fontSize: '0.85rem'}}>Mechanism:</p>
          <textarea style={styles.input} rows="3" onChange={(e) => onChange('c5q1_spr_web', e.target.value)} value={userAnswers.c5q1_spr_web || ''}/>
        </div>
        <div>
          <p><b>2. Communication Software & Email</b></p>
          <p style={{fontSize: '0.85rem'}}>Mechanism:</p>
          <textarea style={styles.input} rows="3" onChange={(e) => onChange('c5q1_spr_email', e.target.value)} value={userAnswers.c5q1_spr_email || ''}/>
        </div>
        <div>
          <p><b>3. Storage Device (e.g., USB/CD)</b></p>
          <p style={{fontSize: '0.85rem'}}>Mechanism:</p>
          <textarea style={styles.input} rows="3" onChange={(e) => onChange('c5q1_spr_usb', e.target.value)} value={userAnswers.c5q1_spr_usb || ''}/>
        </div>
        <div>
          <p><b>4. Freeware / Shareware</b></p>
          <p style={{fontSize: '0.85rem'}}>Mechanism:</p>
          <textarea style={styles.input} rows="3" onChange={(e) => onChange('c5q1_spr_free', e.target.value)} value={userAnswers.c5q1_spr_free || ''}/>
        </div>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Use:</b> Damage functions, steal data, unauthorized access.<br/>
          <b>Virus:</b> Attaches to files. Deletes/destroys files. Y, Y, N.<br/>
          <b>Worm:</b> No file attach needed. Uses email. Y, Y, Y.<br/>
          <b>Trojan:</b> Disguises as useful app. Backdoor access. Y, N, N.<br/>
          <b>Spread:</b> 1. Malicious script in browser/pop-ups. 2. Attachments/links in email. 3. Auto-install when plugged in. 4. Bundled with download.
        </div>
      )}
    </div>

    {/* Q2: MITM Attack */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Man-in-the-middle (MITM)</h3>
        <StarButton questionId="c5q2" />
      </div>
      <p><b>Mechanism:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q2_mech', e.target.value)} value={userAnswers.c5q2_mech || ''}/>
      <p style={{marginTop: '10px'}}><b>Why difficult to detect?</b></p>
      <input style={styles.input} onChange={(e) => onChange('c5q2_diff', e.target.value)} value={userAnswers.c5q2_diff || ''}/>
      <div style={{marginTop: '10px', padding: '10px', border: '1px dashed #ccc'}}>
        <p><b>Evil Twin Attack (Mechanism):</b></p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q2_evil', e.target.value)} value={userAnswers.c5q2_evil || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Mech: Intercepts/tampers communication. Independent connections to both parties.<br/>
          Detect: Communication works "normally".<br/>
          Evil Twin: Fake WiFi (no pass), intercepts victim's traffic.
        </div>
      )}
    </div>

    {/* Q3: DoS / DDoS */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Denial-of-Service (DoS)</h3>
        <StarButton questionId="c5q3" />
      </div>
      <p><b>Mechanism:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q3_mech', e.target.value)} value={userAnswers.c5q3_mech || ''}/>
      <div style={{display: 'flex', gap: '15px', marginTop: '10px'}}>
        <div style={{flex: 1}}><p><b>Meaning of Zombie Computer:</b></p><input style={styles.input} onChange={(e) => onChange('c5q3_zom', e.target.value)} value={userAnswers.c5q3_zom || ''}/></div>
        <div style={{flex: 1}}><p><b>Meaning of DDoS:</b></p><input style={styles.input} onChange={(e) => onChange('c5q3_ddos', e.target.value)} value={userAnswers.c5q3_ddos || ''}/></div>
      </div>
      <p style={{marginTop: '10px'}}><b>Consequence:</b></p>
      <input style={styles.input} onChange={(e) => onChange('c5q3_cons', e.target.value)} value={userAnswers.c5q3_cons || ''}/>
      {showAnswers && (
        <div style={styles.answerKey}>
          Mech: Botnet sends mass requests. Resource exhaustion.<br/>
          Zombie: Remotely controlled PC.<br/>
          DDoS: Distributed (many zombies from different places).<br/>
          Cons: System paralysed, service unavailable.
        </div>
      )}
    </div>

    {/* Q4: Antivirus */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Antivirus Software</h3>
        <StarButton questionId="c5q4" />
      </div>
      <p><b>2 Functions:</b> <input style={{...styles.input, width: '45%', marginRight: '10px', display: 'inline-block'}} onChange={(e) => onChange('c5q4_f1', e.target.value)} value={userAnswers.c5q4_f1 || ''}/> <input style={{...styles.input, width: '45%', display: 'inline-block'}} onChange={(e) => onChange('c5q4_f2', e.target.value)} value={userAnswers.c5q4_f2 || ''}/></p>
      <p style={{marginTop: '10px'}}><b>Mechanism (Real-time):</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q4_mech', e.target.value)} value={userAnswers.c5q4_mech || ''}/>
      <p style={{marginTop: '10px'}}><b>Virus Signatures & Update Reminder:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q4_sig', e.target.value)} value={userAnswers.c5q4_sig || ''}/>
      {showAnswers && <div style={styles.answerKey}>Func: Scan info, Isolate/Remove infected files. Mech: Compare file to virus signature database. Update: To identify latest viruses.</div>}
    </div>

    {/* Q5: Firewall */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: Firewall</h3>
        <StarButton questionId="c5q5" />
      </div>
      <p><b>Function of firewall:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q5_func', e.target.value)} value={userAnswers.c5q5_func || ''}/>
      <p style={{marginTop: '10px'}}><b>Mechanism:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q5_mech', e.target.value)} value={userAnswers.c5q5_mech || ''}/>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Type</th><th style={styles.th}>Location</th><th style={styles.th}>Advantage</th><th style={styles.th}>Disadvantage</th></tr></thead>
        <tbody>
          <tr>
            <td>Software</td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q5_soft_loc', e.target.value)} value={userAnswers.c5q5_soft_loc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q5_soft_adv', e.target.value)} value={userAnswers.c5q5_soft_adv || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q5_soft_dis', e.target.value)} value={userAnswers.c5q5_soft_dis || ''}/></td>
          </tr>
          <tr>
            <td>Hardware</td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q5_hard_loc', e.target.value)} value={userAnswers.c5q5_hard_loc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q5_hard_adv', e.target.value)} value={userAnswers.c5q5_hard_adv || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q5_hard_dis', e.target.value)} value={userAnswers.c5q5_hard_dis || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          Func: Filter packets, block malicious data/access. Mech: Check IP/Port against rules.<br/>
          Software: In OS. Adv: Cheap/Easy. Dis: Protects 1 device only.<br/>
          Hardware: Btn Router & Modem. Adv: Efficient/Stable. Dis: Expensive.
        </div>
      )}
    </div>

    {/* Q6: Access Control */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: Access Control</h3>
        <StarButton questionId="c5q6" />
      </div>
      <p><b>Definition:</b></p>
      <input style={styles.input} onChange={(e) => onChange('c5q6_def', e.target.value)} value={userAnswers.c5q6_def || ''}/>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '10px'}}>
        <div><p><b>Authentication</b></p><textarea style={styles.input} rows="3" onChange={(e) => onChange('c5q6_auth', e.target.value)} value={userAnswers.c5q6_auth || ''}/></div>
        <div><p><b>Authorization</b></p><textarea style={styles.input} rows="3" onChange={(e) => onChange('c5q6_author', e.target.value)} value={userAnswers.c5q6_author || ''}/></div>
        <div><p><b>Accounting</b></p><textarea style={styles.input} rows="3" onChange={(e) => onChange('c5q6_acc', e.target.value)} value={userAnswers.c5q6_acc || ''}/></div>
      </div>
      {showAnswers && <div style={styles.answerKey}>Def: Restrict log in/authorize rights.<br/>Auth: Verify identity. Author: Grant rights. Acc: Monitor records.</div>}
    </div>

    {/* Q7: VPN */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7: VPN (Virtual Private Network)</h3>
        <StarButton questionId="c5q7" />
      </div>
      <p><b>Mechanism:</b></p>
      <input style={styles.input} onChange={(e) => onChange('c5q7_mech', e.target.value)} value={userAnswers.c5q7_mech || ''}/>
      <p style={{marginTop: '10px'}}><b>Protocol (and usage):</b></p>
      <input style={styles.input} onChange={(e) => onChange('c5q7_proto', e.target.value)} value={userAnswers.c5q7_proto || ''}/>
      
      <p style={{marginTop: '10px'}}><b>3 Functions:</b></p>
      <ul style={{listStyle: 'none', padding: 0}}>
        <li>1. <input style={styles.input} placeholder="" onChange={(e) => onChange('c5q7_f1', e.target.value)} value={userAnswers.c5q7_f1 || ''}/></li>
        <li style={{marginTop: '5px'}}>2. <input style={styles.input} placeholder="" onChange={(e) => onChange('c5q7_f2', e.target.value)} value={userAnswers.c5q7_f2 || ''}/></li>
        <li style={{marginTop: '5px'}}>3. <input style={styles.input} placeholder="" onChange={(e) => onChange('c5q7_f3', e.target.value)} value={userAnswers.c5q7_f3 || ''}/></li>
      </ul>

      <p style={{marginTop: '10px'}}><b>Applications:</b></p>
      <div style={{display: 'flex', gap: '10px'}}>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('c5q7_app1', e.target.value)} value={userAnswers.c5q7_app1 || ''}/>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('c5q7_app2', e.target.value)} value={userAnswers.c5q7_app2 || ''}/>
      </div>
      
      <div style={{display: 'flex', gap: '15px', marginTop: '10px'}}>
        <div style={{flex: 1}}><p><b>Advantage:</b></p><input style={styles.input} onChange={(e) => onChange('c5q7_adv', e.target.value)} value={userAnswers.c5q7_adv || ''}/></div>
        <div style={{flex: 1}}><p><b>Disadvantage:</b></p><input style={styles.input} onChange={(e) => onChange('c5q7_dis', e.target.value)} value={userAnswers.c5q7_dis || ''}/></div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Mech: Tunnel between user/server. Proto: IPSec (Encrypt packets).<br/>
          Func: Encrypt data, Hide IP (Location), Hide History from ISP.<br/>
          Apps: Intranet across branches, Remote Access (WAN via VPN).<br/>
          Adv: Security. Dis: Slower speed.
        </div>
      )}
    </div>

    {/* Q8: Wi-Fi Security */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8: Wi-Fi Security</h3>
        <StarButton questionId="c5q8" />
      </div>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Protocol</th><th style={styles.th}>Attribute / Note</th></tr></thead>
        <tbody>
          <tr><td>WEP</td><td><input style={styles.input} onChange={(e) => onChange('c5q8_wep', e.target.value)} value={userAnswers.c5q8_wep || ''}/></td></tr>
          <tr><td>WPA</td><td><input style={styles.input} onChange={(e) => onChange('c5q8_wpa', e.target.value)} value={userAnswers.c5q8_wpa || ''}/></td></tr>
          <tr><td>WPA2</td><td><input style={styles.input} onChange={(e) => onChange('c5q8_wpa2', e.target.value)} value={userAnswers.c5q8_wpa2 || ''}/></td></tr>
        </tbody>
      </table>
      
      <p style={{marginTop: '15px'}}><b>Other Methods:</b></p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px'}}>
        <div><p><b>Hide SSID</b></p><textarea style={styles.input} rows="3" placeholder="Desc..." onChange={(e) => onChange('c5q8_ssid', e.target.value)} value={userAnswers.c5q8_ssid || ''}/></div>
        <div><p><b>MAC Filtering</b></p><textarea style={styles.input} rows="3" placeholder="Desc..." onChange={(e) => onChange('c5q8_mac', e.target.value)} value={userAnswers.c5q8_mac || ''}/></div>
        <div><p><b>Public WiFi</b></p><textarea style={styles.input} rows="3" placeholder="Recommendation..." onChange={(e) => onChange('c5q8_pub', e.target.value)} value={userAnswers.c5q8_pub || ''}/></div>
      </div>
      {showAnswers && <div style={styles.answerKey}>WEP: Cracked quickly. WPA: TKIP/Changing key. WPA2: Advanced. Hide SSID: Prevent unsolicited access. MAC Filter: Block unauth devices. Public WiFi: Use Mobile Net/VPN.</div>}
    </div>

    {/* Q9: Browser Settings */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q9: Browser Settings</h3>
        <StarButton questionId="c5q9" />
      </div>
      <p>1. <input style={{...styles.input, width: '80%'}} onChange={(e) => onChange('c5q9_s1', e.target.value)} value={userAnswers.c5q9_s1 || ''}/></p>
      <p style={{marginTop: '5px'}}>2. <input style={{...styles.input, width: '80%'}} onChange={(e) => onChange('c5q9_s2', e.target.value)} value={userAnswers.c5q9_s2 || ''}/></p>
      {showAnswers && <div style={styles.answerKey}>1. Disable pop-ups/redirects. 2. Enable auto-update (fix vulnerabilities).</div>}
    </div>

    {/* Q10: Privacy Threats */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q10: Privacy Threats</h3>
        <StarButton questionId="c5q10" />
      </div>
      
      <p><b>Eavesdropping:</b></p>
      <textarea style={styles.input} rows="2" placeholder="Mechanism & Why difficult to detect?" onChange={(e) => onChange('c5q10_eave', e.target.value)} value={userAnswers.c5q10_eave || ''}/>

      <p style={{marginTop: '15px'}}><b>Hacking:</b></p>
      <p>Meaning:</p>
      <input style={styles.input} onChange={(e) => onChange('c5q10_hack_mean', e.target.value)} value={userAnswers.c5q10_hack_mean || ''}/>
      <div style={{display: 'flex', gap: '10px', marginTop: '5px'}}>
        <div style={{flex: 1}}><p><b>Ent Conseq:</b></p><input style={styles.input} onChange={(e) => onChange('c5q10_hack_ent', e.target.value)} value={userAnswers.c5q10_hack_ent || ''}/></div>
        <div style={{flex: 1}}><p><b>Citizen Conseq:</b></p><input style={styles.input} onChange={(e) => onChange('c5q10_hack_cit', e.target.value)} value={userAnswers.c5q10_hack_cit || ''}/></div>
      </div>

      <p style={{marginTop: '15px'}}><b>Social Engineering:</b></p>
      <p>Meaning:</p>
      <input style={styles.input} onChange={(e) => onChange('c5q10_soc_mean', e.target.value)} value={userAnswers.c5q10_soc_mean || ''}/>
      <div style={{marginTop: '5px', padding: '10px', border: '1px solid #eee'}}>
        <p><b>Phishing:</b></p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('c5q10_phish_attr', e.target.value)} value={userAnswers.c5q10_phish_attr || ''}/>
        <input style={{...styles.input, marginTop: '5px'}} placeholder="" onChange={(e) => onChange('c5q10_phish_prev', e.target.value)} value={userAnswers.c5q10_phish_prev || ''}/>
      </div>
      
      {showAnswers && (
        <div style={styles.answerKey}>
          Eavesdropping: Unauth interception. Hard to detect (net normal).<br/>
          Hacking: Attack security/gain access. Ent (Rev loss/Reputation). Cit (Stolen info/Criminal Trans).<br/>
          Social Eng: Manipulate trust/greed. Phishing: Looks real, QR codes. Prev: Check digital cert.
        </div>
      )}
    </div>

    {/* Q11: Protect Online Privacy */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q11: Protecting Privacy (Anonymous/Proxy)</h3>
        <StarButton questionId="c5q11" />
      </div>
      
      <div style={{marginBottom: '15px'}}>
        <p><b>1. Clear Browsing History & Cookies</b></p>
        <p style={{fontSize: '0.85rem'}}>Mechanism:</p>
        <input style={styles.input} onChange={(e) => onChange('c5q11_cook_mech', e.target.value)} value={userAnswers.c5q11_cook_mech || ''}/>
        <p style={{fontSize: '0.85rem', marginTop: '5px'}}>3 Uses of Cookies:</p>
        <input style={styles.input} onChange={(e) => onChange('c5q11_cook_uses', e.target.value)} value={userAnswers.c5q11_cook_uses || ''}/>
        <div style={{display: 'flex', gap: '10px', marginTop: '5px'}}>
          <input style={styles.input} placeholder="Advantage" onChange={(e) => onChange('c5q11_cook_adv', e.target.value)} value={userAnswers.c5q11_cook_adv || ''}/>
          <input style={styles.input} placeholder="Disadvantage" onChange={(e) => onChange('c5q11_cook_dis', e.target.value)} value={userAnswers.c5q11_cook_dis || ''}/>
        </div>
        <input style={{...styles.input, marginTop: '5px'}} placeholder="Good Practice" onChange={(e) => onChange('c5q11_cook_prac', e.target.value)} value={userAnswers.c5q11_cook_prac || ''}/>
      </div>

      <div style={{marginBottom: '15px'}}>
        <p><b>2. Turn off Autofill Function</b></p>
        <div style={{display: 'flex', gap: '10px'}}>
            <input style={styles.input} placeholder="Mechanism" onChange={(e) => onChange('c5q11_fill_mech', e.target.value)} value={userAnswers.c5q11_fill_mech || ''}/>
            <input style={styles.input} placeholder="Good Practice" onChange={(e) => onChange('c5q11_fill_prac', e.target.value)} value={userAnswers.c5q11_fill_prac || ''}/>
        </div>
      </div>

      <div style={{marginBottom: '15px'}}>
        <p><b>3. Use Private Browsing</b></p>
        <input style={styles.input} placeholder="Mechanism" onChange={(e) => onChange('c5q11_priv_mech', e.target.value)} value={userAnswers.c5q11_priv_mech || ''}/>
      </div>

      <div style={{marginBottom: '15px'}}>
        <p><b>4. Proxy Server</b></p>
        <p style={{fontSize: '0.85rem'}}>3 Functions:</p>
        <input style={styles.input} onChange={(e) => onChange('c5q11_prox_func', e.target.value)} value={userAnswers.c5q11_prox_func || ''}/>
        <div style={{display: 'flex', gap: '10px', marginTop: '5px'}}>
          <input style={styles.input} placeholder="Advantage" onChange={(e) => onChange('c5q11_prox_adv', e.target.value)} value={userAnswers.c5q11_prox_adv || ''}/>
          <input style={styles.input} placeholder="Disadv (vs VPN)" onChange={(e) => onChange('c5q11_prox_dis', e.target.value)} value={userAnswers.c5q11_prox_dis || ''}/>
        </div>
        <input style={{...styles.input, marginTop: '5px'}} placeholder="Mechanism" onChange={(e) => onChange('c5q11_prox_mech', e.target.value)} value={userAnswers.c5q11_prox_mech || ''}/>
      </div>

      <div>
        <p><b>Use Suitable Password (Criteria):</b></p>
        <input style={styles.input} placeholder="e.g. Length..." onChange={(e) => onChange('c5q11_pass', e.target.value)} value={userAnswers.c5q11_pass || ''}/>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          Cookies: Mech (Store info on device). Uses (Pref, Login, Settings). Adv (User exp). Dis (Privacy). Prac (Clear on public PC).<br/>
          Autofill: Mech (Pass appears). Prac (Off on public/Private mode).<br/>
          Private: Mech (Deletes data on close).<br/>
          Proxy: Func (Intermediate, Filter, Cache). Adv (Hide IP). Dis (Not Encrypted). Mech (Server only sees Proxy IP).<br/>
          Password: Special char, larger than 8 chars, Upper/Lower case.
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

// --- PHYSICS COMPULSORY 4 CH 2: ELECTRIC CIRCUITS ---
const Phy_Comp_4_Ch2 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => {
  const questions = [
    { id: 1, correct: 'B', options: [{ text: '(1) only' }, { text: '(1), (2) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }] },
    { id: 2, correct: 'A', options: [{ text: '0V' }, { text: '6V' }, { text: '12V' }, { text: '18V' }] },
    { id: 3, correct: 'B', options: [{ text: 'r = 5Ω,  R = 20Ω' }, { text: 'r = 5Ω, R = 100Ω' }, { text: 'r = 20Ω, R = 5Ω' }, { text: 'r = 100Ω, R = 5Ω' }] },
    { id: 4, correct: 'C', options: [{ text: '1V' }, { text: '2V' }, { text: '3V' }, { text: '4V' }] },
    { id: 5, correct: 'A', options: [{ text: '-2V, 1V, 0V' }, { text: '-1V, 2V, 0V' }, { text: '0V, 3V, 1.5V' }, { text: '0V, 3V, 2V' }] },
    { id: 6, correct: 'A', options: [{ text: 'unchanged, unchanged' }, { text: 'doubled, halved' }, { text: 'unchanged, doubled' }, { text: 'doubled, unchanged' }] },
    { id: 7, correct: 'B', options: [{ text: 'The ammeter burns out.' }, { text: 'The reading of the ammeter becomes zero.' }, { text: 'The voltmeter burns out.' }, { text: 'The reading of the voltmeter becomes zero.' }] },
    { id: 8, correct: 'B', options: [{ text: 'The voltmeter has finite resistance.' }, { text: 'The battery has internal resistance.' }, { text: 'The resistance of the bulb is very large.' }, { text: 'There is a voltage drop across the bulb.' }] },
    { id: 9, correct: 'A', options: [{ text: '0V' }, { text: '1.8V' }, { text: '3V' }, { text: '4.5V' }] },
    { id: 10, correct: 'A', options: [{ text: '0V' }, { text: '1V' }, { text: '3V' }, { text: '6V' }] },
    { id: 11, correct: 'D', options: [{ img: true }, { img: true }, { img: true }, { img: true }] },
    { id: 12, correct: 'B', options: [{ text: '4V' }, { text: '6V' }, { text: '8V' }, { text: '12V' }] },
    { id: 13, correct: 'C', options: [{ text: 'R > R1 > R2' }, { text: 'R < R1 < R2' }, { text: 'R1 < R < R2' }, { text: 'R1 > R > R2' }] },
    { id: 14, correct: 'B', options: [{ img: true }, { img: true }, { img: true }, { img: true }] },
    { id: 15, correct: 'D', options: [{ text: '1:1' }, { text: '3:1' }, { text: '1:7' }, { text: '9:1' }] },
    { id: 16, correct: 'C', options: [{ text: '0.67Ω' }, { text: '0.8Ω' }, { text: '1Ω' }, { text: '1.44Ω' }] },
    { id: 17, correct: 'C', options: [{ text: '6V' }, { text: '2V' }, { text: '-2V' }, { text: '-6V' }] },
    { id: 18, correct: 'A', options: [{ text: '0.12V' }, { text: '0.48V' }, { text: '0.96A' }, { text: '1.44A' }] }
  ];

  const getAnswerStyle = (qId, option) => {
    if (!showAnswers) return {};
    const userAnswer = userAnswers[`phy4ch2q${qId}`];
    const isCorrect = userAnswer === questions[qId - 1].correct;
    if (userAnswer === option) {
      return isCorrect ? { backgroundColor: '#d1fae5', borderColor: '#10b981' } : { backgroundColor: '#fee2e2', borderColor: '#ef4444' };
    }
    if (!isCorrect && option === questions[qId - 1].correct) {
      return { backgroundColor: '#d1fae5', borderColor: '#10b981' };
    }
    return {};
  };

  return (
    <div>
      {questions.map(q => (
        <div key={q.id} style={styles.qSection}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
            <h3 style={styles.qTitle}>Q{q.id}{q.id === 18 && <span style={{marginLeft: '8px', color: '#f97316'}}>&#9733;</span>}</h3>
            <StarButton questionId={`phy4ch2q${q.id}`} />
          </div>
          
          {/* Question Image */}
          <img src={`${import.meta.env.BASE_URL}mcdata/PHY COMP 4 CH2/q/${q.id}.png`} style={{maxWidth: '100%', marginBottom: '15px'}} alt={`Question ${q.id}`} />
          
          {/* Multiple Choice Options */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px'}}>
            {['A', 'B', 'C', 'D'].map((option, idx) => (
              <label key={option} style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '2px solid #ddd', borderRadius: '4px', cursor: 'pointer', ...getAnswerStyle(q.id, option)}}>
                <input 
                  type="radio" 
                  name={`phy4ch2q${q.id}`}
                  value={option}
                  checked={userAnswers[`phy4ch2q${q.id}`] === option}
                  onChange={(e) => onChange(`phy4ch2q${q.id}`, e.target.value)}
                  disabled={showAnswers}
                />
                <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '8px'}}>
                  <span style={{fontWeight: 'bold', minWidth: '20px'}}>{option}.</span>
                  {q.options[idx].text ? (
                    <span>{q.options[idx].text}</span>
                  ) : (
                    <img src={`${import.meta.env.BASE_URL}mcdata/PHY COMP 4 CH2/c/${q.id}${option.toLowerCase()}.png`} style={{maxWidth: '150px', width: '100%'}} alt={`Option ${option}`} />
                  )}
                </div>
              </label>
            ))}
          </div>
          
          {/* Solution */}
          {showAnswers && (
            <div style={styles.answerKey}>
              <p><b>Solution:</b></p>
              <img src={`${import.meta.env.BASE_URL}mcdata/PHY COMP 4 CH2/s/${q.id}.png`} style={{maxWidth: '100%'}} alt={`Solution ${q.id}`} />
            </div>
          )}
        </div>
      ))}
      
      <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
        <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
      </div>
    </div>
  );
};

// --- PHYSICS COMPULSORY 4 CH 3 ---
const Phy_Comp_4_Ch3 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => {
  const questions = [
    { id: 1, correct: 'A', options: [{ text: '100V' }, { text: '142V' }, { text: '200V' }, { text: '283V' }] },
    { id: 2, correct: 'B', options: [{ text: '(1) only' }, { text: '(2) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }] },
    { id: 3, correct: 'C', options: [{ text: 'The brightness of each string will remain unchanged because the voltage across each string does not change.' }, { text: 'The brightness of each string will remain unchanged because the resistance of each string does not change.' }, { text: 'Each string will become brighter because the voltage across each string increases.' }, { text: 'Each string will become dimmer because the total resistance of the strings decreases.' }] },
    { id: 4, correct: 'B', options: [{ text: 'kitchen' }, { text: 'bathroom' }, { text: 'bedroom' }, { text: 'dining room' }] },
    { id: 5, correct: 'D', options: [{ text: 'Both statements 1 and 2 are correct and statement 2 is a correct explanation for statement 1.' }, { text: 'Both statements 1 and 2 are correct but statement 2 is not a correct explanation for statement 1.' }, { text: 'Statement 1 is correct and statement 2 is incorrect.' }, { text: 'Statement 1 is incorrect and statement 2 is correct.' }] },
    { id: 6, correct: 'C', options: [{ text: '(1), (2) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }, { text: '(1), (2) and (3)' }] },
    { id: 7, correct: 'D', options: [{ text: '(1), (2) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }, { text: '(1), (2) and (3)' }] },
    { id: 8, correct: 'C', options: [{ text: '(1), (2) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }, { text: '(1), (2) and (3)' }] },
    { id: 9, correct: 'B', options: [{ text: '(1) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }, { text: '(1), (2) and (3)' }] },
    { id: 10, correct: 'A', options: [{ text: '(1), (2) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }, { text: '(1), (2) and (3)' }] },
    { id: 11, correct: 'C', options: [{ text: '(1) only' }, { text: '(3) only' }, { text: '(1), (3) only' }, { text: '(1), (2) and (3)' }] },
    { id: 12, correct: 'D', options: [{ text: '0.0375 Hz' }, { text: '26.7 Hz' }, { text: '53.3 Hz' }, { text: '168 Hz' }] },
    { id: 13, correct: 'D', options: [{ text: '(1), (2) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }, { text: '(1), (2) and (3)' }] },
    { id: 14, correct: 'C', options: [{ img: true }, { img: true }, { img: true }, { img: true }] },
    { id: 15, correct: 'B', options: [{ img: true }, { img: true }, { img: true }, { img: true }] },
    { id: 16, correct: 'C', options: [{ text: '(1) only' }, { text: '(2) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }] },
    { id: 17, correct: 'A', options: [{ text: 'L2 only' }, { text: 'L3 only' }, { text: 'L2 and L3 only' }, { text: 'none of them' }] },
    { id: 18, correct: 'A', options: [{ text: '(1) only' }, { text: '(2) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }] },
    { id: 19, correct: 'C', options: [{ text: '(1) only' }, { text: '(2) only' }, { text: '(1), (2) only' }, { text: '(2), (3) only' }] },
    { id: 20, correct: 'C', options: [{ text: '(1), (2) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }, { text: '(1), (2) and (3)' }] },
    { id: 21, correct: 'D', options: [{ text: 'The switch S has been damaged.' }, { text: 'The filament of bulb L has been burnt out and becomes an open circuit.' }, { text: 'There is a short circuit between a and d.' }, { text: 'There is an open circuit between c and d.' }] }
  ];

  const getAnswerStyle = (qId, option) => {
    if (!showAnswers) return {};
    const userAnswer = userAnswers[`phy4ch3q${qId}`];
    const isCorrect = userAnswer === questions[qId - 1].correct;
    if (userAnswer === option) {
      return isCorrect ? { backgroundColor: '#d1fae5', borderColor: '#10b981' } : { backgroundColor: '#fee2e2', borderColor: '#ef4444' };
    }
    if (!isCorrect && option === questions[qId - 1].correct) {
      return { backgroundColor: '#d1fae5', borderColor: '#10b981' };
    }
    return {};
  };

  return (
    <div>
      {questions.map(q => (
        <div key={q.id} style={styles.qSection}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
            <h3 style={styles.qTitle}>Q{q.id}</h3>
            <StarButton questionId={`phy4ch3q${q.id}`} />
          </div>
          
          {/* Question Image */}
          <img src={`${import.meta.env.BASE_URL}mcdata/PHY COMP 4 CH3/q/${q.id}.png`} style={{maxWidth: '100%', marginBottom: '15px'}} alt={`Question ${q.id}`} />
          
          {/* Multiple Choice Options */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px'}}>
            {['A', 'B', 'C', 'D'].map((option, idx) => (
              <label key={option} style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '2px solid #ddd', borderRadius: '4px', cursor: 'pointer', ...getAnswerStyle(q.id, option)}}>
                <input 
                  type="radio" 
                  name={`phy4ch3q${q.id}`}
                  value={option}
                  checked={userAnswers[`phy4ch3q${q.id}`] === option}
                  onChange={(e) => onChange(`phy4ch3q${q.id}`, e.target.value)}
                  disabled={showAnswers}
                />
                <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '8px'}}>
                  <span style={{fontWeight: 'bold', minWidth: '20px'}}>{option}.</span>
                  {q.options[idx].text ? (
                    <span>{q.options[idx].text}</span>
                  ) : (
                    <img src={`${import.meta.env.BASE_URL}mcdata/PHY COMP 4 CH3/c/${q.id}${option.toLowerCase()}.png`} style={{maxWidth: '150px', width: '100%'}} alt={`Option ${option}`} />
                  )}
                </div>
              </label>
            ))}
          </div>
          
          {/* Solution */}
          {showAnswers && (
            <div style={styles.answerKey}>
              <p><b>Solution:</b></p>
              <img src={`${import.meta.env.BASE_URL}mcdata/PHY COMP 4 CH3/s/${q.id}.png`} style={{maxWidth: '100%'}} alt={`Solution ${q.id}`} />
            </div>
          )}
        </div>
      ))}
      
      <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
        <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
      </div>
    </div>
  );
};

// --- PHYSICS ELECTIVE 2 CH 1 ---
const Phy_E_2_Ch1 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Rutherford's Model */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Rutherford's Model</h3>
        <StarButton questionId="e2q1" />
      </div>
      <p>What does Rutherford's model propose? (State 3 main propositions)</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <textarea style={styles.input} rows="2" placeholder="Proposition 1: " onChange={(e) => onChange('e2q1_p1', e.target.value)} value={userAnswers.e2q1_p1 || ''}/>
        <textarea style={styles.input} rows="2" placeholder="Proposition 2: " onChange={(e) => onChange('e2q1_p2', e.target.value)} value={userAnswers.e2q1_p2 || ''}/>
        <textarea style={styles.input} rows="2" placeholder="Proposition 3: " onChange={(e) => onChange('e2q1_p3', e.target.value)} value={userAnswers.e2q1_p3 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          1. Most of the space inside an atom is empty space<br/>
          2. All the positive charge and most of the mass are concentrated at the nucleus<br/>
          3. The electron orbit around the nucleus where the electric force provides the centripetal force
        </div>
      )}
    </div>

    {/* Q2: Scattering Experiment */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Scattering Experiment</h3>
        <StarButton questionId="e2q2" />
      </div>
      
      <p><b>Purpose of the experiment:</b></p>
      <input style={styles.input} onChange={(e) => onChange('e2q2_purpose', e.target.value)} value={userAnswers.e2q2_purpose || ''} placeholder="Purpose..."/>
      
      <p style={{marginTop: '15px'}}><b>Results (State 2 key observations):</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input style={styles.input} placeholder="Result 1: " onChange={(e) => onChange('e2q2_r1', e.target.value)} value={userAnswers.e2q2_r1 || ''}/>
        <input style={styles.input} placeholder="Result 2: " onChange={(e) => onChange('e2q2_r2', e.target.value)} value={userAnswers.e2q2_r2 || ''}/>
      </div>

      <p style={{marginTop: '15px'}}><b>How does Rutherford's model explain the results?</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <textarea style={styles.input} rows="2" placeholder="Explanation 1: " onChange={(e) => onChange('e2q2_exp1', e.target.value)} value={userAnswers.e2q2_exp1 || ''}/>
        <textarea style={styles.input} rows="2" placeholder="Explanation 2: " onChange={(e) => onChange('e2q2_exp2', e.target.value)} value={userAnswers.e2q2_exp2 || ''}/>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Purpose:</b> To study the scattering of alpha particles by thin metal foil<br/>
          <b>Results:</b><br/>
          1. Nearly all alpha particles pass straight through the foil<br/>
          2. A few number of alpha particles were deflected or bounced back<br/>
          <b>Explanation:</b><br/>
          - Most of the space inside an atom is empty space explains nearly all alpha particles pass straight through the foil<br/>
          - The repulsive electric force deflects the particle, explained by electric force between electron and nucleus
        </div>
      )}
    </div>

    {/* Q3: Limitations of Rutherford's Model */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Limitations of Rutherford's Model</h3>
        <StarButton questionId="e2q3" />
      </div>
      
      <p><b>Limitation 1: Collapse of Atom</b></p>
      <p>State the prediction based on the model:</p>
      <textarea style={styles.input} rows="3" placeholder="Prediction: " onChange={(e) => onChange('e2q3_l1_pred', e.target.value)} value={userAnswers.e2q3_l1_pred || ''}/>
      <p style={{marginTop: '10px'}}>How does it contradict the fact?</p>
      <input style={styles.input} placeholder="Fact: " onChange={(e) => onChange('e2q3_l1_fact', e.target.value)} value={userAnswers.e2q3_l1_fact || ''}/>

      <p style={{marginTop: '20px'}}><b>Limitation 2: Emission of EM Waves</b></p>
      <p>State the prediction based on the model:</p>
      <textarea style={styles.input} rows="3" placeholder="Prediction: " onChange={(e) => onChange('e2q3_l2_pred', e.target.value)} value={userAnswers.e2q3_l2_pred || ''}/>
      <p style={{marginTop: '10px'}}>How does it contradict the fact?</p>
      <input style={styles.input} placeholder="Fact: " onChange={(e) => onChange('e2q3_l2_fact', e.target.value)} value={userAnswers.e2q3_l2_fact || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Limitation 1 - Collapse of Atom:</b><br/>
          <b>Prediction:</b> Since the electron orbits around the nucleus, thus there is a centripetal acceleration and the electron will emit EM waves to lose energy. As a result, the electron spiral inwards to crash into the nucleus, making the atom unstable and collapse.<br/>
          <b>Fact:</b> Atoms do not collapse.<br/>
          <br/>
          <b>Limitation 2 - Emission of EM Waves:</b><br/>
          <b>Prediction:</b> Electrons should emit EM waves with a continuous range of frequency.<br/>
          <b>Fact:</b> Atoms emit EM waves of discrete frequency only.
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

// --- PHYSICS ELECTIVE 3 CH 1 ---
const Phy_E_3_Ch1 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Efficiency */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Efficiency</h3>
        <StarButton questionId="e3c1q1" />
      </div>
      <p>Give the formula of efficiency:</p>
      <input style={styles.input} placeholder="Formula..." onChange={(e) => onChange('e3q1_form', e.target.value)} value={userAnswers.e3q1_form || ''}/>
      {showAnswers && <div style={styles.answerKey}>Power output / Power input</div>}
    </div>

    {/* Q2: Electron Transition */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Lighting - Emission & Electron Transition</h3>
        <StarButton questionId="e3c1q2" />
      </div>
      <p>Describe the process of electron transition:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input style={styles.input} placeholder="Step 1: When electron..." onChange={(e) => onChange('e3q2_s1', e.target.value)} value={userAnswers.e3q2_s1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 2: When atom is..." onChange={(e) => onChange('e3q2_s2', e.target.value)} value={userAnswers.e3q2_s2 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 3: This releases..." onChange={(e) => onChange('e3q2_s3', e.target.value)} value={userAnswers.e3q2_s3 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          1. When electron absorbs a specific amount of energy, it can be excited to a higher energy level.<br/>
          2. When atom is excited, it becomes unstable and eventually moves to a lower energy level.<br/>
          3. This releases energy in form of EM waves.
        </div>
      )}
    </div>

    {/* Q3: Incandescent Lamps */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Lighting - Incandescent Lamps</h3>
        <StarButton questionId="e3c1q3" />
      </div>
      <p><b>Mechanism:</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <input style={styles.input} placeholder="Step 1" onChange={(e) => onChange('e3q3_mech1', e.target.value)} value={userAnswers.e3q3_mech1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 2" onChange={(e) => onChange('e3q3_mech2', e.target.value)} value={userAnswers.e3q3_mech2 || ''}/>
      </div>

      <p><b>Efficiency:</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <textarea style={styles.input} rows="2" placeholder="Emission details..." onChange={(e) => onChange('e3q3_eff1', e.target.value)} value={userAnswers.e3q3_eff1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Conclusion on efficiency" onChange={(e) => onChange('e3q3_eff2', e.target.value)} value={userAnswers.e3q3_eff2 || ''}/>
      </div>

      <p><b>Advanced Version:</b></p>
      <input style={{...styles.input, marginBottom: '10px'}} placeholder="Name of advanced version" onChange={(e) => onChange('e3q3_adv_name', e.target.value)} value={userAnswers.e3q3_adv_name || ''}/>
      
      <p>Mechanism of advanced version:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <textarea style={styles.input} rows="2" placeholder="Construction..." onChange={(e) => onChange('e3q3_adv_m1', e.target.value)} value={userAnswers.e3q3_adv_m1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Result" onChange={(e) => onChange('e3q3_adv_m2', e.target.value)} value={userAnswers.e3q3_adv_m2 || ''}/>
      </div>
      
      <p>Caution:</p>
      <input style={styles.input} onChange={(e) => onChange('e3q3_caution', e.target.value)} value={userAnswers.e3q3_caution || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Mech:</b> Electric current flows through filament and heats it to high temp thus results in electron transitions in filament.<br/>
          <b>Eff:</b> Only 5-20% is visible light, most is IR (heat) thus Low end-use energy efficiency.<br/>
          <b>Advanced:</b> Halogen lamps.<br/>
          <b>Adv Mech:</b> Incandescent lamps that contain halogen gas, longer lifespan & higher temp thus emit more visible light & slightly more efficient.<br/>
          <b>Caution:</b> UV radiation produced, UV filter should be fitted.
        </div>
      )}
    </div>

    {/* Q4: Gas Discharge Lamps */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Lighting - Gas Discharge Lamps</h3>
        <StarButton questionId="e3c1q4" />
      </div>
      <p>General Mechanism:</p>
      <input style={styles.input} onChange={(e) => onChange('e3q4_gen', e.target.value)} value={userAnswers.e3q4_gen || ''}/>
      
      <p style={{marginTop: '15px'}}><b>Fluorescent Tube Lamp (FTL) Mechanism:</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <textarea style={styles.input} rows="2" placeholder="Step 1: Electrode..." onChange={(e) => onChange('e3q4_ftl1', e.target.value)} value={userAnswers.e3q4_ftl1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 2: Transition..." onChange={(e) => onChange('e3q4_ftl2', e.target.value)} value={userAnswers.e3q4_ftl2 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <textarea style={styles.input} rows="2" placeholder="Step 3: Fluorescence..." onChange={(e) => onChange('e3q4_ftl3', e.target.value)} value={userAnswers.e3q4_ftl3 || ''}/>
      </div>

      <p style={{marginTop: '15px'}}>End-use Efficiency: <input style={{...styles.input, width: '100px', display: 'inline-block'}} onChange={(e) => onChange('e3q4_eff', e.target.value)} value={userAnswers.e3q4_eff || ''}/></p>
      
      <p style={{marginTop: '15px'}}>Mechanism of CFL:</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3q4_cfl', e.target.value)} value={userAnswers.e3q4_cfl || ''}/>

      <p style={{marginTop: '15px'}}>Mechanism of HID:</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3q4_hid', e.target.value)} value={userAnswers.e3q4_hid || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Gen:</b> Passing electron between 2 electrodes through a gas.<br/>
          <b>FTL:</b> -ve electrode emits electrons that ionize Mercury gas to form current that vaporizes mercury thus electron transition occurs in mercury atoms & emits UV thus Phosphor coating absorbs UV & emits visible light.<br/>
          <b>Eff:</b> High.<br/>
          <b>CFL:</b> Similar to FTL but tube is twisted & pins rearranged.<br/>
          <b>HID:</b> Similar to FTL but high intensity brightness (street lights).
        </div>
      )}
    </div>

    {/* Q5: LED */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: LED</h3>
        <StarButton questionId="e3c1q5" />
      </div>
      <p>Mechanism:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input style={styles.input} placeholder="Structure..." onChange={(e) => onChange('e3q5_m1', e.target.value)} value={userAnswers.e3q5_m1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Colour determination..." onChange={(e) => onChange('e3q5_m2', e.target.value)} value={userAnswers.e3q5_m2 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Has a layer of n-type and p-type semiconductors, only used with d.c. thus colour determined by fixed difference of energy level of p-layer and n-layer.
        </div>
      )}
    </div>

    {/* Q6: Comparison */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: Comparison of Lamps</h3>
        <StarButton questionId="e3c1q6" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr><th style={styles.th}>Lamp Type</th><th style={styles.th}>Advantage</th><th style={styles.th}>Disadvantage</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Incandescent</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('e3q6_inc_adv', e.target.value)} value={userAnswers.e3q6_inc_adv || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('e3q6_inc_dis', e.target.value)} value={userAnswers.e3q6_inc_dis || ''}/></td>
          </tr>
          <tr>
            <td><b>FTL & CFL</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('e3q6_ftl_adv', e.target.value)} value={userAnswers.e3q6_ftl_adv || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('e3q6_ftl_dis', e.target.value)} value={userAnswers.e3q6_ftl_dis || ''}/></td>
          </tr>
          <tr>
            <td><b>LED</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('e3q6_led_adv', e.target.value)} value={userAnswers.e3q6_led_adv || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('e3q6_led_dis', e.target.value)} value={userAnswers.e3q6_led_dis || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Inc:</b> Adv: Low price. Dis: Low efficiency.<br/>
          <b>FTL/CFL:</b> Adv: High efficiency, long life. Dis: Pollution (mercury).<br/>
          <b>LED:</b> Adv: Long life, no UV. Dis: Expensive, d.c. only.
        </div>
      )}
    </div>

    {/* Q7: Cooking */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7: Cooking without Fire</h3>
        <StarButton questionId="e3c1q7" />
      </div>
      
      <p><b>Electric Hotplate:</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '10px'}}>
        <input style={styles.input} placeholder="Step 1: Structure" onChange={(e) => onChange('e3q7_hp_m1', e.target.value)} value={userAnswers.e3q7_hp_m1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 2: Heating" onChange={(e) => onChange('e3q7_hp_m2', e.target.value)} value={userAnswers.e3q7_hp_m2 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 3: Transfer" onChange={(e) => onChange('e3q7_hp_m3', e.target.value)} value={userAnswers.e3q7_hp_m3 || ''}/>
      </div>
      <p>Energy Conversion:</p>
      <input style={styles.input} placeholder="" onChange={(e) => onChange('e3q7_hp_conv', e.target.value)} value={userAnswers.e3q7_hp_conv || ''}/>

      <hr style={{margin: '20px 0', border: 'none', borderTop: '1px solid #e2e8f0'}}/>

      <p><b>Induction Cooker:</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '10px'}}>
        <input style={styles.input} placeholder="Step 1: Structure" onChange={(e) => onChange('e3q7_ind_m1', e.target.value)} value={userAnswers.e3q7_ind_m1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 2: Operation" onChange={(e) => onChange('e3q7_ind_m2', e.target.value)} value={userAnswers.e3q7_ind_m2 || ''}/>
      </div>
      <p>Why not non-conducting container?</p>
      <input style={styles.input} onChange={(e) => onChange('e3q7_ind_why', e.target.value)} value={userAnswers.e3q7_ind_why || ''}/>

      <hr style={{margin: '20px 0', border: 'none', borderTop: '1px solid #e2e8f0'}}/>

      <p><b>Microwave Oven:</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '10px'}}>
        <input style={styles.input} placeholder="Step 1: Frequency..." onChange={(e) => onChange('e3q7_mw_m1', e.target.value)} value={userAnswers.e3q7_mw_m1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 2: Water molecules..." onChange={(e) => onChange('e3q7_mw_m2', e.target.value)} value={userAnswers.e3q7_mw_m2 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 3: Heating..." onChange={(e) => onChange('e3q7_mw_m3', e.target.value)} value={userAnswers.e3q7_mw_m3 || ''}/>
      </div>

      <p><b>Efficiency Arrangement (Highest to Lowest):</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3q7_rank', e.target.value)} value={userAnswers.e3q7_rank || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Hotplate:</b> Coil of resistance wire thus Current heats wire (heating effect) thus Heat transferred by conduction/radiation.<br/>
          <b>Conv:</b> Electrical thus Thermal (wire/cookware) thus Internal (food).<br/>
          <b>Induction:</b> Coil under plate thus a.c. creates changing flux & induces eddy current in cookware.<br/>
          <b>Non-conduct:</b> No eddy current can flow.<br/>
          <b>Microwave:</b> Exposed to 2.45GHz thus Oscillating E field flips water molecules thus KE spread through food.<br/>
          <b>Rank:</b> Induction cooker more efficient than Electric hotplate more efficient than Microwave oven.
        </div>
      )}
    </div>

    {/* Q8: Air Conditioning */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8: Air Conditioning</h3>
        <StarButton questionId="e3c1q8" />
      </div>
      <p>Mechanism of cooling indoor air:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
        <textarea style={styles.input} rows="2" placeholder="Step 1: Absorption" onChange={(e) => onChange('e3q8_m1', e.target.value)} value={userAnswers.e3q8_m1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <textarea style={styles.input} rows="2" placeholder="Step 2: Compression" onChange={(e) => onChange('e3q8_m2', e.target.value)} value={userAnswers.e3q8_m2 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <textarea style={styles.input} rows="2" placeholder="Step 3: Release" onChange={(e) => onChange('e3q8_m3', e.target.value)} value={userAnswers.e3q8_m3 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <textarea style={styles.input} rows="2" placeholder="Step 4: Expansion" onChange={(e) => onChange('e3q8_m4', e.target.value)} value={userAnswers.e3q8_m4 || ''}/>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div>
          <p>Formula of Cooling Capacity:</p>
          <input style={styles.input} onChange={(e) => onChange('e3q8_cap', e.target.value)} value={userAnswers.e3q8_cap || ''}/>
        </div>
        <div>
          <p>Formula of COP:</p>
          <input style={styles.input} onChange={(e) => onChange('e3q8_cop', e.target.value)} value={userAnswers.e3q8_cop || ''}/>
        </div>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Mech:</b> Cool refrigerant absorbs heat (evaporates) -&gt; Vapour compressed (pressure/temp UP) -&gt; Releases heat outside -&gt; Liquid expanded (temp DOWN).<br/>
          <b>Capacity:</b> Max heat removed / time.<br/>
          <b>COP:</b> Cooling capacity / Power input.
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

// --- ELECTIVE 3 CH 2: ENERGY EFFICIENCY IN BUILDINGS & VEHICLES ---
const Phy_E_3_Ch2 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Conduction & Radiation */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Energy Efficiency in Buildings - Conduction & Radiation</h3>
        <StarButton questionId="e3c2q1" />
      </div>
      
      <p style={{marginTop: '15px'}}><b>Formula of Rate of Energy Transferred by Conduction (without U-value):</b></p>
      <input style={styles.input} placeholder="Q/t = ..." onChange={(e) => onChange('e3ch2_q1_cond_no_u', e.target.value)} value={userAnswers.e3ch2_q1_cond_no_u || ''}/>
      
      <p style={{marginTop: '15px'}}><b>Formula of Rate of Energy Transferred by Conduction (with U-value):</b></p>
      <input style={styles.input} placeholder="Q/t = ..." onChange={(e) => onChange('e3ch2_q1_cond_u', e.target.value)} value={userAnswers.e3ch2_q1_cond_u || ''}/>

      <p style={{marginTop: '15px'}}><b>Formula of OTTV (Overall Thermal Transmittance Value):</b></p>
      <input style={styles.input} placeholder="OTTV = ..." onChange={(e) => onChange('e3ch2_q1_ottv', e.target.value)} value={userAnswers.e3ch2_q1_ottv || ''}/>

      <p style={{marginTop: '15px'}}><b>Methods to Reduce Energy Transfer by Conduction and Radiation:</b></p>
      
      <div style={{marginTop: '10px', marginBottom: '10px'}}>
        <p><b>Conduction:</b></p>
        <p>Example method:</p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch2_q1_cond_method', e.target.value)} value={userAnswers.e3ch2_q1_cond_method || ''}/>
      </div>

      <div style={{marginTop: '10px', marginBottom: '10px'}}>
        <p><b>Radiation:</b></p>
        <p>Method 1:</p>
        <input style={styles.input} onChange={(e) => onChange('e3ch2_q1_rad_m1', e.target.value)} value={userAnswers.e3ch2_q1_rad_m1 || ''}/>
        
        <p style={{marginTop: '10px'}}>Method 2: Solar Control Film</p>
        <p style={{fontSize: '0.9rem', color: '#64748b'}}>Advantages of solar control film (list 4):</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <input style={styles.input} placeholder="Adv 1" onChange={(e) => onChange('e3ch2_q1_scf_adv1', e.target.value)} value={userAnswers.e3ch2_q1_scf_adv1 || ''}/>
          <input style={styles.input} placeholder="Adv 2" onChange={(e) => onChange('e3ch2_q1_scf_adv2', e.target.value)} value={userAnswers.e3ch2_q1_scf_adv2 || ''}/>
          <input style={styles.input} placeholder="Adv 3" onChange={(e) => onChange('e3ch2_q1_scf_adv3', e.target.value)} value={userAnswers.e3ch2_q1_scf_adv3 || ''}/>
          <input style={styles.input} placeholder="Adv 4" onChange={(e) => onChange('e3ch2_q1_scf_adv4', e.target.value)} value={userAnswers.e3ch2_q1_scf_adv4 || ''}/>
        </div>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Conduction (no U):</b> Q/t = kA(T<sub>H</sub> - T<sub>C</sub>)/d<br/>
          <b>Conduction (with U):</b> Q/t = uA(T<sub>H</sub> - T<sub>C</sub>)<br/>
          <b>OTTV:</b> (Q<sub>c</sub>/t + Q<sub>s</sub>/t) / A<br/>
          <b>Cond Method:</b> Use layer with low thermal conductivity (e.g., double-glazed window)<br/>
          <b>Rad Method 1:</b> Use tinted glass, reflective glass, and low-e glass<br/>
          <b>SCF Advantages:</b> 1. Reflect IR and UV radiation, 2. Let through visible light, 3. Easy to install, 4. Cheap
        </div>
      )}
    </div>

    {/* Q2: Vehicles */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Vehicles - Energy Efficiency</h3>
        <StarButton questionId="e3c2q2" />
      </div>
      
      {/* Conventional Vehicles */}
      <div style={{marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #f1f5f9'}}>
        <h4 style={{fontSize: '1.1rem', fontWeight: '700', color: '#4338ca', marginBottom: '10px'}}>Conventional Fossil-Fuel Vehicle</h4>
        
        <p><b>Mechanism of propulsion:</b></p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch2_q2_conv_mech', e.target.value)} value={userAnswers.e3ch2_q2_conv_mech || ''}/>

        <p style={{marginTop: '15px'}}><b>Conservation of Energy for Propulsion:</b></p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch2_q2_conv_prop', e.target.value)} value={userAnswers.e3ch2_q2_conv_prop || ''}/>

        <p style={{marginTop: '15px'}}><b>Conservation of Energy for Braking:</b></p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch2_q2_conv_brake', e.target.value)} value={userAnswers.e3ch2_q2_conv_brake || ''}/>
      </div>

      {/* Electric Vehicle */}
      <div style={{marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #f1f5f9'}}>
        <h4 style={{fontSize: '1.1rem', fontWeight: '700', color: '#4338ca', marginBottom: '10px'}}>Electric Vehicle</h4>
        
        <p><b>Mechanism of propulsion:</b></p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch2_q2_ev_mech', e.target.value)} value={userAnswers.e3ch2_q2_ev_mech || ''}/>

        <p style={{marginTop: '15px'}}><b>Regenerative Braking System:</b></p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch2_q2_ev_regen', e.target.value)} value={userAnswers.e3ch2_q2_ev_regen || ''}/>

        <p style={{marginTop: '15px'}}><b>Property of Regenerative Braking System:</b></p>
        <textarea style={styles.input} rows="1" onChange={(e) => onChange('e3ch2_q2_ev_regen_prop', e.target.value)} value={userAnswers.e3ch2_q2_ev_regen_prop || ''}/>

        <p style={{marginTop: '15px'}}><b>Conservation of Energy for Propulsion:</b></p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch2_q2_ev_prop', e.target.value)} value={userAnswers.e3ch2_q2_ev_prop || ''}/>

        <p style={{marginTop: '15px'}}><b>Conservation of Energy for Braking:</b></p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch2_q2_ev_brake', e.target.value)} value={userAnswers.e3ch2_q2_ev_brake || ''}/>

        <p style={{marginTop: '15px'}}><b>Advantages of EV over conventional vehicle:</b></p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <input style={styles.input} placeholder="Adv 1" onChange={(e) => onChange('e3ch2_q2_ev_adv1', e.target.value)} value={userAnswers.e3ch2_q2_ev_adv1 || ''}/>
          <input style={styles.input} placeholder="Adv 2" onChange={(e) => onChange('e3ch2_q2_ev_adv2', e.target.value)} value={userAnswers.e3ch2_q2_ev_adv2 || ''}/>
          <input style={styles.input} placeholder="Adv 3" onChange={(e) => onChange('e3ch2_q2_ev_adv3', e.target.value)} value={userAnswers.e3ch2_q2_ev_adv3 || ''}/>
        </div>

        <p style={{marginTop: '15px'}}><b>Disadvantages of EV over conventional vehicle:</b></p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <input style={styles.input} placeholder="Dis 1" onChange={(e) => onChange('e3ch2_q2_ev_dis1', e.target.value)} value={userAnswers.e3ch2_q2_ev_dis1 || ''}/>
          <input style={styles.input} placeholder="Dis 2" onChange={(e) => onChange('e3ch2_q2_ev_dis2', e.target.value)} value={userAnswers.e3ch2_q2_ev_dis2 || ''}/>
          <input style={styles.input} placeholder="Dis 3" onChange={(e) => onChange('e3ch2_q2_ev_dis3', e.target.value)} value={userAnswers.e3ch2_q2_ev_dis3 || ''}/>
        </div>
      </div>

      {/* Hybrid Vehicle */}
      <div style={{marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #f1f5f9'}}>
        <h4 style={{fontSize: '1.1rem', fontWeight: '700', color: '#4338ca', marginBottom: '10px'}}>Hybrid Vehicle</h4>
        
        <p><b>Mechanism of hybrid vehicles:</b></p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch2_q2_hybrid_mech', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_mech || ''}/>

        <p style={{marginTop: '15px'}}><b>Energy Flow When Combustion Engine is Used for Propulsion:</b></p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch2_q2_hybrid_eng', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_eng || ''}/>

        <p style={{marginTop: '15px'}}><b>Energy Flow When Electric Motor is Used for Propulsion:</b></p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch2_q2_hybrid_motor', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_motor || ''}/>

        <p style={{marginTop: '15px'}}><b>Energy Flow in Regenerative Braking:</b></p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch2_q2_hybrid_brake', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_brake || ''}/>

        <p style={{marginTop: '15px'}}><b>Advantages of Hybrid Vehicles:</b></p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <input style={styles.input} placeholder="Adv 1" onChange={(e) => onChange('e3ch2_q2_hybrid_adv1', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_adv1 || ''}/>
          <input style={styles.input} placeholder="Adv 2" onChange={(e) => onChange('e3ch2_q2_hybrid_adv2', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_adv2 || ''}/>
          <input style={styles.input} placeholder="Adv 3" onChange={(e) => onChange('e3ch2_q2_hybrid_adv3', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_adv3 || ''}/>
        </div>

        <p style={{marginTop: '15px'}}><b>Disadvantages of Hybrid Vehicles:</b></p>
        <input style={styles.input} placeholder="Dis 1" onChange={(e) => onChange('e3ch2_q2_hybrid_dis', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_dis || ''}/>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Conventional Vehicle:</b><br/>
          - Mech: Use internal combustion engine, energy wasted as heat<br/>
          - Propulsion: Chemical energy (petrol) → Combustion engine → KE of vehicle<br/>
          - Braking: KE of vehicle → Frictional braking system → Internal and sound energy<br/><br/>

          <b>Electric Vehicle:</b><br/>
          - Mech: Electric motor for propulsion, no air pollutant<br/>
          - Regenerative: Motor acts as generator when braking to reduce energy waste<br/>
          - Regen Property: Not effective at low speed<br/>
          - Propulsion: Chemical energy (battery) → Battery → Electrical energy → Electric motor → KE of vehicle<br/>
          - Braking: KE of vehicle → Electric generator → Electrical energy → Battery → Chemical energy in battery<br/>
          - Advantages: 1. No air pollutant, 2. Quieter, 3. Higher end-use energy efficiency<br/>
          - Disadvantages: 1. Shorter range, 2. Requires long time to charge, 3. Expensive<br/><br/>

          <b>Hybrid Vehicle:</b><br/>
          - Mech: Combines fossil-fuel and electric vehicle with both frictional and regenerative braking<br/>
          - Combustion: Petrol → Combustion engine → KE of car<br/>
          - Electric: Battery → Motor → KE of car<br/>
          - Braking: KE of car → Generator → Battery<br/>
          - Advantages: 1. Quieter, 2. Higher end-use energy efficiency, 3. Produce less greenhouse gas<br/>
          - Disadvantages: More expensive
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

// --- ELECTIVE 3 CH 3: RENEWABLE ENERGY ---
const Phy_E_3_Ch3 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Introduction */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Introduction to Renewable Energy</h3>
        <StarButton questionId="e3c3q1" />
      </div>
      <p>Definition of renewable energy:</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q1_def', e.target.value)} value={userAnswers.e3ch3_q1_def || ''}/>
      {showAnswers && <div style={styles.answerKey}>Energy that comes from natural resources that are replenished constantly.</div>}
    </div>

    {/* Q2: Nuclear Energy */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Nuclear Energy</h3>
        <StarButton questionId="e3c3q2" />
      </div>
      
      <p><b>Is nuclear energy renewable?</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q2_renewable', e.target.value)} value={userAnswers.e3ch3_q2_renewable || ''}/>

      <p style={{marginTop: '15px'}}><b>Definition of binding energy:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q2_be_def', e.target.value)} value={userAnswers.e3ch3_q2_be_def || ''}/>

      <p style={{marginTop: '15px'}}><b>Formula of binding energy (for E in J and Δm in kg):</b></p>
      <input style={styles.input} placeholder="E = ..." onChange={(e) => onChange('e3ch3_q2_be_formula_j', e.target.value)} value={userAnswers.e3ch3_q2_be_formula_j || ''}/>

      <p style={{marginTop: '15px'}}><b>Formula of binding energy (for E in MeV and Δm in u):</b></p>
      <input style={styles.input} placeholder="E = ..." onChange={(e) => onChange('e3ch3_q2_be_formula_mev', e.target.value)} value={userAnswers.e3ch3_q2_be_formula_mev || ''}/>
      <img src={`${import.meta.env.BASE_URL}images/BEG.jpg`} alt="description" style={{maxWidth: '100%', marginTop: '10px'}} />
      <p style={{marginTop: '15px'}}><b>How to study the stability of a nucleus:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q2_stability', e.target.value)} value={userAnswers.e3ch3_q2_stability || ''}/>

      <p style={{marginTop: '15px'}}><b>What is A?</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q2_A_def', e.target.value)} value={userAnswers.e3ch3_q2_A_def || ''}/>

      <p style={{marginTop: '15px'}}><b>What does higher E<sub>b</sub>/A mean?</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q2_higher_eb', e.target.value)} value={userAnswers.e3ch3_q2_higher_eb || ''}/>

      <p style={{marginTop: '15px'}}><b>What is the most stable nucleus?</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q2_most_stable', e.target.value)} value={userAnswers.e3ch3_q2_most_stable || ''}/>

      <p style={{marginTop: '15px'}}><b>Tendency of nuclear reactions:</b></p>
      <p style={{fontSize: '0.9rem', color: '#64748b'}}>For A &lt; 56:</p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q2_reaction_low', e.target.value)} value={userAnswers.e3ch3_q2_reaction_low || ''}/>
      <p style={{marginTop: '10px', fontSize: '0.9rem', color: '#64748b'}}>For A &gt; 56:</p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q2_reaction_high', e.target.value)} value={userAnswers.e3ch3_q2_reaction_high || ''}/>

      <p style={{marginTop: '15px'}}><b>Method to find binding energy of a nucleus from graph:</b></p>
      <input style={styles.input} placeholder="Eb = ..." onChange={(e) => onChange('e3ch3_q2_from_graph', e.target.value)} value={userAnswers.e3ch3_q2_from_graph || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Renewable:</b> No<br/>
          <b>BE Def:</b> Energy required to completely separate all nucleons of a nucleus<br/>
          <b>BE (J):</b> E = Δmc²<br/>
          <b>BE (MeV):</b> E = 931Δm<br/>
          <b>Stability:</b> Compare binding energy per nucleon (E<sub>b</sub>/A)<br/>
          <b>A:</b> Mass number<br/>
          <b>Higher E<sub>b</sub>/A:</b> The nucleus is more stable<br/>
          <b>Most Stable:</b> Fe-56<br/>
          <b>Reaction Tendency:</b> A &lt; 56: Tends to combine by fusion. A &gt; 56: Tends to split by fission<br/>
          <b>From Graph:</b> E<sub>b</sub> = (E<sub>b</sub>/A) × A
        </div>
      )}
    </div>

    {/* Q3: Pressurized Water Fission Reactor */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Pressurized Water Fission Reactor</h3>
        <StarButton questionId="e3c3q3" />
      </div>
      
      <p><b>Function of pressurized water fission reactor:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q3_function', e.target.value)} value={userAnswers.e3ch3_q3_function || ''}/>

      <p style={{marginTop: '15px'}}><b>Energy flow:</b></p>
      <input style={styles.input} placeholder="Nuclear energy → ... → Electrical energy" onChange={(e) => onChange('e3ch3_q3_energy_flow', e.target.value)} value={userAnswers.e3ch3_q3_energy_flow || ''}/>

      <p style={{marginTop: '15px'}}><b>Function of key components:</b></p>
      <div style={{marginTop: '10px'}}>
        <p style={{fontWeight: '600', color: '#4338ca'}}>Moderator:</p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q3_moderator', e.target.value)} value={userAnswers.e3ch3_q3_moderator || ''}/>
      </div>
      
      <div style={{marginTop: '15px'}}>
        <p style={{fontWeight: '600', color: '#4338ca'}}>Control rod:</p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q3_control_rod', e.target.value)} value={userAnswers.e3ch3_q3_control_rod || ''}/>
      </div>

      <div style={{marginTop: '15px'}}>
        <p style={{fontWeight: '600', color: '#4338ca'}}>Pressurized water:</p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q3_water', e.target.value)} value={userAnswers.e3ch3_q3_water || ''}/>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Function:</b> Use nuclear fission to generate electricity from nuclear energy<br/>
          <b>Energy Flow:</b> Nuclear energy → Internal energy of water → KE of turbine → Electrical energy<br/>
          <b>Moderator:</b> Slow down fast-moving neutrons produced in fission to maintain chain reaction<br/>
          <b>Control Rod:</b> Absorb electrons and control the rate of fission<br/>
          <b>Pressurized Water:</b> Slow down neutrons and absorb heat from reactor; pressurized to increase its boiling point
        </div>
      )}
    </div>

    {/* Q4: Wind Power */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Wind Power</h3>
        <StarButton questionId="e3c3q4" />
      </div>
      
      <p><b>Energy flow of wind turbine:</b></p>
      <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch3_q4_energy_flow', e.target.value)} value={userAnswers.e3ch3_q4_energy_flow || ''}/>

      <p style={{marginTop: '15px'}}><b>Formula of total kinetic energy of the air:</b></p>
      <input style={styles.input} placeholder="KE = ..." onChange={(e) => onChange('e3ch3_q4_ke_formula', e.target.value)} value={userAnswers.e3ch3_q4_ke_formula || ''}/>

      <p style={{marginTop: '15px'}}><b>Formula of maximum power of turbine:</b></p>
      <input style={styles.input} placeholder="P<sub>max</sub> = ..." onChange={(e) => onChange('e3ch3_q4_power_formula', e.target.value)} value={userAnswers.e3ch3_q4_power_formula || ''}/>

      <p style={{marginTop: '15px'}}><b>What happens when wind speed is too low?</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q4_low_wind', e.target.value)} value={userAnswers.e3ch3_q4_low_wind || ''}/>

      <p style={{marginTop: '15px'}}><b>What happens when wind speed is too high?</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q4_high_wind', e.target.value)} value={userAnswers.e3ch3_q4_high_wind || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Energy Flow:</b> KE of air → KE of rotor → Electrical energy<br/>
          <b>KE Formula:</b> (1/2)ρAtv³<br/>
          <b>Max Power:</b> P<sub>max</sub> = η(1/2)ρAv³ (where η is efficiency and A = πr²)<br/>
          <b>Low Wind:</b> Wind turbine may not function properly<br/>
          <b>High Wind:</b> Wind turbine is locked for safety reason
        </div>
      )}
    </div>

    {/* Q5: Hydroelectric Power */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: Hydroelectric Power</h3>
        <StarButton questionId="e3c3q5" />
      </div>
      
      <p><b>Energy flow of hydroelectric power:</b></p>
      <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch3_q5_energy_flow', e.target.value)} value={userAnswers.e3ch3_q5_energy_flow || ''}/>

      <p style={{marginTop: '15px'}}><b>Formula of maximum power:</b></p>
      <input style={styles.input} placeholder="P<sub>max</sub> = ..." onChange={(e) => onChange('e3ch3_q5_power_formula', e.target.value)} value={userAnswers.e3ch3_q5_power_formula || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Energy Flow:</b> GPE of water → KE of water → KE of turbine → Electrical energy<br/>
          <b>Max Power:</b> P<sub>max</sub> = ηmgh/t (where η is efficiency)
        </div>
      )}
    </div>

    {/* Q6: Solar Energy */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: Solar Energy</h3>
        <StarButton questionId="e3c3q6" />
      </div>
      
      <p><b>Meaning of Solar constant:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q6_solar_constant', e.target.value)} value={userAnswers.e3ch3_q6_solar_constant || ''}/>

      <p style={{marginTop: '15px'}}><b>Formula of total power received per unit area by solar cell:</b></p>
      <input style={styles.input} placeholder="P = ..." onChange={(e) => onChange('e3ch3_q6_power_formula', e.target.value)} value={userAnswers.e3ch3_q6_power_formula || ''}/>

      <p style={{marginTop: '15px'}}><b>Mechanism of solar cell (describe the process step by step):</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px'}}>
        <textarea style={styles.input} rows="2" placeholder="Step 1: Structure..." onChange={(e) => onChange('e3ch3_q6_mech_1', e.target.value)} value={userAnswers.e3ch3_q6_mech_1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <textarea style={styles.input} rows="2" placeholder="Step 2: Absorption and delocalization..." onChange={(e) => onChange('e3ch3_q6_mech_2', e.target.value)} value={userAnswers.e3ch3_q6_mech_2 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <textarea style={styles.input} rows="2" placeholder="Step 3: Movement under E field..." onChange={(e) => onChange('e3ch3_q6_mech_3', e.target.value)} value={userAnswers.e3ch3_q6_mech_3 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <textarea style={styles.input} rows="2" placeholder="Step 4: Current formation..." onChange={(e) => onChange('e3ch3_q6_mech_4', e.target.value)} value={userAnswers.e3ch3_q6_mech_4 || ''}/>
      </div>

      <p style={{marginTop: '15px'}}><b>Efficiency of solar cell:</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q6_efficiency', e.target.value)} value={userAnswers.e3ch3_q6_efficiency || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Solar Constant:</b> The total EM radiation radiated at normal incidence per unit area per unit time, at mean distance between Earth and Sun, measured outside Earth's atmosphere<br/>
          <b>Power Formula:</b> P = Solar constant × cos(x) (where x is angle between sunlight and normal)<br/>
          <b>Mechanism:</b><br/>
          1. Consists of p-type and n-type semiconductor with a PN junction in between<br/>
          2. Electrons are delocalized after absorbing sunlight and leave holes<br/>
          3. Under E field, free electrons move to n-side and holes move to p-side<br/>
          4. When appliance is connected, current flows from p-side to n-side<br/>
          <b>Efficiency:</b> 10 to 20%
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

// --- CHINESE 01: 出師表 ---
const Chinese_01 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => {
  // Helper function to determine input background color
  const getInputBgColor = (questionId, answerIndex) => {
    const answerId = `${questionId}_a${answerIndex}`;
    const userAnswer = userAnswers[answerId];
    
    // Only show colors when answers are checked
    if (!showAnswers) return '#ffffff';
    
    // Empty answer = red
    if (!userAnswer || userAnswer.trim() === '') {
      return '#fee2e2';
    }
    
    // Has answer = green
    return '#dcfce7';
  };

  return (
    <div>
      <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingBottom: '15px', borderBottom: '3px solid #dc2626'}}>第一部分：語譯</h3>

    {/* Q1 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1</h3>
        <StarButton questionId="ch01_q1" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 先帝創業未半，而「中道」「崩殂」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「中道」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q1', 1)}} onChange={(e) => onChange('ch01_q1_a1', e.target.value)} value={userAnswers.ch01_q1_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「崩殂」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q1', 2)}} onChange={(e) => onChange('ch01_q1_a2', e.target.value)} value={userAnswers.ch01_q1_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「中道」：半途<br/>
          「崩殂」：死
        </div>
      )}
    </div>

    {/* Q2 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2</h3>
        <StarButton questionId="ch01_q2" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 益州「疲弊」，此「誠」危急存亡之「秋」也</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「疲弊」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q2', 1)}} onChange={(e) => onChange('ch01_q2_a1', e.target.value)} value={userAnswers.ch01_q2_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「誠」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q2', 2)}} onChange={(e) => onChange('ch01_q2_a2', e.target.value)} value={userAnswers.ch01_q2_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「秋」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q2', 3)}} onChange={(e) => onChange('ch01_q2_a3', e.target.value)} value={userAnswers.ch01_q2_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「疲弊」：人力物力困乏<br/>
          「誠」：實在／的確<br/>
          「秋」：時刻／關頭
        </div>
      )}
    </div>

    {/* Q3 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3</h3>
        <StarButton questionId="ch01_q3" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「然」侍衛之臣，不「懈」於「內」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「然」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q3', 1)}} onChange={(e) => onChange('ch01_q3_a1', e.target.value)} value={userAnswers.ch01_q3_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「懈」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q3', 2)}} onChange={(e) => onChange('ch01_q3_a2', e.target.value)} value={userAnswers.ch01_q3_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「內」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q3', 3)}} onChange={(e) => onChange('ch01_q3_a3', e.target.value)} value={userAnswers.ch01_q3_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「然」：然而<br/>
          「懈」：鬆懈<br/>
          「內」：宮廷之內
        </div>
      )}
    </div>

    {/* Q4 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4</h3>
        <StarButton questionId="ch01_q4" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 忠志之士，「忘身」於「外」者</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「忘身」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q4', 1)}} onChange={(e) => onChange('ch01_q4_a1', e.target.value)} value={userAnswers.ch01_q4_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「外」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q4', 2)}} onChange={(e) => onChange('ch01_q4_a2', e.target.value)} value={userAnswers.ch01_q4_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「忘身」：捨身／奮不顧身<br/>
          「外」：朝廷之外／戰場上
        </div>
      )}
    </div>

    {/* Q5 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5</h3>
        <StarButton questionId="ch01_q5" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「蓋」「追」先帝之「殊遇」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「蓋」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q5', 1)}} onChange={(e) => onChange('ch01_q5_a1', e.target.value)} value={userAnswers.ch01_q5_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「追」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q5', 2)}} onChange={(e) => onChange('ch01_q5_a2', e.target.value)} value={userAnswers.ch01_q5_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「殊遇」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q5', 3)}} onChange={(e) => onChange('ch01_q5_a3', e.target.value)} value={userAnswers.ch01_q5_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「蓋」：原來是／因為<br/>
          「追」：追念<br/>
          「殊遇」：特殊的恩遇
        </div>
      )}
    </div>

    {/* Q6 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6</h3>
        <StarButton questionId="ch01_q6" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「誠」「宜」「開張聖聽」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「誠」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q6', 1)}} onChange={(e) => onChange('ch01_q6_a1', e.target.value)} value={userAnswers.ch01_q6_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「宜」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q6', 2)}} onChange={(e) => onChange('ch01_q6_a2', e.target.value)} value={userAnswers.ch01_q6_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「開張聖聽」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q6', 3)}} onChange={(e) => onChange('ch01_q6_a3', e.target.value)} value={userAnswers.ch01_q6_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「誠」：確實<br/>
          「宜」：應該<br/>
          「開張聖聽」：擴大聖明的聽聞（廣開言路）
        </div>
      )}
    </div>

    {/* Q7 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7</h3>
        <StarButton questionId="ch01_q7" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 以「光」先帝「遺德」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「光」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q7', 1)}} onChange={(e) => onChange('ch01_q7_a1', e.target.value)} value={userAnswers.ch01_q7_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「遺德」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q7', 2)}} onChange={(e) => onChange('ch01_q7_a2', e.target.value)} value={userAnswers.ch01_q7_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「光」：發揚光大<br/>
          「遺德」：遺留下來的美德
        </div>
      )}
    </div>

    {/* Q8 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8</h3>
        <StarButton questionId="ch01_q8" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「恢弘」志士之氣</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「恢弘」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q8', 1)}} onChange={(e) => onChange('ch01_q8_a1', e.target.value)} value={userAnswers.ch01_q8_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「恢弘」：擴大／發揚
        </div>
      )}
    </div>

    {/* Q9 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q9</h3>
        <StarButton questionId="ch01_q9" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 不宜「妄自菲薄」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「妄自菲薄」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q9', 1)}} onChange={(e) => onChange('ch01_q9_a1', e.target.value)} value={userAnswers.ch01_q9_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「妄自菲薄」：過分看輕自己
        </div>
      )}
    </div>

    {/* Q10 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q10</h3>
        <StarButton questionId="ch01_q10" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「引喻失義」，以「塞」忠諫之路也</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「引喻失義」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q10', 1)}} onChange={(e) => onChange('ch01_q10_a1', e.target.value)} value={userAnswers.ch01_q10_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「塞」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q10', 2)}} onChange={(e) => onChange('ch01_q10_a2', e.target.value)} value={userAnswers.ch01_q10_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「引喻失義」：引用比喻不恰當（說話不合義理）<br/>
          「塞」：堵塞
        </div>
      )}
    </div>

    {/* Q11 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q11</h3>
        <StarButton questionId="ch01_q11" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 宮中、府中，「俱」為一體</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「俱」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q11', 1)}} onChange={(e) => onChange('ch01_q11_a1', e.target.value)} value={userAnswers.ch01_q11_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「俱」：都／全
        </div>
      )}
    </div>

    {/* Q12 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q12</h3>
        <StarButton questionId="ch01_q12" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「陟罰臧否」，不宜「異同」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「陟罰臧否」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q12', 1)}} onChange={(e) => onChange('ch01_q12_a1', e.target.value)} value={userAnswers.ch01_q12_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「異同」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q12', 2)}} onChange={(e) => onChange('ch01_q12_a2', e.target.value)} value={userAnswers.ch01_q12_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「陟罰臧否」：升遷處罰、表揚批評（賞善罰惡）<br/>
          「異同」：不同（這裏指標準不同）
        </div>
      )}
    </div>

    {/* Q13 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q13</h3>
        <StarButton questionId="ch01_q13" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 若有「作姦」、「犯科」及為忠善者</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「作姦」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q13', 1)}} onChange={(e) => onChange('ch01_q13_a1', e.target.value)} value={userAnswers.ch01_q13_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「犯科」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q13', 2)}} onChange={(e) => onChange('ch01_q13_a2', e.target.value)} value={userAnswers.ch01_q13_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「作姦」：做壞事<br/>
          「犯科」：觸犯法律
        </div>
      )}
    </div>

    {/* Q14 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q14</h3>
        <StarButton questionId="ch01_q14" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 宜付「有司」，「論」其「刑賞」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「有司」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q14', 1)}} onChange={(e) => onChange('ch01_q14_a1', e.target.value)} value={userAnswers.ch01_q14_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「論」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q14', 2)}} onChange={(e) => onChange('ch01_q14_a2', e.target.value)} value={userAnswers.ch01_q14_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「刑賞」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q14', 3)}} onChange={(e) => onChange('ch01_q14_a3', e.target.value)} value={userAnswers.ch01_q14_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「有司」：主管的官吏<br/>
          「論」：判定<br/>
          「刑賞」：受罰或獲賞
        </div>
      )}
    </div>

    {/* Q15 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q15</h3>
        <StarButton questionId="ch01_q15" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 以「昭」陛下「平明」之治</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「昭」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q15', 1)}} onChange={(e) => onChange('ch01_q15_a1', e.target.value)} value={userAnswers.ch01_q15_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「平明」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q15', 2)}} onChange={(e) => onChange('ch01_q15_a2', e.target.value)} value={userAnswers.ch01_q15_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「昭」：顯示／彰顯<br/>
          「平明」：公正嚴明
        </div>
      )}
    </div>

    {/* Q16 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q16</h3>
        <StarButton questionId="ch01_q16" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 不宜「偏私」，使內外「異法」也</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「偏私」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q16', 1)}} onChange={(e) => onChange('ch01_q16_a1', e.target.value)} value={userAnswers.ch01_q16_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「異法」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q16', 2)}} onChange={(e) => onChange('ch01_q16_a2', e.target.value)} value={userAnswers.ch01_q16_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「偏私」：偏袒徇私<br/>
          「異法」：法規不同
        </div>
      )}
    </div>

    {/* Q17 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q17</h3>
        <StarButton questionId="ch01_q17" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 此皆「良實」，「志慮」「忠純」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「良實」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q17', 1)}} onChange={(e) => onChange('ch01_q17_a1', e.target.value)} value={userAnswers.ch01_q17_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「志慮」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q17', 2)}} onChange={(e) => onChange('ch01_q17_a2', e.target.value)} value={userAnswers.ch01_q17_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「忠純」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q17', 3)}} onChange={(e) => onChange('ch01_q17_a3', e.target.value)} value={userAnswers.ch01_q17_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「良實」：善良誠實的人<br/>
          「志慮」：志向思慮<br/>
          「忠純」：忠誠純正
        </div>
      )}
    </div>

    {/* Q18 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q18</h3>
        <StarButton questionId="ch01_q18" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 是以先帝「簡拔」以「遺」陛下</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「簡拔」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q18', 1)}} onChange={(e) => onChange('ch01_q18_a1', e.target.value)} value={userAnswers.ch01_q18_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「遺」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q18', 2)}} onChange={(e) => onChange('ch01_q18_a2', e.target.value)} value={userAnswers.ch01_q18_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「簡拔」：選拔<br/>
          「遺」：給予／留給
        </div>
      )}
    </div>

    {/* Q19 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q19</h3>
        <StarButton questionId="ch01_q19" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「悉」以「諮」之</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「悉」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q19', 1)}} onChange={(e) => onChange('ch01_q19_a1', e.target.value)} value={userAnswers.ch01_q19_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「諮」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q19', 2)}} onChange={(e) => onChange('ch01_q19_a2', e.target.value)} value={userAnswers.ch01_q19_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「悉」：全部<br/>
          「諮」：諮詢／商議
        </div>
      )}
    </div>

    {/* Q20 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q20</h3>
        <StarButton questionId="ch01_q20" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 必能「裨補」「闕漏」，有所「廣益」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「裨補」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q20_a1', e.target.value)} value={userAnswers.ch01_q20_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「闕漏」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q20_a2', e.target.value)} value={userAnswers.ch01_q20_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「廣益」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q20_a3', e.target.value)} value={userAnswers.ch01_q20_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「裨補」：彌補<br/>
          「闕漏」：缺失／遺漏<br/>
          「廣益」：廣泛的益處
        </div>
      )}
    </div>

    {/* Q21 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q21</h3>
        <StarButton questionId="ch01_q21" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 性行「淑均」，「曉暢」軍事</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「淑均」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q21_a1', e.target.value)} value={userAnswers.ch01_q21_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「曉暢」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q21_a2', e.target.value)} value={userAnswers.ch01_q21_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「淑均」：善良公正<br/>
          「曉暢」：通曉熟練
        </div>
      )}
    </div>

    {/* Q22 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q22</h3>
        <StarButton questionId="ch01_q22" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 是以「眾議」「舉」寵為「督」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「眾議」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q22', 1)}} onChange={(e) => onChange('ch01_q22_a1', e.target.value)} value={userAnswers.ch01_q22_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「舉」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q22', 2)}} onChange={(e) => onChange('ch01_q22_a2', e.target.value)} value={userAnswers.ch01_q22_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「督」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q22', 3)}} onChange={(e) => onChange('ch01_q22_a3', e.target.value)} value={userAnswers.ch01_q22_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「眾議」：大家商議<br/>
          「舉」：推舉<br/>
          「督」：都督（統帥）
        </div>
      )}
    </div>

    {/* Q23 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q23</h3>
        <StarButton questionId="ch01_q23" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 必能使「行陣」和睦，「優劣得所」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「行陣」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q23', 1)}} onChange={(e) => onChange('ch01_q23_a1', e.target.value)} value={userAnswers.ch01_q23_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「優劣得所」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q23', 2)}} onChange={(e) => onChange('ch01_q23_a2', e.target.value)} value={userAnswers.ch01_q23_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「行陣」：軍隊／行列<br/>
          「優劣得所」：才能高與低的人都得到適當安排
        </div>
      )}
    </div>

    {/* Q24 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q24</h3>
        <StarButton questionId="ch01_q24" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 此先漢所以「興隆」也</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「興隆」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q24', 1)}} onChange={(e) => onChange('ch01_q24_a1', e.target.value)} value={userAnswers.ch01_q24_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「興隆」：興盛
        </div>
      )}
    </div>

    {/* Q25 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q25</h3>
        <StarButton questionId="ch01_q25" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 此後漢所以「傾頹」也</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「傾頹」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q25', 1)}} onChange={(e) => onChange('ch01_q25_a1', e.target.value)} value={userAnswers.ch01_q25_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「傾頹」：傾覆衰敗
        </div>
      )}
    </div>

    {/* Q26 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q26</h3>
        <StarButton questionId="ch01_q26" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 未嘗不「歎息」「痛恨」於桓、靈也</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「歎息」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q26', 1)}} onChange={(e) => onChange('ch01_q26_a1', e.target.value)} value={userAnswers.ch01_q26_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「痛恨」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q26', 2)}} onChange={(e) => onChange('ch01_q26_a2', e.target.value)} value={userAnswers.ch01_q26_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「歎息」：感歎惋惜<br/>
          「痛恨」：痛心遺憾
        </div>
      )}
    </div>

    {/* Q27 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q27</h3>
        <StarButton questionId="ch01_q27" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 此「悉」「貞良」「死節」之臣</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「悉」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q27_a1', e.target.value)} value={userAnswers.ch01_q27_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「貞良」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q27_a2', e.target.value)} value={userAnswers.ch01_q27_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「死節」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q27_a3', e.target.value)} value={userAnswers.ch01_q27_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「悉」：全／都<br/>
          「貞良」：堅貞賢良<br/>
          「死節」：能夠為國盡節效死
        </div>
      )}
    </div>

    {/* Q28 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q28</h3>
        <StarButton questionId="ch01_q28" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 則漢室之「隆」，可「計日」而待也</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「隆」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q28', 1)}} onChange={(e) => onChange('ch01_q28_a1', e.target.value)} value={userAnswers.ch01_q28_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「計日」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q28', 2)}} onChange={(e) => onChange('ch01_q28_a2', e.target.value)} value={userAnswers.ch01_q28_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「隆」：興盛<br/>
          「計日」：數着日子（指日可待／時間不遠）
        </div>
      )}
    </div>

    {/* Q29 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q29</h3>
        <StarButton questionId="ch01_q29" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 臣本「布衣」，「躬」耕於南陽</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「布衣」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q29_a1', e.target.value)} value={userAnswers.ch01_q29_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「躬」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q29_a2', e.target.value)} value={userAnswers.ch01_q29_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「布衣」：平民（借代）<br/>
          「躬」：親自
        </div>
      )}
    </div>

    {/* Q30 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q30</h3>
        <StarButton questionId="ch01_q30" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「苟全」性命於亂世</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「苟全」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q30', 1)}} onChange={(e) => onChange('ch01_q30_a1', e.target.value)} value={userAnswers.ch01_q30_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「苟全」：苟且保全
        </div>
      )}
    </div>

    {/* Q31 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q31</h3>
        <StarButton questionId="ch01_q31" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 不求「聞達」於諸侯</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「聞達」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q31', 1)}} onChange={(e) => onChange('ch01_q31_a1', e.target.value)} value={userAnswers.ch01_q31_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「聞達」：顯達揚名
        </div>
      )}
    </div>

    {/* Q32 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q32</h3>
        <StarButton questionId="ch01_q32" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 先帝不以臣「卑鄙」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「卑鄙」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q32', 1)}} onChange={(e) => onChange('ch01_q32_a1', e.target.value)} value={userAnswers.ch01_q32_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「卑鄙」：身分低微，見識淺陋（古義）
        </div>
      )}
    </div>

    {/* Q33 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q33</h3>
        <StarButton questionId="ch01_q33" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「猥」自「枉屈」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「猥」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q33', 1)}} onChange={(e) => onChange('ch01_q33_a1', e.target.value)} value={userAnswers.ch01_q33_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「枉屈」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q33', 2)}} onChange={(e) => onChange('ch01_q33_a2', e.target.value)} value={userAnswers.ch01_q33_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「猥」：降低身分（謙詞）<br/>
          「枉屈」：委屈
        </div>
      )}
    </div>

    {/* Q34 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q34</h3>
        <StarButton questionId="ch01_q34" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 遂「許」先帝以「驅馳」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「許」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q34', 1)}} onChange={(e) => onChange('ch01_q34_a1', e.target.value)} value={userAnswers.ch01_q34_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「驅馳」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q34', 2)}} onChange={(e) => onChange('ch01_q34_a2', e.target.value)} value={userAnswers.ch01_q34_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「許」：答應<br/>
          「驅馳」：奔走效勞
        </div>
      )}
    </div>

    {/* Q35 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q35</h3>
        <StarButton questionId="ch01_q35" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 後「值」「傾覆」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「值」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q35', 1)}} onChange={(e) => onChange('ch01_q35_a1', e.target.value)} value={userAnswers.ch01_q35_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「傾覆」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q35', 2)}} onChange={(e) => onChange('ch01_q35_a2', e.target.value)} value={userAnswers.ch01_q35_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「值」：遇上<br/>
          「傾覆」：兵敗
        </div>
      )}
    </div>

    {/* Q36 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q36</h3>
        <StarButton questionId="ch01_q36" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「爾來」二十有一年矣</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「爾來」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q36', 1)}} onChange={(e) => onChange('ch01_q36_a1', e.target.value)} value={userAnswers.ch01_q36_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「爾來」：從那時以來
        </div>
      )}
    </div>

    {/* Q37 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q37</h3>
        <StarButton questionId="ch01_q37" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「夙夜」憂歎</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「夙夜」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q37', 1)}} onChange={(e) => onChange('ch01_q37_a1', e.target.value)} value={userAnswers.ch01_q37_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「夙夜」：早晚／日夜
        </div>
      )}
    </div>

    {/* Q38 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q38</h3>
        <StarButton questionId="ch01_q38" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 恐託付不「效」，以「傷」先帝之明</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「效」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q38', 1)}} onChange={(e) => onChange('ch01_q38_a1', e.target.value)} value={userAnswers.ch01_q38_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「傷」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q38', 2)}} onChange={(e) => onChange('ch01_q38_a2', e.target.value)} value={userAnswers.ch01_q38_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「效」：奏效／成功<br/>
          「傷」：損害
        </div>
      )}
    </div>

    {/* Q39 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q39</h3>
        <StarButton questionId="ch01_q39" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 故五月渡瀘，深入「不毛」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「不毛」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q39', 1)}} onChange={(e) => onChange('ch01_q39_a1', e.target.value)} value={userAnswers.ch01_q39_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「不毛」：不長草木（荒涼）的地方
        </div>
      )}
    </div>

    {/* Q40 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q40</h3>
        <StarButton questionId="ch01_q40" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「庶」「竭」「駑鈍」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「庶」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q40', 1)}} onChange={(e) => onChange('ch01_q40_a1', e.target.value)} value={userAnswers.ch01_q40_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「竭」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q40', 2)}} onChange={(e) => onChange('ch01_q40_a2', e.target.value)} value={userAnswers.ch01_q40_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「駑鈍」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q40', 3)}} onChange={(e) => onChange('ch01_q40_a3', e.target.value)} value={userAnswers.ch01_q40_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「庶」：希望<br/>
          「竭」：用盡<br/>
          「駑鈍」：低下的才能（謙詞）
        </div>
      )}
    </div>

    {/* Q41 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q41</h3>
        <StarButton questionId="ch01_q41" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「攘除」姦凶</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「攘除」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q41', 1)}} onChange={(e) => onChange('ch01_q41_a1', e.target.value)} value={userAnswers.ch01_q41_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「攘除」：剷除／排除
        </div>
      )}
    </div>

    {/* Q42 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q42</h3>
        <StarButton questionId="ch01_q42" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 至於「斟酌」「損益」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「斟酌」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q42', 1)}} onChange={(e) => onChange('ch01_q42_a1', e.target.value)} value={userAnswers.ch01_q42_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「損益」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q42', 2)}} onChange={(e) => onChange('ch01_q42_a2', e.target.value)} value={userAnswers.ch01_q42_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「斟酌」：反覆考慮<br/>
          「損益」：減少與增加（這裏指興利除弊）
        </div>
      )}
    </div>

    {/* Q43 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q43</h3>
        <StarButton questionId="ch01_q43" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 願陛下「託」臣以討賊興復之「效」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「託」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q43', 1)}} onChange={(e) => onChange('ch01_q43_a1', e.target.value)} value={userAnswers.ch01_q43_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「效」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q43', 2)}} onChange={(e) => onChange('ch01_q43_a2', e.target.value)} value={userAnswers.ch01_q43_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「託」：委託<br/>
          「效」：任務／責任
        </div>
      )}
    </div>

    {/* Q44 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q44</h3>
        <StarButton questionId="ch01_q44" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 若無「興德」之言</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「興德」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q44', 1)}} onChange={(e) => onChange('ch01_q44_a1', e.target.value)} value={userAnswers.ch01_q44_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「興德」：發揚聖德
        </div>
      )}
    </div>

    {/* Q45 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q45</h3>
        <StarButton questionId="ch01_q45" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 則責攸之......之「慢」，以「彰」其「咎」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「慢」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q45', 1)}} onChange={(e) => onChange('ch01_q45_a1', e.target.value)} value={userAnswers.ch01_q45_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「彰」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q45', 2)}} onChange={(e) => onChange('ch01_q45_a2', e.target.value)} value={userAnswers.ch01_q45_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「咎」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q45', 3)}} onChange={(e) => onChange('ch01_q45_a3', e.target.value)} value={userAnswers.ch01_q45_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「慢」：怠慢<br/>
          「彰」：揭示<br/>
          「咎」：過失
        </div>
      )}
    </div>

    {/* Q46 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q46</h3>
        <StarButton questionId="ch01_q46" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 陛下亦宜「自謀」，以「諮諏」「善道」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「自謀」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q46', 1)}} onChange={(e) => onChange('ch01_q46_a1', e.target.value)} value={userAnswers.ch01_q46_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「諮諏」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q46', 2)}} onChange={(e) => onChange('ch01_q46_a2', e.target.value)} value={userAnswers.ch01_q46_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「善道」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q46', 3)}} onChange={(e) => onChange('ch01_q46_a3', e.target.value)} value={userAnswers.ch01_q46_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「自謀」：自己打算<br/>
          「諮諏」：詢問<br/>
          「善道」：治國的好辦法
        </div>
      )}
    </div>

    {/* Q47 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q47</h3>
        <StarButton questionId="ch01_q47" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「察納」「雅言」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「察納」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q47', 1)}} onChange={(e) => onChange('ch01_q47_a1', e.target.value)} value={userAnswers.ch01_q47_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「雅言」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q47', 2)}} onChange={(e) => onChange('ch01_q47_a2', e.target.value)} value={userAnswers.ch01_q47_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「察納」：明察接納<br/>
          「雅言」：正直合理的言論
        </div>
      )}
    </div>

    {/* Q48 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q48</h3>
        <StarButton questionId="ch01_q48" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 臨「表」「涕零」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「表」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q48', 1)}} onChange={(e) => onChange('ch01_q48_a1', e.target.value)} value={userAnswers.ch01_q48_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「涕零」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q48', 2)}} onChange={(e) => onChange('ch01_q48_a2', e.target.value)} value={userAnswers.ch01_q48_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「表」：奏章<br/>
          「涕零」：眼淚落下來
        </div>
      )}
    </div>

    <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingBottom: '15px', borderBottom: '3px solid #dc2626', marginTop: '50px'}}>第二部分：問答</h3>

    {/* Q&A Question 1: Analyzing the Situation */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q1：形勢分析</h3>
        <StarButton questionId="ch01_qa1" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>諸葛亮在出師表開首如何分析蜀漢面臨的有利及不利形勢？試引述原文，各說明其含義，並且指出其分析形勢的三個目的。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>不利形勢（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa1_a1', e.target.value)} value={userAnswers.ch01_qa1_a1 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>不利形勢的含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa1_a2', e.target.value)} value={userAnswers.ch01_qa1_a2 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>有利形勢（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa1_a3', e.target.value)} value={userAnswers.ch01_qa1_a3 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>有利形勢的含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa1_a4', e.target.value)} value={userAnswers.ch01_qa1_a4 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>分析形勢的三個目的：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa1_a5', e.target.value)} value={userAnswers.ch01_qa1_a5 || ''} placeholder="說明三個目的..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>不利形勢：</b>「先帝創業未半而中道崩殂，今天下三分，益州疲弊，此誠危急存亡之秋也」<br/>
          含義：先帝創業未成便去世，群龍無首；天下三分，蜀漢最弱小，受魏吳威脅；蜀漢長年征戰，國力困乏<br/>
          <b>有利形勢：</b>「然侍衛之臣不懈於內，忠志之士忘身於外者」<br/>
          含義：朝廷在內不懈怠，軍士奮勇作戰；朝廷和軍民都對先帝忠心，仍有希望<br/>
          <b>三個目的：</b>（1）激勵後主，使其發奮圖強，繼承先業，復興漢室；（2）強調蜀漢形勢危急，使後主加以警惕；（3）表明軍民不忘先帝恩德，對後主忠心，因此仍有希望
        </div>
      )}
    </div>

    {/* Q&A Question 2: Advice on Different Aspects */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q2：納諫內容</h3>
        <StarButton questionId="ch01_qa2" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>諸葛亮對後主提出了哪些「宜」和「不宜」的建議？試就納諫、賞罰、用人方面，引述原文，各說明其含義。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>納諫方面「宜」（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a1', e.target.value)} value={userAnswers.ch01_qa2_a1 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a2', e.target.value)} value={userAnswers.ch01_qa2_a2 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>納諫方面「不宜」（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a3', e.target.value)} value={userAnswers.ch01_qa2_a3 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義及後果：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a4', e.target.value)} value={userAnswers.ch01_qa2_a4 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>賞罰方面「宜」（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a5', e.target.value)} value={userAnswers.ch01_qa2_a5 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a6', e.target.value)} value={userAnswers.ch01_qa2_a6 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>賞罰方面「不宜」（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a7', e.target.value)} value={userAnswers.ch01_qa2_a7 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義及後果：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a8', e.target.value)} value={userAnswers.ch01_qa2_a8 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>用人方面「宜」（引述原文及人名）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a9', e.target.value)} value={userAnswers.ch01_qa2_a9 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a10', e.target.value)} value={userAnswers.ch01_qa2_a10 || ''} placeholder="解釋含義..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>納諫方面「宜」：</b>「開張聖聽」、「諮諏善道，以光先帝遺德，恢弘志士之氣」<br/>
          含義：廣開言路，諮詢並接納良策，以發揚先帝遺留的美德，激勵志士的精神<br/>
          <b>納諫方面「不宜」：</b>「妄自菲薄」、「引喻失義」<br/>
          含義及後果：過分看輕自己或說不恰當的話，以塞忠諫之路，阻礙忠良進言<br/>
          <b>賞罰方面「宜」：</b>「宮中府中，俱為一體，陟罰臧否，不宜異同，若有作奸犯科及為忠善者，宜付有司論其刑賞，以昭陛下平明之治」<br/>
          含義：宮中和府中要統一賞罰標準，對於為非作歹或盡忠行善的人，應交給負責官吏討論其刑賞，以彰顯後主公正嚴明的治理<br/>
          <b>賞罰方面「不宜」：</b>「不宜偏私，使內外異法也」<br/>
          含義及後果：不應偏袒徇私，否則會使宮內宮外有不同的賞罰制度<br/>
          <b>用人方面「宜」：</b>如郭攸之、費依、董允等文臣，「此皆良實，志慮忠純」；向寵等武將，「性行淑均」<br/>
          含義：這些人善良忠實，志向心思純正，應多加任用，諮詢他們，以補正缺漏
        </div>
      )}
    </div>

    {/* Q&A Question 3: Learning from History */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q3：以古鑑今</h3>
        <StarButton questionId="ch01_qa3" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>諸葛亮如何利用西漢與東漢的例子來勸說後主？試引述相關原文並解釋其作用。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>西漢的原文及含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa3_a1', e.target.value)} value={userAnswers.ch01_qa3_a1 || ''} placeholder="引述原文及含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>東漢的原文及含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa3_a2', e.target.value)} value={userAnswers.ch01_qa3_a2 || ''} placeholder="引述原文及含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>這個對比的作用：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa3_a3', e.target.value)} value={userAnswers.ch01_qa3_a3 || ''} placeholder="說明作用..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>西漢：</b>「親賢臣，遠小人，此先漢所以興隆也」<br/>
          含義：西漢君主親近賢臣，遠離小人，因此國家興盛<br/>
          <b>東漢：</b>「親小人，遠賢臣，此後漢所以傾頹也」<br/>
          含義：東漢君主親信小人，遠離賢臣，因此國家衰敗<br/>
          <b>作用：</b>通過正反對比，以西漢君主親賢臣遠小人致國家興隆，對比東漢君主親小人遠賢臣致國家傾頹，突出兩者的利弊損益的影響，強調要親賢臣遠小人，以免重蹈覆轍
        </div>
      )}
    </div>

    {/* Q&A Question 4: Personal Commitment */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q4：真情述志</h3>
        <StarButton questionId="ch01_qa4" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>諸葛亮如何表述先帝和他的感情？試引用原文解釋，並且指出他自述身世和志向的作用。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>先帝的知遇之恩（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa4_a1', e.target.value)} value={userAnswers.ch01_qa4_a1 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa4_a2', e.target.value)} value={userAnswers.ch01_qa4_a2 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>諸葛亮對先帝的感激與責任（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa4_a3', e.target.value)} value={userAnswers.ch01_qa4_a3 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>自述身世和志向的作用：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa4_a4', e.target.value)} value={userAnswers.ch01_qa4_a4 || ''} placeholder="說明作用..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>先帝知遇之恩：</b>「臣本布衣，躬耕於南陽，苟全性命於亂世，不求聞達於諸侯。先帝不以臣卑鄙，猥自枉屈，三顧臣於草廬之中，諮諏善道之事」<br/>
          含義：諸葛亮原本身分低微，只想保全自己的生命，先帝卻不因他身分低下而看不起他，反而三次親自拜訪他，向他諮詢治國之策，顯示對他的重視和信任<br/>
          <br/>
          <b>諸葛亮對先帝的感激與責任（分句解釋）：</b><br/>
          <b>「由是感激，遂許先帝以驅馳」</b><br/>
          含義：正是因為先帝的知遇，諸葛亮深感激動，因此答應為先帝效力和奮力工作<br/>
          <br/>
          <b>「受命以來，夙夜憂歎，恐託付不效，以傷先帝之明」</b><br/>
          含義：自從接受先帝任命以來，諸葛亮日夜都在憂慮，擔心自己的工作做不好，會辜負先帝的期望和眼光<br/>
          <br/>
          <b>「故五月渡瀘，深入不毛」</b><br/>
          含義：因此諸葛亮毅然率軍南征，進入荒涼的南蠻之地，不怕艱苦，為了完成先帝的志業<br/>
          <br/>
          <b>「先帝知臣謹慎，故臨崩寄臣以大事也」</b><br/>
          含義：先帝了解諸葛亮為人謹慎，所以在臨終時把治國和軍國大事託付給他，這是對諸葛亮最大的信任和重託<br/>
          <br/>
          <b>自述身世和志向的作用：</b>為使後主不質疑自己、信任自己的意見，將自己的心跡完全表露出來，以此打動後主的感情，使其願意接納自己的勸諫。同時也向後主強調自己對先帝的忠誠和責任，希望後主能傳承先帝的信任
        </div>
      )}
    </div>

    {/* Q&A Question 5: Reaffirming Responsibilities */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q5：重申職責</h3>
        <StarButton questionId="ch01_qa5" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>引用原文，指出並解釋諸葛亮自己、賢臣和後主各自的職責。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>諸葛亮自己的職責（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa5_a1', e.target.value)} value={userAnswers.ch01_qa5_a1 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa5_a2', e.target.value)} value={userAnswers.ch01_qa5_a2 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>賢臣的職責（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa5_a3', e.target.value)} value={userAnswers.ch01_qa5_a3 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa5_a4', e.target.value)} value={userAnswers.ch01_qa5_a4 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>後主的職責（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa5_a5', e.target.value)} value={userAnswers.ch01_qa5_a5 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa5_a6', e.target.value)} value={userAnswers.ch01_qa5_a6 || ''} placeholder="解釋含義..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>諸葛亮自己的職責：</b>「庶竭駑鈍，攘除奸凶，興復漢室，還於舊都」<br/>
          含義：竭盡自己平庸的才能，剷除奸詐兇惡的敵人，復興漢朝，遷回原來的首都<br/>
          <b>賢臣的職責：</b>「斟酌損益，進盡忠言」<br/>
          含義：反覆考慮改革的方案，提出最好的建議<br/>
          <b>後主的職責：</b>「諮諏善道，察納雅言，深追先帝遺詔」<br/>
          含義：諮詢治國的好辦法，明察接納正直合理的言論，深深遵循先帝遺留的遺詔
        </div>
      )}
    </div>

    {/* Q&A Question 6: Tears of Sorrow */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q6：臨表涕零</h3>
        <StarButton questionId="ch01_qa6" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>指出作者臨表涕零的三個原因。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>原因一：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa6_a1', e.target.value)} value={userAnswers.ch01_qa6_a1 || ''} placeholder="說明..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>原因二：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa6_a2', e.target.value)} value={userAnswers.ch01_qa6_a2 || ''} placeholder="說明..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>原因三：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa6_a3', e.target.value)} value={userAnswers.ch01_qa6_a3 || ''} placeholder="說明..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>原因一：</b>蜀漢危急。蜀漢「益州疲弊」，面臨「危急存亡之秋」，國力衰弱，危在旦夕<br/>
          <b>原因二：</b>後主年少，缺乏治國經驗，可能親信小人，不聽忠言，難以繼承先帝偉業，使諸葛亮對復興漢室的希望受到威脅<br/>
          <b>原因三：</b>出師在即，擔心後主被小人蒙蔽，而自己在外難以控制局面，將無法得到後方的支持，直接影響北伐的成敗
        </div>
      )}
    </div>

    {/* Q&A Question 7: Persuasion Techniques */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q7：游說技巧</h3>
        <StarButton questionId="ch01_qa7" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>指出並說明作者的游說技巧。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>說理方面（引述例子並說明）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa7_a1', e.target.value)} value={userAnswers.ch01_qa7_a1 || ''} placeholder="說明技巧..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>動情方面（引述例子並說明）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa7_a2', e.target.value)} value={userAnswers.ch01_qa7_a2 || ''} placeholder="說明技巧..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>游說技巧：說之以理，動之以情</b><br/>
          <b>說：</b>通過分析天下局勢，突出蜀國危難，以東漢西漢史實對比，希望後主以史為鑑，親賢臣遠小人，做出理性的決定<br/>
          <b>動：</b>多次提及先帝，望以父子之情打動後主，使其甘於接納意見；又表明自己的心志和付出，以此打動後主，使其接受自己的勸諫。諸葛亮用「臨表涕零」這個細節，更是深刻表現了他內心的真摯情感
        </div>
      )}
    </div>

    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
    </div>
  );
};

export default App;