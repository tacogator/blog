module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `What the SaaS! | Kubernetes | Javascript | Python | SaaS`,
    // Default title of the page
    siteTitleAlt: `What the SaaS | Kubernetes | Javascript | Python | SaaS`,
    // Will be used to generate absolute URLs for og:image, sitemap, etc.
    siteUrl: `https://whatsaas.xyz`,
    // Used for SEO
    siteDescription: `What the SaaS blog.  Time-saving tips and how-to articles about Kubernetes, Javascript, Python.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.png`,
    // Twitter Handle
    author: `Tacogator`,
    // Navigation links
    navigation: [
      {
        title: `Home`,
        slug: `/`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
      {
        title: `Topics`,
        slug: `/tags`,
      },
    ],
    externalLinks: [
      {
        name: `twitter`,
        url: `https://twitter.com/nacho_codes`,
      },
      {
        name: `github`,
        url: `https://github.com/tacogator/gatsby-themes`,
      }
    ],
  },
  plugins: [
    {
      resolve: `@tacogator/gatsby-theme-blog-material-clarisse`,
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `What the SaaS | Kubernetes | Javascript | Python`,
        short_name: `What the SaaS | Kubernetes | Javascript | Python`,
        description: `What the SaaS | Kubernetes | Javascript | Python`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#00897B`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://gmail.us20.list-manage.com/subscribe/post?u=786601ed01260900f7a6d1546&amp;id=4e6bf36386', 
          timeout: 3500, 
      },
    }
  ],
};
