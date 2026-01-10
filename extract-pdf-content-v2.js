const fs = require('fs');
const path = require('path');

// Try using pdfjs-dist
async function extractWithPdfJs() {
  try {
    const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');
    
    const pdfFiles = [
      'Minta Club Terms And Conditions.pdf',
      'Minta Club Refund Policy.pdf',
      'Minta Club Privacy Policy.pdf',
      'Minta Club FAQ.pdf',
      'Minta Club Contact Us.pdf',
      'Corporate Social Responsibility Policy.pdf'
    ];
    
    const results = {};
    
    for (const pdfFile of pdfFiles) {
      const pdfPath = path.join(__dirname, 'pdf', pdfFile);
      if (!fs.existsSync(pdfPath)) {
        console.log(`File not found: ${pdfFile}`);
        continue;
      }
      
      try {
        const dataBuffer = fs.readFileSync(pdfPath);
        const loadingTask = pdfjsLib.getDocument({ data: dataBuffer });
        const pdf = await loadingTask.promise;
        let text = '';
        
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map(item => item.str).join(' ');
          text += pageText + '\n\n';
        }
        
        results[pdfFile] = text;
        console.log(`✓ Extracted content from ${pdfFile}`);
      } catch (error) {
        console.error(`✗ Error extracting ${pdfFile}:`, error.message);
        results[pdfFile] = '';
      }
    }
    
    fs.writeFileSync('pdf-content.json', JSON.stringify(results, null, 2));
    console.log('\nAll PDF content extracted to pdf-content.json');
    return results;
  } catch (error) {
    console.error('Error with pdfjs-dist:', error.message);
    return null;
  }
}

extractWithPdfJs();

