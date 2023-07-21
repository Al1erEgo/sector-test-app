import { FC } from 'react'

import { TableRow, TableRowItem } from '@/modules/posts-table/components/table-body/styles'
import { PostType } from '@/modules/posts-table/types'

type TableBodyProps = { rows: PostType[] }
export const TableBody: FC<TableBodyProps> = ({ rows }) => {
  return (
    <>
      {rows &&
        rows.map(row => (
          <TableRow key={row.id}>
            <TableRowItem>{row.id}</TableRowItem>
            <TableRowItem>{row.title}</TableRowItem>
            <TableRowItem end={'end'}>{row.body}</TableRowItem>
          </TableRow>
        ))}
    </>
  )
}
