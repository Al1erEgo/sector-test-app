import { FC } from 'react'

import { TableHeadItem, TableHeadRow } from '@/modules/posts-table/components/table-head/styles'
import { ColumnType } from '@/modules/posts-table/types'

type TableHeadProps = {
  columns: ColumnType[]
  currentSortDirection: string | undefined
}

const getNewSortingDirection = (
  currentSortDirection: string | undefined,
  dataIndex: string
): string => {
  if (!currentSortDirection || !currentSortDirection.includes(dataIndex)) {
    return `asc${dataIndex}`
  }
  if (currentSortDirection === `asc${dataIndex}`) {
    return `desc${dataIndex}`
  }
  if (currentSortDirection === `desc${dataIndex}`) {
    return ``
  }

  return ''
}

export const TableHead: FC<TableHeadProps> = ({ columns, currentSortDirection }) => {
  return (
    <TableHeadRow>
      {columns &&
        columns.map((item, index) => (
          <TableHeadItem key={index}>
            <span
              onClick={e =>
                item.sorter(getNewSortingDirection(currentSortDirection, item.dataIndex))
              }
            >
              {item.title}
            </span>
          </TableHeadItem>
        ))}
    </TableHeadRow>
  )
}
