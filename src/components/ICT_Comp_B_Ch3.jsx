import { ArrowLeft } from 'lucide-react';

const ICT_Comp_B_Ch3 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Introduction */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Introduction to Software</h3>
        <StarButton questionId="b3q1" />
      </div>
      <p>Use of <b>System Software</b>:</p>
      <input style={styles.input} onChange={(e) => onChange('b3q1_sys', e.target.value)} value={userAnswers.b3q1_sys || ''}/>
      <p style={{marginTop: '10px'}}>Use of <b>Application Software</b>:</p>
      <input style={styles.input} onChange={(e) => onChange('b3q1_app', e.target.value)} value={userAnswers.b3q1_app || ''}/>
      {showAnswers && <div style={styles.answerKey}>System: Control hardware. Application: Perform specific tasks.</div>}
    </div>

    {/* Q2: Operating System (OS) */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Operating System (OS)</h3>
        <StarButton questionId="b3q2" />
      </div>
      <p>Is OS System or Application software?</p>
      <select style={styles.select} onChange={(e) => onChange('b3q2_type', e.target.value)} value={userAnswers.b3q2_type || ''}>
        <option value="">Select...</option>
        <option value="System">System Software</option>
        <option value="Application">Application Software</option>
      </select>
      
      <p style={{marginTop: '15px'}}>Uses of OS (Hardware control & Disk Management):</p>
      <textarea style={styles.input} rows="3" placeholder="" onChange={(e) => onChange('b3q2_use', e.target.value)} value={userAnswers.b3q2_use || ''}/>
      
      <p style={{marginTop: '15px'}}>Benefit of <b>Partitioning</b>:</p>
      <input style={styles.input} onChange={(e) => onChange('b3q2_part_ben', e.target.value)} value={userAnswers.b3q2_part_ben || ''}/>

      <p style={{marginTop: '15px'}}><b>Categorization of OS:</b></p>
      {[1, 2, 3].map(i => (
        <div key={i} style={{marginBottom: '15px', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '8px'}}>
          <input style={{...styles.input, fontWeight: 'bold'}} placeholder={`Categorization Method ${i}`} onChange={(e) => onChange(`b3q2_cat_m${i}`, e.target.value)} value={userAnswers[`b3q2_cat_m${i}`] || ''}/>
          <textarea style={{...styles.input, marginTop: '5px'}} rows="3" placeholder="Examples and details..." onChange={(e) => onChange(`b3q2_cat_d${i}`, e.target.value)} value={userAnswers[`b3q2_cat_d${i}`] || ''}/>
        </div>
      ))}
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Uses:</b> Interact with drivers; Format (delete/restore); Partition (divide disk).<br/>
          <b>Benefit:</b> Malware/failure on one partition doesn't affect others.<br/>
          <b>Categories:</b> 1. Users (Single vs Multi), 2. Purpose (Mobile, Desktop, Network), 3. Interface (GUI: easy/resource-heavy vs CLI: fast/needs memorization).
        </div>
      )}
    </div>

    {/* Q3: Utility Program */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Utility Program</h3>
        <StarButton questionId="b3q3" />
      </div>
      <p>Is it System or Application software?</p>
      <select style={styles.select} onChange={(e) => onChange('b3q3_type', e.target.value)} value={userAnswers.b3q3_type || ''}>
        <option value="">Select...</option>
        <option value="System">System Software</option>
        <option value="Application">Application Software</option>
      </select>
      <p style={{marginTop: '15px'}}>Use of Utility:</p>
      <input style={styles.input} onChange={(e) => onChange('b3q3_use', e.target.value)} value={userAnswers.b3q3_use || ''}/>
      
      <p style={{marginTop: '15px'}}>Fragmentation vs. Defragmentation:</p>
      <textarea style={styles.input} rows="3" placeholder="Describe fragmentation and the process of defrag..." onChange={(e) => onChange('b3q3_frag', e.target.value)} value={userAnswers.b3q3_frag || ''}/>
      
      <p style={{marginTop: '15px'}}>Effect of Defragmentation:</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
        <textarea style={styles.input} placeholder="On Hard Disks..." onChange={(e) => onChange('b3q3_eff_hdd', e.target.value)} value={userAnswers.b3q3_eff_hdd || ''}/>
        <textarea style={styles.input} placeholder="On SSDs..." onChange={(e) => onChange('b3q3_eff_ssd', e.target.value)} value={userAnswers.b3q3_eff_ssd || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Type: System. Use: Efficiency/Maintenance. Defrag: Reorganize split data. HDD: Improves speed. SSD: Lowers lifespan (wears R/W cycles).
        </div>
      )}
    </div>

    {/* Q4: Driver Program */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Driver Program</h3>
        <StarButton questionId="b3q4" />
      </div>
      <p>Is it System or Application software?</p>
      <select style={styles.select} onChange={(e) => onChange('b3q4_type', e.target.value)} value={userAnswers.b3q4_type || ''}>
        <option value="">Select...</option>
        <option value="System">System Software</option>
        <option value="Application">Application Software</option>
      </select>
      <p style={{marginTop: '15px'}}>Use of Drivers:</p>
      <textarea style={styles.input} rows="2" placeholder="" onChange={(e) => onChange('b3q4_use', e.target.value)} value={userAnswers.b3q4_use || ''}/>
      
      <p style={{marginTop: '15px'}}>Attributes & Installation:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <textarea style={styles.input} placeholder="Attributes " onChange={(e) => onChange('b3q4_attr', e.target.value)} value={userAnswers.b3q4_attr || ''}/>
        <input style={styles.input} placeholder="How to install?" onChange={(e) => onChange('b3q4_inst', e.target.value)} value={userAnswers.b3q4_inst || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Type: System. Use: Connect peripherals via machine language translation. Attr: Hot swapping; specific to OS/Device. Install: Follow user manual.
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

export default ICT_Comp_B_Ch3;
