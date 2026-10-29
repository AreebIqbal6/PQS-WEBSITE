/**
 * Centralized Accredited Standards Catalog
 * Master Single Source of Truth for Precision Quality Services (PQS)
 * 
 * Synchronizes:
 * - Home Accreditations Showcase (AccreditationsSection.tsx)
 * - Audits Directory (audits/page.tsx)
 * - Dynamic Certification Specification Pages (standards/[id]/page.tsx)
 * - Specification Modal (AuditSpecModal.tsx)
 * - Footer Certification Badges (Footer.tsx)
 */

export interface Standard {
  id: string;
  aliases?: string[];
  code: string;
  name: string;
  title: string;
  auditTitle: string;
  tagline: string;
  category: string;
  badge: string;
  badgeImg: string;
  transparentImg: string;
  heroImage: string;
  scope: string;
  scopeSummary: string;
  desc: string;
  turnaround: string;
  validity: string;
  iafSector: string;
  personDaysGuide: string;
  features: string[];
  keyCheckpoints: string[];
  stage1Docs: string[];
  stage2Audits: string[];
  deliverables: string[];
  isHeroFeatured?: boolean;
  footerName: string;
}

export const STANDARDS_CATALOG: Standard[] = [
  {
    id: "iso-17025",
    aliases: ["17025", "iso17025", "iso-17025-2017"],
    code: "ISO/IEC 17025:2017",
    name: "ISO 17025 Accredited",
    title: "General Requirements for the Competence of Testing & Calibration Laboratories",
    auditTitle: "Laboratory Competence Audits",
    tagline: "Testing & Calibration Laboratories",
    category: "Laboratory Competence & Testing",
    badge: "/certifications/card/iso_17025.png",
    badgeImg: "/certifications/card/iso_17025.png",
    transparentImg: "/certifications/transparent/iso_17025.png",
    heroImage: "/microscope.jpg",
    scope: "International benchmark demonstrating technical competence, precision measurement, validated test methods, and calibrated analytical instrumentation.",
    scopeSummary: "Ensures testing and calibration laboratories operate competently, generate valid and reproducible results, and maintain strict traceability to international metrology standards (SI units). Essential for global brand acceptance of fiber, chemical, and physical textile test reports.",
    desc: "Rigorous evaluation of testing methods, environmental controls, equipment calibration, and measurement uncertainty.",
    turnaround: "7-10 Business Days",
    validity: "3-Year Cycle (Annual Surveillance & Proficiency Testing)",
    iafSector: "ISO/IEC 17025 Testing & Calibration Scope (ILAC-MRA Aligned)",
    personDaysGuide: "Typically 2 to 4 auditor-days depending on testing scope parameters, equipment complexity, and method validation dossiers.",
    features: [
      "Physical & Chemical Testing Validation",
      "Calibration Traceability & Uncertainty Budgets",
      "Globally Accepted & Accredited Test Reports"
    ],
    keyCheckpoints: [
      "Validation and verification of standard and non-standard test methods",
      "Equipment maintenance, calibration schedules, and reference standard traceability",
      "Proficiency testing (PT) scheme participation and inter-laboratory comparisons",
      "Laboratory environmental controls (temperature, humidity, dust, contamination)"
    ],
    stage1Docs: [
      "Laboratory Quality Manual and Quality Policy (Clause 8.2)",
      "Standard Operating Procedures (SOPs) for all accredited physical & chemical test methods",
      "Equipment Calibration Master Log and Reference Standards certificates",
      "Measurement Uncertainty (MU) evaluation protocols and calculation sheets",
      "Proficiency Testing (PT) scheme participation records and Z-score evaluations",
      "Personnel qualification records, analyst authorizations, and training matrix"
    ],
    stage2Audits: [
      "Witnessing live test execution (tensile strength, color fastness, fiber analysis, etc.)",
      "Inspection of environmental monitoring logs (temperature/humidity in conditioning rooms)",
      "Sample receipt, tracking, preservation, and chain-of-custody verification",
      "Calibration status checks and labeling of analytical balances, ovens, and spectrophotometers",
      "Evaluation of measurement uncertainty records and test report calculation integrity",
      "Review of internal audits, management reviews, and non-conformance/CAPA corrective action loops"
    ],
    deliverables: [
      "Official ISO/IEC 17025 Laboratory Assessment Report & Audit Finding Summary",
      "Validated Scope of Testing & Calibration Endorsement Schedule",
      "CAPA Corrective Action Dossier & Closeout Verification",
      "Accredited Laboratory Qualification Certificate"
    ],
    isHeroFeatured: true,
    footerName: "ISO 17025 Lab Testing"
  },
  {
    id: "iso-9001",
    aliases: ["9001", "iso9001", "iso-9001-2015"],
    code: "ISO 9001:2015",
    name: "ISO 9001:2015",
    title: "Quality Management Systems (QMS)",
    auditTitle: "QMS Compliance Reviews",
    tagline: "Quality Management Systems",
    category: "Management Systems Conformity",
    badge: "/certifications/card/iso_9001_2015.png",
    badgeImg: "/certifications/card/iso_9001_2015.png",
    transparentImg: "/certifications/transparent/iso_9001_2015.png",
    heroImage: "/training.jpg",
    scope: "Standardized QMS implementation, risk-based operational auditing, CAPA defect elimination, and continuous process optimization across factories.",
    scopeSummary: "Provides a world-class framework to consistently deliver high-quality products, enhance customer satisfaction, and systematically manage operational risks across textile mills, garment manufacturing, and industrial suppliers.",
    desc: "Comprehensive assessment of quality management systems, management reviews, and continuous improvement cycles.",
    turnaround: "10-14 Business Days",
    validity: "3-Year Cycle (Annual Surveillance)",
    iafSector: "IAF Scope Category 04 (Textiles), 14, 17, 29",
    personDaysGuide: "Based on IAF MD5 complexity tables (typically 2 to 4 on-site person-days depending on facility headcount and shift patterns).",
    features: [
      "Risk-Based Process Audits",
      "Zero-Defect Quality Controls (4-Point & AQL)",
      "Supplier Verification & Traceability"
    ],
    keyCheckpoints: [
      "Organizational context, stakeholder needs, and documented scope (Clauses 4 & 5)",
      "Risk register and process interaction mapping (Clause 6)",
      "Production line inspection gates and non-conformance quarantine controls (Clause 8)",
      "Internal audit completion and executive management review records (Clause 9)"
    ],
    stage1Docs: [
      "Documented Quality Policy, Objectives, and Organizational Scope (Clause 4.3 & 5.2)",
      "Process Interaction Maps & Risk Management Register (Clause 6.1)",
      "Competency, Training, and Qualification Records for Key QC Staff (Clause 7.2)",
      "At least one full cycle of Internal Audit records and Management Review meeting minutes"
    ],
    stage2Audits: [
      "Physical verification of shop-floor SOP compliance and batch traceability records",
      "Machinery calibration status and incoming raw material QC inspection gates",
      "Interviews with management, line supervisors, and quality auditors",
      "Quarantine protocol review for non-conforming goods and CAPA verification loops"
    ],
    deliverables: [
      "Official ISO 9001:2015 Audit Technical Evaluation & Findings Report",
      "ISO 9001 Quality Management System Certificate with Verification QR",
      "3-Year Surveillance Cycle Schedule and Milestones Dossier"
    ],
    isHeroFeatured: true,
    footerName: "ISO 9001:2015 Quality Management"
  },
  {
    id: "zdhc",
    aliases: ["zdhc-mrsl", "zdhc-gateway"],
    code: "ZDHC Gateway & MRSL",
    name: "ZDHC Gateway & MRSL",
    title: "Zero Discharge of Hazardous Chemicals & Manufacturing Restricted Substances",
    auditTitle: "Chemical & Wastewater Audits",
    tagline: "Roadmap to Zero Hazardous Chemicals",
    category: "Chemical & Environmental Safety",
    badge: "/certifications/card/zdhc.png",
    badgeImg: "/certifications/card/zdhc.png",
    transparentImg: "/certifications/transparent/zdhc.png",
    heroImage: "/loom.jpg",
    scope: "Elimination of hazardous substances in textile processing, chemical inventory compliance, InCheck verification, and wastewater discharge testing.",
    scopeSummary: "Aligns wet-processing units, dyeing, printing, and finishing mills with the global ZDHC Roadmap to Zero. Assesses chemical formulations against the ZDHC MRSL (Levels 1, 2, and 3) and ensures wastewater discharges comply with ZDHC Wastewater Guidelines.",
    desc: "On-site chemical storage verification, MRSL conformance, and wastewater discharge protocol sampling.",
    turnaround: "5-7 Business Days (plus laboratory analytical turnaround)",
    validity: "Annual Verification & Periodic Gateway Uploads",
    iafSector: "Textile & Leather Wet Processing, Chemical Formulation & Effluent Control",
    personDaysGuide: "1.5 to 3 person-days depending on chemical storage footprint, ETP capacity, and chemical recipe complexity.",
    features: [
      "ZDHC MRSL Level 1, 2 & 3 Conformance Auditing",
      "InCheck Performance Invoicing & Chemical Verification",
      "Wastewater & Sludge Sampling Protocol Verification"
    ],
    keyCheckpoints: [
      "Chemical inventory list (CIL) accuracy and Safety Data Sheet (SDS) verification",
      "Secondary containment, chemical compatibility matrix, and spill kit readiness",
      "ZDHC Gateway chemical upload verification and InCheck rating evaluation",
      "Effluent Treatment Plant (ETP) process parameters, sludge handling, and discharge reports"
    ],
    stage1Docs: [
      "Complete Chemical Inventory List (CIL) including trade names, suppliers, and CAS numbers",
      "Safety Data Sheets (SDS - 16 sections compliant with GHS) for all on-site chemicals",
      "Current ZDHC Gateway profile and latest Performance InCheck report",
      "Effluent Treatment Plant (ETP) schematics, flow rates, and discharge permits"
    ],
    stage2Audits: [
      "On-site walkthrough of chemical stores, mixing kitchens, and automated dosing lines",
      "Inspection of secondary containment, eye wash stations, and hazardous waste storage",
      "Traceability cross-check from batch dye recipes to chemical inventory ledger",
      "Collection of wastewater effluent and sludge samples in accordance with ZDHC sampling guidelines",
      "Operator chemical handling safety review and PPE adherence verification"
    ],
    deliverables: [
      "Official ZDHC On-Site Chemical Management Audit Assessment",
      "ZDHC Gateway Conformance & Chemical InCheck Improvement Roadmap",
      "Independent Laboratory Wastewater & Sludge Analytical Test Report (ClearStream)",
      "Corrective Action Plan (CAP) for banned/restricted substance elimination"
    ],
    isHeroFeatured: true,
    footerName: "ZDHC Chemical Management"
  },
  {
    id: "gots",
    aliases: ["gots-certified", "organic-cotton"],
    code: "GOTS Version 7.0",
    name: "GOTS Certified",
    title: "Global Organic Textile Standard",
    auditTitle: "Organic Fiber Chain of Custody",
    tagline: "Global Organic Textile Standard",
    category: "Organic & Sustainable Textiles",
    badge: "/certifications/card/gots.png",
    badgeImg: "/certifications/card/gots.png",
    transparentImg: "/certifications/transparent/gots.png",
    heroImage: "/threads.jpg",
    scope: "World-leading textile processing standard for organic fibers, integrating environmental criteria, non-toxic inputs, and strict social criteria across the entire supply chain.",
    scopeSummary: "Verifies that textiles are manufactured from certified organic fibers, ensuring that all processing, spinning, weaving, wet processing, and manufacturing steps adhere to strict environmental criteria (banned chemicals, zero heavy metals) and ILO social standards.",
    desc: "Traceability of organic and recycled fiber inputs from raw material receipt through shipping.",
    turnaround: "10-15 Business Days",
    validity: "1-Year Scope Certificate (Annual Renewal & Transaction Certificates)",
    iafSector: "Textile Chain of Custody (GOTS Licensing & Certification)",
    personDaysGuide: "2 to 3 person-days per processing site based on throughput volume and processing complexity.",
    features: [
      "Certified Organic Fiber Verification (>70% or >95%)",
      "Non-Toxic Chemical & Dye Approval Checks",
      "Transaction Certificate (TC) Mass Balance Auditing"
    ],
    keyCheckpoints: [
      "Raw material certified organic fiber verification and upstream Scope Certificates (SC)",
      "Mass-balance calculation, segregation protocols, and contamination prevention",
      "Approved chemical inputs list and zero GMO/prohibited auxiliaries check",
      "Social compliance verification (ILO conventions, fair living wages, no forced/child labor)"
    ],
    stage1Docs: [
      "Upstream GOTS Scope Certificates (SC) from yarn/fiber vendors",
      "Mass Balance Reconciliation sheets (Fiber In vs. Finished Good Out)",
      "List of all colorants, sizing agents, and chemical auxiliaries used in GOTS lines with approval letters",
      "Environmental management plan (energy, water, wastewater monitoring)",
      "Social management policy, worker age verification records, and payroll data"
    ],
    stage2Audits: [
      "Inspection of raw material warehouse: physical identification and segregation of organic lots",
      "Tracing batch cards on spinning frames, looms, knitting machines, and dye vessels",
      "Cleaning verification records for machinery before running GOTS-certified lots",
      "Effluent treatment verification and residual chemical testing verification",
      "Confidential worker interviews to verify fair labor, working hours, and social conditions"
    ],
    deliverables: [
      "Comprehensive GOTS Compliance Audit Assessment Report",
      "Mass Balance Reconciliation & Chain of Custody Verification Dossier",
      "GOTS Scope Certificate Readiness & Transaction Certificate (TC) Protocol Verification",
      "CAPA Matrix for Social & Environmental Standard Adherence"
    ],
    isHeroFeatured: true,
    footerName: "GOTS Organic Textiles"
  },
  {
    id: "grs",
    aliases: ["grs-standard", "global-recycled-standard", "textile-exchange-grs"],
    code: "GRS Version 4.0",
    name: "GRS Standard",
    title: "Global Recycled Standard",
    auditTitle: "Recycled Content Chain of Custody",
    tagline: "Global Recycled Standard",
    category: "Recycling & Circular Economy",
    badge: "/certifications/card/grs.png",
    badgeImg: "/certifications/card/grs.png",
    transparentImg: "/certifications/transparent/grs.png",
    heroImage: "/threads.jpg",
    scope: "Verification of recycled material content, chain of custody, chemical restrictions, environmental management, and responsible manufacturing practices.",
    scopeSummary: "Applies to any product containing at least 20% recycled material. Establishes requirements for third-party certification of recycled content, chain of custody (Content Claim Standard), social and environmental practices, and chemical restrictions across the supply chain.",
    desc: "Verification of recycled content, chain of custody, and environmental management across spinning and processing.",
    turnaround: "10-14 Business Days",
    validity: "1-Year Scope Certificate (Annual Renewal & Transaction Certificates)",
    iafSector: "Textile Exchange Standards & Recycled Material Supply Chains",
    personDaysGuide: "2 to 3 person-days based on processing stages (spinning, knitting, weaving, wet processing).",
    features: [
      "Recycled Input Percentage & Mass Balance Tracking",
      "Textile Exchange Content Claim Standard (CCS) Aligned",
      "Supply Chain Transaction Certificate (TC) Validation"
    ],
    keyCheckpoints: [
      "Pre-consumer vs. post-consumer recycled claim verification",
      "Chain of custody documentation (CCS reconciliation and TC verification)",
      "Chemical management system conformance and restricted substance compliance",
      "Wastewater treatment, energy efficiency, and chemical storage checks"
    ],
    stage1Docs: [
      "Upstream GRS Scope Certificates and Transaction Certificates for all recycled feedstock",
      "Detailed mass-balance calculations accounting for processing loss/waste percentages",
      "Declared chemical inventory used on GRS lines with ZDHC MRSL / REACH compliance proof",
      "Environmental policy, waste minimization logs, and water consumption ledgers",
      "Social compliance documentation (working hours, minimum wages, health & safety records)"
    ],
    stage2Audits: [
      "Physical verification of incoming recycled polyester/cotton bale tags and storage areas",
      "Tracing recycled material throughput on blowroom, carding, ring spinning, or weaving floors",
      "Evaluation of segregation protocols between virgin and recycled production lines",
      "Inspection of chemical storage, labeling, and personal protective equipment (PPE)",
      "Review of waste and scrap tracking (re-granulation or re-shredding containment)"
    ],
    deliverables: [
      "Official GRS Chain of Custody Audit Findings Report",
      "Mass Balance Verification & Scrap Loss Reconciliation Certificate",
      "Scope Certificate Readiness Audit Dossier",
      "Transaction Certificate (TC) Application Filing Pack"
    ],
    isHeroFeatured: true,
    footerName: "GRS Recycled Standard"
  },
  {
    id: "ppwr",
    aliases: ["eu-ppwr", "packaging-regulation"],
    code: "EU PPWR Regulation",
    name: "EU PPWR Compliance",
    title: "European Packaging and Packaging Waste Regulation (Regulation EU 2025/40)",
    auditTitle: "Circularity & Packaging Audits",
    tagline: "Packaging & Packaging Waste Regulation",
    category: "Circularity & European Regulations",
    badge: "/certifications/card/ppwr.png",
    badgeImg: "/certifications/card/ppwr.png",
    transparentImg: "/certifications/transparent/ppwr.png",
    heroImage: "/audits_hero.jpg",
    scope: "European Union circularity regulations enforcing packaging volume reduction, recyclability design grades (A, B, C), and mandatory minimum post-consumer recycled plastic quotas.",
    scopeSummary: "Prepares packaging converters, consumer brands, and exporters for compliance with the mandatory EU PPWR. Audits packaging design for recyclability, substance restrictions (PFAS bans, heavy metal limits < 100 ppm), empty space ratio limits, and mandatory recycled content validation.",
    desc: "Assessment of packaging recyclability, mass-balance accounting, and conformity under EU circularity directives.",
    turnaround: "7-10 Business Days",
    validity: "Annual Technical Assessment & Technical Dossier Updates",
    iafSector: "EU Environmental & Packaging Directives (Conformity Assessment)",
    personDaysGuide: "1.5 to 2.5 person-days per packaging manufacturing unit or technical converter facility.",
    features: [
      "Design for Recyclability (DfR) Performance Grading",
      "Mandatory Post-Consumer Recycled (PCR) Content Verification",
      "Hazardous Substance & PFAS Chemical Restrictions Verification"
    ],
    keyCheckpoints: [
      "Packaging design assessment against recyclability performance grades (Grades A, B, C)",
      "Verification of post-consumer recycled plastic percentages (PCR) via chain-of-custody audits",
      "Laboratory screening for per- and polyfluoroalkyl substances (PFAS) and heavy metals (Pb, Cd, Hg, Cr VI)",
      "Packaging minimization, empty space ratio (<50%), and reusable packaging system criteria"
    ],
    stage1Docs: [
      "Packaging Bill of Materials (BOM) detailing polymer types, barrier layers, and adhesives",
      "Supplier declarations and EN 15343 certificates for post-consumer recycled plastic inputs",
      "Laboratory test certificates demonstrating compliance with heavy metal limits (< 100 ppm) and PFAS ban",
      "Technical packaging design drawings, dimensions, and empty space calculation dossiers"
    ],
    stage2Audits: [
      "Verification of resin storage, extrusion, blow-molding, and printing lines",
      "Tracing recycled resin batches into finished packaging articles via batch tracking software",
      "Inspection of inks, labels, and closures for compatibility with European recycling streams",
      "Quality control sampling of packaging units for dimensional and empty space ratio verification",
      "Review of Extended Producer Responsibility (EPR) reporting protocols"
    ],
    deliverables: [
      "Official EU PPWR Technical Conformity Dossier & Assessment Report",
      "Design for Recyclability (DfR) Grade Evaluation Matrix (Grade A/B/C)",
      "Laboratory Heavy Metals & PFAS Compliance Certificate of Analysis",
      "Executive Summary for European Buyer Compliance Submission"
    ],
    isHeroFeatured: true,
    footerName: "EU PPWR Circularity"
  },
  {
    id: "en-15343",
    aliases: ["en15343", "recycled-plastics"],
    code: "EN 15343:2007",
    name: "EN 15343 Recycled Plastics",
    title: "Plastics Recycling Traceability and Assessment of Conformity and Recycled Content",
    auditTitle: "Recycled Plastics Traceability Audits",
    tagline: "Traceability & Recycled Content",
    category: "Recycled Plastics & Polymer Traceability",
    badge: "/certifications/card/en_15343.png",
    badgeImg: "/certifications/card/en_15343.png",
    transparentImg: "/certifications/transparent/en_15343.png",
    heroImage: "/microscope.jpg",
    scope: "European standard specifying the procedures needed for traceability of recycled plastics and the assessment of conformity and recycled content in converted products.",
    scopeSummary: "Provides the definitive European audited methodology to prove the exact percentage of post-consumer recycled (PCR) plastic in packaging and industrial goods. Satisfies UK Plastic Packaging Tax (PPT), EU plastic levies, and brand sustainability pledges.",
    desc: "Evaluation of post-consumer plastic traceability, mass-balance accounting, and recycled content certification.",
    turnaround: "7-10 Business Days",
    validity: "Annual Certification with Batch-Level Surveillance",
    iafSector: "European Plastics Recycling & Polymer Characterization (CEN Aligned)",
    personDaysGuide: "1.5 to 2.5 person-days based on processing complexity and polymer input diversity.",
    features: [
      "Controlled Batch Traceability from Origin to Finished Product",
      "Independent Mass Balance & Yield Loss Calculations",
      "Verification for UK/EU Plastic Packaging Tax Exemption"
    ],
    keyCheckpoints: [
      "Origin verification of plastic waste (post-consumer vs. post-industrial / pre-consumer)",
      "Batch-by-batch tracking from washing, regranulation, compounding to final conversion",
      "Physical and mechanical testing of recycled polymers (melt flow index, density, tensile)",
      "Contaminant screening and mass-balance yield calculations"
    ],
    stage1Docs: [
      "Incoming plastic waste consignment documentation, supplier permits, and origin declarations",
      "Polymer characterization test data (MFI, density, tensile strength, moisture content)",
      "Process flow charts, formulation recipes, and mass-balance reconciliation ledgers",
      "Quality control procedures for sorting, washing, extrusion, and filtration"
    ],
    stage2Audits: [
      "On-site audit of waste plastic intake, sorting sheds, and regranulation lines",
      "Physical sampling of recycled pellets and converted plastic articles for lab characterization",
      "Reconciliation of mass-balance records against financial invoices and shipping manifests",
      "Inspection of extruder screen changers, degassing systems, and melt filtration efficiency",
      "Verification of batch coding, labeling, and lot retention procedures"
    ],
    deliverables: [
      "Official EN 15343 Recycled Content & Traceability Audit Report",
      "Audited Recycled Plastic Content Statement (Percentage PCR Certification)",
      "Mass Balance Verification Certificate for Tax & Buyer Compliance",
      "Audit Action Plan for Polymer Traceability Optimization"
    ],
    isHeroFeatured: true,
    footerName: "EN 15343 Recycled Plastics"
  },
  {
    id: "ce-marking",
    aliases: ["ce", "ce-mark", "european-conformity"],
    code: "CE Marking",
    name: "CE Marking",
    title: "European Conformity & Technical File Compliance",
    auditTitle: "European Conformity Reviews",
    tagline: "European Conformity",
    category: "European Union Directives & Safety",
    badge: "/certifications/card/ce_marking.png",
    badgeImg: "/certifications/card/ce_marking.png",
    transparentImg: "/certifications/transparent/ce_marking.png",
    heroImage: "/inspector.jpg",
    scope: "Validation that industrial goods, PPE, workwear, and technical textiles comply with European health, safety, and environmental protection directives.",
    scopeSummary: "Enables manufacturers and exporters to affix the CE Mark to products destined for the European Economic Area (EEA). Covers Technical Construction File (TCF) preparation, Essential Health and Safety Requirements (EHSR) review, and EU Declaration of Conformity issuance.",
    desc: "Technical file scrutiny, risk assessment documentation, and safety conformity declarations.",
    turnaround: "10-14 Business Days",
    validity: "5-Year Technical File Validity (Subject to Directive Updates)",
    iafSector: "European Union Harmonised Standards & Notified Body Protocols",
    personDaysGuide: "2 to 4 person-days based on product classification (Module A, B, C, or D) and testing complexity.",
    features: [
      "Technical Construction File (TCF) Compilation & Review",
      "Essential Health & Safety Requirements (EHSR) Risk Assessment",
      "EU Declaration of Conformity (DoC) Verification"
    ],
    keyCheckpoints: [
      "Applicable European Directives identification (PPE Regulation (EU) 2016/425, Machinery, etc.)",
      "Harmonised standards testing verification (EN ISO 13688 for protective clothing, EN 388, etc.)",
      "Comprehensive Risk Assessment and Essential Health and Safety Requirements matrix",
      "Product labeling, user instructions (IFU), and CE mark affixation geometry"
    ],
    stage1Docs: [
      "General product description, engineering drawings, and bill of materials (BOM)",
      "List of harmonised European standards applied in full or in part",
      "Accredited third-party test reports covering physical, chemical, and protective safety parameters",
      "Draft EU Declaration of Conformity (DoC) and Instructions for Use (IFU) in target European languages"
    ],
    stage2Audits: [
      "Factory production control (FPC) audit ensuring ongoing production matches tested prototypes",
      "Incoming raw material verification and lot quality testing records",
      "Inspection of packaging, safety warnings, and CE marking dimensions on labels",
      "Review of customer complaint handling and product recall procedures"
    ],
    deliverables: [
      "Comprehensive CE Technical Construction File (TCF) Evaluation Report",
      "Essential Health & Safety Requirements (EHSR) Audit Dossier",
      "Validated EU Declaration of Conformity (DoC) Framework Pack",
      "Factory Production Control (FPC) Verification Certificate"
    ],
    isHeroFeatured: true,
    footerName: "CE Marking European Conformity"
  }
];

/**
 * Helper Accessors
 */
export function getAllStandards(): Standard[] {
  return STANDARDS_CATALOG;
}

export function getStandardById(id: string): Standard | undefined {
  const normalized = id.toLowerCase().trim();
  return STANDARDS_CATALOG.find(
    (s) => s.id === normalized || (s.aliases && s.aliases.includes(normalized))
  );
}

export function getFeaturedHeroStandards(): Standard[] {
  return STANDARDS_CATALOG.filter((s) => s.isHeroFeatured);
}

export function getFooterCertLogos(): { name: string; src: string; id: string }[] {
  return STANDARDS_CATALOG.map((s) => ({
    id: s.id,
    name: s.name,
    src: s.badgeImg
  }));
}

export function getAuditStandards(): { id: string; name: string; badge: string; title: string; desc: string }[] {
  return STANDARDS_CATALOG.map((s) => ({
    id: s.id,
    name: s.name,
    badge: s.badgeImg,
    title: s.auditTitle,
    desc: s.desc
  }));
}

export function getAccreditationStandards(): { id: string; name: string; badgeImg: string; tagline: string; scope: string; features: string[] }[] {
  return STANDARDS_CATALOG.map((s) => ({
    id: s.id,
    name: s.name,
    badgeImg: s.badgeImg,
    tagline: s.tagline,
    scope: s.scope,
    features: s.features
  }));
}

export function getAuditSpecsCatalog(): Record<string, Standard> {
  const map: Record<string, Standard> = {};
  for (const s of STANDARDS_CATALOG) {
    map[s.id] = s;
    if (s.aliases) {
      for (const alias of s.aliases) {
        map[alias] = s;
      }
    }
  }
  return map;
}
