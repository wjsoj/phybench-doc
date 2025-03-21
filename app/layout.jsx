import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const banner = <Banner storageKey="some-key">phybench 文档站现已发布 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>Phybench Doc</b>}
    // ... Your additional navbar options
  />
)
const footer = <Footer>
  <div className='flex flex-col items-center space-y-4'>
    MIT {new Date().getFullYear()} Build with © 
    <a href="https://nextra.site" target="_blank">
      Nextra
    </a>.
    <div className=' font-semibold text-sky-800 dark:text-sky-300'>
      phybench 项目组
    </div>
  </div>
</Footer>

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/wjsoj/phybench-doc"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}