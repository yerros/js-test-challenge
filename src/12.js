const onSale = [];
class Item {
  static list() {
    return [
      {
        id: 1,
        name: "Kecap",
        sale_start_at: new Date("2018-10-01"),
        sale_end_at: new Date("2018-10-10")
      },
      {
        id: 2,
        name: "Sambal",
        sale_start_at: new Date("2018-10-15"),
        sale_end_at: new Date("2018-10-30")
      },
      {
        id: 3,
        name: "Merica",
        sale_start_at: new Date("2018-08-01"),
        sale_end_at: new Date("2018-08-31")
      },
      {
        id: 4,
        name: "Detergen",
        sale_start_at: new Date("2019-02-10"),
        sale_end_at: new Date("2019-10-10")
      },
      {
        id: 5,
        name: "Sapu",
        sale_start_at: new Date("2017-09-01"),
        sale_end_at: new Date("2030-07-15")
      }
    ];
  }
  static findById(id) {
    const findUser = this.list().find(item => item.id === id);
    onSale.push(findUser);
    return this;
  }
  static isOnSale() {
    const currentYear = new Date().getFullYear();
    const endYear = onSale[0].sale_end_at.toString();
    const year = endYear.split(" ")[3];
    if (year > currentYear) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Item;
