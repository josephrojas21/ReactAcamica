export const baseUrl = 'https://aerolab-challenge.now.sh/'

export const fetchParams = () => {

}
const apiHeaders = {
'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjOWIxNmU0OTYwMDAwNjBkMDBhNjgiLCJpYXQiOjE1MTA3NzU1NzR9.3RXwYx0ehfQKYZfZ2XRcDr-jbSwmZI50T1l921fbU4E',
}

const api = {
  getUser: async () => {
    fetch(baseUrl + 'user/me', fetchParams('GET'))
  },
  addPoints: async value => {
    fetch(baseUrl + 'user/points', fetchParams('POST', { amount: amount }))
  },
  getHistory: async () => {
    fetch(baseUrl + 'user/history', fetchParams('GET'))
  },
  redeemProduct: async productId => {
    fetch(baseUrl + 'redeem', fetchParams('POST', { productId: productId }))
  },
  getProducts: async () => {
    fetch(baseUrl + 'products', fetchParams('GET'))
  },
  getProductsHigherPrice: (products) => {

  },
  getProductsLowerPrice: (products) => {
    const productsSortered = products.sort((a, b) => {
      if(a.cost < b.cost) return -1;
      if(a.cost > b.cost) return 1;
      return 0;
    })
    return productsSortered;
  }
}

export default api