// ==========================================================
// METADATA FIELD SISWA — sesuai kolom sheet "DATA ANAK"
// ==========================================================
// key harus sama persis dengan hasil toCamel() di Code.gs untuk
// setiap kolom snake_case, supaya data tersimpan ke kolom yang benar.
const SISWA_FIELDS = [
  { section: "Data Pokok / Akademik", fields: [
    { key: "tahunAjaran", label: "Tahun Pelajaran", type: "text", placeholder: "2026-2027", required: true },
    { key: "nis", label: "NIS", type: "text" },
    { key: "nisn", label: "NISN", type: "text" },
    { key: "kelas", label: "Kelompok / Rombel", type: "text", placeholder: "KELOMPOK B3", required: true },
    { key: "kelasJenjang", label: "Kelas (Jenjang)", type: "select", options: ["A", "B"] },
    { key: "ruang", label: "Ruang", type: "text", placeholder: "KELAS B3" },
    { key: "guruKelas", label: "Guru Kelas", type: "text" },
    { key: "keterangan", label: "Keterangan", type: "text", placeholder: "MASUK DAPODIK / TAMBAHAN" },
    { key: "statusDapodik", label: "Status Dapodik", type: "text" },
    { key: "tanggalMasuk", label: "Tanggal Masuk Sekolah", type: "date" },
    { key: "status", label: "Status Siswa", type: "select", options: ["Aktif", "Nonaktif"] }
  ]},
  { section: "Data Anak", fields: [
    { key: "nama", label: "Nama Anak Didik", type: "text", required: true },
    { key: "namaPanggilan", label: "Nama Panggilan", type: "text" },
    { key: "jenisKelamin", label: "Jenis Kelamin", type: "select", options: ["LAKI-LAKI", "PEREMPUAN"], required: true },
    { key: "tempatLahir", label: "Tempat Lahir", type: "text" },
    { key: "tanggalLahir", label: "Tanggal Lahir", type: "date" },
    { key: "umur", label: "Umur", type: "text", placeholder: "5 Tahun" },
    { key: "nikAnak", label: "NIK Anak", type: "text" },
    { key: "noKk", label: "No. KK", type: "text" },
    { key: "noAkte", label: "No Akte Kelahiran", type: "text" },
    { key: "agama", label: "Agama", type: "text" },
    { key: "kewarganegaraan", label: "Kewarganegaraan", type: "text", placeholder: "INDONESIA" },
    { key: "hobby", label: "Hobi", type: "text" },
    { key: "citaCita", label: "Cita-cita", type: "text" },
    { key: "anakKe", label: "Anak Ke", type: "text" },
    { key: "jmlSaudaraKandung", label: "Jml. Saudara Kandung", type: "text" },
    { key: "jmlSaudaraTiri", label: "Jml. Saudara Tiri", type: "text" },
    { key: "jmlSaudaraAngkat", label: "Jml. Saudara Angkat", type: "text" },
    { key: "statusAnakKeluarga", label: "Status Anak dalam Keluarga", type: "text", placeholder: "KANDUNG" },
    { key: "bahasaRumah", label: "Bahasa Sehari-hari di Rumah", type: "text" },
    { key: "golonganDarah", label: "Golongan Darah", type: "text" },
    { key: "penyakit", label: "Penyakit yang Diderita", type: "text" },
    { key: "imunisasi", label: "Imunisasi yang Pernah Diterima", type: "text" },
    { key: "ciriKhusus", label: "Ciri-ciri Khusus", type: "text" }
  ]},
  { section: "Alamat", fields: [
    { key: "alamat", label: "Alamat", type: "text" },
    { key: "kelurahan", label: "Kelurahan", type: "text" },
    { key: "kecamatan", label: "Kecamatan", type: "text" },
    { key: "kabupaten", label: "Kabupaten", type: "text" },
    { key: "provinsi", label: "Provinsi", type: "text" }
  ]},
  { section: "Data Fisik & Jarak ke Sekolah", fields: [
    { key: "tinggiBadan", label: "Tinggi Badan (cm)", type: "text" },
    { key: "beratBadan", label: "Berat Badan (kg)", type: "text" },
    { key: "lingkarKepala", label: "Lingkar Kepala", type: "text" },
    { key: "jarakKeTk", label: "Jarak Tempat Tinggal ke TK", type: "text", placeholder: "5 KM" },
    { key: "waktuKeTk", label: "Waktu Tempuh ke TK", type: "text", placeholder: "10 MENIT" },
    { key: "transportasi", label: "Pergi ke TK Dengan", type: "text", placeholder: "MOTOR" }
  ]},
  { section: "Data Ayah", fields: [
    { key: "namaAyah", label: "Nama Ayah", type: "text" },
    { key: "nikAyah", label: "NIK Ayah", type: "text" },
    { key: "ttlAyah", label: "Tempat/Tanggal Lahir Ayah", type: "text" },
    { key: "agamaAyah", label: "Agama Ayah", type: "text" },
    { key: "pendidikanAyah", label: "Pendidikan Terakhir Ayah", type: "text" },
    { key: "pekerjaanAyah", label: "Pekerjaan Ayah", type: "text" },
    { key: "alamatAyah", label: "Alamat Rumah Ayah", type: "text" },
    { key: "hpAyah", label: "Nomor HP Ayah", type: "text" }
  ]},
  { section: "Data Ibu", fields: [
    { key: "namaIbu", label: "Nama Ibu", type: "text" },
    { key: "nikIbu", label: "NIK Ibu", type: "text" },
    { key: "ttlIbu", label: "Tempat/Tanggal Lahir Ibu", type: "text" },
    { key: "agamaIbu", label: "Agama Ibu", type: "text" },
    { key: "pendidikanIbu", label: "Pendidikan Terakhir Ibu", type: "text" },
    { key: "pekerjaanIbu", label: "Pekerjaan Ibu", type: "text" },
    { key: "alamatIbu", label: "Alamat Rumah Ibu", type: "text" },
    { key: "hpIbu", label: "Nomor HP Ibu", type: "text" }
  ]},
  { section: "Data Wali (opsional)", fields: [
    { key: "namaWali", label: "Nama Wali", type: "text" },
    { key: "ttlWali", label: "Tempat/Tanggal Lahir Wali", type: "text" },
    { key: "agamaWali", label: "Agama Wali", type: "text" },
    { key: "pendidikanWali", label: "Pendidikan Terakhir Wali", type: "text" },
    { key: "alamatWali", label: "Alamat Rumah Wali", type: "text" },
    { key: "hpWali", label: "Nomor HP Wali", type: "text" },
    { key: "nikWali", label: "NIK Wali", type: "text" }
  ]}
];

const ALL_SISWA_FIELDS = SISWA_FIELDS.reduce(function (acc, s) {
  return acc.concat(s.fields.map(function (f) {
    return Object.assign({ section: s.section }, f);
  }));
}, []);
