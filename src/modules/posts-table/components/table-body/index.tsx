import { FC } from 'react'

import { TableRow, TableRowItem } from '@/modules/posts-table/components/table-body/styles'
import { PostType } from '@/modules/posts-table/types'

const getTableContent = (rows: PostType[]) => {
  let tableContent = []

  for (let i = 0; i < 10; i++) {
    tableContent.push(
      <TableRow key={i}>
        <TableRowItem justifycontent={'center'}>{rows[i]?.id}</TableRowItem>
        <TableRowItem>{rows[i]?.title}</TableRowItem>
        <TableRowItem end={'end'}>{rows[i]?.body}</TableRowItem>
      </TableRow>
    )
  }

  return tableContent
}

type TableBodyProps = { rows: PostType[] }
export const TableBody: FC<TableBodyProps> = ({ rows }) => {
  return <>{rows && getTableContent(rows)}</>
}
