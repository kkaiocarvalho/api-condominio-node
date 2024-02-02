import { openDb } from '../configdb.js';

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Morador (id INTEGER PRIMARY KEY, nome TEXT, cpf LONG, telefone LONG, bloco INTEGER, apartamento INTEGER)');
    });
}

export async function insertMorador(req, res) {
    let morador = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Morador (nome, cpf, telefone, bloco, apartamento) VALUES (?,?,?,?,?)', [morador.nome, morador.cpf, morador.telefone, morador.bloco, morador.apartamento]);
    });
    res.json({"statusCode": 200});
}

export async function updateMorador(req, res) {
    let morador = req.body;
    openDb().then(db => {
        db.run('UPDATE Morador SET nome=?, cpf=?, telefone=?, bloco=?, apartamento=? WHERE id=?', [morador.nome, morador.cpf, morador.telefone, morador.bloco, morador.apartamento, morador.id]);
    });
    res.json({"statusCode": 200});
}

export async function selectMoradores(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Morador')
            .then(moradores => res.json(moradores));
    });
}

export async function selectMorador(req, res) {
    let bloco = req.body.bloco;
    let apartamento = req.body.apartamento;
    openDb().then(db => {
        db.get('SELECT * FROM Morador WHERE bloco=? AND apartamento=?', [bloco, apartamento])
            .then(morador => res.json(morador));
    });
}

export async function deleteMorador(req, res) {
    let bloco = req.body.bloco;
    let apartamento = req.body.apartamento;
    openDb().then(db => {
        db.run('DELETE FROM Morador WHERE bloco=? AND apartamento=?', [bloco, apartamento])
            .then(() => {
                res.json({"statusCode": 200});
            });
    });
}
