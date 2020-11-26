export class Status {
  public static PROJECT_STATUS = [
    { code: 0, description: 'Progetto creato' },
    { code: 1, description: 'Progetto in attesa di Approvazione dal Progetto Revisore' },
    { code: 2, description: 'Progetto accettato dal Progetto Revisore' },
    { code: 3, description: 'Progetto rifiutato dal Progetto Revisore' },
    { code: 4, description: 'Progetto in attesa della Programmazione' },
    { code: 5, description: 'Progetto pronto a partire' },
    { code: 6, description: 'Progetto attivo' },
    { code: 7, description: 'Progetto in attesa' },
    { code: 8, description: 'Progetto in attesa dell\'Attività di un altro Progetto' },
    { code: 9, description: 'Progetto sospeso' },
    { code: 10, description: 'Progetto eliminato' },
    { code: 11, description: 'Progetto trasferito' },
    { code: 12, description: 'Progetto completato' }
  ];

  public static TASK_STATUS = [
    { code: 0, description: 'Attività inserita' },
    { code: 1, description: 'Attività in attesa di Approvazione dal Progetto Revisore' },
    { code: 2, description: 'Attività accettata dal Progetto Revisore' },
    { code: 3, description: 'Attività rifiutata dal Progetto Revisore' },
    { code: 5, description: 'Attività da iniziare' },
    { code: 6, description: 'Attività in corso' },
    { code: 7, description: 'Attività in attesa' },
    { code: 8, description: 'Attività in attesa di un\'altra Attività' },
    { code: 9, description: 'Attività in attesa dell\'Attività di un altro Progetto' },
    { code: 10, description: 'Attività sospesa' },
    { code: 11, description: 'Attività eliminata' },
    { code: 12, description: 'Attività completata' }
  ];
}
