export default {
	moduleConfig: {
		account: {
			description:
				'This module is used to handle a users account. You can sign-up, sign-ip and interact with your account.',
			warning: 'This module is mandatory to use the other modules',
		},
		users: {
			description:
				'This module is used to interact with the users service with a backend SDK, mandatory for this service.',
		},
		databases: {
			description:
				'This module will allow you to use the database. You will be able to create, read, update and delete data.',
		},
		storage: {
			description:
				'This module will allow you to communicate with storage buckets and the files inside it.',
		},
	},
	storage: {
		title: 'It looks like we have some file in a bucket',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet mollis lectus ut iaculis. In neque ligula, auctor vitae lorem in, venenatis lobortis purus. Ut ac rhoncus ex, ut egestas leo. Mauris nec rutrum magna, sit amet tincidunt justo. Sed pellentesque vitae nibh eget imperdiet. Ut sodales commodo turpis, rutrum porttitor odio porttitor sed. Curabitur et turpis vitae mauris pulvinar consequat non ut ligula. Aenean mi orci, cursus ac libero id, consequat elementum mi. Etiam gravida quam eget tempus maximus. Phasellus et diam congue, accumsan felis eget, egestas arcu. Maecenas cursus sapien id risus faucibus aliquet. Proin eget dictum nulla. Phasellus odio nisi, tempor at lorem sed, commodo gravida tellus.',
		link: 'It looks like there is something missing isn’t-it ?',
		'count#zero': 'You have {count} file in this bucket',
		'count#one': 'You have {count} file in this bucket',
		'count#other': 'You have {count} files in this bucket',
		upload: {
			title: 'Add the missing key to the bucket',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet mollis lectus ut iaculis. In neque ligula, auctor vitae lorem in, venenatis lobortis purus. Ut ac rhoncus ex, ut egestas leo. Mauris nec rutrum magna, sit amet tincidunt justo. Sed pellentesque vitae nibh eget imperdiet. Ut sodales commodo turpis, rutrum porttitor odio porttitor sed. Curabitur et turpis vitae mauris pulvinar consequat non ut ligula. Aenean mi orci, cursus ac libero id, consequat elementum mi. Etiam gravida quam eget tempus maximus. Phasellus et diam congue, accumsan felis eget, egestas arcu. Maecenas cursus sapien id risus faucibus aliquet. Proin eget dictum nulla. Phasellus odio nisi, tempor at lorem sed, commodo gravida tellus.',
			button: 'Upload files',
		},
	},
	users: {
		title: 'Let’s see who can help us...',
	},
	login: {
		title: 'Access to your account',
		connection: 'Connection',
		noAccount: 'You don’t have an account yet ? ',
		signUp: 'Sign-up',
		googleSignIn: 'Sign-in with Google',
		password: 'Password',
		email: 'Email address',
	},
	home: {
		startButton: 'Start the aventure',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget mattis\n' +
			'tellus. Proin feugiat, magna at posuere bibendum, urna nisl pulvinar\n' +
			'ipsum, eu eleifend justo sem quis risus. Vestibulum fringilla varius\n' +
			'sagittis.',
	},
	databases: {
		coordinates: {
			title: 'What do we have here...',
			list: {
				title: 'Coordinates:',
			},
			form: {
				title: 'You found a new coordinate ?',
				submitButton: 'Add this coordinate',
			},
			labels: {
				name: 'Name',
				latitude: 'Latitude',
				longitude: 'Longitude',
				picture: 'Picture',
			},
		},
	},
	register: {
		title: 'Create your account',
		signUpButton: 'Sign-up',
		alreadyHaveAccount: 'Already have an account ? ',
		signIn: 'Sign-in',
		name: 'Name',
		email: 'Email address',
	},
	functions: {
		title: 'Our database is under attack ...',
		description:
			'Our clues collection you’ve retrieved so far isn’t secure ... any user can access the documents it contains. However, we can prevent anyone but you from accessing it, and we’re going to use a Cloud Function to do just that!',
		addButton: 'Add a destination',
		addButtonLoading: 'Loading ...',
	},
} as const;
