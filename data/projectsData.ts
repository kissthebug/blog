interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Texas Premier Realty',
    description: `Frisco, Plano & DFW Real Estate Experts - Buy, Sell, and Invest with Confidence.`,
    imgSrc: '/static/images/tpr.png',
    href: '',
  },
  {
    title: 'Carbon reduction platform',
    description: `The digital platform that enables people and companies to turn everyday positive actions into valuable and scalable global change.`,
    imgSrc: '/static/images/crp.png',
    href: 'https://kissthebug.github.io/blog/blog/tram',
  },
]

export default projectsData
