class Parking {
  data = [];
  parkButton = document.getElementById('park');
  leaveButton = document.getElementById('leave');

  constructor(placesCount) {
    this.placesCount = placesCount;
    this.initData();
    this.renderTable();
    this.parkButton.onclick = this.park;
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

  park = () => {

  }

  updateRow = () => {

  }
}

let parking = new Parking(10);
