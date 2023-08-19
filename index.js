class Conta {
  constructor(nome, cpf, saldo, telefone, identidade, senha, agencia) {
    /* Criar um id */
    const saldoNumber = Number(saldo);
    
    if (isNaN(saldoNumber)) {
      throw new Error("Saldo precisa ser um number.");
    }
    if (saldoNumber < 0) {
      throw new Error("Saldo precisa ser positivo.");
    }
    this.nome = nome;
    this.cpf = cpf;
    this.saldo = saldoNumber;
    this.telefone = telefone;class Conta {
      constructor(nome, cpf, saldo, telefone, identidade, senha, agencia) {
        /* Criar um id */
        const saldoNumber = Number(saldo);
        
        if (isNaN(saldoNumber)) {
          throw new Error("Saldo precisa ser um number.");
        }
        if (saldoNumber < 0) {
          throw new Error("Saldo precisa ser positivo.");
        }
        this._nome = nome;
        this.cpf = cpf;
        this.saldo = saldoNumber;
        this.telefone = telefone;
        this.identidade = identidade;
        this.senha = senha;
        this.agencia = agencia;
      }
    }
    
    const conta1 = new Conta("Matheus", "123.456.789-10", 1000, "11999999999", "123456789", "123", "123");
    
    console.log(conta1);
    this.identidade = identidade;
    this.senha = senha;
    this.agencia = agencia;
  }

  get nome() {
    return this._nome;
  }

  sacar(valor) {
    
    if(valor > this.saldo){
      throw new Error("Saldo insuficiente.");
    }
    if(typeof valor !== "number"){
      throw new Error("Valor precisa ser um number.");
    }

    this.saldo -= valor;
    return {
      novoSaldo: this.saldo,
      valorSacado: valor
    }

  }

  depositar(valor) {
    if(typeof valor !== "number"){
      throw new Error("Valor precisa ser um number.");
    }
    this.saldo += valor;
    return {
      novoSaldo: this.saldo,
      valorDepositado: valor
    }
  }
  pix(contaDestino, valor){
    if(typeof valor !== "number"){
      throw new Error("Valor precisa ser um number.");
    }
    contaDestino.depositar += valor;
    this.sacar (valor);
    return `a conta ${contaDestino.nome} recebeu ${valor} reais de ${this.nome}`;
  }
}

const conta1 = new Conta("Matheus", "123.456.789-10", 1000, "11999999999", "123456789", "123", "123");

const conta2 = new Conta("Gabrielzin", "123.456.789-10", 1000, "11999999999", "123456789", "123", "123");

conta1.nome

console.log(conta1.nome);

/* os getter e setter sao uma forma de acessar os atributos de um objeto de uma forma controlada e para usarmos getter e setters a gente faz da mesma forma que um metodo */