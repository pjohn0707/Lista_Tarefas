import React, { useState, useCallback } from 'react';

const ListaDeTarefas = () => {
    const [tarefas, setTarefas] = useState([]);
    const [tarefa, setTarefa] = useState('');

    // Função para adicionar uma nova tarefa à lista
    const adicionarTarefa = useCallback(() => {
        if (tarefa.trim() !== '') {
            setTarefas((tarefasAnteriores) => [...tarefasAnteriores, tarefa]);
            setTarefa('');
        }
    }, [tarefa]);

    // Função para atualizar o estado da tarefa
    const mudancaNoInput = (e) => {
        setTarefa(e.target.value);
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input type="text" value={tarefa} onChange={mudancaNoInput} placeholder="Digite uma nova tarefa" />
            <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
            <ul>
                {tarefas.map((tarefa, indice) => (
                    <li key={indice}>{tarefa}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListaDeTarefas;
