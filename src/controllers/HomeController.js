class HomeController {
  async index(req, res) {
    res.json('Easy Desk API');
  }
}

export default new HomeController();
