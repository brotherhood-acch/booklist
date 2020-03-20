$(document).ready(function() {
    var table = $('#booklist').DataTable( {
				//deferRender: true,
				buttons: [
					{extend: 'copy', exportOptions: {modifier: {page: 'current'}}},
					{extend: 'excel', exportOptions: {modifier: {page: 'current'}}},
					{extend: 'print', exportOptions: {modifier: {page: 'current'}}},
					],
				dom: 'B<"top"lfip>rt<"bottom"ip>',
				pageLength: 10,
				lengthMenu: [ 10, 20, 50 ],
				//order: [6, 'asc'],
				//rowGroup: {dataSrc: 6},
				//stateSave: true,
				//ajax: "source/booklist.txt",
        data: dataSet,
        columns: [
					{ title: "서명" },
					{ title: "저자" },
					{ title: "출판사" },
					{ title: "출판년" },
					{ title: "총서사항" },
					{ title: "주제어" },
					{ title: "기증자" },
					{ title: "유형"},
					{ title: "서가번호" },
					{ title: "등록번호" },
					{ title: "ISBN/ISSN", visible: false },
					//{ title: "한글검색용색인", visible: false },
					//{ title: "대표서명", visible: false },
        ]
		} );
		new $.fn.dataTable.FixedHeader( table );
} );
