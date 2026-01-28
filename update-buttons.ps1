# Read the file
$content = Get-Content -Path "c:\Users\user\ict-quiz\src\App.jsx" -Raw

# Pattern 1: Replace isolated StarButton lines with wrapped version
# Find pattern: `<StarButton questionId="..." />` on its own line (with proper indentation)
# This regex looks for lines that have StarButton but not already wrapped

$pattern = '(\s+)<StarButton questionId="([^"]+)" />'
$replacement = '$1<div style={{display: ''flex'', gap: ''8px''}}>
$1  <AnswerButton questionId="$2" />
$1  <StarButton questionId="$2" />
$1</div>'

$content = [System.Text.RegularExpressions.Regex]::Replace($content, $pattern, $replacement)

# Pattern 2: Replace showAnswers conditions to include individual answers
# Find: {showAnswers && 
# Replace with: {(showAnswers || individualAnswers['qid']) &&

# We need to match and extract the question ID from nearby context
# This is more complex, so we'll do it for common patterns

# For simple single-line answer displays
$pattern2 = '\{showAnswers && <div style=\{styles\.answerKey\}>([^<]*?)<\/div>\}'
$replacement2 = '{(showAnswers || individualAnswers[''?'']) && <div style={styles.answerKey}>$1</div>}'

# Actually, let's use a simpler approach - find all showAnswers instances
# and try to extract question ID from surrounding lines

$lines = $content -split "`n"
$output = @()

for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    
    # Check if this line contains showAnswers but not already updated
    if ($line -match '\{showAnswers &&' -and $line -notmatch 'individualAnswers') {
        # Try to find the question ID from previous lines
        $qId = $null
        for ($j = $i - 1; $j -ge [Math]::Max(0, $i - 10); $j--) {
            if ($lines[$j] -match 'questionId="([^"]+)"') {
                $qId = $matches[1]
                break
            }
            if ($lines[$j] -match 'questionId=`\`phy4ch[23]q\$\{q\.id\}`\`') {
                # Dynamic ID pattern for physics
                $qId = "DYNAMIC"
                break
            }
        }
        
        if ($qId -and $qId -ne "DYNAMIC") {
            # Replace the condition
            $line = $line -replace '\{showAnswers &&', "{(showAnswers || individualAnswers['$qId']) &&"
        }
    }
    
    $output += $line
}

$content = $output -join "`n"

# Write the file back
Set-Content -Path "c:\Users\user\ict-quiz\src\App.jsx" -Value $content

Write-Host "File updated successfully"
