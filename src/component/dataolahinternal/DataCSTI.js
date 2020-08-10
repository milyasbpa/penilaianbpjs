import {warnagrafik,warnaborder} from '../warna/warna'

import datas from '../datainternal/datacsti.json'


export const carikelamin=['Laki-laki','Perempuan'];
export const jkelamindata=carikelamin.map(item => datas["Sheet1"].filter(data => data["Jenis kelamin"]===item).length) ;

export const cariusia=['< 25','25-34','35-44','45-54','55-64','> 64'];
export const usiadata=cariusia.map(item => datas["Sheet1"].filter(data => data["Usia (Tahun)"]===item).length);

export const carikabel=['Kabel: Telkom','Kabel: First Media','Kabel: MNC Play','Kabel: Biznet','Kabel: MyRepublic',"Lainnya (mohon sebutkan jenis koneksi Anda)"];
export const kabellabel=['Telkom', 'First Media', 'MNC Play', 'Biznet', 'My Republic','Lainnya']
export const kabeldata=carikabel.map(item => datas["Sheet1"].filter(data => data["Jaringan apa yang Anda gunakan untuk mengakses Aplikasi?"]===item).length);

export const cariseluler=['Seluler: Telkomsel','Seluler: XL/Axis','Seluler: Indosat','Seluler: Smartfren','Seluler: 3',"Lainnya (mohon sebutkan jenis koneksi Anda)"]
export const selulerlabel=['Telkomsel', 'XL/Axis', 'Indosat', 'Smartfren', '3','Lainnya']

export const selulerdata=cariseluler.map(item => datas["Sheet1"].filter(data => data["Jaringan apa yang Anda gunakan untuk mengakses Aplikasi?"]===item).length);

export const pcmobilelabel=['Windows', 'Linux', 'MacOS', 'Android', 'Apple iOS','Lainnya']
export const caripcmobile=['PC/Laptop: Windows','PC/Laptop: Linux','PC/Laptop: MacOs','Mobile: Android','Mobile: Apple iOS','Lainnya (mohon sebutkan jenis perangkat Anda)']
export const pcmobiledata=caripcmobile.map(item => datas["Sheet1"].filter(data => data["Perangkat apa yang Anda gunakan untuk mengakses Aplikasi?"]===item).length);




const aceh=datas["Sheet1"].filter(data => data["Provinsi"]==='Aceh').length
export const bali=datas["Sheet1"].filter(data => data["Provinsi"]==='Bali').length
const banten=datas["Sheet1"].filter(data => data["Provinsi"]==='Banten').length
const bengkulu=datas["Sheet1"].filter(data => data["Provinsi"]==='Bengkulu').length
const diy=datas["Sheet1"].filter(data => data["Provinsi"]==='D.I Yogyakarta').length
const dki=datas["Sheet1"].filter(data => data["Provinsi"]==='D.K.I Jakarta').length
const gorontalo=datas["Sheet1"].filter(data => data["Provinsi"]==='Gorontalo').length
const jambi=datas["Sheet1"].filter(data => data["Provinsi"]==='Jambi').length
const jawabarat=datas["Sheet1"].filter(data => data["Provinsi"]==='Jawa Barat').length
const jawatengah=datas["Sheet1"].filter(data => data["Provinsi"]==='Jawa Tengah').length
const jawatimur=datas["Sheet1"].filter(data => data["Provinsi"]==='Jawa Timur').length
const kalimantanbarat=datas["Sheet1"].filter(data => data["Provinsi"]==='Kalimantan Barat').length
const kalimantanselatan=datas["Sheet1"].filter(data => data["Provinsi"]==='Kalimantan Selatan').length
const kalimantantengah=datas["Sheet1"].filter(data => data["Provinsi"]==='Kalimantan Tengah').length
const kalimantantimur=datas["Sheet1"].filter(data => data["Provinsi"]==='Kalimantan Timur').length
const kalimantanutara=datas["Sheet1"].filter(data => data["Provinsi"]==='Kalimantan Utara').length
const kepulauanbangkabelitung=datas["Sheet1"].filter(data => data["Provinsi"]==='Kepulauan Bangka Belitung').length
const kepulauanriau=datas["Sheet1"].filter(data => data["Provinsi"]==='Kepulauan Riau').length
const maluku=datas["Sheet1"].filter(data => data["Provinsi"]==='Maluku').length
const malukuutara=datas["Sheet1"].filter(data => data["Provinsi"]==='Maluku Utara').length
const ntb=datas["Sheet1"].filter(data => data["Provinsi"]==='Nusa Tenggara Barat').length
const ntt=datas["Sheet1"].filter(data => data["Provinsi"]==='Nusa Tenggara Timur').length
const papua=datas["Sheet1"].filter(data => data["Provinsi"]==='Papua').length
const papuabarat=datas["Sheet1"].filter(data => data["Provinsi"]==='Papua Barat').length
const riau=datas["Sheet1"].filter(data => data["Provinsi"]==='Riau').length
const sulawesibarat=datas["Sheet1"].filter(data => data["Provinsi"]==='Sulawesi Barat').length
const sulawesiselatan=datas["Sheet1"].filter(data => data["Provinsi"]==='Sulawesi Selatan').length
const sulawesitengah=datas["Sheet1"].filter(data => data["Provinsi"]==='Sulawesi Tengah').length
const sulawesitenggara=datas["Sheet1"].filter(data => data["Provinsi"]==='Sulawesi Tenggara').length
const sulawesiutara=datas["Sheet1"].filter(data => data["Provinsi"]==='Sulawesi Utara').length
const sumaterabarat=datas["Sheet1"].filter(data => data["Provinsi"]==='Sumatera Barat').length
const sumateraselatan=datas["Sheet1"].filter(data => data["Provinsi"]==='Sumatera Selatan').length
const sumaterautara=datas["Sheet1"].filter(data => data["Provinsi"]==='Sumatera Utara').length

export const sumatera=aceh+bengkulu+jambi+kepulauanbangkabelitung+kepulauanriau+riau+sumaterabarat+sumateraselatan+sumaterautara
export const jawa=banten+diy+dki+jawabarat+jawatengah+jawatimur
export const nt=ntb+ntt
export const kalimantan=kalimantanbarat+kalimantanselatan+kalimantantengah+kalimantantimur+kalimantanutara
export const sulawesi=gorontalo+sulawesibarat+sulawesiselatan+sulawesitengah+sulawesitenggara+sulawesiutara
export const malukupulau=maluku+malukuutara
export const papuapulau=papua+papuabarat

export const pulaudata=[sumatera,jawa,bali,nt,kalimantan,sulawesi,malukupulau,papuapulau]
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

export const datacstiinternal=datasemua.map((item,index)=> {
    return {
        labels:labelsemua[index],
        datasets: [{
        label: 'Pengguna',
        data: item,
        backgroundColor: warnagrafik,
        borderColor: warnaborder,
        borderWidth: 1
    }]
    }
})
