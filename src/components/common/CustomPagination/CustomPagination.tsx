import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'
import s from './CustomPagination.module.scss'
import { SmallArrowIcon } from 'assets/icons/SmallArrowIcon'

type PropsType = {
  pageCount: any
  currentPage: any
  onClickPage: (page: string) => void
}

export const CustomPagination: FC<PropsType> = ({ pageCount, onClickPage, currentPage }) => {
  function handlePageClick(selectedItem: { selected: number }) {
    const currentPage = `page=${selectedItem.selected + 1}`
    onClickPage(currentPage)
  }

  return (
    <ReactPaginate
      breakLabel='...'
      activeClassName={s.active}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount!}
      previousLabel={<SmallArrowIcon rotate={'90deg'} />}
      nextLabel={<SmallArrowIcon rotate={'270deg'} />}
      // previousLabel='<'
      renderOnZeroPageCount={null}
      className={s.paginationWrapper}
    />
  )
}
