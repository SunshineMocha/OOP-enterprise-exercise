# OOP-enterprise-exercise

Modellare un gestionale di una azienda di vendite. 

Entità/Classi: 
Manager:

- Name (nome)
- Surname (cognome)
- Employees (impiegati) -> Array di Emplyee
Cosa sa fare: 

- sa calcolare gli introiti totali del reparto
    get allEarnings()
- sa fare il suo toString() con il numero degli impiegati totali, numero dei clienti totali e l'earnings

Employee (impiegato):

- Name (nome)
- Surname (cognome)
- Clients (Clienti) -> Array di Clienti

Cosa sa fare: 

- sa calcolare il suo bestClient()
- sa fare il suo toString che ritorna i dati di Employee, il numero dei clienti e quale è il suo miglior cliente

Client(cliente):

- Name (nome)
- Surname (cognome)
- Address (indirizzo)
- Orders (Ordini) -> Array di Order

Cosa sa fare: 

- sa calcolare la somma dei suoi ordini 
    get sumOfOrder()
- sa fare il suo toString() che, oltre a restituire i suoi dati mi lista tutti gli ordini passati

Order (Ordine)

- Product (Nome Prodotto)
- Quantity (Quantità)
- Unity Price (Prezzo Unitario)
Cosa sa fare: 

- sa calcolare il suo prezzo totale
    get totalPrice()
- sa fare il suo toString()

Specifiche:

- Tutti erediteranno da Person

Specifiche facoltative:

 - Person ha una dob (date) (data di nascita)
 - Person ha get age() 
 - Person ha isBirthday()
 - se è il compleanno, aggiungere nota alla string