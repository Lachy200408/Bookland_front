const BASE_URL = {
	AUTH: '/auth',
	BOOK: '/book',
	BOOKFILE: '/bookfile',
	USER: '/user'
}

const DINAMYC_URL = {
	USER_ID: (id) => BASE_URL.USER + '/' + id,
	BOOK_ID: (id) => BASE_URL.BOOK + '/' + id,
	BOOKFILE_ID: (id) => BASE_URL.BOOKFILE + '/' + id,
	BOOKFILE_DOWNLOAD: (id) => BASE_URL.BOOKFILE + '/download/' + id,
	DELETESHARE: (id) => BASE_URL.BOOK + '/share/' + id
}

export const API = {
	URL: 'https://bookland-back.onrender.com',
	AUTH: {
		LOGIN: BASE_URL.AUTH + '/login',
		SIGNUP: BASE_URL.AUTH + '/signup',
		LOGOUT: BASE_URL.AUTH + '/logout',
		CHECK: BASE_URL.AUTH + '/token'
	},
	BOOKS: {
		GETALL: BASE_URL.BOOK,
		GETBYID: DINAMYC_URL.BOOK_ID,
		CREATE: BASE_URL.BOOK,
		UPDATE: DINAMYC_URL.BOOK_ID,
		DELETE: DINAMYC_URL.BOOK_ID,
		SHARE: BASE_URL.BOOK + '/share',
		DELETESHARE: DINAMYC_URL.DELETESHARE
	},
	BOOKFILE: {
		UPLOAD: BASE_URL.BOOKFILE,
		GETBYID: DINAMYC_URL.BOOKFILE_ID,
		DOWNLOAD: DINAMYC_URL.BOOKFILE_DOWNLOAD
	},
	USER: {
		UPDATE: BASE_URL.USER,
		GETSOCIAL: BASE_URL.USER + '/social'
	}
}
