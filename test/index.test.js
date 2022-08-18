const pegaArquivo = require('../index');

const arrayResult = [
    {
        FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList"
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    });
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('C:\\Users\\Dudu\\Desktop\\Projetos\\alura-restapi\\test\\texto1.md');
        expect(resultado).toEqual(arrayResult);
    });
    it("deve retornar mensagem 'Não há links'", async () => {
        const resultado = await pegaArquivo('C:\\Users\\Dudu\\Desktop\\Projetos\\alura-restapi\\test\\texto2.md');
        expect(resultado).toBe("Não há links");
    })
});