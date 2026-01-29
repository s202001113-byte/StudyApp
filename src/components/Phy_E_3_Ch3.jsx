import { ArrowLeft } from 'lucide-react';

const Phy_E_3_Ch3 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Introduction */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Introduction to Renewable Energy</h3>
        <StarButton questionId="e3c3q1" />
      </div>
      <p>Definition of renewable energy:</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q1_def', e.target.value)} value={userAnswers.e3ch3_q1_def || ''}/>
      {showAnswers && <div style={styles.answerKey}>Energy that comes from natural resources that are replenished constantly.</div>}
    </div>

    {/* Q2: Nuclear Energy */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Nuclear Energy</h3>
        <StarButton questionId="e3c3q2" />
      </div>
      
      <p><b>Is nuclear energy renewable?</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q2_renewable', e.target.value)} value={userAnswers.e3ch3_q2_renewable || ''}/>

      <p style={{marginTop: '15px'}}><b>Definition of binding energy:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q2_be_def', e.target.value)} value={userAnswers.e3ch3_q2_be_def || ''}/>

      <p style={{marginTop: '15px'}}><b>Formula of binding energy (for E in J and Δm in kg):</b></p>
      <input style={styles.input} placeholder="E = ..." onChange={(e) => onChange('e3ch3_q2_be_formula_j', e.target.value)} value={userAnswers.e3ch3_q2_be_formula_j || ''}/>

      <p style={{marginTop: '15px'}}><b>Formula of binding energy (for E in MeV and Δm in u):</b></p>
      <input style={styles.input} placeholder="E = ..." onChange={(e) => onChange('e3ch3_q2_be_formula_mev', e.target.value)} value={userAnswers.e3ch3_q2_be_formula_mev || ''}/>
      <img src={`${import.meta.env.BASE_URL}images/BEG.jpg`} alt="description" style={{maxWidth: '100%', marginTop: '10px'}} />
      <p style={{marginTop: '15px'}}><b>How to study the stability of a nucleus:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q2_stability', e.target.value)} value={userAnswers.e3ch3_q2_stability || ''}/>

      <p style={{marginTop: '15px'}}><b>What is A?</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q2_A_def', e.target.value)} value={userAnswers.e3ch3_q2_A_def || ''}/>

      <p style={{marginTop: '15px'}}><b>What does higher E<sub>b</sub>/A mean?</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q2_higher_eb', e.target.value)} value={userAnswers.e3ch3_q2_higher_eb || ''}/>

      <p style={{marginTop: '15px'}}><b>What is the most stable nucleus?</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q2_most_stable', e.target.value)} value={userAnswers.e3ch3_q2_most_stable || ''}/>

      <p style={{marginTop: '15px'}}><b>Tendency of nuclear reactions:</b></p>
      <p style={{fontSize: '0.9rem', color: '#64748b'}}>For A &lt; 56:</p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q2_reaction_low', e.target.value)} value={userAnswers.e3ch3_q2_reaction_low || ''}/>
      <p style={{marginTop: '10px', fontSize: '0.9rem', color: '#64748b'}}>For A &gt; 56:</p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q2_reaction_high', e.target.value)} value={userAnswers.e3ch3_q2_reaction_high || ''}/>

      <p style={{marginTop: '15px'}}><b>Method to find binding energy of a nucleus from graph:</b></p>
      <input style={styles.input} placeholder="Eb = ..." onChange={(e) => onChange('e3ch3_q2_from_graph', e.target.value)} value={userAnswers.e3ch3_q2_from_graph || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Renewable:</b> No<br/>
          <b>BE Def:</b> Energy required to completely separate all nucleons of a nucleus<br/>
          <b>BE (J):</b> E = Δmc²<br/>
          <b>BE (MeV):</b> E = 931Δm<br/>
          <b>Stability:</b> Compare binding energy per nucleon (E<sub>b</sub>/A)<br/>
          <b>A:</b> Mass number<br/>
          <b>Higher E<sub>b</sub>/A:</b> The nucleus is more stable<br/>
          <b>Most Stable:</b> Fe-56<br/>
          <b>Reaction Tendency:</b> A &lt; 56: Tends to combine by fusion. A &gt; 56: Tends to split by fission<br/>
          <b>From Graph:</b> E<sub>b</sub> = (E<sub>b</sub>/A) × A
        </div>
      )}
    </div>

    {/* Q3: Pressurized Water Fission Reactor */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Pressurized Water Fission Reactor</h3>
        <StarButton questionId="e3c3q3" />
      </div>
      
      <p><b>Function of pressurized water fission reactor:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q3_function', e.target.value)} value={userAnswers.e3ch3_q3_function || ''}/>

      <p style={{marginTop: '15px'}}><b>Energy flow:</b></p>
      <input style={styles.input} placeholder="Nuclear energy → ... → Electrical energy" onChange={(e) => onChange('e3ch3_q3_energy_flow', e.target.value)} value={userAnswers.e3ch3_q3_energy_flow || ''}/>

      <p style={{marginTop: '15px'}}><b>Function of key components:</b></p>
      <div style={{marginTop: '10px'}}>
        <p style={{fontWeight: '600', color: '#4338ca'}}>Moderator:</p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q3_moderator', e.target.value)} value={userAnswers.e3ch3_q3_moderator || ''}/>
      </div>
      
      <div style={{marginTop: '15px'}}>
        <p style={{fontWeight: '600', color: '#4338ca'}}>Control rod:</p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q3_control_rod', e.target.value)} value={userAnswers.e3ch3_q3_control_rod || ''}/>
      </div>

      <div style={{marginTop: '15px'}}>
        <p style={{fontWeight: '600', color: '#4338ca'}}>Pressurized water:</p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q3_water', e.target.value)} value={userAnswers.e3ch3_q3_water || ''}/>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Function:</b> Use nuclear fission to generate electricity from nuclear energy<br/>
          <b>Energy Flow:</b> Nuclear energy → Internal energy of water → KE of turbine → Electrical energy<br/>
          <b>Moderator:</b> Slow down fast-moving neutrons produced in fission to maintain chain reaction<br/>
          <b>Control Rod:</b> Absorb electrons and control the rate of fission<br/>
          <b>Pressurized Water:</b> Slow down neutrons and absorb heat from reactor; pressurized to increase its boiling point
        </div>
      )}
    </div>

    {/* Q4: Wind Power */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Wind Power</h3>
        <StarButton questionId="e3c3q4" />
      </div>
      
      <p><b>Energy flow of wind turbine:</b></p>
      <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch3_q4_energy_flow', e.target.value)} value={userAnswers.e3ch3_q4_energy_flow || ''}/>

      <p style={{marginTop: '15px'}}><b>Formula of total kinetic energy of the air:</b></p>
      <input style={styles.input} placeholder="KE = ..." onChange={(e) => onChange('e3ch3_q4_ke_formula', e.target.value)} value={userAnswers.e3ch3_q4_ke_formula || ''}/>

      <p style={{marginTop: '15px'}}><b>Formula of maximum power of turbine:</b></p>
      <input style={styles.input} placeholder="P<sub>max</sub> = ..." onChange={(e) => onChange('e3ch3_q4_power_formula', e.target.value)} value={userAnswers.e3ch3_q4_power_formula || ''}/>

      <p style={{marginTop: '15px'}}><b>What happens when wind speed is too low?</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q4_low_wind', e.target.value)} value={userAnswers.e3ch3_q4_low_wind || ''}/>

      <p style={{marginTop: '15px'}}><b>What happens when wind speed is too high?</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q4_high_wind', e.target.value)} value={userAnswers.e3ch3_q4_high_wind || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Energy Flow:</b> KE of air → KE of rotor → Electrical energy<br/>
          <b>KE Formula:</b> (1/2)ρAtv³<br/>
          <b>Max Power:</b> P<sub>max</sub> = η(1/2)ρAv³ (where η is efficiency and A = πr²)<br/>
          <b>Low Wind:</b> Wind turbine may not function properly<br/>
          <b>High Wind:</b> Wind turbine is locked for safety reason
        </div>
      )}
    </div>

    {/* Q5: Hydroelectric Power */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: Hydroelectric Power</h3>
        <StarButton questionId="e3c3q5" />
      </div>
      
      <p><b>Energy flow of hydroelectric power:</b></p>
      <input style={styles.input} placeholder="" onChange={(e) => onChange('e3ch3_q5_energy_flow', e.target.value)} value={userAnswers.e3ch3_q5_energy_flow || ''}/>

      <p style={{marginTop: '15px'}}><b>Formula of maximum power:</b></p>
      <input style={styles.input} placeholder="P<sub>max</sub> = ..." onChange={(e) => onChange('e3ch3_q5_power_formula', e.target.value)} value={userAnswers.e3ch3_q5_power_formula || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Energy Flow:</b> GPE of water → KE of water → KE of turbine → Electrical energy<br/>
          <b>Max Power:</b> P<sub>max</sub> = ηmgh/t (where η is efficiency)
        </div>
      )}
    </div>

    {/* Q6: Solar Energy */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: Solar Energy</h3>
        <StarButton questionId="e3c3q6" />
      </div>
      
      <p><b>Meaning of Solar constant:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('e3ch3_q6_solar_constant', e.target.value)} value={userAnswers.e3ch3_q6_solar_constant || ''}/>

      <p style={{marginTop: '15px'}}><b>Formula of total power received per unit area by solar cell:</b></p>
      <input style={styles.input} placeholder="P = ..." onChange={(e) => onChange('e3ch3_q6_power_formula', e.target.value)} value={userAnswers.e3ch3_q6_power_formula || ''}/>

      <p style={{marginTop: '15px'}}><b>Mechanism of solar cell (describe the process step by step):</b></p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px'}}>
        <textarea style={styles.input} rows="2" placeholder="Step 1: Structure..." onChange={(e) => onChange('e3ch3_q6_mech_1', e.target.value)} value={userAnswers.e3ch3_q6_mech_1 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <textarea style={styles.input} rows="2" placeholder="Step 2: Absorption and delocalization..." onChange={(e) => onChange('e3ch3_q6_mech_2', e.target.value)} value={userAnswers.e3ch3_q6_mech_2 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <textarea style={styles.input} rows="2" placeholder="Step 3: Movement under E field..." onChange={(e) => onChange('e3ch3_q6_mech_3', e.target.value)} value={userAnswers.e3ch3_q6_mech_3 || ''}/>
        <div style={{textAlign: 'center', color: '#64748b'}}>↓</div>
        <textarea style={styles.input} rows="2" placeholder="Step 4: Current formation..." onChange={(e) => onChange('e3ch3_q6_mech_4', e.target.value)} value={userAnswers.e3ch3_q6_mech_4 || ''}/>
      </div>

      <p style={{marginTop: '15px'}}><b>Efficiency of solar cell:</b></p>
      <input style={styles.input} onChange={(e) => onChange('e3ch3_q6_efficiency', e.target.value)} value={userAnswers.e3ch3_q6_efficiency || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Solar Constant:</b> The total EM radiation radiated at normal incidence per unit area per unit time, at mean distance between Earth and Sun, measured outside Earth's atmosphere<br/>
          <b>Power Formula:</b> P = Solar constant × cos(x) (where x is angle between sunlight and normal)<br/>
          <b>Mechanism:</b><br/>
          1. Consists of p-type and n-type semiconductor with a PN junction in between<br/>
          2. Electrons are delocalized after absorbing sunlight and leave holes<br/>
          3. Under E field, free electrons move to n-side and holes move to p-side<br/>
          4. When appliance is connected, current flows from p-side to n-side<br/>
          <b>Efficiency:</b> 10 to 20%
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

export default Phy_E_3_Ch3;