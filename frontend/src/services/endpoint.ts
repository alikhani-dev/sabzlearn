const endpoint = {
	authentication: {
		register: 'auth/register',
		login: 'auth/login',
		me: 'auth/me'
	},
	course: {
		createSession: 'courses/:id/sessions',
		register: 'courses/:id/register',
		one: 'courses/:shortName',
		sessions: 'courses/sessions',
		related: 'related/canvas',
		create: 'courses',
		all: 'courses'
	},
	menus: {
		topBar: 'menus/topbar',
		create: 'menus',
		all: 'menus'
	},
	category: {
		create: 'category'
	},
	article: {
		create: 'articles',
		all: 'articles',
		one: 'articles/:shortName'
	},
	comments: {
		add: 'comments'
	}
}

export default endpoint
