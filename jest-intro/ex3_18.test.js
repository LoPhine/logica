const multiplica = require('./ex3_18')

test("A multiplicação de 5 * 5 tem que ser igual a 25", () => {
    expect(multiplica(5,5)).toBe(25)
})