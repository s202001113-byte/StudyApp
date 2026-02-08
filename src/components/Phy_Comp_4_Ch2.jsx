import { ArrowLeft } from 'lucide-react';

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

export default Phy_Comp_4_Ch2;