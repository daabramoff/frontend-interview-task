class Parking {
  data = [];
  driveInButton = document.getElementById('park');
  driveOutButton = document.getElementById('leave');

  constructor(placesCount) {
    this.placesCount = placesCount;
    this.initData();
    this.renderTable();
    this.driveInButton.onclick = this.driveIn;
  }

  initData = () => {
    for (let i = 0; i < this.placesCount; i++) {
      this.data.push({id: i + 1, status: "Свободно"});
    }
  }

  tableRow = (index, status) => {
    let row = `<tr><td>${index}</td><td>${status}</td></tr>`;
    return row;
  }

  renderTable = () => {
    let tbody = document.getElementById('parkingTable');
    let tableRows = this.data.map((item) => {
      return this.tableRow(item.id, item.status)
    })
    tbody.innerHTML = tableRows.join('');
  }

  get getFreePlaces() {
    return this.data.reduce((sum, item) => {
        return item.status === "Свободно" ? sum + 1 : sum
      },0)
  }

  driveIn = () => {

  }

  updateRow = () => {

  }
}

let parking = new Parking(10);
