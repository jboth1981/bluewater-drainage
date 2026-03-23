export interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  benefits: string[]
  image?: string
}

export const services: Service[] = [
  {
    id: 'tile-drainage',
    title: 'Tile Drainage',
    image: '/images/byron-plow.webp',
    shortDescription: 'Professional systematic and random tile drainage installation to improve field productivity.',
    description:
      'Tile drainage is the most effective way to remove excess water from agricultural land. We install both systematic and random tile drainage systems using GPS-guided equipment, ensuring precise grade and optimal water removal. Properly drained fields dry faster in spring, reduce crop stress during wet periods, and consistently produce higher yields.',
    benefits: [
      'Increase crop yields by 10–30%',
      'Faster spring field access',
      'Reduced soil compaction from working wet fields',
      'Improved root development and nutrient uptake',
      'Long-term investment that pays for itself',
    ],
  },
  {
    id: 'gps-survey-design',
    title: 'GPS Survey & Design',
    image: '/images/gps-trimble.webp',
    shortDescription: 'Precision GPS surveying and drainage system design for optimal water management.',
    description:
      'Every successful drainage project starts with accurate survey data. We use RTK GPS technology to map your fields with centimetre-level precision, identifying low spots, natural drainage patterns, and optimal tile placement. Our designs maximize water removal efficiency while minimizing installation costs.',
    benefits: [
      'Centimetre-accurate field elevation mapping',
      'Optimized drain spacing and layout',
      'Identify problem areas before installation',
      'Cost-effective system design',
      'Digital records for future reference',
    ],
  },
  {
    id: 'land-clearing-excavation',
    title: 'Land Clearing & Excavation',
    shortDescription: 'Professional land clearing and excavation services for agricultural and drainage projects.',
    description:
      'Whether you need to clear land for new agricultural use, excavate for drainage infrastructure, or prepare sites for construction, our experienced operators and heavy equipment get the job done efficiently. We handle everything from brush clearing to ditch construction and pond excavation.',
    benefits: [
      'Experienced heavy equipment operators',
      'Efficient clearing and site preparation',
      'Ditch construction and maintenance',
      'Pond excavation',
      'Proper grading and drainage consideration',
    ],
  },
  {
    id: 'erosion-control',
    title: 'Erosion Control',
    shortDescription: 'Certified erosion control solutions to protect your land and waterways.',
    description:
      'Soil erosion threatens both agricultural productivity and environmental health. As certified erosion control professionals, we design and install solutions that protect your topsoil, stabilize waterways, and comply with conservation authority requirements. From buffer strips to grassed waterways, we keep your soil where it belongs.',
    benefits: [
      'Certified erosion control professionals',
      'Protect valuable topsoil',
      'Meet conservation authority requirements',
      'Stabilize waterways and ditches',
      'Improve long-term land value',
    ],
  },
  {
    id: 'tile-repair-locating',
    title: 'Tile Repair & Locating',
    shortDescription: 'Find and fix broken or damaged tile drainage lines to restore field drainage.',
    description:
      'Damaged or blocked tile lines can cause persistent wet spots and reduced yields. We use specialized equipment to locate existing tile systems and identify breaks, blockages, and other issues. Our repair services restore proper drainage function so your fields perform as they should.',
    benefits: [
      'Locate existing tile lines accurately',
      'Diagnose drainage problems',
      'Repair breaks and blockages',
      'Restore field drainage performance',
      'Extend the life of your drainage system',
    ],
  },
  {
    id: 'finish-discing',
    title: 'Finish Discing',
    shortDescription: 'Professional finish discing to restore field surfaces after drainage installation.',
    description:
      'After tile drainage installation, proper field restoration is essential. Our finish discing service smooths out installation lines and restores your field surface to a workable condition. We take pride in leaving fields looking better than we found them, ready for your next crop.',
    benefits: [
      'Smooth field surface restoration',
      'Ready for planting after installation',
      'Professional finish quality',
      'Minimizes disruption to your operation',
    ],
  },
]
