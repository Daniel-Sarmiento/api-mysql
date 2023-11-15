/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.raw(`
        CREATE TABLE ventas (
            id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
            subtotal DECIMAL(20,6) UNSIGNED NOT NULL,
            descuento DECIMAL(20,6) UNSIGNED NOT NULL,
            total DECIMAL(20,6) UNSIGNED NOT NULL,
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
    return knex.raw("DROP TABLE ventas");
};
