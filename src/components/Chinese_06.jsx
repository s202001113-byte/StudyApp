import { ArrowLeft } from 'lucide-react';

const Chinese_06 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => {
  const getInputBgColor = (questionId, answerIndex) => {
    const answerId = `${questionId}_a${answerIndex}`;
    const userAnswer = userAnswers[answerId];
    if (!showAnswers) return '#ffffff';
    if (!userAnswer || userAnswer.trim() === '') return '#fee2e2';
    return '#dcfce7';
  };

  const getSelectBgColor = (questionId, answerIndex) => {
    const answerId = `${questionId}_a${answerIndex}`;
    const userAnswer = userAnswers[answerId];
    if (!showAnswers) return '#ffffff';
    if (!userAnswer || userAnswer === '') return '#fee2e2';
    return '#dcfce7';
  };

  return (
    <div>
      {/* PART 1: 配對 */}
      <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingBottom: '15px', borderBottom: '3px solid #dc2626'}}>第一部分：配對</h3>
      <p style={{color: '#64748b', fontSize: '0.95rem', marginBottom: '20px'}}>用戶需要配對文句和對應修辭手法</p>

      {/* Matching Exercise */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>配對練習</h3>
          <StarButton questionId="ch06_matching" />
        </div>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '20px', fontStyle: 'italic'}}>指出下列句子所使用的修辭手法</p>

        {/* Matching Item 1 */}
        <div style={{marginBottom: '20px', padding: '15px', backgroundColor: '#f8fafc', borderLeft: '4px solid #0ea5e9'}}>
          <p style={{marginBottom: '12px', color: '#1e40af', fontWeight: '600'}}>1. 星如雨</p>
          <p style={{backgroundColor: '#ffffff', padding: '12px', borderRadius: '6px', marginBottom: '12px', color: '#475569', borderLeft: '3px solid #fbbf24', fontStyle: 'italic'}}>原句：「更吹落、星如雨」</p>
          <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請選擇此句所使用的修辭手法：</p>
          <select style={{...styles.select, backgroundColor: getSelectBgColor('ch06_m1', 1), width: '100%', padding: '10px'}} onChange={(e) => onChange('ch06_m1_a1', e.target.value)} value={userAnswers.ch06_m1_a1 || ''}>
            <option value="">-- 請選擇 --</option>
            <option value="simile">明喻</option>
            <option value="metaphor">借喻</option>
            <option value="exaggeration">誇飾</option>
            <option value="metonymy">借代</option>
            <option value="reduplication">疊字</option>
            <option value="couplet">對偶</option>
          </select>
        </div>

        {/* Matching Item 2 */}
        <div style={{marginBottom: '20px', padding: '15px', backgroundColor: '#f8fafc', borderLeft: '4px solid #0ea5e9'}}>
          <p style={{marginBottom: '12px', color: '#1e40af', fontWeight: '600'}}>2. 東風夜放花千樹</p>
          <p style={{backgroundColor: '#ffffff', padding: '12px', borderRadius: '6px', marginBottom: '12px', color: '#475569', borderLeft: '3px solid #fbbf24', fontStyle: 'italic'}}>原句：「東風夜放花千樹」</p>
          <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請選擇此句所使用的修辭手法：</p>
          <select style={{...styles.select, backgroundColor: getSelectBgColor('ch06_m2', 1), width: '100%', padding: '10px'}} onChange={(e) => onChange('ch06_m2_a1', e.target.value)} value={userAnswers.ch06_m2_a1 || ''}>
            <option value="">-- 請選擇 --</option>
            <option value="simile">明喻</option>
            <option value="metaphor">借喻</option>
            <option value="exaggeration">誇飾</option>
            <option value="metonymy">借代</option>
            <option value="reduplication">疊字</option>
            <option value="couplet">對偶</option>
          </select>
        </div>

        {/* Matching Item 3 */}
        <div style={{marginBottom: '20px', padding: '15px', backgroundColor: '#f8fafc', borderLeft: '4px solid #0ea5e9'}}>
          <p style={{marginBottom: '12px', color: '#1e40af', fontWeight: '600'}}>3. 寶馬雕車香滿路</p>
          <p style={{backgroundColor: '#ffffff', padding: '12px', borderRadius: '6px', marginBottom: '12px', color: '#475569', borderLeft: '3px solid #fbbf24', fontStyle: 'italic'}}>原句：「寶馬雕車香滿路」</p>
          <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請選擇此句所使用的修辭手法：</p>
          <select style={{...styles.select, backgroundColor: getSelectBgColor('ch06_m3', 1), width: '100%', padding: '10px'}} onChange={(e) => onChange('ch06_m3_a1', e.target.value)} value={userAnswers.ch06_m3_a1 || ''}>
            <option value="">-- 請選擇 --</option>
            <option value="simile">明喻</option>
            <option value="metaphor">借喻</option>
            <option value="exaggeration">誇飾</option>
            <option value="metonymy">借代</option>
            <option value="reduplication">疊字</option>
            <option value="couplet">對偶</option>
          </select>
        </div>

        {/* Matching Item 4 */}
        <div style={{marginBottom: '20px', padding: '15px', backgroundColor: '#f8fafc', borderLeft: '4px solid #0ea5e9'}}>
          <p style={{marginBottom: '12px', color: '#1e40af', fontWeight: '600'}}>4. 蛾兒雪柳黃金縷</p>
          <p style={{backgroundColor: '#ffffff', padding: '12px', borderRadius: '6px', marginBottom: '12px', color: '#475569', borderLeft: '3px solid #fbbf24', fontStyle: 'italic'}}>原句：「蛾兒雪柳黃金縷」</p>
          <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請選擇此句所使用的修辭手法：</p>
          <select style={{...styles.select, backgroundColor: getSelectBgColor('ch06_m4', 1), width: '100%', padding: '10px'}} onChange={(e) => onChange('ch06_m4_a1', e.target.value)} value={userAnswers.ch06_m4_a1 || ''}>
            <option value="">-- 請選擇 --</option>
            <option value="simile">明喻</option>
            <option value="metaphor">借喻</option>
            <option value="exaggeration">誇飾</option>
            <option value="metonymy">借代</option>
            <option value="reduplication">疊字</option>
            <option value="couplet">對偶</option>
          </select>
        </div>

        {/* Matching Item 5 */}
        <div style={{marginBottom: '20px', padding: '15px', backgroundColor: '#f8fafc', borderLeft: '4px solid #0ea5e9'}}>
          <p style={{marginBottom: '12px', color: '#1e40af', fontWeight: '600'}}>5. 笑語盈盈暗香去</p>
          <p style={{backgroundColor: '#ffffff', padding: '12px', borderRadius: '6px', marginBottom: '12px', color: '#475569', borderLeft: '3px solid #fbbf24', fontStyle: 'italic'}}>原句：「笑語盈盈暗香去」</p>
          <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請選擇此句所使用的修辭手法：</p>
          <select style={{...styles.select, backgroundColor: getSelectBgColor('ch06_m5', 1), width: '100%', padding: '10px'}} onChange={(e) => onChange('ch06_m5_a1', e.target.value)} value={userAnswers.ch06_m5_a1 || ''}>
            <option value="">-- 請選擇 --</option>
            <option value="simile">明喻</option>
            <option value="metaphor">借喻</option>
            <option value="exaggeration">誇飾</option>
            <option value="metonymy">借代</option>
            <option value="reduplication">疊字</option>
            <option value="couplet">對偶</option>
          </select>
        </div>

        {/* Matching Item 6 */}
        <div style={{marginBottom: '20px', padding: '15px', backgroundColor: '#f8fafc', borderLeft: '4px solid #0ea5e9'}}>
          <p style={{marginBottom: '12px', color: '#1e40af', fontWeight: '600'}}>6. 鳳簫聲動，玉壺光轉</p>
          <p style={{backgroundColor: '#ffffff', padding: '12px', borderRadius: '6px', marginBottom: '12px', color: '#475569', borderLeft: '3px solid #fbbf24', fontStyle: 'italic'}}>原句：「鳳簫聲動，玉壺光轉」</p>
          <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請選擇此句所使用的修辭手法：</p>
          <select style={{...styles.select, backgroundColor: getSelectBgColor('ch06_m6', 1), width: '100%', padding: '10px'}} onChange={(e) => onChange('ch06_m6_a1', e.target.value)} value={userAnswers.ch06_m6_a1 || ''}>
            <option value="">-- 請選擇 --</option>
            <option value="simile">明喻</option>
            <option value="metaphor">借喻</option>
            <option value="exaggeration">誇飾</option>
            <option value="metonymy">借代</option>
            <option value="reduplication">疊字</option>
            <option value="couplet">對偶</option>
          </select>
        </div>

        {showAnswers && (
          <div style={styles.answerKey}>
            <strong>參考答案：</strong><br/>
            1. 星如雨 → <strong>明喻</strong>（形容燈火多如星，星像雨般多）<br/>
            2. 東風夜放花千樹 → <strong>借喻</strong>（以千樹繁花盛放借喻滿城花燈，同時也用誇飾）<br/>
            3. 寶馬雕車香滿路 → <strong>借代 + 誇飾</strong>（寶馬雕車借代為富有人家；誇大香氣之濃）<br/>
            4. 蛾兒雪柳黃金縷 → <strong>借代</strong>（以頭飾借代盛裝打扮的婦女）<br/>
            5. 笑語盈盈暗香去 → <strong>疊字</strong>（「盈盈」強調婦女歡聲笑語時的神態）<br/>
            6. 鳳簫聲動，玉壺光轉 → <strong>對偶</strong>（突出熱鬧的景況，對稱工整）
          </div>
        )}
      </div>

      {/* PART 2: 問答 */}
      <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', marginTop: '40px', paddingBottom: '15px', borderBottom: '3px solid #dc2626'}}>第二部分：問答</h3>

      {/* Q1 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q1</h3>
          <StarButton questionId="ch06_q1" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 作者怎樣描寫元夕夜的熱鬧情景？(6分)</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch06_q1', 1)}} onChange={(e) => onChange('ch06_q1_a1', e.target.value)} value={userAnswers.ch06_q1_a1 || ''} placeholder="輸入答案..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            作者從以下三方面描寫元夕夜的熱鬧情景：
            (1) 燈彩繁多，燈火燦爛：元宵夜花燈處處，色彩繽紛，如美麗的花朵；燈火又閃爍不停，像漫天星星，雨點般灑下來，四周閃耀奪目，令人目眩。(2分)
            (2) 歌舞娛興，人人狂歡：元宵夜樂聲響起，笙歌處處；人們舞動著魚形、龍形的花燈，通宵達旦。(2分)
            (3) 遊人眾多，絡繹不絕：富有人家來湊興觀賞花燈，車馬裝飾奢華；婦女們打扮花枝招展，在路上談談笑笑的賞燈，為場面增添熱鬧色彩。(2分)
          </div>
        )}
      </div>

      {/* Q2 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q2</h3>
          <StarButton questionId="ch06_q2" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 作者描寫元夕夜熱鬧的情況對表達主題有甚麼作用？(4分)</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch06_q2', 1)}} onChange={(e) => onChange('ch06_q2_a1', e.target.value)} value={userAnswers.ch06_q2_a1 || ''} placeholder="輸入答案..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            (1) 作者以眾人好熱鬧來反襯自己淡泊名利，孤高脫俗以及不願隨波逐流的品格。(2分)
            (2) 作者以此諷刺南宋君臣在國勢日危之下仍貪圖享樂，過著醉生夢死的生活，內心感到十分憤慨。(2分)
          </div>
        )}
      </div>

      {/* Q3 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q3</h3>
          <StarButton questionId="ch06_q3" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 試分別說明青玉案一詞上下片的內容。(4分)</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px'}}>上片內容：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch06_q3', 1)}} onChange={(e) => onChange('ch06_q3_a1', e.target.value)} value={userAnswers.ch06_q3_a1 || ''} placeholder="輸入上片內容..."/>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px', marginTop: '12px'}}>下片內容：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch06_q3', 2)}} onChange={(e) => onChange('ch06_q3_a2', e.target.value)} value={userAnswers.ch06_q3_a2 || ''} placeholder="輸入下片內容..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            (1) 上片：極力描寫元夕夜燈月交輝，笙歌不絕，人們出遊的繁華熱鬧景象。(2分)
            (2) 下片：先刻劃一般婦女的裝扮，反襯他所尋覓的意中人——一個孤高脫俗，自甘淡泊，獨自站在燈火闌珊處的女子。(2分)
          </div>
        )}
      </div>

      {/* Q4 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q4</h3>
          <StarButton questionId="ch06_q4" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 作者在詞中分別運用了「借代」及「誇張」手法。試各引錄句原文。(2分)</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px'}}>借代手法的句子：</p>
        <input style={{...styles.input}} onChange={(e) => onChange('ch06_q4_a1', e.target.value)} value={userAnswers.ch06_q4_a1 || ''} placeholder="輸入句子..."/>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px', marginTop: '12px'}}>誇張手法的句子：</p>
        <input style={{...styles.input}} onChange={(e) => onChange('ch06_q4_a2', e.target.value)} value={userAnswers.ch06_q4_a2 || ''} placeholder="輸入句子..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            (1) 借代：「蛾兒雪柳黃金縷」借代為精心打扮的女子，或「寶馬雕車香滿路」借代為富有人家(1分)
            (2) 誇張：「東風夜放花千樹，更吹落，星如雨」誇張了燈火的多，或「寶馬雕車香滿路」誇張了人的多(1分)
          </div>
        )}
      </div>

      {/* Q5 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q5</h3>
          <StarButton questionId="ch06_q5" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 作者追慕的女子與一般婦女有何不同？作者運用甚麼手法突出那位女子的形象？試加以解釋。(4分)</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px'}}>兩者區別及手法說明：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch06_q5', 1)}} onChange={(e) => onChange('ch06_q5_a1', e.target.value)} value={userAnswers.ch06_q5_a1 || ''} placeholder="輸入答案..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            一般婦女：配戴各式精緻的頭飾，打扮得花枝招展，嫵媚動人，邊走邊談笑，穿插在擁擠喧鬧的人群當中。(1分)
            追慕的女子：不同凡俗，自甘寂寞，獨自站在燈火闌珊處，品格孤高。(1分)
            手法：作者運用反襯的手法突出他所追慕的女子。他先寫那些愛好熱鬧、裝扮得花枝招展的女子，然後反襯那位孤高淡雅、不慕繁華的女子，藉此突出她與眾不同、孤高不群的品格。(2分)
          </div>
        )}
      </div>

      {/* Q6 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q6</h3>
          <StarButton questionId="ch06_q6" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 作者在這段文字中抒發了怎樣的情懷？(4分)</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch06_q6', 1)}} onChange={(e) => onChange('ch06_q6_a1', e.target.value)} value={userAnswers.ch06_q6_a1 || ''} placeholder="輸入答案..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            (1) 不滿朝廷苟安：作者借打扮艷麗的婦女與自甘寂寞的女子作襯托，諷刺南宋君臣在國勢日危之下仍貪圖享樂，過著醉生夢死的生活，內心感到十分憤慨。(2分)
            (2) 不願同流合污：作者借一位孤高自潔的女子，寄託自己的情懷——不願同流合污，朋比為奸，永遠保持孤高耿介，不慕繁華的高尚情操。(2分)
          </div>
        )}
      </div>

      {/* Q7 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q7</h3>
          <StarButton questionId="ch06_q7" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 作者如何從光、香、聲、色四方面描寫元宵燈景？(8分)</p>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px'}}>光：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch06_q7', 1)}} onChange={(e) => onChange('ch06_q7_a1', e.target.value)} value={userAnswers.ch06_q7_a1 || ''} placeholder="輸入光的描寫..."/>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px', marginTop: '12px'}}>香：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch06_q7', 2)}} onChange={(e) => onChange('ch06_q7_a2', e.target.value)} value={userAnswers.ch06_q7_a2 || ''} placeholder="輸入香的描寫..."/>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px', marginTop: '12px'}}>聲：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch06_q7', 3)}} onChange={(e) => onChange('ch06_q7_a3', e.target.value)} value={userAnswers.ch06_q7_a3 || ''} placeholder="輸入聲的描寫..."/>
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px', marginTop: '12px'}}>色：</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch06_q7', 4)}} onChange={(e) => onChange('ch06_q7_a4', e.target.value)} value={userAnswers.ch06_q7_a4 || ''} placeholder="輸入色的描寫..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            (1) 光(2分)：元宵夜滿城彩燈高掛，如千樹萬樹的花朵被春風吹過，一下子全都開放了；又如被吹落的星星般璀燦奪目。
            (2) 香(2分)：豪門顯貴的車馬在街上絡繹不絕，香氣四溢；婦女們盛裝出遊，體態輕盈，散發著陣陣幽香在街上穿梭。
            (3) 聲(2分)：元宵夜到處都是笙歌管弦的樂聲，也有人們發出的狂歡聲，而婦女們的低談淺笑聲，使元宵夜更形熱鬧繁華。
            (4) 色(2分)：婦人的黃金縷，為元宵增添了色彩。
          </div>
        )}
      </div>

      {/* Q8 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>問答 Q8</h3>
          <StarButton questionId="ch06_q8" />
        </div>
        <p style={{marginBottom: '12px'}}><b>題目：</b> 這詞怎樣運用反襯手法，突出主題？</p>
        <input style={{...styles.input, backgroundColor: getInputBgColor('ch06_q8', 1)}} onChange={(e) => onChange('ch06_q8_a1', e.target.value)} value={userAnswers.ch06_q8_a1 || ''} placeholder="輸入答案..."/>
        {showAnswers && (
          <div style={styles.answerKey}>
            這詞上片先寫元夕的熱鬧，下片前半部先寫人物賞燈的裝飾和動態，至下片最後二句才寫到主題的人物。前面所寫的熱鬧情景以作反襯，突出了主題，使這個不愛繁華的女子的形象更加突出，從而突出了主題表達了自己不肯趨炎附勢、同流合污，而自甘寂寞且孤高品格，亦諷刺朝廷的苟且偷安，不思振作。
          </div>
        )}
      </div>

      {/* PART 3: 體制 */}
      <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', marginTop: '40px', paddingBottom: '15px', borderBottom: '3px solid #dc2626'}}>第三部分：體制</h3>

      {/* 體制 填空題 */}
      <div style={styles.qSection}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
          <h3 style={styles.qTitle}>填空練習</h3>
          <StarButton questionId="ch06_style" />
        </div>

        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px'}}>詞牌：</p>
        <input style={{...styles.input}} onChange={(e) => onChange('ch06_style_cipai', e.target.value)} value={userAnswers.ch06_style_cipai || ''} placeholder="輸入詞牌名稱..."/>
        
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px', marginTop: '12px'}}>詞題：</p>
        <input style={{...styles.input}} onChange={(e) => onChange('ch06_style_title', e.target.value)} value={userAnswers.ch06_style_title || ''} placeholder="輸入詞題..."/>
        
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px', marginTop: '12px'}}>體制：</p>
        <input style={{...styles.input}} onChange={(e) => onChange('ch06_style_form', e.target.value)} value={userAnswers.ch06_style_form || ''} placeholder="輸入體制..."/>
        
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px', marginTop: '12px'}}>上片押韻：</p>
        <input style={{...styles.input}} onChange={(e) => onChange('ch06_style_upper_rhyme', e.target.value)} value={userAnswers.ch06_style_upper_rhyme || ''} placeholder="輸入上片押韻..."/>
        
        <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '8px', marginTop: '12px'}}>下片押韻：</p>
        <input style={{...styles.input}} onChange={(e) => onChange('ch06_style_lower_rhyme', e.target.value)} value={userAnswers.ch06_style_lower_rhyme || ''} placeholder="輸入下片押韻..."/>

        {showAnswers && (
          <div style={styles.answerKey}>
            <strong>參考答案：</strong><br/>
            詞牌：青玉案<br/>
            詞題：元夕<br/>
            體制：中調<br/>
            上片押韻：樹、雨、路、舞<br/>
            下片押韻：縷、去、度、處
          </div>
        )}
      </div>
    </div>
  );
};

export default Chinese_06;
