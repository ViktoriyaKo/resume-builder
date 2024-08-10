import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MutableRefObject } from 'react';

const handleDownloadPdf = async (
  contentRef: MutableRefObject<HTMLElement | null>
) => {
  const content = contentRef.current;

  if (content) {
    try {
      const canvas = await html2canvas(content, { scale: 2 });
      const imgData = canvas.toDataURL('image/jpeg');

      const pdf = new jsPDF({
        unit: 'in',
        format: 'letter',
        orientation: 'portrait',
      });

      pdf.addImage(imgData, 'JPEG', 0, 0, 8.5, 11);
      pdf.save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  } else {
    console.error('Content reference is null');
  }
};

export default handleDownloadPdf;
