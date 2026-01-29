import { ArrowLeft } from 'lucide-react';

const Chinese_01 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => {
  const getInputBgColor = (questionId, answerIndex) => {
    const answerId = `${questionId}_a${answerIndex}`;
    const userAnswer = userAnswers[answerId];
    if (!showAnswers) return '#ffffff';
    if (!userAnswer || userAnswer.trim() === '') return '#fee2e2';
    return '#dcfce7';
  };

  return (
    <div>
      <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingBottom: '15px', borderBottom: '3px solid #dc2626'}}>第一部分：語譯</h3>

    {/* Q1 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1</h3>
        <StarButton questionId="ch01_q1" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 先帝創業未半，而「中道」「崩殂」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「中道」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q1', 1)}} onChange={(e) => onChange('ch01_q1_a1', e.target.value)} value={userAnswers.ch01_q1_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「崩殂」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q1', 2)}} onChange={(e) => onChange('ch01_q1_a2', e.target.value)} value={userAnswers.ch01_q1_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「中道」：半途<br/>
          「崩殂」：死
        </div>
      )}
    </div>

    {/* Q2 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2</h3>
        <StarButton questionId="ch01_q2" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 益州「疲弊」，此「誠」危急存亡之「秋」也</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「疲弊」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q2', 1)}} onChange={(e) => onChange('ch01_q2_a1', e.target.value)} value={userAnswers.ch01_q2_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「誠」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q2', 2)}} onChange={(e) => onChange('ch01_q2_a2', e.target.value)} value={userAnswers.ch01_q2_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「秋」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q2', 3)}} onChange={(e) => onChange('ch01_q2_a3', e.target.value)} value={userAnswers.ch01_q2_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「疲弊」：人力物力困乏<br/>
          「誠」：實在／的確<br/>
          「秋」：時刻／關頭
        </div>
      )}
    </div>

    {/* Q3 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3</h3>
        <StarButton questionId="ch01_q3" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「然」侍衛之臣，不「懈」於「內」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「然」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q3', 1)}} onChange={(e) => onChange('ch01_q3_a1', e.target.value)} value={userAnswers.ch01_q3_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「懈」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q3', 2)}} onChange={(e) => onChange('ch01_q3_a2', e.target.value)} value={userAnswers.ch01_q3_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「內」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q3', 3)}} onChange={(e) => onChange('ch01_q3_a3', e.target.value)} value={userAnswers.ch01_q3_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「然」：然而<br/>
          「懈」：鬆懈<br/>
          「內」：宮廷之內
        </div>
      )}
    </div>

    {/* Q4 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4</h3>
        <StarButton questionId="ch01_q4" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 忠志之士，「忘身」於「外」者</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「忘身」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q4', 1)}} onChange={(e) => onChange('ch01_q4_a1', e.target.value)} value={userAnswers.ch01_q4_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「外」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q4', 2)}} onChange={(e) => onChange('ch01_q4_a2', e.target.value)} value={userAnswers.ch01_q4_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「忘身」：捨身／奮不顧身<br/>
          「外」：朝廷之外／戰場上
        </div>
      )}
    </div>

    {/* Q5 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5</h3>
        <StarButton questionId="ch01_q5" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「蓋」「追」先帝之「殊遇」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「蓋」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q5', 1)}} onChange={(e) => onChange('ch01_q5_a1', e.target.value)} value={userAnswers.ch01_q5_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「追」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q5', 2)}} onChange={(e) => onChange('ch01_q5_a2', e.target.value)} value={userAnswers.ch01_q5_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「殊遇」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q5', 3)}} onChange={(e) => onChange('ch01_q5_a3', e.target.value)} value={userAnswers.ch01_q5_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「蓋」：原來是／因為<br/>
          「追」：追念<br/>
          「殊遇」：特別優厚的恩遇
        </div>
      )}
    </div>

    {/* Q6 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6</h3>
        <StarButton questionId="ch01_q6" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「誠」「宜」「開張聖聽」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「誠」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q6', 1)}} onChange={(e) => onChange('ch01_q6_a1', e.target.value)} value={userAnswers.ch01_q6_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「宜」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q6', 2)}} onChange={(e) => onChange('ch01_q6_a2', e.target.value)} value={userAnswers.ch01_q6_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「開張聖聽」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q6', 3)}} onChange={(e) => onChange('ch01_q6_a3', e.target.value)} value={userAnswers.ch01_q6_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「誠」：確實<br/>
          「宜」：應該<br/>
          「開張聖聽」：擴大聖明的聽聞（廣開言路）
        </div>
      )}
    </div>

    {/* Q7 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7</h3>
        <StarButton questionId="ch01_q7" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 以「光」先帝「遺德」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「光」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q7', 1)}} onChange={(e) => onChange('ch01_q7_a1', e.target.value)} value={userAnswers.ch01_q7_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「遺德」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q7', 2)}} onChange={(e) => onChange('ch01_q7_a2', e.target.value)} value={userAnswers.ch01_q7_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「光」：發揚光大<br/>
          「遺德」：遺留下來的美德
        </div>
      )}
    </div>

    {/* Q8 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8</h3>
        <StarButton questionId="ch01_q8" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「恢弘」志士之氣</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「恢弘」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q8', 1)}} onChange={(e) => onChange('ch01_q8_a1', e.target.value)} value={userAnswers.ch01_q8_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「恢弘」：擴大／發揚
        </div>
      )}
    </div>

    {/* Q9 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q9</h3>
        <StarButton questionId="ch01_q9" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 不宜「妄自菲薄」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「妄自菲薄」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q9', 1)}} onChange={(e) => onChange('ch01_q9_a1', e.target.value)} value={userAnswers.ch01_q9_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「妄自菲薄」：過分看輕自己
        </div>
      )}
    </div>

    {/* Q10 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q10</h3>
        <StarButton questionId="ch01_q10" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「引喻失義」，以「塞」忠諫之路也</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「引喻失義」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q10', 1)}} onChange={(e) => onChange('ch01_q10_a1', e.target.value)} value={userAnswers.ch01_q10_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「塞」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q10', 2)}} onChange={(e) => onChange('ch01_q10_a2', e.target.value)} value={userAnswers.ch01_q10_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「引喻失義」：引用比喻不恰當（說話不合義理）<br/>
          「塞」：堵塞
        </div>
      )}
    </div>

    {/* Q11 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q11</h3>
        <StarButton questionId="ch01_q11" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 宮中、府中，「俱」為一體</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「俱」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q11', 1)}} onChange={(e) => onChange('ch01_q11_a1', e.target.value)} value={userAnswers.ch01_q11_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「俱」：都／全
        </div>
      )}
    </div>

    {/* Q12 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q12</h3>
        <StarButton questionId="ch01_q12" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「陟罰臧否」，不宜「異同」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「陟罰臧否」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q12', 1)}} onChange={(e) => onChange('ch01_q12_a1', e.target.value)} value={userAnswers.ch01_q12_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「異同」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q12', 2)}} onChange={(e) => onChange('ch01_q12_a2', e.target.value)} value={userAnswers.ch01_q12_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「陟罰臧否」：升遷處罰、表揚批評（賞善罰惡）<br/>
          「異同」：不同（這裏指標準不同）
        </div>
      )}
    </div>

    {/* Q13 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q13</h3>
        <StarButton questionId="ch01_q13" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 若有「作姦」、「犯科」及為忠善者</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「作姦」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q13', 1)}} onChange={(e) => onChange('ch01_q13_a1', e.target.value)} value={userAnswers.ch01_q13_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「犯科」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q13', 2)}} onChange={(e) => onChange('ch01_q13_a2', e.target.value)} value={userAnswers.ch01_q13_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「作姦」：做壞事<br/>
          「犯科」：觸犯法律
        </div>
      )}
    </div>

    {/* Q14 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q14</h3>
        <StarButton questionId="ch01_q14" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 宜付「有司」，「論」其「刑賞」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「有司」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q14', 1)}} onChange={(e) => onChange('ch01_q14_a1', e.target.value)} value={userAnswers.ch01_q14_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「論」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q14', 2)}} onChange={(e) => onChange('ch01_q14_a2', e.target.value)} value={userAnswers.ch01_q14_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「刑賞」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q14', 3)}} onChange={(e) => onChange('ch01_q14_a3', e.target.value)} value={userAnswers.ch01_q14_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「有司」：主管的官吏<br/>
          「論」：判定<br/>
          「刑賞」：受罰或獲賞
        </div>
      )}
    </div>

    {/* Q15 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q15</h3>
        <StarButton questionId="ch01_q15" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 以「昭」陛下「平明」之治</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「昭」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q15', 1)}} onChange={(e) => onChange('ch01_q15_a1', e.target.value)} value={userAnswers.ch01_q15_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「平明」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q15', 2)}} onChange={(e) => onChange('ch01_q15_a2', e.target.value)} value={userAnswers.ch01_q15_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「昭」：顯示／彰顯<br/>
          「平明」：公正嚴明
        </div>
      )}
    </div>

    {/* Q16 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q16</h3>
        <StarButton questionId="ch01_q16" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 不宜「偏私」，使內外「異法」也</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「偏私」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q16', 1)}} onChange={(e) => onChange('ch01_q16_a1', e.target.value)} value={userAnswers.ch01_q16_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「異法」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q16', 2)}} onChange={(e) => onChange('ch01_q16_a2', e.target.value)} value={userAnswers.ch01_q16_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「偏私」：偏袒徇私<br/>
          「異法」：法規不同
        </div>
      )}
    </div>

    {/* Q17 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q17</h3>
        <StarButton questionId="ch01_q17" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 此皆「良實」，「志慮」「忠純」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「良實」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q17', 1)}} onChange={(e) => onChange('ch01_q17_a1', e.target.value)} value={userAnswers.ch01_q17_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「志慮」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q17', 2)}} onChange={(e) => onChange('ch01_q17_a2', e.target.value)} value={userAnswers.ch01_q17_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「忠純」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q17', 3)}} onChange={(e) => onChange('ch01_q17_a3', e.target.value)} value={userAnswers.ch01_q17_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「良實」：善良誠實的人<br/>
          「志慮」：志向思慮<br/>
          「忠純」：忠誠純正
        </div>
      )}
    </div>

    {/* Q18 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q18</h3>
        <StarButton questionId="ch01_q18" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 是以先帝「簡拔」以「遺」陛下</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「簡拔」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q18', 1)}} onChange={(e) => onChange('ch01_q18_a1', e.target.value)} value={userAnswers.ch01_q18_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「遺」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q18', 2)}} onChange={(e) => onChange('ch01_q18_a2', e.target.value)} value={userAnswers.ch01_q18_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「簡拔」：選拔<br/>
          「遺」：給予／留給
        </div>
      )}
    </div>

    {/* Q19 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q19</h3>
        <StarButton questionId="ch01_q19" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「悉」以「諮」之</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「悉」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q19', 1)}} onChange={(e) => onChange('ch01_q19_a1', e.target.value)} value={userAnswers.ch01_q19_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「諮」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q19', 2)}} onChange={(e) => onChange('ch01_q19_a2', e.target.value)} value={userAnswers.ch01_q19_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「悉」：全部<br/>
          「諮」：諮詢／商議
        </div>
      )}
    </div>

    {/* Q20 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q20</h3>
        <StarButton questionId="ch01_q20" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 必能「裨補」「闕漏」，有所「廣益」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「裨補」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q20_a1', e.target.value)} value={userAnswers.ch01_q20_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「闕漏」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q20_a2', e.target.value)} value={userAnswers.ch01_q20_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「廣益」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q20_a3', e.target.value)} value={userAnswers.ch01_q20_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「裨補」：彌補<br/>
          「闕漏」：缺失／遺漏<br/>
          「廣益」：廣泛的益處
        </div>
      )}
    </div>

    {/* Q21 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q21</h3>
        <StarButton questionId="ch01_q21" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 性行「淑均」，「曉暢」軍事</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「淑均」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q21_a1', e.target.value)} value={userAnswers.ch01_q21_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「曉暢」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q21_a2', e.target.value)} value={userAnswers.ch01_q21_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「淑均」：善良公正<br/>
          「曉暢」：通曉熟練
        </div>
      )}
    </div>

    {/* Q22 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q22</h3>
        <StarButton questionId="ch01_q22" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 是以「眾議」「舉」寵為「督」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「眾議」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q22', 1)}} onChange={(e) => onChange('ch01_q22_a1', e.target.value)} value={userAnswers.ch01_q22_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「舉」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q22', 2)}} onChange={(e) => onChange('ch01_q22_a2', e.target.value)} value={userAnswers.ch01_q22_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「督」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q22', 3)}} onChange={(e) => onChange('ch01_q22_a3', e.target.value)} value={userAnswers.ch01_q22_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「眾議」：大家商議<br/>
          「舉」：推舉<br/>
          「督」：都督（統帥）
        </div>
      )}
    </div>

    {/* Q23 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q23</h3>
        <StarButton questionId="ch01_q23" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 必能使「行陣」和睦，「優劣得所」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「行陣」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q23', 1)}} onChange={(e) => onChange('ch01_q23_a1', e.target.value)} value={userAnswers.ch01_q23_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「優劣得所」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q23', 2)}} onChange={(e) => onChange('ch01_q23_a2', e.target.value)} value={userAnswers.ch01_q23_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「行陣」：軍隊／行列<br/>
          「優劣得所」：才能高與低的人都得到適當安排
        </div>
      )}
    </div>

    {/* Q24 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q24</h3>
        <StarButton questionId="ch01_q24" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 此先漢所以「興隆」也</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「興隆」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q24', 1)}} onChange={(e) => onChange('ch01_q24_a1', e.target.value)} value={userAnswers.ch01_q24_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「興隆」：興盛
        </div>
      )}
    </div>

    {/* Q25 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q25</h3>
        <StarButton questionId="ch01_q25" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 此後漢所以「傾頹」也</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「傾頹」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q25', 1)}} onChange={(e) => onChange('ch01_q25_a1', e.target.value)} value={userAnswers.ch01_q25_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「傾頹」：傾覆衰敗
        </div>
      )}
    </div>

    {/* Q26 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q26</h3>
        <StarButton questionId="ch01_q26" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 未嘗不「歎息」「痛恨」於桓、靈也</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「歎息」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q26', 1)}} onChange={(e) => onChange('ch01_q26_a1', e.target.value)} value={userAnswers.ch01_q26_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「痛恨」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q26', 2)}} onChange={(e) => onChange('ch01_q26_a2', e.target.value)} value={userAnswers.ch01_q26_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「歎息」：感歎惋惜<br/>
          「痛恨」：痛心遺憾
        </div>
      )}
    </div>

    {/* Q27 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q27</h3>
        <StarButton questionId="ch01_q27" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 此「悉」「貞良」「死節」之臣</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「悉」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q27_a1', e.target.value)} value={userAnswers.ch01_q27_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「貞良」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q27_a2', e.target.value)} value={userAnswers.ch01_q27_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「死節」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q27_a3', e.target.value)} value={userAnswers.ch01_q27_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「悉」：全／都<br/>
          「貞良」：堅貞賢良<br/>
          「死節」：能夠為國盡節效死
        </div>
      )}
    </div>

    {/* Q28 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q28</h3>
        <StarButton questionId="ch01_q28" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 則漢室之「隆」，可「計日」而待也</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「隆」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q28', 1)}} onChange={(e) => onChange('ch01_q28_a1', e.target.value)} value={userAnswers.ch01_q28_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「計日」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q28', 2)}} onChange={(e) => onChange('ch01_q28_a2', e.target.value)} value={userAnswers.ch01_q28_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「隆」：興盛<br/>
          「計日」：數着日子（指日可待／時間不遠）
        </div>
      )}
    </div>

    {/* Q29 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q29</h3>
        <StarButton questionId="ch01_q29" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 臣本「布衣」，「躬」耕於南陽</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「布衣」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q29_a1', e.target.value)} value={userAnswers.ch01_q29_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「躬」：</p>
      <input style={styles.input} onChange={(e) => onChange('ch01_q29_a2', e.target.value)} value={userAnswers.ch01_q29_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「布衣」：平民（借代）<br/>
          「躬」：親自
        </div>
      )}
    </div>

    {/* Q30 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q30</h3>
        <StarButton questionId="ch01_q30" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「苟全」性命於亂世</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「苟全」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q30', 1)}} onChange={(e) => onChange('ch01_q30_a1', e.target.value)} value={userAnswers.ch01_q30_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「苟全」：苟且保全
        </div>
      )}
    </div>

    {/* Q31 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q31</h3>
        <StarButton questionId="ch01_q31" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 不求「聞達」於諸侯</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「聞達」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q31', 1)}} onChange={(e) => onChange('ch01_q31_a1', e.target.value)} value={userAnswers.ch01_q31_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「聞達」：顯達揚名
        </div>
      )}
    </div>

    {/* Q32 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q32</h3>
        <StarButton questionId="ch01_q32" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 先帝不以臣「卑鄙」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「卑鄙」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q32', 1)}} onChange={(e) => onChange('ch01_q32_a1', e.target.value)} value={userAnswers.ch01_q32_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「卑鄙」：身分低微，見識淺陋（古義）
        </div>
      )}
    </div>

    {/* Q33 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q33</h3>
        <StarButton questionId="ch01_q33" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「猥」自「枉屈」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「猥」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q33', 1)}} onChange={(e) => onChange('ch01_q33_a1', e.target.value)} value={userAnswers.ch01_q33_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「枉屈」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q33', 2)}} onChange={(e) => onChange('ch01_q33_a2', e.target.value)} value={userAnswers.ch01_q33_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「猥」：降低身分（謙詞）<br/>
          「枉屈」：委屈
        </div>
      )}
    </div>

    {/* Q34 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q34</h3>
        <StarButton questionId="ch01_q34" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 遂「許」先帝以「驅馳」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「許」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q34', 1)}} onChange={(e) => onChange('ch01_q34_a1', e.target.value)} value={userAnswers.ch01_q34_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「驅馳」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q34', 2)}} onChange={(e) => onChange('ch01_q34_a2', e.target.value)} value={userAnswers.ch01_q34_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「許」：答應<br/>
          「驅馳」：奔走效勞
        </div>
      )}
    </div>

    {/* Q35 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q35</h3>
        <StarButton questionId="ch01_q35" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 後「值」「傾覆」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「值」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q35', 1)}} onChange={(e) => onChange('ch01_q35_a1', e.target.value)} value={userAnswers.ch01_q35_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「傾覆」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q35', 2)}} onChange={(e) => onChange('ch01_q35_a2', e.target.value)} value={userAnswers.ch01_q35_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「值」：遇上<br/>
          「傾覆」：兵敗
        </div>
      )}
    </div>

    {/* Q36 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q36</h3>
        <StarButton questionId="ch01_q36" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「爾來」二十有一年矣</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「爾來」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q36', 1)}} onChange={(e) => onChange('ch01_q36_a1', e.target.value)} value={userAnswers.ch01_q36_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「爾來」：從那時以來
        </div>
      )}
    </div>

    {/* Q37 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q37</h3>
        <StarButton questionId="ch01_q37" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「夙夜」憂歎</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「夙夜」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q37', 1)}} onChange={(e) => onChange('ch01_q37_a1', e.target.value)} value={userAnswers.ch01_q37_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「夙夜」：早晚／日夜
        </div>
      )}
    </div>

    {/* Q38 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q38</h3>
        <StarButton questionId="ch01_q38" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 恐託付不「效」，以「傷」先帝之明</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「效」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q38', 1)}} onChange={(e) => onChange('ch01_q38_a1', e.target.value)} value={userAnswers.ch01_q38_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「傷」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q38', 2)}} onChange={(e) => onChange('ch01_q38_a2', e.target.value)} value={userAnswers.ch01_q38_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「明」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q38', 3)}} onChange={(e) => onChange('ch01_q38_a3', e.target.value)} value={userAnswers.ch01_q38_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「效」：奏效／成功<br/>
          「傷」：損害
          「明」：明智
        </div>
      )}
    </div>

    {/* Q39 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q39</h3>
        <StarButton questionId="ch01_q39" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 故五月渡瀘，深入「不毛」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「不毛」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q39', 1)}} onChange={(e) => onChange('ch01_q39_a1', e.target.value)} value={userAnswers.ch01_q39_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「不毛」：不長草木（荒涼）的地方
        </div>
      )}
    </div>

    {/* Q40 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q40</h3>
        <StarButton questionId="ch01_q40" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「庶」「竭」「駑鈍」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「庶」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q40', 1)}} onChange={(e) => onChange('ch01_q40_a1', e.target.value)} value={userAnswers.ch01_q40_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「竭」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q40', 2)}} onChange={(e) => onChange('ch01_q40_a2', e.target.value)} value={userAnswers.ch01_q40_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「駑鈍」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q40', 3)}} onChange={(e) => onChange('ch01_q40_a3', e.target.value)} value={userAnswers.ch01_q40_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「庶」：希望<br/>
          「竭」：用盡<br/>
          「駑鈍」：低下的才能（謙詞）
        </div>
      )}
    </div>

    {/* Q41 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q41</h3>
        <StarButton questionId="ch01_q41" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「攘除」姦凶</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「攘除」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q41', 1)}} onChange={(e) => onChange('ch01_q41_a1', e.target.value)} value={userAnswers.ch01_q41_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「攘除」：剷除／排除
        </div>
      )}
    </div>

    {/* Q42 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q42</h3>
        <StarButton questionId="ch01_q42" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 至於「斟酌」「損益」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「斟酌」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q42', 1)}} onChange={(e) => onChange('ch01_q42_a1', e.target.value)} value={userAnswers.ch01_q42_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「損益」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q42', 2)}} onChange={(e) => onChange('ch01_q42_a2', e.target.value)} value={userAnswers.ch01_q42_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「斟酌」：反覆考慮<br/>
          「損益」：減少與增加（這裏指興利除弊）
        </div>
      )}
    </div>

    {/* Q43 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q43</h3>
        <StarButton questionId="ch01_q43" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 願陛下「託」臣以討賊興復之「效」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「託」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q43', 1)}} onChange={(e) => onChange('ch01_q43_a1', e.target.value)} value={userAnswers.ch01_q43_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「效」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q43', 2)}} onChange={(e) => onChange('ch01_q43_a2', e.target.value)} value={userAnswers.ch01_q43_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「託」：委託<br/>
          「效」：任務／責任
        </div>
      )}
    </div>

    {/* Q44 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q44</h3>
        <StarButton questionId="ch01_q44" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 若無「興德」之言</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「興德」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q44', 1)}} onChange={(e) => onChange('ch01_q44_a1', e.target.value)} value={userAnswers.ch01_q44_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「興德」：發揚聖德
        </div>
      )}
    </div>

    {/* Q45 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q45</h3>
        <StarButton questionId="ch01_q45" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 則責攸之......之「慢」，以「彰」其「咎」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「慢」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q45', 1)}} onChange={(e) => onChange('ch01_q45_a1', e.target.value)} value={userAnswers.ch01_q45_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「彰」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q45', 2)}} onChange={(e) => onChange('ch01_q45_a2', e.target.value)} value={userAnswers.ch01_q45_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「咎」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q45', 3)}} onChange={(e) => onChange('ch01_q45_a3', e.target.value)} value={userAnswers.ch01_q45_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「慢」：怠慢<br/>
          「彰」：揭示<br/>
          「咎」：過失
        </div>
      )}
    </div>

    {/* Q46 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q46</h3>
        <StarButton questionId="ch01_q46" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 陛下亦宜「自謀」，以「諮諏」「善道」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「自謀」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q46', 1)}} onChange={(e) => onChange('ch01_q46_a1', e.target.value)} value={userAnswers.ch01_q46_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「諮諏」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q46', 2)}} onChange={(e) => onChange('ch01_q46_a2', e.target.value)} value={userAnswers.ch01_q46_a2 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「善道」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q46', 3)}} onChange={(e) => onChange('ch01_q46_a3', e.target.value)} value={userAnswers.ch01_q46_a3 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「自謀」：自己打算<br/>
          「諮諏」：詢問<br/>
          「善道」：治國的好辦法
        </div>
      )}
    </div>

    {/* Q47 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q47</h3>
        <StarButton questionId="ch01_q47" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「察納」「雅言」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「察納」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q47', 1)}} onChange={(e) => onChange('ch01_q47_a1', e.target.value)} value={userAnswers.ch01_q47_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「雅言」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q47', 2)}} onChange={(e) => onChange('ch01_q47_a2', e.target.value)} value={userAnswers.ch01_q47_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「察納」：明察接納<br/>
          「雅言」：正直合理的言論
        </div>
      )}
    </div>

    {/* Q48 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q48</h3>
        <StarButton questionId="ch01_q48" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 臨「表」「涕零」</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「表」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q48', 1)}} onChange={(e) => onChange('ch01_q48_a1', e.target.value)} value={userAnswers.ch01_q48_a1 || ''} placeholder="輸入翻譯..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>請翻譯「涕零」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch01_q48', 2)}} onChange={(e) => onChange('ch01_q48_a2', e.target.value)} value={userAnswers.ch01_q48_a2 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「表」：奏章<br/>
          「涕零」：眼淚落下來
        </div>
      )}
    </div>
    

    <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingBottom: '15px', borderBottom: '3px solid #dc2626', marginTop: '50px'}}>第二部分：問答</h3>

    {/* Q&A Question 1: Analyzing the Situation */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q1：形勢分析</h3>
        <StarButton questionId="ch01_qa1" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>諸葛亮在出師表開首如何分析蜀漢面臨的有利及不利形勢？試引述原文，各說明其含義，並且指出其分析形勢的三個目的。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>不利形勢（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa1_a1', e.target.value)} value={userAnswers.ch01_qa1_a1 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>不利形勢的含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa1_a2', e.target.value)} value={userAnswers.ch01_qa1_a2 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>有利形勢（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa1_a3', e.target.value)} value={userAnswers.ch01_qa1_a3 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>有利形勢的含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa1_a4', e.target.value)} value={userAnswers.ch01_qa1_a4 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>分析形勢的三個目的：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa1_a5', e.target.value)} value={userAnswers.ch01_qa1_a5 || ''} placeholder="說明三個目的..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>不利形勢：</b>「先帝創業未半而中道崩殂，今天下三分，益州疲弊，此誠危急存亡之秋也」<br/>
          含義：先帝創業未成便去世，群龍無首；天下三分，蜀漢最弱小，受魏吳威脅；蜀漢長年征戰，國力困乏<br/>
          <b>有利形勢：</b>「然侍衛之臣不懈於內，忠志之士忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。」<br/>
          含義：朝廷在內不懈怠，軍士奮勇作戰；朝廷和軍民都因爲追念先帝特殊的恩遇，而想要報答在後主的身上<br/>
          <b>三個目的：</b>（1）激勵後主，使其發奮圖強，繼承先業，復興漢室；（2）強調蜀漢形勢危急，使後主加以警惕；（3）表明軍民不忘先帝恩德，對後主忠心，因此仍有希望
        </div>
      )}
    </div>

    {/* Q&A Question 2: Advice on Different Aspects */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q2：納諫內容</h3>
        <StarButton questionId="ch01_qa2" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>諸葛亮對後主提出了哪些「宜」和「不宜」的建議？試就納諫、賞罰、用人方面，引述原文，各說明其含義。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>納諫方面「宜」（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a1', e.target.value)} value={userAnswers.ch01_qa2_a1 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a2', e.target.value)} value={userAnswers.ch01_qa2_a2 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>納諫方面「不宜」（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a3', e.target.value)} value={userAnswers.ch01_qa2_a3 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義及後果：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a4', e.target.value)} value={userAnswers.ch01_qa2_a4 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>賞罰方面「宜」（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a5', e.target.value)} value={userAnswers.ch01_qa2_a5 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a6', e.target.value)} value={userAnswers.ch01_qa2_a6 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>賞罰方面「不宜」（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a7', e.target.value)} value={userAnswers.ch01_qa2_a7 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義及後果：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a8', e.target.value)} value={userAnswers.ch01_qa2_a8 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>用人方面「宜」 - 文臣：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a9', e.target.value)} value={userAnswers.ch01_qa2_a9 || ''} placeholder="人選名稱..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>文臣的性格特徵與選用原因（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a9b', e.target.value)} value={userAnswers.ch01_qa2_a9b || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>文臣的效果與含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a9c', e.target.value)} value={userAnswers.ch01_qa2_a9c || ''} placeholder="解釋效果與含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>用人方面「宜」 - 武將：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a10', e.target.value)} value={userAnswers.ch01_qa2_a10 || ''} placeholder="人選名稱..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>武將的性格特徵與選用原因（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a10b', e.target.value)} value={userAnswers.ch01_qa2_a10b || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>武將的效果與含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa2_a10c', e.target.value)} value={userAnswers.ch01_qa2_a10c || ''} placeholder="解釋效果與含義..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>納諫方面「宜」：</b>「諮諏善道」、「誠宜開張聖聽，以光先帝遺德，恢弘志士之氣」<br/>
          含義：諮詢並接納良策，廣開言路，以發揚先帝遺留的美德，激勵志士的精神<br/>
          <b>納諫方面「不宜」：</b>「妄自菲薄，引喻失義，以塞忠諫之路也」<br/>
          含義及後果：過分看輕自己或說不恰當的話，以塞忠諫之路，阻礙忠良進言<br/>
          <b>賞罰方面「宜」：</b>「宮中府中，俱為一體，陟罰臧否，不宜異同，若有作奸犯科及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治」<br/>
          含義：宮中和府中要統一賞罰標準，對於為非作歹或盡忠行善的人，應交給負責官吏討論其刑賞，以彰顯後主公正嚴明的治理<br/>
          <b>賞罰方面「不宜」：</b>「不宜偏私，使內外異法也」<br/>
          含義及後果：不應偏袒徇私，否則會使宮內宮外有不同的賞罰制度<br/>
          <br/>
          <b>用人方面「宜」 - 文臣：</b><br/>
          <b>人選：</b>侍中、侍郎郭攸之、費禕、董允等<br/>
          <b>性格特徵與選用原因：</b>「此皆良實，志慮忠純，是以先帝簡拔以遺陛下」<br/>
          含義：他們都是善良誠實、志向心思純正的人，所以先帝就挑選了他們留給後主<br/>
          <b>效果與含義：</b>「宮中之事，事無大小，悉以咨之，然後施行，必能裨補闕漏，有所廣益」<br/>
          含義：宮廷內的所有事務，無論大小，都諮詢他們，然後再實施，這樣一定能夠彌補缺失，有所增益。說明了任用賢臣可以完善施政、增進國家利益<br/>
          <br/>
          <b>用人方面「宜」 - 武將：</b><br/>
          <b>人選：</b>將軍向寵<br/>
          <b>性格特徵與選用原因：</b>「向寵，性行淑均，曉暢軍事，試用於昔日，先帝稱之曰『能』，是以眾議舉寵為督」<br/>
          含義：向寵為人善良公正，通曉軍事，之前試用過他，先帝評價他有能力，所以大家商議推舉他為軍隊統帥<br/>
          <b>效果與含義：</b>「營中之事，悉以咨之，必能使行陣和睦，優劣得所」<br/>
          含義：軍中的事務都諮詢他，一定能使軍隊團結和睦，才能高與低的人都能得到恰當的安排。說明了任用適當的軍事人才可以使軍隊有效運作、人盡其才
        </div>
      )}
    </div>

    {/* Q&A Question 3: Learning from History */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q3：以古鑑今</h3>
        <StarButton questionId="ch01_qa3" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>諸葛亮如何利用西漢與東漢的例子來勸說後主？試引述相關原文並解釋其作用。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>西漢的原文及含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa3_a1', e.target.value)} value={userAnswers.ch01_qa3_a1 || ''} placeholder="引述原文及含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>東漢的原文及含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa3_a2', e.target.value)} value={userAnswers.ch01_qa3_a2 || ''} placeholder="引述原文及含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>這個對比的作用：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa3_a3', e.target.value)} value={userAnswers.ch01_qa3_a3 || ''} placeholder="說明作用..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>西漢：</b>「親賢臣，遠小人，此先漢所以興隆也」<br/>
          含義：西漢君主親近賢臣，遠離小人，因此國家興盛<br/>
          <b>東漢：</b>「親小人，遠賢臣，此後漢所以傾頹也」<br/>
          含義：東漢君主親信小人，遠離賢臣，因此國家衰敗<br/>
          <b>作用：</b>通過正反對比，以西漢君主親賢臣遠小人致國家興隆，對比東漢君主親小人遠賢臣致國家傾頹，突出兩者的利弊損益的影響，強調要親賢臣遠小人，以免重蹈覆轍
        </div>
      )}
    </div>

    {/* Q&A Question 4: Personal Commitment */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q4：真情述志</h3>
        <StarButton questionId="ch01_qa4" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>諸葛亮如何表述先帝和他的感情？試引用原文解釋，並且指出他自述身世和志向的作用。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>先帝的知遇之恩（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa4_a1', e.target.value)} value={userAnswers.ch01_qa4_a1 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa4_a2', e.target.value)} value={userAnswers.ch01_qa4_a2 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>諸葛亮對先帝的感激與責任（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa4_a3', e.target.value)} value={userAnswers.ch01_qa4_a3 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>自述身世和志向的作用：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa4_a4', e.target.value)} value={userAnswers.ch01_qa4_a4 || ''} placeholder="說明作用..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>先帝知遇之恩：</b>「臣本布衣，躬耕於南陽，苟全性命於亂世，不求聞達於諸侯。先帝不以臣卑鄙，猥自枉屈，三顧臣於草廬之中，諮諏善道之事」<br/>
          含義：諸葛亮原本身分低微，只想保全自己的生命，先帝卻不因他身分低下而看不起他，反而三次親自拜訪他，向他諮詢治國之策，顯示對他的重視和信任<br/>
          <br/>
          <b>諸葛亮對先帝的感激與責任（分句解釋）：</b><br/>
          <b>「由是感激，遂許先帝以驅馳」</b><br/>
          含義：正是因為先帝的知遇，諸葛亮深感激動，因此答應為先帝效力和奮力工作<br/>
          <br/>
          <b>「先帝知臣謹慎，故臨崩寄臣以大事也」</b><br/>
          含義：先帝了解諸葛亮為人謹慎，所以在臨終時把治國和軍國大事託付給他，這是對諸葛亮最大的信任和重託<br/>
          <br/>
          <b>「受命以來，夙夜憂歎，恐託付不效，以傷先帝之明」</b><br/>
          含義：自從接受先帝任命以來，諸葛亮日夜都在憂慮，擔心自己的工作做不好，會辜負先帝的期望和眼光<br/>
          <br/>
          <b>「故五月渡瀘，深入不毛」</b><br/>
          含義：因此諸葛亮毅然率軍南征，進入荒涼的南蠻之地，不怕艱苦，為了完成先帝的志業<br/>
          <br/>

          <b>自述身世和志向的作用：</b>為使後主不質疑自己、信任自己的意見，將自己的心跡完全表露出來，以此打動後主的感情，使其願意接納自己的勸諫。同時也向後主強調自己對先帝的忠誠和責任，希望後主能傳承先帝的信任
        </div>
      )}
    </div>

    {/* Q&A Question 5: Reaffirming Responsibilities */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q5：重申職責</h3>
        <StarButton questionId="ch01_qa5" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>引用原文，指出並解釋諸葛亮自己、賢臣和後主各自的職責。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>諸葛亮自己的職責（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa5_a1', e.target.value)} value={userAnswers.ch01_qa5_a1 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa5_a2', e.target.value)} value={userAnswers.ch01_qa5_a2 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>賢臣的職責（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa5_a3', e.target.value)} value={userAnswers.ch01_qa5_a3 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa5_a4', e.target.value)} value={userAnswers.ch01_qa5_a4 || ''} placeholder="解釋含義..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>後主的職責（引述原文）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa5_a5', e.target.value)} value={userAnswers.ch01_qa5_a5 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>含義：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa5_a6', e.target.value)} value={userAnswers.ch01_qa5_a6 || ''} placeholder="解釋含義..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>諸葛亮自己的職責：</b>「庶竭駑鈍，攘除奸凶，興復漢室，還於舊都」<br/>
          含義：竭盡自己平庸的才能，剷除奸詐兇惡的敵人，復興漢朝，遷回原來的首都<br/>
          <b>賢臣的職責：</b>「斟酌損益，進盡忠言」<br/>
          含義：反覆考慮改革的方案，提出最好的建議<br/>
          <b>後主的職責：</b>「陛下亦宜自謀，以諮諏善道，察納雅言，深追先帝遺詔」<br/>
          含義：諮詢治國的好辦法，明察接納正直合理的言論，深深遵循先帝遺留的遺詔
        </div>
      )}
    </div>

    {/* Q&A Question 6: Tears of Sorrow */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q6：臨表涕零</h3>
        <StarButton questionId="ch01_qa6" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>指出作者臨表涕零的三個原因。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>原因一：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa6_a1', e.target.value)} value={userAnswers.ch01_qa6_a1 || ''} placeholder="說明..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>原因二：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa6_a2', e.target.value)} value={userAnswers.ch01_qa6_a2 || ''} placeholder="說明..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>原因三：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa6_a3', e.target.value)} value={userAnswers.ch01_qa6_a3 || ''} placeholder="說明..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>原因一：</b>蜀漢危急<br/>
          <b>原因二：</b>後主年少，缺乏治國經驗，可能親信小人<br/>
          <b>原因三：</b>出師在即，擔心後主被小人蒙蔽
        </div>
      )}
    </div>

    {/* Q&A Question 7: Persuasion Techniques */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q7：游說技巧</h3>
        <StarButton questionId="ch01_qa7" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>指出並說明作者的游說技巧。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>說理方面（引述例子並說明）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa7_a1', e.target.value)} value={userAnswers.ch01_qa7_a1 || ''} placeholder="說明技巧..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>動情方面（引述例子並說明）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch01_qa7_a2', e.target.value)} value={userAnswers.ch01_qa7_a2 || ''} placeholder="說明技巧..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>游說技巧：說之以理，動之以情</b><br/>
          <b>說：</b>通過分析天下局勢，突出蜀國危難，以東漢西漢史實對比，希望後主以史為鑑，親賢臣遠小人<br/>
          <b>動：</b>多次提及先帝，望以父子之情打動後主，使其甘於接納意見；又表明自己的心志，以此打動後主，使其接受自己的勸諫。
        </div>
      )}
    </div>

    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
    </div>
  );
};

export default Chinese_01;
