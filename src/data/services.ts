export const services = [
  {
    num: '01',
    title: 'UPS Supply',
    desc: 'Online double-conversion UPS, 1 kVA to 600 kVA, single & three phase.',
    items: ['Modular UPS (N+1)', 'Industrial & data center UPS', 'Parallel redundant systems'],
  },
  {
    num: '02',
    title: 'UPS Installation Dubai',
    desc: 'Full UPS installation support in Dubai and across the UAE — end-to-end, to commissioning standard.',
    items: [
      'Cable termination & power distribution',
      'UPS installation & setup, all capacities',
      'Startup, commissioning & testing',
      'Full installation documentation',
    ],
  },
  {
    num: '03',
    title: 'UPS Service & AMC',
    desc: 'Preventive maintenance, troubleshooting and Annual Maintenance Contracts that keep uptime intact.',
    items: ['Preventive & corrective maintenance', 'Troubleshooting & emergency support, 24/7', 'Annual Maintenance Contracts (AMC)'],
  },
  {
    num: '04',
    title: 'Battery Installation & Replacement',
    desc: 'New battery installation and VRLA, lithium-ion battery bank replacement, sized and commissioned.',
    items: ['New battery installation & connection', 'Battery replacement & capacity testing', 'Responsible disposal'],
  },
  {
    num: '05',
    title: 'Battery Monitoring',
    desc: 'Real-time visibility into the health of every cell.',
    items: ['Voltage & temperature monitoring', 'Predictive maintenance alerts', 'Remote BMS dashboards'],
  },
  {
    num: '06',
    title: 'Testing & Commissioning',
    desc: 'System verification, load testing and functional checks before go-live.',
    items: ['FAT & SAT', 'Load bank testing & functional checks', 'Customer training'],
  },
  {
    num: '07',
    title: 'Site Visit & Site Survey',
    desc: 'Site inspection and technical survey of existing UPS, batteries and electrical infrastructure.',
    items: ['Load & electrical review', 'Cable & bypass arrangement check', 'Battery cabinet & access planning'],
  },
] as const;

export const engagementModels = [
  {
    title: 'Full Turnkey',
    desc: 'We supply the UPS and batteries, then install, test and commission — one contract, one point of contact.',
  },
  {
    title: 'You Supply the UPS — We Support the Installation',
    desc: "Already bought a UPS or batteries from another supplier or dealer? Our engineers handle installation, battery connection, testing and commissioning to full commissioning standard.",
  },
  {
    title: 'Service & Replacement Only',
    desc: 'Need a battery swap, a health check or a one-off repair on an existing system? We take the job without a supply contract attached.',
  },
] as const;
