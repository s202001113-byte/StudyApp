import { ArrowLeft } from 'lucide-react';

const ICT_Comp_C_Ch4 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Website Design */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Website Design Elements</h3>
        <StarButton questionId="c4q1" />
      </div>
      <p>Name the 3 main technologies for website design:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input style={styles.input} placeholder="Technology 1" onChange={(e) => onChange('c4q1_t1', e.target.value)} value={userAnswers.c4q1_t1 || ''}/>
        <input style={styles.input} placeholder="Technology 2" onChange={(e) => onChange('c4q1_t2', e.target.value)} value={userAnswers.c4q1_t2 || ''}/>
        <input style={styles.input} placeholder="Technology 3" onChange={(e) => onChange('c4q1_t3', e.target.value)} value={userAnswers.c4q1_t3 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          HTML (structure), CSS (styling), JavaScript (interactivity).
        </div>
      )}
    </div>

    {/* Q2: HTML Editors */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: HTML Editors</h3>
        <StarButton questionId="c4q2" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Characteristics</th>
            <th style={styles.th}>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Text Editor</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q2_text_char', e.target.value)} value={userAnswers.c4q2_text_char || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q2_text_ex', e.target.value)} value={userAnswers.c4q2_text_ex || ''}/></td>
          </tr>
          <tr>
            <td><b>Web Authoring Tool</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q2_web_char', e.target.value)} value={userAnswers.c4q2_web_char || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q2_web_ex', e.target.value)} value={userAnswers.c4q2_web_ex || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          Text: Write HTML code directly. Examples: Notepad, VS Code. Web: WYSIWYG interface. Examples: Dreamweaver, Wix, Squarespace.
        </div>
      )}
    </div>

    {/* Q3: HTML Tags */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Common HTML Tags & Attributes</h3>
        <StarButton questionId="c4q3" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Attribute</th>
            <th style={styles.th}>Purpose</th>
            <th style={styles.th}>Example Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>font-family</code></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q3_ff_purpose', e.target.value)} value={userAnswers.c4q3_ff_purpose || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q3_ff_ex', e.target.value)} value={userAnswers.c4q3_ff_ex || ''}/></td>
          </tr>
          <tr>
            <td><code>font-size</code></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q3_fs_purpose', e.target.value)} value={userAnswers.c4q3_fs_purpose || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q3_fs_ex', e.target.value)} value={userAnswers.c4q3_fs_ex || ''}/></td>
          </tr>
          <tr>
            <td><code>text-align</code></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q3_ta_purpose', e.target.value)} value={userAnswers.c4q3_ta_purpose || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q3_ta_ex', e.target.value)} value={userAnswers.c4q3_ta_ex || ''}/></td>
          </tr>
          <tr>
            <td><code>color</code></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q3_c_purpose', e.target.value)} value={userAnswers.c4q3_c_purpose || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q3_c_ex', e.target.value)} value={userAnswers.c4q3_c_ex || ''}/></td>
          </tr>
          <tr>
            <td><code>background-color</code></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q3_bg_purpose', e.target.value)} value={userAnswers.c4q3_bg_purpose || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q3_bg_ex', e.target.value)} value={userAnswers.c4q3_bg_ex || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          font-family: Set typeface. Example: Arial, Times New Roman. font-size: Set text size. Example: 14px, 2em. text-align: Align text. Example: left, center, right. color: Set text color. Example: #FF0000, red. background-color: Set background. Example: #FFFFFF, white.
        </div>
      )}
    </div>

    {/* Q4: HTML Lists */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: HTML Lists</h3>
        <StarButton questionId="c4q4" />
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div>
          <p style={{fontWeight: '600', marginBottom: '10px'}}>Unordered List (ul/li)</p>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>Purpose:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c4q4_ul_purpose', e.target.value)} value={userAnswers.c4q4_ul_purpose || ''} placeholder="Purpose..."/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '10px'}}>Example use:</p>
          <input style={styles.input} onChange={(e) => onChange('c4q4_ul_ex', e.target.value)} value={userAnswers.c4q4_ul_ex || ''} placeholder="Example..."/>
        </div>
        <div>
          <p style={{fontWeight: '600', marginBottom: '10px'}}>Ordered List (ol/li)</p>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>Purpose:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c4q4_ol_purpose', e.target.value)} value={userAnswers.c4q4_ol_purpose || ''} placeholder="Purpose..."/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '10px'}}>Example use:</p>
          <input style={styles.input} onChange={(e) => onChange('c4q4_ol_ex', e.target.value)} value={userAnswers.c4q4_ol_ex || ''} placeholder="Example..."/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          UL: Items without specific order (bullets). Example: menu items, features. OL: Items in sequence (numbered). Example: steps, rankings.
        </div>
      )}
    </div>

    {/* Q5: HTML Tables */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: HTML Tables - colspan & rowspan</h3>
        <StarButton questionId="c4q5" />
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div>
          <p style={{fontWeight: '600'}}>colspan</p>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>Definition:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c4q5_colspan_def', e.target.value)} value={userAnswers.c4q5_colspan_def || ''} placeholder="Definition..."/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '10px'}}>Example:</p>
          <input style={styles.input} onChange={(e) => onChange('c4q5_colspan_ex', e.target.value)} value={userAnswers.c4q5_colspan_ex || ''} placeholder="HTML example..."/>
        </div>
        <div>
          <p style={{fontWeight: '600'}}>rowspan</p>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>Definition:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c4q5_rowspan_def', e.target.value)} value={userAnswers.c4q5_rowspan_def || ''} placeholder="Definition..."/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '10px'}}>Example:</p>
          <input style={styles.input} onChange={(e) => onChange('c4q5_rowspan_ex', e.target.value)} value={userAnswers.c4q5_rowspan_ex || ''} placeholder="HTML example..."/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          colspan: Merge multiple columns. Example: &lt;td colspan="2"&gt;. rowspan: Merge multiple rows. Example: &lt;td rowspan="3"&gt;.
        </div>
      )}
    </div>

    {/* Q6: Media in HTML */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: Images & Links in HTML</h3>
        <StarButton questionId="c4q6" />
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div>
          <p style={{fontWeight: '600', marginBottom: '10px'}}>Image Tag (&lt;img&gt;)</p>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>Syntax:</p>
          <input style={styles.input} onChange={(e) => onChange('c4q6_img_syntax', e.target.value)} value={userAnswers.c4q6_img_syntax || ''} placeholder="&lt;img src=... alt=...&gt;"/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '10px'}}>Purpose of alt attribute:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c4q6_img_alt', e.target.value)} value={userAnswers.c4q6_img_alt || ''}/>
        </div>
        <div>
          <p style={{fontWeight: '600', marginBottom: '10px'}}>Anchor Tag (&lt;a&gt;)</p>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>Syntax:</p>
          <input style={styles.input} onChange={(e) => onChange('c4q6_a_syntax', e.target.value)} value={userAnswers.c4q6_a_syntax || ''} placeholder="&lt;a href=...&gt;...&lt;/a&gt;"/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '10px'}}>href attribute:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c4q6_a_href', e.target.value)} value={userAnswers.c4q6_a_href || ''}/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          IMG: &lt;img src="path" alt="description"&gt;. Alt attribute: Text description for accessibility and if image fails to load. ANCHOR: &lt;a href="url"&gt;link text&lt;/a&gt;. href: Specifies the URL the link points to.
        </div>
      )}
    </div>

    {/* Q7: Web UI/UX Design */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7: Web UI/UX Design Principles</h3>
        <StarButton questionId="c4q7" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Design Principle</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Benefits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Navigation</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q7_nav_desc', e.target.value)} value={userAnswers.c4q7_nav_desc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q7_nav_benefit', e.target.value)} value={userAnswers.c4q7_nav_benefit || ''}/></td>
          </tr>
          <tr>
            <td><b>Responsive Design</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q7_resp_desc', e.target.value)} value={userAnswers.c4q7_resp_desc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q7_resp_benefit', e.target.value)} value={userAnswers.c4q7_resp_benefit || ''}/></td>
          </tr>
          <tr>
            <td><b>Readability</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q7_read_desc', e.target.value)} value={userAnswers.c4q7_read_desc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q7_read_benefit', e.target.value)} value={userAnswers.c4q7_read_benefit || ''}/></td>
          </tr>
          <tr>
            <td><b>Data Input</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q7_input_desc', e.target.value)} value={userAnswers.c4q7_input_desc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q7_input_benefit', e.target.value)} value={userAnswers.c4q7_input_benefit || ''}/></td>
          </tr>
          <tr>
            <td><b>Accessibility</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q7_access_desc', e.target.value)} value={userAnswers.c4q7_access_desc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c4q7_access_benefit', e.target.value)} value={userAnswers.c4q7_access_benefit || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          Navigation: Clear menu structure. Benefits: Easy to find information. Responsive: Adapts to screen size. Benefits: Works on all devices. Readability: Proper contrast, font size. Benefits: Better user experience. Data Input: Simple forms, validation. Benefits: Fewer errors. Accessibility: Alt text, keyboard navigation. Benefits: Inclusive design.
        </div>
      )}
    </div>

    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

export default ICT_Comp_C_Ch4;