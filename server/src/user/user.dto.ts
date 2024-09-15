import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator'

export class UserDto {
	@IsEmail()
	@IsOptional()
	email: string

	@MinLength(6, {
		message: 'Password must be at least 6 characters long',
	})
	@IsOptional()
	@IsString()
	password: string
}
