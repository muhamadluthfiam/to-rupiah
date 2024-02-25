**to-rupiah**

A simple utility library to format currency and convert numbers to words in Indonesian Rupiah.

### Installation

```bash
npm install to-rupiah
```

### Usage

```javascript
import { toRupiah, convertToWords } from 'to-rupiah';

console.log(toRupiah(50000));
// Output: Rp 50.000,00

console.log(toRupiah(50000, { symbol: 'IDR' }));
// Output: IDR 50.000,00

console.log(toRupiah(50000, { formal: false }));
// Output: Rp 50.000,00

console.log(toRupiah(50000, { formal: false, symbol: 'IDR' }));
// Output: IDR 50.000,00

console.log(toRupiah(50000, { dot: '.', floatingPoint: 0 }));
// Output: Rp 50.000

console.log(toRupiah(50000, { dot: ',', decimal: '.' }));
// Output: Rp 50.000,00

console.log(toRupiah(50000, { replaceZeroDecimals: true }));
// Output: Rp 50.000,-

console.log(toRupiah(50000, { useUnit: true, floatingPoint: 0 }));
// Output: Rp 50rb

console.log(toRupiah(50000, { symbol: 'IDR', formal: false, useUnit: true, K: true, floatingPoint: 0 }));
// Output: IDR 50rb

console.log(toRupiah(50000, { symbol: false, useUnit: true, longUnit: true, spaceBeforeUnit: true, floatingPoint: 0 }));
// Output: 50 ribu

console.log(toRupiah(50750000000, { useUnit: true, longUnit: true, spaceBeforeUnit: true, formal: false }));
// Output: Rp 50,75 milyar

console.log(toRupiah(5250, { useUnit: true, symbol: null, K: true }));
// Output: 5,25k
```

```javascript
console.log(convertToWords(50000));
// Output: Lima Puluh Ribu Rupiah

console.log(convertToWords(123456789));
// Output: Seratus Dua Puluh Tiga Juta Empat Ribu Lima Ratus Enam Puluh Tujuh Ribu Delapan Ratus Sembilan Puluh

console.log(convertToWords(0));
// Output: Nol Rupiah
```

### Options

- `symbol`: Custom currency symbol. Default: `'Rp'`.
- `formal`: Boolean flag to indicate formal formatting. Default: `true`.
- `dot`: Custom dot character. Default: `'.'`.
- `decimal`: Custom decimal character. Default: `','`.
- `floatingPoint`: Number of floating point digits. Default: `2`.
- `replaceZeroDecimals`: Boolean flag to replace zero decimals with dash. Default: `false`.
- `useUnit`: Boolean flag to enable unit conversion. Default: `false`.
- `K`: Boolean flag to use 'K' instead of 'ribu'. Default: `false`.
- `longUnit`: Boolean flag to use long unit names. Default: `false`.
- `spaceBeforeUnit`: Boolean flag to add space before the unit. Default: `false`.

### Lisensi

Proyek ini dilisensikan di bawah Lisensi ISC.

ISC License (ISC)

Hak Cipta (c) Tahun 2024

Izin ini diberikan secara gratis, untuk setiap orang yang mendapatkan salinan
dari perangkat lunak ini dan file dokumentasi terkait ("Perangkat Lunak"), untuk
berurusan di Perangkat Lunak tanpa batasan, termasuk tanpa batasan hak
menggunakan, menyalin, mengubah, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan,
dan / atau menjual salinan dari Perangkat Lunak, dan untuk mengizinkan
orang-orang yang diberi Perangkat Lunak ini untuk melakukannya, dengan tunduk pada
kondisi berikut:

Pemberitahuan hak cipta di atas dan pemberitahuan izin ini harus
dimasukkan dalam semua salinan atau bagian substansial dari Perangkat Lunak.

PERANGKAT LUNAK DIBERIKAN "SEBAGAIMANA ADANYA", TANPA GARANSI APA PUN, HANYA
EKSPRESI ATAU TERTULIS, TERMASUK TETAPI TIDAK TERBATAS PADA GARANSI
DAGANG, KESESUAIAN UNTUK TUJUAN TERTENTU DAN NONPELANGGARAN.
DALAM KEADAAN APA PUN PENULIS ATAU PEMEGANG HAK KECIL TIDAK BERTANGGUNG JAWAB
DALAM TUNTUTAN, KERUSAKAN ATAU LAINNYA, BAIK DALAM TINDAKAN KONTRAK,
KESALAHAN ATAU SEBALIKNYA, YANG TIMBUL DARI, KELUAR DARI ATAU SEHUBUNGAN DENGAN PERANGKAT LUNAK
ATAU PENGGUNAAN ATAU KONTAK DENGAN PERANGKAT LUNAK.
```

### Acknowledgments

- Thanks to lodash for providing utility functions.
- Inspired by similar currency formatting libraries.