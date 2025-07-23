// material
const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR_2hDXdq9voHL6JSHrXZ5x5NOjIpD0KTiFVBPQaWcGY991glW6hQVyRWOHbwZn9Ci8ykb4CJqTm54e/pub?gid=1871615310&single=true&output=csv";

// cronograma
const csvURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS6s0IS4eWGbwNGNmpR6YvCwxqVKj9HbXNNOwZbjF31b2alNhzK6Fkt3-oNUsaJ8Gogvrtf0QSi6WeB/pub?gid=1028654793&single=true&output=csv";

const eixosMap = {
  "IB": "Informática Básica",
  "calc": "Pré-Cálculo",
  "FIS": "Física",
  "QI": "Química",
  "BIO": "Biologia",
  "PG": "Programação",
  "Informática Básica": "ib",
  "Pré-Cálculo": "calc",
  "Física": "fis",
  "Química": "qi",
  // "Biologia": "bio",
  "Programação": "pg",
  "Almoço": "other",
  "-": "other",
  "Feriado": "feriado",
  "Aula inaugural": "ai"
};

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    return text
      .trim()
      .split("\n")
      .map(row => {
        const regex = /"(.*?)"|([^,]+)/g;
        const values = [];
        let match;
        while ((match = regex.exec(row)) !== null) {
          values.push((match[1] ?? match[2]).trim());
        }
        return values;
      })
      .filter(row => row.some(cell => cell !== ""));
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return [];
  }
}

async function loadData() {
  const dataArray = await fetchData(url);
  if (!dataArray.length) return;

  let html_pag = '';
  let i = 0;

  while (i < dataArray.length) {
    const eixo = dataArray[i]?.[0]?.trim() || '';
    const qtdAulas = parseInt(dataArray[i]?.[1] || 0);

    const nomeEixoCompleto = eixosMap[eixo] || eixo;
    const dataInicio = dataArray[i + 1]?.[0] || '';

    let elementos_lista = '';

    for (let j = 0; j < qtdAulas; j++) {
      const linha = dataArray[i + 3 + j] || [];
      const [titulo = '', subtitulo = '', descricao = '', materiaisStr = ''] = linha;

      let materiaisHTML = '';
      if (materiaisStr.trim()) {
        const partes = materiaisStr.split("|");
        for (let k = 0; k < partes.length; k += 2) {
          const nome = partes[k]?.trim();
          const link = partes[k + 1]?.trim();
          if (nome && link) {
            materiaisHTML += `<a href="${link}" target="_blank"><p>${nome}</p></a>`;
          }
        }
      }

      elementos_lista += `
        <div class="aula">
          <div class="titulo">
            <h1>${titulo}</h1>
            <h2>${subtitulo}</h2>
          </div>
          <div class="assunto">
            <div><p>${descricao}</p></div>
            <div class="material">${materiaisHTML}</div>
          </div>
        </div>
      `;
    }

    html_pag += `
      <div>
        <div class="topico">
          <img src="./assets/logo-${eixo}.svg" onerror="this.style.display='none';"/>
          <h1>Eixo de ${nomeEixoCompleto} – a partir de ${dataInicio}</h1>
        </div>
        <div class="conteudo">
          <div>${elementos_lista}</div>
        </div>
      </div>
    `;

    i += qtdAulas + 3;
  }

  document.getElementById("programacao").innerHTML = html_pag;
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("hidden-content").hidden = false;
}



function carregarCSV() {
    fetch(csvURL)
        .then(response => response.text())
        .then(csvData => {
            const linhas = csvData.trim().split('\n').map(l => l.split(',').map(c => c.trim()));
            const tableHead = document.querySelector('#tabela thead');
            const tableBody = document.querySelector('#tabela tbody');

            tableHead.innerHTML = '';
            tableBody.innerHTML = '';

            const headers = linhas[1].slice(2); // ignora Semana e Horário
            const headRow = document.createElement('tr');

            const semanaTh = document.createElement('th');
            semanaTh.textContent = 'Semana';
            headRow.appendChild(semanaTh);

            const horarioTh = document.createElement('th');
            horarioTh.textContent = 'Horário';
            headRow.appendChild(horarioTh);

            headers.forEach(dia => {
                const th = document.createElement('th');
                th.textContent = dia;
                headRow.appendChild(th);
            });

            tableHead.appendChild(headRow);

            let semanaAtual = '';
            let linhasGrupo = [];

            for (let i = 2; i < linhas.length; i++) {
                const linha = linhas[i];
                const nomeSemana = linha[0];

                if (nomeSemana && nomeSemana !== semanaAtual) {
                    if (linhasGrupo.length > 0) {
                        adicionarGrupo(semanaAtual, linhasGrupo, tableBody);
                        linhasGrupo = [];
                    }
                    semanaAtual = nomeSemana;
                }

                linhasGrupo.push(linha);
            }

            if (linhasGrupo.length > 0) {
                adicionarGrupo(semanaAtual, linhasGrupo, tableBody);
            }
        })
        .catch(error => {
            console.error('Erro ao carregar CSV:', error);
        });
}

function adicionarGrupo(semana, linhas, tableBody) {
    linhas.forEach((linha, index) => {
        const tr = document.createElement('tr');

        // coluna Semana (só na primeira linha do grupo)
        if (index === 0) {
            const tdSemana = document.createElement('td');
            tdSemana.textContent = semana;
            tdSemana.rowSpan = linhas.length;
            tdSemana.classList.add('semana-coluna');
            tr.appendChild(tdSemana);
        }

        // coluna Horário
        const tdHorario = document.createElement('td');
        tdHorario.textContent = linha[1];
        tdHorario.classList.add('horario');
        tr.appendChild(tdHorario);

        // colunas de conteúdo (dias)
        for (let i = 2; i < linha.length; i++) {
            const td = document.createElement('td');
            const valor = linha[i];
            td.textContent = valor;

            if (valor.toLowerCase() === 'almoço' || valor === '-') {
                td.classList.add('other'); // cor cinza, neutra
            } else if (valor) {
                td.classList.add('destaque-aula'); // azul automático para qualquer aula
            }

            tr.appendChild(td);
        }

        tableBody.appendChild(tr);
    });
}


// Inicialização
document.getElementById("hidden-content").hidden = true;
loadData();
carregarCSV();
