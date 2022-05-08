import { DataGrid } from '@mui/x-data-grid';

export default function ItemTable(props) {
	const { tableType, tableRows } = props ?? {};

	const fridgeColumns = [
		{
			field: "name",
			headerName: "Item Name",
			width: 130
		},
		{
			field: "barcode",
			headerName: "Barcode (ISBN-11)",
			width: 70
		},
		{
			field: "type",
			headerName: "Item Type",
			width: 70
		},
	];

	const bookColumns = [
		{
			field: "title",
			headerName: "Book Title",
			width: 130
		},
		{
			field: "author",
			headerName: "Book Author",
			width: 100
		},
		{
			field: "barcode",
			headerName: "Barcode (ISBN-11)",
			width: 70
		},
		{
			field: "type",
			headerName: "Book Type",
			width: 70
		}
	];

	console.log(tableRows, tableType)

	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={tableRows}
				columns={tableType === "Fridge" ? fridgeColumns : bookColumns}
				/>
		</div>
	)
}
