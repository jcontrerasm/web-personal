import { ProductModel } from '@interfaces/models/productModel'
import { ProductDTO } from '@interfaces/dtos/productDTO'
import { productMapper } from '@mappers/productMapper'
import { REQUEST_MESSAGES } from '@utils/constants/messages'
import { apis } from '@environments/environments'
import { http } from '@configs/http'

const URL = apis.products

export const productService = {
  findAll: () => async (): Promise<ProductModel[]> => {
    try {
      const response = await http<ProductDTO[]>(`${URL}`)
      const products = response.map(item => productMapper.fromDTO(item))

      return products
    } catch (error) {
      throw new Error(REQUEST_MESSAGES.ES.ERROR)
    }
  }
}
