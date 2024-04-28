import html2canvas from 'html2canvas'
import jsPDF from 'jspdf';

export default async function ExportPDF() {
    const pageContent = document.getElementById('paperPDF')
    const doc = new jsPDF({
        orientation: 'p',
        unit: 'px',
        format: 'A4',
        hotfixes: ['px_scaling'],
    });

    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();

    html2canvas(pageContent, {
        width: width,
        height: height
    }).then((canvas) => {
        const img = canvas.toDataURL("image/png");
        doc.addImage(img, "PNG", 0, 0, width, height);
        doc.save("curriculo.pdf");
    })

}