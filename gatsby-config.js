module.exports = {
  siteMetadata: {
    title: `Clinic Market Guadalajara`,
    titleTemplate: "%s · Venta de Insumos Médicos",
    description:
      "Empresa mexicana especializada en la venta de insumos médicos a instituciones y particulares. Servicio a domicilio Guadalajara.",
    siteUrl: `https://www.clinicmarketguadalajara.com`,
    image: "/logo.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    keywords: `insumos, medicos, guadalajara, clinica, hospital, doctor, cubrebocas, anticepticos, estetoscopio, termometro`,
  },
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    `gatsby-plugin-layout`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      }
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src`,
      }
    },
    `gatsby-plugin-react-helmet`,
  ],
}
