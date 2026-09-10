'use strict';

QUnit.module("Тестируем функцию compressObject", function () {
    QUnit.test("Сжатие объекта с null, undefined и пустыми строками", function (assert) {
        const result = compressObject({
            name: "Андрей",
            age: null,
            city: "",
            country: "Россия",
            occupation: undefined
        });

        assert.deepEqual(result, { name: "Андрей", country: "Россия" }, "Должны остаться только ключи с ненулевыми значениями.");
    });

    QUnit.test("Работает с объектом без ненулевых значений", function (assert) {
        const result = compressObject({
            a: null,
            b: undefined,
            c: "",
        });

        assert.deepEqual(result, {}, "Объект без ненулевых значений должен вернуть пустой объект.");
    });

    QUnit.test("Работает с пустым объектом", function (assert) {
        const result = compressObject({});

        assert.deepEqual(result, {}, "Пустой объект должен вернуть пустой объект.");
    });
    // Мои тесты
    QUnit.test("работает с объектом null", function (assert) {
        const result = compressObject(null);

        assert.deepEqual(result, null, "Объект null должен вернуть null.")
    });
    QUnit.test("Работает с объектом с вложенностью", function (assert) {
        const result = compressObject({
            a: {
                c: undefined,
                d: null,
            },
            b: undefined,
            c: "",
        });

        assert.deepEqual(result, {}, "Объект с вложенностью обрабатывается по тем же правилам");
    });
});
