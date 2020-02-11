class User {
  static user() {
    return [
      { id: 1, username: "mul14", name: "Mulia" },
      { id: 2, username: "durjaka", name: "Arifandi" },
      { id: 3, username: "johndoe", name: "John Doe" },
      { id: 4, username: "norisa", name: "Norisa" },
      { id: 5, username: "sagara", name: "Sasuke Sagara" }
    ];
  }
  static findByUsername(username) {
    const findUser = this.user().find(item => item.username === username);
    return findUser;
  }
}
module.exports = User;
