#!/usr/bin/env python3
"""
Generate all remaining replacements for quiz file updates.
This script identifies which StarButton lines still need to be wrapped
and which answer visibility checks need to be updated.
"""

import re

# Read the file
with open(r'c:\Users\user\ict-quiz\src\App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all standalone StarButton lines that are NOT yet wrapped
# Looking for pattern: <StarButton questionId="XXX" />
# that are NOT inside a flex div with AnswerButton

star_button_pattern = r'<StarButton questionId="([^"]+)"\s*/>'
matches = list(re.finditer(star_button_pattern, content))

print(f"Total StarButton instances found: {len(matches)}")

# Questions that need updating
all_questions = [
    'a1q1', 'a1q2', 'a1q3', 'a1q4',
    'a2q1', 'a2q2', 'a2q3',
    'a3q1', 'a3q2', 'a3q3', 'a3q4', 'a3q5', 'a3q6', 'a3q7', 'a3q8',
    'b1q1', 'b1q2', 'b1q3', 'b1q4',
    'b2q1', 'b2q2', 'b2q3', 'b2q4', 'b2q5', 'b2q6', 'b2q7', 'b2q8',
    'b3q1', 'b3q2', 'b3q3', 'b3q4',
    'c1q1', 'c1q2', 'c1q3', 'c1q4', 'c1q5', 'c1q6',
    'c2q1', 'c2q2', 'c2q3', 'c2q4', 'c2q5', 'c2q6', 'c2q7', 'c2q8',
    'c3q1', 'c3q2', 'c3q3', 'c3q4', 'c3q5', 'c3q6', 'c3q8', 'c3q9',
    'c4q1', 'c4q2', 'c4q3', 'c4q4',
    'c5q1', 'c5q2', 'c5q3', 'c5q4', 'c5q5', 'c5q6', 'c5q7', 'c5q8', 'c5q9', 'c5q10', 'c5q11',
    'e2q1', 'e2q2', 'e2q3',
    'e3c1q1', 'e3c1q2', 'e3c1q3', 'e3c1q4', 'e3c1q5', 'e3c1q6', 'e3c1q7', 'e3c1q8',
    'e3c2q1', 'e3c2q2',
    'e3c3q1', 'e3c3q2', 'e3c3q3', 'e3c3q4', 'e3c3q5', 'e3c3q6',
    'ch01_q1', 'ch01_q2', 'ch01_q3', 'ch01_q4', 'ch01_q5', 'ch01_q6', 'ch01_q7', 'ch01_q8', 'ch01_q9', 'ch01_q10',
    'ch01_q11', 'ch01_q12', 'ch01_q13', 'ch01_q14', 'ch01_q15', 'ch01_q16', 'ch01_q17', 'ch01_q18', 'ch01_q19', 'ch01_q20',
    'ch01_q21', 'ch01_q22', 'ch01_q23', 'ch01_q24', 'ch01_q25', 'ch01_q26', 'ch01_q27', 'ch01_q28', 'ch01_q29', 'ch01_q30',
    'ch01_q31', 'ch01_q32', 'ch01_q33', 'ch01_q34', 'ch01_q35', 'ch01_q36', 'ch01_q37', 'ch01_q38', 'ch01_q39', 'ch01_q40',
    'ch01_q41', 'ch01_q42', 'ch01_q43', 'ch01_q44', 'ch01_q45', 'ch01_q46', 'ch01_q47', 'ch01_q48'
]

# Check which ones already have AnswerButton
questions_needing_wrapper = []
for q in all_questions:
    # Check if this question already has AnswerButton
    pattern = f'<AnswerButton questionId="{q}"'
    if pattern not in content:
        questions_needing_wrapper.append(q)

print(f"Questions needing button wrapper: {len(questions_needing_wrapper)}")
if questions_needing_wrapper:
    print(f"First few: {questions_needing_wrapper[:10]}")
    print(f"Last few: {questions_needing_wrapper[-10:]}")

# Generate summary report
completed = [q for q in all_questions if q not in questions_needing_wrapper]
print(f"\n--- SUMMARY ---")
print(f"Total questions: {len(all_questions)}")
print(f"Already updated: {len(completed)}")
print(f"Still need updating: {len(questions_needing_wrapper)}")

if questions_needing_wrapper:
    # Group by section
    sections = {}
    for q in questions_needing_wrapper:
        # Extract section (a1, a2, a3, b1, b2, b3, c1, c2, c3, c4, c5, e2, e3c1, etc)
        if q.startswith('ch'):
            sec = 'Chinese'
        elif q.startswith('e3c'):
            sec = q[:4]  # e3c1, e3c2, e3c3
        elif q.startswith('e'):
            sec = q[:2]  # e2, e3
        else:
            sec = q[:2]  # a1, a2, b1, etc
        
        if sec not in sections:
            sections[sec] = []
        sections[sec].append(q)
    
    print(f"\nBreakdown by section:")
    for sec in sorted(sections.keys()):
        print(f"  {sec}: {len(sections[sec])} questions")
