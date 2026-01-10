import json
import re
from pathlib import Path

# Read the extracted PDF content
with open('pdf-content.json', 'r', encoding='utf-8') as f:
    pdf_content = json.load(f)

def format_content(content):
    """Properly format content with sections, headings, paragraphs, and lists"""
    if not content:
        return []
    
    # Fix character encoding issues
    content = content.replace('?o', '"').replace('??', '"').replace('?~', '"').replace('?T', "'")
    content = content.replace('?', '•')
    
    elements = []
    lines = content.split('\n')
    
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        
        if not line:
            i += 1
            continue
        
        # Detect headings (short lines, all caps, or ending with :)
        if (len(line) < 100 and 
            (line.isupper() or line.endswith(':') or 
             (len(line.split()) <= 8 and any(c.isupper() for c in line[:30])))):
            
            heading = line.replace(':', '').strip()
            if heading and heading != 'Refund Policy' and heading != 'Privacy Policy' and heading != 'Frequently asked questions' and heading != 'Contact Us' and heading != 'Corporate Social Responsibility (CSR) Policy':
                elements.append(('heading', heading))
        
        # Detect list items (starting with a., b., c., etc. or bullet)
        elif re.match(r'^[a-z]\.\s', line) or line.startswith('•'):
            items = []
            while i < len(lines):
                line = lines[i].strip()
                if not line:
                    break
                if re.match(r'^[a-z]\.\s', line):
                    item_text = re.sub(r'^[a-z]\.\s', '', line).strip()
                    items.append(item_text)
                elif line.startswith('•'):
                    item_text = line.replace('•', '').strip()
                    items.append(item_text)
                else:
                    break
                i += 1
            
            if items:
                elements.append(('list', items))
            continue
        
        # Regular paragraph
        else:
            para_lines = []
            while i < len(lines):
                line = lines[i].strip()
                if not line:
                    break
                # Stop if we hit a heading or list
                if (len(line) < 100 and (line.isupper() or line.endswith(':'))):
                    break
                if re.match(r'^[a-z]\.\s', line) or line.startswith('•'):
                    break
                para_lines.append(line)
                i += 1
            
            if para_lines:
                para_text = ' '.join(para_lines)
                if para_text and len(para_text) > 10:
                    elements.append(('paragraph', para_text))
            continue
        
        i += 1
    
    return elements

def create_jsx(elements):
    """Convert formatted elements to JSX"""
    jsx_lines = []
    
    for element_type, content in elements:
        if element_type == 'heading':
            jsx_lines.append(f'          <h2 className="font-bold text-2xl mt-8 mb-4">{content}</h2>')
        elif element_type == 'list':
            jsx_lines.append('          <ul className="list-disc pl-6 space-y-2 mt-4">')
            for item in content:
                jsx_lines.append(f'            <li>{item}</li>')
            jsx_lines.append('          </ul>')
        elif element_type == 'paragraph':
            # Escape quotes in JSX
            para = content.replace('"', '&quot;').replace("'", "&apos;")
            jsx_lines.append(f'          <p>{para}</p>')
    
    return '\n'.join(jsx_lines)

def create_page(page_name, title, content_key):
    """Create a complete page component"""
    content = pdf_content.get(content_key, '')
    elements = format_content(content)
    jsx_content = create_jsx(elements)
    
    return f'''export default function {page_name}() {{
  return (
    <div className="min-h-screen bg-[#FDFBF7] py-20 px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl mb-8">{title}</h1>
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
{jsx_content}
        </div>
      </div>
    </div>
  );
}}
'''

# Page configurations
pages_config = [
    ('TermsAndConditionsPage', 'Terms and Conditions', 'Minta Club Terms And Conditions.pdf', 'src/app/terms-and-conditions/page.tsx'),
    ('RefundPolicyPage', 'Refund Policy', 'Minta Club Refund Policy.pdf', 'src/app/refund-policy/page.tsx'),
    ('PrivacyPolicyPage', 'Privacy Policy', 'Minta Club Privacy Policy.pdf', 'src/app/privacy-policy/page.tsx'),
    ('FAQPage', 'Frequently Asked Questions', 'Minta Club FAQ.pdf', 'src/app/faq/page.tsx'),
    ('ContactUsPage', 'Contact Us', 'Minta Club Contact Us.pdf', 'src/app/contact-us/page.tsx'),
    ('CorporateSocialResponsibilityPage', 'Corporate Social Responsibility Policy', 'Corporate Social Responsibility Policy.pdf', 'src/app/corporate-social-responsibility/page.tsx'),
]

for page_name, title, content_key, path in pages_config:
    page_code = create_page(page_name, title, content_key)
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(page_code)
    print(f"Created {path}")

print("\nAll pages generated!")

