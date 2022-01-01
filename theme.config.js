export default {
  github: 'https://github.com/shuding/nextra',
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' – Nextra',
  logo: (
    <>
      <img src="/openzoologo.png"/>
      <span style={{fontSize:22}} className="mr-2 ml-2 font-extrabold hidden md:inline">OPENZOO</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        DOCUMENTS
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Nextra: the Next.js site builder" />
      <meta name="og:description" content="OpenZoo is the NFT Marketplace of the Zoo Ecosystem, which features both artworks and game assets." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://docs.openzoo.io/openzoodocs2.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="og:title" content="OpenZoo: Documentation" />
      <meta name="og:image" content="https://docs.openzoo.io/openzoodocs2.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/openzoo180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/openzoo192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/openzoo32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/openzoo96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/openzoo16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <> {new Date().getFullYear()} © OpenZoo team.</>,
  unstable_faviconGlyph: '👋',
}
