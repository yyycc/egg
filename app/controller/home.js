'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg?';
  }
  async cyy() {
    const { ctx } = this;
    ctx.body = 'hi, cyy?';
  }
}

module.exports = HomeController;
