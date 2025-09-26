interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Market Time',
    description: `MarketTime offers B2B Wholesalers, Sales Agencies, and Retail Buyers a unified B2B order writing and B2B ecommerce platform.`,
    imgSrc: '/static/images/projects/markettime.png',
    href: 'https://markettime.com/',
  },
  {
    title: 'Carbon reduction platform',
    description: `The digital platform that enables people and companies to turn everyday positive actions into valuable and scalable global change.`,
    imgSrc: '/static/images/projects/crp.png',
    href: 'https://kissthebug.github.io/blog/blog/tram',
  },
  {
    title: 'Envision Ecommerce',
    description: `Empower your eCommerce success with end-to-end e-commerce solutions tailored for your specific business needs.`,
    imgSrc: '/static/images/projects/envision.png',
    href: 'https://envisionecommerce.com/',
  },
  {
    title: 'Texas Premier Realty',
    description: `Frisco, Plano & DFW Real Estate Experts - Buy, Sell, and Invest with Confidence.`,
    imgSrc: '/static/images/projects/tpr.png',
    href: 'https://www.texaspremierrealty.com/',
  },
]

export default projectsData
