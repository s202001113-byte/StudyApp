import { ArrowLeft } from 'lucide-react';

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
    const isCorrect = userAnswer === questions[qId - 1].correct && userAnswer !== undefined;
    if (userAnswer === option) {
      return isCorrect ? { backgroundColor: '#d1fae5', borderColor: '#10b981' } : { backgroundColor: '#fee2e2', borderColor: '#ef4444' };
    }
    if (!isCorrect && option === questions[qId - 1].correct) {
      return { backgroundColor: '#d1fae5', borderColor: '#10b981' };
    }
    return {};
  };

  const getSolutionStyle = (qId) => {
    if (!showAnswers) return styles.answerKey;
    const userAnswer = userAnswers[`phy4ch3q${qId}`];
    const isCorrect = userAnswer === questions[qId - 1].correct && userAnswer !== undefined;
    return isCorrect ? styles.answerKey : { ...styles.answerKey, backgroundColor: '#fee2e2', borderColor: '#ef4444', borderLeft: '4px solid #ef4444' };
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
            <div style={getSolutionStyle(q.id)}>
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

export default Phy_Comp_4_Ch3;