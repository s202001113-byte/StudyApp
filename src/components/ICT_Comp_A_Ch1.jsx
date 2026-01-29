import { ArrowLeft } from 'lucide-react';

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

export default ICT_Comp_A_Ch1;
