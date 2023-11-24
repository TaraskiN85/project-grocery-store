import axios from 'axios';
export class QueryAPI {
  constructor() {
    this.keyword = '';
    this.page = 1;
    this.limit = '';
  }
  async searchingQuery() {
    const instance = axios.create({
      baseURL: 'https://food-boutique.b.goit.study/api/products',
      params: {
        keyword: this.keyword,
        page: this.page,
        limit: this.limit,
      },
    });
    const resp = await instance.get();
    // console.log(resp.data);
    return resp.data;
  }
}
