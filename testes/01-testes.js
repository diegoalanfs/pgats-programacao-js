/**
 
  describe -> agrupador de testes
  it       -> implementação do teste
  
  TDD
    crio o teste
    vejo o teste falhar
    crio a implementaçào para o teste passar
    rodo o teste denovo
    refatoro o código para melhorar ...

    ASSERTION/ASSERCAO
      verificar se um comportamento está de acordo com o esperado

 */

import { exibirNomeDogFormatado } from '../conceitos/testes-de-unidade.js'
import assert from 'node:assert'

describe('Testes do Projeto', () => {
    it(`deve exibir o nome do dog com letras maiúsculas`, () => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')

        // verifique se: <valor atual> É IGUAL A <valor esperado>
    })

    it('primeiro teste', () => {

    })

    it('segundo teste', () => {
        throw new Error()
    })

})