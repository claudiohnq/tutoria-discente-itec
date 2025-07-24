const csvURL = 'https://docs.google.com/spreadsheets/d/1MF1QzRq2bp1PCxBDWcEQLSeqy1OqeUtK12kVnCNCBrU/edit?gid=1712268835#gid=1712268835';

function carregarCSV() {
    const eixosMap = {
        "Informática Básica": "ib",
        "Pré-Cálculo": "pc",
        "Física": "fi",
        "Química": "qi",
        "Biologia": "bio",
        "Programação": "pg",
        "Almoço": "other",
        "-": "other",
        "Feriado" : "feriado",
        "Aula inaugural" : "ai"
    };
    fetch(csvURL)
        .then(response => response.text())
        .then(csvData => {
            const rows = csvData.split('\n').map(row => row.split(','));

            const tableHead = document.querySelector('#tabela thead');
            const tableBody = document.querySelector('#tabela tbody');

            tableHead.innerHTML = '';
            tableBody.innerHTML = '';

            const theadRow = document.createElement('tr');
            rows[1].forEach(cell => {
                const th = document.createElement('th');
                th.textContent = cell.trim();
                theadRow.appendChild(th);
            });
            tableHead.appendChild(theadRow);

            let currentWeekTitle = ''; 
            let rowSpanCount = 0; 
            let firstRowForWeek; 

            rows.slice(2).forEach((row, rowIndex, array) => {
                if (row[0].trim() !== '') {  
                    currentWeekTitle = row[0].trim();
                    rowSpanCount = 1;

                    for (let i = rowIndex + 1; i < array.length; i++) {
                        if (array[i][0].trim() === '') {
                            rowSpanCount++;
                        } else {
                            break;
                        }
                    }

                    firstRowForWeek = document.createElement('td');
                    firstRowForWeek.textContent = currentWeekTitle;
                    firstRowForWeek.rowSpan = rowSpanCount; 
                }

                const tr = document.createElement('tr');

                if ([5, 11, 17].includes(rowIndex)) {
                    tr.classList.add('linha-especial');
                }

                if (rowIndex === 0 || row[0].trim() !== '') {
                    tr.appendChild(firstRowForWeek);
                    if (![5, 11, 17].includes(rowIndex)){
                        tr.classList.add('time');
                    }
                }

                row.slice(1).forEach(cell => {
                    const td = document.createElement('td');
                    td.textContent = cell.trim();

                    if (eixosMap[cell.trim()]) {
                        td.classList.add(eixosMap[cell.trim()]);
                    }else if (![5, 11, 17].includes(rowIndex)){
                        td.classList.add('time');
                    }

                    tr.appendChild(td);
                });

                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Erro ao carregar o CSV:', error));
}

carregarCSV()
