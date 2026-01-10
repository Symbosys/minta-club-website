import json
import re
from pathlib import Path

# Read the extracted PDF content
with open('pdf-content.json', 'r', encoding='utf-8') as f:
    pdf_content = json.load(f)

def format_text_for_html(text):
    """Format plain text into HTML-ready format"""
    if not text:
        return ""
    
    # Replace special characters
    text = text.replace('?o', '"').replace('??', '"').replace('?~', '"').replace('?T', "'")
    text = text.replace('?"', '-')
    
    # Split into paragraphs (double newlines)
    paragraphs = text.split('\n\n')
    
    # Clean up each paragraph
    formatted_paragraphs = []
    for para in paragraphs:
        para = para.strip()
        if para and len(para) > 10:  # Only include substantial paragraphs
            # Check if it's a heading (short line, all caps, or ends with :)
            if len(para) < 100 and (para.isupper() or para.endswith(':')):
                formatted_paragraphs.append(f"<h2 className=\"font-bold text-2xl mt-8 mb-4\">{para}</h2>")
            else:
                formatted_paragraphs.append(f"<p>{para}</p>")
    
    return '\n'.join(formatted_paragraphs)

def create_page_component(page_name, title, content):
    """Create a React page component"""
    formatted_content = format_text_for_html(content)
    
    return f'''export default function {page_name}() {{
  return (
    <div className="min-h-screen bg-[#FDFBF7] py-20 px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl mb-8">{title}</h1>
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
          {formatted_content}
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

