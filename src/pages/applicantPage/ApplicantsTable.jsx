/* eslint-disable react/prop-types */
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useTable,
  useSortBy,
  usePagination,
  useFilters,
  useGlobalFilter,
  useRowSelect,
} from 'react-table';
import { FaSort, FaSortUp, FaSortDown, FaColumns } from 'react-icons/fa';
import { CSVLink } from 'react-csv';
import ApplicantDetailsModal from './ApplicantDetailsModal';
import { fetchAllApplications } from '../../redux/features/application/applicationSlice';

const ApplicantsTable = () => {
  const { allApplications } = useSelector((state) => state.applications);
  const [applicants, setApplicants] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [selectedColumns, setSelectedColumns] = useState([
    'fullName',
    'email',
    'phoneNumber',
    'courseName', // Changed from courseId to courseName
    'testScore',
  ]);
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllApplications());
  }, [dispatch]);

  useEffect(() => {
    if (allApplications && allApplications.length > 0) {
      const updatedApplicants = allApplications.map((applicant) => ({
        ...applicant,
        testScore: applicant.Course?.preAdmissionTests?.results || 'N/A',
        courseName: applicant.Course?.name || 'N/A', // Ensure courseName is set here
      }));
      setApplicants(updatedApplicants);
    }
  }, [allApplications]);

  const getAllFields = (data) => {
    const fields = new Set();
    data.forEach((applicant) => {
      Object.keys(applicant).forEach((key) => fields.add(key));
    });
    return Array.from(fields);
  };

  const allFields = useMemo(() => getAllFields(applicants), [applicants]); // Use applicants here

  const allColumns = useMemo(
    () =>
      allFields.map((field) => ({
        Header: field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()),
        accessor: field,
      })),
    [allFields],
  );

  const filteredColumns = useMemo(
    () =>
      allColumns.filter(
        (col) => selectedColumns.includes(col.accessor) || col.accessor === 'actions',
      ),
    [allColumns, selectedColumns],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter, selectedRowIds },
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      columns: filteredColumns,
      data: applicants,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <input type="checkbox" {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <input type="checkbox" {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
        {
          Header: 'Actions',
          accessor: 'actions',
          Cell: ({ row }) => (
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setSelectedApplicant(row.original)}
            >
              Details
            </button>
          ),
        },
      ]);
    },
  );

  const handleExport = (exportAll = false) => {
    const headers = filteredColumns
      .filter((col) => col.accessor !== 'actions' && col.accessor !== 'selection')
      .map((col) => ({
        label: col.Header,
        key: col.accessor,
      }));

    const data = exportAll
      ? applicants.map((applicant) => {
          const row = {};
          headers.forEach((header) => {
            row[header.key] = applicant[header.key]?.toString() || 'N/A';
          });
          return row;
        })
      : selectedFlatRows.map((row) => {
          const rowData = {};
          headers.forEach((header) => {
            rowData[header.key] = row.original[header.key]?.toString() || 'N/A';
          });
          return rowData;
        });

    return { data, headers };
  };

  const toggleColumnModal = () => {
    setIsColumnModalOpen(!isColumnModalOpen);
  };

  const handleColumnChange = (accessor) => {
    setSelectedColumns((prev) =>
      prev.includes(accessor) ? prev.filter((col) => col !== accessor) : [...prev, accessor],
    );
  };

  return (
    <div>
      <div className={`container mx-auto p-6 ${selectedApplicant ? 'blur-sm' : ''}`}>
        <div className="mx-auto bg-white rounded-lg shadow-md max-w-screen-xl px-4 sm:px-6 lg:px-5 py-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Total Applications: {applicants.length}</h2>
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search by name or email"
                value={globalFilter || ''}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1"
              />
              <button
                onClick={toggleColumnModal}
                className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                <FaColumns /> Columns
              </button>
            </div>
          </div>

          {applicants.length > 0 ? (
            <div className="overflow-x-auto">
              <table
                {...getTableProps()}
                className="min-w-full table-auto border-collapse bg-white border border-gray-200 rounded-lg"
              >
                <thead className="bg-gray-100">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                          className="border border-gray-200 px-4 py-2 text-left"
                          key={column.id}
                        >
                          {column.render('Header')}
                          <span>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <FaSortDown />
                              ) : (
                                <FaSortUp />
                              )
                            ) : (
                              <FaSort />
                            )}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} className="hover:bg-gray-50" key={row.id}>
                        {row.cells.map((cell) => (
                          <td
                            {...cell.getCellProps()}
                            className="border border-gray-200 px-4 py-2"
                            key={cell.column.id}
                          >
                            {cell.render('Cell')}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <button
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                    className="px-3 py-1 rounded bg-gray-200"
                  >
                    {'<<'}
                  </button>{' '}
                  <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    className="px-3 py-1 rounded bg-gray-200"
                  >
                    {'<'}
                  </button>{' '}
                  <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    className="px-3 py-1 rounded bg-gray-200"
                  >
                    {'>'}
                  </button>{' '}
                  <button
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                    className="px-3 py-1 rounded bg-gray-200"
                  >
                    {'>>'}
                  </button>{' '}
                  <span>
                    Page{' '}
                    <strong>
                      {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                  </span>
                  <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                    className="border border-gray-300 rounded px-2 py-1"
                  >
                    {[10, 20, 30, 40, 50].map((size) => (
                      <option key={size} value={size}>
                        Show {size}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <CSVLink
                    data={handleExport(true).data}
                    headers={handleExport(true).headers}
                    filename={'applicants.csv'}
                    className="px-3 py-1 rounded bg-blue-500 text-white mr-2"
                  >
                    Export All
                  </CSVLink>
                  {Object.keys(selectedRowIds).length > 0 ? (
                    <CSVLink
                      data={handleExport().data}
                      headers={handleExport().headers}
                      filename={'selected_applicants.csv'}
                      className="px-3 py-1 rounded bg-green-500 text-white"
                    >
                      Export Selected
                    </CSVLink>
                  ) : (
                    <button
                      className="px-3 py-1 rounded bg-gray-300 text-white cursor-not-allowed"
                      disabled
                    >
                      Export Selected
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center">No applicants available.</p>
          )}
        </div>
      </div>

      {isColumnModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 max-h-[80vh] overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Select Columns</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {allFields
                .filter((field) => !['User', 'Course', 'cohort', 'user', 'CourseId', 'cohortId', 'updatedAt'].includes(field)) // Exclude unwanted fields
                .map((field) => (
                  <label key={field} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedColumns.includes(field)}
                      onChange={() => handleColumnChange(field)}
                      className="form-checkbox"
                    />
                    <span>
                      {field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                    </span>
                  </label>
                ))}
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={toggleColumnModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={toggleColumnModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedApplicant && (
        <ApplicantDetailsModal
          applicant={{ ...selectedApplicant, testScore: selectedApplicant.testScore || 'N/A' }}
          onClose={() => setSelectedApplicant(null)}
        />
      )}
    </div>
  );
};

export default ApplicantsTable;
