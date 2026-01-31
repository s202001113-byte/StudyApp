import { ArrowLeft } from 'lucide-react';

const Phy_Comp_4_Ch1 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => {
  const questions = [
    { id: 1, correct: 'B', options: [{ text: '4 cm' }, { text: '2 cm' }, { text: '0.5 cm' }, { text: '0 cm' }] },
    { id: 2, correct: 'D', options: [{ text: '(2) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }, { text: '(1), (2) and (3)' }] },
    { id: 3, correct: 'C', options: [{ text: '(2) only' }, { text: '(3) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }] },
    { id: 4, correct: 'B', options: [{ text: '(2) only' }, { text: '(3) only' }, { text: '(1), (2) only' }, { text: '(1), (3) only' }] },
    { id: 5, correct: 'A', options: [{ text: '(3) only' }, { text: '(1), (2) only' }, { text: '(1), (3) only' }, { text: '(1), (2) and (3)' }] },
    { id: 6, correct: 'D', options: [{ text: '(1), (2) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }, { text: '(1), (2) and (3)' }] },
    { id: 7, correct: 'B', options: [{ text: '(1) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }, { text: '(1), (2) and (3)' }] },
    { id: 8, correct: 'C', options: [{ text: '+ + 0' }, { text: '0 - +' }, { text: '- - +' }, { text: '- 0 -' }] },
    { id: 9, correct: 'D', options: [{ text: 'Both statements 1 and 2 are correct and statement 2 is a correct explanation for statement 1.' }, { text: 'Both statements 1 and 2 are correct but statement 2 is not a correct explanation for statement 1.' }, { text: 'Statement 1 is correct and statement 2 is incorrect.' }, { text: 'Statement 1 is incorrect and statement 2 is correct.' }] },
    { id: 10, correct: 'B', options: [{ text: '(1) only' }, { text: '(2) only' }, { text: '(1), (3) only' }, { text: '(2), (3) only' }] },
    { id: 11, correct: 'C', options: [{ text: '(3) only' }, { text: '(1), (2) only' }, { text: '(2), (3) only' }, { text: '(1), (2) and (3)' }] },
    { id: 12, correct: 'B', options: [{ text: '(1) only' }, { text: '(3) only' }, { text: '(1), (2) only' }, { text: '(2), (3) only' }] },
    { id: 13, correct: 'C', options: [{ text: 'E is directly proportional to θ' }, { text: 'E is directly proportional to cos θ' }, { text: 'E is directly proportional to tan θ' }, { text: 'E is directly proportional to sin θ' }] }
  ];

  const getAnswerStyle = (qId, option) => {
    if (!showAnswers) return {};
    const userAnswer = userAnswers[`phy4ch1q${qId}`];
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
            <StarButton questionId={`phy4ch1q${q.id}`} />
          </div>
          
          {/* Question Image */}
          <img src={`${import.meta.env.BASE_URL}mcdata/PHY COMP 4 CH1/q/${q.id}.png`} style={{maxWidth: '100%', marginBottom: '15px'}} alt={`Question ${q.id}`} />
          
          {/* Multiple Choice Options */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px'}}>
            {['A', 'B', 'C', 'D'].map((option, idx) => (
              <label key={option} style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '2px solid #ddd', borderRadius: '4px', cursor: 'pointer', ...getAnswerStyle(q.id, option)}}>
                <input 
                  type="radio" 
                  name={`phy4ch1q${q.id}`}
                  value={option}
                  checked={userAnswers[`phy4ch1q${q.id}`] === option}
                  onChange={(e) => onChange(`phy4ch1q${q.id}`, e.target.value)}
                  disabled={showAnswers}
                />
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px'}}>
                  <span style={{fontWeight: 'bold', minWidth: '20px'}}>{option}.</span>
                  {q.options[idx].text ? (
                    <span style={{fontSize: '0.95rem', lineHeight: '1.4'}}>{q.options[idx].text}</span>
                  ) : (
                    <img src={`${import.meta.env.BASE_URL}mcdata/PHY COMP 4 CH1/c/${q.id}${option.toLowerCase()}.png`} style={{maxWidth: '150px', width: '100%'}} alt={`Option ${option}`} />
                  )}
                </div>
              </label>
            ))}
          </div>
          
          {/* Solution */}
          {showAnswers && (
            <div style={styles.answerKey}>
              <p><b>Solution:</b></p>
              <img src={`${import.meta.env.BASE_URL}mcdata/PHY COMP 4 CH1/s/${q.id}.png`} style={{maxWidth: '100%'}} alt={`Solution ${q.id}`} />
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

export default Phy_Comp_4_Ch1;
