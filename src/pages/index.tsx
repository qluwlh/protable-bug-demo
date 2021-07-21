import ProTable from '@ant-design/pro-table';
import dayjs from 'dayjs';
import classes from './index.less';
export default function IndexPage() {
  return (
    <div className={classes.root}>
      <h1>search.filterType: 'query'</h1>
      <ProTable
        columns={[
          {
            title: '日期范围',
            dataIndex: 'startTime',
            valueType: 'dateRange',
            hideInTable: true,
            initialValue: [dayjs(), dayjs().add(2, 'day')],
          },
        ]}
        search={{
          filterType: 'query',
        }}
      />
      <h1>search.filterType: 'light'</h1>
      <ProTable
        columns={[
          {
            title: '日期范围',
            dataIndex: 'startTime',
            valueType: 'dateRange',
            hideInTable: true,
            initialValue: [dayjs(), dayjs().add(2, 'day')],
          },
        ]}
        search={{
          filterType: 'light',
        }}
      />
    </div>
  );
}
