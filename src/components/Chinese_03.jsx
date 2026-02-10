import { ArrowLeft } from 'lucide-react';

const Chinese_03 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => {
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
        <StarButton questionId="ch03_q1" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 學不可以「已」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「已」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q1', 1)}} onChange={(e) => onChange('ch03_q1_a1', e.target.value)} value={userAnswers.ch03_q1_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「已」：停止、終止、休止
        </div>
      )}
    </div>

    {/* Q2 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2</h3>
        <StarButton questionId="ch03_q2" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「青，取之於藍」，而青於藍。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「青，取之於藍」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q2', 1)}} onChange={(e) => onChange('ch03_q2_a1', e.target.value)} value={userAnswers.ch03_q2_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「青，取之於藍」：靛青（顏料）是從藍草中提取而來的
        </div>
      )}
    </div>

    {/* Q3 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3</h3>
        <StarButton questionId="ch03_q3" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 青，取之於藍，而「青於藍」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「青於藍」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q3', 1)}} onChange={(e) => onChange('ch03_q3_a1', e.target.value)} value={userAnswers.ch03_q3_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「青於藍」：靛青比藍草更青（純淨/更勝）
        </div>
      )}
    </div>

    {/* Q4 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4</h3>
        <StarButton questionId="ch03_q4" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「木直中繩」，輮以為輪，其曲中規。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「木直中繩」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q4', 1)}} onChange={(e) => onChange('ch03_q4_a1', e.target.value)} value={userAnswers.ch03_q4_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「木直中繩」：木料本來是直的，符合墨繩
        </div>
      )}
    </div>

    {/* Q5 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5</h3>
        <StarButton questionId="ch03_q5" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 木直中繩，「輮」以為輪，其曲中規。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「輮」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q5', 1)}} onChange={(e) => onChange('ch03_q5_a1', e.target.value)} value={userAnswers.ch03_q5_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「輮」：用火烘烤使其彎曲
        </div>
      )}
    </div>

    {/* Q6 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6</h3>
        <StarButton questionId="ch03_q6" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 木直中繩，輮以為輪，其曲中「規」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「規」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q6', 1)}} onChange={(e) => onChange('ch03_q6_a1', e.target.value)} value={userAnswers.ch03_q6_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「規」：圓規
        </div>
      )}
    </div>

    {/* Q7 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7</h3>
        <StarButton questionId="ch03_q7" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 雖有「槁暴」、不復挺者。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「槁暴」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q7', 1)}} onChange={(e) => onChange('ch03_q7_a1', e.target.value)} value={userAnswers.ch03_q7_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「槁暴」：乾燥曝曬（形容長期曝曬乾燥）
        </div>
      )}
    </div>

    {/* Q8 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8</h3>
        <StarButton questionId="ch03_q8" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 雖有槁暴、不復「挺」者。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「挺」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q8', 1)}} onChange={(e) => onChange('ch03_q8_a1', e.target.value)} value={userAnswers.ch03_q8_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「挺」：挺直
        </div>
      )}
    </div>

    {/* Q9 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q9</h3>
        <StarButton questionId="ch03_q9" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 故木「受繩」則直。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「受繩」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q9', 1)}} onChange={(e) => onChange('ch03_q9_a1', e.target.value)} value={userAnswers.ch03_q9_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「受繩」：接受（墨繪的校正）
        </div>
      )}
    </div>

    {/* Q10 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q10</h3>
        <StarButton questionId="ch03_q10" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 木受繩則直，「金就礪則利」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「金就礪則利」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q10', 1)}} onChange={(e) => onChange('ch03_q10_a1', e.target.value)} value={userAnswers.ch03_q10_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「金就礪則利」：刀劍靠著磨刀石就變得鋒利
        </div>
      )}
    </div>

    {/* Q11 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q11</h3>
        <StarButton questionId="ch03_q11" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 君子博學而日「參省」乎已。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「參省」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q11', 1)}} onChange={(e) => onChange('ch03_q11_a1', e.target.value)} value={userAnswers.ch03_q11_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「參省」：檢查、反省
        </div>
      )}
    </div>

    {/* Q12 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q12</h3>
        <StarButton questionId="ch03_q12" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 則「知」明而行無過矣。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「知」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q12', 1)}} onChange={(e) => onChange('ch03_q12_a1', e.target.value)} value={userAnswers.ch03_q12_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「知」：智慧、聰慧
        </div>
      )}
    </div>

    {/* Q13 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q13</h3>
        <StarButton questionId="ch03_q13" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 則知明而「行」無過矣。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「行」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q13', 1)}} onChange={(e) => onChange('ch03_q13_a1', e.target.value)} value={userAnswers.ch03_q13_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「行」：行為、舉動
        </div>
      )}
    </div>

    {/* Q14 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q14</h3>
        <StarButton questionId="ch03_q14" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 吾嘗終日而思矣，不如「須臾」之所學也。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「須臾」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q14', 1)}} onChange={(e) => onChange('ch03_q14_a1', e.target.value)} value={userAnswers.ch03_q14_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「須臾」：片刻、短暫時間
        </div>
      )}
    </div>

    {/* Q15 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q15</h3>
        <StarButton questionId="ch03_q15" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 吾嘗「跂」而望矣，不如登高之博見也。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「跂」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q15', 1)}} onChange={(e) => onChange('ch03_q15_a1', e.target.value)} value={userAnswers.ch03_q15_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「跂」：翹起腳後跟、踮起腳尖
        </div>
      )}
    </div>

    {/* Q16 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q16</h3>
        <StarButton questionId="ch03_q16" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 順風而呼，聲非加「疾」也。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「疾」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q16', 1)}} onChange={(e) => onChange('ch03_q16_a1', e.target.value)} value={userAnswers.ch03_q16_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「疾」：響亮
        </div>
      )}
    </div>

    {/* Q17 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q17</h3>
        <StarButton questionId="ch03_q17" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 而聞者「彰」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「彰」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q17', 1)}} onChange={(e) => onChange('ch03_q17_a1', e.target.value)} value={userAnswers.ch03_q17_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「彰」：明顯、清楚
        </div>
      )}
    </div>

    {/* Q18 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q18</h3>
        <StarButton questionId="ch03_q18" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「假輿馬者」，非利足也，而致千里。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「假輿馬者」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q18', 1)}} onChange={(e) => onChange('ch03_q18_a1', e.target.value)} value={userAnswers.ch03_q18_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「假輿馬者」：借用車馬的人
        </div>
      )}
    </div>

    {/* Q19 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q19</h3>
        <StarButton questionId="ch03_q19" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 假輿馬者，非「利足」也。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「利足」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q19', 1)}} onChange={(e) => onChange('ch03_q19_a1', e.target.value)} value={userAnswers.ch03_q19_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「利足」：腳走得快
        </div>
      )}
    </div>

    {/* Q20 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q20</h3>
        <StarButton questionId="ch03_q20" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 而「致」千里。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「致」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q20', 1)}} onChange={(e) => onChange('ch03_q20_a1', e.target.value)} value={userAnswers.ch03_q20_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「致」：到達
        </div>
      )}
    </div>

    {/* Q21 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q21</h3>
        <StarButton questionId="ch03_q21" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 假舟「楫」者，非能水也，而絕江河。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「楫」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q21', 1)}} onChange={(e) => onChange('ch03_q21_a1', e.target.value)} value={userAnswers.ch03_q21_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「楫」：槳
        </div>
      )}
    </div>

    {/* Q22 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q22</h3>
        <StarButton questionId="ch03_q22" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 假舟楫者，非「能水」也。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「能水」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q22', 1)}} onChange={(e) => onChange('ch03_q22_a1', e.target.value)} value={userAnswers.ch03_q22_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「能水」：善於游泳、會游水
        </div>
      )}
    </div>

    {/* Q23 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q23</h3>
        <StarButton questionId="ch03_q23" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 而「絕江河」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「絕江河」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q23', 1)}} onChange={(e) => onChange('ch03_q23_a1', e.target.value)} value={userAnswers.ch03_q23_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「絕江河」：橫渡江河
        </div>
      )}
    </div>

    {/* Q24 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q24</h3>
        <StarButton questionId="ch03_q24" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 君子「生非異」也。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「生非異」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q24', 1)}} onChange={(e) => onChange('ch03_q24_a1', e.target.value)} value={userAnswers.ch03_q24_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「生非異」：天生材質無異於常人
        </div>
      )}
    </div>

    {/* Q25 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q25</h3>
        <StarButton questionId="ch03_q25" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「善假於物」也。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「善假於物」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q25', 1)}} onChange={(e) => onChange('ch03_q25_a1', e.target.value)} value={userAnswers.ch03_q25_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「善假於物」：善於借助外物（善於利用客觀條件）
        </div>
      )}
    </div>

    {/* Q26 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q26</h3>
        <StarButton questionId="ch03_q26" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 積水成「淵」，蛟龍生焉。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「淵」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q26', 1)}} onChange={(e) => onChange('ch03_q26_a1', e.target.value)} value={userAnswers.ch03_q26_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「淵」：深水潭
        </div>
      )}
    </div>

    {/* Q27 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q27</h3>
        <StarButton questionId="ch03_q27" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 積水成淵，「蛟龍」生焉。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「蛟龍」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q27', 1)}} onChange={(e) => onChange('ch03_q27_a1', e.target.value)} value={userAnswers.ch03_q27_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「蛟龍」：蛟（水中怪獸）和龍（祥瑞之獸）
        </div>
      )}
    </div>

    {/* Q28 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q28</h3>
        <StarButton questionId="ch03_q28" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 積善成德，而「神明自得」，聖心備焉。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「神明自得」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q28', 1)}} onChange={(e) => onChange('ch03_q28_a1', e.target.value)} value={userAnswers.ch03_q28_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「神明自得」：聰慧（明察事物的心神）自然可得
        </div>
      )}
    </div>

    {/* Q29 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q29</h3>
        <StarButton questionId="ch03_q29" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 積善成德，而神明自得，「聖心備」焉。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「聖心備」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q29', 1)}} onChange={(e) => onChange('ch03_q29_a1', e.target.value)} value={userAnswers.ch03_q29_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「聖心備」：聖賢通達事理的心具備了
        </div>
      )}
    </div>

    {/* Q30 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q30</h3>
        <StarButton questionId="ch03_q30" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 故不積「跬步」，無以至千里。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「跬步」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q30', 1)}} onChange={(e) => onChange('ch03_q30_a1', e.target.value)} value={userAnswers.ch03_q30_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「跬步」：半步、小步
        </div>
      )}
    </div>

    {/* Q31 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q31</h3>
        <StarButton questionId="ch03_q31" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「騏驥」一躍，不能十步。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「騏驥」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q31', 1)}} onChange={(e) => onChange('ch03_q31_a1', e.target.value)} value={userAnswers.ch03_q31_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「騏驥」：駿馬、良馬
        </div>
      )}
    </div>

    {/* Q32 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q32</h3>
        <StarButton questionId="ch03_q32" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「駑馬十駕」，功在不舍。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「駑馬十駕」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q32', 1)}} onChange={(e) => onChange('ch03_q32_a1', e.target.value)} value={userAnswers.ch03_q32_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「駑馬十駕」：劣馬走十天的路程（一日為一駕）
        </div>
      )}
    </div>

    {/* Q33 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q33</h3>
        <StarButton questionId="ch03_q33" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 功在不「舍」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「舍」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q33', 1)}} onChange={(e) => onChange('ch03_q33_a1', e.target.value)} value={userAnswers.ch03_q33_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「舍」：停止、放棄、中止
        </div>
      )}
    </div>

    {/* Q34 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q34</h3>
        <StarButton questionId="ch03_q34" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「鍥」而舍之，朽木不折。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「鍥」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q34', 1)}} onChange={(e) => onChange('ch03_q34_a1', e.target.value)} value={userAnswers.ch03_q34_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「鍥」：雕刻、錐撃
        </div>
      )}
    </div>

    {/* Q35 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q35</h3>
        <StarButton questionId="ch03_q35" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 鍥而不舍，金石可「鏤」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「鏤」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q35', 1)}} onChange={(e) => onChange('ch03_q35_a1', e.target.value)} value={userAnswers.ch03_q35_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「鏤」：雕刻、雕鑿
        </div>
      )}
    </div>

    {/* Q36 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q36</h3>
        <StarButton questionId="ch03_q36" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「螾」無爪牙之利，筋骨之強。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「螾」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q36', 1)}} onChange={(e) => onChange('ch03_q36_a1', e.target.value)} value={userAnswers.ch03_q36_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「螾」：蚯蚓
        </div>
      )}
    </div>

    {/* Q37 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q37</h3>
        <StarButton questionId="ch03_q37" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 上食「埃土」，下飲黃泉。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「埃土」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q37', 1)}} onChange={(e) => onChange('ch03_q37_a1', e.target.value)} value={userAnswers.ch03_q37_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「埃土」：細土、土壤
        </div>
      )}
    </div>

    {/* Q38 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q38</h3>
        <StarButton questionId="ch03_q38" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「蟹六跪而二螯」，非蛇蟮之穴無可寄託者。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「蟹六跪而二螯」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q38', 1)}} onChange={(e) => onChange('ch03_q38_a1', e.target.value)} value={userAnswers.ch03_q38_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「蟹六跪而二螯」：螃蟹有六隻足和兩隻鉗
        </div>
      )}
    </div>

    {/* Q39 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q39</h3>
        <StarButton questionId="ch03_q39" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 非「蛇蟺」之穴無可寄託者。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「蛇蟺」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q39', 1)}} onChange={(e) => onChange('ch03_q39_a1', e.target.value)} value={userAnswers.ch03_q39_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「蛇蟺」：蛇和鱔魚（泥土中作穴的動物）
        </div>
      )}
    </div>

    {/* Q40 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q40</h3>
        <StarButton questionId="ch03_q40" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「用心一」也。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「用心一」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q40', 1)}} onChange={(e) => onChange('ch03_q40_a1', e.target.value)} value={userAnswers.ch03_q40_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「用心一」：專心一致、用心專一
        </div>
      )}
    </div>

    {/* Q41 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q41</h3>
        <StarButton questionId="ch03_q41" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 「用心躁」也。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「用心躁」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch03_q41', 1)}} onChange={(e) => onChange('ch03_q41_a1', e.target.value)} value={userAnswers.ch03_q41_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「用心躁」：用心浮躁、用心不專
        </div>
      )}
    </div>

    <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingTop: '30px', marginTop: '30px', paddingBottom: '15px', borderBottom: '3px solid #dc2626'}}>第二部分：問答</h3>

    {/* Q&A 1: 第一段整體論點 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q1</h3>
        <StarButton questionId="ch03_qa1" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 文章第一段以「學不可以已」開篇，開宗明義提出什麽中心論點？</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch03_qa1_a1', e.target.value)} value={userAnswers.ch03_qa1_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「學習不可以停止」的中心論點，緊扣文章題目「勸學」之旨。
        </div>
      )}
    </div>

    {/* Q&A 2: 青出於藍、冰寒於水的類比作用 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q2</h3>
        <StarButton questionId="ch03_qa2" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 文章使用「青出於藍」和「冰寒於水」的類比，說明了什麽道理？</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch03_qa2_a1', e.target.value)} value={userAnswers.ch03_qa2_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          以靛青從藍草中提取而來，但是比藍草更青，類比冰從水凝結而成，但是比水更寒冷，說明後天學習可以使人不斷進步，任何人通過發憤學習，都能進步。
        </div>
      )}
    </div>

    {/* Q&A 3: 輮木為輪的類比 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q3</h3>
        <StarButton questionId="ch03_qa3" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 「木直中繩，輮以為輪」這個比喻中，「木」和「輮」分別比喻什麽？藉此說明什麽？</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch03_qa3_a1', e.target.value)} value={userAnswers.ch03_qa3_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「木」比喻人的本性；「輮」比喻學習。說明人的本質可以通過後天學習而改造。
        </div>
      )}
    </div>

    {/* Q&A 4: 木受繩則直、金就礪則利 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q4</h3>
        <StarButton questionId="ch03_qa4" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 試引述「木受繩則直」和「金就礪則利」兩句，說明其共同論意。</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch03_qa4_a1', e.target.value)} value={userAnswers.ch03_qa4_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          以木經過墨繩的校正變直類比刀劍經過磨刀石變鋒利，説明物質經由或利用一些工具來改變自身，人亦可通過學習而去惡從善，改變本性。
        </div>
      )}
    </div>

    {/* Q&A 5: 第一段結論 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q5</h3>
        <StarButton questionId="ch03_qa5" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 試引述「君子博學而日參省乎己，則知明而行無過矣」一句，解釋何為「知明而行無過矣」。</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch03_qa5_a1', e.target.value)} value={userAnswers.ch03_qa5_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          君子廣泛學習，並且每天反省檢查自己，這樣智慧明達，行為亦無過失。即學習能使人獲得智慧並改正過失。
        </div>
      )}
    </div>

    {/* Q&A 6: 終日思vs須臾學 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q6</h3>
        <StarButton questionId="ch03_qa6" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 文章第二段以「終日思」和「須臾學」作對比，強調什麽？</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch03_qa6_a1', e.target.value)} value={userAnswers.ch03_qa6_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          強調空想不如學習；通過親身體驗說明實際學習的效果遠勝於單純的思考。
        </div>
      )}
    </div>

    {/* Q&A 7: 登高望的類比 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q7</h3>
        <StarButton questionId="ch03_qa7" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 「跂而望，不如登高之博見」這個例比說明什麽？</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch03_qa7_a1', e.target.value)} value={userAnswers.ch03_qa7_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          說明踮起腳尖去看不如登上高處看得廣闊；比喻個人的思考通過借助外物學習能更豐富地學得知識。
        </div>
      )}
    </div>

    {/* Q&A 8: 登高招手、順風呼喊 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q8</h3>
        <StarButton questionId="ch03_qa8" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 「登高而招，臂非加長也，而見者遠；順風而呼，聲非加疾也，而聞者彰」說明了什麽原理？</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch03_qa8_a1', e.target.value)} value={userAnswers.ch03_qa8_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          說明利用高處、利用順風的作用之大；人雖然本身沒有改變，但利用外物（高處、順風等）就能達到遠超自身能力的效果。
        </div>
      )}
    </div>

    {/* Q&A 9: 假輿馬、假舟楫 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q9</h3>
        <StarButton questionId="ch03_qa9" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 文章如何利用「假輿馬」和「假舟楫」的例子論證學習的意義？</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch03_qa9_a1', e.target.value)} value={userAnswers.ch03_qa9_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          說明人如能借助外物（車馬、舟楫），即使沒有良好的行走或游泳能力，也能達到千里遠或橫渡江河的目標；強調學習方法的重要，人如能借助學習（外物），可提升學習的效能。
        </div>
      )}
    </div>

    {/* Q&A 10: 君子生非異也，善假於物也 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q10</h3>
        <StarButton questionId="ch03_qa10" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 試引述「君子生非異也，善假於物也」，解釋君子與普通人的分別。</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch03_qa10_a1', e.target.value)} value={userAnswers.ch03_qa10_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          君子與普通人的天生資質並無不同，差別在於君子善於利用外物（學習）好好學習，因此君子之所以會有超過一般人的才德，就是因為他們善於利用外物來好好學習。
        </div>
      )}
    </div>

    {/* Q&A 11: 積土成山、積善成德 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q11</h3>
        <StarButton questionId="ch03_qa11" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 試分析「積土成山，風雨興焉；積水成淵，蛟龍生焉；積善成德」三句的邏輯關係。</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch03_qa11_a1', e.target.value)} value={userAnswers.ch03_qa11_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          前兩句是自然現象的類比，說明積累能夠產生某種自然結果；第三句推論到人的修養，說明累積善言善行也能自然而然地產生美德，體現學習必須纍積。
        </div>
      )}
    </div>

    {/* Q&A 12: 不積跬步、不積小流的反面論述 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q12</h3>
        <StarButton questionId="ch03_qa12" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 引述「不積跬步，無以至千里；不積小流，無以成江海」兩句，說明其論意。</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch03_qa12_a1', e.target.value)} value={userAnswers.ch03_qa12_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          反面論述如果不累積就不會有成果；說明學習必須持續累積，否則無法到達遠大目標；增強學習須持續累積的說服力。
        </div>
      )}
    </div>

    {/* Q&A 13: 騏驥vs駑馬 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q13</h3>
        <StarButton questionId="ch03_qa13" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 「騏驥一躍，不能十步」與「駑馬十駕，功在不舍」的對比說明什麽？</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch03_qa13_a1', e.target.value)} value={userAnswers.ch03_qa13_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「騏驥」代表天資聰穎之人，但一躍就達不到十步的距離，說明即使具備天資，如果不堅持也是一事無成；「駑馬」代表駑鈍之馬，走十天的距離卻有成就，說明即使沒有天資，只要堅持不懈也可以成功。強調堅持不懈比天資更重要。
        </div>
      )}
    </div>

    {/* Q&A 14: 鍥而舍之vs鍥而不舍 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q14</h3>
        <StarButton questionId="ch03_qa14" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 引述「鍥而舍之，朽木不折; 鍥而不舍，金石可鏤」，分析其對比的作用。</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch03_qa14_a1', e.target.value)} value={userAnswers.ch03_qa14_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          對比「舍」與「不舍」的結果；若雕刻朽木時中途放棄就無法折斷，若持續不懈地雕刻堅硬的金石也能刻出圖案；說明為學需堅持不懈、剛毅不屈的態度，強調「不舍」的重要，突出滴水穿石、鐵杵成針的道理。
        </div>
      )}
    </div>

    {/* Q&A 15: 蚯蚓vs螃蟹 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q15</h3>
        <StarButton questionId="ch03_qa15" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 文章以「蚯蚓」與「螃蟹」作對比，論述了什麽學習態度的重要性？</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch03_qa15_a1', e.target.value)} value={userAnswers.ch03_qa15_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          蚯蚓沒有爪牙之利，筋骨也不強，但用心專一就能往來於土壤和泉水之中有所成就；螃蟹有爪和腿，也有堅硬的外殼，但用心浮躁就無法找到寄託之處一事無成。說明學習需有專心致志、心無旁騖的態度，即使先天條件差也可因專心而成功，反之即使先天條件好也可因分心而失敗。
        </div>
      )}
    </div>

    {/* Q&A 16: 作者如何說明學習要不斷累積 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q16</h3>
        <StarButton questionId="ch03_qa16" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 作者如何說明學習要不斷的累積才有成效？</p>
      <textarea style={{...styles.input, minHeight: '120px'}} onChange={(e) => onChange('ch03_qa16_a1', e.target.value)} value={userAnswers.ch03_qa16_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          作者運用了正反論證的手法。正面論述：泥土不斷堆積成為高山，就會成為風雨蘊釀的地方；水滴不斷匯聚成為深潭，就會成為蛟龍生長的地方；進德修業同樣要點滴積累，不斷為善才能養成高尚品格，自然就有聰明智慧。反面論述：不累積學習就不能成功，人不一步一步走就不可能走千里遠路；水不點滴積聚就不可能形成江海。
        </div>
      )}
    </div>

    {/* Q&A 17: 作者如何說明學習要持之以恆 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q17</h3>
        <StarButton questionId="ch03_qa17" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 作者如何說明學習要持之以恆才有成效？</p>
      <textarea style={{...styles.input, minHeight: '120px'}} onChange={(e) => onChange('ch03_qa17_a1', e.target.value)} value={userAnswers.ch03_qa17_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          作者運用了對比論證的手法。以駿馬和劣馬作對比：駿馬具天資，卻不能一跳而到十步的距離；劣馬即使沒有天資，但如果努力不懈，也可不停地走十天的路程。又以雕刻作對比：雕刻東西半途而廢，即使爛木頭也刻不斷；堅持不停地雕刻，即使堅硬如金屬和石頭，也一定能刻上花紋。
        </div>
      )}
    </div>

    {/* Q&A 18: 積土成山、積水成淵引伸的道理 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q18</h3>
        <StarButton questionId="ch03_qa18" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 荀子由「積土成山，風雨興焉」和「積水成淵，蛟龍生焉」而引伸出什麽道理？</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch03_qa18_a1', e.target.value)} value={userAnswers.ch03_qa18_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          引伸出「積善成德，而神明自得，聖心備焉」的道理。山是由土所累積而成，河淵是由水所累積而成，而一個人要「積善」才能達到「成德」的境界，才能改變本性，變化氣質。
        </div>
      )}
    </div>

    {/* Q&A 19: 類比論證的效果 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q19</h3>
        <StarButton questionId="ch03_qa19" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 本文善用類比論證，請舉例說明其所達到的效果。</p>
      <textarea style={{...styles.input, minHeight: '120px'}} onChange={(e) => onChange('ch03_qa19_a1', e.target.value)} value={userAnswers.ch03_qa19_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          例如「金就礪則利」：指出刀劍經過磨刀石磨過會變得鋒利，人如刀劍，學習如磨刀石，說明學習可以改變人的本質。類比可令抽象的道理變得具體明白，深入淺出。又如「騏驥一躍，不能十步」：以駿馬一跳也不能超過十步的距離，說明知識累積不在於先天質素優劣，而在於後天努力，從而突出學習的重要這個論點。
        </div>
      )}
    </div>

    {/* Q&A 20: 先天質性與後天學習何者重要 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q20</h3>
        <StarButton questionId="ch03_qa20" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 先天的質性與後天的學習，到底何者重要？試就個人學習經驗而略加解釋。</p>
      <textarea style={{...styles.input, minHeight: '120px'}} onChange={(e) => onChange('ch03_qa20_a1', e.target.value)} value={userAnswers.ch03_qa20_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          先天與後天的因素同樣重要。若完全歸咎於先天質素則容易迷信宿命論，養成消極態度；若認為後天學習能完全勝過一切則流於理想主義。例如數學運算方面，有些人先天有才能，早期學習成績較好，但沒有後天努力也不行。反之，沒有天份只靠後天努力在微積分等難題上也不足夠。因此先天與後天的因素同樣重要。
        </div>
      )}
    </div>

    {/* Q&A 21: 〈勸學〉與荀子的「性惡論」 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q21</h3>
        <StarButton questionId="ch03_qa21" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 〈勸學〉強調教育的重要，這與荀子的「性惡論」有何關連？</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch03_qa21_a1', e.target.value)} value={userAnswers.ch03_qa21_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          荀子認為人性本惡，天生喜好利欲聲色，必須通過後天的教化與實踐，才能化惡為善，成為道德完善的君子。因此荀子特別強調教育的重要。
        </div>
      )}
    </div>

    {/* Q&A 22: 第3段六個比喻構成三組對比的論點 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q22</h3>
        <StarButton questionId="ch03_qa22" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 本文在第3段運用了六個比喻，構成三組對比，通過這三組對比分別帶出什麼論點？（請分別說明甲、乙、丙三組）</p>
      <textarea style={{...styles.input, minHeight: '150px'}} onChange={(e) => onChange('ch03_qa22_a1', e.target.value)} value={userAnswers.ch03_qa22_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          甲、「騏驥」與「駑馬」：駿馬一躍無法跳出十步遠；駑馬連走十天也能到達千里。說明知識累積不在於先天質素優劣，而在於後天的努力，帶出學習須鍥而不捨的論點。
          <br/>乙、「鍥而舍之」與「鍥而不舍」：雕刻若半途而廢，連枯朽的木頭也無法折斷；持之以恆，堅硬的金屬、石頭都可加以雕飾。說明學需有堅持不懈、剛毅不屈的態度，帶出堅持不懈重要的論點。
          <br/>丙、「螾」與「蟹」：蚯蚓沒有爪牙和強筋骨，卻能鑽食土壤、啜飲地泉，因為心思專一；螃蟹有爪、腿和堅硬外殼，卻無處容身，因為心思浮躁。說明學習需專心致志、心無旁騖，帶出學習須用心專一的論點。
        </div>
      )}
    </div>

    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
    </div>
  );
};

export default Chinese_03;
