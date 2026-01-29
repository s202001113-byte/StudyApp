import { ArrowLeft } from 'lucide-react';

const Phy_E_3_Ch1 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Efficiency */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Efficiency</h3>
        <StarButton questionId="e3c1q1" />
      </div>
      <p>Give the formula of efficiency:</p>
      <input style={styles.input} placeholder="Formula..." onChange={(e) => onChange('e3q1_form', e.target.value)} value={userAnswers.e3q1_form || ''}/>
      {showAnswers && <div style={styles.answerKey}>Power output / Power input</div>}
    </div>

    {/* Q2: Electron Transition */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Lighting - Emission & Electron Transition</h3>
        <StarButton questionId="e3c1q2" />
      </div>
      <p>Describe the process of electron transition:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input style={styles.input} placeholder="Step 1: When electron..." onChange={(e) => onChange('e3q2_s1', e.target.value)} value={userAnswers.e3q2_s1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 2: When atom is..." onChange={(e) => onChange('e3q2_s2', e.target.value)} value={userAnswers.e3q2_s2 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 3: This releases..." onChange={(e) => onChange('e3q2_s3', e.target.value)} value={userAnswers.e3q2_s3 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          1. When electron absorbs a specific amount of energy, it can be excited to a higher energy level.<br/>
          2. When atom is excited, it becomes unstable and eventually moves to a lower energy level.<br/>
          3. This releases energy in form of EM waves.
        </div>
      )}
    </div>

    {/* Q3: Incandescent Lamps */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Lighting - Incandescent Lamps</h3>
        <StarButton questionId="e3c1q3" />
      </div>
      <p><b>Mechanism:</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <input style={styles.input} placeholder="Step 1" onChange={(e) => onChange('e3q3_mech1', e.target.value)} value={userAnswers.e3q3_mech1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 2" onChange={(e) => onChange('e3q3_mech2', e.target.value)} value={userAnswers.e3q3_mech2 || ''}/>
      </div>

      <p><b>Efficiency:</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <textarea style={styles.input} rows="2" placeholder="Emission details..." onChange={(e) => onChange('e3q3_eff1', e.target.value)} value={userAnswers.e3q3_eff1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Conclusion on efficiency" onChange={(e) => onChange('e3q3_eff2', e.target.value)} value={userAnswers.e3q3_eff2 || ''}/>
      </div>

      <p><b>Advanced Version:</b></p>
      <input style={{...styles.input, marginBottom: '10px'}} placeholder="Name of advanced version" onChange={(e) => onChange('e3q3_adv_name', e.target.value)} value={userAnswers.e3q3_adv_name || ''}/>
      
      <p>Mechanism of advanced version:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px'}}>
        <textarea style={styles.input} rows="2" placeholder="Construction..." onChange={(e) => onChange('e3q3_adv_m1', e.target.value)} value={userAnswers.e3q3_adv_m1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Result" onChange={(e) => onChange('e3q3_adv_m2', e.target.value)} value={userAnswers.e3q3_adv_m2 || ''}/>
      </div>
      
      <p>Caution:</p>
      <input style={styles.input} onChange={(e) => onChange('e3q3_caution', e.target.value)} value={userAnswers.e3q3_caution || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Mech:</b> Electric current flows through filament and heats it to high temp thus results in electron transitions in filament.<br/>
          <b>Eff:</b> Only 5-20% is visible light, most is IR (heat) thus Low end-use energy efficiency.<br/>
          <b>Advanced:</b> Halogen lamps.<br/>
          <b>Adv Mech:</b> Incandescent lamps that contain halogen gas, longer lifespan & higher temp thus emit more visible light & slightly more efficient.<br/>
          <b>Caution:</b> UV radiation produced, UV filter should be fitted.
        </div>
      )}
    </div>

    {/* Q4: Gas Discharge Lamps */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Lighting - Gas Discharge Lamps</h3>
        <StarButton questionId="e3c1q4" />
      </div>
      <p>General Mechanism:</p>
      <input style={styles.input} onChange={(e) => onChange('e3q4_gen', e.target.value)} value={userAnswers.e3q4_gen || ''}/>
      
      <p style={{marginTop: '15px'}}><b>Fluorescent Tube Lamp (FTL) Mechanism:</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <textarea style={styles.input} rows="2" placeholder="Step 1: Electrode..." onChange={(e) => onChange('e3q4_ftl1', e.target.value)} value={userAnswers.e3q4_ftl1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 2: Transition..." onChange={(e) => onChange('e3q4_ftl2', e.target.value)} value={userAnswers.e3q4_ftl2 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <textarea style={styles.input} rows="2" placeholder="Step 3: Fluorescence..." onChange={(e) => onChange('e3q4_ftl3', e.target.value)} value={userAnswers.e3q4_ftl3 || ''}/>
      </div>

      <p style={{marginTop: '15px'}}>End-use Efficiency: <input style={{...styles.input, width: '100px', display: 'inline-block'}} onChange={(e) => onChange('e3q4_eff', e.target.value)} value={userAnswers.e3q4_eff || ''}/></p>
      
      <p style={{marginTop: '15px'}}>Mechanism of CFL:</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3q4_cfl', e.target.value)} value={userAnswers.e3q4_cfl || ''}/>

      <p style={{marginTop: '15px'}}>Mechanism of HID:</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3q4_hid', e.target.value)} value={userAnswers.e3q4_hid || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Gen:</b> Passing electron between 2 electrodes through a gas.<br/>
          <b>FTL:</b> -ve electrode emits electrons that ionize Mercury gas to form current that vaporizes mercury thus electron transition occurs in mercury atoms & emits UV thus Phosphor coating absorbs UV & emits visible light.<br/>
          <b>Eff:</b> High.<br/>
          <b>CFL:</b> Similar to FTL but tube is twisted & pins rearranged.<br/>
          <b>HID:</b> Similar to FTL but high intensity brightness (street lights).
        </div>
      )}
    </div>

    {/* Q5: LED */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: LED</h3>
        <StarButton questionId="e3c1q5" />
      </div>
      <p>Mechanism:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input style={styles.input} placeholder="Structure..." onChange={(e) => onChange('e3q5_m1', e.target.value)} value={userAnswers.e3q5_m1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Colour determination..." onChange={(e) => onChange('e3q5_m2', e.target.value)} value={userAnswers.e3q5_m2 || ''}/>
      </div>
      {showAnswers && (
        <div style={styles.answerKey}>
          Has a layer of n-type and p-type semiconductors, only used with d.c. thus colour determined by fixed difference of energy level of p-layer and n-layer.
        </div>
      )}
    </div>

    {/* Q6: Comparison */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: Comparison of Lamps</h3>
        <StarButton questionId="e3c1q6" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr><th style={styles.th}>Lamp Type</th><th style={styles.th}>Advantage</th><th style={styles.th}>Disadvantage</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Incandescent</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('e3q6_inc_adv', e.target.value)} value={userAnswers.e3q6_inc_adv || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('e3q6_inc_dis', e.target.value)} value={userAnswers.e3q6_inc_dis || ''}/></td>
          </tr>
          <tr>
            <td><b>FTL & CFL</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('e3q6_ftl_adv', e.target.value)} value={userAnswers.e3q6_ftl_adv || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('e3q6_ftl_dis', e.target.value)} value={userAnswers.e3q6_ftl_dis || ''}/></td>
          </tr>
          <tr>
            <td><b>LED</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('e3q6_led_adv', e.target.value)} value={userAnswers.e3q6_led_adv || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('e3q6_led_dis', e.target.value)} value={userAnswers.e3q6_led_dis || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Inc:</b> Adv: Low price. Dis: Low efficiency.<br/>
          <b>FTL/CFL:</b> Adv: High efficiency, long life. Dis: Pollution (mercury).<br/>
          <b>LED:</b> Adv: Long life, no UV. Dis: Expensive, d.c. only.
        </div>
      )}
    </div>

    {/* Q7: Cooking */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7: Cooking without Fire</h3>
        <StarButton questionId="e3c1q7" />
      </div>
      
      <p><b>Electric Hotplate:</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '10px'}}>
        <input style={styles.input} placeholder="Step 1: Structure" onChange={(e) => onChange('e3q7_hp_m1', e.target.value)} value={userAnswers.e3q7_hp_m1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 2: Heating" onChange={(e) => onChange('e3q7_hp_m2', e.target.value)} value={userAnswers.e3q7_hp_m2 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 3: Transfer" onChange={(e) => onChange('e3q7_hp_m3', e.target.value)} value={userAnswers.e3q7_hp_m3 || ''}/>
      </div>
      <p>Energy Conversion:</p>
      <input style={styles.input} placeholder="" onChange={(e) => onChange('e3q7_hp_conv', e.target.value)} value={userAnswers.e3q7_hp_conv || ''}/>

      <hr style={{margin: '20px 0', border: 'none', borderTop: '1px solid #e2e8f0'}}/>

      <p><b>Induction Cooker:</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '10px'}}>
        <input style={styles.input} placeholder="Step 1: Structure" onChange={(e) => onChange('e3q7_ind_m1', e.target.value)} value={userAnswers.e3q7_ind_m1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 2: Operation" onChange={(e) => onChange('e3q7_ind_m2', e.target.value)} value={userAnswers.e3q7_ind_m2 || ''}/>
      </div>
      <p>Why not non-conducting container?</p>
      <input style={styles.input} onChange={(e) => onChange('e3q7_ind_why', e.target.value)} value={userAnswers.e3q7_ind_why || ''}/>

      <hr style={{margin: '20px 0', border: 'none', borderTop: '1px solid #e2e8f0'}}/>

      <p><b>Microwave Oven:</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '10px'}}>
        <input style={styles.input} placeholder="Step 1: Frequency..." onChange={(e) => onChange('e3q7_mw_m1', e.target.value)} value={userAnswers.e3q7_mw_m1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 2: Water molecules..." onChange={(e) => onChange('e3q7_mw_m2', e.target.value)} value={userAnswers.e3q7_mw_m2 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <input style={styles.input} placeholder="Step 3: Heating..." onChange={(e) => onChange('e3q7_mw_m3', e.target.value)} value={userAnswers.e3q7_mw_m3 || ''}/>
      </div>

      <p><b>Efficiency Arrangement (Highest to Lowest):</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3q7_rank', e.target.value)} value={userAnswers.e3q7_rank || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Hotplate:</b> Coil of resistance wire thus Current heats wire (heating effect) thus Heat transferred by conduction/radiation.<br/>
          <b>Conv:</b> Electrical thus Thermal (wire/cookware) thus Internal (food).<br/>
          <b>Induction:</b> Coil under plate thus a.c. creates changing flux & induces eddy current in cookware.<br/>
          <b>Non-conduct:</b> No eddy current can flow.<br/>
          <b>Microwave:</b> Exposed to 2.45GHz thus Oscillating E field flips water molecules thus KE spread through food.<br/>
          <b>Rank:</b> Induction cooker more efficient than Electric hotplate more efficient than Microwave oven.
        </div>
      )}
    </div>

    {/* Q8: Air Conditioning */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8: Air Conditioning</h3>
        <StarButton questionId="e3c1q8" />
      </div>
      <p>Mechanism of cooling indoor air:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
        <textarea style={styles.input} rows="2" placeholder="Step 1: Absorption" onChange={(e) => onChange('e3q8_m1', e.target.value)} value={userAnswers.e3q8_m1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <textarea style={styles.input} rows="2" placeholder="Step 2: Compression" onChange={(e) => onChange('e3q8_m2', e.target.value)} value={userAnswers.e3q8_m2 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <textarea style={styles.input} rows="2" placeholder="Step 3: Release" onChange={(e) => onChange('e3q8_m3', e.target.value)} value={userAnswers.e3q8_m3 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <textarea style={styles.input} rows="2" placeholder="Step 4: Expansion" onChange={(e) => onChange('e3q8_m4', e.target.value)} value={userAnswers.e3q8_m4 || ''}/>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div>
          <p>Formula of Cooling Capacity:</p>
          <input style={styles.input} onChange={(e) => onChange('e3q8_cap', e.target.value)} value={userAnswers.e3q8_cap || ''}/>
        </div>
        <div>
          <p>Formula of COP:</p>
          <input style={styles.input} onChange={(e) => onChange('e3q8_cop', e.target.value)} value={userAnswers.e3q8_cop || ''}/>
        </div>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Mech:</b> Cool refrigerant absorbs heat (evaporates) -&gt; Vapour compressed (pressure/temp UP) -&gt; Releases heat outside -&gt; Liquid expanded (temp DOWN).<br/>
          <b>Capacity:</b> Max heat removed / time.<br/>
          <b>COP:</b> Cooling capacity / Power input.
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

export default Phy_E_3_Ch1;