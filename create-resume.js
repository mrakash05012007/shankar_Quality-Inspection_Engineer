import fs from 'fs';
import path from 'path';

function createPdf() {
  const content = [
    "BT",
    "/F1 20 Tf",
    "50 780 Td",
    "(SHANKAR J) Tj",
    "/F1 12 Tf",
    "0 -22 Td",
    "(Oil & Gas Quality Engineer | Mechanical Engineer | Third-Party Inspection) Tj",
    "/F2 10 Tf",
    "0 -16 Td",
    "(Location: Thiruvallur, Tamil Nadu  |  Email: Shankarshankar09421@gmail.com) Tj",
    "0 -20 Td",
    "ET",

    // Horizontal line
    "q",
    "0.086 0.306 0.471 RG", // #164E78
    "2 w",
    "50 710 m 550 710 l S",
    "Q",

    "BT",
    "/F1 12 Tf",
    "50 690 Td",
    "(PROFESSIONAL SUMMARY) Tj",
    "/F2 9.5 Tf",
    "0 -16 Td",
    "(Mechanical Engineer with 2 years of experience in Quality Inspection and Third-Party Inspection (TPI)) Tj",
    "0 -13 Td",
    "(for industrial and Oil & Gas projects. Experienced in material, welding, dimensional and painting inspections.) Tj",
    "0 -13 Td",
    "(Skilled in reviewing engineering drawings, QAP/ITP and quality documents to ensure compliance with) Tj",
    "0 -13 Td",
    "(project requirements and quality standards.) Tj",

    "/F1 12 Tf",
    "0 -24 Td",
    "(WORK EXPERIENCE) Tj",

    "/F1 10.5 Tf",
    "0 -18 Td",
    "(IRclass Systems and Solution Limited  -  Engineer) Tj",
    "/F2 9 Tf",
    "0 -13 Td",
    "(Duration: October 2025 - Present) Tj",
    "0 -13 Td",
    "(- Independent third-party inspections at vendor premises) Tj",
    "0 -12 Td",
    "(- Incoming, in-process, stage-wise, final and pre-dispatch inspections) Tj",
    "0 -12 Td",
    "(- Reviewing drawings, specifications, QAPs and ITPs; Monitoring NDT activities) Tj",
    "0 -12 Td",
    "(- Welding procedure and material compliance verification; Material traceability & heat number verification) Tj",
    "0 -12 Td",
    "(- Dimensional inspection; Hydrostatic, pneumatic and functional testing witness) Tj",
    "0 -12 Td",
    "(- NCR identification and corrective action follow-up) Tj",
    "0 -12 Td",
    "(- Inspection reports, release notes, punch lists and final documentation) Tj",
    "0 -12 Td",
    "(- Vendor assessments, audits, manufacturing progress monitoring and expediting reports) Tj",

    "/F1 10.5 Tf",
    "0 -18 Td",
    "(BGR Energy Systems Ltd. (Air Fin Cooler Division)  -  Quality Engineer) Tj",
    "/F2 9 Tf",
    "0 -13 Td",
    "(Duration: September 2021 - September 2022) Tj",
    "0 -13 Td",
    "(- Customer quality plan review and inspection as per applicable codes and customer requirements) Tj",
    "0 -12 Td",
    "(- Dimensional and weld quality verification; Hardness and PMI testing; Fabrication stage inspection) Tj",
    "0 -12 Td",
    "(- NDT result evaluation and RT film interpretation; NCR issuance and final inspection) Tj",
    "0 -12 Td",
    "(- Pneumatic and hydrostatic testing witness; Material knowledge: CS, SS, DSS and Incoloy) Tj",
    "0 -12 Td",
    "(- Quality methodologies: FMEA, Six Sigma DMAIC, 7 QC Tools, PDCA, and CAPA) Tj",
    "0 -12 Td",
    "(- Quality documentation and data dossier preparation; Coordination with clients and TPI agencies) Tj",

    "/F1 12 Tf",
    "0 -24 Td",
    "(EDUCATION) Tj",
    "/F1 10 Tf",
    "0 -16 Td",
    "(B.E. - Mechanical Engineering  |  CGPA: 7.62) Tj",
    "/F2 9 Tf",
    "0 -12 Td",
    "(College of Engineering Guindy, Anna University, Chennai (2022 - 2025)) Tj",
    "/F1 10 Tf",
    "0 -15 Td",
    "(Diploma - Mechanical Engineering  |  Percentage: 97%) Tj",
    "/F2 9 Tf",
    "0 -12 Td",
    "(Sri Durga Devi Polytechnic College, Kavaraipettai (2018 - 2021)) Tj",
    "/F1 10 Tf",
    "0 -15 Td",
    "(SSLC  |  Percentage: 84.2%) Tj",
    "/F2 9 Tf",
    "0 -12 Td",
    "(St. Gabriel's Higher Secondary School, Chennai (2018)) Tj",

    "/F1 12 Tf",
    "0 -22 Td",
    "(CERTIFICATIONS & RECOGNITION) Tj",
    "/F1 9.5 Tf",
    "0 -15 Td",
    "(ASNT LEVEL II Qualification: VT | RT | UT | LPT | MPT) Tj",
    "/F2 9 Tf",
    "0 -13 Td",
    "(Certification of Appreciation - BGR Energy Systems Ltd. (IOCL Baruni Project, April 2022)) Tj",
    "0 -12 Td",
    "(For ensuring quality and dispatch operations of tube bundle assembly) Tj",
    "ET"
  ].join("\n");

  const streamBytes = Buffer.from(content, 'utf-8');

  let objects = [];
  function addObject(str) {
    objects.push(str);
    return objects.length;
  }

  // 1: Catalog
  addObject("<< /Type /Catalog /Pages 2 0 R >>");
  // 2: Pages
  addObject("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  // 3: Page
  addObject(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>`);
  // 4: Stream
  addObject(`<< /Length ${streamBytes.length} >>\nstream\n${content}\nendstream`);
  // 5: Font 1 Bold
  addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  // 6: Font 2 Regular
  addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

  let out = "%PDF-1.4\n";
  let offsets = [];
  offsets.push(0);

  for (let i = 0; i < objects.length; i++) {
    offsets.push(Buffer.byteLength(out, 'utf-8'));
    out += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  }

  const xrefOffset = Buffer.byteLength(out, 'utf-8');
  out += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) {
    const o = offsets[i].toString().padStart(10, '0');
    out += `${o} 00000 n \n`;
  }

  out += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const destPath = path.resolve('public', 'resume', 'shankar-j-resume.pdf');
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, out, 'utf-8');
  console.log('Successfully generated resume at:', destPath);
}

createPdf();

