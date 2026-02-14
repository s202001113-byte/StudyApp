import { ArrowLeft } from 'lucide-react';

const Chinese_04 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => {
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
        <StarButton questionId="ch04_q1" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 師者，所以「傳道、受業、解惑」也。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「傳道、受業、解惑」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q1', 1)}} onChange={(e) => onChange('ch04_q1_a1', e.target.value)} value={userAnswers.ch04_q1_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「傳道、受業、解惑」：傳授道理、教授學業（知識）、解答疑難
        </div>
      )}
    </div>

    {/* Q2 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2</h3>
        <StarButton questionId="ch04_q2" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 人非「生而知之者」，孰能無惑？</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「生而知之者」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q2', 1)}} onChange={(e) => onChange('ch04_q2_a1', e.target.value)} value={userAnswers.ch04_q2_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「生而知之者」：生來就懂得的人
        </div>
      )}
    </div>

    {/* Q3 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3</h3>
        <StarButton questionId="ch04_q3" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 惑而「不從師」，其為惑也終不解矣。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「不從師」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q3', 1)}} onChange={(e) => onChange('ch04_q3_a1', e.target.value)} value={userAnswers.ch04_q3_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「不從師」：不向老師學習、不依從老師
        </div>
      )}
    </div>

    {/* Q4 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4</h3>
        <StarButton questionId="ch04_q4" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 生乎吾前，其聞道也，「固先乎吾」，吾從而師之。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「固先乎吾」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q4', 1)}} onChange={(e) => onChange('ch04_q4_a1', e.target.value)} value={userAnswers.ch04_q4_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「固先乎吾」：本來就比我先懂得道理、當然比我先聽聞道理
        </div>
      )}
    </div>

    {/* Q5 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5</h3>
        <StarButton questionId="ch04_q5" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 生乎吾後，其聞道也，「亦先乎吾」，吾從而師之。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「亦先乎吾」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q5', 1)}} onChange={(e) => onChange('ch04_q5_a1', e.target.value)} value={userAnswers.ch04_q5_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「亦先乎吾」：也比我先懂得道理、也先聽聞道理
        </div>
      )}
    </div>

    {/* Q6 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6</h3>
        <StarButton questionId="ch04_q6" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 吾師「道也」，夫「庸知」其年之先後生於吾乎？</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「庸知」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q6', 1)}} onChange={(e) => onChange('ch04_q6_a1', e.target.value)} value={userAnswers.ch04_q6_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「庸知」：豈用知道、怎麼知道、何必在意
        </div>
      )}
    </div>

    {/* Q7 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7</h3>
        <StarButton questionId="ch04_q7" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 是故「無貴無賤，無長無少」，道之所存，師之所存也。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「無貴無賤，無長無少」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q7', 1)}} onChange={(e) => onChange('ch04_q7_a1', e.target.value)} value={userAnswers.ch04_q7_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「無貴無賤，無長無少」：（選師不論）無論貴賤、無論年齡大小
        </div>
      )}
    </div>

    {/* Q8 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8</h3>
        <StarButton questionId="ch04_q8" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 古之聖人，其出人也遠矣，「猶且從師而問焉」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「猶且從師而問焉」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q8', 1)}} onChange={(e) => onChange('ch04_q8_a1', e.target.value)} value={userAnswers.ch04_q8_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「猶且從師而問焉」：尚且跟從老師去請教、仍然向老師請教
        </div>
      )}
    </div>

    {/* Q9 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q9</h3>
        <StarButton questionId="ch04_q9" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 今之眾人，其下聖人也亦遠矣，而「恥學於師」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「恥學於師」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q9', 1)}} onChange={(e) => onChange('ch04_q9_a1', e.target.value)} value={userAnswers.ch04_q9_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「恥學於師」：把從師學習視為羞恥、以跟老師學習為恥
        </div>
      )}
    </div>

    {/* Q10 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q10</h3>
        <StarButton questionId="ch04_q10" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 聖益聖，愚益愚，聖人之所以為聖，愚人之所以為愚，其「皆出於此」乎？</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「皆出於此」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q10', 1)}} onChange={(e) => onChange('ch04_q10_a1', e.target.value)} value={userAnswers.ch04_q10_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「皆出於此」：都是源於這個（原因）、大概都歸咎於此
        </div>
      )}
    </div>

    {/* Q11 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q11</h3>
        <StarButton questionId="ch04_q11" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 愛其子，擇師而教之，於其身也則「恥師焉」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「恥師焉」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q11', 1)}} onChange={(e) => onChange('ch04_q11_a1', e.target.value)} value={userAnswers.ch04_q11_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「恥師焉」：卻把從師學習視為羞恥、卻以從師為恥
        </div>
      )}
    </div>

    {/* Q12 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q12</h3>
        <StarButton questionId="ch04_q12" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 彼童子之師，授之書而習其「句讀」者。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「句讀」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q12', 1)}} onChange={(e) => onChange('ch04_q12_a1', e.target.value)} value={userAnswers.ch04_q12_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「句讀」：文辭的分句停頓（句是句子完成的地方，讀是未完成而須停頓的地方）
        </div>
      )}
    </div>

    {/* Q13 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q13</h3>
        <StarButton questionId="ch04_q13" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 句讀之不知，「惑之不解」，或師焉，或不焉。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「惑之不解」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q13', 1)}} onChange={(e) => onChange('ch04_q13_a1', e.target.value)} value={userAnswers.ch04_q13_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「惑之不解」：疑難不解決（大人遇到疑難卻不解決）
        </div>
      )}
    </div>

    {/* Q14 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q14</h3>
        <StarButton questionId="ch04_q14" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 小學而「大遺」，吾未見其明也。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「大遺」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q14', 1)}} onChange={(e) => onChange('ch04_q14_a1', e.target.value)} value={userAnswers.ch04_q14_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「大遺」：大的東西被遺棄（不學）、大道理卻放棄不學
        </div>
      )}
    </div>

    {/* Q15 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q15</h3>
        <StarButton questionId="ch04_q15" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 巫、醫、樂師、百工之人，「不恥相師」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「不恥相師」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q15', 1)}} onChange={(e) => onChange('ch04_q15_a1', e.target.value)} value={userAnswers.ch04_q15_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「不恥相師」：不把互相學習當作羞恥、不以向別人學習為恥
        </div>
      )}
    </div>

    {/* Q16 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q16</h3>
        <StarButton questionId="ch04_q16" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 士大夫之族，曰師、曰弟子云者，則「群聚而笑之」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「群聚而笑之」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q16', 1)}} onChange={(e) => onChange('ch04_q16_a1', e.target.value)} value={userAnswers.ch04_q16_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「群聚而笑之」：（士大夫們）聚集在一起嘲笑他們、一起嘲諷
        </div>
      )}
    </div>

    {/* Q17 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q17</h3>
        <StarButton questionId="ch04_q17" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 彼與彼年相若也，「道相似也」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「道相似也」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q17', 1)}} onChange={(e) => onChange('ch04_q17_a1', e.target.value)} value={userAnswers.ch04_q17_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「道相似也」：學問境界也相當、道德修養也接近
        </div>
      )}
    </div>

    {/* Q18 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q18</h3>
        <StarButton questionId="ch04_q18" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 位卑則足羞，「官盛則近諛」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「官盛則近諛」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q18', 1)}} onChange={(e) => onChange('ch04_q18_a1', e.target.value)} value={userAnswers.ch04_q18_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「官盛則近諛」：官位高的人就近於是諂媚、拜官位高的人為師則近於是為了奉承
        </div>
      )}
    </div>

    {/* Q19 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q19</h3>
        <StarButton questionId="ch04_q19" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 師道之不復，「可知矣」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「可知矣」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q19', 1)}} onChange={(e) => onChange('ch04_q19_a1', e.target.value)} value={userAnswers.ch04_q19_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「可知矣」：是可以了解的、是可以知道的
        </div>
      )}
    </div>

    {/* Q20 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q20</h3>
        <StarButton questionId="ch04_q20" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 巫、醫、樂師、百工之人，君子「不齒」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「不齒」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q20', 1)}} onChange={(e) => onChange('ch04_q20_a1', e.target.value)} value={userAnswers.ch04_q20_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「不齒」：不屑與他們同列、不把他們放在眼裡
        </div>
      )}
    </div>

    {/* Q21 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q21</h3>
        <StarButton questionId="ch04_q21" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 今其智乃反不能及，其「可怪也歟」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「可怪也歟」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q21', 1)}} onChange={(e) => onChange('ch04_q21_a1', e.target.value)} value={userAnswers.ch04_q21_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「可怪也歟」：真是奇怪啊、不是很奇怪嗎
        </div>
      )}
    </div>

    {/* Q22 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q22</h3>
        <StarButton questionId="ch04_q22" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 聖人「無常師」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「無常師」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q22', 1)}} onChange={(e) => onChange('ch04_q22_a1', e.target.value)} value={userAnswers.ch04_q22_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「無常師」：沒有固定的老師、不拘於一個老師
        </div>
      )}
    </div>

    {/* Q23 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q23</h3>
        <StarButton questionId="ch04_q23" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 聞道「有先後」，「術業有專攻」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「有先後」和「術業有專攻」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q23', 1)}} onChange={(e) => onChange('ch04_q23_a1', e.target.value)} value={userAnswers.ch04_q23_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「有先後」：有先懂有後懂、學習道理有先後順序；「術業有專攻」：學問技藝各有所長、各誰所專
        </div>
      )}
    </div>

    {/* Q24 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q24</h3>
        <StarButton questionId="ch04_q24" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 李氏子蟠，年十七，好古文，六藝經傳，皆「通習之」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「通習之」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q24', 1)}} onChange={(e) => onChange('ch04_q24_a1', e.target.value)} value={userAnswers.ch04_q24_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「通習之」：（都）精通並且習練了、（全部都）學習掌握了
        </div>
      )}
    </div>

    {/* Q25 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q25</h3>
        <StarButton questionId="ch04_q25" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 不拘於時，學於余。余「嘉其能行古道」。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「嘉其能行古道」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q25', 1)}} onChange={(e) => onChange('ch04_q25_a1', e.target.value)} value={userAnswers.ch04_q25_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「嘉其能行古道」：我讚許他能夠實踐古人從師學習的道理、我稱讚他能夠遵循古人的傳統
        </div>
      )}
    </div>

    {/* Q26 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q26</h3>
        <StarButton questionId="ch04_q26" />
      </div>
      <p style={{marginBottom: '12px'}}><b>原文：</b> 作《師說》以「貽」之。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯「貽」：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch04_q26', 1)}} onChange={(e) => onChange('ch04_q26_a1', e.target.value)} value={userAnswers.ch04_q26_a1 || ''} placeholder="輸入翻譯..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          「貽」：贈送、留給
        </div>
      )}
    </div>

    <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingTop: '30px', marginTop: '30px', paddingBottom: '15px', borderBottom: '3px solid #dc2626'}}>第二部分：問答</h3>

    {/* Q&A 1 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q1</h3>
        <StarButton questionId="ch04_qa1" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 時人有為他們的子女擇師學習，為何他們在韓愈眼中是「小學而大遺」（第 4 段）？</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch04_qa1_a1', e.target.value)} value={userAnswers.ch04_qa1_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          因為時人為子女擇師學句讀，對句讀這些小問題會請教老師，相反，他們自身則恥於從師學習儒家道統的大學問，有疑惑也不請教老師，故韓愈認為時人在句讀這小事上會學習，大學問卻放棄不學，是「小學而大遺」。
        </div>
      )}
    </div>

    {/* Q&A 2 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q2</h3>
        <StarButton questionId="ch04_qa2" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 作者舉出孔子向郯子、萇弘、師襄、老聃請教的例子，用意何在？</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch04_qa2_a1', e.target.value)} value={userAnswers.ch04_qa2_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          作者舉出古聖人孔子，尚且向不及自己賢能的郯子、萇弘、師襄、老聃請教，可見聖人無常師，從而論證弟子未必不及老師，老師亦未必比弟子賢能的道理。
        </div>
      )}
    </div>

    {/* Q&A 3 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q3</h3>
        <StarButton questionId="ch04_qa3" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 試指出「三人行，則必有我師。」一句運用了哪種例證手法？以及說明了什麼道理？</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch04_qa3_a1', e.target.value)} value={userAnswers.ch04_qa3_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          此句運用了語例。作者引用孔子的話，說明三人之中一定有人可以當我的老師，這是因為他們各有專長或學問，論證師生的區別在於領會道理的時間有先後。
        </div>
      )}
    </div>

    {/* Q&A 4 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q4</h3>
        <StarButton questionId="ch04_qa4" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 士大夫與「巫、醫、樂師、百工之人」的從師態度有何不同？</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch04_qa4_a1', e.target.value)} value={userAnswers.ch04_qa4_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          士大夫計較老師的年齡長幼及地位高低，因而恥於向年紀相若、學問差不多的人學習，更恥於向地位較自己低的人學習，但又怕以地位較自己高的人為師會被視為阿諛奉承。相反，「巫、醫、樂師、百工之人」則不恥相師。
        </div>
      )}
    </div>

    {/* Q&A 5 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q5</h3>
        <StarButton questionId="ch04_qa5" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 文中通過三組對比分別證明了甚麼道理？</p>
      <textarea style={{...styles.input, minHeight: '120px'}} onChange={(e) => onChange('ch04_qa5_a1', e.target.value)} value={userAnswers.ch04_qa5_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          第一組：「古之聖人」與「今之眾人」從師態度的對比，賢德的古代聖人尚且樂於從師學習，證明「今之眾人」恥於從師問學是錯誤的。第二組：「童子之學」與「達道之學」的對比，只從師學習句讀，而忽視老師「傳道受業解惑」的職能，是「小學而大遺」的做法，是錯誤的。第三組：「巫、醫、樂師、百工之人」與「士大夫之族」的對比，士大夫反不如從事微賤職業的人那樣明白從師的重要性，反映了士大夫恥於從師的錯誤，亦證明了從師學習應「無貴無賤」。
        </div>
      )}
    </div>

    {/* Q&A 6 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q6</h3>
        <StarButton questionId="ch04_qa6" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 韓愈在《師說》中對士大夫的哪些行為表示大惑不解？</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch04_qa6_a1', e.target.value)} value={userAnswers.ch04_qa6_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          士大夫挑選老師來教導兒子句讀，自己卻把求師視為可恥的事。他們認為不懂句讀這些小問題要請教老師，卻認為有疑難不能解決這些大問題不用請教老師。士大夫採取這種不聰明的做法，使韓愈感到大惑不解。
        </div>
      )}
    </div>

    {/* Q&A 7 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q7</h3>
        <StarButton questionId="ch04_qa7" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 士大夫的身份及他們的表現怎樣造成「師道之不復」的後果？</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch04_qa7_a1', e.target.value)} value={userAnswers.ch04_qa7_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          士大夫是社會上地位較高的人，他們的行為對社會風氣有很大影響，連讀書做官的人也不從師學習，從師的風氣當然不再存在。此外，他們聽到別人談論老師、弟子的事，就聚在一起譏笑，令有意從師的人因為害怕被人譏笑而不敢從師學習，使從師的風氣不能恢復。
        </div>
      )}
    </div>

    {/* Q&A 8 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q8</h3>
        <StarButton questionId="ch04_qa8" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b> 根據以下《師說》的引文回答問題。甲 生乎吾前，其聞道也，固先乎吾，吾從而師之；生乎吾後，其聞道也，亦先乎吾，吾從而師之。（第 2 段）乙 吾師道也，夫庸知其年之先後生於吾乎！（第 2 段）甲、乙兩句都與擇師不須理會老師的年紀有關，有人認為這種寫法語意重複，你有何意見？試就個人對文章的體會，略加說明。</p>
      <textarea style={{...styles.input, minHeight: '120px'}} onChange={(e) => onChange('ch04_qa8_a1', e.target.value)} value={userAnswers.ch04_qa8_a1 || ''} placeholder="請回答..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          我認為並不重複。作者在整篇文章都是針對當時的社會風氣提出見解，當時的人重視老師的年紀，作者認為這是嚴重錯誤的觀念，必須糾正，故此不厭其煩，再三強調擇師應以老師是否領會「道」為準則，而不須在乎老師的年紀。
        </div>
      )}
    </div>

    <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingTop: '30px', marginTop: '30px', paddingBottom: '15px', borderBottom: '3px solid #dc2626'}}>第三部分：對比表格</h3>

    {/* Table 1 - 第二段 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>表格 1：第二段</h3>
        <StarButton questionId="ch04_table1" />
      </div>
      <div style={{overflowX: 'auto', marginBottom: '20px'}}>
        <table style={{width: '100%', borderCollapse: 'collapse', border: '2px solid #334155'}}>
          <thead>
            <tr style={{backgroundColor: '#f1f5f9'}}>
              <th style={{padding: '12px', border: '1px solid #cbd5e1', textAlign: 'left', fontWeight: '700'}}>對象(與比內容)</th>
              <th style={{padding: '12px', border: '1px solid #cbd5e1', textAlign: 'left', fontWeight: '700'}}>聖人</th>
              <th style={{padding: '12px', border: '1px solid #cbd5e1', textAlign: 'left', fontWeight: '700'}}>令人</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding: '12px', border: '1px solid #cbd5e1', backgroundColor: '#fef3c7', fontWeight: '700'}}>特點(與比內容)</td>
              <td style={{padding: '12px', border: '1px solid #cbd5e1'}}>
                <div style={{marginBottom: '8px'}}>1.</div>
                <input 
                  style={{width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: getInputBgColor('ch04_table1_col1', 1)}}
                  value={userAnswers.ch04_table1_col1_row1 || ''} 
                  onChange={(e) => onChange('ch04_table1_col1_row1', e.target.value)} 
                  placeholder="輸入..." 
                />
                <div style={{marginTop: '12px', marginBottom: '8px'}}>2.</div>
                <input 
                  style={{width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: getInputBgColor('ch04_table1_col1', 2)}}
                  value={userAnswers.ch04_table1_col1_row2 || ''} 
                  onChange={(e) => onChange('ch04_table1_col1_row2', e.target.value)} 
                  placeholder="輸入..." 
                />
              </td>
              <td style={{padding: '12px', border: '1px solid #cbd5e1'}}>
                <div style={{marginBottom: '8px'}}>1.</div>
                <input 
                  style={{width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: getInputBgColor('ch04_table1_col2', 1)}}
                  value={userAnswers.ch04_table1_col2_row1 || ''} 
                  onChange={(e) => onChange('ch04_table1_col2_row1', e.target.value)} 
                  placeholder="輸入..." 
                />
                <div style={{marginTop: '12px', marginBottom: '8px'}}>2.</div>
                <input 
                  style={{width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: getInputBgColor('ch04_table1_col2', 2)}}
                  value={userAnswers.ch04_table1_col2_row2 || ''} 
                  onChange={(e) => onChange('ch04_table1_col2_row2', e.target.value)} 
                  placeholder="輸入..." 
                />
              </td>
            </tr>
            <tr>
              <td style={{padding: '12px', border: '1px solid #cbd5e1', backgroundColor: '#fef3c7', fontWeight: '700'}}>對比點</td>
              <td colSpan="2" style={{padding: '12px', border: '1px solid #cbd5e1', textAlign: 'center'}}>的對比</td>
            </tr>
            <tr>
              <td style={{padding: '12px', border: '1px solid #cbd5e1', backgroundColor: '#fef3c7', fontWeight: '700'}}>論證觀點</td>
              <td colSpan="2" style={{padding: '12px', border: '1px solid #cbd5e1'}}>
                <textarea 
                  style={{width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', minHeight: '60px'}}
                  value={userAnswers.ch04_table1_viewpoint || ''} 
                  onChange={(e) => onChange('ch04_table1_viewpoint', e.target.value)} 
                  placeholder="輸入觀點..." 
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Table 2 - 第四段 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>表格 2：第四段</h3>
        <StarButton questionId="ch04_table2" />
      </div>
      <div style={{overflowX: 'auto', marginBottom: '20px'}}>
        <table style={{width: '100%', borderCollapse: 'collapse', border: '2px solid #334155'}}>
          <thead>
            <tr style={{backgroundColor: '#f1f5f9'}}>
              <th style={{padding: '12px', border: '1px solid #cbd5e1', textAlign: 'left', fontWeight: '700'}}>對象(與比內容)</th>
              <th style={{padding: '12px', border: '1px solid #cbd5e1', textAlign: 'left', fontWeight: '700'}}>士大夫之子</th>
              <th style={{padding: '12px', border: '1px solid #cbd5e1', textAlign: 'left', fontWeight: '700'}}>士大夫</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding: '12px', border: '1px solid #cbd5e1', backgroundColor: '#fef3c7', fontWeight: '700'}}>特點(與比內容)</td>
              <td style={{padding: '12px', border: '1px solid #cbd5e1'}}>
                <div style={{marginBottom: '8px'}}>1.</div>
                <input 
                  style={{width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: getInputBgColor('ch04_table2_col1', 1)}}
                  value={userAnswers.ch04_table2_col1_row1 || ''} 
                  onChange={(e) => onChange('ch04_table2_col1_row1', e.target.value)} 
                  placeholder="輸入..." 
                />
                <div style={{marginTop: '12px', marginBottom: '8px'}}>2.</div>
                <input 
                  style={{width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: getInputBgColor('ch04_table2_col1', 2)}}
                  value={userAnswers.ch04_table2_col1_row2 || ''} 
                  onChange={(e) => onChange('ch04_table2_col1_row2', e.target.value)} 
                  placeholder="輸入..." 
                />
              </td>
              <td style={{padding: '12px', border: '1px solid #cbd5e1'}}>
                <div style={{marginBottom: '8px'}}>1.</div>
                <input 
                  style={{width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: getInputBgColor('ch04_table2_col2', 1)}}
                  value={userAnswers.ch04_table2_col2_row1 || ''} 
                  onChange={(e) => onChange('ch04_table2_col2_row1', e.target.value)} 
                  placeholder="輸入..." 
                />
                <div style={{marginTop: '12px', marginBottom: '8px'}}>2.</div>
                <input 
                  style={{width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: getInputBgColor('ch04_table2_col2', 2)}}
                  value={userAnswers.ch04_table2_col2_row2 || ''} 
                  onChange={(e) => onChange('ch04_table2_col2_row2', e.target.value)} 
                  placeholder="輸入..." 
                />
              </td>
            </tr>
            <tr>
              <td style={{padding: '12px', border: '1px solid #cbd5e1', backgroundColor: '#fef3c7', fontWeight: '700'}}>對比點</td>
              <td colSpan="2" style={{padding: '12px', border: '1px solid #cbd5e1', textAlign: 'center'}}>的對比</td>
            </tr>
            <tr>
              <td style={{padding: '12px', border: '1px solid #cbd5e1', backgroundColor: '#fef3c7', fontWeight: '700'}}>論證觀點</td>
              <td colSpan="2" style={{padding: '12px', border: '1px solid #cbd5e1'}}>
                <textarea 
                  style={{width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', minHeight: '60px'}}
                  value={userAnswers.ch04_table2_viewpoint || ''} 
                  onChange={(e) => onChange('ch04_table2_viewpoint', e.target.value)} 
                  placeholder="輸入觀點..." 
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Table 3 - 第五段 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>表格 3：第五段</h3>
        <StarButton questionId="ch04_table3" />
      </div>
      <div style={{overflowX: 'auto', marginBottom: '20px'}}>
        <table style={{width: '100%', borderCollapse: 'collapse', border: '2px solid #334155'}}>
          <thead>
            <tr style={{backgroundColor: '#f1f5f9'}}>
              <th style={{padding: '12px', border: '1px solid #cbd5e1', textAlign: 'left', fontWeight: '700'}}>對象(與比內容)</th>
              <th style={{padding: '12px', border: '1px solid #cbd5e1', textAlign: 'left', fontWeight: '700'}}>巫、醫、樂師、百工之人</th>
              <th style={{padding: '12px', border: '1px solid #cbd5e1', textAlign: 'left', fontWeight: '700'}}>士大夫</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding: '12px', border: '1px solid #cbd5e1', backgroundColor: '#fef3c7', fontWeight: '700'}}>特點(與比內容)</td>
              <td style={{padding: '12px', border: '1px solid #cbd5e1'}}>
                <div style={{marginBottom: '8px'}}>1.</div>
                <input 
                  style={{width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: getInputBgColor('ch04_table3_col1', 1)}}
                  value={userAnswers.ch04_table3_col1_row1 || ''} 
                  onChange={(e) => onChange('ch04_table3_col1_row1', e.target.value)} 
                  placeholder="輸入..." 
                />
                <div style={{marginTop: '12px', marginBottom: '8px'}}>2.</div>
                <input 
                  style={{width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: getInputBgColor('ch04_table3_col1', 2)}}
                  value={userAnswers.ch04_table3_col1_row2 || ''} 
                  onChange={(e) => onChange('ch04_table3_col1_row2', e.target.value)} 
                  placeholder="輸入..." 
                />
              </td>
              <td style={{padding: '12px', border: '1px solid #cbd5e1'}}>
                <div style={{marginBottom: '8px'}}>1.</div>
                <input 
                  style={{width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: getInputBgColor('ch04_table3_col2', 1)}}
                  value={userAnswers.ch04_table3_col2_row1 || ''} 
                  onChange={(e) => onChange('ch04_table3_col2_row1', e.target.value)} 
                  placeholder="輸入..." 
                />
                <div style={{marginTop: '12px', marginBottom: '8px'}}>2.</div>
                <input 
                  style={{width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: getInputBgColor('ch04_table3_col2', 2)}}
                  value={userAnswers.ch04_table3_col2_row2 || ''} 
                  onChange={(e) => onChange('ch04_table3_col2_row2', e.target.value)} 
                  placeholder="輸入..." 
                />
              </td>
            </tr>
            <tr>
              <td style={{padding: '12px', border: '1px solid #cbd5e1', backgroundColor: '#fef3c7', fontWeight: '700'}}>對比點</td>
              <td colSpan="2" style={{padding: '12px', border: '1px solid #cbd5e1', textAlign: 'center'}}>地位高低的對比</td>
            </tr>
            <tr>
              <td style={{padding: '12px', border: '1px solid #cbd5e1', backgroundColor: '#fef3c7', fontWeight: '700'}}>論證觀點</td>
              <td colSpan="2" style={{padding: '12px', border: '1px solid #cbd5e1'}}>
                <textarea 
                  style={{width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', minHeight: '60px'}}
                  value={userAnswers.ch04_table3_viewpoint || ''} 
                  onChange={(e) => onChange('ch04_table3_viewpoint', e.target.value)} 
                  placeholder="輸入觀點..." 
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
    </div>
  );
};

export default Chinese_04;
