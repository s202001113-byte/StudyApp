import { ArrowLeft } from 'lucide-react';

const Chinese_07 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => {
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
          <StarButton questionId="ch07_q1" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 自余為「僇人」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「僇人」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q1', 1)}} onChange={(e) => onChange('ch07_q1_a1', e.target.value)} value={userAnswers.ch07_q1_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「僇人」：罪人
          </div>
        )}
      </div>

      {/* Q2 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q2</h3>
          <StarButton questionId="ch07_q2" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 恆「惴慄」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「惴慄」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q2', 1)}} onChange={(e) => onChange('ch07_q2_a1', e.target.value)} value={userAnswers.ch07_q2_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「惴慄」：恐懼、戰慄
          </div>
        )}
      </div>

      {/* Q3 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q3</h3>
          <StarButton questionId="ch07_q3" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 其「隙」也</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「隙」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q3', 1)}} onChange={(e) => onChange('ch07_q3_a1', e.target.value)} value={userAnswers.ch07_q3_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「隙」：空閒時
          </div>
        )}
      </div>

      {/* Q4 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q4</h3>
          <StarButton questionId="ch07_q4" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 則「施施」而行</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「施施」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q4', 1)}} onChange={(e) => onChange('ch07_q4_a1', e.target.value)} value={userAnswers.ch07_q4_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「施施」：徐行、緩慢的樣子
          </div>
        )}
      </div>

      {/* Q5 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q5</h3>
          <StarButton questionId="ch07_q5" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「漫漫」而遊</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「漫漫」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q5', 1)}} onChange={(e) => onChange('ch07_q5_a1', e.target.value)} value={userAnswers.ch07_q5_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「漫漫」：不經意、隨意
          </div>
        )}
      </div>

      {/* Q6 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q6</h3>
          <StarButton questionId="ch07_q6" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 日與其「徒」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「徒」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q6', 1)}} onChange={(e) => onChange('ch07_q6_a1', e.target.value)} value={userAnswers.ch07_q6_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「徒」：同志、同伴
          </div>
        )}
      </div>

      {/* Q7 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q7</h3>
          <StarButton questionId="ch07_q7" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「窮迴溪」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「窮迴溪」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q7', 1)}} onChange={(e) => onChange('ch07_q7_a1', e.target.value)} value={userAnswers.ch07_q7_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「窮迴溪」：窮盡迂迴曲折的溪流
          </div>
        )}
      </div>

      {/* Q8 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q8</h3>
          <StarButton questionId="ch07_q8" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「幽泉」怪石</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「幽泉」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q8', 1)}} onChange={(e) => onChange('ch07_q8_a1', e.target.value)} value={userAnswers.ch07_q8_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「幽泉」：偏遠的泉水
          </div>
        )}
      </div>

      {/* Q9 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q9</h3>
          <StarButton questionId="ch07_q9" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 到則「披草」而坐</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「披草」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q9', 1)}} onChange={(e) => onChange('ch07_q9_a1', e.target.value)} value={userAnswers.ch07_q9_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「披草」：撥開草叢
          </div>
        )}
      </div>

      {/* Q10 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q10</h3>
          <StarButton questionId="ch07_q10" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 醉則更「相枕」而臥</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「相枕」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q10', 1)}} onChange={(e) => onChange('ch07_q10_a1', e.target.value)} value={userAnswers.ch07_q10_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「相枕」：互相以為枕、互相依靠
          </div>
        )}
      </div>

      {/* Q11 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q11</h3>
          <StarButton questionId="ch07_q11" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 意有所「極」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「極」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q11', 1)}} onChange={(e) => onChange('ch07_q11_a1', e.target.value)} value={userAnswers.ch07_q11_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「極」：至、達到
          </div>
        )}
      </div>

      {/* Q12 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q12</h3>
          <StarButton questionId="ch07_q12" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 夢亦同「趣」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「趣」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q12', 1)}} onChange={(e) => onChange('ch07_q12_a1', e.target.value)} value={userAnswers.ch07_q12_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「趣」：往、前往
          </div>
        )}
      </div>

      {/* Q13 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q13</h3>
          <StarButton questionId="ch07_q13" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「覺」而起</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「覺」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q13', 1)}} onChange={(e) => onChange('ch07_q13_a1', e.target.value)} value={userAnswers.ch07_q13_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「覺」：醒、清醒
          </div>
        )}
      </div>

      {/* Q14 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q14</h3>
          <StarButton questionId="ch07_q14" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 因坐「法華西亭」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「法華西亭」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q14', 1)}} onChange={(e) => onChange('ch07_q14_a1', e.target.value)} value={userAnswers.ch07_q14_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「法華西亭」：永州法華寺西之亭
          </div>
        )}
      </div>

      {/* Q15 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q15</h3>
          <StarButton questionId="ch07_q15" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 始「異之」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「異之」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q15', 1)}} onChange={(e) => onChange('ch07_q15_a1', e.target.value)} value={userAnswers.ch07_q15_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「異之」：認為它與別不同、覺得它奇異
          </div>
        )}
      </div>

      {/* Q16 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q16</h3>
          <StarButton questionId="ch07_q16" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 過「湘江」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「湘江」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q16', 1)}} onChange={(e) => onChange('ch07_q16_a1', e.target.value)} value={userAnswers.ch07_q16_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「湘江」：湘水（今湖南境內的河流）
          </div>
        )}
      </div>

      {/* Q17 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q17</h3>
          <StarButton questionId="ch07_q17" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「緣染溪」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「緣」和「染溪」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q17', 1)}} onChange={(e) => onChange('ch07_q17_a1', e.target.value)} value={userAnswers.ch07_q17_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「緣」：沿著；「染溪」：又名冉溪（永州的一條溪流）
          </div>
        )}
      </div>

      {/* Q18 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q18</h3>
          <StarButton questionId="ch07_q18" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「斫榛莽」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「斫」和「榛莽」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q18', 1)}} onChange={(e) => onChange('ch07_q18_a1', e.target.value)} value={userAnswers.ch07_q18_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「斫」：砍伐；「榛莽」：雜亂叢生之木
          </div>
        )}
      </div>

      {/* Q19 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q19</h3>
          <StarButton questionId="ch07_q19" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「焚茅茷」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「茅茷」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q19', 1)}} onChange={(e) => onChange('ch07_q19_a1', e.target.value)} value={userAnswers.ch07_q19_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「茅茷」：茂密的茅草
          </div>
        )}
      </div>

      {/* Q20 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q20</h3>
          <StarButton questionId="ch07_q20" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「窮」山之高而止</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「窮」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q20', 1)}} onChange={(e) => onChange('ch07_q20_a1', e.target.value)} value={userAnswers.ch07_q20_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「窮」：盡、到達
          </div>
        )}
      </div>

      {/* Q21 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q21</h3>
          <StarButton questionId="ch07_q21" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「箕踞而遨」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「箕踞」和「遨」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q21', 1)}} onChange={(e) => onChange('ch07_q21_a1', e.target.value)} value={userAnswers.ch07_q21_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「箕踞」：隨意張開雙腳而坐，形如簸箕；「遨」：遊、觀賞
          </div>
        )}
      </div>

      {/* Q22 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q22</h3>
          <StarButton questionId="ch07_q22" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 凡數州之「土壤」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「土壤」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q22', 1)}} onChange={(e) => onChange('ch07_q22_a1', e.target.value)} value={userAnswers.ch07_q22_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「土壤」：土地
          </div>
        )}
      </div>

      {/* Q23 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q23</h3>
          <StarButton questionId="ch07_q23" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 皆在「衽席」之下</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「衽席」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q23', 1)}} onChange={(e) => onChange('ch07_q23_a1', e.target.value)} value={userAnswers.ch07_q23_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「衽席」：坐席、臥席
          </div>
        )}
      </div>

      {/* Q24 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q24</h3>
          <StarButton questionId="ch07_q24" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「岈然洼然」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「岈然」和「洼然」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q24', 1)}} onChange={(e) => onChange('ch07_q24_a1', e.target.value)} value={userAnswers.ch07_q24_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「岈然」：山勢隆起的樣子；「洼然」：山谷深凹、低陷的樣子
          </div>
        )}
      </div>

      {/* Q25 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q25</h3>
          <StarButton questionId="ch07_q25" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 若「垤」若穴</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「垤」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q25', 1)}} onChange={(e) => onChange('ch07_q25_a1', e.target.value)} value={userAnswers.ch07_q25_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「垤」：蟻窩堆積之浮土、小土堆
          </div>
        )}
      </div>

      {/* Q26 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q26</h3>
          <StarButton questionId="ch07_q26" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「尺寸千里」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「尺寸千里」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q26', 1)}} onChange={(e) => onChange('ch07_q26_a1', e.target.value)} value={userAnswers.ch07_q26_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「尺寸千里」：眼前尺寸之地實則相隔千里之遙（地理上的遠近縮小了）
          </div>
        )}
      </div>

      {/* Q27 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q27</h3>
          <StarButton questionId="ch07_q27" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「攢蹙累積」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「攢蹙累積」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q27', 1)}} onChange={(e) => onChange('ch07_q27_a1', e.target.value)} value={userAnswers.ch07_q27_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「攢蹙累積」：聚集、緊迫、堆疊、積聚
          </div>
        )}
      </div>

      {/* Q28 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q28</h3>
          <StarButton questionId="ch07_q28" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「莫得遯隱」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「遯隱」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q28', 1)}} onChange={(e) => onChange('ch07_q28_a1', e.target.value)} value={userAnswers.ch07_q28_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「遯隱」：隱藏、躲藏
          </div>
        )}
      </div>

      {/* Q29 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q29</h3>
          <StarButton questionId="ch07_q29" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「縈青繚白」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「縈青繚白」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q29', 1)}} onChange={(e) => onChange('ch07_q29_a1', e.target.value)} value={userAnswers.ch07_q29_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「縈青繚白」：青山白水綢繆纏繞（青比喻山，白比喻水或雲）
          </div>
        )}
      </div>

      {/* Q30 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q30</h3>
          <StarButton questionId="ch07_q30" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 外與「天際」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「際」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q30', 1)}} onChange={(e) => onChange('ch07_q30_a1', e.target.value)} value={userAnswers.ch07_q30_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「際」：相連、匯合
          </div>
        )}
      </div>

      {/* Q31 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q31</h3>
          <StarButton questionId="ch07_q31" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 不與「培塿」為類</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「培塿」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q31', 1)}} onChange={(e) => onChange('ch07_q31_a1', e.target.value)} value={userAnswers.ch07_q31_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「培塿」：小丘、小土堆
          </div>
        )}
      </div>

      {/* Q32 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q32</h3>
          <StarButton questionId="ch07_q32" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 與「顥氣」俱</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「顥氣」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q32', 1)}} onChange={(e) => onChange('ch07_q32_a1', e.target.value)} value={userAnswers.ch07_q32_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「顥氣」：天地元氣
          </div>
        )}
      </div>

      {/* Q33 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q33</h3>
          <StarButton questionId="ch07_q33" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「洋洋」乎</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「洋洋」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q33', 1)}} onChange={(e) => onChange('ch07_q33_a1', e.target.value)} value={userAnswers.ch07_q33_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「洋洋」：廣大無涯的樣子
          </div>
        )}
      </div>

      {/* Q34 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q34</h3>
          <StarButton questionId="ch07_q34" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「與造物者遊」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「造物者遊」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q34', 1)}} onChange={(e) => onChange('ch07_q34_a1', e.target.value)} value={userAnswers.ch07_q34_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「造物者遊」：與造物者一起遊玩、與天地合而為一
          </div>
        )}
      </div>

      {/* Q35 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q35</h3>
          <StarButton questionId="ch07_q35" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「引」觴滿酌</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「引」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q35', 1)}} onChange={(e) => onChange('ch07_q35_a1', e.target.value)} value={userAnswers.ch07_q35_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「引」：取、拿起
          </div>
        )}
      </div>

      {/* Q36 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q36</h3>
          <StarButton questionId="ch07_q36" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「頹然」就醉</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「頹然」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q36', 1)}} onChange={(e) => onChange('ch07_q36_a1', e.target.value)} value={userAnswers.ch07_q36_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「頹然」：倒下、酒醉的樣子
          </div>
        )}
      </div>

      {/* Q37 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q37</h3>
          <StarButton questionId="ch07_q37" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「蒼然暮色」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「蒼然」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q37', 1)}} onChange={(e) => onChange('ch07_q37_a1', e.target.value)} value={userAnswers.ch07_q37_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「蒼然」：深青色、暮色沈沈的樣子
          </div>
        )}
      </div>

      {/* Q38 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q38</h3>
          <StarButton questionId="ch07_q38" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「心凝形釋」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「心凝形釋」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q38', 1)}} onChange={(e) => onChange('ch07_q38_a1', e.target.value)} value={userAnswers.ch07_q38_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「心凝形釋」：心神凝聚、形體不受拘束
          </div>
        )}
      </div>

      {/* Q39 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q39</h3>
          <StarButton questionId="ch07_q39" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「萬化冥合」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「萬化冥合」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q39', 1)}} onChange={(e) => onChange('ch07_q39_a1', e.target.value)} value={userAnswers.ch07_q39_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「萬化冥合」：萬物與自己暗合、馬上融為一體
          </div>
        )}
      </div>

      {/* Q40 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q40</h3>
          <StarButton questionId="ch07_q40" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 吾「嚮」之</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「嚮」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q40', 1)}} onChange={(e) => onChange('ch07_q40_a1', e.target.value)} value={userAnswers.ch07_q40_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「嚮」：從前、過往
          </div>
        )}
      </div>

      {/* Q41 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q41</h3>
          <StarButton questionId="ch07_q41" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「未始」知</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「未始」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q41', 1)}} onChange={(e) => onChange('ch07_q41_a1', e.target.value)} value={userAnswers.ch07_q41_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「未始」：不曾、從未
          </div>
        )}
      </div>

      {/* Q42 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q42</h3>
          <StarButton questionId="ch07_q42" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 故為之文以「志」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「志」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch07_q42', 1)}} onChange={(e) => onChange('ch07_q42_a1', e.target.value)} value={userAnswers.ch07_q42_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「志」：記、記錄
          </div>
        )}
      </div>

      <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingTop: '30px', marginTop: '30px', paddingBottom: '15px', borderBottom: '3px solid #dc2626'}}>第二部分：問答</h3>

      {/* Q&A 1 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q1</h3>
          <StarButton questionId="ch07_qa1" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 就《始得西山宴遊記》一文所述，作者在西山之巔所見的景物有何特別之處？試以自己的文句指出一項。（2分）</p>
        <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch07_qa1_a1', e.target.value)} value={userAnswers.ch07_qa1_a1 || ''} placeholder="請回答..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            <strong>參考答案（任答一項）：</strong>
            <br/>• 永州附近數州群山看起來十分渺小。/西山四周的高山和盤地都變得十分渺小，就像一個個蟻丘和小土窪。
            <br/>• 從西山之巔所見，四野無邊無際，外與天際，四望如一。/青山白水（雲）與天相接，四周景物渾然一體（浩瀚無邊）。
            <br/><br/><strong>評分原則：</strong> 景物(1分)+景物特點(1分)
          </div>
        )}
      </div>

      {/* Q&A 2 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q2</h3>
          <StarButton questionId="ch07_qa2" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 為甚麼有關景物可使他從「恆惴慄」的心情中釋放出來？試略加說明。（3分）</p>
        <textarea style={{...styles.input, minHeight: '120px'}} onChange={(e) => onChange('ch07_qa2_a1', e.target.value)} value={userAnswers.ch07_qa2_a1 || ''} placeholder="請回答..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            <strong>參考答案（任答一項）：</strong>
            <br/>• 作者被貶官後常擔憂讒言而「惴慄」；可是遊西山後，看見西山巍峨高崇，特立傲群，不與培塿山丘為類，能與天地浩氣同遊，遂了解到憂讒畏譏，看重個人得失，是世俗的執念，其胸襟和思想之卑微，與四周的土壤和山岳之渺小無異。故明白到早前執著個人得失之不智，並體悟大道，心境才豁然開朗起來，從惴慄之中釋放出來。
            <br/><br/>• 遊西山之前，作者因被貶官，常擔憂再為讒言所傷而感「惴慄」；他登上西山，眼見大自然景物的界線消失淨盡，感悟到個人與自然融和無間，生命與宇宙浩氣合一，人與天地融為一體，萬物無分彼此，又何來個人得失榮辱之別？所以他能夠從惴慄之中釋放自己，心情豁然開朗。
            <br/><br/><strong>評分原則：</strong> 作者背景+景物特點+如何釋放
          </div>
        )}
      </div>

      {/* Q&A 3 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q3</h3>
          <StarButton questionId="ch07_qa3" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 西山有甚麼獨特之處，給作者甚麼感覺？(6分)</p>
        <textarea style={{...styles.input, minHeight: '150px'}} onChange={(e) => onChange('ch07_qa3_a1', e.target.value)} value={userAnswers.ch07_qa3_a1 || ''} placeholder="請回答..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            <strong>參考答案：</strong>
            <br/>1. <strong>西山的獨特—</strong> 西山和一般的小山完全不同，它是出類拔萃的。西山有以下特點：
            <br/>  ◆ 人跡罕至：根本上沒有路可以通往西山，作者要派僕開路，可見從來沒有人到過西山。
            <br/>  ◆ 高峻險要：登山時作者要攀援而上，可見地形險峻。到了山頂，數個州邵的土地均在腳下，所有景物都縮小了，由此可知西山是多麼的高。
            <br/>  ◆ 偉木豪雄：西山是那麼壯觀，那麼偉大，它彷彿與天地同壽，是不會有終結的。
            <br/><br/>2. <strong>給作者的感覺—</strong>
            <br/>  ◆ 西山是與別不同的：它和作者平日登臨的所謂「高山」相比，西山是出類拔萃的。站在西山山頂俯望，那些「高山」，只是一些小土堆罷了。
            <br/>  ◆ 感到大自然的偉大，個人的渺小：西山屹立天地中，是那麼的偉大，相比之下，自己是多麼的渺小！因此一切榮辱得失再也毋須牽掛，只覺得自己已融入大自然中，和西山同呼同吸。
            <br/>  ◆ 以前的遊正不值一提：從前那些所謂有「異態」的高山、深林、迴谿、幽泉、怪石，不過是普通的山水。真正的旅遊，要算由登臨西山開始。
          </div>
        )}
      </div>

      {/* Q&A 4 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q4</h3>
          <StarButton questionId="ch07_qa4" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 作者在文中怎樣用西山自喻？(6分)</p>
        <textarea style={{...styles.input, minHeight: '120px'}} onChange={(e) => onChange('ch07_qa4_a1', e.target.value)} value={userAnswers.ch07_qa4_a1 || ''} placeholder="請回答..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            <strong>參考答案：</strong>
            <br/>1. 眼前的西山是那麼與別不同，它屹立群山之中，壯觀偉大，寓意自己才華出眾。(2分)
            <br/>2. 他便用西山比喻自己，群山比喻世俗的人；用西山「不與培塿為類」，比喻自己不和世俗同流合污的情操。(2分)
            <br/>3. 作者寫自己發現和登上西山的經過，目的是以自己懷才不遇的情況相比西山絕異的景色無人發現，及至柳宗元到了永州後才被發現，暗喻自己當時懷才不遇，才華有待執政者發現。(2分)
          </div>
        )}
      </div>

      {/* Q&A 5 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q5</h3>
          <StarButton questionId="ch07_qa5" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 本篇題目是《始得西山宴遊記》，「始得」二字貫串全文，試加以分析。</p>
        <textarea style={{...styles.input, minHeight: '150px'}} onChange={(e) => onChange('ch07_qa5_a1', e.target.value)} value={userAnswers.ch07_qa5_a1 || ''} placeholder="請回答..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            <strong>參考答案：</strong>
            <br/>(1) <strong>文首：</strong> 柳宗元在第一段述及被貶永州之初，由於心情抑鬱，便經常和友人遊山玩水，尋幽探勝，以為「凡是州之山水有異態者，皆我有也」，接著又說：「而未始知西山之怪特」，點出了「始得」之意，為下文遊覽西山作出鋪墊。
            <br/><br/>(2) <strong>文中：</strong> 後來柳宗元無意中在法華寺的西亭上發現西山，「始指異之」一句，點出了「始得西山」的題旨，文章得以自然地進入遊西山的主題。
            <br/><br/>(3) <strong>文末：</strong> 柳宗元在西山絕頂，目睹四周壯麗的景色，心胸豁然開朗，感到形神俱忘，與天地萬物合而為一，感到「然後知吾嚮之未始遊，遊於是乎始」，進一步回應了上文所提「始得」的含意。
          </div>
        )}
      </div>

      {/* Q&A 6 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q6</h3>
          <StarButton questionId="ch07_qa6" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 柳宗元所謂「得西山」，究竟得到了甚麼？</p>
        <textarea style={{...styles.input, minHeight: '150px'}} onChange={(e) => onChange('ch07_qa6_a1', e.target.value)} value={userAnswers.ch07_qa6_a1 || ''} placeholder="請回答..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            <strong>參考答案：</strong>
            <br/><strong>（1）遊山之樂：</strong>
            <br/>◆ 獨特景色：柳宗元發現了西山卓然獨立與奇異的景象，與他以往所遊覽過的山水並不相同，他感到西山已被他擁有。
            <br/>◆ 宴遊樂趣：西山奇異的景象，令柳宗元盡得「引觸滿酌，頹然就醉」的宴遊樂趣，所以至入黑仍不願離去。
            <br/><br/><strong>（2）得以解脫：</strong>
            <br/>◆ 心凝形釋：柳宗元感到「心凝形釋，與萬化冥合」，精神上的痛苦暫時得到解脫。
            <br/>◆ 精神之遊：「悠悠乎與顥氣俱，而莫得其涯；洋洋乎與造物者遊，而不知其所窮。」與造物者同遊於大自然之中。
            <br/>◆ 體悟人生的道理：明白個人得失只是小事，不再恐懼不安。
          </div>
        )}
      </div>

      {/* Q&A 7 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q7</h3>
          <StarButton questionId="ch07_qa7" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 文中說：「然後知是山之特立，不與培塿為類。」試分析這句話的表面含義和弦外之音。</p>
        <textarea style={{...styles.input, minHeight: '150px'}} onChange={(e) => onChange('ch07_qa7_a1', e.target.value)} value={userAnswers.ch07_qa7_a1 || ''} placeholder="請回答..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            <strong>參考答案：</strong>
            <br/><strong>（1）表面含義：</strong>「培塿」即小土堆。作者利用襯托的手法，在西山之巔，感到「凡數州之土壤，皆在衽席之下」，「尺寸千里，攢蹙累積，莫得遯隱」及「縈青繚白，外與天際，四望如一」，這些描寫顯出西山的高聳，「然後知是山之特立，不與培塿為類」正是他對西山的印象的總結。
            <br/><br/><strong>（2）弦外之音：</strong>「特立」的是西山，以西山自喻/象徵自己的品格高尚；「培塿」比喻朝中小人，以此寄寓自己品格高潔，故恥與朝中小人為伍，他說「不與培塿為類」，表達出對現實的憤懣，並表達自己不願同流合污的高尚品格。
          </div>
        )}
      </div>

      {/* Q&A 8 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q8</h3>
          <StarButton questionId="ch07_qa8" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 據《始得西山宴遊記》一文，回答以下各題：<br/>(1) 本文的重點是寫宴遊西山的情形，為甚麼作者要寫發現西山前的遊歷？(4分)
        <br/>(2) 作者為甚麼要寫發現西山及登山的經過？(6分)
        <br/>(3) 本文記甚麼事情？描寫甚麼景色？抒發甚麼情懷？(4分)</p>
        <textarea style={{...styles.input, minHeight: '200px'}} onChange={(e) => onChange('ch07_qa8_a1', e.target.value)} value={userAnswers.ch07_qa8_a1 || ''} placeholder="請回答..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            <strong>參考答案：</strong>
            <br/><strong>（1）作者寫發現西山前的遊歷的原因：</strong>
            <br/>1. 襯托(正襯)西山的遊歷：作者寫發現西山前，到處遊覽，無遠不到，以為已盡覽永州的名山勝水，用以襯托作者後來發現西山的驚異、喜悅，以及遊覽時的情趣。(2分)
            <br/>2. 突出西山景色獨特：作者遊遍永州的奇山異水，將這些景色與西山的景色相比，更可突出西山的景色奇特。(2分)
            <br/><br/><strong>（2）作者寫發現和登上西山的經過的原因：</strong>
            <br/>1. 製造懸念：作者在寫西山前，先寫發現西山和登山的經過，可製造懸念，令讀者急切想知道西山的景色究竟有甚麼特別。(2分)
            <br/>2. 襯托西山的特立：作者寫登山要幾經艱苦，渡湘江，沿染溪，披荊斬棘，才能到達頂峰，由此可見西山之神秘隱蔽，過去未被人發現，加上山上所見的景色又非常獨特，從而更襯托出始得西山的可貴。(2分)
            <br/>3. 以西山自況：作者寫自己發現和登上西山的經過，目的是以自己懷才不遇的情況相比西山絕異的景色無人發現，及至柳宗元到了永州後才被發現，暗喻自己當時懷才不遇，才華有待執政者發現。(2分)
            <br/><br/><strong>（3）本文內容：</strong>
            <br/>1. 敘事：本文記敘作者最初被貶居永州，到處遊山玩水的情形，並敘述發現西山的經過及登山宴遊的樂趣。(1分)
            <br/>2. 寫景：描寫登上西山所見的景色，以四周的山勢、景物，突出西山的高峻雄偉。(1分)
            <br/>3. 抒情：作者借寫西山以自況，抒發自己被貶後內心的鬱悶，表現他高潔的品格。(2分)
          </div>
        )}
      </div>

      <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
        <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
      </div>
    </div>
  );
};

export default Chinese_07;
