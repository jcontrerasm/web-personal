import { ProductModel } from '@interfaces/models/productModel'
import { ProductDTO } from '@interfaces/dtos/productDTO'

export const fromModel = (model: ProductModel): ProductDTO => {
  return {
    id: model.id,
    url: model.url,
    title: model.title,
    album_id: model.albumId,
    thumbnail_url: model.thumbnailUrl,
    amount: model.amount,
    price: model.price
  }
}

export const fromDTO = (dto: ProductDTO): ProductModel => {
  return {
    id: dto.id,
    url: dto.url,
    title: dto.title,
    albumId: dto.album_id,
    thumbnailUrl: dto.thumbnail_url,
    amount: dto.amount,
    price: dto.price,
    totalPrice: dto.amount * dto.price
  }
}

export const productMapper = { fromModel, fromDTO }
