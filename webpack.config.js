const path=require('path');
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
module.exports={
    entry:{
        app:'./src/index.js'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'./dist'),
        publicPath:'/dist'
    },
    module:{
        rules:[{
            test:/\.js$/,
            loader: 'babel-loader',
            exclude:'/node_modules'
        },
        {
            test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
              loader:'css-loader',
              options:{sourceMap:true}
          },
          {
            loader:'sass-loader',
            options:{sourceMap:true}
          },
          {
            loader:'postcss-loader',
            options:{sourceMap:true, config:{path: 'src/js/postcss.config.js'}}
          }
        ]
        },{
          test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
             {
                 loader: 'file-loader?name=./src/fonts/[name].[ext]'
             },
             
         ]

        },
        {
            test: /\.css$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                    loader:'css-loader',
                    options:{sourceMap:true}
                },
                {
                  loader:'postcss-loader',
                  options:{sourceMap:true, config:{path: 'src/js/postcss.config.js'}}
                }
              ]
        }]
    },
    devServer:{
        overlay:true
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css",
        })
      ]
}