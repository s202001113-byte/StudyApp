import { ArrowLeft } from 'lucide-react';

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

export default ICT_Comp_A_Ch2;
