import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import useTranslation from 'next-translate/useTranslation';
import Link from '../../Link.jsx';
import { uutidRegex } from '../../../utils';

import STYLES from './RecentDrawsTable.module.scss';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const LinkCell = ({ children, ...props }) => (
  <Link className={STYLES.cell} {...props}>
    {children}
  </Link>
);

LinkCell.propTypes = {
  children: PropTypes.node.isRequired,
};

const RecentDrawsTable = ({ draws, handleClickRemove, handleDrawClick }) => {
  const { t } = useTranslation('RecentDraws');
  return (
    <div className={STYLES.container}>
      <MaterialTable
        icons={tableIcons}
        columns={[
          {
            title: t('column_title_label'),
            field: 'title',
            render: rowData => (
              <LinkCell
                href={rowData.url.replace(uutidRegex, '[id]')}
                as={rowData.url}
                onClick={handleDrawClick}
              >
                {rowData.title}
              </LinkCell>
            ),
          },
          {
            title: t('column_dateSchedule_label'),
            field: 'scheduleDate',
            render: rowData => (
              <LinkCell
                href={rowData.url.replace(uutidRegex, '[id]')}
                as={rowData.url}
                onClick={handleDrawClick}
              >
                {rowData.scheduleDate}
              </LinkCell>
            ),
          },
        ]}
        data={draws}
        title=""
        actions={[
          () => ({
            icon: tableIcons.Delete,
            tooltip: t('delete_recent_draw_modal_title'),
            onClick: (event, rowData) => handleClickRemove(rowData.id),
          }),
        ]}
        options={{
          actionsColumnIndex: -1,
          cellStyle: {
            padding: 0,
          },
        }}
        localization={{
          header: {
            actions: '',
          },
        }}
      />
    </div>
  );
};
RecentDrawsTable.propTypes = {
  draws: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      scheduleDate: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleClickRemove: PropTypes.func.isRequired,
  handleDrawClick: PropTypes.func.isRequired,
};

export default RecentDrawsTable;
