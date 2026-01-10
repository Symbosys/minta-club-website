const fs = require('fs');
const path = require('path');

async function extractPDFContent() {
  try {
    const pdfParseLib = require('pdf-parse');
    // pdf-parse exports the function directly
    const pdfParse = typeof pdfParseLib === 'function' ? pdfParseLib : pdfParseLib.default || pdfParseLib.PDFParse;
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
      const dataBuffer = fs.readFileSync(pdfPath);
      
      try {
        const data = await pdfParse(dataBuffer);
        results[pdfFile] = data.text;
        console.log(`Extracted content from ${pdfFile}`);
      } catch (error) {
        console.error(`Error extracting ${pdfFile}:`, error.message);
        results[pdfFile] = '';
      }
    }
    
    fs.writeFileSync('pdf-content.json', JSON.stringify(results, null, 2));
    console.log('All PDF content extracted to pdf-content.json');
  } catch (error) {
    console.error('Error loading pdf-parse:', error.message);
  }
}

extractPDFContent();

