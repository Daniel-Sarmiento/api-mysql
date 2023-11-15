/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.raw(`
        ALTER TABLE ventas 
        ADD COLUMN id_cliente INT UNSIGNED NOT NULL
        AFTER total,
        ADD CONSTRAINT id_cliente_fk
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
        DROP FOREIGN KEY id_cliente_fk,
        DROP COLUMN id_cliente;
    `)
};
