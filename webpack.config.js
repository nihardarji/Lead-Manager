module.exports = {
    entry: [
        '@babel/polyfill', 
        './leadmanager/frontend/src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}