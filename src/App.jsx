import { useState, useEffect, lazy, Suspense } from 'react';
import { Box, CheckCircle2, Database, Monitor, Cpu, Layers, Zap, Settings, Layout, Globe, ShieldAlert, ArrowLeft, Star, BookOpen } from 'lucide-react';
import { LoadingFallback } from './components/LoadingFallback';

// Lazy load all quiz components
const Chinese_01 = lazy(() => import('./components/Chinese_01'));
const Chinese_02 = lazy(() => import('./components/Chinese_02'));
const Chinese_03 = lazy(() => import('./components/Chinese_03'));
const Chinese_04 = lazy(() => import('./components/Chinese_04'));
const Chinese_05 = lazy(() => import('./components/Chinese_05'));
const ICT_Comp_A_Ch1 = lazy(() => import('./components/ICT_Comp_A_Ch1'));
const ICT_Comp_A_Ch2 = lazy(() => import('./components/ICT_Comp_A_Ch2'));
const ICT_Comp_A_Ch3 = lazy(() => import('./components/ICT_Comp_A_Ch3'));
const ICT_Comp_B_Ch1 = lazy(() => import('./components/ICT_Comp_B_Ch1'));
const ICT_Comp_B_Ch2 = lazy(() => import('./components/ICT_Comp_B_Ch2'));
const ICT_Comp_B_Ch3 = lazy(() => import('./components/ICT_Comp_B_Ch3'));
const ICT_Comp_C_Ch1 = lazy(() => import('./components/ICT_Comp_C_Ch1'));
const ICT_Comp_C_Ch2 = lazy(() => import('./components/ICT_Comp_C_Ch2'));
const ICT_Comp_C_Ch3 = lazy(() => import('./components/ICT_Comp_C_Ch3'));
const ICT_Comp_C_Ch4 = lazy(() => import('./components/ICT_Comp_C_Ch4'));
const ICT_Comp_C_Ch5 = lazy(() => import('./components/ICT_Comp_C_Ch5'));
const ICT_E_1_Ch1 = lazy(() => import('./components/ICT_E_1_Ch1'));
const Phy_Comp_4_Ch1 = lazy(() => import('./components/Phy_Comp_4_Ch1'));
const Phy_Comp_4_Ch2 = lazy(() => import('./components/Phy_Comp_4_Ch2'));
const Phy_Comp_4_Ch3 = lazy(() => import('./components/Phy_Comp_4_Ch3'));
const Phy_E_2_Ch1 = lazy(() => import('./components/Phy_E_2_Ch1'));
const Phy_E_2_Correction = lazy(() => import('./components/Phy_E_2_Correction'));
const Phy_E_3_Ch1 = lazy(() => import('./components/Phy_E_3_Ch1'));
const Phy_E_3_Ch2 = lazy(() => import('./components/Phy_E_3_Ch2'));
const Phy_E_3_Ch3 = lazy(() => import('./components/Phy_E_3_Ch3'));
const Phy_LQ_Guide = lazy(() => import('./components/Phy_LQ_Guide'));

// ======================================================
// MAIN APP COMPONENT
// ======================================================

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
    { id: 'chinese_02', title: 'Ch2: 六國論', description: '語譯、寫作手法和問答 - Classical Chinese Translation, Techniques & Q&A', icon: <Globe />, category: 'Classical Chinese', color: '#dc2626' },
    { id: 'chinese_03', title: 'Ch3: 勸學', description: '語譯 - Classical Chinese Translation', icon: <Globe />, category: 'Classical Chinese', color: '#dc2626' },
    { id: 'chinese_04', title: 'Ch4: 師說', description: '語譯和問答 - Classical Chinese Translation & Q&A', icon: <Globe />, category: 'Classical Chinese', color: '#dc2626' },
    { id: 'chinese_05', title: 'Ch5: 逍遙遊', description: '語譯和問答 - Classical Chinese Translation & Q&A', icon: <Globe />, category: 'Classical Chinese', color: '#dc2626' },
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
    { id: 'ict_e_1_ch1', title: 'Elective 1 Ch1: SQL Fundamentals', description: 'SQL Commands, Constraints, Conditions & Functions', icon: <Database />, category: 'Elective 1', color: '#e91e63' },
    
    // --- Physics Topics ---
    { id: 'phy_comp_4_ch1', title: 'Compulsory 4 Ch1: Electrostatics', description: 'Electric Charges, Fields & Forces', icon: <Zap />, category: 'Compulsory 4', color: '#f97316' },
    { id: 'phy_comp_4_ch2', title: 'Compulsory 4 Ch2: Electric Circuits', description: 'Electric Circuits, Current & Voltage', icon: <Zap />, category: 'Compulsory 4', color: '#f97316' },
    { id: 'phy_comp_4_ch3', title: 'Compulsory 4 Ch3: Domestic Electricity', description: 'Domestic Electricity, Safety & Appliances', icon: <Zap />, category: 'Compulsory 4', color: '#f97316' },
    { id: 'phy_e_2_ch1', title: 'E2 Ch1: Rutherford\'s atomic model', description: 'Rutherford\'s Model, Scattering & Limitations', icon: <Zap />, category: 'Elective 2', color: '#f97316' },
    { id: 'phy_e_2_corr', title: 'E2 Correction Book: Structural Questions', description: 'Bohr\'s Model & Spectrum Analysis', icon: <Zap />, category: 'Elective 2', color: '#f97316' },
    { id: 'phy_e_3_ch1', title: 'E3 Ch1: Electricity at home', description: 'Efficiency, Lighting, Appliances & AC', icon: <Zap />, category: 'Elective 3', color: '#eab308' },
    { id: 'phy_e_3_ch2', title: 'E3 Ch2: Energy efficiency in buildings', description: 'Conduction, Radiation & Vehicles', icon: <Zap />, category: 'Elective 3', color: '#f59e0b' },
    { id: 'phy_e_3_ch3', title: 'E3 Ch3: Renewable energy', description: 'Nuclear, Wind, Hydro & Solar Energy', icon: <Zap />, category: 'Elective 3', color: '#84cc16' },
    { id: 'phy_lq_guide', title: 'Physics LQ Guide', description: 'Long Question Study Guide - All Chapters', icon: <BookOpen />, category: 'LQ Guide', color: '#dc2626' },
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
    ICT: ['Compulsory A', 'Compulsory B', 'Compulsory C', 'Elective 1'],
    Physics: ['Compulsory 4', 'Elective 2', 'Elective 3', 'LQ Guide']
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
            <h2 style={{fontSize: '1.75rem', fontWeight: '800', marginBottom: '30px', color: '#1e1b4b'}}>{selectedTopic === 'chinese_01' ? '出師表' : selectedTopic === 'chinese_02' ? '六國論' : selectedTopic === 'chinese_03' ? '勸學' : selectedTopic === 'chinese_04' ? '師說' : selectedTopic === 'chinese_05' ? '逍遙遊' : selectedTopic === 'phy_e_2_corr' ? 'Physics E2 Correction Book' : selectedTopic.replace(/_/g, ' ').toUpperCase()}</h2>
            
            <Suspense fallback={<LoadingFallback />}>
              {/* Chinese Components */}
              {selectedTopic === 'chinese_01' && <Chinese_01 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
              {selectedTopic === 'chinese_02' && <Chinese_02 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
              {selectedTopic === 'chinese_03' && <Chinese_03 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
              {selectedTopic === 'chinese_04' && <Chinese_04 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
              {selectedTopic === 'chinese_05' && <Chinese_05 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
              
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
              {selectedTopic === 'ict_e_1_ch1' && <ICT_E_1_Ch1 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
              
              {/* Physics Components */}
              {selectedTopic === 'phy_comp_4_ch1' && <Phy_Comp_4_Ch1 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
              {selectedTopic === 'phy_comp_4_ch2' && <Phy_Comp_4_Ch2 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
              {selectedTopic === 'phy_comp_4_ch3' && <Phy_Comp_4_Ch3 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
              {selectedTopic === 'phy_e_2_ch1' && <Phy_E_2_Ch1 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
              {selectedTopic === 'phy_e_2_corr' && <Phy_E_2_Correction userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
              {selectedTopic === 'phy_e_3_ch1' && <Phy_E_3_Ch1 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
              {selectedTopic === 'phy_e_3_ch2' && <Phy_E_3_Ch2 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
              {selectedTopic === 'phy_e_3_ch3' && <Phy_E_3_Ch3 userAnswers={userAnswers} onChange={handleInputChange} showAnswers={showAnswers} styles={styles} StarButton={StarButton} setCurrentView={setCurrentView} />}
              {selectedTopic === 'phy_lq_guide' && <Phy_LQ_Guide styles={styles} setCurrentView={setCurrentView} />}
            </Suspense>

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

// All component definitions have been moved to separate files in src/components/

export default App;
