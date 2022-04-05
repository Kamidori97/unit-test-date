import moment from 'moment'

class DateTime {
  formatDate = (dateTime: Date, format: string): string => {
    if (!format) throw new Error('FormatInvalidException')
    return moment(dateTime).format(format);
  }
}

export default new DateTime();
