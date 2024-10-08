import { IsArray, IsNumber, IsString, IsUrl } from 'class-validator'

export class VideoDto {
	@IsString()
	title: string

	@IsString()
	description: string

	@IsString()
	@IsUrl()
	url: string

	@IsString()
	@IsUrl()
	tizerUrl: string

	@IsNumber()
	duration: number

	@IsArray()
	tags?: string[]
}
