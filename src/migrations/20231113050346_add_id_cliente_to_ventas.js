/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.raw(`
        ALTER TABLE ventas 
        ADD COLUMN id_cliente INT UNSIGNED NOT NULL
        AFTER total,
        ADD CONSTRAINT FK_id_cliente
        FOREIGN KEY (id_cliente) REFERENCES clientes(id);
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.raw(`
        ALTER TABLE ventas
        DROP FOREIGN KEY FK_id_cliente,
        DROP COLUMN id_cliente;
    `)
};
