import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { VideoDto } from './video.dto'
import { VideoService } from './video.service'

@Controller('video')
export class VideoController {
	constructor(private readonly videoService: VideoService) {}

	@Get()
	async getAll() {
		return this.videoService.getAll()
	}

	@Get('id/:id')
	async getVideoById(@Param('id') id: string) {
		return this.videoService.getById(id)
	}

	@Get('title/:title')
	async getVideoByTitle(@Param('title') title: string) {
		return this.videoService.getByTitle(title)
	}

	@Post()
	@UsePipes(new ValidationPipe({ transform: true }))
	@HttpCode(200)
	async create(@Body() dto: VideoDto) {
		return this.videoService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put('update/:id')
	async update(@Body() dto: VideoDto, @Param('id') id: string) {
		return this.videoService.update(dto, id)
	}

	@Delete(':id')
	@HttpCode(200)
	async delete(@Param('id') id: string) {
		return this.videoService.delete(id)
	}

	@Post('favorite/:id')
	@HttpCode(200)
	async addToFavorites(
		@Param('id') id: string,
		@Body('userId') userId: string,
	): Promise<boolean> {
		const result = await this.videoService.addToFavorites(userId, id)
		return result
	}
}
