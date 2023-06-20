import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'
import s from './CustomPagination.module.scss'

type PropsType = {
  pageCount: any
  onClickPage: (page: string) => void
}

export const CustomPagination: FC<PropsType> = ({ pageCount, onClickPage }) => {
  function handlePageClick(selectedItem: { selected: number }) {
    onClickPage(String(selectedItem.selected + 1))
  }

  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='>'
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount!}
      previousLabel='<'
      renderOnZeroPageCount={null}
      className={s.paginationWrapper}
    />
  )
}
