import { ArrowLeft } from 'lucide-react';

const ICT_Comp_B_Ch2 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Overview</h3>
        <StarButton questionId="b2q1" />
      </div>
      <p>Name the components of a system unit:</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '15px'}}>
        {[1,2,3,4,5,6].map(i => <input key={i} style={styles.input} placeholder={`Comp ${i}`} onChange={(e) => onChange(`b2q1_c${i}`, e.target.value)} value={userAnswers[`b2q1_c${i}`] || ''}/>)}
      </div>
      <p>Peripheral Device Definition:</p>
      <div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap'}}>
        <input style={{...styles.input, width: '150px'}} placeholder="External" onChange={(e) => onChange('b2q1_p1', e.target.value)} value={userAnswers.b2q1_p1 || ''}/> devices that 
        <input style={{...styles.input, width: '150px'}} placeholder="connect" onChange={(e) => onChange('b2q1_p2', e.target.value)} value={userAnswers.b2q1_p2 || ''}/> to the system unit.
      </div>
      <p style={{marginTop: '15px'}}>Chip vs Chipsets:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <textarea style={styles.input} placeholder="Chip definition" onChange={(e) => onChange('b2q1_chip', e.target.value)} value={userAnswers.b2q1_chip || ''}/>
        <textarea style={styles.input} placeholder="Chipsets definition" onChange={(e) => onChange('b2q1_sets', e.target.value)} value={userAnswers.b2q1_sets || ''}/>
      </div>
      {showAnswers && <div style={styles.answerKey}>Comps: CPU, GPU, Secondary storage, PSU, motherboard, main memory. Def: External devices that connect to the system unit. Chip: IC used to manage communication. Chipsets: Collection of chips.</div>}
    </div>

    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Motherboard</h3>
        <StarButton questionId="b2q2" />
      </div>
      <p>Definition:</p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('b2q2_def', e.target.value)} value={userAnswers.b2q2_def || ''}/>
      <p style={{marginTop: '15px'}}>Ports & Connected Devices:</p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Port Name</th><th style={styles.th}>Devices Connected</th></tr></thead>
        <tbody>
          {[1,2,3,4,5].map(i => (
            <tr key={i}>
                <td><input style={styles.input} placeholder="Enter Port Name" onChange={(e) => onChange(`b2q2_pn_${i}`, e.target.value)} value={userAnswers[`b2q2_pn_${i}`] || ''}/></td>
                <td><input style={styles.input} placeholder="Enter Connected Devices" onChange={(e) => onChange(`b2q2_pd_${i}`, e.target.value)} value={userAnswers[`b2q2_pd_${i}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{marginTop: '15px'}}>Advantage of an integrated surface:</p>
      <textarea style={styles.input} rows="3" onChange={(e) => onChange('b2q2_adv', e.target.value)} value={userAnswers.b2q2_adv || ''}/>
      {showAnswers && <div style={styles.answerKey}>SATA: secondary storage. PCIe: CPU, GPU, NIC. USB: Peripherals. M.2: SATA/PCIe/USB devices. VGA/HDMI: Display. Adv: Replaces expensive interfaces with integrated surface to cut building costs.</div>}
    </div>

    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: PSU</h3>
        <StarButton questionId="b2q3" />
      </div>
      <p>Use:</p>
      <input style={styles.input} onChange={(e) => onChange('b2q3_use', e.target.value)} value={userAnswers.b2q3_use || ''}/>
      <p style={{marginTop: '10px'}}>Essential Requirements & Purpose:</p>
      <div style={{display: 'flex', gap: '10px'}}>
        <input style={styles.input} placeholder="Requirement" onChange={(e) => onChange('b2q3_req', e.target.value)} value={userAnswers.b2q3_req || ''}/>
        <input style={styles.input} placeholder="Purpose" onChange={(e) => onChange('b2q3_purp', e.target.value)} value={userAnswers.b2q3_purp || ''}/>
      </div>
      <p style={{marginTop: '10px'}}>Practical Reminder & Reason:</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input style={styles.input} placeholder="Reminder" onChange={(e) => onChange('b2q3_rem', e.target.value)} value={userAnswers.b2q3_rem || ''}/>
        <input style={styles.input} placeholder="Reason" onChange={(e) => onChange('b2q3_reas', e.target.value)} value={userAnswers.b2q3_reas || ''}/>
      </div>
    </div>

<div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Bus</h3>
        <StarButton questionId="b2q4" />
      </div>
      <p>Use of Bus:</p>
      <input style={styles.input} placeholder="General use of bus..." onChange={(e) => onChange('b2q4_use', e.target.value)} value={userAnswers.b2q4_use || ''}/>
      
      <div style={{marginTop: '20px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
        <h4 style={{marginBottom: '10px', color: '#1e1b4b'}}>Bus Type 1: System Bus</h4>
        <p>Use of System Bus:</p>
        <input style={{...styles.input, marginBottom: '15px'}} placeholder="Connect computer units..." onChange={(e) => onChange('b2q4_sys_use', e.target.value)} value={userAnswers.b2q4_sys_use || ''}/>
        
        <p>Relationship with CPU Word Length:</p>
        <div style={{backgroundColor: '#f8fafc', padding: '10px', borderRadius: '6px', fontSize: '0.95rem', lineHeight: '2'}}>
          Bus width is the <input style={{width: '70px', border: 'none', borderBottom: '1px solid #64748b', textAlign: 'center', backgroundColor: 'transparent'}} placeholder="" onChange={(e) => onChange('b2q4_rel1', e.target.value)} value={userAnswers.b2q4_rel1 || ''}/> as 
          <input style={{width: '150px', border: 'none', borderBottom: '1px solid #64748b', textAlign: 'center', backgroundColor: 'transparent'}} placeholder="" onChange={(e) => onChange('b2q4_rel2', e.target.value)} value={userAnswers.b2q4_rel2 || ''}/> of 
          <input style={{width: '60px', border: 'none', borderBottom: '1px solid #64748b', textAlign: 'center', backgroundColor: 'transparent'}} placeholder="" onChange={(e) => onChange('b2q4_rel3', e.target.value)} value={userAnswers.b2q4_rel3 || ''}/> usually.
        </div>

        <table style={{...styles.table, marginTop: '15px'}}>
          <thead><tr><th style={styles.th}>System Bus Type</th><th style={styles.th}>Use</th><th style={styles.th}>Direction</th></tr></thead>
          <tbody>
            <tr><td><b>Control Bus</b></td><td><input style={styles.input} onChange={(e) => onChange('b2q4_cb_u', e.target.value)} value={userAnswers.b2q4_cb_u || ''}/></td><td><input style={styles.input} onChange={(e) => onChange('b2q4_cb_d', e.target.value)} value={userAnswers.b2q4_cb_d || ''}/></td></tr>
            <tr><td><b>Address Bus</b></td><td><input style={styles.input} onChange={(e) => onChange('b2q4_ab_u', e.target.value)} value={userAnswers.b2q4_ab_u || ''}/></td><td><input style={styles.input} onChange={(e) => onChange('b2q4_ab_d', e.target.value)} value={userAnswers.b2q4_ab_d || ''}/></td></tr>
            <tr><td><b>Data Bus</b></td><td><input style={styles.input} onChange={(e) => onChange('b2q4_db_u', e.target.value)} value={userAnswers.b2q4_db_u || ''}/></td><td><input style={styles.input} onChange={(e) => onChange('b2q4_db_d', e.target.value)} value={userAnswers.b2q4_db_d || ''}/></td></tr>
          </tbody>
        </table>
        
        <p style={{marginTop: '15px'}}>Use of <b>Data Address</b>:</p>
        <textarea style={styles.input} rows="2" placeholder="Explain the use of data address..." onChange={(e) => onChange('b2q4_addr_use', e.target.value)} value={userAnswers.b2q4_addr_use || ''}/>
      </div>

      <div style={{marginTop: '20px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
        <h4 style={{marginBottom: '10px', color: '#1e1b4b'}}>Bus Type 2: USB</h4>
        <p>Use of USB:</p>
        <input style={{...styles.input, marginBottom: '10px'}} onChange={(e) => onChange('b2q4_usb_use', e.target.value)} value={userAnswers.b2q4_usb_use || ''}/>
        <p>Attributes & Explanation:</p>
        <textarea style={styles.input} rows="2" placeholder="" onChange={(e) => onChange('b2q4_usb_attr', e.target.value)} value={userAnswers.b2q4_usb_attr || ''}/>
        
        <p style={{marginTop: '10px'}}>USB Standards & Colours:</p>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px'}}>
          <input style={styles.input} placeholder="1.0 Colour" onChange={(e) => onChange('b2q4_u1_c', e.target.value)} value={userAnswers.b2q4_u1_c || ''}/>
          <input style={styles.input} placeholder="2.0 Colour" onChange={(e) => onChange('b2q4_u2_c', e.target.value)} value={userAnswers.b2q4_u2_c || ''}/>
          <input style={styles.input} placeholder="3.0 Colour" onChange={(e) => onChange('b2q4_u3_c', e.target.value)} value={userAnswers.b2q4_u3_c || ''}/>
        </div>
        <p style={{marginTop: '10px'}}>Which standard is the fastest?</p>
        <input style={styles.input} onChange={(e) => onChange('b2q4_fast', e.target.value)} value={userAnswers.b2q4_fast || ''}/>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Bus Use:</b> Connect devices via data and control signals.<br/>
          <b>System Bus:</b> Rel: [same] as [word length/size] of [CPU].<br/>
          <b>Types:</b> 1. Control: one-way from processors. 2. Address: one-way from processors. 3. Data: two-way.<br/>
          <b>Data Address:</b> To indicate which data is to be read from or written into.<br/>
          <b>USB:</b> Use: Connect peripherals. Attr: Hot swapping (plug/unplug while operating). Standards: 1.0 (White), 2.0 (Black), 3.0 (Blue). Fast: USB 3.0.
        </div>
      )}
    </div>

<div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: CPU (Central Processing Unit)</h3>
        <StarButton questionId="b2q5" />
      </div>
      
      {/* Definitions */}
      <div style={{marginBottom: '20px'}}>
        <p>Definition of <b>CPU</b>:</p>
        <textarea style={styles.input} rows="2" placeholder="Processor consisting of chipsets..." onChange={(e) => onChange('b2q5_def', e.target.value)} value={userAnswers.b2q5_def || ''}/>
        <p style={{marginTop: '10px'}}>Definition of <b>Word Length / Word Size</b>:</p>
        <input style={styles.input} placeholder="" onChange={(e) => onChange('b2q5_word_def', e.target.value)} value={userAnswers.b2q5_word_def || ''}/>
        <p style={{marginTop: '10px'}}>Advantage of larger Word Length:</p>
        <textarea style={styles.input} rows="2" onChange={(e) => onChange('b2q5_word_adv', e.target.value)} value={userAnswers.b2q5_word_adv || ''}/>
      </div>

      {/* ALU & CU */}
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px'}}>
        <div style={{padding: '10px', backgroundColor: '#f8fafc', borderRadius: '8px'}}>
          <p><b>ALU</b> (Use & Data Transfer):</p>
          <textarea style={styles.input} rows="3" placeholder="" onChange={(e) => onChange('b2q5_alu', e.target.value)} value={userAnswers.b2q5_alu || ''}/>
        </div>
        <div style={{padding: '10px', backgroundColor: '#f8fafc', borderRadius: '8px'}}>
          <p><b>CU</b> (Uses):</p>
          <textarea style={styles.input} rows="3" placeholder="" onChange={(e) => onChange('b2q5_cu', e.target.value)} value={userAnswers.b2q5_cu || ''}/>
        </div>
      </div>

      {/* Registers */}
      <div style={{marginBottom: '20px'}}>
        <p><b>Registers</b> (Definition & Properties):</p>
        <textarea style={styles.input} rows="3" placeholder="" onChange={(e) => onChange('b2q5_reg_def', e.target.value)} value={userAnswers.b2q5_reg_def || ''}/>
        <table style={{...styles.table, marginTop: '10px'}}>
          <thead>
            <tr>
              <th style={styles.th}>Type</th>
              <th style={styles.th}>Purpose</th>
              <th style={styles.th}>Connect to Memory? (Via what bus?)</th>
            </tr>
          </thead>
          <tbody>
            {['CIR', 'PC', 'MAR', 'MDR', 'Accumulator'].map(reg => (
              <tr key={reg}>
                <td><b>{reg}</b></td>
                <td><input style={styles.input} onChange={(e) => onChange(`b2q5_${reg}_p`, e.target.value)} value={userAnswers[`b2q5_${reg}_p`] || ''}/></td>
                <td><input style={styles.input} placeholder="e.g. Yes via Address Bus" onChange={(e) => onChange(`b2q5_${reg}_c`, e.target.value)} value={userAnswers[`b2q5_${reg}_c`] || ''}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cache Memory */}
      <div style={{marginBottom: '20px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
        <p><b>Cache Memory</b> (Properties & Function):</p>
        <textarea style={styles.input} rows="4" placeholder="Volatile, performance, frequently accessed data..." onChange={(e) => onChange('b2q5_cache', e.target.value)} value={userAnswers.b2q5_cache || ''}/>
      </div>

      {/* Machine Cycle */}
      <div style={{marginBottom: '20px'}}>
        <p><b>Machine Cycle (7 Steps)</b>:</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          {[1,2,3,4,5,6,7].map(i => (
            <div key={i} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <span style={{fontWeight: 'bold', minWidth: '25px'}}>{i}.</span>
              <input style={styles.input} placeholder={`Step ${i}`} onChange={(e) => onChange(`b2q5_mc_${i}`, e.target.value)} value={userAnswers[`b2q5_mc_${i}`] || ''}/>
            </div>
          ))}
        </div>
      </div>

      {/* CPU Specifications */}
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div style={{padding: '10px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
          <p><b>1. Clock Rate</b> (Def & Performance):</p>
          <textarea style={styles.input} rows="4" onChange={(e) => onChange('b2q5_spec_clock', e.target.value)} value={userAnswers.b2q5_spec_clock || ''}/>
        </div>
        <div style={{padding: '10px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
          <p><b>2. Number of Cores</b> (Def & Performance):</p>
          <textarea style={styles.input} rows="4" onChange={(e) => onChange('b2q5_spec_cores', e.target.value)} value={userAnswers.b2q5_spec_cores || ''}/>
        </div>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>CPU:</b> Processor with chipsets to process data/control instructions.<br/>
          <b>Word Length:</b> Bits processed at once. Adv: Address more memory, complex functions.<br/>
          <b>ALU:</b> Logic/Arithmetic; result to Accumulator via Data Bus.<br/>
          <b>Registers:</b> CIR (current instr), PC (next addr), MAR (addr to mem - Address Bus), MDR (data from mem - Data Bus), Accumulator (ALU result).<br/>
          <b>Cache:</b> Volatile. Stores frequent data because it's faster than main memory.<br/>
          <b>Cycle:</b> 1. PC-MAR, 2. PC Update, 3. MAR-Mem (Addr Bus), 4. Mem-MDR (Data Bus), 5. MDR-CIR, 6. Decode/Exec, 7. Result-Accumulator.<br/>
          <b>Clock Rate:</b> Cycles/sec. Computer speed doesn't vary directly if main memory is slow.<br/>
          <b>Cores:</b> Parallel processors. Computer speed doesn't vary directly (depends on software).
        </div>
      )}
    </div>

    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: GPU</h3>
        <StarButton questionId="b2q6" />
      </div>
      <p>Difference with CPU:</p>
      <textarea style={styles.input} onChange={(e) => onChange('b2q6_diff', e.target.value)} value={userAnswers.b2q6_diff || ''}/>
      <p style={{marginTop: '15px'}}>Graphic Card vs iGPU Adv:</p>
      <div style={{display: 'flex', gap: '10px'}}>
        <textarea style={styles.input} placeholder="Graphic Card Adv" onChange={(e) => onChange('b2q6_gc', e.target.value)} value={userAnswers.b2q6_gc || ''}/>
        <textarea style={styles.input} placeholder="iGPU Adv" onChange={(e) => onChange('b2q6_ig', e.target.value)} value={userAnswers.b2q6_ig || ''}/>
      </div>
    </div>

<div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7: Storage Device - Main Memory</h3>
        <StarButton questionId="b2q7" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Use</th>
            <th style={styles.th}>Volatility</th>
            <th style={styles.th}>Rewritability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>ROM</b></td>
            <td><input style={styles.input} placeholder="" onChange={(e) => onChange('b2q7_rom_u', e.target.value)} value={userAnswers.b2q7_rom_u || ''}/></td>
            <td><input style={styles.input} placeholder="Volatile?" onChange={(e) => onChange('b2q7_rom_v', e.target.value)} value={userAnswers.b2q7_rom_v || ''}/></td>
            <td><input style={styles.input} placeholder="Rewritable?" onChange={(e) => onChange('b2q7_rom_r', e.target.value)} value={userAnswers.b2q7_rom_r || ''}/></td>
          </tr>
          <tr>
            <td><b>RAM</b></td>
            <td><input style={styles.input} placeholder="" onChange={(e) => onChange('b2q7_ram_u', e.target.value)} value={userAnswers.b2q7_ram_u || ''}/></td>
            <td><input style={styles.input} placeholder="Volatile?" onChange={(e) => onChange('b2q7_ram_v', e.target.value)} value={userAnswers.b2q7_ram_v || ''}/></td>
            <td><input style={styles.input} placeholder="Rewritable?" onChange={(e) => onChange('b2q7_ram_r', e.target.value)} value={userAnswers.b2q7_ram_r || ''}/></td>
          </tr>
        </tbody>
      </table>
      <p style={{marginTop: '15px'}}>Definition of <b>Firmware</b>:</p>
      <input style={styles.input} placeholder="Instructions to start computer..." onChange={(e) => onChange('b2q7_firmware', e.target.value)} value={userAnswers.b2q7_firmware || ''}/>
      {showAnswers && (
        <div style={styles.answerKey}>
          <b>ROM:</b> Store firmware, non-volatile, cannot be rewritten.<br/>
          <b>RAM:</b> Temp store processing data, volatile, rewritable in high speed.<br/>
          <b>Firmware:</b> Series of instructions required to start the computer.
        </div>
      )}
    </div>

<div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8: Secondary Storage</h3>
        <StarButton questionId="b2q8" />
      </div>
      <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
        <div style={{flex: 1}}>
          <p>Definition:</p>
          <input style={styles.input} onChange={(e) => onChange('b2q8_def', e.target.value)} value={userAnswers.b2q8_def || ''}/>
        </div>
        <div style={{flex: 1}}>
          <p>Volatility:</p>
          <input style={styles.input} onChange={(e) => onChange('b2q8_vol', e.target.value)} value={userAnswers.b2q8_vol || ''}/>
        </div>
      </div>

      <p><b>Access Methods:</b></p>
      <table style={{...styles.table, fontSize: '0.85rem'}}>
        <thead>
          <tr>
            <th style={styles.th}>Method</th>
            <th style={styles.th}>Mechanism (Storage & Search)</th>
            <th style={styles.th}>Access Rate</th>
            <th style={styles.th}>Device</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Sequential</b></td>
            <td><textarea style={styles.input} rows="3" onChange={(e) => onChange('b2q8_seq_m', e.target.value)} value={userAnswers.b2q8_seq_m || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('b2q8_seq_r', e.target.value)} value={userAnswers.b2q8_seq_r || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('b2q8_seq_d', e.target.value)} value={userAnswers.b2q8_seq_d || ''}/></td>
          </tr>
          <tr>
            <td><b>Random</b></td>
            <td><textarea style={styles.input} rows="3" onChange={(e) => onChange('b2q8_ran_m', e.target.value)} value={userAnswers.b2q8_ran_m || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('b2q8_ran_r', e.target.value)} value={userAnswers.b2q8_ran_r || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('b2q8_ran_d', e.target.value)} value={userAnswers.b2q8_ran_d || ''}/></td>
          </tr>
        </tbody>
      </table>

      <p style={{marginTop: '20px'}}><b>Types of Secondary Devices:</b></p>
      <table style={{...styles.table, fontSize: '0.8rem'}}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Attribute / Advantage / Disadvantage</th>
          </tr>
        </thead>
        <tbody>
          {['Magnetic Tape', 'Hard Disk', 'SSD', 'Memory Card', 'USB Flash Drive'].map(dev => (
            <tr key={dev}>
              <td><b>{dev}</b></td>
              <td><input style={styles.input} placeholder="Storage Type" onChange={(e) => onChange(`b2q8_${dev}_type`, e.target.value)} value={userAnswers[`b2q8_${dev}_type`] || ''}/></td>
              <td><textarea style={styles.input} rows="3" placeholder="Attr/Adv/Disadv..." onChange={(e) => onChange(`b2q8_${dev}_details`, e.target.value)} value={userAnswers[`b2q8_${dev}_details`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{marginTop: '20px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
        <p><b>Optical Disk</b></p>
        <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
          <input style={styles.input} placeholder="Storage Type" onChange={(e) => onChange('b2q8_opt_type', e.target.value)} value={userAnswers.b2q8_opt_type || ''}/>
          <input style={styles.input} placeholder="Attribute/Mechanism" onChange={(e) => onChange('b2q8_opt_attr', e.target.value)} value={userAnswers.b2q8_opt_attr || ''}/>
        </div>
        <input style={styles.input} placeholder="Reminder" onChange={(e) => onChange('b2q8_opt_rem', e.target.value)} value={userAnswers.b2q8_opt_rem || ''}/>
        
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px'}}>
          <table style={styles.table}>
            <thead><tr><th style={styles.th}>Media</th><th style={styles.th}>Size</th></tr></thead>
            <tbody>
              <tr><td>CD</td><td><input style={styles.input} onChange={(e) => onChange('b2q8_sz_cd', e.target.value)} value={userAnswers.b2q8_sz_cd || ''}/></td></tr>
              <tr><td>DVD</td><td><input style={styles.input} onChange={(e) => onChange('b2q8_sz_dvd', e.target.value)} value={userAnswers.b2q8_sz_dvd || ''}/></td></tr>
              <tr><td>BD</td><td><input style={styles.input} onChange={(e) => onChange('b2q8_sz_bd', e.target.value)} value={userAnswers.b2q8_sz_bd || ''}/></td></tr>
            </tbody>
          </table>
          <table style={styles.table}>
            <thead><tr><th style={styles.th}>Rewritability</th><th style={styles.th}>Types</th></tr></thead>
            <tbody>
              <tr><td>None</td><td><input style={styles.input} placeholder="" onChange={(e) => onChange('b2q8_rw_no', e.target.value)} value={userAnswers.b2q8_rw_no || ''}/></td></tr>
              <tr><td>Once</td><td><input style={styles.input} placeholder="" onChange={(e) => onChange('b2q8_rw_one', e.target.value)} value={userAnswers.b2q8_rw_one || ''}/></td></tr>
              <tr><td>Multiple</td><td><input style={styles.input} placeholder="" onChange={(e) => onChange('b2q8_rw_multi', e.target.value)} value={userAnswers.b2q8_rw_multi || ''}/></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Access:</b> Seq (Magnetic Tape): start-to-finish search, slower. Random (SSD): unique address, direct, faster/stable.<br/>
          <b>HDD:</b> Magnetic, high speed, less durable (head crash). <b>SSD:</b> Solid-state, controller + flash, durable, expensive.<br/>
          <b>Optical:</b> CD (700MB), DVD (4.7GB), BD (25-128GB).<br/>
          <b>RW:</b> -ROM (Read only), -R (Recordable once), -RW (Rewritable).
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

export default ICT_Comp_B_Ch2;
