class Item {
  constructor() {
    this.item = [];
  }
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
    const fill = new Item();
  }
  static isOnSale() {
    const sale = this.it;
    return sale;
  }
}
console.log(Item.findById(1).isOnSale());
