import getConfig from 'next/config'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

class ApiRoute {
    constructor(
        private routes: { [p: string]: string },
        private apiRoute: string
    ) {
    }

    public get(route: string): string {
        return !(route in this.routes) ? "" : `${this.apiRoute}/${this.routes[route]}`;
    }

    getImage(image: string) {
        return `${this.apiRoute}/api/public/${image}`;
    }
}

const api = serverRuntimeConfig.WEB ?? publicRuntimeConfig.WEB;
const apiRoute: ApiRoute = new ApiRoute({
    login: "api/auth/login",
    webs: "api/webs",
    update: "api/auth",
    register: "api/auth/signup",
}, api);
export { apiRoute }
