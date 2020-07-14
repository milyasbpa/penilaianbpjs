export const menunavbar=['Home','BOA','Lupis','Pcare','Vclaim', 'VD']
export const menulink=['/','/boa','/lupis','/pcare','/vclaim','/vd']

export const judulmenu=[
    'BPJS Office Application (BOA)',
    'Luar Paket INACBG',
    'Pcare - Eclaim',
    'Vclaim',
    'Verifikasi Digital'
]

export const menulinkpotong=menulink.slice(1,judulmenu.length + 1)

export const deskripsimenu=[
    'Aplikasi yang digunakan untuk pencatatan dan penagihan pelayanan non-kapitasi BPJS Kesehatan oleh  FKTP',
    'Aplikasi yang dipergunakan untuk Verifikasi & Penerbitan Tagihan Pelayanan di luar paket INACBG’s dan Pelayanan Provider (Optik, Lab)',
    'Aplikasi yang digunakan untuk pencatatan dan penagihan pelayanan non-kapitasi BPJS Kesehatan oleh  FKTP',
    'Aplikasi yang digunakan untuk verifikasi klaim FKRTL',
    'Aplikasi yang digunakan untuk Verifikasi Klaim yang diajukan FKTRL'
]

export const menulink1=['/hfis','/antreanonline','/apotekonline','/keuangan','/newinmonica','/iuranwajib','/kepatuhan','/kepesertaan','/rbu','/edabu','/sipp','/csti','/mobilejkn']
export const judulmenu1=[
    'HFIS',
    'Antrean Online FKTP',
    'Apotek Online',
    'Keuangan',
    'New-In Monica',
    'Iuran Wajib',
    'Kepatuhan (Wasrik)',
    'Kepesertaan',
    'Registrasi Badan Usaha',
    'e-Dabu',
    'Saluran Informasi Pengaduan Peserta (SIPP)',
    'CSTI-Supel',
    'Mobile JKN'
]

export const deskripsimenu1=[
    'Aplikasi yang dipergunakan untuk Pencatatan Data FKTP & FKRTL serta Kredensialing & Re-Kredensialing',
    'Aplikasi yang berfungsi untuk mengambil nomor antrean untuk pelayanan FKTP yang terintegrasi dengan Mobile JKN',
    'Aplikasi yang berfungsi untuk mengambil nomor antrean untuk pelayanan FKTP berbasis mobile',
    'Aplikasi yang berfungsi untuk pelayanan dan penagihan obat diluar INACBG',
    'Aplikasi yang dipergunakan untuk pencatatan keuangan BPJS Kesehatan & DJS',
    'Aplikasi integrasi pengajuan pembayaran klaim FKTP dan FKRTL dan untuk DJS',
    'Aplikasi yang dipergunakan untuk pencatatan premi APBD dan APBN',
    'Aplikasi yang dipergunakan untuk pencatatan dan monitoring sanksi kepada BU yang bermasalah',
    'Aplikasi yang dipergunakan untuk Pencatatan administrasi peserta',
    'Aplikasi yang dipergunakan untuk Pendaftaran Badan Usaha Menjadi Peserta BPJS Kesehatan via website BPJS Kesehatan',
    'Aplikasi yang dipergunakan untuk Pencatatan dan Mutasi Data Karyawan Badan Usaha serta mengecek tagihan peserta segmen Badan Usaha, peserta segmen Jamkesda (KJS dan Kota Tangerang) dan Perangkat Desa',
    'Aplikasi yang dipergunakan untuk Pencatatan & Penanganan Keluhan Peserta',
    'Aplikasi yang dipergunakan untuk sistem antrian yang terintegrasi dengan survey kepuasan pelayanan frontdesk kantor cabang',
    'Aplikasi yang dipergunakan untuk Pendaftaran Peserta Baru PBPU, Cek Tagihan, Riwayat Pembayaran, Pencarian Fasilitas Kesehatan, Skrining Riwayat Kesehatan',
]

export const menulinktotal=[...menulinkpotong,...menulink1]
export const judulmenutotal=[...judulmenu,...judulmenu1]
export const deskripsimenutotal=[...deskripsimenu,...deskripsimenu1]