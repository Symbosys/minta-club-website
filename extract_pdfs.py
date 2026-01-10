import json
import os
from pathlib import Path

try:
    from PyPDF2 import PdfReader
except ImportError:
    print("PyPDF2 not installed. Installing...")
    import subprocess
    subprocess.check_call(["pip", "install", "PyPDF2"])
    from PyPDF2 import PdfReader

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
        reader = PdfReader(str(pdf_path))
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n\n"
        results[pdf_file] = text
        print(f"Extracted content from {pdf_file}")
    except Exception as e:
        print(f"Error extracting {pdf_file}: {str(e)}")
        results[pdf_file] = ""

with open('pdf-content.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("\nAll PDF content extracted to pdf-content.json")

