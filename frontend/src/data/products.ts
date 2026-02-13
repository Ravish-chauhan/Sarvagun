
export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export interface Product {
    id: string;
    name: string;
    category: string;
    subcategory?: string;
    image: string;
    price?: string;
    description: string;
    isEssential?: boolean;
}

export interface Category {
    id: string;
    name: string;
    slug: string; // Added slug
    image: string;
    description: string; // Added description
    productCount: number; // Added productCount
}

export const categories: Category[] = [
    {
        id: "medical-consumables",
        name: "Medical Consumables",
        slug: "medical-consumables",
        image: "/assets/Medical%20Consumable/face%20masks.jpg",
        description: "Essential daily supplies including gloves, masks, and syringes for consistent patient care.",
        productCount: 39
    },
    {
        id: "surgical-supplies",
        name: "Surgical Supplies",
        slug: "surgical-supplies",
        image: "/assets/category-surgery.png",
        description: "Precision instruments and sterile equipment for operating rooms and surgical procedures.",
        productCount: 47
    },
    {
        id: "medical-injectable",
        name: "Medical Injectable",
        slug: "medical-injectable",
        image: "/assets/injectable.jpg",
        description: "Sterile injectables and pharmaceutical supplies for safe medication administration.",
        productCount: 50
    },
    {
        id: "hospital-infrastructure",
        name: "Hospital Infrastructure",
        slug: "hospital-infrastructure",
        image: "/assets/category-disposables.png",
        description: "Durable furniture and structural equipment designed for modern healthcare facilities.",
        productCount: 36
    },
    {
        id: "orthopedic-supplies",
        name: "Orthopedic Supplies",
        slug: "orthopedic-supplies",
        image: "/assets/category-orthopedic.png",
        description: "Specialized implants, surgical instruments, and equipment for orthopedic care.",
        productCount: 101
    },
    {
        id: "critical-care-supply",
        name: "Critical Care Supply",
        slug: "critical-care-supply",
        image: "/assets/Hospital%20Infrastructure/defibrillator.jpg",
        description: "Essential life-saving equipment, ventilators, monitors, and emergency medications for ICU and critical care units.",
        productCount: 33
    },
    {
        id: "physio-item",
        name: "All Type Physio Item",
        slug: "physio-item",
        image: "/assets/Hospital%20Infrastructure/ultrasound-machine.jpg",
        description: "Comprehensive physiotherapy equipment including traction systems, mobility aids, and therapeutic devices.",
        productCount: 9
    },
    {
        id: "obs-gynecologist-item",
        name: "Obs Gynecologist Item",
        slug: "obs-gynecologist-item",
        image: "/assets/surgical%20items/Gynecology%20instruments.webp",
        description: "Specialized instruments, surgical supplies, and consumables for obstetrics and gynecology procedures.",
        productCount: 16
    },
    {
        id: "opthal-item",
        name: "Opthal Item",
        slug: "opthal-item",
        image: "/assets/surgical%20items/Surgical%20microscope.jpg",
        description: "Precision ophthalmic instruments and supplies for eye surgery and examination procedures.",
        productCount: 7
    },
    {
        id: "cardiology-item",
        name: "Cardiology Item",
        slug: "cardiology-item",
        image: "/assets/Hospital%20Infrastructure/ecg%20machine%202.webp",
        description: "Cardiac monitoring equipment, diagnostic devices, and essential cardiovascular medications.",
        productCount: 17
    },
    {
        id: "neuro-item",
        name: "Neuro Item",
        slug: "neuro-item",
        image: "/assets/surgical%20items/Neurosurgery%20instruments.jpg",
        description: "Specialized neurosurgical instruments, anesthetics, and precision tools for neurological procedures.",
        productCount: 13
    },
    {
        id: "pediatric",
        name: "Pediatric",
        slug: "pediatric",
        image: "/assets/Hospital%20Infrastructure/nebulizer.webp",
        description: "Essential pediatric and neonatal care supplies including feeding tubes, respiratory aids, and monitoring devices.",
        productCount: 10
    },
    {
        id: "urology",
        name: "Urology",
        slug: "urology",
        image: "/assets/surgical%20items/Urology%20instruments.webp",
        description: "Specialized urological instruments, catheters, and consumables for urological procedures and patient care.",
        productCount: 9
    },
    {
        id: "gastroenterology",
        name: "Gastroenterology",
        slug: "gastroenterology",
        image: "/assets/surgical%20items/Endoscopy%20system.jpg",
        description: "Endoscopic systems, GI medications, and consumables for gastrointestinal diagnosis and treatment.",
        productCount: 13
    },
    {
        id: "medical-chemicals",
        name: "Essential Hospital Chemicals",
        slug: "medical-chemicals",
        image: "",
        description: "Essential laboratory chemicals, staining reagents, sterilization solutions, and diagnostic chemicals for hospitals and pathology labs.",
        productCount: 80
    },
];

export const products: Product[] = [
    // Medical Consumables (From Assets)
    {
        id: "mc-001",
        name: "IV Cannula",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/IV%20Cannula.webp",
        description: "Sterile IV Cannula for intravenous therapy.",
        isEssential: true
    },
    {
        id: "mc-002",
        name: "IV Infusion Set",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/IV-infusion%20set.webp",
        description: "Standard IV infusion set with flow regulator.",
        isEssential: true
    },
    {
        id: "mc-003",
        name: "Adhesive Plasters",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/adhesive-plasters.jpg",
        description: "Hypoallergenic adhesive plasters for wound protection."
    },
    {
        id: "mc-004",
        name: "Bandage Roll",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/bandage%20roll.jpg",
        description: "Cotton bandage roll for dressing retention.",
        isEssential: true
    },
    {
        id: "mc-005",
        name: "Bio Medical Waste Bag",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/bio%20medical%20waste%20bag%202.jpg",
        description: "Color-coded bags for safe disposal of medical waste."
    },
    {
        id: "mc-006",
        name: "Blood Collection Tube",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/blood%20collection%20tube.jpg",
        description: "Vacuum blood collection tubes for laboratory testing."
    },
    {
        id: "mc-007",
        name: "Blue Latex Examination Gloves",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/blue%20latex%20glove.webp",
        description: "Powder-free blue latex gloves for examination.",
        isEssential: true
    },
    {
        id: "mc-008",
        name: "Absorbent Cotton Roll",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/cotton%20roll.jpg",
        description: "Highly absorbent sterile cotton roll."
    },
    {
        id: "mc-009",
        name: "Disposable Surgical Gown",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/disposable-surgical-gown-.jpg",
        description: "Fluid-resistant disposable surgical gown."
    },
    {
        id: "mc-010",
        name: "Disposable Syringes",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/disposable-syringes.png",
        description: "Single-use sterile syringes with needle.",
        isEssential: true
    },
    {
        id: "mc-011",
        name: "Standard Disposable Gown",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/disposible%20gown.jpg",
        description: "Protective gown for general medical use."
    },
    {
        id: "mc-012",
        name: "ECG Electrodes",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/ecg%20electrodes.jpg",
        description: "Disposable ECG electrodes for cardiac monitoring."
    },
    {
        id: "mc-013",
        name: "3-Ply Face Masks",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/face%20masks.jpg",
        description: "3-ply protective face masks with nose clip.",
        isEssential: true
    },
    {
        id: "mc-014",
        name: "Feeding Tube",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/feeding%20tube.jpg",
        description: "Nasogastric feeding tube for enteral nutrition."
    },
    {
        id: "mc-015",
        name: "Foley Catheter",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/foley%20catheter.webp",
        description: "Sterile silicone coated foley catheter."
    },
    {
        id: "mc-016",
        name: "Medical Forceps",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/forceps.jpg",
        description: "Stainless steel forceps for medical procedures."
    },
    {
        id: "mc-017",
        name: "Gauze Swabs",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/gauze-swabs.webp",
        description: "Sterile gauze swabs for wound cleaning.",
        isEssential: true
    },
    {
        id: "mc-018",
        name: "Glucometer Test Strips",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/glucometer%20strips.webp",
        description: "Test strips for blood glucose monitoring."
    },
    {
        id: "mc-019",
        name: "Hypodermic Needle",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/hypodermic%20needle.webp",
        description: "Sharp hypodermic needles for injections."
    },
    {
        id: "mc-020",
        name: "Blood Lancets",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/lancets.jpg",
        description: "Sterile lancets for blood sampling."
    },
    {
        id: "mc-021",
        name: "N95 Respirator Mask",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/n95%20mask.jpg",
        description: "High-filtration N95 mask for respiratory protection.",
        isEssential: true
    },
    {
        id: "mc-022",
        name: "Nasal Cannula",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/nasal%20cannula.jpg",
        description: "Soft nasal cannula for oxygen delivery."
    },
    {
        id: "mc-023",
        name: "Nebulizer Kit",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/nebulizer%20kit.jpg",
        description: "Complete mask and tubing kit for nebulizers."
    },
    {
        id: "mc-024",
        name: "Needle Burner/Destroyer",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/needle%20destroyer%20box.jpg",
        description: "Safety box for destroying used needles."
    },
    {
        id: "mc-025",
        name: "Oxygen Mask",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/oxygen-mask-.jpeg",
        description: "Standard face mask for oxygen therapy."
    },
    {
        id: "mc-026",
        name: "Complete PPE Kit",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/ppe%20kit.jpg",
        description: "Full body personal protective equipment kit."
    },
    {
        id: "mc-027",
        name: "Ryles Tube (Standard)",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/ryle%20tube.jpg",
        description: "Nasogastric tube for suction or feeding."
    },
    {
        id: "mc-028",
        name: "Ryles Tube (Advanced)",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/ryle%20tube%202.jpg",
        description: "Advanced material ryles tube."
    },
    {
        id: "mc-029",
        name: "Scalp Vein Set",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/scalp%20vein%20set.jpg",
        description: "Butterfly needle set for vein access."
    },
    {
        id: "mc-030",
        name: "Sharps Container",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/sharp%20container.jpg",
        description: "Puncture-resistant container for sharps disposal."
    },
    {
        id: "mc-031",
        name: "Shoe Covers",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/shoe%20cover.webp",
        description: "Disposable protective shoe covers."
    },
    {
        id: "mc-032",
        name: "Sterile Dressing Pad",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/sterile%20dressing%20pad.jpg",
        description: "Absorbent pad for wound dressing."
    },
    {
        id: "mc-033",
        name: "Surgical Blade",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/surgical%20blade.jpg",
        description: "Carbon steel sterile surgical blades."
    },
    {
        id: "mc-034",
        name: "Surgical Cap",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/surgical%20cap.jpg",
        description: "Disposable cap for hair coverage."
    },
    {
        id: "mc-035",
        name: "Surgeon Cap (Tie-back)",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/surgical-caps2.jpg",
        description: "Traditional tie-back surgeon cap."
    },
    {
        id: "mc-036",
        name: "Absorbable Sutures",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/sutures%20absorbable.webp",
        description: "Surgical sutures that break down naturally."
    },
    {
        id: "mc-037",
        name: "Non-Absorbable Sutures",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/sutures%20non%20absorbable..webp",
        description: "Permanent surgical sutures like nylon or silk."
    },
    {
        id: "mc-038",
        name: "Urine Collection Bag",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/urine-collection-bag.webp",
        description: "Graduated urine collection bag."
    },
    {
        id: "mc-039",
        name: "White Latex Gloves",
        category: "medical-consumables",
        image: "/assets/Medical%20Consumable/white%20latex%20glove.webp",
        description: "Standard white latex examination gloves."
    },

    // Surgical Supplies
    { id: "ss-001", category: "surgical-supplies", name: "Stethoscope", image: "/assets/surgical%20items/-stethoscope3.png", description: "High-quality stethoscope for precise auscultation." },
    { id: "ss-002", category: "surgical-supplies", name: "Arthroscopy Unit", image: "/assets/surgical%20items/Arthroscopy%20unit.jpg", description: "Complete arthroscopy unit for joint surgeries." },
    { id: "ss-003", category: "surgical-supplies", name: "Biological Indicators", image: "/assets/surgical%20items/Biological%20indicators.jpg", description: "Indicators for verifying sterilization processes." },
    { id: "ss-004", category: "surgical-supplies", name: "Breathing Circuits", image: "/assets/surgical%20items/Breathing%20circuits.jpg", description: "Disposable breathing circuits for anesthesia." },
    { id: "ss-005", category: "surgical-supplies", name: "C-Arm Machine", image: "/assets/surgical%20items/C-Arm.jpg", description: "Mobile C-Arm machine for real-time X-ray imaging." },
    { id: "ss-006", category: "surgical-supplies", name: "Chemical Indicators", image: "/assets/surgical%20items/Chemical%20indicators.jpg", description: "Chemical indicators for sterilization monitoring." },
    { id: "ss-007", category: "surgical-supplies", name: "Dressing Pads", image: "/assets/surgical%20items/Dressing%20pads.webp", description: "Sterile dressing pads for wound care." },
    { id: "ss-008", category: "surgical-supplies", name: "ENT Instruments", image: "/assets/surgical%20items/ENT%20instruments.jpg", description: "Specialized instruments for Ear, Nose, and Throat surgery." },
    { id: "ss-009", category: "surgical-supplies", name: "ETO Sterilizer", image: "/assets/surgical%20items/ETO-Sterilizer.jpg", description: "Ethylene Oxide sterilizer for heat-sensitive equipment." },
    { id: "ss-010", category: "surgical-supplies", name: "Electrosurgical Unit", image: "/assets/surgical%20items/Electrosurgical%20unit.webp", description: "Electrosurgical unit for cutting and coagulation." },
    { id: "ss-011", category: "surgical-supplies", name: "Endoscopy System", image: "/assets/surgical%20items/Endoscopy%20system.jpg", description: "High-definition endoscopy system for diagnostic procedures." },
    { id: "ss-012", category: "surgical-supplies", name: "Enzymatic Cleaners", image: "/assets/surgical%20items/Enzymatic%20cleaners.jpg", description: "Enzymatic solution for cleaning surgical instruments." },
    { id: "ss-013", category: "surgical-supplies", name: "Gynecology Instruments", image: "/assets/surgical%20items/Gynecology%20instruments.webp", description: "Set of instruments for gynecological procedures." },
    { id: "ss-014", category: "surgical-supplies", name: "Instrument Containers", image: "/assets/surgical%20items/Instrument%20containers.jpg", description: "Durable containers for sterilizing and storing instruments." },
    { id: "ss-015", category: "surgical-supplies", name: "Instrument Trolley", image: "/assets/surgical%20items/Instrument%20trolleys.jpg", description: "Stainless steel trolley for surgical instruments." },
    { id: "ss-016", category: "surgical-supplies", name: "Labeling System", image: "/assets/surgical%20items/Labeling%20system.jpg", description: "System for labeling sterilization packs." },
    { id: "ss-017", category: "surgical-supplies", name: "Laminar Airflow", image: "/assets/surgical%20items/Laminar%20airflow%20system.jpg", description: "Laminar airflow system for sterile operation theaters." },
    { id: "ss-018", category: "surgical-supplies", name: "Laparoscopic Tower", image: "/assets/surgical%20items/Laparoscopic%20tower.jpg", description: "Complete laparoscopic tower with camera and light source." },
    { id: "ss-019", category: "surgical-supplies", name: "Laryngeal Mask Airway", image: "/assets/surgical%20items/Laryngeal%20mask%20airways.jpg", description: "Laryngeal mask airway for airway management." },
    { id: "ss-020", category: "surgical-supplies", name: "Laryngoscope", image: "/assets/surgical%20items/Laryngoscope.jpg", description: "Laryngoscope with various blade sizes." },
    { id: "ss-021", category: "surgical-supplies", name: "Lidocaine Injection", image: "/assets/surgical%20items/Local%20anesthetics%20(Lidocaine,.webp", description: "Local anesthetic lidocaine injection." },
    { id: "ss-022", category: "surgical-supplies", name: "Bupivacaine Injection", image: "/assets/surgical%20items/Local%20anesthetics%20Bupivacaine.jpg", description: "Long-acting local anesthetic bupivacaine." },
    { id: "ss-023", category: "surgical-supplies", name: "Mayo Stand", image: "/assets/surgical%20items/Mayo%20stands.jpg", description: "Adjustable Mayo stand for instrument placement." },
    { id: "ss-024", category: "surgical-supplies", name: "Nasal Airways", image: "/assets/surgical%20items/Nasal%20airways.jpg", description: "Soft nasal airways for maintaining airway patency." },
    { id: "ss-025", category: "surgical-supplies", name: "Neurosurgery Instruments", image: "/assets/surgical%20items/Neurosurgery%20instruments.jpg", description: "Precision instruments for neurosurgical procedures." },
    { id: "ss-026", category: "surgical-supplies", name: "Surgical Operating Table", image: "/assets/surgical%20items/Operating%20table.jpg", description: "Versatile operating table for various surgeries." },
    { id: "ss-027", category: "surgical-supplies", name: "Oral Airways", image: "/assets/surgical%20items/Oral%20airways.jpg", description: "Guedel oral airways in assorted sizes." },
    { id: "ss-028", category: "surgical-supplies", name: "Probe and Director", image: "/assets/surgical%20items/Probe%20and%20director.webp", description: "Surgical probe and director set." },
    { id: "ss-029", category: "surgical-supplies", name: "Scalpel Handles", image: "/assets/surgical%20items/Scalpel%20handles.jpg", description: "Reusable stainless steel scalpel handles." },
    { id: "ss-030", category: "surgical-supplies", name: "Skin Staplers", image: "/assets/surgical%20items/Skin%20staplers.webp", description: "Disposable skin staplers for wound closure." },
    { id: "ss-031", category: "surgical-supplies", name: "Spill Kits", image: "/assets/surgical%20items/Spill%20kits.webp", description: "Medical spill kits for hazardous fluid cleanup." },
    { id: "ss-032", category: "surgical-supplies", name: "Sponge Holding Forceps", image: "/assets/surgical%20items/Sponge%20holding%20forceps.webp", description: "Sponge holding forceps for prepping and clamping." },
    { id: "ss-033", category: "surgical-supplies", name: "Staple Remover", image: "/assets/surgical%20items/Staple%20removers.jpg", description: "Sterile staple remover for extracting skin staples." },
    { id: "ss-034", category: "surgical-supplies", name: "Sterile Wraps", image: "/assets/surgical%20items/Sterile%20wraps.jpg", description: "Sterile wraps for instrument trays." },
    { id: "ss-035", category: "surgical-supplies", name: "Storage Cabinet", image: "/assets/surgical%20items/Storage%20cabinets.jpg", description: "Medical grade storage cabinet for supplies." },
    { id: "ss-036", category: "surgical-supplies", name: "Surgical Microscope", image: "/assets/surgical%20items/Surgical%20microscope.jpg", description: "Advanced microscope for microsurgery." },
    { id: "ss-037", category: "surgical-supplies", name: "Surgical Sponges", image: "/assets/surgical%20items/Surgical%20sponges.png", description: "Absorbent surgical sponges for fluid control." },
    { id: "ss-038", category: "surgical-supplies", name: "Surgical Tapes", image: "/assets/surgical%20items/Surgical%20tapes.jpg", description: "Hypoallergenic surgical tapes for dressing retention." },
    { id: "ss-039", category: "surgical-supplies", name: "Temperature Probe", image: "/assets/surgical%20items/Temperature%20probe.webp", description: "Temperature probe for patient monitoring." },
    { id: "ss-040", category: "surgical-supplies", name: "Towel Clips", image: "/assets/surgical%20items/Towel%20clips.jpg", description: "Standard towel clips for securing drapes." },
    { id: "ss-041", category: "surgical-supplies", name: "Urology Instruments", image: "/assets/surgical%20items/Urology%20instruments.webp", description: "Specialized instruments for urological surgeries." },
    { id: "ss-042", category: "surgical-supplies", name: "Warming Blanket", image: "/assets/surgical%20items/Warming%20blankets.jpg", description: "Patient warming blanket to prevent hypothermia." },
    { id: "ss-043", category: "surgical-supplies", name: "Electronic BP Apparatus", image: "/assets/surgical%20items/bp%20apparatus%20electronic%20machine.webp", description: "Digital blood pressure monitoring machine." },
    { id: "ss-044", category: "surgical-supplies", name: "Manual BP Apparatus", image: "/assets/surgical%20items/bp%20apparatus%20manual.webp", description: "Aneroid manual blood pressure apparatus." },
    { id: "ss-045", category: "surgical-supplies", name: "Maternity Surgical Drape", image: "/assets/surgical%20items/maternity-surgical-drape.jpg", description: "Sterile drape kit for maternity procedures." },
    { id: "ss-046", category: "surgical-supplies", name: "OT Light", image: "/assets/surgical%20items/ot%20light2.webp", description: "Ceiling-mounted surgical operating light." },
    { id: "ss-047", category: "surgical-supplies", name: "Surgical Retractor", image: "/assets/surgical%20items/retractor.webp", description: "Hand-held retractor for tissue exposure." },

    // Medical Injectable
    { id: "mi-001", category: "medical-injectable", name: "Adrenaline Injection", image: "/assets/medical%20injectible/Adrenaline%20Injection.jpeg", description: "Emergency adrenaline injection for anaphylaxis." },
    { id: "mi-002", category: "medical-injectable", name: "Amiodarone Injection", image: "/assets/medical%20injectible/Amiodarone%20Injection.jpg", description: "Antiarrhythmic medication for cardiac emergencies." },
    { id: "mi-003", category: "medical-injectable", name: "Amoxicillin + Clavulanic Acid", image: "/assets/medical%20injectible/Amoxicillin%20+%20Clavulanic%20Acid%20Injection.jpg", description: "Broad-spectrum antibiotic combination." },
    { id: "mi-004", category: "medical-injectable", name: "Atropine Injection", image: "/assets/medical%20injectible/Atropine%20Injection.jpg", description: "Anticholinergic medication for bradycardia." },
    { id: "mi-005", category: "medical-injectable", name: "Bupivacaine Injection", image: "/assets/medical%20injectible/Bupivacaine%20Injection.jpg", description: "Long-acting local anesthetic." },
    { id: "mi-006", category: "medical-injectable", name: "Caffeine Citrate Injection", image: "/assets/medical%20injectible/Caffeine%20Citrate%20Injection.jpg", description: "Respiratory stimulant for neonates." },
    { id: "mi-007", category: "medical-injectable", name: "Calcium Gluconate Injection", image: "/assets/medical%20injectible/Calcium%20Gluconate%20Injection.png", description: "Calcium supplement for hypocalcemia." },
    { id: "mi-008", category: "medical-injectable", name: "Ceftriaxone 1g Injection", image: "/assets/medical%20injectible/Ceftriaxone%20Injection%201g.webp", description: "Third-generation cephalosporin antibiotic." },
    { id: "mi-009", category: "medical-injectable", name: "Chlorpheniramine Injection", image: "/assets/medical%20injectible/Chlorpheniramine%20Injection.jpg", description: "Antihistamine for allergic reactions." },
    { id: "mi-010", category: "medical-injectable", name: "Dexamethasone Injection", image: "/assets/medical%20injectible/Dexamethasone%20Injection.avif", description: "Corticosteroid for inflammation and allergies." },
    { id: "mi-011", category: "medical-injectable", name: "Dextrose 5% Solution", image: "/assets/medical%20injectible/Dextrose%205%25.jpg", description: "Intravenous glucose solution." },
    { id: "mi-012", category: "medical-injectable", name: "Dextrose Normal Saline", image: "/assets/medical%20injectible/Dextrose%20Normal%20Saline.webp", description: "Combined dextrose and saline solution." },
    { id: "mi-013", category: "medical-injectable", name: "Diazepam Injection", image: "/assets/medical%20injectible/Diazepam%20Injection.jpeg", description: "Benzodiazepine for seizures and anxiety." },
    { id: "mi-014", category: "medical-injectable", name: "Diclofenac Injection", image: "/assets/medical%20injectible/Diclofenac%20Injection.jpg", description: "NSAID for pain and inflammation." },
    { id: "mi-015", category: "medical-injectable", name: "Dopamine Injection", image: "/assets/medical%20injectible/Dopamine%20Injection.jpg", description: "Vasopressor for shock management." },
    { id: "mi-016", category: "medical-injectable", name: "Enoxaparin Injection", image: "/assets/medical%20injectible/Enoxaparin%20Injection.jpeg", description: "Low molecular weight heparin anticoagulant." },
    { id: "mi-017", category: "medical-injectable", name: "Furosemide Injection", image: "/assets/medical%20injectible/Furosemide%20Injection.jpeg", description: "Loop diuretic for fluid overload." },
    { id: "mi-018", category: "medical-injectable", name: "Gentamicin Injection", image: "/assets/medical%20injectible/Gentamicin%20Injection.jpg", description: "Aminoglycoside antibiotic." },
    { id: "mi-019", category: "medical-injectable", name: "Haloperidol Injection", image: "/assets/medical%20injectible/Haloperidol%20Injection.jpg", description: "Antipsychotic medication." },
    { id: "mi-020", category: "medical-injectable", name: "Heparin Injection", image: "/assets/medical%20injectible/Heparin%20Injection.jpg", description: "Anticoagulant for thrombosis prevention." },
    { id: "mi-021", category: "medical-injectable", name: "Hydrocortisone Injection", image: "/assets/medical%20injectible/Hydrocortisone%20Injection.jpeg", description: "Corticosteroid for adrenal insufficiency." },
    { id: "mi-022", category: "medical-injectable", name: "Hydrocortisone Sodium Succinate", image: "/assets/medical%20injectible/Hydrocortisone%20Sodium%20Succinate.jpg", description: "Injectable corticosteroid for acute conditions." },
    { id: "mi-023", category: "medical-injectable", name: "Insulin Regular Injection", image: "/assets/medical%20injectible/Insulin%20Regular%20Injection.webp", description: "Short-acting insulin for diabetes." },
    { id: "mi-024", category: "medical-injectable", name: "Iron Sucrose Injection", image: "/assets/medical%20injectible/Iron%20Sucrose%20Injection.jpg", description: "Intravenous iron supplement." },
    { id: "mi-025", category: "medical-injectable", name: "Ketamine Injection", image: "/assets/medical%20injectible/Ketamine%20Injection.webp", description: "Dissociative anesthetic." },
    { id: "mi-026", category: "medical-injectable", name: "Levetiracetam Injection", image: "/assets/medical%20injectible/Levetiracetam%20Injection.jpg", description: "Antiepileptic medication." },
    { id: "mi-027", category: "medical-injectable", name: "Lignocaine Injection", image: "/assets/medical%20injectible/Lignocaine%20Injection.png", description: "Local anesthetic and antiarrhythmic." },
    { id: "mi-028", category: "medical-injectable", name: "Magnesium Sulphate Injection", image: "/assets/medical%20injectible/Magnesium%20Sulphate%20Injection.jpg", description: "Treatment for eclampsia and hypomagnesemia." },
    { id: "mi-029", category: "medical-injectable", name: "Meropenem Injection", image: "/assets/medical%20injectible/Meropenem%20Injection.jpg", description: "Broad-spectrum carbapenem antibiotic." },
    { id: "mi-030", category: "medical-injectable", name: "Metoclopramide Injection", image: "/assets/medical%20injectible/Metoclopramide%20Injection.png", description: "Antiemetic and prokinetic agent." },
    { id: "mi-031", category: "medical-injectable", name: "Midazolam Injection", image: "/assets/medical%20injectible/Midazolam%20Injection.jpg", description: "Benzodiazepine for sedation." },
    { id: "mi-032", category: "medical-injectable", name: "Nitroglycerin Injection", image: "/assets/medical%20injectible/Nitroglycerin%20Injection.jpg", description: "Vasodilator for angina and heart failure." },
    { id: "mi-033", category: "medical-injectable", name: "Noradrenaline Injection", image: "/assets/medical%20injectible/Noradrenaline%20Injection.jpeg", description: "Vasopressor for severe hypotension." },
    { id: "mi-034", category: "medical-injectable", name: "Normal Saline 0.9%", image: "/assets/medical%20injectible/Normal%20Saline.jpg", description: "Isotonic saline solution for hydration." },
    { id: "mi-035", category: "medical-injectable", name: "Ondansetron Injection", image: "/assets/medical%20injectible/Ondansetron%20Injection.jpg", description: "Antiemetic for nausea and vomiting." },
    { id: "mi-036", category: "medical-injectable", name: "Oxytocin Injection", image: "/assets/medical%20injectible/Oxytocin%20Injection.jpg", description: "Hormone for labor induction." },
    { id: "mi-037", category: "medical-injectable", name: "Pantoprazole Injection", image: "/assets/medical%20injectible/Pantoprazole%20Injection.jpeg", description: "Proton pump inhibitor for acid reduction." },
    { id: "mi-038", category: "medical-injectable", name: "Paracetamol Injection", image: "/assets/medical%20injectible/Paracetamol%20Injection.png", description: "Analgesic and antipyretic." },
    { id: "mi-039", category: "medical-injectable", name: "Phenytoin Injection", image: "/assets/medical%20injectible/Phenytoin%20Injection.jpg", description: "Antiepileptic for seizure control." },
    { id: "mi-040", category: "medical-injectable", name: "Potassium Chloride Injection", image: "/assets/medical%20injectible/Potassium%20Chloride%20Injection.jpg", description: "Electrolyte replacement for hypokalemia." },
    { id: "mi-041", category: "medical-injectable", name: "Propofol Injection", image: "/assets/medical%20injectible/Propofol%20Injection.jpg", description: "Intravenous anesthetic agent." },
    { id: "mi-042", category: "medical-injectable", name: "Ringer Lactate Solution", image: "/assets/medical%20injectible/Ringer%20Lactate.jpg", description: "Balanced crystalloid solution." },
    { id: "mi-043", category: "medical-injectable", name: "Sodium Bicarbonate Injection", image: "/assets/medical%20injectible/Sodium%20Bicarbonate%20Injection.jpg", description: "Alkalinizing agent for acidosis." },
    { id: "mi-044", category: "medical-injectable", name: "Streptokinase Injection", image: "/assets/medical%20injectible/Streptokinase%20Injection.jpg", description: "Thrombolytic for clot dissolution." },
    { id: "mi-045", category: "medical-injectable", name: "Surfactant Injection", image: "/assets/medical%20injectible/Surfactant%20Injection.jpg", description: "Lung surfactant for neonatal respiratory distress." },
    { id: "mi-046", category: "medical-injectable", name: "Tramadol Injection", image: "/assets/medical%20injectible/Tramadol%20Injection.webp", description: "Opioid analgesic for moderate pain." },
    { id: "mi-047", category: "medical-injectable", name: "Tranexamic Acid Injection", image: "/assets/medical%20injectible/Tranexamic%20Acid%20Injection.jpg", description: "Antifibrinolytic for bleeding control." },
    { id: "mi-048", category: "medical-injectable", name: "Vancomycin Injection", image: "/assets/medical%20injectible/Vancomycin%20Injection.jpg", description: "Glycopeptide antibiotic for resistant infections." },
    { id: "mi-049", category: "medical-injectable", name: "Vitamin B-Complex Injection", image: "/assets/medical%20injectible/Vitamin%20B-Complex%20Injection.jpg", description: "B-vitamin supplement injection." },
    { id: "mi-050", category: "medical-injectable", name: "Vitamin K Injection", image: "/assets/medical%20injectible/Vitamin%20K%20Injection.webp", description: "Vitamin K for coagulation disorders." },

    { id: "hi-001", category: "hospital-infrastructure", name: "Oxygen Concentrator", image: "/assets/Hospital%20Infrastructure/Oxygen-concentrator.jpg", description: "High-efficiency oxygen concentrator for continuous oxygen therapy." },
    { id: "hi-002", category: "hospital-infrastructure", name: "Syringe Pump", image: "/assets/Hospital%20Infrastructure/Syringe-pump2.jpg", description: "Precision syringe pump for controlled medication delivery." },
    { id: "hi-003", category: "hospital-infrastructure", name: "Ambu Bag", image: "/assets/Hospital%20Infrastructure/ambu%20bag.jpg", description: "Manual resuscitator for emergency ventilation." },
    { id: "hi-004", category: "hospital-infrastructure", name: "Anesthesia Machine", image: "/assets/Hospital%20Infrastructure/anesthesia%20machine%202.png", description: "Advanced anesthesia workstation for surgical procedures." },
    { id: "hi-005", category: "hospital-infrastructure", name: "Autoclave Sterilizer", image: "/assets/Hospital%20Infrastructure/autoclaves.jpg", description: "Steam sterilizer for medical equipment disinfection." },
    { id: "hi-006", category: "hospital-infrastructure", name: "Medical Backup Power", image: "/assets/Hospital%20Infrastructure/backup-power.jpg", description: "Reliable power backup system for critical medical equipment." },
    { id: "hi-007", category: "hospital-infrastructure", name: "Biochemistry Analyzer", image: "/assets/Hospital%20Infrastructure/bio%20chemistry%20analyzer.png", description: "Automated analyzer for clinical biochemistry tests." },
    { id: "hi-008", category: "hospital-infrastructure", name: "Emergency Crash Cart", image: "/assets/Hospital%20Infrastructure/cash%20cart.jpg", description: "Mobile crash cart with multiple drawers for emergency supplies." },
    { id: "hi-009", category: "hospital-infrastructure", name: "Medical Centrifuge", image: "/assets/Hospital%20Infrastructure/centrifuge.jpg", description: "High-speed centrifuge for laboratory sample separation." },
    { id: "hi-010", category: "hospital-infrastructure", name: "Defibrillator", image: "/assets/Hospital%20Infrastructure/defibrillator.jpg", description: "Life-saving defibrillator for cardiac emergencies." },
    { id: "hi-011", category: "hospital-infrastructure", name: "Digital Thermometer", image: "/assets/Hospital%20Infrastructure/digital%20thermometer.jpg", description: "Fast and accurate digital thermometer." },
    { id: "hi-012", category: "hospital-infrastructure", name: "Adult Digital Scale", image: "/assets/Hospital%20Infrastructure/digital-weighing-scale-adult.webp", description: "High-capacity digital weighing scale for adults." },
    { id: "hi-013", category: "hospital-infrastructure", name: "ECG Machine", image: "/assets/Hospital%20Infrastructure/ecg%20machine%202.webp", description: "12-lead ECG machine for cardiac monitoring." },
    { id: "hi-014", category: "hospital-infrastructure", name: "ECG Meter", image: "/assets/Hospital%20Infrastructure/ecg%20meter.jpg", description: "Portable ECG meter for quick diagnostics." },
    { id: "hi-015", category: "hospital-infrastructure", name: "Electrocautery Machine", image: "/assets/Hospital%20Infrastructure/electrocautery%20machine.webp", description: "Surgical electrocautery unit for cutting and coagulation." },
    { id: "hi-016", category: "hospital-infrastructure", name: "Glucometer", image: "/assets/Hospital%20Infrastructure/glucometer.jpg", description: "Portable blood glucose monitoring system." },
    { id: "hi-017", category: "hospital-infrastructure", name: "Hematology Analyzer", image: "/assets/Hospital%20Infrastructure/hematalogy%20analyzer.webp", description: "Automated hematology analyzer for blood testing." },
    { id: "hi-018", category: "hospital-infrastructure", name: "Hospital Bed", image: "/assets/Hospital%20Infrastructure/hospital%20bed.jpg", description: "Adjustable hospital bed for patient comfort and care." },
    { id: "hi-019", category: "hospital-infrastructure", name: "Infusion Pump", image: "/assets/Hospital%20Infrastructure/infusion%20pump.webp", description: "Volumetric infusion pump for intravenous fluids." },
    { id: "hi-020", category: "hospital-infrastructure", name: "IV Fluid Stand", image: "/assets/Hospital%20Infrastructure/iv-%20fluid%20stand.jpeg", description: "Durable stainless steel IV stand with wheels." },
    { id: "hi-021", category: "hospital-infrastructure", name: "Medical Refrigerator", image: "/assets/Hospital%20Infrastructure/medical-refrigerators.jpg", description: "Temperature-controlled refrigerator for medicine storage." },
    { id: "hi-022", category: "hospital-infrastructure", name: "Medical Microscope", image: "/assets/Hospital%20Infrastructure/microscope%202.jpg", description: "High-precision binocular microscope for lab use." },
    { id: "hi-023", category: "hospital-infrastructure", name: "Nebulizer", image: "/assets/Hospital%20Infrastructure/nebulizer.webp", description: "Compressor nebulizer for respiratory therapy." },
    { id: "hi-024", category: "hospital-infrastructure", name: "Operating Table", image: "/assets/Hospital%20Infrastructure/operating%20table.jpg", description: "Hydraulic operating table for surgical procedures." },
    { id: "hi-025", category: "hospital-infrastructure", name: "Oxygen Cylinder", image: "/assets/Hospital%20Infrastructure/oxygen%20cylinder.webp", description: "Medical grade oxygen cylinder." },
    { id: "hi-026", category: "hospital-infrastructure", name: "Patient Monitor", image: "/assets/Hospital%20Infrastructure/patient%20monitor.avif", description: "Multi-parameter patient monitor for vital signs." },
    { id: "hi-027", category: "hospital-infrastructure", name: "Pulse Oximeter", image: "/assets/Hospital%20Infrastructure/pulse%20oximeter%202.jpg", description: "Accurate pulse oximeter for oxygen saturation monitoring." },
    { id: "hi-028", category: "hospital-infrastructure", name: "Stretcher", image: "/assets/Hospital%20Infrastructure/stretcher_.jpg", description: "Emergency stretcher trolley with wheels." },
    { id: "hi-029", category: "hospital-infrastructure", name: "Suction Machine", image: "/assets/Hospital%20Infrastructure/suction%20machine.png", description: "Heavy-duty suction machine for fluid aspiration." },
    { id: "hi-030", category: "hospital-infrastructure", name: "Surgical Instrument Set", image: "/assets/Hospital%20Infrastructure/surgical%20instrument%20set.jpg", description: "Comprehensive set of surgical instruments." },
    { id: "hi-031", category: "hospital-infrastructure", name: "Ultrasonic Cleaner", image: "/assets/Hospital%20Infrastructure/ultrasound%20cleaner.jpg", description: "Ultrasonic cleaner for medical instrument sterilization." },
    { id: "hi-032", category: "hospital-infrastructure", name: "Ultrasound Machine", image: "/assets/Hospital%20Infrastructure/ultrasound-machine.jpg", description: "Digital ultrasound machine for diagnostic imaging." },
    { id: "hi-033", category: "hospital-infrastructure", name: "ICU Ventilator", image: "/assets/Hospital%20Infrastructure/ventilator.jpg", description: "Advanced ICU ventilator for respiratory support." },
    { id: "hi-034", category: "hospital-infrastructure", name: "Weighing Scale", image: "/assets/Hospital%20Infrastructure/weighing%20scale.jpg", description: "Mechanical weighing scale for general use." },
    { id: "hi-035", category: "hospital-infrastructure", name: "Wheelchair", image: "/assets/Hospital%20Infrastructure/wheelchair.jpg", description: "Foldable wheelchair for patient mobility." },
    { id: "hi-036", category: "hospital-infrastructure", name: "X-Ray Machine", image: "/assets/Hospital%20Infrastructure/x-ray-machine.png", description: "Digital X-Ray machine for radiography." },

    // Orthopedic Supplies
    { id: "os-001", category: "orthopedic-supplies", name: "3D Fluoroscopy", image: "/assets/orthopedic/3D%20fluoroscopy.jpg", description: "Advanced 3D fluoroscopy imaging system for orthopedic surgery." },
    { id: "os-002", category: "orthopedic-supplies", name: "Acetabular Reamers", image: "/assets/orthopedic/Acetabular%20reamers.webp", description: "Precision acetabular reamers for hip replacement surgery." },
    { id: "os-003", category: "orthopedic-supplies", name: "Alignment Rods", image: "/assets/orthopedic/Alignment%20rods.jpg", description: "Surgical alignment rods for accurate implant positioning." },
    { id: "os-004", category: "orthopedic-supplies", name: "Antibiotic Cement Beads", image: "/assets/orthopedic/Antibiotic%20cement%20beads.jpg", description: "Antibiotic-impregnated cement beads for infection management." },
    { id: "os-005", category: "orthopedic-supplies", name: "Arthroscope", image: "/assets/orthopedic/Arthroscope.jpg", description: "High-definition arthroscope for minimally invasive joint surgery." },
    { id: "os-006", category: "orthopedic-supplies", name: "Bohler Braun Frame", image: "/assets/orthopedic/Bohler%20Braun%20frame.jpg", description: "Bohler Braun frame for skeletal traction and lower limb elevation." },
    { id: "os-007", category: "orthopedic-supplies", name: "Bone Cement (PMMA)", image: "/assets/orthopedic/Bone%20cement%20(PMMA).jpg", description: "Polymethyl methacrylate (PMMA) bone cement for implant fixation." },
    { id: "os-008", category: "orthopedic-supplies", name: "Bone Curettes", image: "/assets/orthopedic/Bone%20curettes.jpg", description: "Surgical bone curettes for scraping and cleaning bone." },
    { id: "os-009", category: "orthopedic-supplies", name: "Bone Graft Harvesters", image: "/assets/orthopedic/Bone%20graft%20harvesters.jpg", description: "Instruments for harvesting autologous bone grafts." },
    { id: "os-010", category: "orthopedic-supplies", name: "Bone Holding Forceps", image: "/assets/orthopedic/Bone%20holding%20forceps%20(Lane’s,%20Verbrugge).jpg", description: "Heavy-duty bone holding forceps (Lane’s, Verbrugge)." },
    { id: "os-011", category: "orthopedic-supplies", name: "Bone Mill", image: "/assets/orthopedic/Bone%20mill.jpg", description: "Bone mill for crushing bone into graft material." },
    { id: "os-012", category: "orthopedic-supplies", name: "Bone Plates", image: "/assets/orthopedic/Bone%20plates%20(DCP,%20LC-DCP,%20LCP).png", description: "Assorted bone plates including DCP, LC-DCP, and LCP." },
    { id: "os-013", category: "orthopedic-supplies", name: "Burr System", image: "/assets/orthopedic/Burr%20system.jpg", description: "High-speed burr system for bone shaping and cutting." },
    { id: "os-014", category: "orthopedic-supplies", name: "Camera System", image: "/assets/orthopedic/Camera%20system.jpg", description: "Endoscopic camera system for arthroscopic procedures." },
    { id: "os-015", category: "orthopedic-supplies", name: "Cancellous Screws", image: "/assets/orthopedic/Cancellous%20screws.jpg", description: "Cancellous screws for fixation in spongy bone." },
    { id: "os-016", category: "orthopedic-supplies", name: "Cement Gun", image: "/assets/orthopedic/Cement%20gun.jpg", description: "Cement gun for precise application of bone cement." },
    { id: "os-017", category: "orthopedic-supplies", name: "Cement Restrictor", image: "/assets/orthopedic/Cement%20restrictor.jpg", description: "Cement restrictor to contain bone cement in the medullary canal." },
    { id: "os-018", category: "orthopedic-supplies", name: "Cerclage Wires", image: "/assets/orthopedic/Cerclage%20wires.jpg", description: "Stainless steel cerclage wires for fracture fixation." },
    { id: "os-019", category: "orthopedic-supplies", name: "Clamps", image: "/assets/orthopedic/Clamps.webp", description: "Surgical clamps for orthopedic procedures." },
    { id: "os-020", category: "orthopedic-supplies", name: "Compressors", image: "/assets/orthopedic/Compressors.jpg", description: "Compression instruments for bone fixation." },
    { id: "os-021", category: "orthopedic-supplies", name: "Connecting Rods", image: "/assets/orthopedic/Connecting%20rods.jpg", description: "Connecting rods for external fixation systems." },
    { id: "os-022", category: "orthopedic-supplies", name: "Cup Inserter", image: "/assets/orthopedic/Cup%20inserter.png", description: "Instrument for inserting acetabular cups." },
    { id: "os-023", category: "orthopedic-supplies", name: "Cutting Blocks", image: "/assets/orthopedic/Cutting%20blocks.jpg", description: "Precision cutting blocks for joint replacement surgery." },
    { id: "os-024", category: "orthopedic-supplies", name: "Depth Gauge", image: "/assets/orthopedic/Depth%20gauge.jpg", description: "Depth gauge for measuring screw hole depth." },
    { id: "os-025", category: "orthopedic-supplies", name: "Distractors", image: "/assets/orthopedic/Distractors.jpg", description: "Joint distractors for creating space during surgery." },
    { id: "os-026", category: "orthopedic-supplies", name: "Drill Bits", image: "/assets/orthopedic/Drill%20bits%20(various%20sizes).webp", description: "Assorted medical-grade drill bits." },
    { id: "os-027", category: "orthopedic-supplies", name: "End Caps", image: "/assets/orthopedic/End%20caps.jpg", description: "End caps for intramedullary nails." },
    { id: "os-028", category: "orthopedic-supplies", name: "Femoral Rasps", image: "/assets/orthopedic/Femoral%20rasps.jpeg", description: "Femoral rasps for preparing the femoral canal." },
    { id: "os-029", category: "orthopedic-supplies", name: "Femoral Sizing Guides", image: "/assets/orthopedic/Femoral%20sizing%20guides.jpg", description: "Guides for sizing femoral components." },
    { id: "os-030", category: "orthopedic-supplies", name: "Fine Forceps", image: "/assets/orthopedic/Fine%20forceps.png", description: "Delicate forceps for fine tissue handling." },
    { id: "os-031", category: "orthopedic-supplies", name: "Fluid Pump", image: "/assets/orthopedic/Fluid%20pump.jpg", description: "Arthroscopic fluid pump for joint distension." },
    { id: "os-032", category: "orthopedic-supplies", name: "Fracture Table Attachments", image: "/assets/orthopedic/Fracture%20table%20attachments.jpg", description: "Attachments for orthopedic fracture tables." },
    { id: "os-033", category: "orthopedic-supplies", name: "Graft Packers", image: "/assets/orthopedic/Graft%20packers.jpg", description: "Instruments for packing bone graft." },
    { id: "os-034", category: "orthopedic-supplies", name: "Graspers", image: "/assets/orthopedic/Graspers.jpg", description: "Surgical graspers for tissue manipulation." },
    { id: "os-035", category: "orthopedic-supplies", name: "Guide Wires", image: "/assets/orthopedic/Guide%20wires.jpg", description: "Sterile guide wires for cannulated screws and nails." },
    { id: "os-036", category: "orthopedic-supplies", name: "Hand Drill", image: "/assets/orthopedic/Hand%20drill.webp", description: "Manual hand drill for orthopedic procedures." },
    { id: "os-037", category: "orthopedic-supplies", name: "Hohmann Retractors", image: "/assets/orthopedic/Hohmann%20retractors.jpg", description: "Hohmann retractors for tissue retraction." },
    { id: "os-038", category: "orthopedic-supplies", name: "Intramedullary Nails", image: "/assets/orthopedic/IM%20nails%20(femur,%20tibia,%20humerus).jpg", description: "IM nails for femur, tibia, and humerus fractures." },
    { id: "os-039", category: "orthopedic-supplies", name: "Impactors", image: "/assets/orthopedic/Impactors.jpg", description: "Impactors for seating implants." },
    { id: "os-040", category: "orthopedic-supplies", name: "K-Wire Inserters", image: "/assets/orthopedic/K-wire%20inserters.jpg", description: "Instruments for inserting Kirschner wires." },
    { id: "os-041", category: "orthopedic-supplies", name: "K-Wires", image: "/assets/orthopedic/K-wires%20(all%20sizes).jpg", description: "Kirschner wires in various sizes." },
    { id: "os-042", category: "orthopedic-supplies", name: "Kerrison Rongeurs", image: "/assets/orthopedic/Kerrison%20rongeurs.jpg", description: "Kerrison rongeurs for bone biting and laminectomy." },
    { id: "os-043", category: "orthopedic-supplies", name: "Locking Screws", image: "/assets/orthopedic/Locking%20screws.jpg", description: "Locking screws for locking plates." },
    { id: "os-044", category: "orthopedic-supplies", name: "Lowman Bone Clamp", image: "/assets/orthopedic/Lowman%20bone%20clamp.jpg", description: "Lowman bone clamp for fracture reduction." },
    { id: "os-045", category: "orthopedic-supplies", name: "Orthopedic Mallet", image: "/assets/orthopedic/Mallet%20(orthopedic%20hammer).jpg", description: "Surgical mallet for impacting instruments." },
    { id: "os-046", category: "orthopedic-supplies", name: "Micro Needle Holders", image: "/assets/orthopedic/Micro%20needle%20holders.jpg", description: "Micro needle holders for fine suturing." },
    { id: "os-047", category: "orthopedic-supplies", name: "Mini Bone Saw", image: "/assets/orthopedic/Mini%20bone%20saw.png", description: "Miniature bone saw for small bone surgery." },
    { id: "os-048", category: "orthopedic-supplies", name: "Mini Fragment Set", image: "/assets/orthopedic/Mini%20fragment%20set.webp", description: "Instrument set for mini fragment fixation." },
    { id: "os-049", category: "orthopedic-supplies", name: "Nail Inserter", image: "/assets/orthopedic/Nail%20inserter.webp", description: "Instrument for inserting IM nails." },
    { id: "os-050", category: "orthopedic-supplies", name: "Navigation System", image: "/assets/orthopedic/Navigation%20system.jpg", description: "Computer-assisted surgical navigation system." },
    { id: "os-051", category: "orthopedic-supplies", name: "Nerve Retractors", image: "/assets/orthopedic/Nerve%20retractors.jpg", description: "Delicate retractors for nerve protection." },
    { id: "os-052", category: "orthopedic-supplies", name: "Oscillating Saw", image: "/assets/orthopedic/Oscillating%20saw.jpg", description: "Powered oscillating saw for bone cutting." },
    { id: "os-053", category: "orthopedic-supplies", name: "PSI Guides", image: "/assets/orthopedic/PSI%20(Patient-specific%20instrumentation).jpg", description: "Patient-specific instrumentation guides." },
    { id: "os-054", category: "orthopedic-supplies", name: "Patellar Clamp", image: "/assets/orthopedic/Patellar%20clamp.jpg", description: "Clamp for stabilizing the patella." },
    { id: "os-055", category: "orthopedic-supplies", name: "Pedicle Screw System", image: "/assets/orthopedic/Pedicle%20screw%20system.png", description: "Spinal pedicle screw fixation system." },
    { id: "os-056", category: "orthopedic-supplies", name: "Periosteal Elevators", image: "/assets/orthopedic/Periosteal%20elevators.jpg", description: "Elevators for lifting periosteum from bone." },
    { id: "os-057", category: "orthopedic-supplies", name: "Probes", image: "/assets/orthopedic/Probes.jpg", description: "Surgical probes for exploring wounds and cavities." },
    { id: "os-058", category: "orthopedic-supplies", name: "Pulse Lavage System", image: "/assets/orthopedic/Pulse%20lavage%20system.jpg", description: "Pulse lavage system for wound irrigation." },
    { id: "os-059", category: "orthopedic-supplies", name: "Bone Punches", image: "/assets/orthopedic/Punches.jpg", description: "Bone punches for creating holes or biopsies." },
    { id: "os-060", category: "orthopedic-supplies", name: "RF Ablation Probe", image: "/assets/orthopedic/RF%20ablation%20probe.jpg", description: "Radiofrequency ablation probe for tissue coagulation." },
    { id: "os-061", category: "orthopedic-supplies", name: "Bone Reamers", image: "/assets/orthopedic/Reamers.webp", description: "Reamers for enlarging the medullary canal." },
    { id: "os-062", category: "orthopedic-supplies", name: "Reciprocating Saw", image: "/assets/orthopedic/Reciprocating%20saw.jpg", description: "Powered reciprocating saw for deep bone cutting." },
    { id: "os-063", category: "orthopedic-supplies", name: "Reconstruction Plates", image: "/assets/orthopedic/Reconstruction%20plates.jpg", description: "Malleable reconstruction plates." },
    { id: "os-064", category: "orthopedic-supplies", name: "Reduction Levers", image: "/assets/orthopedic/Reduction%20levers.jpg", description: "Levers for manipulating bone fragments." },
    { id: "os-065", category: "orthopedic-supplies", name: "Robotic Surgery System", image: "/assets/orthopedic/Robotic%20surgery%20system.jpg", description: "Advanced robotic system for orthopedic surgery." },
    { id: "os-066", category: "orthopedic-supplies", name: "Rod Benders", image: "/assets/orthopedic/Rod%20benders.jpg", description: "Instruments for bending surgical rods." },
    { id: "os-067", category: "orthopedic-supplies", name: "Rod Cutters", image: "/assets/orthopedic/Rod%20cutters.webp", description: "Heavy-duty cutter for surgical rods." },
    { id: "os-068", category: "orthopedic-supplies", name: "Schanz Screws", image: "/assets/orthopedic/Schanz%20screws.webp", description: "Schanz screws for external fixation." },
    { id: "os-069", category: "orthopedic-supplies", name: "Screwdrivers (AO)", image: "/assets/orthopedic/Screwdrivers%20(AO%20set).jpg", description: "AO standard surgical screwdrivers." },
    { id: "os-070", category: "orthopedic-supplies", name: "Self-Retaining Retractors", image: "/assets/orthopedic/Self-retaining%20retractors.jpg", description: "Retractors that hold tension automatically." },
    { id: "os-071", category: "orthopedic-supplies", name: "Shaver System", image: "/assets/orthopedic/Shaver%20system.jpg", description: "Arthroscopic shaver system for tissue resection." },
    { id: "os-072", category: "orthopedic-supplies", name: "Small Osteotomes", image: "/assets/orthopedic/Small%20osteotomes.jpg", description: "Small osteotomes for precise bone cutting." },
    { id: "os-073", category: "orthopedic-supplies", name: "Steinmann Pins", image: "/assets/orthopedic/Steinmann%20pins.jpg", description: "Stainless steel Steinmann pins for skeletal traction." },
    { id: "os-074", category: "orthopedic-supplies", name: "Stem Inserter", image: "/assets/orthopedic/Stem%20inserter.jpg", description: "Instrument for inserting femoral stems." },
    { id: "os-075", category: "orthopedic-supplies", name: "Sterile Drapes", image: "/assets/orthopedic/Sterile%20drapes%20(limb%20drapes).jpg", description: "Sterile drapes specially designed for limb surgery." },
    { id: "os-076", category: "orthopedic-supplies", name: "Sterilizable Batteries", image: "/assets/orthopedic/Sterilizable%20batteries.jpg", description: "Batteries for powered surgical instruments." },
    { id: "os-077", category: "orthopedic-supplies", name: "T-Handles", image: "/assets/orthopedic/T-handles.jpg", description: "T-handle instruments for manual torque." },
    { id: "os-078", category: "orthopedic-supplies", name: "Tap Set", image: "/assets/orthopedic/Tap%20set.jpg", description: "Bone tap set for cutting threads in bone." },
    { id: "os-079", category: "orthopedic-supplies", name: "Targeting Jig", image: "/assets/orthopedic/Targeting%20jig.jpg", description: "Targeting jig for locking nails." },
    { id: "os-080", category: "orthopedic-supplies", name: "Tibial Reamers", image: "/assets/orthopedic/Tibial%20reamers.webp", description: "Reamers specialized for the tibia." },
    { id: "os-081", category: "orthopedic-supplies", name: "Tourniquet Cuffs", image: "/assets/orthopedic/Tourniquet%20cuffs.jpg", description: "Reusable or disposable tourniquet cuffs." },
    { id: "os-082", category: "orthopedic-supplies", name: "Tourniquet Machine", image: "/assets/orthopedic/Tourniquet%20machine.jpg", description: "Digital pneumatic tourniquet system." },
    { id: "os-083", category: "orthopedic-supplies", name: "Towel Clips", image: "/assets/orthopedic/Towel%20clips%20(heavy%20duty).jpg", description: "Heavy-duty towel clips for securing drapes." },
    { id: "os-084", category: "orthopedic-supplies", name: "Traction Pulleys", image: "/assets/orthopedic/Traction%20pulleys.png", description: "Pulleys for orthopedic traction beds." },
    { id: "os-085", category: "orthopedic-supplies", name: "Traction Weights", image: "/assets/orthopedic/Traction%20weights.jpeg", description: "Weights for applying skeletal traction." },
    { id: "os-086", category: "orthopedic-supplies", name: "Wire Cutters", image: "/assets/orthopedic/Wire%20cutters.jpg", description: "Cutters for orthopedic wires and pins." },
    { id: "os-087", category: "orthopedic-supplies", name: "Wire Tensioner", image: "/assets/orthopedic/Wire%20tensioner.jpg", description: "Instrument for tensioning wires." },
    { id: "os-088", category: "orthopedic-supplies", name: "Wire Twister", image: "/assets/orthopedic/Wire%20twister.jpg", description: "Tool for twisting and securing wires." },
    { id: "os-089", category: "orthopedic-supplies", name: "Wound Retractors", image: "/assets/orthopedic/Wound%20retractors.jpg", description: "Retractors for holding wounds open." },
    { id: "os-090", category: "orthopedic-supplies", name: "Surgical Wrenches", image: "/assets/orthopedic/Wrenches.jpg", description: "Wrenches for tightening orthopedic implants." },
    { id: "os-091", category: "orthopedic-supplies", name: "Awls", image: "/assets/orthopedic/awls.jpg", description: "Bone awls for creating pilot holes." },
    { id: "os-092", category: "orthopedic-supplies", name: "Bone Cutter", image: "/assets/orthopedic/bone%20cutter.jpg", description: "Surgical bone cutter." },
    { id: "os-093", category: "orthopedic-supplies", name: "Bone Files and Rasps", image: "/assets/orthopedic/bone%20files%20and%20rasps.jpg", description: "Files and rasps for smoothing bone surfaces." },
    { id: "os-094", category: "orthopedic-supplies", name: "Bone Saw", image: "/assets/orthopedic/bone-saw.webp", description: "Manual or powered bone saw." },
    { id: "os-095", category: "orthopedic-supplies", name: "Bone Nibbler", image: "/assets/orthopedic/bone_nibbler_.webp", description: "Bone nibbler for biting away small bone pieces." },
    { id: "os-096", category: "orthopedic-supplies", name: "Chisels", image: "/assets/orthopedic/chisels.jpg", description: "Surgical chisels for bone cutting." },
    { id: "os-097", category: "orthopedic-supplies", name: "Cortical Bone Screw", image: "/assets/orthopedic/cortical-bone-screw.webp", description: "Screws designed for thick cortical bone." },
    { id: "os-098", category: "orthopedic-supplies", name: "Gigli Saw", image: "/assets/orthopedic/gigli%20saw%20with%20handles.jpg", description: "Flexible Gigli wire saw with handles." },
    { id: "os-099", category: "orthopedic-supplies", name: "Osteotomes", image: "/assets/orthopedic/osteotomes.jpg", description: "Standard osteotomes for osteotomy procedures." },
    { id: "os-100", category: "orthopedic-supplies", name: "Reduction Forceps", image: "/assets/orthopedic/reduction%20foreceps.jpg", description: "Forceps for holding fracture fragments." },
    { id: "os-101", category: "orthopedic-supplies", name: "Rongeurs", image: "/assets/orthopedic/rongeurs.webp", description: "Strong rongeurs for gouging out bone." },

    // Critical Care Supply
    { id: "cc-001", category: "critical-care-supply", name: "ICU Ventilator", image: "/assets/Hospital%20Infrastructure/ventilator.jpg", description: "Advanced ICU ventilator for life-critical respiratory support." },
    { id: "cc-002", category: "critical-care-supply", name: "Patient Monitor", image: "/assets/Hospital%20Infrastructure/patient%20monitor.avif", description: "Multi-parameter patient monitor for continuous vital signs tracking in ICU." },
    { id: "cc-003", category: "critical-care-supply", name: "Defibrillator", image: "/assets/Hospital%20Infrastructure/defibrillator.jpg", description: "Life-saving defibrillator for cardiac arrest and arrhythmia emergencies." },
    { id: "cc-004", category: "critical-care-supply", name: "Syringe Pump", image: "/assets/Hospital%20Infrastructure/Syringe-pump2.jpg", description: "Precision syringe pump for controlled critical care medication delivery." },
    { id: "cc-005", category: "critical-care-supply", name: "Infusion Pump", image: "/assets/Hospital%20Infrastructure/infusion%20pump.webp", description: "Volumetric infusion pump for accurate IV fluid administration in ICU." },
    { id: "cc-006", category: "critical-care-supply", name: "Oxygen Concentrator", image: "/assets/Hospital%20Infrastructure/Oxygen-concentrator.jpg", description: "High-efficiency oxygen concentrator for continuous critical care oxygen therapy." },
    { id: "cc-007", category: "critical-care-supply", name: "Oxygen Cylinder", image: "/assets/Hospital%20Infrastructure/oxygen%20cylinder.webp", description: "Medical grade oxygen cylinder for emergency and critical care use." },
    { id: "cc-008", category: "critical-care-supply", name: "Suction Machine", image: "/assets/Hospital%20Infrastructure/suction%20machine.png", description: "Heavy-duty suction machine for airway clearance in critical care." },
    { id: "cc-009", category: "critical-care-supply", name: "Ambu Bag", image: "/assets/Hospital%20Infrastructure/ambu%20bag.jpg", description: "Manual resuscitator bag for emergency ventilation in critical situations." },
    { id: "cc-010", category: "critical-care-supply", name: "Pulse Oximeter", image: "/assets/Hospital%20Infrastructure/pulse%20oximeter%202.jpg", description: "Accurate pulse oximeter for continuous SpO2 monitoring in ICU." },
    { id: "cc-011", category: "critical-care-supply", name: "Emergency Crash Cart", image: "/assets/Hospital%20Infrastructure/cash%20cart.jpg", description: "Fully equipped emergency crash cart for rapid critical care response." },
    { id: "cc-012", category: "critical-care-supply", name: "Laryngeal Mask Airway", image: "/assets/surgical%20items/Laryngeal%20mask%20airways.jpg", description: "Laryngeal mask airway for emergency airway management in critical care." },
    { id: "cc-013", category: "critical-care-supply", name: "Breathing Circuits", image: "/assets/surgical%20items/Breathing%20circuits.jpg", description: "Disposable breathing circuits for ventilators and anesthesia in ICU." },
    { id: "cc-014", category: "critical-care-supply", name: "Nasal Cannula", image: "/assets/Medical%20Consumable/nasal%20cannula.jpg", description: "Soft nasal cannula for supplemental oxygen delivery in critical care." },
    { id: "cc-015", category: "critical-care-supply", name: "Oxygen Mask", image: "/assets/Medical%20Consumable/oxygen-mask-.jpeg", description: "Standard face mask for high-flow oxygen therapy in critical care." },
    { id: "cc-016", category: "critical-care-supply", name: "Ringer Lactate Solution", image: "/assets/medical%20injectible/Ringer%20Lactate.jpg", description: "Balanced crystalloid solution for fluid resuscitation in critical care." },
    { id: "cc-017", category: "critical-care-supply", name: "Normal Saline 0.9%", image: "/assets/medical%20injectible/Normal%20Saline.jpg", description: "Isotonic saline solution for IV hydration and drug dilution in ICU." },
    { id: "cc-018", category: "critical-care-supply", name: "Dextrose 5% Solution", image: "/assets/medical%20injectible/Dextrose%205%25.jpg", description: "Intravenous dextrose solution for caloric supplementation in critical care." },
    { id: "cc-019", category: "critical-care-supply", name: "Dextrose Normal Saline", image: "/assets/medical%20injectible/Dextrose%20Normal%20Saline.webp", description: "Combined dextrose and saline solution for critical care fluid management." },
    { id: "cc-020", category: "critical-care-supply", name: "Dopamine Injection", image: "/assets/medical%20injectible/Dopamine%20Injection.jpg", description: "Vasopressor for hemodynamic support in critical care shock management." },
    { id: "cc-021", category: "critical-care-supply", name: "Noradrenaline Injection", image: "/assets/medical%20injectible/Noradrenaline%20Injection.jpeg", description: "Potent vasopressor for severe hypotension in ICU patients." },
    { id: "cc-022", category: "critical-care-supply", name: "Adrenaline Injection", image: "/assets/medical%20injectible/Adrenaline%20Injection.jpeg", description: "Emergency adrenaline injection for cardiac arrest and anaphylaxis in ICU." },
    { id: "cc-023", category: "critical-care-supply", name: "Hydrocortisone Injection", image: "/assets/medical%20injectible/Hydrocortisone%20Injection.jpeg", description: "Corticosteroid for adrenal crisis and septic shock in critical care." },
    { id: "cc-024", category: "critical-care-supply", name: "Sodium Bicarbonate Injection", image: "/assets/medical%20injectible/Sodium%20Bicarbonate%20Injection.jpg", description: "Alkalinizing agent for metabolic acidosis correction in ICU." },
    { id: "cc-025", category: "critical-care-supply", name: "Potassium Chloride Injection", image: "/assets/medical%20injectible/Potassium%20Chloride%20Injection.jpg", description: "Electrolyte replacement for critical hypokalemia in ICU patients." },
    { id: "cc-026", category: "critical-care-supply", name: "Magnesium Sulphate Injection", image: "/assets/medical%20injectible/Magnesium%20Sulphate%20Injection.jpg", description: "Essential for eclampsia and arrhythmia management in critical care." },
    { id: "cc-027", category: "critical-care-supply", name: "Paracetamol Injection", image: "/assets/medical%20injectible/Paracetamol%20Injection.png", description: "IV analgesic and antipyretic for fever control in ICU patients." },
    { id: "cc-028", category: "critical-care-supply", name: "Tramadol Injection", image: "/assets/medical%20injectible/Tramadol%20Injection.webp", description: "Opioid analgesic for moderate to severe pain management in critical care." },
    { id: "cc-029", category: "critical-care-supply", name: "Midazolam Injection", image: "/assets/medical%20injectible/Midazolam%20Injection.jpg", description: "Benzodiazepine for ICU sedation and seizure management." },
    { id: "cc-030", category: "critical-care-supply", name: "Diazepam Injection", image: "/assets/medical%20injectible/Diazepam%20Injection.jpeg", description: "Benzodiazepine for status epilepticus and anxiety in critical care." },
    { id: "cc-031", category: "critical-care-supply", name: "Heparin Injection", image: "/assets/medical%20injectible/Heparin%20Injection.jpg", description: "Anticoagulant for DVT prophylaxis and thrombosis in ICU patients." },
    { id: "cc-032", category: "critical-care-supply", name: "Streptokinase Injection", image: "/assets/medical%20injectible/Streptokinase%20Injection.jpg", description: "Thrombolytic agent for acute MI and PE in critical care emergencies." },
    { id: "cc-033", category: "critical-care-supply", name: "Enoxaparin Injection", image: "/assets/medical%20injectible/Enoxaparin%20Injection.jpeg", description: "Low molecular weight heparin for anticoagulation in ICU patients." },

    // All Type Physio Item
    { id: "pi-001", category: "physio-item", name: "Ultrasound Machine", image: "/assets/Hospital%20Infrastructure/ultrasound-machine.jpg", description: "Therapeutic ultrasound machine for physiotherapy and pain management." },
    { id: "pi-002", category: "physio-item", name: "Traction Pulleys", image: "/assets/orthopedic/Traction%20pulleys.png", description: "Pulleys for physiotherapy traction therapy and rehabilitation." },
    { id: "pi-003", category: "physio-item", name: "Traction Weights", image: "/assets/orthopedic/Traction%20weights.jpeg", description: "Calibrated weights for controlled physiotherapy traction treatment." },
    { id: "pi-004", category: "physio-item", name: "Bohler Braun Frame", image: "/assets/orthopedic/Bohler%20Braun%20frame.jpg", description: "Bohler Braun frame for skeletal traction and limb elevation therapy." },
    { id: "pi-005", category: "physio-item", name: "Wheelchair", image: "/assets/Hospital%20Infrastructure/wheelchair.jpg", description: "Foldable wheelchair for patient mobility and physiotherapy support." },
    { id: "pi-006", category: "physio-item", name: "Stretcher", image: "/assets/Hospital%20Infrastructure/stretcher_.jpg", description: "Patient stretcher trolley for safe transport and physiotherapy sessions." },
    { id: "pi-007", category: "physio-item", name: "Orthopedic Mallet", image: "/assets/orthopedic/Mallet%20(orthopedic%20hammer).jpg", description: "Orthopedic mallet for physiotherapy assessment and treatment procedures." },
    { id: "pi-008", category: "physio-item", name: "Tourniquet Machine", image: "/assets/orthopedic/Tourniquet%20machine.jpg", description: "Digital pneumatic tourniquet system for physiotherapy and rehabilitation." },
    { id: "pi-009", category: "physio-item", name: "Tourniquet Cuffs", image: "/assets/orthopedic/Tourniquet%20cuffs.jpg", description: "Reusable tourniquet cuffs for physiotherapy blood flow restriction training." },

    // Obs Gynecologist Item
    { id: "og-001", category: "obs-gynecologist-item", name: "Gynecology Instruments", image: "/assets/surgical%20items/Gynecology%20instruments.webp", description: "Complete set of instruments for gynecological examinations and procedures." },
    { id: "og-002", category: "obs-gynecologist-item", name: "Maternity Surgical Drape", image: "/assets/surgical%20items/maternity-surgical-drape.jpg", description: "Sterile drape kit designed for maternity and obstetric procedures." },
    { id: "og-003", category: "obs-gynecologist-item", name: "Oxytocin Injection", image: "/assets/medical%20injectible/Oxytocin%20Injection.jpg", description: "Oxytocin hormone injection for labor induction and postpartum care." },
    { id: "og-004", category: "obs-gynecologist-item", name: "Surgical Operating Table", image: "/assets/surgical%20items/Operating%20table.jpg", description: "Versatile operating table for obstetric and gynecological surgeries." },
    { id: "og-005", category: "obs-gynecologist-item", name: "OT Light", image: "/assets/surgical%20items/ot%20light2.webp", description: "Ceiling-mounted surgical operating light for OB-GYN procedures." },
    { id: "og-006", category: "obs-gynecologist-item", name: "Surgical Retractor", image: "/assets/surgical%20items/retractor.webp", description: "Hand-held retractor for tissue exposure in gynecological surgery." },
    { id: "og-007", category: "obs-gynecologist-item", name: "Sponge Holding Forceps", image: "/assets/surgical%20items/Sponge%20holding%20forceps.webp", description: "Sponge holding forceps for prepping and clamping in OB-GYN procedures." },
    { id: "og-008", category: "obs-gynecologist-item", name: "Sterile Drapes", image: "/assets/orthopedic/Sterile%20drapes%20(limb%20drapes).jpg", description: "Sterile surgical drapes for maintaining aseptic field during delivery." },
    { id: "og-009", category: "obs-gynecologist-item", name: "Surgical Tapes", image: "/assets/surgical%20items/Surgical%20tapes.jpg", description: "Hypoallergenic surgical tapes for post-operative dressing retention." },
    { id: "og-010", category: "obs-gynecologist-item", name: "Surgical Sponges", image: "/assets/surgical%20items/Surgical%20sponges.png", description: "Absorbent surgical sponges for fluid control during gynecological procedures." },
    { id: "og-011", category: "obs-gynecologist-item", name: "Dressing Pads", image: "/assets/surgical%20items/Dressing%20pads.webp", description: "Sterile dressing pads for post-operative wound care in OB-GYN." },
    { id: "og-012", category: "obs-gynecologist-item", name: "Bandage Roll", image: "/assets/Medical%20Consumable/bandage%20roll.jpg", description: "Cotton bandage roll for obstetric and gynecological dressing retention." },
    { id: "og-013", category: "obs-gynecologist-item", name: "Absorbable Sutures", image: "/assets/Medical%20Consumable/sutures%20absorbable.webp", description: "Absorbable sutures for internal closure in obstetric surgeries." },
    { id: "og-014", category: "obs-gynecologist-item", name: "Non-Absorbable Sutures", image: "/assets/Medical%20Consumable/sutures%20non%20absorbable..webp", description: "Non-absorbable sutures for skin closure in gynecological procedures." },
    { id: "og-015", category: "obs-gynecologist-item", name: "Foley Catheter", image: "/assets/Medical%20Consumable/foley%20catheter.webp", description: "Sterile silicone coated foley catheter for obstetric and post-surgical use." },
    { id: "og-016", category: "obs-gynecologist-item", name: "Urine Collection Bag", image: "/assets/Medical%20Consumable/urine-collection-bag.webp", description: "Graduated urine collection bag for post-operative monitoring." },

    // Opthal Item
    { id: "oi-001", category: "opthal-item", name: "Surgical Microscope", image: "/assets/surgical%20items/Surgical%20microscope.jpg", description: "High-magnification surgical microscope for ophthalmic microsurgery." },
    { id: "oi-002", category: "opthal-item", name: "Fine Forceps", image: "/assets/orthopedic/Fine%20forceps.png", description: "Delicate fine forceps for precise tissue handling in eye surgery." },
    { id: "oi-003", category: "opthal-item", name: "Micro Needle Holders", image: "/assets/orthopedic/Micro%20needle%20holders.jpg", description: "Micro needle holders for fine ophthalmic suturing." },
    { id: "oi-004", category: "opthal-item", name: "Surgical Blade", image: "/assets/Medical%20Consumable/surgical%20blade.jpg", description: "Precision surgical blades for ophthalmic incisions." },
    { id: "oi-005", category: "opthal-item", name: "Scalpel Handles", image: "/assets/surgical%20items/Scalpel%20handles.jpg", description: "Reusable stainless steel scalpel handles for eye surgery." },
    { id: "oi-006", category: "opthal-item", name: "Sterile Dressing Pad", image: "/assets/Medical%20Consumable/sterile%20dressing%20pad.jpg", description: "Sterile dressing pad for post-operative eye wound care." },
    { id: "oi-007", category: "opthal-item", name: "Gauze Swabs", image: "/assets/Medical%20Consumable/gauze-swabs.webp", description: "Sterile gauze swabs for gentle cleaning around the eye area." },

    // Cardiology Item
    { id: "ci-001", category: "cardiology-item", name: "ECG Machine", image: "/assets/Hospital%20Infrastructure/ecg%20machine%202.webp", description: "12-lead ECG machine for comprehensive cardiac monitoring and diagnostics." },
    { id: "ci-002", category: "cardiology-item", name: "ECG Meter", image: "/assets/Hospital%20Infrastructure/ecg%20meter.jpg", description: "Portable ECG meter for quick cardiac rhythm assessment." },
    { id: "ci-003", category: "cardiology-item", name: "ECG Electrodes", image: "/assets/Medical%20Consumable/ecg%20electrodes.jpg", description: "Disposable ECG electrodes for accurate cardiac signal acquisition." },
    { id: "ci-004", category: "cardiology-item", name: "Defibrillator", image: "/assets/Hospital%20Infrastructure/defibrillator.jpg", description: "Life-saving defibrillator for cardiac arrest and arrhythmia management." },
    { id: "ci-005", category: "cardiology-item", name: "Stethoscope", image: "/assets/surgical%20items/-stethoscope3.png", description: "High-quality stethoscope for cardiac auscultation and heart sound assessment." },
    { id: "ci-006", category: "cardiology-item", name: "Patient Monitor", image: "/assets/Hospital%20Infrastructure/patient%20monitor.avif", description: "Multi-parameter patient monitor for continuous cardiac vital signs tracking." },
    { id: "ci-007", category: "cardiology-item", name: "Manual BP Apparatus", image: "/assets/surgical%20items/bp%20apparatus%20manual.webp", description: "Aneroid manual blood pressure apparatus for cardiology assessment." },
    { id: "ci-008", category: "cardiology-item", name: "Electronic BP Apparatus", image: "/assets/surgical%20items/bp%20apparatus%20electronic%20machine.webp", description: "Digital blood pressure monitor for accurate cardiovascular readings." },
    { id: "ci-009", category: "cardiology-item", name: "Amiodarone Injection", image: "/assets/medical%20injectible/Amiodarone%20Injection.jpg", description: "Antiarrhythmic medication for life-threatening cardiac arrhythmias." },
    { id: "ci-010", category: "cardiology-item", name: "Nitroglycerin Injection", image: "/assets/medical%20injectible/Nitroglycerin%20Injection.jpg", description: "Vasodilator for angina pectoris and acute heart failure management." },
    { id: "ci-011", category: "cardiology-item", name: "Dopamine Injection", image: "/assets/medical%20injectible/Dopamine%20Injection.jpg", description: "Vasopressor for cardiogenic shock and hemodynamic support." },
    { id: "ci-012", category: "cardiology-item", name: "Noradrenaline Injection", image: "/assets/medical%20injectible/Noradrenaline%20Injection.jpeg", description: "Potent vasopressor for severe hypotension in cardiac emergencies." },
    { id: "ci-013", category: "cardiology-item", name: "Heparin Injection", image: "/assets/medical%20injectible/Heparin%20Injection.jpg", description: "Anticoagulant for preventing thrombosis in cardiac patients." },
    { id: "ci-014", category: "cardiology-item", name: "Streptokinase Injection", image: "/assets/medical%20injectible/Streptokinase%20Injection.jpg", description: "Thrombolytic agent for acute myocardial infarction treatment." },
    { id: "ci-015", category: "cardiology-item", name: "Enoxaparin Injection", image: "/assets/medical%20injectible/Enoxaparin%20Injection.jpeg", description: "Low molecular weight heparin for cardiac anticoagulation therapy." },
    { id: "ci-016", category: "cardiology-item", name: "Adrenaline Injection", image: "/assets/medical%20injectible/Adrenaline%20Injection.jpeg", description: "Emergency adrenaline for cardiac arrest resuscitation." },
    { id: "ci-017", category: "cardiology-item", name: "Furosemide Injection", image: "/assets/medical%20injectible/Furosemide%20Injection.jpeg", description: "Loop diuretic for acute heart failure and pulmonary edema." },

    // Neuro Item
    { id: "ni-001", category: "neuro-item", name: "Neurosurgery Instruments", image: "/assets/surgical%20items/Neurosurgery%20instruments.jpg", description: "Precision instruments for neurosurgical procedures and brain surgery." },
    { id: "ni-002", category: "neuro-item", name: "Diazepam Injection", image: "/assets/medical%20injectible/Diazepam%20Injection.jpeg", description: "Benzodiazepine for status epilepticus and neurological seizure control." },
    { id: "ni-003", category: "neuro-item", name: "Phenytoin Injection", image: "/assets/medical%20injectible/Phenytoin%20Injection.jpg", description: "Antiepileptic for seizure prevention in neurosurgical patients." },
    { id: "ni-004", category: "neuro-item", name: "Levetiracetam Injection", image: "/assets/medical%20injectible/Levetiracetam%20Injection.jpg", description: "Antiepileptic medication for neurological seizure management." },
    { id: "ni-005", category: "neuro-item", name: "Haloperidol Injection", image: "/assets/medical%20injectible/Haloperidol%20Injection.jpg", description: "Antipsychotic for acute agitation and delirium in neuro patients." },
    { id: "ni-006", category: "neuro-item", name: "Propofol Injection", image: "/assets/medical%20injectible/Propofol%20Injection.jpg", description: "Intravenous anesthetic for neurosurgical sedation and anesthesia." },
    { id: "ni-007", category: "neuro-item", name: "Midazolam Injection", image: "/assets/medical%20injectible/Midazolam%20Injection.jpg", description: "Benzodiazepine for procedural sedation in neurology." },
    { id: "ni-008", category: "neuro-item", name: "Ketamine Injection", image: "/assets/medical%20injectible/Ketamine%20Injection.webp", description: "Dissociative anesthetic for neurosurgical procedures." },
    { id: "ni-009", category: "neuro-item", name: "Surgical Microscope", image: "/assets/surgical%20items/Surgical%20microscope.jpg", description: "Advanced surgical microscope for delicate neurosurgical operations." },
    { id: "ni-010", category: "neuro-item", name: "Nerve Retractors", image: "/assets/orthopedic/Nerve%20retractors.jpg", description: "Delicate retractors for nerve protection during neurosurgery." },
    { id: "ni-011", category: "neuro-item", name: "Kerrison Rongeurs", image: "/assets/orthopedic/Kerrison%20rongeurs.jpg", description: "Kerrison rongeurs for laminectomy and spinal neurosurgery." },
    { id: "ni-012", category: "neuro-item", name: "Bone Curettes", image: "/assets/orthopedic/Bone%20curettes.jpg", description: "Surgical bone curettes for cranial and spinal bone procedures." },
    { id: "ni-013", category: "neuro-item", name: "Oscillating Saw", image: "/assets/orthopedic/Oscillating%20saw.jpg", description: "Powered oscillating saw for craniotomy and neurosurgical bone cutting." },

    // Pediatric
    { id: "pd-001", category: "pediatric", name: "Caffeine Citrate Injection", image: "/assets/medical%20injectible/Caffeine%20Citrate%20Injection.jpg", description: "Respiratory stimulant for apnea of prematurity in neonates." },
    { id: "pd-002", category: "pediatric", name: "Surfactant Injection", image: "/assets/medical%20injectible/Surfactant%20Injection.jpg", description: "Lung surfactant for neonatal respiratory distress syndrome." },
    { id: "pd-003", category: "pediatric", name: "Feeding Tube", image: "/assets/Medical%20Consumable/feeding%20tube.jpg", description: "Nasogastric feeding tube for pediatric and neonatal enteral nutrition." },
    { id: "pd-004", category: "pediatric", name: "Ryles Tube (Standard)", image: "/assets/Medical%20Consumable/ryle%20tube.jpg", description: "Standard nasogastric tube for pediatric suction or feeding." },
    { id: "pd-005", category: "pediatric", name: "Ryles Tube (Advanced)", image: "/assets/Medical%20Consumable/ryle%20tube%202.jpg", description: "Advanced material ryles tube for pediatric use." },
    { id: "pd-006", category: "pediatric", name: "Oxygen Mask", image: "/assets/Medical%20Consumable/oxygen-mask-.jpeg", description: "Pediatric-sized oxygen mask for respiratory therapy in children." },
    { id: "pd-007", category: "pediatric", name: "Nebulizer", image: "/assets/Hospital%20Infrastructure/nebulizer.webp", description: "Compressor nebulizer for pediatric respiratory therapy." },
    { id: "pd-008", category: "pediatric", name: "Nebulizer Kit", image: "/assets/Medical%20Consumable/nebulizer%20kit.jpg", description: "Complete pediatric nebulizer mask and tubing kit." },
    { id: "pd-009", category: "pediatric", name: "Glucometer", image: "/assets/Hospital%20Infrastructure/glucometer.jpg", description: "Portable blood glucose monitoring for pediatric patients." },
    { id: "pd-010", category: "pediatric", name: "Digital Thermometer", image: "/assets/Hospital%20Infrastructure/digital%20thermometer.jpg", description: "Fast and accurate digital thermometer for pediatric use." },

    // Urology
    { id: "ur-001", category: "urology", name: "Urology Instruments", image: "/assets/surgical%20items/Urology%20instruments.webp", description: "Specialized instruments for urological surgeries and procedures." },
    { id: "ur-002", category: "urology", name: "Foley Catheter", image: "/assets/Medical%20Consumable/foley%20catheter.webp", description: "Sterile silicone coated foley catheter for urinary drainage." },
    { id: "ur-003", category: "urology", name: "Urine Collection Bag", image: "/assets/Medical%20Consumable/urine-collection-bag.webp", description: "Graduated urine collection bag for urological monitoring." },
    { id: "ur-004", category: "urology", name: "Ryles Tube (Standard)", image: "/assets/Medical%20Consumable/ryle%20tube.jpg", description: "Standard nasogastric tube for urological patient care." },
    { id: "ur-005", category: "urology", name: "Ryles Tube (Advanced)", image: "/assets/Medical%20Consumable/ryle%20tube%202.jpg", description: "Advanced material ryles tube for urological applications." },
    { id: "ur-006", category: "urology", name: "Probe and Director", image: "/assets/surgical%20items/Probe%20and%20director.webp", description: "Surgical probe and director set for urological exploration." },
    { id: "ur-007", category: "urology", name: "Surgical Blade", image: "/assets/Medical%20Consumable/surgical%20blade.jpg", description: "Sterile surgical blades for urological incisions." },
    { id: "ur-008", category: "urology", name: "Sterile Dressing Pad", image: "/assets/Medical%20Consumable/sterile%20dressing%20pad.jpg", description: "Absorbent sterile dressing pad for post-operative urological wound care." },
    { id: "ur-009", category: "urology", name: "Gauze Swabs", image: "/assets/Medical%20Consumable/gauze-swabs.webp", description: "Sterile gauze swabs for wound cleaning in urology procedures." },

    // Gastroenterology
    { id: "ge-001", category: "gastroenterology", name: "Endoscopy System", image: "/assets/surgical%20items/Endoscopy%20system.jpg", description: "High-definition endoscopy system for GI tract diagnosis and procedures." },
    { id: "ge-002", category: "gastroenterology", name: "Laparoscopic Tower", image: "/assets/surgical%20items/Laparoscopic%20tower.jpg", description: "Complete laparoscopic tower for minimally invasive GI surgery." },
    { id: "ge-003", category: "gastroenterology", name: "Feeding Tube", image: "/assets/Medical%20Consumable/feeding%20tube.jpg", description: "Nasogastric feeding tube for enteral nutrition in GI patients." },
    { id: "ge-004", category: "gastroenterology", name: "Ryles Tube (Standard)", image: "/assets/Medical%20Consumable/ryle%20tube.jpg", description: "Standard nasogastric tube for gastric suction and decompression." },
    { id: "ge-005", category: "gastroenterology", name: "Ryles Tube (Advanced)", image: "/assets/Medical%20Consumable/ryle%20tube%202.jpg", description: "Advanced nasogastric tube for gastroenterology applications." },
    { id: "ge-006", category: "gastroenterology", name: "Pantoprazole Injection", image: "/assets/medical%20injectible/Pantoprazole%20Injection.jpeg", description: "Proton pump inhibitor for gastric acid suppression and ulcer treatment." },
    { id: "ge-007", category: "gastroenterology", name: "Ondansetron Injection", image: "/assets/medical%20injectible/Ondansetron%20Injection.jpg", description: "Antiemetic for nausea and vomiting in GI conditions." },
    { id: "ge-008", category: "gastroenterology", name: "Metoclopramide Injection", image: "/assets/medical%20injectible/Metoclopramide%20Injection.png", description: "Prokinetic agent for gastroparesis and GI motility disorders." },
    { id: "ge-009", category: "gastroenterology", name: "Ceftriaxone 1g Injection", image: "/assets/medical%20injectible/Ceftriaxone%20Injection%201g.webp", description: "Third-generation cephalosporin for GI infections." },
    { id: "ge-010", category: "gastroenterology", name: "Amoxicillin + Clavulanic Acid", image: "/assets/medical%20injectible/Amoxicillin%20+%20Clavulanic%20Acid%20Injection.jpg", description: "Broad-spectrum antibiotic for abdominal and GI infections." },
    { id: "ge-011", category: "gastroenterology", name: "Meropenem Injection", image: "/assets/medical%20injectible/Meropenem%20Injection.jpg", description: "Carbapenem antibiotic for severe intra-abdominal infections." },
    { id: "ge-012", category: "gastroenterology", name: "Vancomycin Injection", image: "/assets/medical%20injectible/Vancomycin%20Injection.jpg", description: "Glycopeptide antibiotic for C. difficile and resistant GI infections." },
    { id: "ge-013", category: "gastroenterology", name: "Gentamicin Injection", image: "/assets/medical%20injectible/Gentamicin%20Injection.jpg", description: "Aminoglycoside antibiotic for serious GI bacterial infections." },

    // Medical Chemicals — Disinfectants & Antiseptics
    { id: "mch-001", category: "medical-chemicals", subcategory: "Disinfectants & Antiseptics", name: "Ethyl Alcohol (70%)", image: "", description: "Medical-grade ethyl alcohol solution for surface and skin disinfection." },
    { id: "mch-002", category: "medical-chemicals", subcategory: "Disinfectants & Antiseptics", name: "Isopropyl Alcohol", image: "", description: "Isopropyl alcohol for antiseptic cleaning and sterilization." },
    { id: "mch-003", category: "medical-chemicals", subcategory: "Disinfectants & Antiseptics", name: "Chlorhexidine Gluconate", image: "", description: "Broad-spectrum antiseptic for surgical scrub and wound care." },
    { id: "mch-004", category: "medical-chemicals", subcategory: "Disinfectants & Antiseptics", name: "Povidone-Iodine", image: "", description: "Iodine-based antiseptic for pre-operative skin preparation." },
    { id: "mch-005", category: "medical-chemicals", subcategory: "Disinfectants & Antiseptics", name: "Hydrogen Peroxide", image: "", description: "Oxidizing agent for wound cleaning and surface disinfection." },
    { id: "mch-006", category: "medical-chemicals", subcategory: "Disinfectants & Antiseptics", name: "Sodium Hypochlorite", image: "", description: "Chlorine-based disinfectant for surfaces and water treatment." },
    { id: "mch-007", category: "medical-chemicals", subcategory: "Disinfectants & Antiseptics", name: "Phenol", image: "", description: "Phenolic compound for hospital-grade disinfection." },
    { id: "mch-008", category: "medical-chemicals", subcategory: "Disinfectants & Antiseptics", name: "Glutaraldehyde", image: "", description: "High-level disinfectant for heat-sensitive medical equipment." },
    { id: "mch-009", category: "medical-chemicals", subcategory: "Disinfectants & Antiseptics", name: "Formaldehyde", image: "", description: "Chemical sterilant for fumigation and tissue preservation." },
    { id: "mch-010", category: "medical-chemicals", subcategory: "Disinfectants & Antiseptics", name: "Quaternary Ammonium Compounds", image: "", description: "Surface disinfectant for low-level hospital cleaning." },

    // Medical Chemicals — Medical Gases
    { id: "mch-011", category: "medical-chemicals", subcategory: "Medical Gases", name: "Oxygen", image: "", description: "Medical-grade oxygen for respiratory therapy and anesthesia." },
    { id: "mch-012", category: "medical-chemicals", subcategory: "Medical Gases", name: "Nitrous Oxide", image: "", description: "Anesthetic gas used for sedation and pain management." },
    { id: "mch-013", category: "medical-chemicals", subcategory: "Medical Gases", name: "Medical Air", image: "", description: "Compressed medical air for ventilators and respiratory equipment." },
    { id: "mch-014", category: "medical-chemicals", subcategory: "Medical Gases", name: "Carbon Dioxide", image: "", description: "Medical CO₂ for laparoscopic insufflation and respiratory testing." },
    { id: "mch-015", category: "medical-chemicals", subcategory: "Medical Gases", name: "Nitrogen", image: "", description: "Medical nitrogen for cryotherapy and equipment pneumatics." },
    { id: "mch-016", category: "medical-chemicals", subcategory: "Medical Gases", name: "Helium", image: "", description: "Medical helium for pulmonary function testing and MRI cooling." },

    // Medical Chemicals — Laboratory Chemicals
    { id: "mch-017", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Hydrochloric Acid", image: "", description: "Mineral acid for laboratory reagent preparation and pH adjustment." },
    { id: "mch-018", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Sulfuric Acid", image: "", description: "Strong acid for laboratory chemical reactions and analysis." },
    { id: "mch-019", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Nitric Acid", image: "", description: "Oxidizing acid for metal analysis and tissue digestion." },
    { id: "mch-020", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Sodium Hydroxide", image: "", description: "Strong base for pH adjustment and chemical analysis." },
    { id: "mch-021", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Ammonium Hydroxide", image: "", description: "Alkaline solution for staining and reagent preparation." },
    { id: "mch-022", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Acetic Acid", image: "", description: "Weak acid for histology staining and laboratory use." },
    { id: "mch-023", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Methanol", image: "", description: "Organic solvent for fixation and chromatography." },
    { id: "mch-024", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Ethanol", image: "", description: "Laboratory-grade ethanol for tissue processing and dehydration." },
    { id: "mch-025", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Acetone", image: "", description: "Organic solvent for cleaning and dehydration in histology." },
    { id: "mch-026", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Xylene", image: "", description: "Clearing agent for histology and microscopy slide preparation." },
    { id: "mch-027", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Chloroform", image: "", description: "Organic solvent used in DNA extraction and laboratory procedures." },
    { id: "mch-028", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Phosphate Buffer", image: "", description: "Buffering solution for maintaining pH in biological experiments." },
    { id: "mch-029", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Sodium Chloride", image: "", description: "Reagent-grade salt for preparing saline and buffer solutions." },
    { id: "mch-030", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Potassium Chloride", image: "", description: "Electrolyte reagent for laboratory analysis and solution preparation." },
    { id: "mch-031", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Calcium Chloride", image: "", description: "Salt reagent for coagulation testing and solution preparation." },
    { id: "mch-032", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Hematoxylin", image: "", description: "Nuclear stain for histological tissue examination." },
    { id: "mch-033", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Eosin", image: "", description: "Cytoplasmic stain used in H&E staining for histopathology." },
    { id: "mch-034", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Giemsa Stain", image: "", description: "Differential stain for blood smears and parasitology." },
    { id: "mch-035", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Gram Stain Reagents", image: "", description: "Reagent set for Gram staining of bacterial specimens." },
    { id: "mch-036", category: "medical-chemicals", subcategory: "Laboratory Chemicals", name: "Wright Stain", image: "", description: "Hematological stain for peripheral blood smear examination." },

    // Medical Chemicals — Pathology & Histology
    { id: "mch-037", category: "medical-chemicals", subcategory: "Pathology & Histology", name: "Formalin (10%)", image: "", description: "Tissue fixative for preserving biopsy and surgical specimens." },
    { id: "mch-038", category: "medical-chemicals", subcategory: "Pathology & Histology", name: "Paraffin Wax", image: "", description: "Embedding medium for tissue sectioning in histopathology." },
    { id: "mch-039", category: "medical-chemicals", subcategory: "Pathology & Histology", name: "Xylene", image: "", description: "Clearing agent for deparaffinization and tissue processing." },
    { id: "mch-040", category: "medical-chemicals", subcategory: "Pathology & Histology", name: "Ethanol Series", image: "", description: "Graded ethanol solutions for tissue dehydration and rehydration." },
    { id: "mch-041", category: "medical-chemicals", subcategory: "Pathology & Histology", name: "Mounting Media", image: "", description: "Resinous media for coverslipping histology slides." },
    { id: "mch-042", category: "medical-chemicals", subcategory: "Pathology & Histology", name: "Clearing Agents", image: "", description: "Organic solvents for tissue clearing prior to embedding." },

    // Medical Chemicals — Cleaning & Sterilization
    { id: "mch-043", category: "medical-chemicals", subcategory: "Cleaning & Sterilization", name: "Enzymatic Detergents", image: "", description: "Enzyme-based detergents for cleaning surgical instruments." },
    { id: "mch-044", category: "medical-chemicals", subcategory: "Cleaning & Sterilization", name: "Peracetic Acid", image: "", description: "Chemical sterilant for endoscopes and heat-sensitive devices." },
    { id: "mch-045", category: "medical-chemicals", subcategory: "Cleaning & Sterilization", name: "Sodium Carbonate", image: "", description: "Alkaline cleaner for instrument decontamination." },
    { id: "mch-046", category: "medical-chemicals", subcategory: "Cleaning & Sterilization", name: "Detergent Powders", image: "", description: "Medical-grade detergent powder for linen and surface cleaning." },
    { id: "mch-047", category: "medical-chemicals", subcategory: "Cleaning & Sterilization", name: "Sterilizing Solutions", image: "", description: "Chemical solutions for cold sterilization of instruments." },
    { id: "mch-048", category: "medical-chemicals", subcategory: "Cleaning & Sterilization", name: "Steam Sterilization Chemicals", image: "", description: "Chemicals used in autoclave steam sterilization processes." },

    // Medical Chemicals — IV & Dialysis Solutions
    { id: "mch-049", category: "medical-chemicals", subcategory: "IV & Dialysis Solutions", name: "Sodium Chloride (0.9%)", image: "", description: "Isotonic saline solution for IV infusion and dialysis." },
    { id: "mch-050", category: "medical-chemicals", subcategory: "IV & Dialysis Solutions", name: "Potassium Chloride", image: "", description: "Electrolyte supplement for IV and dialysis solutions." },
    { id: "mch-051", category: "medical-chemicals", subcategory: "IV & Dialysis Solutions", name: "Calcium Gluconate", image: "", description: "Calcium supplement for parenteral administration." },
    { id: "mch-052", category: "medical-chemicals", subcategory: "IV & Dialysis Solutions", name: "Sodium Bicarbonate", image: "", description: "Alkalinizing agent for metabolic acidosis and dialysis fluid." },
    { id: "mch-053", category: "medical-chemicals", subcategory: "IV & Dialysis Solutions", name: "Dextrose", image: "", description: "Glucose solution for caloric supplementation and hypoglycemia." },
    { id: "mch-054", category: "medical-chemicals", subcategory: "IV & Dialysis Solutions", name: "Lactated Ringer's Components", image: "", description: "Balanced electrolyte components for Ringer's lactate solution." },

    // Medical Chemicals — Radiology & Imaging
    { id: "mch-055", category: "medical-chemicals", subcategory: "Radiology & Imaging", name: "Developer Solution", image: "", description: "Chemical developer for processing X-ray film images." },
    { id: "mch-056", category: "medical-chemicals", subcategory: "Radiology & Imaging", name: "Fixer Solution", image: "", description: "Chemical fixer for stabilizing developed X-ray film." },
    { id: "mch-057", category: "medical-chemicals", subcategory: "Radiology & Imaging", name: "Contrast Media (Iodine-based)", image: "", description: "Iodinated contrast agent for enhanced radiological imaging." },
    { id: "mch-058", category: "medical-chemicals", subcategory: "Radiology & Imaging", name: "Barium Sulfate", image: "", description: "Radio-opaque contrast agent for GI tract imaging studies." },
    { id: "mch-059", category: "medical-chemicals", subcategory: "Radiology & Imaging", name: "Silver Nitrate", image: "", description: "Chemical reagent for radiographic film and wound cauterization." },

    // Medical Chemicals — Maintenance & Emergency
    { id: "mch-060", category: "medical-chemicals", subcategory: "Maintenance & Emergency", name: "Fire Extinguisher Chemicals", image: "", description: "Chemical agents for medical facility fire safety systems." },
    { id: "mch-061", category: "medical-chemicals", subcategory: "Maintenance & Emergency", name: "Refrigerants", image: "", description: "Cooling chemicals for medical equipment and cold storage." },
    { id: "mch-062", category: "medical-chemicals", subcategory: "Maintenance & Emergency", name: "Lubricants", image: "", description: "Medical-grade lubricants for instrument and equipment maintenance." },
    { id: "mch-063", category: "medical-chemicals", subcategory: "Maintenance & Emergency", name: "Battery Acids", image: "", description: "Acid solutions for maintenance of emergency power backup systems." },
    { id: "mch-064", category: "medical-chemicals", subcategory: "Maintenance & Emergency", name: "Water Treatment Chemicals", image: "", description: "Chemicals for water purification and hospital water system treatment." },

    // Medical Chemicals — Quality Control
    { id: "mch-065", category: "medical-chemicals", subcategory: "Quality Control", name: "Buffer Solutions (pH 4,7,10)", image: "", description: "Standard buffer solutions for pH meter calibration and testing." },
    { id: "mch-066", category: "medical-chemicals", subcategory: "Quality Control", name: "Standard Solutions", image: "", description: "Chemically standardized solutions for laboratory quality control." },
    { id: "mch-067", category: "medical-chemicals", subcategory: "Quality Control", name: "Calibration Gases", image: "", description: "Certified gas mixtures for calibrating medical analyzers." },
    { id: "mch-068", category: "medical-chemicals", subcategory: "Quality Control", name: "Reference Reagents", image: "", description: "Certified reference reagents for analytical accuracy verification." },
];
