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
    this._expDate = date
      ? new Date(date)
      : new Date(this._year, this._month, this._date + 1);
    this._daysLeft = this.cntDaysLeft(this._expDate);
    this._accomplishDate = this.transformMonth(this._expDate);
    this._transformedDate = this.transformDate(this._expDate);
  }

  getDaysLeft() {
    return this._daysLeft;
  }

  getAccomplishDate() {
    return this._accomplishDate;
  }

  getTransformedDate() {
    return this._transformedDate;
  }

  transformDate(date) {
    const month =
      date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;

    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

    return `${date.getFullYear()}-${month}-${day}`;
  }

  cntDaysLeft(expDate) {
    return `${Math.round((new Date(expDate) - new Date()) / 1000 / 3600 / 24)}`;
  }

  transformMonth(expDate) {
    return `${expDate.getDate()} ${
      this._monthNames[expDate.getMonth()]
    } ${expDate.getFullYear()}`;
  }
}
