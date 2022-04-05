import DateTimeUtils from '../utils/date-time';

describe('test date time', () => {
    let date: Date;

    beforeEach(() => {
        date = new Date('12/05/2022')
    })

    // if invalid throw FormatInvalidException
    it('invalid format', () => {
        expect(() => DateTimeUtils.formatDate(date, '')).toThrow('FormatInvalidException')
    });

    it('valid format YYYY/MM/DD', () => {
        expect(DateTimeUtils.formatDate(date, 'YYYY/MM/DD')).toBe('2022/12/05')
    });

    it('valid format YYYY/MM/DD HH:mm:ss', () => {
        expect(DateTimeUtils.formatDate(date, 'YYYY/MM/DD HH:mm:ss')).toBe('2022/12/05 00:00:00')
    });

    it('valid format YYYY年MM月DD日', () => {
        expect(DateTimeUtils.formatDate(date, 'YYYY年MM月DD日')).toBe('2022年12月05日')
    });
})