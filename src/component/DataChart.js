import {
    datasemua,labelsemua,
} from './CollectionFilter'

import {warnagrafik,warnaborder} from './warna/warna'

export const datatotalgrafik=datasemua.map((item,index)=> {
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

