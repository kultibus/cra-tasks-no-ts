export class DateHandler {
  _now = new Date();

  _year = this._now.getFullYear();
  _month = this._now.getMonth();
  _date = this._now.getDate();

  _monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  constructor(date) {
    this.expDate = date
      ? new Date(date)
      : new Date(this._year, this._month, this._date + 1);
    this.accomplishDate = this.transformMonth();
    this.daysLeft = this.cntDaysLeft();
  }

  setMinDate() {
    const month = this._month < 10 ? "0" + (this._month + 1) : this._month + 1;

    const date = this._date < 10 ? "0" + this._date : this._date;

    return `${this._year}-${month}-${date}`;
  }

  cntDaysLeft() {
    return `${Math.round(
      (new Date(this.expDate) - this._now) / 1000 / 3600 / 24
    )}`;
  }

  transformMonth() {
    return `${this.expDate.getDate()} ${
      this._monthNames[this.expDate.getMonth()]
    } ${this.expDate.getFullYear()}`;
  }
}
