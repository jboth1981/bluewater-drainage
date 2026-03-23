export interface Project {
  id: string
  title: string
  county: string
  acreage: string
  workType: string
  description: string
  testimonial?: {
    quote: string
    author: string
  }
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Systematic Tile Drainage Installation',
    county: 'Grey County',
    acreage: '80 acres',
    workType: 'Tile Drainage',
    description:
      'Full systematic tile drainage installation on heavy clay farmland. GPS-guided installation at 30-foot spacing with outlet to municipal drain. Placeholder — will be replaced with actual project details and photos from Byron.',
  },
  {
    id: 'project-2',
    title: 'Erosion Control & Waterway Stabilization',
    county: 'Bruce County',
    acreage: '25 acres',
    workType: 'Erosion Control',
    description:
      'Grassed waterway construction and bank stabilization to address severe erosion on a sloped field. Placeholder — will be replaced with actual project details and photos from Byron.',
  },
  {
    id: 'project-3',
    title: 'Tile Repair & System Extension',
    county: 'Simcoe County',
    acreage: '120 acres',
    workType: 'Tile Repair & Locating',
    description:
      'Located and repaired damaged tile lines in an existing system, then extended coverage to previously undrained areas. Placeholder — will be replaced with actual project details and photos from Byron.',
  },
]
