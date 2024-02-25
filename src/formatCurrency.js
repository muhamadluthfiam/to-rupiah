import _ from 'lodash';

export const toRupiah = function(amount, options = {}) {
  const {
    symbol = 'Rp',
    formal = true,
    dot = '.',
    decimal = ',',
    floatingPoint = 2,
    replaceZeroDecimals = false,
    useUnit = false,
    K = false,
    longUnit = false,
    spaceBeforeUnit = false
  } = options;

  const formattedAmount = _.round(amount, floatingPoint).toLocaleString('id-ID', {
    minimumFractionDigits: floatingPoint,
    maximumFractionDigits: floatingPoint
  });

  let result = `${symbol} ${formattedAmount}`;

  if (!formal) {
    result = result.replace(/\s/g, ' ');
  }

  if (dot !== '.') {
    result = result.replace(/\./g, dot);
  }

  if (decimal !== ',') {
    result = result.replace(/,/g, decimal);
  }

  if (replaceZeroDecimals) {
    result = result.replace(new RegExp(`\\${decimal}0{${floatingPoint}}`), '-');
  }

  if (useUnit) {
    const units = longUnit ? ['ribu', 'juta', 'milyar', 'triliun'] : ['rb', 'jt', 'M', 'T'];
    const space = spaceBeforeUnit ? ' ' : '';
    let unitIndex = -1;
    let formattedUnit = '';

    if (amount >= 1000) {
      unitIndex = Math.floor(Math.log10(amount) / 3) - 1;
      formattedUnit = K ? units[unitIndex] : `${units[unitIndex]}${decimal}`;
      result = result.replace(/,\d*/, '');
      result = result.replace(/\d/, '');
    }

    result += space + formattedUnit;
  }

  return result;
}

export const convertToWords = function(amount) {
  const words = [
    '', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima',
    'Enam', 'Tujuh', 'Delapan', 'Sembilan', 'Sepuluh',
    'Sebelas', 'Dua Belas', 'Tiga Belas', 'Empat Belas', 'Lima Belas',
    'Enam Belas', 'Tujuh Belas', 'Delapan Belas', 'Sembilan Belas'
  ];

  const convertNumberToWords = (number) => {
    if (number < 20) {
      return words[number];
    } else if (number < 100) {
      return words[Math.floor(number / 10)] + ' Puluh ' + words[number % 10];
    } else if (number < 200) {
      return 'Seratus ' + convertNumberToWords(number % 100);
    } else if (number < 1000) {
      return words[Math.floor(number / 100)] + ' Ratus ' + convertNumberToWords(number % 100);
    } else if (number < 2000) {
      return 'Seribu ' + convertNumberToWords(number % 1000);
    } else if (number < 1000000) {
      return convertNumberToWords(Math.floor(number / 1000)) + 'Ribu' + convertNumberToWords(number % 1000);
    } else if (number < 1000000000) {
      return convertNumberToWords(Math.floor(number / 1000000)) + ' Juta ' + convertNumberToWords(number % 1000000);
    } else if (number < 1000000000000) {
      return convertNumberToWords(Math.floor(number / 1000000000)) + ' Miliar ' + convertNumberToWords(number % 1000000000);
    }
  };

  if (amount === 0) {
    return 'Nol Rupiah';
  } else {
    return convertNumberToWords(amount) + ' Rupiah';
  }
}
