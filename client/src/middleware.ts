import { NextRequest, NextResponse } from 'next/server'
import { PAGES_URL } from './config/pages-url.config'
import { EnumTokens } from './services/auth-token.service'

export async function middleware(request: NextRequest) {
	const { url, cookies } = request

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthPage = url.includes(PAGES_URL.authRoot)

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL(PAGES_URL.HOME, request.url))
	}

	if (isAuthPage) {
		return NextResponse.next()
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL(PAGES_URL.LOGIN, request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/main/profile/:path*', '/auth/:path*'],
}
