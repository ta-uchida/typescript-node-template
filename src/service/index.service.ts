interface Data {
  hoge: string;
}

class IndexService {
  constructor() {}

  getData(): Data {
    return {
      hoge: 'Hello world! Express',
    };
  }
}

const indexService = new IndexService();
export default indexService;
