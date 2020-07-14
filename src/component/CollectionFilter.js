import data from './data/data.json';


export const carikelamin=['Laki-laki','Perempuan'];
export const jkelamindata=carikelamin.map(item => data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Jenis kelamin"]===item).length) ;

export const cariusia=['< 25','25-34','35-44','45-54','55-64','> 64'];
export const usiadata=cariusia.map(item => data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Usia"]===item).length);

export const carikabel=['Kabel: Telkom','Kabel: First Media','Kabel: MNC Play','Kabel: Biznet','Kabel: MyRepublic'];
export const kabellabel=['Telkom', 'First Media', 'MNC Play', 'Biznet', 'My Republic']
export const kabeldata=carikabel.map(item => data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Jaringan"]===item).length);

export const cariseluler=['Seluler: Telkomsel','Seluler: XL/Axis','Seluler: Indosat','Seluler: Smartfren','Seluler: 3']
export const selulerlabel=['Telkomsel', 'XL/Axis', 'Indosat', 'Smartfren', '3']

export const selulerdata=cariseluler.map(item => data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Jaringan"]===item).length);

export const pcmobilelabel=['Windows', 'Linux', 'MacOS', 'Android', 'Apple iOS']
export const caripcmobile=['PC/Laptop: Windows','PC/Laptop: Linux','PC/Laptop: MacOs','Mobile: Android','Mobile: Apple iOS']
export const pcmobiledata=caripcmobile.map(item => data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Perangkat"]===item).length);




const aceh=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Aceh').length
export const bali=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Bali').length
const banten=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Banten').length
const bengkulu=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Bengkulu').length
const diy=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='D.I Yogyakarta').length
const dki=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='D.K.I Jakarta').length
const gorontalo=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Gorontalo').length
const jambi=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Jambi').length
const jawabarat=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Jawa Barat').length
const jawatengah=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Jawa Tengah').length
const jawatimur=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Jawa Timur').length
const kalimantanbarat=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Kalimantan Barat').length
const kalimantanselatan=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Kalimantan Barat').length
const kalimantantengah=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Kalimantan Selatan').length
const kalimantantimur=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Kalimantan Timur').length
const kalimantanutara=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Kalimantan Utara').length
const kepulauanbangkabelitung=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Kepulauan Bangka Belitung').length
const kepulauanriau=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Kepulauan Riau').length
const maluku=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Maluku').length
const malukuutara=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Maluku Utara').length
const ntb=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Nusa Tenggara Barat').length
const ntt=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Nusa Tenggara Timur').length
const papua=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Papua').length
const papuabarat=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Papua Barat').length
const riau=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Riau').length
const sulawesibarat=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Sulawesi Barat').length
const sulawesiselatan=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Sulawesi Selatan').length
const sulawesitengah=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Sulawesi Tengah').length
const sulawesitenggara=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Sulawesi Tenggara').length
const sulawesiutara=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Sulawesi Utara').length
const sumaterabarat=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Sumatera Barat').length
const sumateraselatan=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Sumatera Selatan').length
const sumaterautara=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Provinsi"]==='Sumatera Utara').length

export const sumatera=aceh+bengkulu+jambi+kepulauanbangkabelitung+kepulauanriau+riau+sumaterabarat+sumateraselatan+sumaterautara
export const jawa=banten+diy+dki+jawabarat+jawatengah+jawatimur
export const nt=ntb+ntt
export const kalimantan=kalimantanbarat+kalimantanselatan+kalimantantengah+kalimantantimur+kalimantanutara
export const sulawesi=gorontalo+sulawesibarat+sulawesiselatan+sulawesitengah+sulawesitenggara+sulawesiutara
export const malukupulau=maluku+malukuutara
export const papuapulau=papua+papuabarat

export const pulaudata=[sumatera,jawa,nt,kalimantan,sulawesi,malukupulau,papuapulau]
export const pulaulabel=['Sumatera', 'Jawa', 'Bali', 'Nusa Tenggara', 'Kalimantan', 'Sulawesi', 'Maluku', 'Papua']


export const datasemua=[jkelamindata,
    usiadata,
    kabeldata,
    selulerdata,
    pcmobiledata,
    pulaudata]

export const labelsemua=[
    carikelamin,
    cariusia,
    kabellabel,
    selulerlabel,
    pcmobilelabel,
    pulaulabel,
]