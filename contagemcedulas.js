while (valorSaque >= 20) {
        notas20++;        // Conta mais uma nota de 20
        valorSaque -= 20; // Subtrai 20 do valor restante
    }

    // TODO: Retire notas de 10 enquanto possível.
    while (valorSaque >= 10) {
        notas10++;        // Conta mais uma nota de 10
        valorSaque -= 10; // Subtrai 10 do valor restante
    }