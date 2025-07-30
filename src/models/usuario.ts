export class Usuario {
  constructor(
    public nome: string,
    public idade: number,
    private senha: string
  ) {}

  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }

  verificarSenha(tentativa: string): boolean {
    return this.senha === tentativa;
  }
}