import { ContextApi } from '@pancakeswap/localization'
import memoize from 'lodash/memoize'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Biokript',
  description:
    'World\'s First Hybrid Shariah-Compliant Crypto Exchange.',
  image: `https://biokript.com/favicon.ico`,
}

interface PathList {
  paths: { [path: string]: { title: string; basePath?: boolean; description?: string; image?: string } }
  defaultTitleSuffix: string
}

const getPathList = (t: ContextApi['t']): PathList => {
  return {
    paths: {
      '/': { title: t('Home') },
      '/info': {
        title: `${t('Overview')} - ${t('Info')}`,
        description: 'View statistics for Biokript exchanges.',
        image: `https://biokript.com/favicon.ico`,
      },
      '/info/pairs': {
        title: `${t('Pairs')} - ${t('Info')}`,
        description: 'View statistics for Biokript exchanges.',
        image: `https://biokript.com/favicon.ico`,
      },
      '/info/tokens': {
        title: `${t('Tokens')} - ${t('Info')}`,
        description: 'View statistics for Biokript exchanges.',
        image: `https://biokript.com/favicon.ico`,
      },
    },
    defaultTitleSuffix: t('Biokript'),
  }
}

export const getCustomMeta = memoize(
  (path: string, t: ContextApi['t'], _: string): PageMeta => {
    const pathList = getPathList(t)
    const pathMetadata =
      pathList.paths[path] ??
      pathList.paths[Object.entries(pathList.paths).find(([url, data]) => data.basePath && path.startsWith(url))?.[0]]

    if (pathMetadata) {
      return {
        title: `${pathMetadata.title}`,
        ...(pathMetadata.description && { description: pathMetadata.description }),
        image: pathMetadata.image,
      }
    }
    return null
  },
  (path, t, locale) => `${path}#${locale}`,
)
