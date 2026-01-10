import json
import os
from pathlib import Path

try:
    import pdfplumber
except ImportError:
    print("pdfplumber not installed. Installing...")
    import subprocess
    subprocess.check_call(["pip", "install", "pdfplumber"])
    import pdfplumber

pdf_files = [
    'Minta Club Terms And Conditions.pdf',
    'Minta Club Refund Policy.pdf',
    'Minta Club Privacy Policy.pdf',
    'Minta Club FAQ.pdf',
    'Minta Club Contact Us.pdf',
    'Corporate Social Responsibility Policy.pdf'
]

results = {}

pdf_dir = Path('pdf')

for pdf_file in pdf_files:
    pdf_path = pdf_dir / pdf_file
    if not pdf_path.exists():
        print(f"File not found: {pdf_file}")
        continue
    
    try:
        text = ""
        with pdfplumber.open(str(pdf_path)) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n\n"
        results[pdf_file] = text
        print(f"Extracted content from {pdf_file} ({len(text)} characters)")
    except Exception as e:
        print(f"Error extracting {pdf_file}: {str(e)}")
        results[pdf_file] = ""

with open('pdf-content.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("\nAll PDF content extracted to pdf-content.json")

