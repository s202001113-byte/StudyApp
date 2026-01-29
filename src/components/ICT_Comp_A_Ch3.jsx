import { ArrowLeft } from 'lucide-react';

const ICT_Comp_A_Ch3 = ({ userAnswers, onChange, showAnswers, styles, StarButton, setCurrentView }) => (
  <div>
    {/* Q1: Unit of Data */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q1: Unit of Data</h3>
        <StarButton questionId="a3q1" />
      </div>
      <p>Unit of data (smallest):</p>
      <input style={styles.input} onChange={(e) => onChange('a3q1_unit', e.target.value)} value={userAnswers.a3q1_unit || ''}/>
      
      <p style={{marginTop: '10px'}}>Conversion of unit:</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
        <div>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>8 bit =</p>
          <input style={styles.input} onChange={(e) => onChange('a3q1_conv1', e.target.value)} value={userAnswers.a3q1_conv1 || ''}/>
        </div>
        <div>
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>1 KB =</p>
          <input style={styles.input} onChange={(e) => onChange('a3q1_conv2', e.target.value)} value={userAnswers.a3q1_conv2 || ''}/>
        </div>
      </div>

      <p style={{marginTop: '15px'}}>Unit of data transferred per unit time:</p>
      <input style={styles.input} onChange={(e) => onChange('a3q1_transfer', e.target.value)} value={userAnswers.a3q1_transfer || ''}/>
      
      <p style={{marginTop: '10px'}}>Conversion:</p>
      <input style={styles.input} placeholder="1 kbps =" onChange={(e) => onChange('a3q1_transfer_conv', e.target.value)} value={userAnswers.a3q1_transfer_conv || ''}/>

      <p style={{marginTop: '15px'}}>Maximum number of patterns represented by binary number (n bits):</p>
      <input style={styles.input} onChange={(e) => onChange('a3q1_patterns', e.target.value)} value={userAnswers.a3q1_patterns || ''}/>
      
      {showAnswers && <div style={styles.answerKey}>Unit: bit (b). Conversions: 8 bit = 1 byte, 1024 B = 1 KB. Transfer unit: bps. Conversion: 1000 bps = 1 kbps. Patterns: 2^n</div>}
    </div>

    {/* Q2: Representing Numbers */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q2: Representing Numbers</h3>
        <StarButton questionId="a3q2" />
      </div>
      
      <div style={{marginBottom: '20px'}}>
        <p><b>Unsigned Integer</b></p>
        <p style={{fontSize: '0.9rem', color: '#64748b', marginBottom: '8px'}}>Definition:</p>
        <input style={styles.input} onChange={(e) => onChange('a3q2_u_def', e.target.value)} value={userAnswers.a3q2_u_def || ''}/>
        <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '10px', marginBottom: '8px'}}>Range (n bits):</p>
        <input style={styles.input} onChange={(e) => onChange('a3q2_u_range', e.target.value)} value={userAnswers.a3q2_u_range || ''}/>
      </div>

      <div style={{marginBottom: '20px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
        <p style={{fontWeight: '700', color: '#4338ca', marginBottom: '10px'}}><b>Signed Integer (Two Methods)</b></p>
        
        <div style={{marginBottom: '15px'}}>
          <p><b>Two's Complement Representation</b></p>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginBottom: '8px'}}>First bit meaning (0/1):</p>
          <input style={styles.input} onChange={(e) => onChange('a3q2_tcr_bit', e.target.value)} value={userAnswers.a3q2_tcr_bit || ''}/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '10px', marginBottom: '8px'}}>Range (n bits):</p>
          <input style={styles.input} onChange={(e) => onChange('a3q2_tcr_range', e.target.value)} value={userAnswers.a3q2_tcr_range || ''}/>
        </div>

        <div>
          <p><b>Two's Complement</b></p>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginBottom: '8px'}}>Conversion method:</p>
          <input style={styles.input} onChange={(e) => onChange('a3q2_tc_method', e.target.value)} value={userAnswers.a3q2_tc_method || ''}/>
          <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '10px', marginBottom: '8px'}}>Range (n bits):</p>
          <input style={styles.input} onChange={(e) => onChange('a3q2_tc_range', e.target.value)} value={userAnswers.a3q2_tc_range || ''}/>
        </div>
      </div>

      <p><b>Relationship between Two's Complement and Two's Complement Representation</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q2_rel', e.target.value)} value={userAnswers.a3q2_rel || ''}/>
      
      {showAnswers && <div style={styles.answerKey}>Unsigned: Positive integer, Range 0 to (2^n)-1. Two's Complement Representation: First bit 1=negative 0=positive, Range -(2^(n-1)) to 2^(n-1)-1. Two's Complement: Interchange 1 and 0 then add 1, Range -(2^(n-1))+1 to 2^(n-1). Relationship: Two's complement of X is the two's complement representation of -X</div>}
    </div>

    {/* Q3: Character Encoding */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q3: Character Encoding Systems</h3>
        <StarButton questionId="a3q3" />
      </div>
      
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Encoding System</th>
            <th style={styles.th}>Language / Characters</th>
            <th style={styles.th}>Bits Used</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>ASCII</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_ascii_lang', e.target.value)} value={userAnswers.a3q3_ascii_lang || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_ascii_bits', e.target.value)} value={userAnswers.a3q3_ascii_bits || ''}/></td>
          </tr>
          <tr>
            <td><b>Big-5</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_big5_lang', e.target.value)} value={userAnswers.a3q3_big5_lang || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_big5_bits', e.target.value)} value={userAnswers.a3q3_big5_bits || ''}/></td>
          </tr>
          <tr>
            <td><b>GuoBiao (GB)</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_gb_lang', e.target.value)} value={userAnswers.a3q3_gb_lang || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_gb_bits', e.target.value)} value={userAnswers.a3q3_gb_bits || ''}/></td>
          </tr>
          <tr>
            <td><b>Unicode</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_unicode_lang', e.target.value)} value={userAnswers.a3q3_unicode_lang || ''}/></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q3_unicode_bits', e.target.value)} value={userAnswers.a3q3_unicode_bits || ''}/></td>
          </tr>
        </tbody>
      </table>

      <div style={{marginTop: '20px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
        <p><b>Why use an extra bit for ASCII? (3 reasons)</b></p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px'}}>
          <input style={styles.input} onChange={(e) => onChange('a3q3_reason1', e.target.value)} value={userAnswers.a3q3_reason1 || ''}/>
          <input style={styles.input} onChange={(e) => onChange('a3q3_reason2', e.target.value)} value={userAnswers.a3q3_reason2 || ''}/>
          <input style={styles.input} onChange={(e) => onChange('a3q3_reason3', e.target.value)} value={userAnswers.a3q3_reason3 || ''}/>
        </div>
      </div>

      <div style={{marginTop: '15px'}}>
        <p><b>Consequence of using wrong character encoding system:</b></p>
        <input style={styles.input} onChange={(e) => onChange('a3q3_consequence', e.target.value)} value={userAnswers.a3q3_consequence || ''}/>
      </div>

      {showAnswers && (
        <div style={styles.answerKey}>
          ASCII: English, 7 bit. Big-5: Traditional Chinese, 2 bytes. GuoBiao: Simplified Chinese, 2 bytes. Unicode: Multi-language, 2 to 4 bytes.<br/>
          Reasons for extra bit: 1. Some system process data in byte 2. Represent more character 3. As parity bit<br/>
          Consequence: Garbled text is shown
        </div>
      )}
    </div>

    {/* Q4: Barcode vs QR Code */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q4: Barcode and QR Code</h3>
        <StarButton questionId="a3q4" />
      </div>
      <p style={{marginBottom: '15px'}}>List out comparison of Barcode and QR code in different aspects. Input both aspect name and values:</p>
      <table style={styles.table}>
        <thead>
          <tr><th style={styles.th}>Aspect Name</th><th style={styles.th}>Barcode</th><th style={styles.th}>QR Code</th></tr>
        </thead>
        <tbody>
          {[1, 2, 3].map(i => (
            <tr key={i}>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q4_asp_${i}`, e.target.value)} value={userAnswers[`a3q4_asp_${i}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q4_bar_${i}`, e.target.value)} value={userAnswers[`a3q4_bar_${i}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q4_qr_${i}`, e.target.value)} value={userAnswers[`a3q4_qr_${i}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      {showAnswers && (
        <div style={styles.answerKey}>
          1. Character Set: Barcode - limited to ASCII code or number, QR Code - Unicode<br/>
          2. Character Length: Barcode - 50 max, QR Code - at least 1000<br/>
          3. Easy to Scan: Barcode - only from 0 degree or 180 degree, QR Code - any direction and angle
        </div>
      )}
    </div>

    {/* Q5: Analog vs Digital */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q5: Analog and Digital Data</h3>
        <StarButton questionId="a3q5" />
      </div>
      
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px'}}>
        <div>
          <p><b>Definition of Analog Data:</b></p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q5_a_def', e.target.value)} value={userAnswers.a3q5_a_def || ''}/>
        </div>
        <div>
          <p><b>Definition of Digital Data:</b></p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q5_d_def', e.target.value)} value={userAnswers.a3q5_d_def || ''}/>
        </div>
      </div>
      
      <p><b>Comparison of Analog and Digital Data. Input both aspect name and values:</b></p>
      <table style={styles.table}>
        <thead>
          <tr><th style={styles.th}>Aspect Name</th><th style={styles.th}>Analog</th><th style={styles.th}>Digital</th></tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map(i => (
            <tr key={i}>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q5_asp_${i}`, e.target.value)} value={userAnswers[`a3q5_asp_${i}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q5_ana_${i}`, e.target.value)} value={userAnswers[`a3q5_ana_${i}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q5_dig_${i}`, e.target.value)} value={userAnswers[`a3q5_dig_${i}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '20px'}}><b>Digitalizing Audio - Procedure and Steps:</b></p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
        <div>
          <p style={{fontWeight: '700', color: '#4338ca'}}>Step 1: Discretization</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q5_s1', e.target.value)} value={userAnswers.a3q5_s1 || ''}/>
        </div>
        <div>
          <p style={{fontWeight: '700', color: '#4338ca'}}>Step 2: Quantization</p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q5_s2', e.target.value)} value={userAnswers.a3q5_s2 || ''}/>
        </div>
      </div>

      <p style={{marginTop: '15px'}}>Way to digitalize books (name):</p>
      <input style={styles.input} onChange={(e) => onChange('a3q5_books', e.target.value)} value={userAnswers.a3q5_books || ''}/>

      {showAnswers && (
        <div style={styles.answerKey}>
          Analog: Data represented physically with continuous values. Digital: Data represented by discrete symbols.<br/>
          Aspects: 1. Way of presentation - Analog: Physical matter, Digital: Discrete symbols | 2. Lifespan and durability - Analog: Shorter and less durable, Digital: Longer and more durable | 3. Viability to be compressed - Analog: Lower, Digital: Higher | 4. Resistance to data corruption - Analog: Lower, Digital: Higher<br/>
          S1: Sample the analog signal at fixed time interval. S2: Assign samples discrete value from set of fixed discrete values. Books: OCR
        </div>
      )}
    </div>

    {/* Q6: Compression */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q6: Compression</h3>
        <StarButton questionId="a3q6" />
      </div>
      <p><b>Definition of Compression:</b></p>
      <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q6_def', e.target.value)} value={userAnswers.a3q6_def || ''}/>
      
      <div style={{marginTop: '15px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
        <div>
          <p><b>Lossy Compression Definition:</b></p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q6_lossy', e.target.value)} value={userAnswers.a3q6_lossy || ''}/>
        </div>
        <div>
          <p><b>Lossless Compression Definition:</b></p>
          <textarea style={styles.input} rows="2" onChange={(e) => onChange('a3q6_lossless', e.target.value)} value={userAnswers.a3q6_lossless || ''}/>
        </div>
      </div>

      <p style={{marginTop: '15px'}}>Compression Ratio Formula:</p>
      <input style={styles.input} onChange={(e) => onChange('a3q6_ratio', e.target.value)} value={userAnswers.a3q6_ratio || ''}/>
      
      {showAnswers && <div style={styles.answerKey}>Compression: Reduce the size of file to save storage space and facilitate transmission. Lossy: An amount data is lost during compression, but have a higher compression ratio. Lossless: No data is lost during compression. Ratio: Uncompressed size / Compressed size</div>}
    </div>

    {/* Q7: File Size Calculations */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q7: File Size Calculations</h3>
        <StarButton questionId="a3q7" />
      </div>
      <table style={styles.table}>
        <thead>
          <tr><th style={styles.th}>File Type</th><th style={styles.th}>Formula or Attribute</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Plain Text</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q7_plain', e.target.value)} value={userAnswers.a3q7_plain || ''}/></td>
          </tr>
          <tr>
            <td><b>Formatted Text</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q7_formatted', e.target.value)} value={userAnswers.a3q7_formatted || ''}/></td>
          </tr>
          <tr>
            <td><b>Bitmap Image</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q7_bitmap', e.target.value)} value={userAnswers.a3q7_bitmap || ''}/></td>
          </tr>
          <tr>
            <td><b>Vector Image</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q7_vector', e.target.value)} value={userAnswers.a3q7_vector || ''}/></td>
          </tr>
          <tr>
            <td><b>Audio</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q7_audio', e.target.value)} value={userAnswers.a3q7_audio || ''}/></td>
          </tr>
          <tr>
            <td><b>Video</b></td>
            <td><input style={styles.input} onChange={(e) => onChange('a3q7_video', e.target.value)} value={userAnswers.a3q7_video || ''}/></td>
          </tr>
        </tbody>
      </table>
      {showAnswers && <div style={styles.answerKey}>Plain Text: Number of character * size of one character. Formatted Text: Usually larger size. Bitmap Image: Height * width * colour depth. Vector Image: Usually smaller file size. Audio: Sampling rate * bit depth * length * number of channels. Video: Image * fps + audio</div>}
    </div>

    {/* Q8: File Formats */}
    <div style={styles.qSection}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <h3 style={styles.qTitle}>Q8: File Formats - Text</h3>
        <StarButton questionId="a3q8" />
      </div>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Extension</th><th style={styles.th}>File Type</th><th style={styles.th}>Attribute</th></tr></thead>
        <tbody>
          {[
            {ext: '.TXT', type: 'Plain text', attr: 'Has smaller file size'},
            {ext: '.RTF', type: 'Formatted text', attr: 'Can add hyperlinks to the file'},
            {ext: '.DOCX', type: 'Formatted text', attr: 'Can add multimedia to file'},
            {ext: '.PDF', type: 'Formatted text', attr: 'Provide a uniform layout across different platforms'}
          ].map((item, idx) => (
            <tr key={idx}>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8t_ext_${idx}`, e.target.value)} value={userAnswers[`a3q8t_ext_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8t_type_${idx}`, e.target.value)} value={userAnswers[`a3q8t_type_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8t_attr_${idx}`, e.target.value)} value={userAnswers[`a3q8t_attr_${idx}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '20px'}}><b>File Formats - Image</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Ext</th><th style={styles.th}>Transparent</th><th style={styles.th}>Animation</th><th style={styles.th}>Compression</th><th style={styles.th}>Attribute 1</th><th style={styles.th}>Attribute 2</th></tr></thead>
        <tbody>
          {[
            {ext: '.BMP', trans: 'N', anim: 'N', comp: 'Uncompressed', attr1: '24 bits of colour depth', attr2: 'Relatively large file size'},
            {ext: '.JPG', trans: 'N', anim: 'N', comp: 'Lossy', attr1: '24 bits of colour depth', attr2: 'Relatively small file size'},
            {ext: '.PNG', trans: 'Y', anim: 'N', comp: 'Lossless', attr1: '48 bits of colour depth', attr2: ''},
            {ext: '.WebP', trans: 'Y', anim: 'Y', comp: 'Lossy or lossless', attr1: '24 bits of colour depth', attr2: 'Relatively small file size'},
            {ext: '.GIF', trans: 'Y', anim: 'Y', comp: 'Lossless', attr1: '8 bits of colour depth only', attr2: ''},
            {ext: '.SVG', trans: 'Y', anim: 'Y', comp: 'Uncompressed', attr1: 'Has a lossless compressed version called SVGZ', attr2: ''}
          ].map((item, idx) => (
            <tr key={idx}>
              <td><input style={{...styles.input, width: '60px'}} onChange={(e) => onChange(`a3q8i_ext_${idx}`, e.target.value)} value={userAnswers[`a3q8i_ext_${idx}`] || ''}/></td>
              <td><input style={{...styles.input, width: '50px'}} onChange={(e) => onChange(`a3q8i_trans_${idx}`, e.target.value)} value={userAnswers[`a3q8i_trans_${idx}`] || ''}/></td>
              <td><input style={{...styles.input, width: '50px'}} onChange={(e) => onChange(`a3q8i_anim_${idx}`, e.target.value)} value={userAnswers[`a3q8i_anim_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8i_comp_${idx}`, e.target.value)} value={userAnswers[`a3q8i_comp_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8i_attr1_${idx}`, e.target.value)} value={userAnswers[`a3q8i_attr1_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8i_attr2_${idx}`, e.target.value)} value={userAnswers[`a3q8i_attr2_${idx}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '20px'}}><b>File Formats - Audio</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Extension</th><th style={styles.th}>Compression Type</th><th style={styles.th}>Attribute 1</th><th style={styles.th}>Attribute 2</th></tr></thead>
        <tbody>
          {[
            {ext: '.WAV', comp: 'Uncompressed', attr1: 'High audio quality', attr2: 'Large file size'},
            {ext: '.MP3', comp: 'Lossy', attr1: 'Small file size', attr2: ''},
            {ext: '.WMA', comp: 'Lossy or lossless', attr1: 'File size depends on compression methods', attr2: ''},
            {ext: '.MIDI', comp: 'Uncompressed', attr1: 'Stores musical notes or sampled music', attr2: 'But not real life sound'}
          ].map((item, idx) => (
            <tr key={idx}>
              <td><input style={{...styles.input, width: '60px'}} onChange={(e) => onChange(`a3q8a_ext_${idx}`, e.target.value)} value={userAnswers[`a3q8a_ext_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8a_comp_${idx}`, e.target.value)} value={userAnswers[`a3q8a_comp_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8a_attr1_${idx}`, e.target.value)} value={userAnswers[`a3q8a_attr1_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8a_attr2_${idx}`, e.target.value)} value={userAnswers[`a3q8a_attr2_${idx}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{marginTop: '20px'}}><b>File Formats - Video</b></p>
      <table style={styles.table}>
        <thead><tr><th style={styles.th}>Extension</th><th style={styles.th}>Compression Type</th></tr></thead>
        <tbody>
          {[
            {ext: '.AVI', comp: 'Uncompressed'},
            {ext: '.MP4', comp: 'Lossy'},
            {ext: '.WebM', comp: 'Lossy or lossless'},
            {ext: '.MOV', comp: 'Lossy'}
          ].map((item, idx) => (
            <tr key={idx}>
              <td><input style={{...styles.input, width: '60px'}} onChange={(e) => onChange(`a3q8v_ext_${idx}`, e.target.value)} value={userAnswers[`a3q8v_ext_${idx}`] || ''}/></td>
              <td><input style={styles.input} onChange={(e) => onChange(`a3q8v_comp_${idx}`, e.target.value)} value={userAnswers[`a3q8v_comp_${idx}`] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAnswers && (
        <div style={styles.answerKey}>
          <b>Text:</b> .TXT, .RTF, .DOCX, .PDF - see table data<br/>
          <b>Image:</b> .BMP through .SVG - see table data<br/>
          <b>Audio:</b> .WAV through .MIDI - see table data<br/>
          <b>Video:</b> .AVI (Uncompressed), .MP4 (Lossy), .WebM (Lossy or lossless), .MOV (Lossy)
        </div>
      )}
    </div>
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0', textAlign: 'center'}}>
      <button style={{...styles.backBtn, display: 'inline-block'}} onClick={() => setCurrentView('home')}><ArrowLeft size={18} style={{marginRight: '8px'}}/> Back to Home</button>
    </div>
  </div>
);

export default ICT_Comp_A_Ch3;
