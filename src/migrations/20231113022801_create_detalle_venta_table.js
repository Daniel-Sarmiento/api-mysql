/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.raw(`
        CREATE TABLE detalle_venta (
            id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
            id_venta BIGINT(20) UNSIGNED NOT NULL,
            id_producto TINYINT(3) UNSIGNED NOT NULL,
            cantidad TINYINT(3) UNSIGNED NOT NULL,
            precio DECIMAL(20,6) UNSIGNED NOT NULL,
            subtotal DECIMAL(20,6) UNSIGNED NOT NULL,
            descuento DECIMAL(20,6) UNSIGNED NOT NULL,
            total DECIMAL(20,6) UNSIGNED NOT NULL,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id) USING BTREE,
            CONSTRAINT FK_id_venta FOREIGN KEY (id_venta) REFERENCES ventas (id),
            CONSTRAINT FK_id_producto FOREIGN KEY (id_producto) REFERENCES productos (id)
        );
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.raw("DROP TABLE detalle_venta");
};
