import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'
import s from './CustomPagination.module.scss'

type PropsType = {
  pageCount: any
  onClickPage: (page: string) => void
}

export const CustomPagination: FC<PropsType> = ({ pageCount, onClickPage }) => {
  function handlePageClick(selectedItem: { selected: number }) {
    const currentPage = `page=${selectedItem.selected + 1}`
    onClickPage(currentPage)
  }

  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='>'
      onPageChange={handlePageClick}
      pageRangeDisplayed={6}
      pageCount={pageCount!}
      previousLabel='<'
      renderOnZeroPageCount={null}
      className={s.paginationWrapper}
    />
  )
}
