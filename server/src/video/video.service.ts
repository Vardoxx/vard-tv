import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { VideoDto } from './video.dto'

@Injectable()
export class VideoService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.video.findMany({
			orderBy: {
				createdAt: 'desc',
			},
		})
	}

	async getById(id: string) {
		const video = await this.prisma.video.findUnique({
			where: {
				id,
			},
		})

		if (!video) {
			throw new NotFoundException(`Video with id ${id} not found!`)
		}

		return video
	}

	async getByTitle(title: string) {
		const video = await this.prisma.video.findUnique({
			where: {
				title,
			},
		})

		if (!video) {
			throw new NotFoundException(`Video with title "${title}" not found!`)
		}

		return video
	}

	async create(dto: VideoDto) {
		const oldVideo = await this.prisma.video.findFirst({
			where: {
				OR: [{ title: dto.title }, { url: dto.url }],
			},
		})

		if (oldVideo) {
			throw new BadRequestException(`This is video already exist`)
		}

		const video = {
			title: dto.title,
			description: dto.description,
			url: dto.url,
			duration: dto.duration,
			tags: dto.tags,
		}

		return this.prisma.video.create({
			data: video,
		})
	}

	async update(dto: Partial<VideoDto>, id: string) {
		const video = await this.prisma.video.findUnique({
			where: { id },
		})

		if (!video) {
			throw new NotFoundException(`Video with id ${id} not found!`)
		}

		const data = { ...dto }

		return this.prisma.video.update({
			where: { id },
			data,
			select: {
				title: true,
				description: true,
				url: true,
				duration: true,
				tags: true,
			},
		})
	}

	async delete(id: string) {
		const video = await this.prisma.video.findUnique({
			where: {
				id,
			},
		})

		if (!video) throw new BadRequestException(`Video with ${id} not found`)

		await this.prisma.video.delete({
			where: {
				id,
			},
		})

		return { success: true, id: id }
	}

	async addToFavorites(userId: string, videoId: string): Promise<boolean> {
		const existingFavorite = await this.prisma.favorite.findUnique({
			where: {
				userId_videoId: {
					userId,
					videoId,
				},
			},
		})

		if (existingFavorite) {
			return true
		}

		await this.prisma.favorite.create({
			data: {
				userId,
				videoId,
			},
		})

		return true
	}
}
