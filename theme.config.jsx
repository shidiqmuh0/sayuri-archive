import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
    head() {
        const { asPath, defaultLocale, locale } = useRouter()
        const { frontMatter,title } = useConfig()
        const url =
          'https://sayuri-archive.com' +
          (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
     
        return (
          <>
            <title>{title} | Sayuri Archive</title>
          </>
        )
      }
  ,
  logo: <span>Sayuri Archive</span>,
  project: {
    link: 'https://github.com/shidiqmuh0/sayuri-archive'
  },
  footer: {
    content: (
      <span>
        Sayuri Archive {new Date().getFullYear()} ©{' '}
      </span>
    )
  }
}