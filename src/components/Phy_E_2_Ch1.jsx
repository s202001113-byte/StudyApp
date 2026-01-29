import { ArrowLeft } from 'lucide-react';

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

export default Phy_E_2_Ch1;