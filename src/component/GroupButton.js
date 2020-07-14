import React from 'react'
import FilterButton from './FilterButton'

export default function GroupButton(props) {
    const {all,laki,wanita} = props
    return (
        <div>
            <FilterButton gender={all} tulisan={'All'} />
            <FilterButton gender={laki} tulisan={'Laki-laki'} />
            <FilterButton gender={wanita} tulisan={'Perempuan'} />
        </div>
    )
}
