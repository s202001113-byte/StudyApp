import { ArrowLeft } from 'lucide-react';

const ICT_E_1_Ch1 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: CREATE TABLE */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: CREATE TABLE Statement</h3>
        <StarButton questionId="e1q1" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for the CREATE TABLE command:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q1_b1', e.target.value)} value={userAnswers.e1q1_b1 || ''}/>
          <span><b>Blank 2 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q1_b2', e.target.value)} value={userAnswers.e1q1_b2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q1_b3', e.target.value)} value={userAnswers.e1q1_b3 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 4 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q1_b4', e.target.value)} value={userAnswers.e1q1_b4 || ''}/>
          <span><b>Blank 5 (Parameter):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q1_b5', e.target.value)} value={userAnswers.e1q1_b5 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ (_____ _____, ...);</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>CREATE TABLE table (field datatype [constraints], ...)</div>}
    </div>

    {/* Q2: DROP TABLE */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: DROP TABLE Statement</h3>
        <StarButton questionId="e1q2" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for the DROP TABLE command:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q2_b1', e.target.value)} value={userAnswers.e1q2_b1 || ''}/>
          <span><b>Blank 2 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q2_b2', e.target.value)} value={userAnswers.e1q2_b2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q2_b3', e.target.value)} value={userAnswers.e1q2_b3 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____;</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>DROP TABLE table;</div>}
    </div>

    {/* Q3: INSERT INTO */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: INSERT DATA Statement</h3>
        <StarButton questionId="e1q3" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for the INSERT INTO command:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q3_b1', e.target.value)} value={userAnswers.e1q3_b1 || ''}/>
          <span><b>Blank 2 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q3_b2', e.target.value)} value={userAnswers.e1q3_b2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q3_b3', e.target.value)} value={userAnswers.e1q3_b3 || ''}/>
          <span><b>Blank 4 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q3_b4', e.target.value)} value={userAnswers.e1q3_b4 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 5 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q3_b5', e.target.value)} value={userAnswers.e1q3_b5 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ (_____, _____) _____ (record1field1, record1field2);</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>INSERT INTO table (field1, field2) VALUES (record1field1, record1field2);</div>}
    </div>

    {/* Q4: UPDATE Statement */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: UPDATE DATA Statement</h3>
        <StarButton questionId="e1q4" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for the UPDATE command:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q4_b1', e.target.value)} value={userAnswers.e1q4_b1 || ''}/>
          <span><b>Blank 2 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q4_b2', e.target.value)} value={userAnswers.e1q4_b2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q4_b3', e.target.value)} value={userAnswers.e1q4_b3 || ''}/>
          <span><b>Blank 4 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q4_b4', e.target.value)} value={userAnswers.e1q4_b4 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 5 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q4_b5', e.target.value)} value={userAnswers.e1q4_b5 || ''}/>
          <span><b>Blank 6 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q4_b6', e.target.value)} value={userAnswers.e1q4_b6 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 7 (Parameter):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q4_b7', e.target.value)} value={userAnswers.e1q4_b7 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ _____ = _____ _____ _____;</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>UPDATE table SET field = value1 WHERE condition;</div>}
    </div>

    {/* Q5: DELETE Statement */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: DELETE DATA Statement</h3>
        <StarButton questionId="e1q5" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for the DELETE command:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q5_b1', e.target.value)} value={userAnswers.e1q5_b1 || ''}/>
          <span><b>Blank 2 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q5_b2', e.target.value)} value={userAnswers.e1q5_b2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q5_b3', e.target.value)} value={userAnswers.e1q5_b3 || ''}/>
          <span><b>Blank 4 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q5_b4', e.target.value)} value={userAnswers.e1q5_b4 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 5 (Parameter):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q5_b5', e.target.value)} value={userAnswers.e1q5_b5 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ _____ _____;</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>DELETE FROM table WHERE condition;</div>}
    </div>

    {/* Q6: ALTER TABLE - ADD */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: ALTER TABLE - ADD Field</h3>
        <StarButton questionId="e1q6" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for the ALTER TABLE ADD command:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q6_b1', e.target.value)} value={userAnswers.e1q6_b1 || ''}/>
          <span><b>Blank 2 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q6_b2', e.target.value)} value={userAnswers.e1q6_b2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q6_b3', e.target.value)} value={userAnswers.e1q6_b3 || ''}/>
          <span><b>Blank 4 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q6_b4', e.target.value)} value={userAnswers.e1q6_b4 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 5 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q6_b5', e.target.value)} value={userAnswers.e1q6_b5 || ''}/>
          <span><b>Blank 6 (Parameter):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q6_b6', e.target.value)} value={userAnswers.e1q6_b6 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ _____ _____ _____;</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>ALTER TABLE table ADD field datatype;</div>}
    </div>

    {/* Q7: ALTER TABLE - MODIFY */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7: ALTER TABLE - MODIFY Field</h3>
        <StarButton questionId="e1q7" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for the ALTER TABLE MODIFY command:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1-2 (Keywords):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q7_b1', e.target.value)} value={userAnswers.e1q7_b1 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q7_b3', e.target.value)} value={userAnswers.e1q7_b3 || ''}/>
          <span><b>Blank 4 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q7_b4', e.target.value)} value={userAnswers.e1q7_b4 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 5 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q7_b5', e.target.value)} value={userAnswers.e1q7_b5 || ''}/>
          <span><b>Blank 6 (Parameter):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q7_b6', e.target.value)} value={userAnswers.e1q7_b6 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ _____ _____;</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>ALTER TABLE table MODIFY field datatype;</div>}
    </div>

    {/* Q8: ALTER TABLE - DROP */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8: ALTER TABLE - DROP Field</h3>
        <StarButton questionId="e1q8" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for the ALTER TABLE DROP COLUMN command:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q8_b1', e.target.value)} value={userAnswers.e1q8_b1 || ''}/>
          <span><b>Blank 2 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q8_b2', e.target.value)} value={userAnswers.e1q8_b2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q8_b3', e.target.value)} value={userAnswers.e1q8_b3 || ''}/>
          <span><b>Blank 4 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q8_b4', e.target.value)} value={userAnswers.e1q8_b4 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 5 (Parameter):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q8_b5', e.target.value)} value={userAnswers.e1q8_b5 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ _____ _____;</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>ALTER TABLE table DROP field;</div>}
    </div>

    {/* Q9: ALTER TABLE - RENAME TABLE */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q9: ALTER TABLE - RENAME Table</h3>
        <StarButton questionId="e1q9" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for the ALTER TABLE RENAME command:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1-2 (Keywords):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q9_b1', e.target.value)} value={userAnswers.e1q9_b1 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q9_b3', e.target.value)} value={userAnswers.e1q9_b3 || ''}/>
          <span><b>Blank 4 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q9_b4', e.target.value)} value={userAnswers.e1q9_b4 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 5 (Parameter):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q9_b5', e.target.value)} value={userAnswers.e1q9_b5 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ _____ _____;</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>ALTER TABLE table RENAME new-table;</div>}
    </div>

    {/* Q10: ALTER TABLE - RENAME COLUMN */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q10: ALTER TABLE - RENAME Column</h3>
        <StarButton questionId="e1q10" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for the ALTER TABLE RENAME COLUMN command:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1-2 (Keywords):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q10_b1', e.target.value)} value={userAnswers.e1q10_b1 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q10_b3', e.target.value)} value={userAnswers.e1q10_b3 || ''}/>
          <span><b>Blank 4 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q10_b4', e.target.value)} value={userAnswers.e1q10_b4 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 5 (Parameter):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q10_b5', e.target.value)} value={userAnswers.e1q10_b5 || ''}/>
          <span><b>Blank 6 (Keyword):</b></span>
          <input style={{...styles.input, width: '100px'}} onChange={(e) => onChange('e1q10_b6', e.target.value)} value={userAnswers.e1q10_b6 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 7 (Parameter):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q10_b7', e.target.value)} value={userAnswers.e1q10_b7 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ _____ _____ _____ _____;</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>ALTER TABLE table RENAME old-field TO new-field;</div>}
    </div>

    {/* Q11: SELECT DISTINCT */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q11: SELECT DISTINCT Statement</h3>
        <StarButton questionId="e1q11" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for the SELECT DISTINCT command:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q11_b1', e.target.value)} value={userAnswers.e1q11_b1 || ''}/>
          <span><b>Blank 2 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q11_b2', e.target.value)} value={userAnswers.e1q11_b2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q11_b3', e.target.value)} value={userAnswers.e1q11_b3 || ''}/>
          <span><b>Blank 4 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q11_b4', e.target.value)} value={userAnswers.e1q11_b4 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 5 (Parameter):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q11_b5', e.target.value)} value={userAnswers.e1q11_b5 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ _____ _____;</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>SELECT DISTINCT field FROM table;</div>}
    </div>

    {/* Q12: PRIMARY KEY - Add */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q12: Add PRIMARY KEY Constraint</h3>
        <StarButton questionId="e1q12" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for adding PRIMARY KEY constraint:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1-2 (Keywords):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q12_b1', e.target.value)} value={userAnswers.e1q12_b1 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q12_b3', e.target.value)} value={userAnswers.e1q12_b3 || ''}/>
          <span><b>Blank 4 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q12_b4', e.target.value)} value={userAnswers.e1q12_b4 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 5 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q12_b5', e.target.value)} value={userAnswers.e1q12_b5 || ''}/>
          <span><b>Blank 6 (Parameter):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q12_b6', e.target.value)} value={userAnswers.e1q12_b6 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 7-8 (Keywords):</b></span>
          <input style={{...styles.input, width: '200px'}} onChange={(e) => onChange('e1q12_b7', e.target.value)} value={userAnswers.e1q12_b7 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ _____ _____ _____ _____;</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>ALTER TABLE table MODIFY field datatype PRIMARY KEY;</div>}
    </div>

    {/* Q13: FOREIGN KEY - Add */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q13: Add FOREIGN KEY Constraint</h3>
        <StarButton questionId="e1q13" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for adding FOREIGN KEY constraint:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1-2 (Keywords):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q13_b1', e.target.value)} value={userAnswers.e1q13_b1 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q13_b3', e.target.value)} value={userAnswers.e1q13_b3 || ''}/>
          <span><b>Blank 4 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q13_b4', e.target.value)} value={userAnswers.e1q13_b4 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 5-6 (Keywords):</b></span>
          <input style={{...styles.input, width: '200px'}} onChange={(e) => onChange('e1q13_b5', e.target.value)} value={userAnswers.e1q13_b5 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 7 (Parameter):</b></span>
          <input style={{...styles.input, width: '180px'}} onChange={(e) => onChange('e1q13_b7', e.target.value)} value={userAnswers.e1q13_b7 || ''}/>
          <span><b>Blank 8 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q13_b8', e.target.value)} value={userAnswers.e1q13_b8 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 9 (Parameter):</b></span>
          <input style={{...styles.input, width: '180px'}} onChange={(e) => onChange('e1q13_b9', e.target.value)} value={userAnswers.e1q13_b9 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ _____ _____ _____ (_____)_____  _____ (____);</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>ALTER TABLE table ADD FOREIGN KEY (foreign_key_field) REFERENCES parent_table_name (primary_key_field);</div>}
    </div>

    {/* Q14: NOT NULL Constraint - Add */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q14: Add NOT NULL Constraint</h3>
        <StarButton questionId="e1q14" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for adding NOT NULL constraint:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1-2 (Keywords):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q14_b1', e.target.value)} value={userAnswers.e1q14_b1 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q14_b3', e.target.value)} value={userAnswers.e1q14_b3 || ''}/>
          <span><b>Blank 4 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q14_b4', e.target.value)} value={userAnswers.e1q14_b4 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 5 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q14_b5', e.target.value)} value={userAnswers.e1q14_b5 || ''}/>
          <span><b>Blank 6 (Parameter):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q14_b6', e.target.value)} value={userAnswers.e1q14_b6 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 7-8 (Keywords):</b></span>
          <input style={{...styles.input, width: '200px'}} onChange={(e) => onChange('e1q14_b7', e.target.value)} value={userAnswers.e1q14_b7 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ _____ _____ _____ _____;</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>ALTER TABLE table MODIFY field datatype NOT NULL;</div>}
    </div>

    {/* Q15: UNIQUE Constraint - Add */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q15: Add UNIQUE Constraint</h3>
        <StarButton questionId="e1q15" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for adding UNIQUE constraint:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1-2 (Keywords):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q15_b1', e.target.value)} value={userAnswers.e1q15_b1 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q15_b3', e.target.value)} value={userAnswers.e1q15_b3 || ''}/>
          <span><b>Blank 4 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q15_b4', e.target.value)} value={userAnswers.e1q15_b4 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 5 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q15_b5', e.target.value)} value={userAnswers.e1q15_b5 || ''}/>
          <span><b>Blank 6 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q15_b6', e.target.value)} value={userAnswers.e1q15_b6 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ _____ _____ (_____)</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>ALTER TABLE table ADD UNIQUE (field);</div>}
    </div>

    {/* Q16: CHECK Constraint - Add */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q16: Add CHECK Constraint</h3>
        <StarButton questionId="e1q16" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for adding CHECK constraint:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1-2 (Keywords):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q16_b1', e.target.value)} value={userAnswers.e1q16_b1 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q16_b3', e.target.value)} value={userAnswers.e1q16_b3 || ''}/>
          <span><b>Blank 4 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q16_b4', e.target.value)} value={userAnswers.e1q16_b4 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 5 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q16_b5', e.target.value)} value={userAnswers.e1q16_b5 || ''}/>
          <span><b>Blank 6 (Parameter):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q16_b6', e.target.value)} value={userAnswers.e1q16_b6 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ _____ _____ (_____)</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>ALTER TABLE table ADD CHECK (condition);</div>}
    </div>

    {/* Q17: WHERE - IN */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q17: WHERE Condition - IN</h3>
        <StarButton questionId="e1q17" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for WHERE IN condition:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q17_b1', e.target.value)} value={userAnswers.e1q17_b1 || ''}/>
          <span><b>Blank 2 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q17_b2', e.target.value)} value={userAnswers.e1q17_b2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3-5 (Parameters):</b></span>
          <input style={{...styles.input, width: '350px'}} onChange={(e) => onChange('e1q17_b3', e.target.value)} value={userAnswers.e1q17_b3 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Condition: <b>_____ _____ (_____, _____)</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>field IN (value1, value2)</div>}
    </div>

    {/* Q18: WHERE - BETWEEN AND */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q18: WHERE Condition - BETWEEN AND</h3>
        <StarButton questionId="e1q18" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for WHERE BETWEEN AND condition:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q18_b1', e.target.value)} value={userAnswers.e1q18_b1 || ''}/>
          <span><b>Blank 2 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q18_b2', e.target.value)} value={userAnswers.e1q18_b2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q18_b3', e.target.value)} value={userAnswers.e1q18_b3 || ''}/>
          <span><b>Blank 4 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q18_b4', e.target.value)} value={userAnswers.e1q18_b4 || ''}/>
          <span><b>Blank 5 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q18_b5', e.target.value)} value={userAnswers.e1q18_b5 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Condition: <b>_____ _____ _____ _____ _____</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>field BETWEEN value1 AND value2</div>}
    </div>

    {/* Q19: WHERE - LIKE */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q19: WHERE Condition - LIKE</h3>
        <StarButton questionId="e1q19" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for WHERE LIKE condition :</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q19_b1', e.target.value)} value={userAnswers.e1q19_b1 || ''}/>
          <span><b>Blank 2 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q19_b2', e.target.value)} value={userAnswers.e1q19_b2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter - with underscore):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q19_b3', e.target.value)} value={userAnswers.e1q19_b3 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 4 (Parameter - with percent):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q19_b4', e.target.value)} value={userAnswers.e1q19_b4 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Condition examples: <b>_____ _____ _____ or _____ _____ _____</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>field LIKE '_xxxx' or field LIKE '%xxxx'</div>}
    </div>

    {/* Q20: WHERE - IS NULL */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q20: WHERE Condition - IS NULL</h3>
        <StarButton questionId="e1q20" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for WHERE IS NULL condition:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q20_b1', e.target.value)} value={userAnswers.e1q20_b1 || ''}/>
          <span><b>Blank 2-3 (Keywords):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q20_b2', e.target.value)} value={userAnswers.e1q20_b2 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Condition: <b>_____ _____</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>field IS NULL</div>}
    </div>

    {/* Q21: WHERE - IS NOT NULL */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q21: WHERE Condition - IS NOT NULL</h3>
        <StarButton questionId="e1q21" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for WHERE IS NOT NULL condition:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1 (Parameter):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q21_b1', e.target.value)} value={userAnswers.e1q21_b1 || ''}/>
          <span><b>Blank 2-4 (Keywords):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q21_b2', e.target.value)} value={userAnswers.e1q21_b2 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Condition: <b>_____ _____</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>field IS NOT NULL</div>}
    </div>

    {/* Q22: Math Functions */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q22: Math Functions</h3>
        <StarButton questionId="e1q22" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for Math Functions:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>1. ABS function:</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q22_b1', e.target.value)} value={userAnswers.e1q22_b1 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>2. What does ABS do?:</b></span>
          <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q22_b2', e.target.value)} value={userAnswers.e1q22_b2 || ''}/>
        </div>
      </div>
      {showAnswers && <div style={styles.answerKey}>1. ABS(number) 2. Returns the absolute value of a number</div>}
    </div>

    {/* Q23: Text Functions - MID, UPPER, LOWER, TRIM */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q23: Text Functions</h3>
        <StarButton questionId="e1q23" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for Text Functions:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div>
          <p><b>1. MID Function:</b></p>
          <input style={{...styles.input, marginBottom: '8px'}} onChange={(e) => onChange('e1q23_b1', e.target.value)} value={userAnswers.e1q23_b1 || ''}/>
        </div>
        <div>
          <p><b>2. UPPER Function:</b></p>
          <input style={{...styles.input, marginBottom: '8px'}} onChange={(e) => onChange('e1q23_b2', e.target.value)} value={userAnswers.e1q23_b2 || ''}/>
        </div>
        <div>
          <p><b>3. LOWER Function:</b></p>
          <input style={{...styles.input, marginBottom: '8px'}} onChange={(e) => onChange('e1q23_b3', e.target.value)} value={userAnswers.e1q23_b3 || ''}/>
        </div>
        <div>
          <p><b>4. TRIM Function:</b></p>
          <input style={styles.input} onChange={(e) => onChange('e1q23_b4', e.target.value)} value={userAnswers.e1q23_b4 || ''}/>
        </div>
      </div>
      {showAnswers && <div style={styles.answerKey}>1. MID(string, 'start_num', 'num_of_char') 2. UPPER('abc') 3. LOWER('abc') 4. TRIM('abc')</div>}
    </div>

    {/* Q24: Date Functions */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q24: Date Functions</h3>
        <StarButton questionId="e1q24" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for Date Functions:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>1. YEAR:</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q24_b1', e.target.value)} value={userAnswers.e1q24_b1 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>2. MONTH:</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q24_b2', e.target.value)} value={userAnswers.e1q24_b2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>3. DATE:</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q24_b3', e.target.value)} value={userAnswers.e1q24_b3 || ''}/>
        </div>
      </div>
      {showAnswers && <div style={styles.answerKey}>1. YEAR() 2. MONTH() 3. DATE()</div>}
    </div>

    {/* Q25: Aggregation Functions */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q25: Aggregation Functions</h3>
        <StarButton questionId="e1q25" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for Aggregation Functions:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>1. COUNT:</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q25_b1', e.target.value)} value={userAnswers.e1q25_b1 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>2. MAX:</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q25_b2', e.target.value)} value={userAnswers.e1q25_b2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>3. MIN:</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q25_b3', e.target.value)} value={userAnswers.e1q25_b3 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>4. SUM:</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q25_b4', e.target.value)} value={userAnswers.e1q25_b4 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>5. AVG:</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q25_b5', e.target.value)} value={userAnswers.e1q25_b5 || ''}/>
        </div>
      </div>
      {showAnswers && <div style={styles.answerKey}>1. COUNT() 2. MAX() 3. MIN() 4. SUM() 5. AVG()</div>}
    </div>

    {/* Q26: CREATE VIEW */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q26: CREATE VIEW Statement</h3>
        <StarButton questionId="e1q26" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for the CREATE VIEW command:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q26_b1', e.target.value)} value={userAnswers.e1q26_b1 || ''}/>
          <span><b>Blank 2 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q26_b2', e.target.value)} value={userAnswers.e1q26_b2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q26_b3', e.target.value)} value={userAnswers.e1q26_b3 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 4 (Keyword):</b></span>
          <input style={{...styles.input, width: '120px'}} onChange={(e) => onChange('e1q26_b4', e.target.value)} value={userAnswers.e1q26_b4 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ _____ field1, field2, field3 FROM table;</b>
      </p>
      {showAnswers && <div style={styles.answerKey}>CREATE VIEW viewname AS SELECT</div>}
      
      <p style={{marginTop: '15px', marginBottom: '10px', fontWeight: 'bold'}}>List all advantages of using views:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Advantage 1:</b></span>
          <input style={{...styles.input, width: '350px'}} onChange={(e) => onChange('e1q26_a1', e.target.value)} value={userAnswers.e1q26_a1 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Advantage 2:</b></span>
          <input style={{...styles.input, width: '350px'}} onChange={(e) => onChange('e1q26_a2', e.target.value)} value={userAnswers.e1q26_a2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Advantage 3:</b></span>
          <input style={{...styles.input, width: '350px'}} onChange={(e) => onChange('e1q26_a3', e.target.value)} value={userAnswers.e1q26_a3 || ''}/>
        </div>
      </div>
      {showAnswers && <div style={styles.answerKey}>Advantages: ✓ Restrict users to access specific columns → Increase the security levels | ✓ Tables are combined to → Increase the simplicity of SQL query in retrieving the data | ✓ Increase the efficiency in frequently retrieved data</div>}
    </div>

    {/* Q27: Normalization */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q27: Normalization Forms (1NF, 2NF, 3NF)</h3>
        <StarButton questionId="e1q27" />
      </div>
      <p style={{marginBottom: '15px'}}>Define each normalization form:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '15px'}}>
        <div>
          <p style={{fontWeight: 'bold', marginBottom: '8px'}}>1NF - Define (2 requirements):</p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginLeft: '10px'}}>
            <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
              <span><b>Requirement 1:</b></span>
              <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q27_1nf_r1', e.target.value)} value={userAnswers.e1q27_1nf_r1 || ''}/>
            </div>
            <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
              <span><b>Requirement 2:</b></span>
              <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q27_1nf_r2', e.target.value)} value={userAnswers.e1q27_1nf_r2 || ''}/>
            </div>
          </div>
        </div>
        <div>
          <p style={{fontWeight: 'bold', marginBottom: '8px'}}>2NF - Define (2 requirements):</p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginLeft: '10px'}}>
            <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
              <span><b>Requirement 1:</b></span>
              <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q27_2nf_r1', e.target.value)} value={userAnswers.e1q27_2nf_r1 || ''}/>
            </div>
            <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
              <span><b>Requirement 2:</b></span>
              <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q27_2nf_r2', e.target.value)} value={userAnswers.e1q27_2nf_r2 || ''}/>
            </div>
          </div>
        </div>
        <div>
          <p style={{fontWeight: 'bold', marginBottom: '8px'}}>3NF - Define (2 requirements):</p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginLeft: '10px'}}>
            <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
              <span><b>Requirement 1:</b></span>
              <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q27_3nf_r1', e.target.value)} value={userAnswers.e1q27_3nf_r1 || ''}/>
            </div>
            <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
              <span><b>Requirement 2:</b></span>
              <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q27_3nf_r2', e.target.value)} value={userAnswers.e1q27_3nf_r2 || ''}/>
            </div>
          </div>
        </div>
      </div>
      {showAnswers && <div style={styles.answerKey}>1NF: (1) No multiple values - Each cell must contain a single value (2) No repeating attributes - Do not use multiple columns to store similar data | 2NF: (1) Must be in 1NF (2) No partial functional dependency - All non-key attributes must depend on the entire Primary Key | 3NF: (1) Must be in 2NF (2) No transitive functional dependency - Non-key attributes must not depend on other non-key attributes</div>}
    </div>

    {/* Q28: Denormalization */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q28: Denormalization - How, Benefits & Drawbacks</h3>
        <StarButton questionId="e1q28" />
      </div>
      <p style={{marginBottom: '15px'}}>Answer the following about denormalization:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '15px'}}>
        <div>
          <p style={{fontWeight: 'bold', marginBottom: '8px'}}>How to denormalize:</p>
          <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('e1q28_how', e.target.value)} value={userAnswers.e1q28_how || ''}/>
        </div>
        <div>
          <p style={{fontWeight: 'bold', marginBottom: '8px'}}>Benefits/Advantages (list 2):</p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginLeft: '10px'}}>
            <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
              <span><b>Advantage 1:</b></span>
              <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q28_adv1', e.target.value)} value={userAnswers.e1q28_adv1 || ''}/>
            </div>
            <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
              <span><b>Advantage 2:</b></span>
              <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q28_adv2', e.target.value)} value={userAnswers.e1q28_adv2 || ''}/>
            </div>
          </div>
        </div>
        <div>
          <p style={{fontWeight: 'bold', marginBottom: '8px'}}>Drawbacks/Disadvantages (list 3):</p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginLeft: '10px'}}>
            <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
              <span><b>Disadvantage 1:</b></span>
              <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q28_dis1', e.target.value)} value={userAnswers.e1q28_dis1 || ''}/>
            </div>
            <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
              <span><b>Disadvantage 2:</b></span>
              <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q28_dis2', e.target.value)} value={userAnswers.e1q28_dis2 || ''}/>
            </div>
            <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
              <span><b>Disadvantage 3:</b></span>
              <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q28_dis3', e.target.value)} value={userAnswers.e1q28_dis3 || ''}/>
            </div>
          </div>
        </div>
      </div>
      {showAnswers && <div style={styles.answerKey}>How: Combining all tables to form one table to avoid using SQL in joining tables | Benefits: ✓ Faster data retrieval | ✓ Simpler SQL statements for queries | Drawbacks: Higher risk of data inconsistency when updating (Update Anomaly) | Inability to insert new data without the data of another entity type (Insertion Anomaly) | Higher risk of data loss when deleting data of another entity type (Deletion Anomaly)</div>}
    </div>

    {/* Q29: Integrity Problems */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q29: Data Integrity Problems</h3>
        <StarButton questionId="e1q29" />
      </div>
      <p style={{marginBottom: '15px'}}>Define each type of integrity problem:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '15px'}}>
        <div>
          <p style={{fontWeight: 'bold', marginBottom: '8px'}}>Entity Integrity - Definition:</p>
          <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('e1q29_entity', e.target.value)} value={userAnswers.e1q29_entity || ''}/>
        </div>
        <div>
          <p style={{fontWeight: 'bold', marginBottom: '8px'}}>Referential Integrity - Definition:</p>
          <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('e1q29_referential', e.target.value)} value={userAnswers.e1q29_referential || ''}/>
        </div>
        <div>
          <p style={{fontWeight: 'bold', marginBottom: '8px'}}>Domain Integrity - Definition:</p>
          <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('e1q29_domain', e.target.value)} value={userAnswers.e1q29_domain || ''}/>
        </div>
      </div>
      {showAnswers && <div style={styles.answerKey}>Entity Integrity: A table violates Entity Integrity if it does not have a primary key, its primary key contains duplicated values, or its primary key contains NULL value | Referential Integrity: A table violates Referential Integrity if its foreign key contains value that cannot be found in the field it references | Domain Integrity: A table violates Domain Integrity if it contains a value that is not within its domain</div>}
    </div>

    {/* Q30: Anomalies */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q30: Database Anomalies</h3>
        <StarButton questionId="e1q30" />
      </div>
      <p style={{marginBottom: '15px'}}>Define each type of anomaly:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '15px'}}>
        <div>
          <p style={{fontWeight: 'bold', marginBottom: '8px'}}>Update Anomaly - Definition:</p>
          <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('e1q30_update', e.target.value)} value={userAnswers.e1q30_update || ''}/>
        </div>
        <div>
          <p style={{fontWeight: 'bold', marginBottom: '8px'}}>Insert Anomaly - Definition:</p>
          <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('e1q30_insert', e.target.value)} value={userAnswers.e1q30_insert || ''}/>
        </div>
        <div>
          <p style={{fontWeight: 'bold', marginBottom: '8px'}}>Delete Anomaly - Definition:</p>
          <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('e1q30_delete', e.target.value)} value={userAnswers.e1q30_delete || ''}/>
        </div>
      </div>
      {showAnswers && <div style={styles.answerKey}>Update Anomaly: Occurs when a database with data redundancy fails to maintain data consistency after an update is made | Insert Anomaly: Refer to the inability to insert data of one entity type without having the data of another entity type (Usually related to composite key) | Delete Anomaly: Refers the loss of data one entity type when deleting the data of another entity type</div>}
    </div>

    {/* Q31: Derived Attributes */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q31: Derived Attributes</h3>
        <StarButton questionId="e1q31" />
      </div>
      <p style={{marginBottom: '15px'}}>Answer the following about derived attributes:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '15px'}}>
        <div>
          <p style={{fontWeight: 'bold', marginBottom: '8px'}}>Definition of Derived Attribute:</p>
          <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('e1q31_def', e.target.value)} value={userAnswers.e1q31_def || ''}/>
        </div>
        <div>
          <p style={{fontWeight: 'bold', marginBottom: '8px'}}>Advantage of Derived Attributes:</p>
          <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('e1q31_adv', e.target.value)} value={userAnswers.e1q31_adv || ''}/>
        </div>
        <div>
          <p style={{fontWeight: 'bold', marginBottom: '8px'}}>Disadvantage(s) of Derived Attributes (list 2):</p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginLeft: '10px'}}>
            <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
              <span><b>Disadvantage 1:</b></span>
              <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q31_dis1', e.target.value)} value={userAnswers.e1q31_dis1 || ''}/>
            </div>
            <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
              <span><b>Disadvantage 2:</b></span>
              <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q31_dis2', e.target.value)} value={userAnswers.e1q31_dis2 || ''}/>
            </div>
          </div>
        </div>
      </div>
      {showAnswers && <div style={styles.answerKey}>Definition: Derived Attribute is a data attribute (column) that is not physically stored in the database but is calculated or generated based on other attributes | Advantage: ✓ Ensures data consistency | Disadvantages: More computation resources are used to calculate/updating the field values | It requires more storage space</div>}
    </div>

    {/* Q32: Rollback */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q32: Rollback</h3>
        <StarButton questionId="e1q32" />
      </div>
      <p style={{marginBottom: '10px'}}>Define Rollback:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('e1q32_def', e.target.value)} value={userAnswers.e1q32_def || ''}/>
      </div>
      {showAnswers && <div style={styles.answerKey}>Rollback: Restored/Revert/Recovery to the previous state of the system before the operation</div>}
    </div>

    {/* Q33: Indexing */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q33: Indexing</h3>
        <StarButton questionId="e1q33" />
      </div>
      <p style={{marginBottom: '10px'}}>Fill in the blanks for the CREATE INDEX command:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 1 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q33_b1', e.target.value)} value={userAnswers.e1q33_b1 || ''}/>
          <span><b>Blank 2 (Keyword):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q33_b2', e.target.value)} value={userAnswers.e1q33_b2 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Blank 3 (Parameter):</b></span>
          <input style={{...styles.input, width: '150px'}} onChange={(e) => onChange('e1q33_b3', e.target.value)} value={userAnswers.e1q33_b3 || ''}/>
        </div>
      </div>
      <p style={{backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '6px', fontSize: '0.9rem'}}>
        Command: <b>_____ _____ _____ _____ table (field1, field2)</b>
      </p>
      
      <p style={{marginTop: '15px', marginBottom: '10px', fontWeight: 'bold'}}>Advantages of Indexing (list 1):</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '15px'}}>
        <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('e1q33_adv', e.target.value)} value={userAnswers.e1q33_adv || ''}/>
      </div>

      <p style={{marginBottom: '10px', fontWeight: 'bold'}}>Disadvantages of Indexing (list 2):</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '15px'}}>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Disadvantage 1:</b></span>
          <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q33_dis1', e.target.value)} value={userAnswers.e1q33_dis1 || ''}/>
        </div>
        <div style={{display: 'flex', gap: '5px', alignItems: 'center', flexWrap: 'wrap'}}>
          <span><b>Disadvantage 2:</b></span>
          <input style={{...styles.input, width: '300px'}} onChange={(e) => onChange('e1q33_dis2', e.target.value)} value={userAnswers.e1q33_dis2 || ''}/>
        </div>
      </div>

      <p style={{marginBottom: '10px', fontWeight: 'bold'}}>Reasons for not indexing ALL fields:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '15px'}}>
        <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('e1q33_reasons', e.target.value)} value={userAnswers.e1q33_reasons || ''}/>
      </div>

      {showAnswers && <div style={styles.answerKey}>Command: CREATE INDEX index_name ON table (field1, field2) | Advantage: ✓ Increase the searching speed of a record using the indexed field | Disadvantages: Increase the overheads/speed in updating/inserting the records because the table is required to index again | Increase the storage space in storing the index | Reasons: Consume too much storage space and slower the speed in inserting/updating the records in a table</div>}
    </div>

    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

export default ICT_E_1_Ch1;
