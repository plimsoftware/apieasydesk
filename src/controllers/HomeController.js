class HomeController {
  async index(req, res) {
    res.json('OnlineStore API');
  }
}

export default new HomeController();
