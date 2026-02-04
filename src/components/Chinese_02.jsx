import { ArrowLeft } from 'lucide-react';

const Chinese_02 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => {
  const vocabularyItems = {
    // 第一段：提出論點
    seg1: [
      { term: '六國破滅', ans: ['韓、趙、魏、楚、燕、齊六國被滅亡'] },
      { term: '兵不利', ans: ['兵器不鋒利', '武器不鋒利'] },
      { term: '戰不善', ans: ['作戰表現不優勝', '作戰不好', '戰術不優'] },
      { term: '弊在賂秦', ans: ['弊病在於賄賂秦國', '弊病在於向秦國進獻土地'] },
      { term: '力虧', ans: ['國力損耗、削弱', '實力受損', '力量削弱'] },
      { term: '破滅之道', ans: ['道理、因由', '原因', '理由'] },
      { term: '互喪', ans: ['相繼滅亡', '一個接一個地滅亡'] },
      { term: '率', ans: ['都、全部', '通常、都是'] },
      { term: '蓋', ans: ['因為', '原因是'] },
      { term: '獨完', ans: ['獨自保全', '單獨保全', '自己保全'] }
    ],
    // 第二段：弊在賂秦
    seg2: [
      { term: '攻取', ans: ['用戰爭侵佔', '戰爭侵佔'] },
      { term: '邑', ans: ['小的城市', '城鎮'] },
      { term: '所得', ans: ['因六國賄賂而得到之土地', '所獲得的土地'] },
      { term: '所亡', ans: ['因賄賂秦國而失去之土地', '所喪失的土地'] },
      { term: '思厥先祖父', ans: ['想起他們的祖輩父輩', '思念他們的先人'] },
      { term: '暴霜露，斬荊棘', ans: ['暴露於霜露之下，斬除荊棘', '暴露於霜露，斬除荊棘（形容創業艱辛）'] },
      { term: '以有尺寸之地', ans: ['才有尺寸之地', '才擁有一點點土地'] },
      { term: '舉以予人', ans: ['全部拿來送給別人', '都拿去給別人'] },
      { term: '草芥', ans: ['小草', '小草（形容輕賤之物）'] },
      { term: '無厭', ans: ['不滿足', '貪得無厭', '滿足'] },
      { term: '彌', ans: ['更加', '越', '更'] },
      { term: '判', ans: ['分明、判斷', '決定', '判決'] },
      { term: '顛覆', ans: ['滅亡', '跌倒翻轉', '倒塌'] },
      { term: '古人', ans: ['戰國策士蘇代', '先賢', '前人'] },
      { term: '以地事秦，猶抱薪救火', ans: ['用土地侍奉秦國，好像抱著木柴去救火', '拿土地去事奉秦國，如同抱柴救火'] },
      { term: '得之', ans: ['得其道理', '說對了', '理解正確'] }
    ],
    // 第三段：不賂者以賂者喪
    seg3: [
      { term: '遷滅', ans: ['亡國', '滅亡', '徙國叫遷（指滅亡）'] },
      { term: '與贏', ans: ['親附秦國', '交好於秦國'] },
      { term: '遠略', ans: ['長遠計策', '長遠的謀略'] },
      { term: '義不賂秦', ans: ['堅持正義，不賄賂秦國', '以不去賄賂秦國為合宜'] },
      { term: '斯用兵之效', ans: ['這就是用兵抗秦的功效', '這是用兵的成效'] },
      { term: '丹以荊卿為計', ans: ['燕太子丹用荊軻刺秦王作為對策', '燕太子丹以荊軻刺秦王之計'] },
      { term: '速禍', ans: ['招致禍患', '快速招來災禍'] },
      { term: '趙嘗五戰於秦', ans: ['趙國曾經與秦國交戰五次', '趙國曾與秦國交戰五次'] },
      { term: '二敗而三勝', ans: ['兩次敗仗，三次勝仗', '兩敗三勝'] },
      { term: '李牧', ans: ['趙國名將', '趙國大將'] },
      { term: '連卻', ans: ['接連擊退', '不斷擊退'] },
      { term: '迨牧以讒誅', ans: ['等到李牧因讒言被殺', '及至李牧因讒言被誅'] },
      { term: '邯鄲為郡', ans: ['趙國都城淪為秦國郡縣', '邯鄲成為秦國郡（指趙國滅亡）'] },
      { term: '用武而不終', ans: ['使用武力抗秦卻沒能堅持到底', '用武力抗秦未能堅持到底'] },
      { term: '革滅', ans: ['消滅', '改變而滅亡'] },
      { term: '智力孤危', ans: ['智謀窮竭，國勢孤立危急', '智謀盡，力量孤立危險'] },
      { term: '向使三國各愛其地', ans: ['假使韓、魏、楚三國各自愛惜他們的土地', '假如三國各自愛護其領土'] },
      { term: '刺客不行', ans: ['荊軻不去行刺秦王', '刺殺秦王不進行'] },
      { term: '良將', ans: ['指李牧', '優秀的將領'] },
      { term: '數', ans: ['命運', '天數', '定數'] }
    ],
    // 第四段至第五段
    seg4: [
      { term: '禮天下之奇才', ans: ['禮遇天下的奇才', '用禮來對待'] },
      { term: '西嚮', ans: ['向西', '對付秦國'] },
      { term: '下嚥', ans: ['吞下', '咽喉', '吞咽'] },
      { term: '積威所劫', ans: ['長久累積的威勢所脅迫', '積累的威勢所懾服'] },
      { term: '故事', ans: ['舊事、前例', '歷史事跡'] }
    ]
  };

  const getInputBgColor = (questionId, answerIndex, userAnswer, currentShowAnswers) => {
    if (!currentShowAnswers) return '#ffffff';
    if (!userAnswer || userAnswer.trim() === '') return '#fee2e2';
    
    // Find the vocabulary item to check against acceptable answers
    const [segment, index] = questionId.split('_');
    const itemIndex = parseInt(index);
    let item = null;
    
    if (segment === 'seg1') item = vocabularyItems.seg1[itemIndex];
    else if (segment === 'seg2') item = vocabularyItems.seg2[itemIndex];
    else if (segment === 'seg3') item = vocabularyItems.seg3[itemIndex];
    else if (segment === 'seg4') item = vocabularyItems.seg4[itemIndex];
    
    if (!item) return '#ffffff';
    
    // Check if answer is correct (match any of the acceptable answers)
    const isCorrect = item.ans.some(acceptedAnswer => 
      acceptedAnswer.toLowerCase().includes(userAnswer.toLowerCase()) ||
      userAnswer.toLowerCase().includes(acceptedAnswer.toLowerCase())
    );
    
    return isCorrect ? '#dcfce7' : '#fee2e2';
  };

  return (
    <div>
      <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingBottom: '15px', borderBottom: '3px solid #dc2626'}}>第二部分：註釋及翻譯</h3>

      {/* 第一段：提出論點 */}
      <div style={{marginBottom: '30px'}}>
        <h4 style={{fontSize: '1.2rem', fontWeight: '600', color: '#374151', marginBottom: '15px'}}>第一段：提出論點</h4>
        {vocabularyItems.seg1.map((item, idx) => (
          <div key={`seg1_${idx}`} style={styles.qSection}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
              <h3 style={styles.qTitle}>Q{idx + 1}</h3>
              <StarButton questionId={`seg1_${idx}`} />
            </div>
            <p style={{marginBottom: '12px'}}><b>原文：</b>「{item.term}」</p>
            <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯：</p>
            <input 
              style={{...styles.input, backgroundColor: getInputBgColor(`seg1_${idx}`, 1, userAnswers[`seg1_${idx}_a1`], showAnswers)}} 
              onChange={(e) => onChange(`seg1_${idx}_a1`, e.target.value)} 
              value={userAnswers[`seg1_${idx}_a1`] || ''} 
              placeholder="輸入翻譯..."
            />
            {showAnswers && (
              <div style={styles.answerKey}>
                {item.ans.join(' / ')}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 第二段：弊在賂秦 */}
      <div style={{marginBottom: '30px'}}>
        <h4 style={{fontSize: '1.2rem', fontWeight: '600', color: '#374151', marginBottom: '15px'}}>第二段：弊在賂秦（論證賂秦之失）</h4>
        {vocabularyItems.seg2.map((item, idx) => (
          <div key={`seg2_${idx}`} style={styles.qSection}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
              <h3 style={styles.qTitle}>Q{idx + 1}</h3>
              <StarButton questionId={`seg2_${idx}`} />
            </div>
            <p style={{marginBottom: '12px'}}><b>原文：</b>「{item.term}」</p>
            <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯：</p>
            <input 
              style={{...styles.input, backgroundColor: getInputBgColor(`seg2_${idx}`, 1, userAnswers[`seg2_${idx}_a1`], showAnswers)}} 
              onChange={(e) => onChange(`seg2_${idx}_a1`, e.target.value)} 
              value={userAnswers[`seg2_${idx}_a1`] || ''} 
              placeholder="輸入翻譯..."
            />
            {showAnswers && (
              <div style={styles.answerKey}>
                {item.ans.join(' / ')}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 第三段：不賂者以賂者喪 */}
      <div style={{marginBottom: '30px'}}>
        <h4 style={{fontSize: '1.2rem', fontWeight: '600', color: '#374151', marginBottom: '15px'}}>第三段：不賂者以賂者喪（論證不賂秦之失）</h4>
        {vocabularyItems.seg3.map((item, idx) => (
          <div key={`seg3_${idx}`} style={styles.qSection}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
              <h3 style={styles.qTitle}>Q{idx + 1}</h3>
              <StarButton questionId={`seg3_${idx}`} />
            </div>
            <p style={{marginBottom: '12px'}}><b>原文：</b>「{item.term}」</p>
            <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯：</p>
            <input 
              style={{...styles.input, backgroundColor: getInputBgColor(`seg3_${idx}`, 1, userAnswers[`seg3_${idx}_a1`], showAnswers)}} 
              onChange={(e) => onChange(`seg3_${idx}_a1`, e.target.value)} 
              value={userAnswers[`seg3_${idx}_a1`] || ''} 
              placeholder="輸入翻譯..."
            />
            {showAnswers && (
              <div style={styles.answerKey}>
                {item.ans.join(' / ')}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 第四段至第五段 */}
      <div style={{marginBottom: '30px'}}>
        <h4 style={{fontSize: '1.2rem', fontWeight: '600', color: '#374151', marginBottom: '15px'}}>第四段至第五段：總結與借古諷今</h4>
        {vocabularyItems.seg4.map((item, idx) => (
          <div key={`seg4_${idx}`} style={styles.qSection}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
              <h3 style={styles.qTitle}>Q{idx + 1}</h3>
              <StarButton questionId={`seg4_${idx}`} />
            </div>
            <p style={{marginBottom: '12px'}}><b>原文：</b>「{item.term}」</p>
            <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>請翻譯：</p>
            <input 
              style={{...styles.input, backgroundColor: getInputBgColor(`seg4_${idx}`, 1, userAnswers[`seg4_${idx}_a1`], showAnswers)}} 
              onChange={(e) => onChange(`seg4_${idx}_a1`, e.target.value)} 
              value={userAnswers[`seg4_${idx}_a1`] || ''} 
              placeholder="輸入翻譯..."
            />
            {showAnswers && (
              <div style={styles.answerKey}>
                {item.ans.join(' / ')}
              </div>
            )}
          </div>
        ))}
      </div>

    <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingTop: '30px', marginTop: '30px', paddingBottom: '15px', borderBottom: '3px solid #dc2626'}}>第三部分：寫作手法</h3>

    {/* Writing Techniques Q1: 下筆立論 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>寫作手法 Q1</h3>
        <StarButton questionId="ch02_writing_q1" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>文章採用「下筆立論」手法，試引述原文並說明其好處。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>引述原文：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_writing_q1_a1', e.target.value)} value={userAnswers.ch02_writing_q1_a1 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>手法的好處：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_writing_q1_a2', e.target.value)} value={userAnswers.ch02_writing_q1_a2 || ''} placeholder="說明好處..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>引述原文：</b>「六國破滅，非兵不利，戰不善，弊在賂秦。」<br/>
          <b>好處：</b>論點清晰明確，令讀者容易掌握文章重點，有助對下文的了解；開宗明義，一開始即讓讀者對論點有認識，加深印象；統領全篇，增加了文章的說服力，下文議論都環繞著這論點來反覆論證，令文章結構更加緊密。
        </div>
      )}
    </div>

    {/* Writing Techniques Q2: 借古諷今 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>寫作手法 Q2</h3>
        <StarButton questionId="ch02_writing_q2" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>文章採用「借古諷今」手法，試說明其具體表現及好處。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>具體表現（引述例子）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_writing_q2_a1', e.target.value)} value={userAnswers.ch02_writing_q2_a1 || ''} placeholder="說明具體表現..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>好處：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_writing_q2_a2', e.target.value)} value={userAnswers.ch02_writing_q2_a2 || ''} placeholder="說明好處..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>具體表現：</b>表面上以六國割地賂秦而招致滅亡為名，實則以這段歷史教訓諷刺北宋統治者採取讓步妥協政策，年年向外族（遼、西夏）獻納「歲幣」。例如：「今日割五城，明日割十城，然後得一夕安寢；起視四境，而秦兵又至矣」諷刺北宋割地獻幣卻無法換取和平；「苟以天下之大，而從六國破亡之故事，是又在六國下矣」直接諷喻北宋不應重蹈六國覆轍。<br/>
          <b>好處：</b>教訓彰顯，具有說服力，道理明確易被接受；避免直接批評在上位者而招來殺身之禍；利用歷史為鑑，令人深思。
        </div>
      )}
    </div>

    {/* Writing Techniques Q3: 善用例證 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>寫作手法 Q3</h3>
        <StarButton questionId="ch02_writing_q3" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>文章採用「善用例證」手法，請分別舉出一個語例和一個史例，說明其作用。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>語例（引述原文）及其作用：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_writing_q3_a1', e.target.value)} value={userAnswers.ch02_writing_q3_a1 || ''} placeholder="說明語例..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>史例（引述原文）及其作用：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_writing_q3_a2', e.target.value)} value={userAnswers.ch02_writing_q3_a2 || ''} placeholder="說明史例..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>語例：</b>「古人云：『以地事秦，猶抱薪救火，薪不盡，火不滅。』此言得之。」<br/>
          作用：引述前人（蘇代）的具體比喻來說明道理，借古人的說話說明賂秦只會助長秦的野心，使道理更加清楚有力，增強說服力。<br/>
          <b>史例：</b>「趙嘗五戰於秦，二敗而三勝；後秦擊趙者再，李牧連卻之；迨牧以讒誅，邯鄲為郡，惜其用武而不終也。」<br/>
          作用：借助史實，說明趙國並非因兵不利、戰不善而亡，而是因為失去良將，從而論證「不賂者以賂者喪」的論點。
        </div>
      )}
    </div>

    {/* Writing Techniques Q4: 對比 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>寫作手法 Q4</h3>
        <StarButton questionId="ch02_writing_q4" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>文章採用「對比」手法加強論證，試引述一個例子並說明其作用。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>引述對比的原文：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_writing_q4_a1', e.target.value)} value={userAnswers.ch02_writing_q4_a1 || ''} placeholder="引述原文..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>對比的內容及作用：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_writing_q4_a2', e.target.value)} value={userAnswers.ch02_writing_q4_a2 || ''} placeholder="說明作用..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>引述原文：</b>「諸侯之地有限，暴秦之欲無厭」或「思厥先祖父，暴霜露，斬荊棘，以有尺寸之地。子孫視之不甚惜，舉以予人，如棄草芥。」<br/>
          <b>作用：</b>前者以土地有限與秦的慾望無厭作對比，論證賂秦的不智；後者以先祖創業的艱辛與子孫輕易割地賂秦作對比，論證賂秦的不合理。這種對比手法使論點更加鮮明有力。
        </div>
      )}
    </div>

    {/* Writing Techniques Q5: 修辭手法 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>寫作手法 Q5</h3>
        <StarButton questionId="ch02_writing_q5" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>文章運用了多種修辭手法，試舉出明喻和設問各一個例子，並說明其作用。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>明喻的例子及作用：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_writing_q5_a1', e.target.value)} value={userAnswers.ch02_writing_q5_a1 || ''} placeholder="說明明喻..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>設問的例子及作用：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_writing_q5_a2', e.target.value)} value={userAnswers.ch02_writing_q5_a2 || ''} placeholder="說明設問..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>明喻：</b>「以地事秦，猶抱薪救火，薪不盡，火不滅。」以薪比喻土地，以火比喻秦國的侵略慾望，形象具體，使抽象的道理變得淺易明白，便於讀者理解。<br/>
          <b>設問：</b>「齊人未嘗賂秦，終繼五國遷滅，何哉？」提出問題引起讀者思考，引發讀者對論點的興趣，使論證過程更具說服力。
        </div>
      )}
    </div>

    {/* Writing Techniques Q6: 條理分明 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>寫作手法 Q6</h3>
        <StarButton questionId="ch02_writing_q6" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>文章採用「條理分明」手法，試分析文章的論證結構。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>文章結構分析：</p>
      <textarea style={{...styles.input, minHeight: '120px'}} onChange={(e) => onChange('ch02_writing_q6_a1', e.target.value)} value={userAnswers.ch02_writing_q6_a1 || ''} placeholder="分析文章結構..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          全文議論縱橫，論點明確有力，層次分明，條理井然，結構嚴謹，說服力強。<br/>
          <br/>
          <b>第一段（立論）：</b>一開始即一針見血地指出六國破滅的根本原因是賂秦，精簡扼要，提出中心論點「六國破滅，非兵不利，戰不善，弊在賂秦」。<br/>
          <br/>
          <b>第二段（論證正面）：</b>進一步深入剖析，分析賂秦國把土地日削月割，實力日漸虧損，終致亡國，說明「賂秦而力虧」的道理；利用「抱薪救火」的比喻說明賂秦只會助長秦的野心。<br/>
          <br/>
          <b>第三段（論證反面）：</b>分析不賂秦國孤立無援，說明「不賂者以賂者喪」的道理；通過燕、趙、齊三國的例子證明六國滅亡並非因兵不利戰不善。<br/>
          <br/>
          <b>第四段（建議）：</b>假設六國自強的方法及警誡為國者不應被敵國積威所攝服。<br/>
          <br/>
          <b>第五段（結論）：</b>以古諷今，帶出主題，收筆扼要而有力。
        </div>
      )}
    </div>

    {/* Writing Techniques Q7: 正反立論 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>寫作手法 Q7</h3>
        <StarButton questionId="ch02_writing_q7" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>文章採用「正反立論」手法，試說明其具體表現及作用。</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>正面立論（引述例子）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_writing_q7_a1', e.target.value)} value={userAnswers.ch02_writing_q7_a1 || ''} placeholder="說明正面立論..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>反面立論（引述例子）：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_writing_q7_a2', e.target.value)} value={userAnswers.ch02_writing_q7_a2 || ''} placeholder="說明反面立論..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>正反立論的作用：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_writing_q7_a3', e.target.value)} value={userAnswers.ch02_writing_q7_a3 || ''} placeholder="說明作用..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>正面立論：</b>從正面說明「賂秦而力虧」有何弊處，指出韓、魏、楚三國因為割地賂秦，令秦國實力不斷加強，而自身的實力則不斷削弱。例如：「秦以攻取之外，小則獲邑，大則得城，較秦之所得與戰勝而得者，其實百倍」說明賂秦導致秦國獲得大量土地。<br/>
          <br/>
          <b>反面立論：</b>從反面說明不賂秦的好處，以燕、趙不賂秦，和秦國力抗到底，因此較後滅亡為例。例如：「燕雖小國而後亡，斯用兵之效也」說明用兵抗秦反而延遲了滅亡。<br/>
          <br/>
          <b>作用：</b>一正一反的比較之下，更加有力地確立「弊在賂秦」的中心論點，使論證更加充分有力，增強說服力。
        </div>
      )}
    </div>

    <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingTop: '30px', marginTop: '30px', paddingBottom: '15px', borderBottom: '3px solid #dc2626'}}>第四部分：主旨</h3>

    {/* Main Theme Question */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>主旨題</h3>
        <StarButton questionId="ch02_theme" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>試簡述本文的主旨。</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch02_theme_a1', e.target.value)} value={userAnswers.ch02_theme_a1 || ''} placeholder="說明主旨..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          本文通過分析六國敗亡的原因——割地賂秦，令國力日衰，從而以古諷今。作者以六國割地向秦求和而導致滅亡的歷史教訓，諷刺北宋的統治者採取讓步妥協政策，每年向外族獻納「歲幣」以求和。並勸喻君主不要重蹈六國的覆轍，應該發憤圖強，堅守國土，謀求積極的方法對抗外族。
        </div>
      )}
    </div>

    <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '25px', paddingTop: '30px', marginTop: '30px', paddingBottom: '15px', borderBottom: '3px solid #dc2626'}}>第五部分：問答</h3>

    {/* Q&A Question 1 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q1</h3>
        <StarButton questionId="ch02_qa1" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>試據六國論一文解答下列各問：</p>
      <p style={{marginBottom: '12px'}}>(1) 六國中哪些國家是不割地賂秦的？(1分)</p>
      <p style={{marginBottom: '12px'}}>(2) 根據作者所述，這些國家滅亡的原因何在？(8分)</p>
      <p style={{marginBottom: '12px'}}>(3) 作者分析此等國家滅亡的原因，作用何在？(4分)</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>不賂秦的國家：</p>
      <input style={{...styles.input, backgroundColor: getInputBgColor('ch02_qa1', 1)}} onChange={(e) => onChange('ch02_qa1_a1', e.target.value)} value={userAnswers.ch02_qa1_a1 || ''} placeholder="列舉國家..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>滅亡原因（共同及個別原因）：</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch02_qa1_a2', e.target.value)} value={userAnswers.ch02_qa1_a2 || ''} placeholder="詳述原因..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>作者分析的作用：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_qa1_a3', e.target.value)} value={userAnswers.ch02_qa1_a3 || ''} placeholder="說明作用..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>(1) 不賂秦的國家：</b>齊、燕、趙。(1分)<br/>
          <b>(2) 不賂秦國家滅亡的原因：</b><br/>
          <b>(a) 共同原因：</b><br/>
          (i) 由於齊、燕、趙正處於秦差不多兼併所有國家之際，最終不免被秦所滅。(1分)<br/>
          (ii) 由於其他國家（楚、韓、魏）紛紛割地賂秦，以致不賂秦的國家失去賂秦各國的強大支援，終被秦所滅，即作者所說的「不賂者以賂者喪，蓋失強援，不能獨完」。(1分)<br/>
          <b>(b) 個別原因：</b><br/>
          (i) 齊國雖未嘗賂秦，但卻與秦交好，不協助其他五國抗秦，結果在五國相繼破滅後，齊也逃不了被秦吞併的命運。(2分)<br/>
          (ii) 燕國不賂秦且堅決抗秦，但因實力有限，且正處於秦國差不多把其他國家消滅淨盡的時候，唯有鋌而走險，燕太子丹派荊軻刺殺秦王，事敗而激發起秦國對燕國加速用兵，終被秦所滅。(2分)<br/>
          (iii) 趙國多次與秦交戰，互有勝負，秦曾兩次攻趙也被趙將李牧擊退，可惜趙王誤信讒言，把李牧殺掉，再無良將，且正處於秦國差不多把其他國家消滅淨盡的時候，趙終亦被秦所滅。(2分)<br/>
          <b>(3) 作者分析不賂秦國家滅亡原因的作用：</b><br/>
          印證首段的立論部分，說明六國破滅弊在賂秦。<br/>
          (a) 印證「六國破滅，非兵不利，戰不善」——燕、趙的諸侯王，初期都能守國土，堅決以武力抗秦，趙更有良將護國，由此可見六國滅亡並非因戰術及武器比不上秦國，而是另有原因。(2分)<br/>
          (b) 印證「不賂者以賂者喪，蓋失強援，不能獨完」——齊、燕、趙三國均沒有以地賂秦，但終於也被秦所滅，主要原因在於勢孤力弱，缺乏其他諸侯國（賂秦國）的支援，終無法單憑自己力量而保全不滅。(2分)
        </div>
      )}
    </div>

    {/* Q&A Question 2 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q2</h3>
        <StarButton questionId="ch02_qa2" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：(1) 試據下列六國論的一段引文回答問題：</b></p>
      <p style={{marginBottom: '12px'}}>「古人云：『以地事秦，猶抱薪救火；薪不盡，火不滅』此言得之。」</p>
      <p style={{marginBottom: '12px'}}>(a) 文中引述這段古人的說話有何作用？(3分)</p>
      <p style={{marginBottom: '12px'}}>(b) 這段說話用了甚麼修辭技巧？試說明之。(3分)</p>
      <p style={{marginBottom: '12px'}}><b>(2) 蘇洵指出六國「猶有可以不賂而勝之(秦)之勢」，到底六國有甚麼不賂秦而致勝的辦法？試從個別方面及整體方面加以分析。</b></p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>(a) 引述古人說話的作用：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_qa2_a1', e.target.value)} value={userAnswers.ch02_qa2_a1 || ''} placeholder="說明作用..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>(b) 修辭技巧及其說明：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_qa2_a2', e.target.value)} value={userAnswers.ch02_qa2_a2 || ''} placeholder="說明技巧..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>(2) 六國不賂秦而勝秦的辦法（個別方面和整體方面）：</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch02_qa2_a3', e.target.value)} value={userAnswers.ch02_qa2_a3 || ''} placeholder="分析致勝辦法..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>(1)(a) 引述「抱薪救火」一段話的作用：</b><br/>
          (i) 證明上文所述的「賂秦而力虧，破滅之道」的論點是正確的，(1分)使這個論點有根據支持，加強文章的說服力。(1分)<br/>
          (ii) 利用前人具體的比喻來說明道理，令人容易明白。(1分)<br/>
          <b>(b) 這段話運用了比喻中的明喻法。(1分)</b><br/>
          以「薪」比喻六國諸侯的土地。(1分)<br/>
          以「火」比喻秦國入侵的慾望。(1分)<br/>
          <b>(2) 六國不賂秦而勝秦的辦法：</b><br/>
          <b>(a) 個別方面——</b><br/>
          (i) 楚、韓、魏珍惜自己的土地，不割地向秦求和，跟秦拼戰到底。(1分)<br/>
          (ii) 齊國不親附秦國，幫助其他諸侯。(1分)<br/>
          (iii) 燕國不派遣荊軻行刺秦王。(1分)<br/>
          (iv) 趙國不聽信讒言殺掉良將李牧。(1分)<br/>
          <b>(b) 整體方面——</b><br/>
          (i) 把割讓給秦國的土地封賞給天下的謀臣。(1分)<br/>
          (ii) 以奉承秦國的心意禮待天下的奇才。(1分)<br/>
          (iii) 聯合六國的力量，向西面的秦國用兵。(1分)<br/>
          (iv) 為政不要被秦國的積威所懾服。(1分)
        </div>
      )}
    </div>

    {/* Q&A Question 3 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q3</h3>
        <StarButton questionId="ch02_qa3" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>試指出下列各句在表達主旨方面所起的作用：(8分)</p>
      <p style={{marginBottom: '12px'}}>(a) 「六國破滅、非兵不利，戰不善，弊在賂秦。」</p>
      <p style={{marginBottom: '12px'}}>(b) 「以地事秦，猶抱薪救火；薪不盡，火不滅。」</p>
      <p style={{marginBottom: '12px'}}>(c) 「以賂秦之地，封天下之謀臣；以事秦之心，禮天下之奇才；并力西嚮，則吾恐秦人食之不得下咽也。」</p>
      <p style={{marginBottom: '12px'}}>(d) 「苟以天下之大，而從六國破亡之故事，是又在六國下矣！」</p>
      <p style={{marginBottom: '12px'}}><b>綜觀全文，試分析作者對當時北宋君主的施政有何不滿？(4分)</b></p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>各句在表達主旨方面的作用：</p>
      <textarea style={{...styles.input, minHeight: '120px'}} onChange={(e) => onChange('ch02_qa3_a1', e.target.value)} value={userAnswers.ch02_qa3_a1 || ''} placeholder="分析各句作用..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>作者對北宋君主施政的不滿：</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch02_qa3_a2', e.target.value)} value={userAnswers.ch02_qa3_a2 || ''} placeholder="說明不滿..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>(a)</b> 開門見山，下筆立論，提出中心論點：指出六國滅亡的原因在於以地賂秦。(2分)<br/>
          <b>(b)</b> 引述前人具體的比喻，指出以地賂秦的不智，只會削弱自己的實力，助長暴秦的貪慾，情況就如以柴枝去救火，柴枝不燒光，火是不會熄滅的，最後必招致滅亡。(2分)<br/>
          <b>(c)</b> 假設六國發憤積極抗秦，成敗之數或未可料。暗示北宋君主也應禮賢下士，奮起抗敵，堅守國土，終能戰勝外族。(2分)<br/>
          <b>(d)</b> 以古諷今，諷刺北宋統治者對外族獻幣求和的政策極為不智，以一統的大國，實不應再重蹈六國破亡的覆轍。(2分)<br/>
          <br/>
          <b>作者對北宋君主施政的不滿：</b><br/>
          (a) 不思念先祖創業艱難，警惕為政者不要輕率割地賂敵。(1分)<br/>
          (b) 面對遼、西夏等外族的入侵，不堅決抗敵，只圖一時苟安。(1分)<br/>
          (c) 對外族讓步妥協，每年獻納大量歲幣以賂敵。(1分)<br/>
          (d) 不禮賢下士，不重用人才。(1分)
        </div>
      )}
    </div>

    {/* Q&A Question 4 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q4</h3>
        <StarButton questionId="ch02_qa4" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>試據六國論一文回答下列問題：</p>
      <p style={{marginBottom: '12px'}}>(1) 試略述蘇洵寫作本文的時代背景。(4分)</p>
      <p style={{marginBottom: '12px'}}>(2) 何以見得本文是一篇借古諷今的文章？(4分)</p>
      <p style={{marginBottom: '12px'}}>(3) 作者寫作本文的動機何在？(2分)</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>時代背景：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_qa4_a1', e.target.value)} value={userAnswers.ch02_qa4_a1 || ''} placeholder="說明背景..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>借古諷今的表現及相似之處：</p>
      <textarea style={{...styles.input, minHeight: '100px'}} onChange={(e) => onChange('ch02_qa4_a2', e.target.value)} value={userAnswers.ch02_qa4_a2 || ''} placeholder="說明借古諷今..."/>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginTop: '12px', marginBottom: '8px'}}>寫作動機：</p>
      <textarea style={{...styles.input, minHeight: '80px'}} onChange={(e) => onChange('ch02_qa4_a3', e.target.value)} value={userAnswers.ch02_qa4_a3 || ''} placeholder="說明動機..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>(1) 蘇洵寫作本文的時代背景：</b><br/>
          (a) 北宋屢遭外族遼、夏的侵擾。(2分)<br/>
          (b) 北宋統治者對外族採取屈辱退讓的政策，年年向外族獻納「歲幣」以求苟安。(2分)<br/>
          <b>(2) 蘇洵表面上寫六國以地賂秦而招敗亡，實則以這段歷史教訓來諷刺北宋為政者以財賂敵的錯失，(1分)</b><br/>
          <b>六國與北宋相似之處：</b><br/>
          六國：(1) 屢遭強秦侵擾。(2) 以地賂秦。(3) 賂秦而失去土地，以致滅亡。<br/>
          北宋：(1) 屢遭外族遼、西夏侵擾。(1分) (2) 以「歲幣」及絹奉外族。(1分) (3) 獻歲幣令國力受損。(1分)<br/>
          <b>(3) 本文的寫作動機是：</b>勸諫北宋的統治者應發憤圖強，堅守國土，謀求積極的方法對抗外族。(2分)
        </div>
      )}
    </div>

    {/* Q&A Question 5 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>問答 Q5</h3>
        <StarButton questionId="ch02_qa5" />
      </div>
      <p style={{marginBottom: '12px'}}><b>題目：</b>本文採用「下筆立論」手法，在第一段即把議論重點寫出來，這種作法有甚麼好處？</p>
      <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '12px'}}>「下筆立論」手法的好處：</p>
      <textarea style={{...styles.input, minHeight: '120px'}} onChange={(e) => onChange('ch02_qa5_a1', e.target.value)} value={userAnswers.ch02_qa5_a1 || ''} placeholder="說明好處..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>標準答案：</b><br/>
          <b>(1) 一目了然：</b>論點清晰明確，令讀者容易掌握文章重點，有助對下文的了解。<br/>
          <b>(2) 先入為主：</b>一開始即讓讀者對論點有認識，加深印象後，由於先入為主，可逐步引領讀者得到預期的結論。<br/>
          <b>(3) 統領全篇：</b>首段即點出論點是「六國破滅，弊在賂秦」，語調及立論都肯定，增加了文章的說服力，且統領全篇，下文議論都環繞著這論點來反覆論證，令文章結構更加緊密。
        </div>
      )}
    </div>

    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
    </div>
  );
};

export default Chinese_02;
