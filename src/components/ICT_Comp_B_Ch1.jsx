import { ArrowLeft } from 'lucide-react';

const ICT_Comp_B_Ch1 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Comparison of monitor types */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Comparison of Monitor Types</h3>
        <StarButton questionId="b1q1" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Working Principle</th>
            <th style={styles.th}>Advantages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}><b>LCD</b></td>
            <td style={styles.td}><textarea style={styles.input} rows="3" placeholder="Working principle..." onChange={(e) => onChange('b1q1_lcd_p', e.target.value)} value={userAnswers.b1q1_lcd_p || ''}/></td>
            <td style={styles.td}><textarea style={styles.input} rows="3" placeholder="Advantages..." onChange={(e) => onChange('b1q1_lcd_a', e.target.value)} value={userAnswers.b1q1_lcd_a || ''}/></td>
          </tr>
          <tr>
            <td style={styles.td}><b>OLED</b></td>
            <td style={styles.td}><textarea style={styles.input} rows="3" placeholder="Working principle..." onChange={(e) => onChange('b1q1_oled_p', e.target.value)} value={userAnswers.b1q1_oled_p || ''}/></td>
            <td style={styles.td}><textarea style={styles.input} rows="3" placeholder="Advantages..." onChange={(e) => onChange('b1q1_oled_a', e.target.value)} value={userAnswers.b1q1_oled_a || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>LCD:</b> Principle: Uses LED backlight; LCD crystals filter the light to show images. Adv: 1. Cheaper, 2. More screen size options.<br/>
          <b>OLED:</b> Principle: OLED itself is the light source (no backlight required). Adv: 1. Higher contrast ratio, 2. Wider viewing angle, 3. Lighter in weight.
        </div>
      )}
    </div>

    {/* Q2: Ports of monitors */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Ports of Monitors</h3>
        <StarButton questionId="b1q2" />
      </div>
      <p>Input the 4 names of port types:</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px'}}>
        {[1,2,3,4].map(i => <input key={i} style={styles.input} placeholder={`Port Name ${i}`} onChange={(e) => onChange(`b1q2_p${i}`, e.target.value)} value={userAnswers[`b1q2_p${i}`] || ''}/>)}
      </div>
      <p>Two types of ports that support audio:</p>
      <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
        <input style={styles.input} placeholder="Audio Port 1" onChange={(e) => onChange('b1q2_a1', e.target.value)} value={userAnswers.b1q2_a1 || ''}/>
        <input style={styles.input} placeholder="Audio Port 2" onChange={(e) => onChange('b1q2_a2', e.target.value)} value={userAnswers.b1q2_a2 || ''}/>
      </div>
      <p>Rearrange the 4 ports by video quality (Lowest &lt; Highest):</p>
      <input style={styles.input} placeholder="e.g. A < B < C < D" onChange={(e) => onChange('b1q2_rank', e.target.value)} value={userAnswers.b1q2_rank || ''}/>
      {showAnswers && <div style={styles.answerKey}>Ports: VGA, DVI, HDMI, DisplayPort. Audio: HDMI & DisplayPort. Quality: VGA &lt; DVI &lt; HDMI &lt; DisplayPort.</div>}
    </div>

    {/* Q3: Comparison with projectors */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Comparison with Projectors</h3>
        <StarButton questionId="b1q3" />
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div>
          <p>Advantages of <b>Projector</b>:</p>
          <textarea style={styles.input} rows="4" onChange={(e) => onChange('b1q3_proj', e.target.value)} value={userAnswers.b1q3_proj || ''}/>
        </div>
        <div>
          <p>Advantages of <b>Monitor</b>:</p>
          <textarea style={styles.input} rows="4" onChange={(e) => onChange('b1q3_mon', e.target.value)} value={userAnswers.b1q3_mon || ''}/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Projector:</b> 1. Large audience, 2. Adjustable size, 3. Portable.<br/>
          <b>Monitor:</b> 1. Personal use, 2. Better quality, 3. Lighter weight.
        </div>
      )}
    </div>

    {/* Q4: Comparison of printers */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Comparison of Printers</h3>
        <StarButton questionId="b1q4" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Advantages</th>
            <th style={styles.th}>Disadvantages</th>
          </tr>
        </thead>
        <tbody>
          {['Thermal', 'Inkjet', 'Laser'].map(type => (
            <tr key={type}>
              <td><b>{type}</b></td>
              <td><textarea style={styles.input} rows="3" onChange={(e) => onChange(`b1q4_${type}_a`, e.target.value)} value={userAnswers[`b1q4_${type}_a`] || ''}/></td>
              <td><textarea style={styles.input} rows="3" onChange={(e) => onChange(`b1q4_${type}_d`, e.target.value)} value={userAnswers[`b1q4_${type}_d`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Thermal:</b> Adv: Quiet, Fast, Low cost. Disadv: Low quality, Fades over time.<br/>
          <b>Inkjet:</b> Adv: Affordable, High quality. Disadv: Blurry when wet, Slow speed.<br/>
          <b>Laser:</b> Adv: Fast speed. Disadv: Expensive.
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

export default ICT_Comp_B_Ch1;
