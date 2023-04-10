import { ProductModel } from '@interfaces/models/productModel'

export const productMock: ProductModel = {
  id: 1,
  url: 'https://via.placeholder.com/600/92c952',
  title: 'accusamus beatae ad facilis cum similique qui sunt',
  albumId: 1,
  thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  amount: 1,
  price: 34,
  totalPrice: 34
}

export const productListMock: ProductModel[] = [
  {
    id: 1,
    url: 'https://via.placeholder.com/600/92c952',
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    albumId: 1,
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    amount: 1,
    price: 34,
    totalPrice: 34
  },
  {
    id: 2,
    url: 'https://via.placeholder.com/600/771796',
    title: 'reprehenderit est deserunt velit ipsam',
    albumId: 1,
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
    amount: 2,
    price: 55,
    totalPrice: 110
  },
  {
    id:3 ,
    url: 'https://via.placeholder.com/600/24f355',
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    albumId: 1,
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    amount: 3,
    price: 27,
    totalPrice: 81
  }
]
