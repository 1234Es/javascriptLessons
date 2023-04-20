import utils from './someFile.js'

const userConfig = {
    appName: "This is an App",
    url: "https://someurl.com",
    admin: "esenurer@gmail.co.uk"
}

const app = config(userConfig)

const importantFunction = () => {
    return null
}

app.hello()

export default app