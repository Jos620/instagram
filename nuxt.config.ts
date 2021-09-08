// prettier-ignore
export default {
  /**
   * |------------------------------------------------------------------------|
   * | Target - JAM Stack                                                     |
   * |------------------------------------------------------------------------|
   */
  target: 'static',

  /**
   * |------------------------------------------------------------------------|
   * | Global Head                                                            |
   * |------------------------------------------------------------------------|
   */
  head: {
    // Title -----------------------------------------------------------------|
    title: process.env.SEO_TITLE,

    // Meta Tags -------------------------------------------------------------|
    meta: [
      { charset: 'utf-8'                                                                   },
      { name: 'viewport',         content: 'width=device-width, initial-scale=1'           },
      { name: 'description',      content: process.env.SEO_DESCRIPTION, hid: 'description' },
      { name: 'format-detection', content: 'telephone=no'                                  },
			{ name: 'msapplication-TileColor', content: '#ffffff'                                },
			{ name: 'theme-color',             content: '#000'                                   },

      // SEO Tags ------------------------------------------------------------|
      { name: 'title',                   content: process.env.SEO_TITLE                    },
			{ name: 'description',             content: process.env.SEO_DESCRIPTION              },

			// Open Graph / Facebook -----------------------------------------------|
			{ property: 'og:type',             content: 'website'                                },
			{ property: 'og:url',              content: process.env.SEO_PERMALINK                },
			{ property: 'og:title',            content: process.env.SEO_TITLE                    },
			{ property: 'og:description',      content: process.env.SEO_DESCRIPTION              },
			{ property: 'og:image',            content: process.env.SEO_PREVIEW                  },

			// Twitter --------------------------------------------------------------|
			{ property: 'twitter:card',        content: 'summary_large_image'                    },
			{ property: 'twitter:url',         content: process.env.SEO_PERMALINK                },
			{ property: 'twitter:title',       content: process.env.SEO_TITLE                    },
			{ property: 'twitter:description', content: process.env.SEO_DESCRIPTION              },
			{ property: 'twitter:image',       content: process.env.SEO_PREVIEW                  },
    ],

    // Link Tags -------------------------------------------------------------|
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'                 },

      // Google fonts --------------------------------------------------------|
      { rel: 'preconnect', href: 'https://fonts.googleapis.com'                 },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },

      // Remix icon ----------------------------------------------------------|
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' },
    ],
  },

  /**
   * |------------------------------------------------------------------------|
   * | Global CSS                                                             |
   * |------------------------------------------------------------------------|
   */
  css: [
    '~/assets/scss/reset.scss',
  ],

  /**
   * |------------------------------------------------------------------------|
   * | Vue Plugins                                                            |
   * |------------------------------------------------------------------------|
   */
  plugins: [],

  /**
   * |------------------------------------------------------------------------|
   * | Auto Import Components                                                 |
   * |------------------------------------------------------------------------|
   */
  components: true,

  /**
   * |------------------------------------------------------------------------|
   * | Nuxt Modules for Development                                           |
   * |------------------------------------------------------------------------|
   */
  buildModules: [
    // TypeScript ------------------------------------------------------------|
    '@nuxt/typescript-build',

    // WindiCSS --------------------------------------------------------------|
    'nuxt-windicss',

    // DotEnv variables ------------------------------------------------------|
    '@nuxtjs/dotenv',

    // Composition API -------------------------------------------------------|
    '@nuxtjs/composition-api/module',
  ],

  /**
   * |------------------------------------------------------------------------|
   * | Nuxt Modules                                                           |
   * |------------------------------------------------------------------------|
   */
  modules: [
    // Progressive Web App ---------------------------------------------------|
    '@nuxtjs/pwa',

    // Cookies ---------------------------------------------------------------|
    ['cookie-universal-nuxt', {
      alias: 'cookiz'
    }]
  ],

  /**
   * |------------------------------------------------------------------------|
   * | PWA Configuration                                                      |
   * |------------------------------------------------------------------------|
   */
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
}
