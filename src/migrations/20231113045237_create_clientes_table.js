/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.raw(`
        CREATE TABLE clientes (
            id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
            nombre VARCHAR(50) NOT NULL,
            apellido_paterno VARCHAR(80) NOT NULL,
            apellido_materno VARCHAR(80) NOT NULL,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
        );
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.raw("DROP TABLE clientes");
};
