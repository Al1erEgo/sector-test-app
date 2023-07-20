import { TableHeadItem, TableHeadRow } from '@/modules/posts-table/components/table-head/styles'

export const TableHead = () => {
  return (
    <TableHeadRow>
      <TableHeadItem>ID</TableHeadItem>
      <TableHeadItem>Заголовок</TableHeadItem>
      <TableHeadItem>Описание</TableHeadItem>
    </TableHeadRow>
  )
}
