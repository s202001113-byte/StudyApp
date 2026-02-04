import { ArrowLeft, Star } from 'lucide-react';

const Phy_Comp_4_Ch2 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => {
  const questions = [
    { id: 1, correct: 'A', options: [{ text: '100V' }, { text: '120V' }, { text: '240V' }, { text: '280V' }] },
    { id: 2, correct: 'C', options: [{ text: '(1) only' }, { text: '(2) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }] },
    { id: 3, correct: 'B', options: [{ text: 'Parallel circuit' }, { text: 'Series circuit' }, { text: 'Series-parallel circuit' }, { text: 'None of above' }] },
    { id: 4, correct: 'A', options: [{ text: '3A' }, { text: '4A' }, { text: '6A' }, { text: '12A' }] },
    { id: 5, correct: 'C', options: [{ text: 'EMF' }, { text: 'Terminal voltage' }, { text: 'Internal resistance' }, { text: 'External resistance' }] },
    { id: 6, correct: 'B', options: [{ text: '(1) only' }, { text: '(1), (2) only' }, { text: '(1), (3) only' }, { text: '(1), (2) and (3)' }] },
    { id: 7, correct: 'D', options: [{ text: 'Increases' }, { text: 'Decreases' }, { text: 'Remains constant' }, { text: 'Cannot determine' }] },
    { id: 8, correct: 'A', options: [{ text: 'True' }, { text: 'False' }, { text: 'Partially true' }, { text: 'None of above' }] },
    { id: 9, correct: 'C', options: [{ text: '(1), (2) only' }, { text: '(2), (3) only' }, { text: '(1), (3) only' }, { text: '(1), (2) and (3)' }] },
    { id: 10, correct: 'B', options: [{ text: 'Higher' }, { text: 'Lower' }, { text: 'Same' }, { text: 'Cannot compare' }] },
    { id: 11, correct: 'A', options: [{ text: 'Increase R' }, { text: 'Decrease R' }, { text: 'Short circuit' }, { text: 'Open circuit' }] },
    { id: 12, correct: 'D', options: [{ text: '(1) only' }, { text: '(2) only' }, { text: '(1), (2) only' }, { text: '(2), (3) only' }] },
    { id: 13, correct: 'C', options: [{ text: 'Light only' }, { text: 'Heat only' }, { text: 'Heat and Light' }, { text: 'Motion' }] },
    { id: 14, correct: 'A', options: [{ text: 'Resistor' }, { text: 'Capacitor' }, { text: 'Inductor' }, { text: 'Diode' }] },
    { id: 15, correct: 'B', options: [{ text: '1Ω' }, { text: '2Ω' }, { text: '3Ω' }, { text: '4Ω' }] },
    { id: 16, correct: 'C', options: [{ text: 'Series' }, { text: 'Parallel' }, { text: 'Series and Parallel' }, { text: 'None' }] },
    { id: 17, correct: 'D', options: [{ text: 'Maximum' }, { text: 'Minimum' }, { text: 'Medium' }, { text: 'None' }] },
    { id: 18,              correct: 'A', options: [{ text: 'True' }, { text: 'False' }, { text: 'Partially' }, { text: 'Unknown' }] }
  ];

  const getAnswerStyle = (qId, option) => {
    if (!showAnswers) return {};
    const userAnswer = userAnswers[`phy4ch2q${qId}`];
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
    const userAnswer = userAnswers[`phy4ch2q${qId}`];
    const isCorrect = userAnswer === questions[qId - 1].correct && userAnswer !== undefined;
    return isCorrect ? styles.answerKey : { ...styles.answerKey, backgroundColor: '#fee2e2', borderColor: '#ef4444', borderLeft: '4px solid #ef4444' };
  };

  return (
    <div>
      {questions.map(q => (
        <div key={q.id} style={styles.qSection}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
            <h3 style={styles.qTitle}>Q{q.id}{q.id === 18 && <Star size={20} fill="#f59e0b" color="#f59e0b" style={{marginLeft: '8px', display: 'inline'}} />}</h3>
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
            <div style={getSolutionStyle(q.id)}>
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

export default Phy_Comp_4_Ch2;