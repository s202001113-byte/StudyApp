import { ArrowLeft } from 'lucide-react';

const ICT_Comp_C_Ch3 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: IoT Definition */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: IoT Definition</h3>
        <StarButton questionId="c3q1" />
      </div>
      <p>Define Internet of Things (IoT):</p>
      <textarea style={styles.input} rows="3" onChange={(e) => onChange('c3q1_def', e.target.value)} value={userAnswers.c3q1_def || ''} placeholder="Definition..."/>
      {showAnswers && (
        <div style={styles.answerKey}>
          A network of physical devices, vehicles, home appliances and other items embedded with sensors/software that collect and exchange data over the internet.
        </div>
      )}
    </div>

    {/* Q2: Cloud Computing */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Cloud Computing Benefits & Drawbacks</h3>
        <StarButton questionId="c3q2" />
      </div>
      <p>List benefits and drawbacks of cloud computing:</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div>
          <p style={{fontWeight: '600', marginBottom: '10px'}}>Benefits:</p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <input style={styles.input} placeholder="Benefit 1" onChange={(e) => onChange('c3q2_b1', e.target.value)} value={userAnswers.c3q2_b1 || ''}/>
            <input style={styles.input} placeholder="Benefit 2" onChange={(e) => onChange('c3q2_b2', e.target.value)} value={userAnswers.c3q2_b2 || ''}/>
            <input style={styles.input} placeholder="Benefit 3" onChange={(e) => onChange('c3q2_b3', e.target.value)} value={userAnswers.c3q2_b3 || ''}/>
          </div>
        </div>
        <div>
          <p style={{fontWeight: '600', marginBottom: '10px'}}>Drawbacks:</p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <input style={styles.input} placeholder="Drawback 1" onChange={(e) => onChange('c3q2_d1', e.target.value)} value={userAnswers.c3q2_d1 || ''}/>
            <input style={styles.input} placeholder="Drawback 2" onChange={(e) => onChange('c3q2_d2', e.target.value)} value={userAnswers.c3q2_d2 || ''}/>
            <input style={styles.input} placeholder="Drawback 3" onChange={(e) => onChange('c3q2_d3', e.target.value)} value={userAnswers.c3q2_d3 || ''}/>
          </div>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Benefits: Accessibility (access anywhere), Scalability (easy to expand), Cost-effective (pay-as-you-go). Drawbacks: Security risks, Privacy concerns, Dependency on internet connection.
        </div>
      )}
    </div>

    {/* Q3: Smart City */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Smart City Applications</h3>
        <StarButton questionId="c3q3" />
      </div>
      <p>Give 3 examples of smart city applications:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input style={styles.input} placeholder="Example 1" onChange={(e) => onChange('c3q3_ex1', e.target.value)} value={userAnswers.c3q3_ex1 || ''}/>
        <input style={styles.input} placeholder="Example 2" onChange={(e) => onChange('c3q3_ex2', e.target.value)} value={userAnswers.c3q3_ex2 || ''}/>
        <input style={styles.input} placeholder="Example 3" onChange={(e) => onChange('c3q3_ex3', e.target.value)} value={userAnswers.c3q3_ex3 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Smart traffic management, Smart energy grid, Smart healthcare, Smart buildings, Smart security systems.
        </div>
      )}
    </div>

    {/* Q4: Email System */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Email & File Transfer Methods</h3>
        <StarButton questionId="c3q4" />
      </div>
      <table style={{...styles.table, overflowX: 'auto'}}>
        <thead>
          <tr>
            <th style={styles.th}>Method</th>
            <th style={styles.th}>Size Limit</th>
            <th style={styles.th}>Encryption</th>
            <th style={styles.th}>Suitable For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Hyperlink</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q4_hl_size', e.target.value)} value={userAnswers.c3q4_hl_size || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q4_hl_enc', e.target.value)} value={userAnswers.c3q4_hl_enc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q4_hl_use', e.target.value)} value={userAnswers.c3q4_hl_use || ''}/></td>
          </tr>
          <tr>
            <td><b>Inline</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q4_in_size', e.target.value)} value={userAnswers.c3q4_in_size || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q4_in_enc', e.target.value)} value={userAnswers.c3q4_in_enc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q4_in_use', e.target.value)} value={userAnswers.c3q4_in_use || ''}/></td>
          </tr>
          <tr>
            <td><b>Attachment</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q4_at_size', e.target.value)} value={userAnswers.c3q4_at_size || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q4_at_enc', e.target.value)} value={userAnswers.c3q4_at_enc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q4_at_use', e.target.value)} value={userAnswers.c3q4_at_use || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          Hyperlink: No limit, No, Public files. Inline: Limited, No, Small graphics. Attachment: Very limited, No, Documents.
        </div>
      )}
    </div>

    {/* Q5: Remote Logon */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: Remote Logon</h3>
        <StarButton questionId="c3q5" />
      </div>
      <p>Define remote logon:</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c3q5_def', e.target.value)} value={userAnswers.c3q5_def || ''} placeholder="Definition..."/>
      <p style={{marginTop: '15px'}}>Give 2 examples of remote logon applications:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <input style={styles.input} placeholder="Example 1" onChange={(e) => onChange('c3q5_ex1', e.target.value)} value={userAnswers.c3q5_ex1 || ''}/>
        <input style={styles.input} placeholder="Example 2" onChange={(e) => onChange('c3q5_ex2', e.target.value)} value={userAnswers.c3q5_ex2 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Remote logon is accessing a computer or server from a remote location. Examples: SSH (Secure Shell), Telnet, Remote Desktop, VPN access.
        </div>
      )}
    </div>

    {/* Q6: File Transfer Methods Comparison */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: File Transfer Methods Comparison</h3>
        <StarButton questionId="c3q6" />
      </div>
      <table style={{...styles.table, overflowX: 'auto'}}>
        <thead>
          <tr>
            <th style={styles.th}>Method</th>
            <th style={styles.th}>Size Limit</th>
            <th style={styles.th}>Restriction</th>
            <th style={styles.th}>Encryption</th>
            <th style={styles.th}>2FA Available</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Messaging</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_msg_size', e.target.value)} value={userAnswers.c3q6_msg_size || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_msg_rest', e.target.value)} value={userAnswers.c3q6_msg_rest || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_msg_enc', e.target.value)} value={userAnswers.c3q6_msg_enc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_msg_2fa', e.target.value)} value={userAnswers.c3q6_msg_2fa || ''}/></td>
          </tr>
          <tr>
            <td><b>Email</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_email_size', e.target.value)} value={userAnswers.c3q6_email_size || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_email_rest', e.target.value)} value={userAnswers.c3q6_email_rest || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_email_enc', e.target.value)} value={userAnswers.c3q6_email_enc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_email_2fa', e.target.value)} value={userAnswers.c3q6_email_2fa || ''}/></td>
          </tr>
          <tr>
            <td><b>Cloud Storage</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_cloud_size', e.target.value)} value={userAnswers.c3q6_cloud_size || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_cloud_rest', e.target.value)} value={userAnswers.c3q6_cloud_rest || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_cloud_enc', e.target.value)} value={userAnswers.c3q6_cloud_enc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_cloud_2fa', e.target.value)} value={userAnswers.c3q6_cloud_2fa || ''}/></td>
          </tr>
          <tr>
            <td><b>VPN</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_vpn_size', e.target.value)} value={userAnswers.c3q6_vpn_size || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_vpn_rest', e.target.value)} value={userAnswers.c3q6_vpn_rest || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_vpn_enc', e.target.value)} value={userAnswers.c3q6_vpn_enc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_vpn_2fa', e.target.value)} value={userAnswers.c3q6_vpn_2fa || ''}/></td>
          </tr>
          <tr>
            <td><b>P2P</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_p2p_size', e.target.value)} value={userAnswers.c3q6_p2p_size || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_p2p_rest', e.target.value)} value={userAnswers.c3q6_p2p_rest || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_p2p_enc', e.target.value)} value={userAnswers.c3q6_p2p_enc || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c3q6_p2p_2fa', e.target.value)} value={userAnswers.c3q6_p2p_2fa || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          See comparison table details in answer key for each method's characteristics.
        </div>
      )}
    </div>

    {/* Q7: Information Searching */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7: Information Searching & Evaluation</h3>
        <StarButton questionId="c3q7" />
      </div>
      <p>List search operators and their functions:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <div>
          <p style={{fontSize: '0.9rem'}}><b>Search Operator</b>: - (minus)</p>
          <p style={{color: '#64748b', fontSize: '0.9rem'}}>Function:</p>
          <input style={styles.input} onChange={(e) => onChange('c3q7_minus', e.target.value)} value={userAnswers.c3q7_minus || ''}/>
        </div>
        <div>
          <p style={{fontSize: '0.9rem'}}><b>Search Operator</b>: OR</p>
          <p style={{color: '#64748b', fontSize: '0.9rem'}}>Function:</p>
          <input style={styles.input} onChange={(e) => onChange('c3q7_or', e.target.value)} value={userAnswers.c3q7_or || ''}/>
        </div>
        <div>
          <p style={{fontSize: '0.9rem'}}><b>Search Operator</b>: "" (quotation marks)</p>
          <p style={{color: '#64748b', fontSize: '0.9rem'}}>Function:</p>
          <input style={styles.input} onChange={(e) => onChange('c3q7_quotes', e.target.value)} value={userAnswers.c3q7_quotes || ''}/>
        </div>
        <div>
          <p style={{fontSize: '0.9rem'}}><b>Search Operator</b>: site:</p>
          <p style={{color: '#64748b', fontSize: '0.9rem'}}>Function:</p>
          <input style={styles.input} onChange={(e) => onChange('c3q7_site', e.target.value)} value={userAnswers.c3q7_site || ''}/>
        </div>
      </div>

      <p>List 3 criteria for evaluating source credibility:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <input style={styles.input} placeholder="Criterion 1" onChange={(e) => onChange('c3q7_cred1', e.target.value)} value={userAnswers.c3q7_cred1 || ''}/>
        <input style={styles.input} placeholder="Criterion 2" onChange={(e) => onChange('c3q7_cred2', e.target.value)} value={userAnswers.c3q7_cred2 || ''}/>
        <input style={styles.input} placeholder="Criterion 3" onChange={(e) => onChange('c3q7_cred3', e.target.value)} value={userAnswers.c3q7_cred3 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Operators: (-) Exclude word, (OR) Any keyword, ("") Exact phrase, (site:) Specific website. Evaluation: Credibility (author expertise), Reliability (source reputation), Timeliness (recent information).
        </div>
      )}
    </div>

    {/* Q8: Social Media vs Traditional Media */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8: Social Media Platforms</h3>
        <StarButton questionId="c3q8" />
      </div>
      <p>Name and describe 3 types of social media applications:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
        <div>
          <p style={{fontWeight: '600'}}>Type 1:</p>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>Name:</p>
          <input style={styles.input} onChange={(e) => onChange('c3q8_t1_name', e.target.value)} value={userAnswers.c3q8_t1_name || ''}/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '8px'}}>Purpose:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c3q8_t1_purpose', e.target.value)} value={userAnswers.c3q8_t1_purpose || ''}/>
        </div>
        <div>
          <p style={{fontWeight: '600'}}>Type 2:</p>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>Name:</p>
          <input style={styles.input} onChange={(e) => onChange('c3q8_t2_name', e.target.value)} value={userAnswers.c3q8_t2_name || ''}/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '8px'}}>Purpose:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c3q8_t2_purpose', e.target.value)} value={userAnswers.c3q8_t2_purpose || ''}/>
        </div>
        <div>
          <p style={{fontWeight: '600'}}>Type 3:</p>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>Name:</p>
          <input style={styles.input} onChange={(e) => onChange('c3q8_t3_name', e.target.value)} value={userAnswers.c3q8_t3_name || ''}/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '8px'}}>Purpose:</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c3q8_t3_purpose', e.target.value)} value={userAnswers.c3q8_t3_purpose || ''}/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Social networking (Facebook, LinkedIn), Chat/messaging (WhatsApp, Telegram), Video streaming (YouTube, TikTok), Blogging (Medium, WordPress).
        </div>
      )}
    </div>

    {/* Q9: Online Chat & Streaming */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q9: Online Chat Features</h3>
        <StarButton questionId="c3q9" />
      </div>
      <p>Describe advantages of online chat over traditional communication:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <input style={styles.input} placeholder="Advantage 1" onChange={(e) => onChange('c3q9_adv1', e.target.value)} value={userAnswers.c3q9_adv1 || ''}/>
        <input style={styles.input} placeholder="Advantage 2" onChange={(e) => onChange('c3q9_adv2', e.target.value)} value={userAnswers.c3q9_adv2 || ''}/>
        <input style={styles.input} placeholder="Advantage 3" onChange={(e) => onChange('c3q9_adv3', e.target.value)} value={userAnswers.c3q9_adv3 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Instant communication, Low cost, Global reach, Multiple media support, Group communication.
        </div>
      )}
    </div>

    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

export default ICT_Comp_C_Ch3;