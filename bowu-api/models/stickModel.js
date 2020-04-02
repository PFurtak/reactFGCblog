const db = require('./conn');

class StickModel {
  constructor(id, title, mfg, parts, platform, purchaselink, pictures) {
    this.id = id;
    this.title = title;
    this.mfg = mfg;
    this.parts = parts;
    this.platform = platform;
    this.purchaselink = purchaselink;
    this.pictures = pictures;
  }
  static async getAllSticks() {
    try {
      const response = await db.any(`SELECT *
          FROM arcadesticks;`);
      console.log(response);
      return response;
    } catch (error) {
      console.error('error: ', error);
      return error;
    }
  }
  static async getById(id) {
    try {
      const res = await db.any(`SELECT *
      FROM arcadesticks
      WHERE arcadesticks.id = ${id};`);
      console.log(res);
      return res;
    } catch (error) {
      console.error('ERROR: ', error);
    }
  }
  static async getRevById(id) {
    try {
      const res = await db.any(`SELECT *
      FROM stickreviews
      WHERE stickreviews.stickid = ${id};`);
      console.log(res);
      return res;
    } catch (error) {
      console.error('ERROR: ', error);
    }
  }
}

module.exports = StickModel;
