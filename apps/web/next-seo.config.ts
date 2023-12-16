import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Biokript',
  defaultTitle: 'Biokript',
  description: 'World\'s First Hybrid Shariah-Compliant Crypto Exchange.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@Biokript',
    site: '@Biokript',
  },
  openGraph: {
    title: 'Biokript - World\'s First Hybrid Shariah-Compliant Crypto Exchange.',
    description:
      'World\'s First Hybrid Shariah-Compliant Crypto Exchange.',
    images: [{ url: 'https://biokript.com/favicon.ico' }],
  },
}
