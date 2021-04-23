const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Yodo Ui',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'D:\\projects\\YodoUI\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Yodo Ui',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'D:\\projects\\YodoUI',
          templates:
            'D:\\projects\\YodoUI\\node_modules\\docz-core\\dist\\templates',
          docz: 'D:\\projects\\YodoUI\\.docz',
          cache: 'D:\\projects\\YodoUI\\.docz\\.cache',
          app: 'D:\\projects\\YodoUI\\.docz\\app',
          appPackageJson: 'D:\\projects\\YodoUI\\package.json',
          appTsConfig: 'D:\\projects\\YodoUI\\tsconfig.json',
          gatsbyConfig: 'D:\\projects\\YodoUI\\gatsby-config.js',
          gatsbyBrowser: 'D:\\projects\\YodoUI\\gatsby-browser.js',
          gatsbyNode: 'D:\\projects\\YodoUI\\gatsby-node.js',
          gatsbySSR: 'D:\\projects\\YodoUI\\gatsby-ssr.js',
          importsJs: 'D:\\projects\\YodoUI\\.docz\\app\\imports.js',
          rootJs: 'D:\\projects\\YodoUI\\.docz\\app\\root.jsx',
          indexJs: 'D:\\projects\\YodoUI\\.docz\\app\\index.jsx',
          indexHtml: 'D:\\projects\\YodoUI\\.docz\\app\\index.html',
          db: 'D:\\projects\\YodoUI\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
