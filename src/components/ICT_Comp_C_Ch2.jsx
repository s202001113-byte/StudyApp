import { ArrowLeft } from 'lucide-react';

const ICT_Comp_C_Ch2 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Comparison of Protocol Layers */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Protocol Layers</h3>
        <StarButton questionId="c2q1" />
      </div>
      <p>State the protocol layer of the following:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
          <div>
            <p style={{fontSize: '0.9rem'}}>TCP:</p>
            <input style={styles.input} onChange={(e) => onChange('c2q1_tcp', e.target.value)} value={userAnswers.c2q1_tcp || ''} placeholder="Layer..."/>
          </div>
          <div>
            <p style={{fontSize: '0.9rem'}}>UDP:</p>
            <input style={styles.input} onChange={(e) => onChange('c2q1_udp', e.target.value)} value={userAnswers.c2q1_udp || ''} placeholder="Layer..."/>
          </div>
          <div>
            <p style={{fontSize: '0.9rem'}}>IP:</p>
            <input style={styles.input} onChange={(e) => onChange('c2q1_ip', e.target.value)} value={userAnswers.c2q1_ip || ''} placeholder="Layer..."/>
          </div>
          <div>
            <p style={{fontSize: '0.9rem'}}>HTTP:</p>
            <input style={styles.input} onChange={(e) => onChange('c2q1_http', e.target.value)} value={userAnswers.c2q1_http || ''} placeholder="Layer..."/>
          </div>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          TCP: Transport/Layer 4. UDP: Transport/Layer 4. IP: Internet/Layer 3. HTTP: Application/Layer 7
        </div>
      )}
    </div>

    {/* Q2: TCP/IP Model */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: TCP/IP Model</h3>
        <StarButton questionId="c2q2" />
      </div>
      <p>Describe the 4 layers of TCP/IP model:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div>
          <p style={{fontSize: '0.9rem'}}>Layer 1:</p>
          <input style={styles.input} onChange={(e) => onChange('c2q2_l1', e.target.value)} value={userAnswers.c2q2_l1 || ''} placeholder="Name and purpose"/>
        </div>
        <div>
          <p style={{fontSize: '0.9rem'}}>Layer 2:</p>
          <input style={styles.input} onChange={(e) => onChange('c2q2_l2', e.target.value)} value={userAnswers.c2q2_l2 || ''} placeholder="Name and purpose"/>
        </div>
        <div>
          <p style={{fontSize: '0.9rem'}}>Layer 3:</p>
          <input style={styles.input} onChange={(e) => onChange('c2q2_l3', e.target.value)} value={userAnswers.c2q2_l3 || ''} placeholder="Name and purpose"/>
        </div>
        <div>
          <p style={{fontSize: '0.9rem'}}>Layer 4:</p>
          <input style={styles.input} onChange={(e) => onChange('c2q2_l4', e.target.value)} value={userAnswers.c2q2_l4 || ''} placeholder="Name and purpose"/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Layer 1 (Link): Transmission of bits between directly connected nodes. Layer 2 (Internet): Routing and forwarding of packets. Layer 3 (Transport): End-to-end communication and flow control. Layer 4 (Application): User applications and services.
        </div>
      )}
    </div>

    {/* Q3: IPv4 Addressing */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: IPv4 Addressing</h3>
        <StarButton questionId="c2q3" />
      </div>
      <p>Answer the following about IPv4:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div>
          <p style={{fontSize: '0.9rem'}}>IPv4 address format:</p>
          <input style={styles.input} onChange={(e) => onChange('c2q3_format', e.target.value)} value={userAnswers.c2q3_format || ''} placeholder="e.g. XXX.XXX.XXX.XXX"/>
        </div>
        <div>
          <p style={{fontSize: '0.9rem'}}>Number of bits in IPv4:</p>
          <input style={styles.input} onChange={(e) => onChange('c2q3_bits', e.target.value)} value={userAnswers.c2q3_bits || ''} placeholder="bits"/>
        </div>
        <div>
          <p style={{fontSize: '0.9rem'}}>Number of possible addresses:</p>
          <input style={styles.input} onChange={(e) => onChange('c2q3_addresses', e.target.value)} value={userAnswers.c2q3_addresses || ''} placeholder="number"/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Format: 4 groups of 8-bit (0-255). Bits: 32 bits. Addresses: 2^32 = 4.3 billion addresses.
        </div>
      )}
    </div>

    {/* Q4: IPv6 */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: IPv6 Features</h3>
        <StarButton questionId="c2q4" />
      </div>
      <p>List 3 features/advantages of IPv6:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input style={styles.input} placeholder="Feature 1" onChange={(e) => onChange('c2q4_f1', e.target.value)} value={userAnswers.c2q4_f1 || ''}/>
        <input style={styles.input} placeholder="Feature 2" onChange={(e) => onChange('c2q4_f2', e.target.value)} value={userAnswers.c2q4_f2 || ''}/>
        <input style={styles.input} placeholder="Feature 3" onChange={(e) => onChange('c2q4_f3', e.target.value)} value={userAnswers.c2q4_f3 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          1. Larger address space (128-bit, 2^128 addresses). 2. Better security and privacy. 3. Improved routing efficiency.
        </div>
      )}
    </div>

    {/* Q5: DNS */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: DNS Hierarchy</h3>
        <StarButton questionId="c2q5" />
      </div>
      <p>Explain the DNS hierarchy for domain: www.google.com</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div>
          <p style={{fontSize: '0.9rem'}}>www (subdomain):</p>
          <input style={styles.input} onChange={(e) => onChange('c2q5_www', e.target.value)} value={userAnswers.c2q5_www || ''} placeholder="Purpose"/>
        </div>
        <div>
          <p style={{fontSize: '0.9rem'}}>google (domain name):</p>
          <input style={styles.input} onChange={(e) => onChange('c2q5_google', e.target.value)} value={userAnswers.c2q5_google || ''} placeholder="Purpose"/>
        </div>
        <div>
          <p style={{fontSize: '0.9rem'}}>com (gTLD):</p>
          <input style={styles.input} onChange={(e) => onChange('c2q5_com', e.target.value)} value={userAnswers.c2q5_com || ''} placeholder="Meaning"/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          www: World Wide Web server. google: Company name. com: Generic top-level domain (commercial).
        </div>
      )}
    </div>

    {/* Q6: HTTP vs HTTPS */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: HTTP vs HTTPS</h3>
        <StarButton questionId="c2q6" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Aspect</th>
            <th style={styles.th}>HTTP</th>
            <th style={styles.th}>HTTPS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{fontWeight: '600'}}>Port</td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q6_http_port', e.target.value)} value={userAnswers.c2q6_http_port || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q6_https_port', e.target.value)} value={userAnswers.c2q6_https_port || ''}/></td>
          </tr>
          <tr>
            <td style={{fontWeight: '600'}}>Security</td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q6_http_sec', e.target.value)} value={userAnswers.c2q6_http_sec || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q6_https_sec', e.target.value)} value={userAnswers.c2q6_https_sec || ''}/></td>
          </tr>
          <tr>
            <td style={{fontWeight: '600'}}>Use Case</td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q6_http_use', e.target.value)} value={userAnswers.c2q6_http_use || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q6_https_use', e.target.value)} value={userAnswers.c2q6_https_use || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          HTTP Port: 80. HTTPS Port: 443. HTTP Security: No encryption. HTTPS Security: Encrypted with SSL/TLS. HTTP Use: Non-sensitive data. HTTPS Use: Sensitive data (banking, shopping).
        </div>
      )}
    </div>

    {/* Q7: Email Protocols */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7: Email Protocols</h3>
        <StarButton questionId="c2q7" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Protocol</th>
            <th style={styles.th}>Purpose</th>
            <th style={styles.th}>Port</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{fontWeight: '600'}}>SMTP</td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q7_smtp_purpose', e.target.value)} value={userAnswers.c2q7_smtp_purpose || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q7_smtp_port', e.target.value)} value={userAnswers.c2q7_smtp_port || ''}/></td>
          </tr>
          <tr>
            <td style={{fontWeight: '600'}}>POP3</td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q7_pop3_purpose', e.target.value)} value={userAnswers.c2q7_pop3_purpose || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q7_pop3_port', e.target.value)} value={userAnswers.c2q7_pop3_port || ''}/></td>
          </tr>
          <tr>
            <td style={{fontWeight: '600'}}>IMAP</td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q7_imap_purpose', e.target.value)} value={userAnswers.c2q7_imap_purpose || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('c2q7_imap_port', e.target.value)} value={userAnswers.c2q7_imap_port || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          SMTP (Simple Mail Transfer Protocol): Sending emails. Port 25 (or 587 for TLS). POP3 (Post Office Protocol 3): Receiving and downloading emails. Port 110. IMAP (Internet Message Access Protocol): Receiving, viewing and managing emails. Port 143.
        </div>
      )}
    </div>

    {/* Q8: FTP */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8: FTP (File Transfer Protocol)</h3>
        <StarButton questionId="c2q8" />
      </div>
      <p>Answer the following about FTP:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div>
          <p style={{fontSize: '0.9rem'}}>What does FTP do?</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('c2q8_purpose', e.target.value)} value={userAnswers.c2q8_purpose || ''} placeholder="Purpose"/>
        </div>
        <div>
          <p style={{fontSize: '0.9rem'}}>Default port:</p>
          <input style={styles.input} onChange={(e) => onChange('c2q8_port', e.target.value)} value={userAnswers.c2q8_port || ''} placeholder="Port number"/>
        </div>
        <div>
          <p style={{fontSize: '0.9rem'}}>Typical use case:</p>
          <input style={styles.input} onChange={(e) => onChange('c2q8_use', e.target.value)} value={userAnswers.c2q8_use || ''} placeholder="Use case"/>
        </div>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          FTP transfers files between computers over a network. Port 21. Used for uploading/downloading files to/from web servers or file repositories.
        </div>
      )}
    </div>

    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

export default ICT_Comp_C_Ch2;