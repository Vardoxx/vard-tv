class URL {
	root = '/main'
	HOME = `${this.root}/home`
	CATEGORY = `${this.root}/category`
	STORE = `${this.root}/shop`

	PROFILE = `${this.root}/profile`

	authRoot = `/auth`
	LOGIN = `${this.authRoot}/login`
	REGISTER = `${this.authRoot}/register`
}

export const PAGES_URL = new URL()
