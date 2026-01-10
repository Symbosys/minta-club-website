import json
import re
from pathlib import Path

# Read the extracted PDF content
with open('pdf-content.json', 'r', encoding='utf-8') as f:
    pdf_content = json.load(f)

def format_text_for_jsx(text):
    """Format plain text into JSX format"""
    if not text:
        return ""
    
    # Replace special characters
    text = text.replace('?o', '"').replace('??', '"').replace('?~', '"').replace('?T', "'")
    text = text.replace('?"', '-').replace('', '')
    
    # Split text into sections
    lines = text.split('\n')
    
    formatted_sections = []
    current_para = []
    in_list = False
    
    for line in lines:
        line = line.strip()
        if not line:
            if current_para:
                para_text = ' '.join(current_para)
                if para_text:
                    formatted_sections.append(f"          <p>{para_text}</p>")
                current_para = []
            continue
        
        # Check for headings (short lines, all caps, or ending with :)
        if len(line) < 80 and (line.isupper() or line.endswith(':') or 
                               (len(line.split()) < 8 and any(c.isupper() for c in line))):
            if current_para:
                para_text = ' '.join(current_para)
                if para_text:
                    formatted_sections.append(f"          <p>{para_text}</p>")
                current_para = []
            
            # Clean up heading
            heading = line.replace(':', '').strip()
            if heading:
                formatted_sections.append(f'          <h2 className="font-bold text-2xl mt-8 mb-4">{heading}</h2>')
        # Check for list items (starting with a., b., c., etc. or bullet points)
        elif re.match(r'^[a-z]\.\s', line) or line.startswith('?') or line.startswith('-'):
            if current_para:
                para_text = ' '.join(current_para)
                if para_text:
                    formatted_sections.append(f"          <p>{para_text}</p>")
                current_para = []
            
            list_item = re.sub(r'^[a-z]\.\s', '', line).strip()
            list_item = list_item.replace('?', '•').replace('-', '•').strip()
            if list_item:
                formatted_sections.append(f'          <li>{list_item}</li>')
        else:
            current_para.append(line)
    
    # Add remaining paragraph
    if current_para:
        para_text = ' '.join(current_para)
        if para_text:
            formatted_sections.append(f"          <p>{para_text}</p>")
    
    return '\n'.join(formatted_sections)

def create_page_component(page_name, title, content):
    """Create a React page component with proper formatting"""
    # Split content into sections by major headings
    sections = re.split(r'\n([A-Z][^:]+:)\n', content)
    
    formatted_content = []
    i = 0
    
    while i < len(sections):
        section = sections[i].strip()
        
        if not section:
            i += 1
            continue
        
        # Check if it's a heading (next section is likely a heading)
        if i + 1 < len(sections) and len(sections[i+1].strip()) < 100:
            heading = sections[i].strip().replace(':', '').replace('?o', '"').replace('??', '"')
            if heading and len(heading) < 100:
                formatted_content.append(f'          <section>')
                formatted_content.append(f'            <h2 className="font-bold text-2xl mt-8 mb-4">{heading}</h2>')
                
                # Process the content after the heading
                if i + 1 < len(sections):
                    body = sections[i+1].strip()
                    # Split into paragraphs
                    paragraphs = body.split('\n\n')
                    for para in paragraphs:
                        para = para.strip()
                        if para and len(para) > 10:
                            # Check if it's a list
                            if re.match(r'^[a-z]\.\s', para) or para.startswith('?'):
                                formatted_content.append('            <ul className="list-disc pl-6 space-y-2 mt-4">')
                                items = re.split(r'(?<=\.)\s', para)
                                for item in items:
                                    item = item.strip()
                                    if item:
                                        item = re.sub(r'^[a-z]\.\s', '', item)
                                        item = item.replace('?', '').strip()
                                        formatted_content.append(f'              <li>{item}</li>')
                                formatted_content.append('            </ul>')
                            else:
                                para = para.replace('?o', '"').replace('??', '"').replace('?T', "'").replace('?~', '"').replace('?"', '-')
                                formatted_content.append(f'            <p>{para}</p>')
                
                formatted_content.append('          </section>')
                i += 2
            else:
                i += 1
        else:
            # Regular paragraph
            para = section.replace('?o', '"').replace('??', '"').replace('?T', "'").replace('?~', '"').replace('?"', '-')
            if para and len(para) > 10:
                formatted_content.append(f'          <p>{para}</p>')
            i += 1
    
    content_jsx = '\n'.join(formatted_content)
    
    return f'''export default function {page_name}() {{
  return (
    <div className="min-h-screen bg-[#FDFBF7] py-20 px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl mb-8">{title}</h1>
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
{content_jsx}
        </div>
      </div>
    </div>
  );
}}
'''

# Define page mappings
pages = [
    {
        'key': 'Minta Club Terms And Conditions.pdf',
        'name': 'TermsAndConditionsPage',
        'title': 'Terms and Conditions',
        'path': 'src/app/terms-and-conditions/page.tsx'
    },
    {
        'key': 'Minta Club Refund Policy.pdf',
        'name': 'RefundPolicyPage',
        'title': 'Refund Policy',
        'path': 'src/app/refund-policy/page.tsx'
    },
    {
        'key': 'Minta Club Privacy Policy.pdf',
        'name': 'PrivacyPolicyPage',
        'title': 'Privacy Policy',
        'path': 'src/app/privacy-policy/page.tsx'
    },
    {
        'key': 'Minta Club FAQ.pdf',
        'name': 'FAQPage',
        'title': 'Frequently Asked Questions',
        'path': 'src/app/faq/page.tsx'
    },
    {
        'key': 'Minta Club Contact Us.pdf',
        'name': 'ContactUsPage',
        'title': 'Contact Us',
        'path': 'src/app/contact-us/page.tsx'
    },
    {
        'key': 'Corporate Social Responsibility Policy.pdf',
        'name': 'CorporateSocialResponsibilityPage',
        'title': 'Corporate Social Responsibility Policy',
        'path': 'src/app/corporate-social-responsibility/page.tsx'
    }
]

# Generate all pages
for page_info in pages:
    content = pdf_content.get(page_info['key'], '')
    if content:
        page_code = create_page_component(
            page_info['name'],
            page_info['title'],
            content
        )
        Path(page_info['path']).parent.mkdir(parents=True, exist_ok=True)
        with open(page_info['path'], 'w', encoding='utf-8') as f:
            f.write(page_code)
        print(f"Created {page_info['path']}")
    else:
        print(f"Warning: No content found for {page_info['key']}")

print("\nAll pages generated successfully!")

