import { ArrowLeft } from 'lucide-react';

const ICT_Comp_C_Ch1 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Network Architecture */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Network Architecture</h3>
        <StarButton questionId="c1q1" />
      </div>
      
      <p style={{marginBottom: '10px'}}><b>LAN vs WAN Definitions:</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Type</th><th style={styles.th}>Definition</th><th style={styles.th}>Connection</th></tr></thead>
        <tbody>
          <tr>
            <td>LAN</td>
            <td><textarea style={styles.input} rows="2" onChange={(e) => onChange('c1q1_lan_def', e.target.value)} value={userAnswers.c1q1_lan_def || ''}/></td>
            <td><textarea style={styles.input} rows="2" onChange={(e) => onChange('c1q1_lan_conn', e.target.value)} value={userAnswers.c1q1_lan_conn || ''}/></td>
          </tr>
          <tr>
            <td>WAN</td>
            <td><textarea style={styles.input} rows="2" onChange={(e) => onChange('c1q1_wan_def', e.target.value)} value={userAnswers.c1q1_wan_def || ''}/></td>
            <td><textarea style={styles.input} rows="2" onChange={(e) => onChange('c1q1_wan_conn', e.target.value)} value={userAnswers.c1q1_wan_conn || ''}/></td>
          </tr>
        </tbody>
      </table>

      <p style={{marginTop: '15px'}}><b>Comparison (LAN vs WAN):</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Comparison Point</th><th style={styles.th}>Relation</th></tr></thead>
        <tbody>
          {['Set up cost', 'Coverage', 'Data transmission speed'].map((pt, i) => (
            <tr key={i}>
              <td>{pt}</td>
              <td><input style={styles.input} placeholder="e.g. WAN > LAN" onChange={(e) => onChange(`c1q1_comp_${i}`, e.target.value)} value={userAnswers[`c1q1_comp_${i}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '15px'}}><b>Client-Server vs Peer-to-Peer:</b></p>
      <div style={{overflowX: 'auto'}}>
        <table style={styles.table}>
          <thead><tr><th style={styles.th}>Feature</th><th style={styles.th}>Client-Server</th><th style={styles.th}>Peer-to-Peer</th></tr></thead>
          <tbody>
            {['Purpose', 'Consists of', 'Resource Storage', 'How to share', 'Application', '3 Pros', '3 Cons'].map((feat, i) => (
              <tr key={i}>
                <td>{feat}</td>
                <td><textarea style={styles.input} rows="2" onChange={(e) => onChange(`c1q1_cs_${i}`, e.target.value)} value={userAnswers[`c1q1_cs_${i}`] || ''}/></td>
                <td><textarea style={styles.input} rows="2" onChange={(e) => onChange(`c1q1_p2p_${i}`, e.target.value)} value={userAnswers[`c1q1_p2p_${i}`] || ''}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          LAN: Small area, no ISP. WAN: Large area, uses ISP.<br/>
          Relations: Cost (WAN&gt;LAN), Coverage (WAN&gt;LAN), Speed (LAN&gt;WAN).<br/>
          CS: Server present, centralized admin/storage. P2P: No server, decentralized storage.
        </div>
      )}
    </div>

    {/* Q2: Network Services */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Network Services</h3>
        <StarButton questionId="c1q2" />
      </div>
      <p>List 6 Services (Name, Description, Attribute):</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} style={{display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '5px'}}>
            <input style={styles.input} placeholder="Name" onChange={(e) => onChange(`c1q2_n${i}`, e.target.value)} value={userAnswers[`c1q2_n${i}`] || ''}/>
            <input style={styles.input} placeholder="Description" onChange={(e) => onChange(`c1q2_d${i}`, e.target.value)} value={userAnswers[`c1q2_d${i}`] || ''}/>
            <input style={styles.input} placeholder="Attribute" onChange={(e) => onChange(`c1q2_a${i}`, e.target.value)} value={userAnswers[`c1q2_a${i}`] || ''}/>
          </div>
        ))}
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          1. Internal Comm, 2. Video Conf, 3. Hardware Sharing, 4. Software Sharing, 5. File Sharing, 6. Internet Connection Sharing.
        </div>
      )}
    </div>

    {/* Q3: Network Hardware */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Network Hardware</h3>
        <StarButton questionId="c1q3" />
      </div>
      
      <p style={{fontWeight: 'bold'}}>NIC</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px'}}>
        <textarea style={styles.input} placeholder="2 Uses" onChange={(e) => onChange('c1q3_nic_u', e.target.value)} value={userAnswers.c1q3_nic_u || ''}/>
        <input style={styles.input} placeholder="Position" onChange={(e) => onChange('c1q3_nic_p', e.target.value)} value={userAnswers.c1q3_nic_p || ''}/>
        <input style={styles.input} placeholder="Equipment (Ethernet NIC)" onChange={(e) => onChange('c1q3_nic_e', e.target.value)} value={userAnswers.c1q3_nic_e || ''}/>
        <textarea style={styles.input} placeholder="MAC Address (Size, Use, location and assignment)" onChange={(e) => onChange('c1q3_nic_m', e.target.value)} value={userAnswers.c1q3_nic_m || ''}/>
      </div>

      <p style={{fontWeight: 'bold', marginTop: '15px'}}>Switch</p>
      <textarea style={styles.input} rows="3" placeholder="3 Uses" onChange={(e) => onChange('c1q3_sw', e.target.value)} value={userAnswers.c1q3_sw || ''}/>

      <p style={{fontWeight: 'bold', marginTop: '15px'}}>Access Point (AP)</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
        <textarea style={styles.input} placeholder="Use, Coverage, Max Users" onChange={(e) => onChange('c1q3_ap_u', e.target.value)} value={userAnswers.c1q3_ap_u || ''}/>
        <textarea style={styles.input} placeholder="SSID (Def, Attr) & Encryption" onChange={(e) => onChange('c1q3_ap_s', e.target.value)} value={userAnswers.c1q3_ap_s || ''}/>
      </div>
      <p style={{marginTop: '5px'}}>WiFi Roaming Steps:</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('c1q3_ap_r', e.target.value)} value={userAnswers.c1q3_ap_r || ''}/>

      <p style={{fontWeight: 'bold', marginTop: '15px'}}>Router</p>
      <textarea style={styles.input} rows="2" placeholder="2 Uses, All-in-one benefit, Dual Band meaning" onChange={(e) => onChange('c1q3_rt', e.target.value)} value={userAnswers.c1q3_rt || ''}/>

      <p style={{fontWeight: 'bold', marginTop: '15px'}}>Modem</p>
      <textarea style={styles.input} rows="2" placeholder="Use, Position, DSL benefit" onChange={(e) => onChange('c1q3_md_u', e.target.value)} value={userAnswers.c1q3_md_u || ''}/>
      <div style={{display: 'flex', gap: '10px', marginTop: '5px'}}>
        <input style={styles.input} placeholder="ADSL Explanation" onChange={(e) => onChange('c1q3_md_adsl', e.target.value)} value={userAnswers.c1q3_md_adsl || ''}/>
        <input style={styles.input} placeholder="SDSL Explanation" onChange={(e) => onChange('c1q3_md_sdsl', e.target.value)} value={userAnswers.c1q3_md_sdsl || ''}/>
      </div>

      <p style={{fontWeight: 'bold', marginTop: '15px'}}>Cables</p>
      <input style={styles.input} placeholder="Use, Max distance, Long distance type" onChange={(e) => onChange('c1q3_cb_gen', e.target.value)} value={userAnswers.c1q3_cb_gen || ''}/>
      <div style={{marginTop: '5px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
        <textarea style={styles.input} placeholder="Twisted Pair (Component, Reason)" onChange={(e) => onChange('c1q3_cb_tp', e.target.value)} value={userAnswers.c1q3_cb_tp || ''}/>
        <textarea style={styles.input} placeholder="UTP (Component, Cat6 def/speed)" onChange={(e) => onChange('c1q3_cb_utp', e.target.value)} value={userAnswers.c1q3_cb_utp || ''}/>
        <textarea style={styles.input} placeholder="STP (Component, vs UTP)" onChange={(e) => onChange('c1q3_cb_stp', e.target.value)} value={userAnswers.c1q3_cb_stp || ''}/>
        <textarea style={styles.input} placeholder="Fibre Optic (vs UTP/STP)" onChange={(e) => onChange('c1q3_cb_fo', e.target.value)} value={userAnswers.c1q3_cb_fo || ''}/>
      </div>
    </div>

    {/* Q4: Wireless Communication */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Wireless Communication</h3>
        <StarButton questionId="c1q4" />
      </div>
      
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px'}}>
        <div>
          <p style={{fontWeight: 'bold'}}>Satellite</p>
          <textarea style={styles.input} rows="4" placeholder="Use, Mechanism, Interference, Cost, Factor" onChange={(e) => onChange('c1q4_sat', e.target.value)} value={userAnswers.c1q4_sat || ''}/>
        </div>
        <div>
          <p style={{fontWeight: 'bold'}}>Microwave</p>
          <textarea style={styles.input} rows="4" placeholder="Tech , Setup, Factor" onChange={(e) => onChange('c1q4_mic', e.target.value)} value={userAnswers.c1q4_mic || ''}/>
        </div>
      </div>

      <p style={{fontWeight: 'bold'}}>Wifi</p>
      <textarea style={styles.input} placeholder="Tech, How to establish" onChange={(e) => onChange('c1q4_wifi_gen', e.target.value)} value={userAnswers.c1q4_wifi_gen || ''}/>
      
      <p style={{marginTop: '10px', fontSize: '0.9rem'}}><b>Frequency Band Comparison:</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Metric</th><th style={styles.th}>Relation</th></tr></thead>
        <tbody>
          {['Speed', 'Coverage', 'Interference'].map((m, i) => (
            <tr key={i}><td>{m}</td><td><input style={styles.input} placeholder="e.g. 5GHz > 2.4GHz" onChange={(e) => onChange(`c1q4_w_rel_${i}`, e.target.value)} value={userAnswers[`c1q4_w_rel_${i}`] || ''}/></td></tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '10px', fontSize: '0.9rem'}}><b>Wifi Standards:</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Std Name</th><th style={styles.th}>IEEE Name</th><th style={styles.th}>Max Speed</th><th style={styles.th}>Band</th></tr></thead>
        <tbody>
          {[4, 5, 6].map(v => (
            <tr key={v}>
              <td>Wifi {v}</td>
              <td><input style={styles.input} onChange={(e) => onChange(`c1q4_w_ieee_${v}`, e.target.value)} value={userAnswers[`c1q4_w_ieee_${v}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`c1q4_w_spd_${v}`, e.target.value)} value={userAnswers[`c1q4_w_spd_${v}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`c1q4_w_band_${v}`, e.target.value)} value={userAnswers[`c1q4_w_band_${v}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <textarea style={{...styles.input, marginTop: '5px'}} placeholder="Effect of Wifi 6 " onChange={(e) => onChange('c1q4_w_eff', e.target.value)} value={userAnswers.c1q4_w_eff || ''}/>

      <p style={{marginTop: '15px', fontWeight: 'bold'}}>Bluetooth</p>
      <textarea style={styles.input} rows="2" placeholder="Use, Mechanism, vs Wifi" onChange={(e) => onChange('c1q4_bt', e.target.value)} value={userAnswers.c1q4_bt || ''}/>
    </div>

    {/* Q5: Wired vs Wireless */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: Wired vs Wireless Network</h3>
        <StarButton questionId="c1q5" />
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
        <div>
          <p><b>Wired</b></p>
          <textarea style={styles.input} placeholder="Advantage" onChange={(e) => onChange('c1q5_wd_adv', e.target.value)} value={userAnswers.c1q5_wd_adv || ''}/>
          <textarea style={{...styles.input, marginTop: '5px'}} placeholder="Disadvantage" onChange={(e) => onChange('c1q5_wd_dis', e.target.value)} value={userAnswers.c1q5_wd_dis || ''}/>
        </div>
        <div>
          <p><b>Wireless</b></p>
          <textarea style={styles.input} placeholder="Advantage" onChange={(e) => onChange('c1q5_wl_adv', e.target.value)} value={userAnswers.c1q5_wl_adv || ''}/>
          <textarea style={{...styles.input, marginTop: '5px'}} placeholder="Disadvantage" onChange={(e) => onChange('c1q5_wl_dis', e.target.value)} value={userAnswers.c1q5_wl_dis || ''}/>
        </div>
      </div>
      {showAnswers && <div style={styles.answerKey}>Wired: Secure/Fast but Low mobility. Wireless: Easy/Flexible but Less secure/stable.</div>}
    </div>

    {/* Q6: Internet Access */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: Method of Internet Access</h3>
        <StarButton questionId="c1q6" />
      </div>
      <p style={{fontWeight: 'bold'}}>Broadband</p>
      <textarea style={styles.input} rows="2" placeholder="Method, Attr, Comparison" onChange={(e) => onChange('c1q6_bb', e.target.value)} value={userAnswers.c1q6_bb || ''}/>
      
      <p style={{fontWeight: 'bold', marginTop: '10px'}}>Leased Line</p>
      <textarea style={styles.input} rows="2" placeholder="Def & Benefit" onChange={(e) => onChange('c1q6_ll', e.target.value)} value={userAnswers.c1q6_ll || ''}/>
      
      <p style={{fontWeight: 'bold', marginTop: '10px'}}>Mobile Data</p>
      <textarea style={styles.input} rows="2" placeholder="Use, 5G Def & Adv" onChange={(e) => onChange('c1q6_md', e.target.value)} value={userAnswers.c1q6_md || ''}/>
      
      {showAnswers && (
        <div style={styles.answerKey}>
          Broadband: Wired, wide bandwidth. FTTH &gt; FTTC &gt; ADSL.<br/>
          Leased Line: Private dedicated channel, reliable.<br/>
          Mobile Data: 5G = Faster, Large capacity, Low latency (IoT).
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

export default ICT_Comp_C_Ch1;
