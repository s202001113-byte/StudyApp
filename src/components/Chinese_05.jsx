import { ArrowLeft } from 'lucide-react';

const Chinese_05 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => {
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
          <StarButton questionId="ch05_q1" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 魏王「貽我大瓠之種」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「貽」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q1', 1)}} onChange={(e) => onChange('ch05_q1_a1', e.target.value)} value={userAnswers.ch05_q1_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「貽」：贈、送
          </div>
        )}
      </div>

      {/* Q2 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q2</h3>
          <StarButton questionId="ch05_q2" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 我「樹之成而實五石」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「樹」和「石」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q2', 1)}} onChange={(e) => onChange('ch05_q2_a1', e.target.value)} value={userAnswers.ch05_q2_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「樹」：種植；「石」：中國古代容量單位，十斗為一石
          </div>
        )}
      </div>

      {/* Q3 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q3</h3>
          <StarButton questionId="ch05_q3" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 其堅「不能自舉」也</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「舉」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q3', 1)}} onChange={(e) => onChange('ch05_q3_a1', e.target.value)} value={userAnswers.ch05_q3_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「舉」：支撐
          </div>
        )}
      </div>

      {/* Q4 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q4</h3>
          <StarButton questionId="ch05_q4" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「剖之以為瓢」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「剖」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q4', 1)}} onChange={(e) => onChange('ch05_q4_a1', e.target.value)} value={userAnswers.ch05_q4_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「剖」：破開、中分
          </div>
        )}
      </div>

      {/* Q5 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q5</h3>
          <StarButton questionId="ch05_q5" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 則瓠「落無所容」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「落」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q5', 1)}} onChange={(e) => onChange('ch05_q5_a1', e.target.value)} value={userAnswers.ch05_q5_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「落」：廓落、大貌、空廓貌
          </div>
        )}
      </div>

      {/* Q6 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q6</h3>
          <StarButton questionId="ch05_q6" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 非不「呺然大」也</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「呺然」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q6', 1)}} onChange={(e) => onChange('ch05_q6_a1', e.target.value)} value={userAnswers.ch05_q6_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「呺然」：虛空而巨大的樣子
          </div>
        )}
      </div>

      {/* Q7 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q7</h3>
          <StarButton questionId="ch05_q7" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 吾為其無用而「掊」之</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「掊」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q7', 1)}} onChange={(e) => onChange('ch05_q7_a1', e.target.value)} value={userAnswers.ch05_q7_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「掊」：擊破
          </div>
        )}
      </div>

      {/* Q8 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q8</h3>
          <StarButton questionId="ch05_q8" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 夫子固「拙於用大」矣</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「拙於」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q8', 1)}} onChange={(e) => onChange('ch05_q8_a1', e.target.value)} value={userAnswers.ch05_q8_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「拙於」：不善於
          </div>
        )}
      </div>

      {/* Q9 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q9</h3>
          <StarButton questionId="ch05_q9" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 宋人有善為「不龜手之藥」者</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「龜手」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q9', 1)}} onChange={(e) => onChange('ch05_q9_a1', e.target.value)} value={userAnswers.ch05_q9_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「龜手」：氣候嚴寒，手皮凍裂
          </div>
        )}
      </div>

      {/* Q10 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q10</h3>
          <StarButton questionId="ch05_q10" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 世世以「洴澼絖」為事</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「洴澼絖」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q10', 1)}} onChange={(e) => onChange('ch05_q10_a1', e.target.value)} value={userAnswers.ch05_q10_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「洴澼絖」：漂洗棉絮
          </div>
        )}
      </div>

      {/* Q11 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q11</h3>
          <StarButton questionId="ch05_q11" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 今一朝而「鬻技」百金</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「鬻」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q11', 1)}} onChange={(e) => onChange('ch05_q11_a1', e.target.value)} value={userAnswers.ch05_q11_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「鬻」：賣
          </div>
        )}
      </div>

      {/* Q12 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q12</h3>
          <StarButton questionId="ch05_q12" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 客得之，以「說」吳王</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「說」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q12', 1)}} onChange={(e) => onChange('ch05_q12_a1', e.target.value)} value={userAnswers.ch05_q12_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「說」：游說
          </div>
        )}
      </div>

      {/* Q13 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q13</h3>
          <StarButton questionId="ch05_q13" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「越有難」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「難」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q13', 1)}} onChange={(e) => onChange('ch05_q13_a1', e.target.value)} value={userAnswers.ch05_q13_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「難」：災難
          </div>
        )}
      </div>

      {/* Q14 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q14</h3>
          <StarButton questionId="ch05_q14" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 吳王「使之將」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「使」和「將」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q14', 1)}} onChange={(e) => onChange('ch05_q14_a1', e.target.value)} value={userAnswers.ch05_q14_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「使」：派遣；「將」：領兵
          </div>
        )}
      </div>

      {/* Q15 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q15</h3>
          <StarButton questionId="ch05_q15" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「裂地」而封之</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「裂地」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q15', 1)}} onChange={(e) => onChange('ch05_q15_a1', e.target.value)} value={userAnswers.ch05_q15_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「裂地」：割出一塊土地
          </div>
        )}
      </div>

      {/* Q16 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q16</h3>
          <StarButton questionId="ch05_q16" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 能不龜手「一也」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「一也」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q16', 1)}} onChange={(e) => onChange('ch05_q16_a1', e.target.value)} value={userAnswers.ch05_q16_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「一也」：同樣一條
          </div>
        )}
      </div>

      {/* Q17 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q17</h3>
          <StarButton questionId="ch05_q17" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 或以封，或不免於洴澼絖，則「所用之異」也</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「所用之異」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q17', 1)}} onChange={(e) => onChange('ch05_q17_a1', e.target.value)} value={userAnswers.ch05_q17_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「所用之異」：使用方法的不同
          </div>
        )}
      </div>

      {/* Q18 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q18</h3>
          <StarButton questionId="ch05_q18" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 何不「慮以為大樽而浮乎江湖」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「慮以為」和「樽」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q18', 1)}} onChange={(e) => onChange('ch05_q18_a1', e.target.value)} value={userAnswers.ch05_q18_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「慮以為」：繫著、挖空；「樽」：形似酒器，可以拴在腰間以助漂浮的游泳工具（腰舟）
          </div>
        )}
      </div>

      {/* Q19 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q19</h3>
          <StarButton questionId="ch05_q19" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 則夫子猶有「蓬」之心也夫</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「蓬之心」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q19', 1)}} onChange={(e) => onChange('ch05_q19_a1', e.target.value)} value={userAnswers.ch05_q19_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「蓬之心」：茅塞不通、知識淺薄不能通達事理的心
          </div>
        )}
      </div>

      {/* Q20 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q20</h3>
          <StarButton questionId="ch05_q20" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 人謂之「樗」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「樗」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q20', 1)}} onChange={(e) => onChange('ch05_q20_a1', e.target.value)} value={userAnswers.ch05_q20_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「樗」：落葉喬木，木材皮粗質劣
          </div>
        )}
      </div>

      {/* Q21 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q21</h3>
          <StarButton questionId="ch05_q21" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 其大本「擁腫而不中繩墨」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「擁腫」、「中」和「繩墨」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q21', 1)}} onChange={(e) => onChange('ch05_q21_a1', e.target.value)} value={userAnswers.ch05_q21_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「擁腫」：疙瘩盤結；「中」：符合；「繩墨」：木工畫直線用的工具
          </div>
        )}
      </div>

      {/* Q22 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q22</h3>
          <StarButton questionId="ch05_q22" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 其小枝「卷曲而不中規矩」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「卷曲」、「規矩」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q22', 1)}} onChange={(e) => onChange('ch05_q22_a1', e.target.value)} value={userAnswers.ch05_q22_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「卷曲」：彎彎曲曲；「規矩」：規用以劃圓，矩用以劃方的工具
          </div>
        )}
      </div>

      {/* Q23 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q23</h3>
          <StarButton questionId="ch05_q23" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 立之「塗」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「塗」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q23', 1)}} onChange={(e) => onChange('ch05_q23_a1', e.target.value)} value={userAnswers.ch05_q23_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「塗」：路途、路
          </div>
        )}
      </div>

      {/* Q24 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q24</h3>
          <StarButton questionId="ch05_q24" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 衆所同「去」也</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「去」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q24', 1)}} onChange={(e) => onChange('ch05_q24_a1', e.target.value)} value={userAnswers.ch05_q24_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「去」：離棄、拋棄
          </div>
        )}
      </div>

      {/* Q25 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q25</h3>
          <StarButton questionId="ch05_q25" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 子獨不見「狸狌」乎</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「狸狌」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q25', 1)}} onChange={(e) => onChange('ch05_q25_a1', e.target.value)} value={userAnswers.ch05_q25_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「狸狌」：野貓（狸子）和黃鼠狼
          </div>
        )}
      </div>

      {/* Q26 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q26</h3>
          <StarButton questionId="ch05_q26" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 卑身而伏，以「候敖者」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「候敖者」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q26', 1)}} onChange={(e) => onChange('ch05_q26_a1', e.target.value)} value={userAnswers.ch05_q26_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「候敖者」：等待出遊、閒遊的小動物
          </div>
        )}
      </div>

      {/* Q27 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q27</h3>
          <StarButton questionId="ch05_q27" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 東西「跳梁」，「不辟」高下</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「跳梁」、「辟」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q27', 1)}} onChange={(e) => onChange('ch05_q27_a1', e.target.value)} value={userAnswers.ch05_q27_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「跳梁」：跳躍；「辟」：避
          </div>
        )}
      </div>

      {/* Q28 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q28</h3>
          <StarButton questionId="ch05_q28" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「中於機辟」，「死於罔罟」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「機辟」、「罔罟」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q28', 1)}} onChange={(e) => onChange('ch05_q28_a1', e.target.value)} value={userAnswers.ch05_q28_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「機辟」：捕捉鳥獸的工具、機關；「罔罟」：漁獵的網具
          </div>
        )}
      </div>

      {/* Q29 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q29</h3>
          <StarButton questionId="ch05_q29" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 今夫「斄牛」，其大若「垂天之雲」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「斄牛」、「垂天之雲」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q29', 1)}} onChange={(e) => onChange('ch05_q29_a1', e.target.value)} value={userAnswers.ch05_q29_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「斄牛」：犛牛；「垂天之雲」：天際的雲團
          </div>
        )}
      </div>

      {/* Q30 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q30</h3>
          <StarButton questionId="ch05_q30" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 此能為「大」矣，而不能「執鼠」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「執」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q30', 1)}} onChange={(e) => onChange('ch05_q30_a1', e.target.value)} value={userAnswers.ch05_q30_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「執」：捉、擒獲
          </div>
        )}
      </div>

      {/* Q31 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q31</h3>
          <StarButton questionId="ch05_q31" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 何不樹之於「無何有之鄉」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「無何有之鄉」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q31', 1)}} onChange={(e) => onChange('ch05_q31_a1', e.target.value)} value={userAnswers.ch05_q31_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「無何有之鄉」：什麼也沒有的鄉土、虛無縹緲的地方
          </div>
        )}
      </div>

      {/* Q32 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q32</h3>
          <StarButton questionId="ch05_q32" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「廣莫」之野</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「廣莫」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q32', 1)}} onChange={(e) => onChange('ch05_q32_a1', e.target.value)} value={userAnswers.ch05_q32_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「廣莫」：遼闊廣大
          </div>
        )}
      </div>

      {/* Q33 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q33</h3>
          <StarButton questionId="ch05_q33" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「彷徨」乎無為其側，「逍遙」乎寢臥其下</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「彷徨」、「逍遙」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q33', 1)}} onChange={(e) => onChange('ch05_q33_a1', e.target.value)} value={userAnswers.ch05_q33_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「彷徨」：徘徊；「逍遙」：優游自在
          </div>
        )}
      </div>

      {/* Q34 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q34</h3>
          <StarButton questionId="ch05_q34" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 「不夭斤斧」，物無害者</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「夭」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q34', 1)}} onChange={(e) => onChange('ch05_q34_a1', e.target.value)} value={userAnswers.ch05_q34_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「夭」：砍伐
          </div>
        )}
      </div>

      {/* Q35 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>Q35</h3>
          <StarButton questionId="ch05_q35" />
        </div>
        <p style={{marginBottom: '12px'}}><b>原文：</b> 無所可用，「安所困苦哉」</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「安所」：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch05_q35', 1)}} onChange={(e) => onChange('ch05_q35_a1', e.target.value)} value={userAnswers.ch05_q35_a1 || ''} placeholder="輸入翻譯..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            「安所」：怎、難道（反問句，意為「有什麼艱難窮苦呢」）
          </div>
        )}
      </div>

      <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingTop: '30px', marginTop: '30px', paddingBottom: '15px', borderBottom: '3px solid #dc2626'}}>第二部分：問答</h3>

      {/* Q&A 1 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q1</h3>
          <StarButton questionId="ch05_qa1" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 作者如何以對比說理？（請分別說明三組對比）</p>
        <textarea style={{...styles.input, minHeight: '150px'}} onChange={(e) => onChange('ch05_qa1_a1', e.target.value)} value={userAnswers.ch05_qa1_a1 || ''} placeholder="請回答..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            對比一：「宋人」與「客」：「宋人」世代只以漂洗絲絮為業，故此「不龜手之藥」也只用於此，辛勤勞動，卻是收入微薄，「不過數金」，賣藥方給客人，賺到的也只是百金；「客」則沒有家族背景限制，故能超脫固有框架，將此藥用於打水戰，助吳國在冬天水戰中打敗越人，獲賜地封侯，所得遠超於「宋人」。對比兩者使用「不龜手之藥」的方法及兩者在回報上的對比，可見宋人不懂另覓新徑，突顯因循守舊和刻板愚昧。從而說明不能以單一角度看事物的用途，才可發揮事物的最大效用。
            <br/><br/>
            對比二：「狸狌」與「斄牛」：「狸狌」天生有才，常在林間捕食，盡展所能。「斄牛」是龐然大物，空有外表，沒有捕捉小動物的本領。以世俗準則來衡量，「狸狌」是有用的，理應是世人追求的目標，但牠們往往誤中埋伏而喪命，得不償失；「斄牛」在世人眼中毫無用處，不可能被人徵用，但因此避開禍患。作者將兩者的才能和結果作對比，說明有才能的事物雖然有用，但因恃才妄作而未必有好下場；沒有才能的似乎被世人遺棄，卻可以保全生命。由此突顯「無用」的可貴，強調不要只以能否發揮才能判斷事物的價值。
            <br/><br/>
            對比三：惠子與莊子的「小用」與「大用」：惠子雖有「五石」之大的葫蘆，但只想到用作盛水器和水瓢，未曾想過中空的葫蘆也可以致用。他眼光狹隘，原因是囿於日常生活，也囿於既有識見。相反，莊子善於用大，明白到即使是同一物件，只要擺脫舊有思想的束縛，仍然可以使物盡其用。故此，大葫蘆不能盛水舀水，就不以之盛水舀水，乃使其中空，發揮其浮於水面的功能。
          </div>
        )}
      </div>

      {/* Q&A 2 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q2</h3>
          <StarButton questionId="ch05_qa2" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 莊子以「不龜手之藥」說明了什麼道理？</p>
        <textarea style={{...styles.input, minHeight: '120px'}} onChange={(e) => onChange('ch05_qa2_a1', e.target.value)} value={userAnswers.ch05_qa2_a1 || ''} placeholder="請回答..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            莊子以此說明不應因為世俗的觀念而限制了事物的用途。「不龜手之藥」的「用」可以令你在漂洗時免於凍僵而賺得數金，又或是賣給客人而得到百金，也可以助吳國在冬天打水戰時戰勝越人，令客人獲封地為侯，這只視乎使用者如何對待該物。如果你把「不龜手之藥」用於漂洗，對很多人，例如諸侯或其他想取得功名利祿的人來說，「不龜手之藥」便是一無用之物，認為宋人乃拙於用大；但如果你把「不龜手之藥」用於戰爭，則對諸候來說，這藥又變得有用了，才是善於用大。
          </div>
        )}
      </div>

      {/* Q&A 3 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q3</h3>
          <StarButton questionId="ch05_qa3" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 狸狌與斄牛之用為何?</p>
        <textarea style={{...styles.input, minHeight: '120px'}} onChange={(e) => onChange('ch05_qa3_a1', e.target.value)} value={userAnswers.ch05_qa3_a1 || ''} placeholder="請回答..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            莊子叫我們想一下身手靈活的狸狌，牠們敏捷得可以一天到晚在高高的橫樑跳來跳去，又可以伏身於地，隨時捕捉眼前的獵物。但這隻野貓卻因為如此能力被獵人看上了，最終被捕器所傷，甚至死於陷阱之中。相反，一隻大得像天上的雲的斄牛，雖然笨拙得連捕鼠的能力都沒有，看似沒有用，但卻因為牠的無用，使牠可以避免如靈活的狸狌般，受人類的煩擾與侵害。莊子認為，惠子那棵「樗」其實就如這隻巨大的斄牛，正正因為無用，可以不受木匠砍伐之害，而逍遙自在地生活於路旁。
          </div>
        )}
      </div>

      {/* Q&A 4 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q4</h3>
          <StarButton questionId="ch05_qa4" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 莊子借狸狌與斄牛的例子說明了什麼道理？</p>
        <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch05_qa4_a1', e.target.value)} value={userAnswers.ch05_qa4_a1 || ''} placeholder="請回答..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            莊子借此指出所謂有用的東西，其實正正會因為它的有用，為自身招來損害；所謂無用的東西，其實正正會因為它的無用，可以使自己免於外物的侵擾。這個道理，亦即是所謂的「無用之用」。
          </div>
        )}
      </div>

      {/* Q&A 5 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q5</h3>
          <StarButton questionId="ch05_qa5" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 惠子提及樗樹的無用有何目的？莊子批評惠子拙於用大，旨在批評惠子有何價值觀的錯誤？</p>
        <textarea style={{...styles.input, minHeight: '120px'}} onChange={(e) => onChange('ch05_qa5_a1', e.target.value)} value={userAnswers.ch05_qa5_a1 || ''} placeholder="請回答..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            惠子想借樗樹大而無用以諷刺莊子的學說過於弘大，不切實際，故難以跟從。莊子批評惠子拙於用大，是指他受世俗所影響，未能破除成見及偏執，受自身及世俗人的限制，對事物的用流於表面，忽略其自身的功用（本性）。
          </div>
        )}
      </div>

      {/* Q&A 6 - Table Question */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q6</h3>
          <StarButton questionId="ch05_qa6" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 莊子借有用和無用的討論，說明了哪三個道理？</p>
        <p style={{marginBottom: '12px', color: '#64748b', fontSize: '0.9rem'}}>請填充下表（保留喻體/本體列，其他列請自行填充）：</p>
        
        <div style={{overflowX: 'auto', marginBottom: '12px'}}>
          <table style={{width: '100%', borderCollapse: 'collapse', marginBottom: '12px'}}>
            <thead>
              <tr style={{backgroundColor: '#f0f0f0'}}>
                <th style={{border: '1px solid #ccc', padding: '10px', textAlign: 'left', fontWeight: 'bold'}}>喻體/本體</th>
                <th style={{border: '1px solid #ccc', padding: '10px', textAlign: 'left', fontWeight: 'bold'}}>道理/說明要點</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{border: '1px solid #ccc', padding: '10px'}}>「五石之瓠」、「樗樹」</td>
                <td style={{border: '1px solid #ccc', padding: '10px'}}>
                  <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('ch05_qa6_row1', e.target.value)} value={userAnswers.ch05_qa6_row1 || ''} placeholder="填寫此行"/>
                </td>
              </tr>
              <tr>
                <td style={{border: '1px solid #ccc', padding: '10px'}}>蓬草</td>
                <td style={{border: '1px solid #ccc', padding: '10px'}}>
                  <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('ch05_qa6_row2', e.target.value)} value={userAnswers.ch05_qa6_row2 || ''} placeholder="填寫此行"/>
                </td>
              </tr>
              <tr>
                <td style={{border: '1px solid #ccc', padding: '10px'}}>狸狌</td>
                <td style={{border: '1px solid #ccc', padding: '10px'}}>
                  <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('ch05_qa6_row3', e.target.value)} value={userAnswers.ch05_qa6_row3 || ''} placeholder="填寫此行"/>
                </td>
              </tr>
              <tr>
                <td style={{border: '1px solid #ccc', padding: '10px'}}>犛牛</td>
                <td style={{border: '1px solid #ccc', padding: '10px'}}>
                  <input style={{...styles.input, width: '100%'}} onChange={(e) => onChange('ch05_qa6_row4', e.target.value)} value={userAnswers.ch05_qa6_row4 || ''} placeholder="填寫此行"/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {showAnswers && (
          <div style={styles.answerKey}>
            <strong>參考答案表格：</strong>
            <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '10px', backgroundColor: '#f9fafb'}}>
              <thead>
                <tr style={{backgroundColor: '#e5e7eb'}}>
                  <th style={{border: '1px solid #ccc', padding: '10px', textAlign: 'left', fontWeight: 'bold'}}>喻體/本體</th>
                  <th style={{border: '1px solid #ccc', padding: '10px', textAlign: 'left', fontWeight: 'bold'}}>道理/說明要點</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{border: '1px solid #ccc', padding: '10px'}}>「五石之瓠」、「樗樹」</td>
                  <td style={{border: '1px solid #ccc', padding: '10px'}}>莊子消極出世的言論 / 大而無用，世人唾棄莊子的言論</td>
                </tr>
                <tr>
                  <td style={{border: '1px solid #ccc', padding: '10px'}}>蓬草</td>
                  <td style={{border: '1px solid #ccc', padding: '10px'}}>惠子「致用」的思想 / 彎曲閉塞，難以透徹</td>
                </tr>
                <tr>
                  <td style={{border: '1px solid #ccc', padding: '10px'}}>狸狌</td>
                  <td style={{border: '1px solid #ccc', padding: '10px'}}>急於致用但不得善終的人 / 只顧求進，死於非命</td>
                </tr>
                <tr>
                  <td style={{border: '1px solid #ccc', padding: '10px'}}>犛牛</td>
                  <td style={{border: '1px solid #ccc', padding: '10px'}}>無所可用但能保全天年的人 / 一無是處，頤養天年</td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '10px'}}><strong>比喻論證的優點：</strong> 比喻能夠將抽象的道理變得簡單易明，作者善於運用比喻，具體說明了哲學的各項道理。</p>
          </div>
        )}
      </div>

      <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
        <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
      </div>
    </div>
  );
};

export default Chinese_05;
