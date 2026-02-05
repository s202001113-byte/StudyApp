import { ArrowLeft } from 'lucide-react';

const Phy_E_2_Correction = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => {
  const mcQuestions = [
    { id: 1, correct: 'D', options: [{ text: '(1) only' }, { text: '(2) only' }, { text: '(1) and (3) only' }, { text: '(1), (2) and (3)' }] }
  ];

  const getAnswerStyle = (qId, option) => {
    if (!showAnswers) return {};
    const userAnswer = userAnswers[`phy_e2_corrq${qId}`];
    const isCorrect = userAnswer === mcQuestions[qId - 1].correct && userAnswer !== undefined;
    if (userAnswer === option) {
      return isCorrect ? { backgroundColor: '#d1fae5', borderColor: '#10b981' } : { backgroundColor: '#fee2e2', borderColor: '#ef4444' };
    }
    if (!isCorrect && option === mcQuestions[qId - 1].correct) {
      return { backgroundColor: '#d1fae5', borderColor: '#10b981' };
    }
    return {};
  };

  const getSolutionStyle = (qId) => {
    if (!showAnswers) return styles.answerKey;
    const userAnswer = userAnswers[`phy_e2_corrq${qId}`];
    const isCorrect = userAnswer === mcQuestions[qId - 1].correct && userAnswer !== undefined;
    return isCorrect ? styles.answerKey : { ...styles.answerKey, backgroundColor: '#fee2e2', borderColor: '#ef4444', borderLeft: '4px solid #ef4444' };
  };

  return (
    <div>
      {/* Multiple Choice Questions Section */}
      <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingBottom: '15px', borderBottom: '3px solid #f97316'}}>Multiple Choice Questions</h3>
      
      {mcQuestions.map(q => (
        <div key={q.id} style={styles.qSection}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
            <h3 style={styles.qTitle}>Q{q.id}</h3>
            <StarButton questionId={`phy_e2_corrq${q.id}`} />
          </div>
          
          {/* Question Image */}
          <img src={`${import.meta.env.BASE_URL}mcdata/PHY E2 CORRECTION/q/${q.id}.png`} style={{maxWidth: '100%', marginBottom: '15px'}} alt={`Question ${q.id}`} />
          
          {/* Multiple Choice Options */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px'}}>
            {['A', 'B', 'C', 'D'].map((option, idx) => (
              <label key={option} style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '2px solid #ddd', borderRadius: '4px', cursor: 'pointer', ...getAnswerStyle(q.id, option)}}>
                <input 
                  type="radio" 
                  name={`phy_e2_corrq${q.id}`}
                  value={option}
                  checked={userAnswers[`phy_e2_corrq${q.id}`] === option}
                  onChange={(e) => onChange(`phy_e2_corrq${q.id}`, e.target.value)}
                  disabled={showAnswers}
                />
                <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '8px'}}>
                  <span style={{fontWeight: 'bold', minWidth: '20px'}}>{option}.</span>
                  {q.options[idx].text ? (
                    <span>{q.options[idx].text}</span>
                  ) : (
                    <img src={`${import.meta.env.BASE_URL}mcdata/PHY E2 CORRECTION/c/${q.id}${option.toLowerCase()}.png`} style={{maxWidth: '150px', width: '100%'}} alt={`Option ${option}`} />
                  )}
                </div>
              </label>
            ))}
          </div>
          
          {/* Solution */}
          {showAnswers && (
            <div style={getSolutionStyle(q.id)}>
              <p><b>Solution:</b></p>
              <img src={`${import.meta.env.BASE_URL}mcdata/PHY E2 CORRECTION/s/${q.id}.png`} style={{maxWidth: '100%'}} alt={`Solution ${q.id}`} />
            </div>
          )}
        </div>
      ))}

      {/* Structural Questions Section */}
      <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingBottom: '15px', borderBottom: '3px solid #f97316', marginTop: '50px'}}>Structural Questions</h3>

    {/* Q1: Bohr's Model - Dark Lines in Continuous Spectrum */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Bohr's Model and Dark Lines in Continuous Spectrum</h3>
        <StarButton questionId="phy_e2_corr_q1" />
      </div>
      <p style={{marginBottom: '12px'}}><b>Question:</b> Use Bohr's model of the hydrogen atom to explain how the dark lines in continuous spectrum are formed. (3 marks)</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>Point (1) - Discrete Energy Levels:</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('phy_e2_corr_q1_p1', e.target.value)} value={userAnswers.phy_e2_corr_q1_p1 || ''} placeholder="Explain the concept of discrete orbits and energy levels in Bohr's model..."/>
      
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>Point (2) - Photon Absorption:</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('phy_e2_corr_q1_p2', e.target.value)} value={userAnswers.phy_e2_corr_q1_p2 || ''} placeholder="Explain how electrons absorb photons and transition to higher energy levels..."/>
      
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>Point (3) - Photon Emission and Dark Lines:</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('phy_e2_corr_q1_p3', e.target.value)} value={userAnswers.phy_e2_corr_q1_p3 || ''} placeholder="Explain how electrons emit photons and why dark lines appear in the original direction..."/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Model Answer (3 marks):</b><br/>
          <br/>
          <b>Point (1) - Discrete Energy Levels:</b><br/>
          In Bohr's model, electrons occupy discrete orbits around the nucleus and have discrete energy levels. (1 mark)<br/>
          <br/>
          <b>Point (2) - Photon Absorption:</b><br/>
          When continuous light spectrum passes through hydrogen gas, photons with the exact amount of energy required are absorbed by electrons, causing them to transition to higher energy levels. (1 mark)<br/>
          <br/>
          <b>Point (3) - Emission and Dark Lines:</b><br/>
          The excited electrons emit photons as they return to lower energy levels in random directions. Since photons are emitted in all directions rather than just the original direction, the intensity in the original direction is reduced, appearing as dark lines in the continuous spectrum. (1 mark)
        </div>
      )}
    </div>

    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
    </div>
  );
};

export default Phy_E_2_Correction;
