export class Usuario {
  constructor(
    private nome: string,
    private idade: number,
  ) {}

  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }

 ;
  }
