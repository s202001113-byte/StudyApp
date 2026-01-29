import { ArrowLeft } from 'lucide-react';

const Phy_E_3_Ch2 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Conduction & Radiation */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Energy Efficiency in Buildings - Conduction & Radiation</h3>
        <StarButton questionId="e3c2q1" />
      </div>
      
      <p style={{marginTop: '15px'}}><b>Formula of Rate of Energy Transferred by Conduction (without U-value):</b></p>
      <input style={styles.input} placeholder="Q/t = ..." onChange={(e) => onChange('e3ch2_q1_cond_no_u', e.target.value)} value={userAnswers.e3ch2_q1_cond_no_u || ''}/>
      
      <p style={{marginTop: '15px'}}><b>Formula of Rate of Energy Transferred by Conduction (with U-value):</b></p>
      <input style={styles.input} placeholder="Q/t = ..." onChange={(e) => onChange('e3ch2_q1_cond_u', e.target.value)} value={userAnswers.e3ch2_q1_cond_u || ''}/>

      <p style={{marginTop: '15px'}}><b>Formula of OTTV (Overall Thermal Transmittance Value):</b></p>
      <input style={styles.input} placeholder="OTTV = ..." onChange={(e) => onChange('e3ch2_q1_ottv', e.target.value)} value={userAnswers.e3ch2_q1_ottv || ''}/>

      <p style={{marginTop: '15px'}}><b>Methods to Reduce Energy Transfer by Conduction and Radiation:</b></p>
      
      <div style={{marginTop: '10px', marginBottom: '10px'}}>
        <p><b>Conduction:</b></p>
        <p>Example method:</p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch2_q1_cond_method', e.target.value)} value={userAnswers.e3ch2_q1_cond_method || ''}/>
      </div>

      <div style={{marginTop: '10px', marginBottom: '10px'}}>
        <p><b>Radiation:</b></p>
        <p>Method 1:</p>
        <input style={styles.input} onChange={(e) => onChange('e3ch2_q1_rad_m1', e.target.value)} value={userAnswers.e3ch2_q1_rad_m1 || ''}/>
        
        <p style={{marginTop: '10px'}}>Method 2: Solar Control Film</p>
        <p style={{fontSize: '0.9rem', color: '#64748b'}}>Advantages of solar control film (list 4):</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <input style={styles.input} placeholder="Adv 1" onChange={(e) => onChange('e3ch2_q1_scf_adv1', e.target.value)} value={userAnswers.e3ch2_q1_scf_adv1 || ''}/>
          <input style={styles.input} placeholder="Adv 2" onChange={(e) => onChange('e3ch2_q1_scf_adv2', e.target.value)} value={userAnswers.e3ch2_q1_scf_adv2 || ''}/>
          <input style={styles.input} placeholder="Adv 3" onChange={(e) => onChange('e3ch2_q1_scf_adv3', e.target.value)} value={userAnswers.e3ch2_q1_scf_adv3 || ''}/>
          <input style={styles.input} placeholder="Adv 4" onChange={(e) => onChange('e3ch2_q1_scf_adv4', e.target.value)} value={userAnswers.e3ch2_q1_scf_adv4 || ''}/>
        </div>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Conduction (no U):</b> Q/t = kA(T<sub>H</sub> - T<sub>C</sub>)/d<br/>
          <b>Conduction (with U):</b> Q/t = uA(T<sub>H</sub> - T<sub>C</sub>)<br/>
          <b>OTTV:</b> (Q<sub>c</sub>/t + Q<sub>s</sub>/t) / A<br/>
          <b>Cond Method:</b> Use layer with low thermal conductivity (e.g., double-glazed window)<br/>
          <b>Rad Method 1:</b> Use tinted glass, reflective glass, and low-e glass<br/>
          <b>SCF Advantages:</b> 1. Reflect IR and UV radiation, 2. Let through visible light, 3. Easy to install, 4. Cheap
        </div>
      )}
    </div>

    {/* Q2: Vehicles */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Vehicles - Energy Efficiency</h3>
        <StarButton questionId="e3c2q2" />
      </div>
      
      {/* Conventional Vehicles */}
      <div style={{marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #f1f5f9'}}>
        <h4 style={{fontSize: '1.1rem', fontWeight: '700', color: '#4338ca', marginBottom: '10px'}}>Conventional Fossil-Fuel Vehicle</h4>
        
        <p><b>Mechanism of propulsion:</b></p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch2_q2_conv_mech', e.target.value)} value={userAnswers.e3ch2_q2_conv_mech || ''}/>

        <p style={{marginTop: '15px'}}><b>Conservation of Energy for Propulsion:</b></p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch2_q2_conv_prop', e.target.value)} value={userAnswers.e3ch2_q2_conv_prop || ''}/>

        <p style={{marginTop: '15px'}}><b>Conservation of Energy for Braking:</b></p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch2_q2_conv_brake', e.target.value)} value={userAnswers.e3ch2_q2_conv_brake || ''}/>
      </div>

      {/* Electric Vehicle */}
      <div style={{marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #f1f5f9'}}>
        <h4 style={{fontSize: '1.1rem', fontWeight: '700', color: '#4338ca', marginBottom: '10px'}}>Electric Vehicle</h4>
        
        <p><b>Mechanism of propulsion:</b></p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch2_q2_ev_mech', e.target.value)} value={userAnswers.e3ch2_q2_ev_mech || ''}/>

        <p style={{marginTop: '15px'}}><b>Regenerative Braking System:</b></p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch2_q2_ev_regen', e.target.value)} value={userAnswers.e3ch2_q2_ev_regen || ''}/>

        <p style={{marginTop: '15px'}}><b>Property of Regenerative Braking System:</b></p>
        <textarea style={styles.input} rows="1" onChange={(e) => onChange('e3ch2_q2_ev_regen_prop', e.target.value)} value={userAnswers.e3ch2_q2_ev_regen_prop || ''}/>

        <p style={{marginTop: '15px'}}><b>Conservation of Energy for Propulsion:</b></p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch2_q2_ev_prop', e.target.value)} value={userAnswers.e3ch2_q2_ev_prop || ''}/>

        <p style={{marginTop: '15px'}}><b>Conservation of Energy for Braking:</b></p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch2_q2_ev_brake', e.target.value)} value={userAnswers.e3ch2_q2_ev_brake || ''}/>

        <p style={{marginTop: '15px'}}><b>Advantages of EV over conventional vehicle:</b></p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <input style={styles.input} placeholder="Adv 1" onChange={(e) => onChange('e3ch2_q2_ev_adv1', e.target.value)} value={userAnswers.e3ch2_q2_ev_adv1 || ''}/>
          <input style={styles.input} placeholder="Adv 2" onChange={(e) => onChange('e3ch2_q2_ev_adv2', e.target.value)} value={userAnswers.e3ch2_q2_ev_adv2 || ''}/>
          <input style={styles.input} placeholder="Adv 3" onChange={(e) => onChange('e3ch2_q2_ev_adv3', e.target.value)} value={userAnswers.e3ch2_q2_ev_adv3 || ''}/>
        </div>

        <p style={{marginTop: '15px'}}><b>Disadvantages of EV over conventional vehicle:</b></p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <input style={styles.input} placeholder="Dis 1" onChange={(e) => onChange('e3ch2_q2_ev_dis1', e.target.value)} value={userAnswers.e3ch2_q2_ev_dis1 || ''}/>
          <input style={styles.input} placeholder="Dis 2" onChange={(e) => onChange('e3ch2_q2_ev_dis2', e.target.value)} value={userAnswers.e3ch2_q2_ev_dis2 || ''}/>
          <input style={styles.input} placeholder="Dis 3" onChange={(e) => onChange('e3ch2_q2_ev_dis3', e.target.value)} value={userAnswers.e3ch2_q2_ev_dis3 || ''}/>
        </div>
      </div>

      {/* Hybrid Vehicle */}
      <div style={{marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #f1f5f9'}}>
        <h4 style={{fontSize: '1.1rem', fontWeight: '700', color: '#4338ca', marginBottom: '10px'}}>Hybrid Vehicle</h4>
        
        <p><b>Mechanism of hybrid vehicles:</b></p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch2_q2_hybrid_mech', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_mech || ''}/>

        <p style={{marginTop: '15px'}}><b>Energy Flow When Combustion Engine is Used for Propulsion:</b></p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch2_q2_hybrid_eng', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_eng || ''}/>

        <p style={{marginTop: '15px'}}><b>Energy Flow When Electric Motor is Used for Propulsion:</b></p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch2_q2_hybrid_motor', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_motor || ''}/>

        <p style={{marginTop: '15px'}}><b>Energy Flow in Regenerative Braking:</b></p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch2_q2_hybrid_brake', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_brake || ''}/>

        <p style={{marginTop: '15px'}}><b>Advantages of Hybrid Vehicles:</b></p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <input style={styles.input} placeholder="Adv 1" onChange={(e) => onChange('e3ch2_q2_hybrid_adv1', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_adv1 || ''}/>
          <input style={styles.input} placeholder="Adv 2" onChange={(e) => onChange('e3ch2_q2_hybrid_adv2', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_adv2 || ''}/>
          <input style={styles.input} placeholder="Adv 3" onChange={(e) => onChange('e3ch2_q2_hybrid_adv3', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_adv3 || ''}/>
        </div>

        <p style={{marginTop: '15px'}}><b>Disadvantages of Hybrid Vehicles:</b></p>
        <input style={styles.input} placeholder="Dis 1" onChange={(e) => onChange('e3ch2_q2_hybrid_dis', e.target.value)} value={userAnswers.e3ch2_q2_hybrid_dis || ''}/>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Conventional Vehicle:</b><br/>
          - Mech: Use internal combustion engine, energy wasted as heat<br/>
          - Propulsion: Chemical energy (petrol) → Combustion engine → KE of vehicle<br/>
          - Braking: KE of vehicle → Frictional braking system → Internal and sound energy<br/><br/>

          <b>Electric Vehicle:</b><br/>
          - Mech: Electric motor for propulsion, no air pollutant<br/>
          - Regenerative: Motor acts as generator when braking to reduce energy waste<br/>
          - Regen Property: Not effective at low speed<br/>
          - Propulsion: Chemical energy (battery) → Battery → Electrical energy → Electric motor → KE of vehicle<br/>
          - Braking: KE of vehicle → Electric generator → Electrical energy → Battery → Chemical energy in battery<br/>
          - Advantages: 1. No air pollutant, 2. Quieter, 3. Higher end-use energy efficiency<br/>
          - Disadvantages: 1. Shorter range, 2. Requires long time to charge, 3. Expensive<br/><br/>

          <b>Hybrid Vehicle:</b><br/>
          - Mech: Combines fossil-fuel and electric vehicle with both frictional and regenerative braking<br/>
          - Combustion: Petrol → Combustion engine → KE of car<br/>
          - Electric: Battery → Motor → KE of car<br/>
          - Braking: KE of car → Generator → Battery<br/>
          - Advantages: 1. Quieter, 2. Higher end-use energy efficiency, 3. Produce less greenhouse gas<br/>
          - Disadvantages: More expensive
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

export default Phy_E_3_Ch2;