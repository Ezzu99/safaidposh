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
			width: 140
		},
		{
			field: "type",
			headerName: "Item Type",
			width: 110
		},
	];

	const bookColumns = [
		{
			field: "title",
			headerName: "Book Title",
			width: 200
		},
		{
			field: "author",
			headerName: "Book Author",
			width: 150
		},
		{
			field: "barcode",
			headerName: "Barcode (ISBN-11)",
			width: 140
		},
		{
			field: "type",
			headerName: "Book Type",
			width: 90
		}
	];

	console.log(tableRows, tableType)

	return (
		<div style={{ height: '80vh', width: '100%' }}>
			<DataGrid
				rows={tableRows}
				columns={tableType === "Fridge" ? fridgeColumns : bookColumns}
				/>
		</div>
	)
}
