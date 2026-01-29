import { ArrowLeft } from 'lucide-react';

const ICT_Comp_C_Ch5 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Malware Types */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Malware Types</h3>
        <StarButton questionId="c5q1" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Malware Type</th>
            <th style={styles.th}>Definition</th>
            <th style={styles.th}>Method of Spread</th>
            <th style={styles.th}>Damage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Virus</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_virus_def', e.target.value)} value={userAnswers.c5q1_virus_def || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_virus_spread', e.target.value)} value={userAnswers.c5q1_virus_spread || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_virus_dmg', e.target.value)} value={userAnswers.c5q1_virus_dmg || ''}/></td>
          </tr>
          <tr>
            <td><b>Worm</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_worm_def', e.target.value)} value={userAnswers.c5q1_worm_def || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_worm_spread', e.target.value)} value={userAnswers.c5q1_worm_spread || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_worm_dmg', e.target.value)} value={userAnswers.c5q1_worm_dmg || ''}/></td>
          </tr>
          <tr>
            <td><b>Trojan</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_trojan_def', e.target.value)} value={userAnswers.c5q1_trojan_def || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_trojan_spread', e.target.value)} value={userAnswers.c5q1_trojan_spread || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q1_trojan_dmg', e.target.value)} value={userAnswers.c5q1_trojan_dmg || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          Virus: Self-replicating code attached to files. Spreads via file transfer. Damages files/system. Worm: Self-replicating, needs no host. Spreads via network. Consumes bandwidth. Trojan: Disguised as legitimate software. Spreads via download. Steals data.
        </div>
      )}
    </div>

    {/* Q2: MITM Attack */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Man-in-the-Middle (MITM) Attack</h3>
        <StarButton questionId="c5q2" />
      </div>
      <p>Explain MITM attack:</p>
      <textarea style={styles.input} rows="3" onChange={(e) => onChange('c5q2_def', e.target.value)} value={userAnswers.c5q2_def || ''} placeholder="Definition and how it works..."/>
      <p style={{marginTop: '15px'}}>How can it be prevented?</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <input style={styles.input} placeholder="Prevention 1" onChange={(e) => onChange('c5q2_prev1', e.target.value)} value={userAnswers.c5q2_prev1 || ''}/>
        <input style={styles.input} placeholder="Prevention 2" onChange={(e) => onChange('c5q2_prev2', e.target.value)} value={userAnswers.c5q2_prev2 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Attacker intercepts communication between two parties. Prevention: Use HTTPS, VPN, Two-factor authentication.
        </div>
      )}
    </div>

    {/* Q3: DoS/DDoS Attack */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Denial-of-Service (DoS/DDoS) Attack</h3>
        <StarButton questionId="c5q3" />
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div>
          <p style={{fontWeight: '600', marginBottom: '10px'}}>DoS Attack</p>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>Definition:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q3_dos_def', e.target.value)} value={userAnswers.c5q3_dos_def || ''}/>
        </div>
        <div>
          <p style={{fontWeight: '600', marginBottom: '10px'}}>DDoS Attack</p>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>Definition:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q3_ddos_def', e.target.value)} value={userAnswers.c5q3_ddos_def || ''}/>
        </div>
      </div>
      <p style={{marginTop: '15px'}}>What is a zombie computer in DDoS?</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q3_zombie', e.target.value)} value={userAnswers.c5q3_zombie || ''} placeholder="Explanation..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          DoS: Single attacker floods server with requests. DDoS: Multiple computers flood server with requests. Zombie: Compromised computer controlled by attacker to send requests.
        </div>
      )}
    </div>

    {/* Q4: Antivirus */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Antivirus Software Functions</h3>
        <StarButton questionId="c5q4" />
      </div>
      <p>List 4 main functions of antivirus software:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <input style={styles.input} placeholder="Function 1" onChange={(e) => onChange('c5q4_f1', e.target.value)} value={userAnswers.c5q4_f1 || ''}/>
        <input style={styles.input} placeholder="Function 2" onChange={(e) => onChange('c5q4_f2', e.target.value)} value={userAnswers.c5q4_f2 || ''}/>
        <input style={styles.input} placeholder="Function 3" onChange={(e) => onChange('c5q4_f3', e.target.value)} value={userAnswers.c5q4_f3 || ''}/>
        <input style={styles.input} placeholder="Function 4" onChange={(e) => onChange('c5q4_f4', e.target.value)} value={userAnswers.c5q4_f4 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Detect malware, Quarantine infected files, Remove viruses, Prevent future infections.
        </div>
      )}
    </div>

    {/* Q5: Firewall */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: Firewall Types</h3>
        <StarButton questionId="c5q5" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Location</th>
            <th style={styles.th}>Function</th>
            <th style={styles.th}>Advantage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Software</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q5_soft_loc', e.target.value)} value={userAnswers.c5q5_soft_loc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q5_soft_func', e.target.value)} value={userAnswers.c5q5_soft_func || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q5_soft_adv', e.target.value)} value={userAnswers.c5q5_soft_adv || ''}/></td>
          </tr>
          <tr>
            <td><b>Hardware</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q5_hard_loc', e.target.value)} value={userAnswers.c5q5_hard_loc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q5_hard_func', e.target.value)} value={userAnswers.c5q5_hard_func || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q5_hard_adv', e.target.value)} value={userAnswers.c5q5_hard_adv || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          Software: On individual computer. Monitors programs. Cheaper. Hardware: Between network and internet. Protects entire network. More secure.
        </div>
      )}
    </div>

    {/* Q6: Access Control */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: Access Control (AAA)</h3>
        <StarButton questionId="c5q6" />
      </div>
      <p>Explain the three components of access control:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
        <div>
          <p style={{fontWeight: '600'}}>Authentication</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q6_auth', e.target.value)} value={userAnswers.c5q6_auth || ''} placeholder="Definition..."/>
        </div>
        <div>
          <p style={{fontWeight: '600'}}>Authorization</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q6_authz', e.target.value)} value={userAnswers.c5q6_authz || ''} placeholder="Definition..."/>
        </div>
        <div>
          <p style={{fontWeight: '600'}}>Accounting</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q6_account', e.target.value)} value={userAnswers.c5q6_account || ''} placeholder="Definition..."/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Authentication: Verify user identity (passwords, biometrics). Authorization: Grant appropriate permissions. Accounting: Log and audit access.
        </div>
      )}
    </div>

    {/* Q7: VPN */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7: VPN (Virtual Private Network)</h3>
        <StarButton questionId="c5q7" />
      </div>
      <p>What does VPN do?</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q7_purpose', e.target.value)} value={userAnswers.c5q7_purpose || ''} placeholder="Purpose..."/>
      <p style={{marginTop: '15px'}}>List 3 benefits of using VPN:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <input style={styles.input} placeholder="Benefit 1" onChange={(e) => onChange('c5q7_b1', e.target.value)} value={userAnswers.c5q7_b1 || ''}/>
        <input style={styles.input} placeholder="Benefit 2" onChange={(e) => onChange('c5q7_b2', e.target.value)} value={userAnswers.c5q7_b2 || ''}/>
        <input style={styles.input} placeholder="Benefit 3" onChange={(e) => onChange('c5q7_b3', e.target.value)} value={userAnswers.c5q7_b3 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          VPN creates encrypted tunnel for secure internet connection. Benefits: Encryption, Privacy, Bypass restrictions.
        </div>
      )}
    </div>

    {/* Q8: WiFi Security */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8: WiFi Security Standards</h3>
        <StarButton questionId="c5q8" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Standard</th>
            <th style={styles.th}>Full Name</th>
            <th style={styles.th}>Security Level</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>WEP</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q8_wep_name', e.target.value)} value={userAnswers.c5q8_wep_name || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q8_wep_sec', e.target.value)} value={userAnswers.c5q8_wep_sec || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q8_wep_status', e.target.value)} value={userAnswers.c5q8_wep_status || ''}/></td>
          </tr>
          <tr>
            <td><b>WPA</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q8_wpa_name', e.target.value)} value={userAnswers.c5q8_wpa_name || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q8_wpa_sec', e.target.value)} value={userAnswers.c5q8_wpa_sec || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q8_wpa_status', e.target.value)} value={userAnswers.c5q8_wpa_status || ''}/></td>
          </tr>
          <tr>
            <td><b>WPA2</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q8_wpa2_name', e.target.value)} value={userAnswers.c5q8_wpa2_name || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q8_wpa2_sec', e.target.value)} value={userAnswers.c5q8_wpa2_sec || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c5q8_wpa2_status', e.target.value)} value={userAnswers.c5q8_wpa2_status || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          WEP: Wired Equivalent Privacy. Weak. Deprecated. WPA: WiFi Protected Access. Better. Transitional. WPA2: WiFi Protected Access 2. Strong. Current standard.
        </div>
      )}
    </div>

    {/* Q9: Browser Security */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q9: Browser Security Settings</h3>
        <StarButton questionId="c5q9" />
      </div>
      <p>Name 3 important browser security settings:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input style={styles.input} placeholder="Setting 1" onChange={(e) => onChange('c5q9_s1', e.target.value)} value={userAnswers.c5q9_s1 || ''}/>
        <input style={styles.input} placeholder="Setting 2" onChange={(e) => onChange('c5q9_s2', e.target.value)} value={userAnswers.c5q9_s2 || ''}/>
        <input style={styles.input} placeholder="Setting 3" onChange={(e) => onChange('c5q9_s3', e.target.value)} value={userAnswers.c5q9_s3 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Cookie management, Plugin blocking, Certificate validation, Script blocking, Pop-up blocker.
        </div>
      )}
    </div>

    {/* Q10: Privacy Threats */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q10: Privacy Threats</h3>
        <StarButton questionId="c5q10" />
      </div>
      <p>Explain the following privacy threats:</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
        <div>
          <p style={{fontWeight: '600'}}>Eavesdropping</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q10_eaves', e.target.value)} value={userAnswers.c5q10_eaves || ''}/>
        </div>
        <div>
          <p style={{fontWeight: '600'}}>Hacking</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q10_hack', e.target.value)} value={userAnswers.c5q10_hack || ''}/>
        </div>
        <div>
          <p style={{fontWeight: '600'}}>Social Engineering</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q10_se', e.target.value)} value={userAnswers.c5q10_se || ''}/>
        </div>
        <div>
          <p style={{fontWeight: '600'}}>Phishing</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q10_phish', e.target.value)} value={userAnswers.c5q10_phish || ''}/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Eavesdropping: Listening to private communication. Hacking: Unauthorized access to systems. Social Engineering: Manipulating people for info. Phishing: Fake emails/sites to steal data.
        </div>
      )}
    </div>

    {/* Q11: Privacy Protection */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q11: Privacy Protection Methods</h3>
        <StarButton questionId="c5q11" />
      </div>
      <p style={{marginBottom: '15px'}}>Explain the following privacy protection methods:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
        <div>
          <p style={{fontWeight: '600'}}>Cookies & Cookie Blocking</p>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>What are cookies:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q11_cookie_what', e.target.value)} value={userAnswers.c5q11_cookie_what || ''}/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '8px'}}>How blocking helps:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q11_cookie_block', e.target.value)} value={userAnswers.c5q11_cookie_block || ''}/>
        </div>
        <div>
          <p style={{fontWeight: '600'}}>Autofill</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q11_autofill', e.target.value)} value={userAnswers.c5q11_autofill || ''}/>
        </div>
        <div>
          <p style={{fontWeight: '600'}}>Private Browsing</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q11_private', e.target.value)} value={userAnswers.c5q11_private || ''}/>
        </div>
        <div>
          <p style={{fontWeight: '600'}}>Proxy Server</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q11_proxy', e.target.value)} value={userAnswers.c5q11_proxy || ''}/>
        </div>
        <div>
          <p style={{fontWeight: '600'}}>Password Security</p>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>Criteria for strong password:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c5q11_pwd_criteria', e.target.value)} value={userAnswers.c5q11_pwd_criteria || ''}/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Cookies: Files storing user data. Blocking prevents tracking. Autofill: Suggests saved info, disable for security. Private Browsing: No history stored. Proxy: Hides IP address. Password: Use mix of characters, long length.
        </div>
      )}
    </div>

    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

export default ICT_Comp_C_Ch5;