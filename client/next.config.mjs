/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	async redirects() {
		const baseUrl = '/main/home'
		return [
			{
				source: '/',
				destination: baseUrl,
				permanent: true,
			},
			{
				source: '/main',
				destination: baseUrl,
				permanent: true,
			},
		]
	},
}

export default nextConfig
